import { NextResponse } from "next/server";
import { inspectUiState } from "@/lib/ai/inspectUiState";
import { qaInspectionResultSchema } from "@/lib/ai/schema";
import { mockInspectionResult } from "@/lib/data/mockInspectionResult";
import { inspectionTarget } from "@/lib/data/inspectionTarget";

export async function POST() {
  if (process.env.ENABLE_LIVE_AI !== "true") {
    const parsedResult =
      qaInspectionResultSchema.safeParse(mockInspectionResult);

    if (!parsedResult.success) {
      return NextResponse.json(
        { error: "Mock inspection result does not match schema." },
        { status: 500 },
      );
    }

    return NextResponse.json(parsedResult.data);
  }

  if (!process.env.AI_GATEWAY_API_KEY) {
    return NextResponse.json(
      { error: "Missing AI Gateway API key." },
      { status: 500 },
    );
  }

  try {
    const result = await inspectUiState(inspectionTarget);
    return NextResponse.json({ ...result, targetId: inspectionTarget.id });
  } catch (error) {
    console.error("Live inspection failed", error);

    const message =
      error instanceof Error ? error.message : "Unknown live inspection error.";

    return NextResponse.json(
      {
        error: "Live inspection failed.",
        details: process.env.NODE_ENV === "development" ? message : undefined,
      },
      { status: 500 },
    );
  }
}
