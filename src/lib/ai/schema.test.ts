import { describe, expect, it } from "vitest";
import { mockInspectionResult } from "@/lib/data/mockInspectionResult";
import { qaInspectionResultSchema } from "@/lib/ai/schema";

describe("qaInspectionResultSchema", () => {
  it("accepts the mock inspection result", () => {
    const result = qaInspectionResultSchema.safeParse(mockInspectionResult);

    expect(result.success).toBe(true);
  });

  it("rejects unsupported issue types", () => {
    const result = qaInspectionResultSchema.safeParse({
      targetId: "checkout-payment-error",
      summary: "Invalid result.",
      issues: [
        {
          id: "invalid-issue",
          issueType: "seo",
          severity: "high",
          affectedElement: "Card number input",
          evidence: {
            screenshotObservation: "The input appears without a visible label.",
            domEvidence: "The input has no associated label.",
            accessibilityCheckReference: "label: Form element does not have an accessible name.",
          },
          userImpact: "Users may not understand the field.",
          suggestedFix: "Add a label.",
        },
      ],
    });

    expect(result.success).toBe(false);
  });

  it("rejects invalid severity values", () => {
    const result = qaInspectionResultSchema.safeParse({
      targetId: "checkout-payment-error",
      summary: "Invalid result.",
      issues: [
        {
          id: "invalid-severity",
          issueType: "accessibility",
          severity: "critical",
          affectedElement: "Card number input",
          evidence: {
            screenshotObservation: "The input appears without a visible label.",
            domEvidence: "The input has no associated label.",
            accessibilityCheckReference: "label: Form element does not have an accessible name.",
          },
          userImpact: "Users may not understand the field.",
          suggestedFix: "Add a label.",
        },
      ],
    });

    expect(result.success).toBe(false);
  });
});
