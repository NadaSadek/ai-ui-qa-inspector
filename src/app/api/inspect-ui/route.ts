import { NextResponse } from "next/server";
import { mockInspectionResult } from "@/lib/data/mockInspectionResult";
import { qaInspectionResultSchema } from "@/lib/ai/schema";

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

  return NextResponse.json(
    { error: "Live AI mode is not implemented yet." },
    { status: 501 },
  );
}
