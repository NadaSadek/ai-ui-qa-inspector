import { NextResponse } from "next/server";
import { inspectUiState } from "@/lib/ai/inspectUiState";
import { inspectionRequestSchema, qaInspectionResultSchema } from "@/lib/ai/schema";
import { mockInspectionResult } from "@/lib/data/mockInspectionResult";
import { assertValidInspectionResultEvidence } from "@/lib/ai/validateInspectionResult";

export async function POST(request: Request) {
  const body = await request.json();
  const parsedRequest = inspectionRequestSchema.safeParse(body);

  if (!parsedRequest.success) {
    return NextResponse.json({ error: "Invalid inspection request." }, { status: 400 });
  }

  const inspectionInput = parsedRequest.data;

  if (process.env.ENABLE_LIVE_AI !== "true") {
    const mockResult = mockInspectionResult[inspectionInput.id];

    if (!mockResult) {
      return NextResponse.json(
        { error: "No mock inspection result found for this target." },
        { status: 404 }
      );
    }

    const parsedResult = qaInspectionResultSchema.safeParse(mockResult);

    if (!parsedResult.success) {
      return NextResponse.json(
        { error: "Mock inspection result does not match schema." },
        { status: 500 }
      );
    }

    try {
      assertValidInspectionResultEvidence(parsedResult.data);
    } catch (error) {
      console.error(error);

      return NextResponse.json(
        { error: "Mock inspection result failed evidence validation." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ...parsedResult.data,
      targetId: inspectionInput.id,
    });
  }

  if (!process.env.AI_GATEWAY_API_KEY) {
    return NextResponse.json({ error: "Missing AI Gateway API key." }, { status: 500 });
  }

  try {
    const result = await inspectUiState(inspectionInput);

    const parsedResult = qaInspectionResultSchema.safeParse(result);

    if (!parsedResult.success) {
      return NextResponse.json(
        { error: "Live inspection result does not match schema." },
        { status: 500 }
      );
    }

    try {
      assertValidInspectionResultEvidence(parsedResult.data);
    } catch (error) {
      console.error(error);

      return NextResponse.json(
        {
          error:
            "Live inspection result failed evidence validation. Try again or review the AI output.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      ...result,
      targetId: inspectionInput.id,
    });
  } catch (error) {
    console.error("Live inspection failed", error);

    return NextResponse.json({ error: "Live inspection failed." }, { status: 500 });
  }
}
