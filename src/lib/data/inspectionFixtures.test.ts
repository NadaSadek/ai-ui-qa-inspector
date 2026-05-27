import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { qaInspectionResultSchema } from "@/lib/ai/schema";
import { inspectionTargets } from "@/lib/data/inspectionTargets";
import { mockInspectionResult } from "@/lib/data/mockInspectionResult";

describe("inspection fixture data", () => {
  it("has a mock inspection result for every inspection target", () => {
    const targetIds = inspectionTargets.map((target) => target.id).sort();
    const mockResultIds = Object.keys(mockInspectionResult).sort();

    expect(mockResultIds).toEqual(targetIds);
  });

  it("keeps mock result targetId aligned with the map key", () => {
    for (const [targetId, result] of Object.entries(mockInspectionResult)) {
      expect(result.targetId).toBe(targetId);
    }
  });

  it("keeps mock inspection results compatible with the output schema", () => {
    for (const [targetId, result] of Object.entries(mockInspectionResult)) {
      const parsed = qaInspectionResultSchema.safeParse(result);

      expect(parsed.success, targetId).toBe(true);
    }
  });

  it("points each inspection target to an existing local screenshot", () => {
    for (const target of inspectionTargets) {
      const screenshotPath = path.join(
        process.cwd(),
        "public",
        target.screenshotSrc.replace(/^\//, "")
      );

      expect(fs.existsSync(screenshotPath), target.id).toBe(true);
    }
  });
});
