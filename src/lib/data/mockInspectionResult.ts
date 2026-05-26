import type { QAInspectionResult } from "@/lib/ai/schema";

export const mockInspectionResult: QAInspectionResult = {
  targetId: "checkout-payment-error",
  summary:
    "Card number input lacks an accessible label, and the inline payment error is not semantically connected to the field for assistive technologies.",

  issues: [
    {
      id: "missing-card-number-label",
      title: "Missing Card Number Label",
      issueType: "accessibility",
      severity: "high",
      affectedElement: "Card number input field",
      evidence: {
        screenshotObservation:
          "Card number input is visible with placeholder text 'Card number' and no visible label.",
        domEvidence:
          '<input id="card-number" name="cardNumber" placeholder="Card number" autocomplete="cc-number" />',
      },
      userImpact:
        "Users relying on assistive technologies may not know the purpose of the field, making the payment form harder to complete.",
      suggestedFix:
        'Add a visible label for the card number field and associate it with the input, for example <label for="card-number">Card number</label>. Use aria-label or aria-labelledby only if a visible label is not feasible.',
    },
    {
      id: "payment-error-semantics",
      title: "Payment Error Semantics",
      issueType: "accessibility",
      severity: "medium",
      affectedElement: "Payment error message",
      evidence: {
        screenshotObservation:
          "Error message 'Payment failed. Try again.' is displayed in a pale red message area beneath the input.",
        domEvidence: '<p class="error">Payment failed. Try again.</p>',
      },
      userImpact:
        "The error message may not be announced reliably by assistive technologies and may not be clearly linked to the card number input.",
      suggestedFix:
        'Give the error message a stable id and reference it from the input with aria-describedby. Set aria-invalid="true" on the input while the error is present. If the message appears dynamically after submission, expose it with role="alert" or an appropriate aria-live region.',
    },
  ],
};
