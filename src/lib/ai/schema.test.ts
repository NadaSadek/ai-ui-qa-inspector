import { describe, expect, it } from "vitest";
import { qaInspectionResultSchema } from "@/lib/ai/schema";
import { inspectionTargets } from "@/lib/data/inspectionTargets";
import { mockInspectionResult } from "@/lib/data/mockInspectionResult";

describe("mock inspection results", () => {
  it("matches the QA inspection result schema", () => {
    for (const [targetId, result] of Object.entries(mockInspectionResult)) {
      const parsed = qaInspectionResultSchema.safeParse(result);

      expect(parsed.success, targetId).toBe(true);
    }
  });

  it("has one mock result for every inspection target", () => {
    const targetIds = inspectionTargets.map((target) => target.id);
    const mockResultIds = Object.keys(mockInspectionResult);

    expect(mockResultIds.sort()).toEqual(targetIds.sort());
  });

  it("keeps mock result targetId aligned with the map key", () => {
    for (const [targetId, result] of Object.entries(mockInspectionResult)) {
      expect(result.targetId).toBe(targetId);
    }
  });
});
