// src/lib/data/mock-inspection-result.ts

import type { QAInspectionResult } from "@/lib/ai/schema";

export const mockInspectionResult: QAInspectionResult = {
  targetId: "checkout-payment-error",
  summary:
    "The checkout form has accessibility and recovery-feedback issues that may make payment completion harder, especially for assistive technology users.",

  issues: [
    {
      id: "missing-card-input-label",
      issueType: "accessibility",
      severity: "high",
      affectedElement: "Card number input",
      evidence: {
        screenshotObservation:
          "The card field appears without a persistent visible label. The field identity depends on placeholder text.",
        domEvidence:
          "The input has placeholder='Card number' but no associated label, aria-label, or aria-labelledby.",
        accessibilityCheckReference:
          "label: Form element does not have an accessible name.",
      },
      userImpact:
        "Screen reader users may not understand what information the field requires, and sighted users lose the field hint after typing.",
      suggestedFix:
        "Add a visible label associated with the input using htmlFor='card-number'. Do not rely on placeholder text as the only label.",
    },
    {
      id: "error-not-associated-with-field",
      issueType: "state_feedback",
      severity: "medium",
      affectedElement: "Payment error message",
      evidence: {
        screenshotObservation:
          "The error message appears as a general form message and does not visually point to a specific field or recovery step.",
        domEvidence:
          "The error is rendered as a paragraph after the input, but the card input does not reference it with aria-describedby.",
        accessibilityCheckReference: null,
      },
      userImpact:
        "Users may not know whether the card number, card status, payment processor, or another field caused the failure.",
      suggestedFix:
        "Use a more specific recovery message and associate the error with the relevant field using aria-describedby.",
    },
    {
      id: "payment-recovery-copy-too-vague",
      issueType: "ux_clarity",
      severity: "medium",
      affectedElement: "Payment failure recovery copy",
      evidence: {
        screenshotObservation:
          "The message says 'Payment failed. Try again.' but does not explain what the user should check or change.",
        domEvidence:
          "The error text is generic and does not include recovery guidance.",
        accessibilityCheckReference: null,
      },
      userImpact:
        "Users may repeatedly retry without understanding whether they need to check card details, use another card, or contact their bank.",
      suggestedFix:
        "Replace the generic message with actionable copy, such as 'We could not process this card. Check the card details or try another payment method.'",
    },
  ],
};
