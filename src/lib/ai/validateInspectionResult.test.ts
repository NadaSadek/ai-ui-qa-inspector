import { QAInspectionResult } from "./schema";
import { getInspectionResultValidationErrors } from "./validateInspectionResult";
import { describe, expect, it } from "vitest";

const validResult: QAInspectionResult = {
  targetId: "data-table-unclear-headers",
  summary: "The table has a semantic header issue.",
  issues: [
    {
      id: "table-headers-not-semantic",
      title: "Table headers should use th elements",
      issueType: "accessibility",
      severity: "medium",
      affectedElement: "Invoice table header row",
      evidence: {
        visualObservation:
          "The table header shows column titles: Customer, Status, Amount, and Date.",
        domEvidence:
          "<thead><tr><td>Customer</td><td>Status</td><td>Amount</td><td>Date</td></tr></thead>",
      },
      userImpact:
        "Screen reader users may not get proper column header context when navigating invoice rows.",
      suggestedFix: 'Replace the header cells with <th scope="col"> elements.',
    },
  ],
};

describe("validateInspectionResult", () => {
  it("allows visual observations that only describe visible UI facts", () => {
    expect(getInspectionResultValidationErrors(validResult)).toEqual([]);
  });

  it("flags visual observations that include DOM implementation details", () => {
    const invalidResult: QAInspectionResult = {
      ...validResult,
      issues: [
        {
          ...validResult.issues[0],
          evidence: {
            ...validResult.issues[0].evidence,
            visualObservation: "The header row uses td elements instead of th elements.",
          },
        },
      ],
    };

    expect(getInspectionResultValidationErrors(invalidResult)).toEqual([
      expect.stringContaining("table-headers-not-semantic"),
    ]);
  });

  it("flags visual observations that include accessibility behavior claims", () => {
    const invalidResult: QAInspectionResult = {
      ...validResult,
      issues: [
        {
          ...validResult.issues[0],
          evidence: {
            ...validResult.issues[0].evidence,
            visualObservation: "Screen readers may not announce the table headers correctly.",
          },
        },
      ],
    };

    expect(getInspectionResultValidationErrors(invalidResult)).toEqual([
      expect.stringContaining("table-headers-not-semantic"),
    ]);
  });
});
