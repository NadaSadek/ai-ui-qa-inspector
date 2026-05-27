import type { QAInspectionResult } from "@/lib/ai/schema";

export const mockInspectionResult: Record<string, QAInspectionResult> = {
  "checkout-paymenr-error": {
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
  },
  "login-unclear-error": {
    targetId: "login-unclear-error",
    summary:
      "The login form shows a generic error state that does not clearly explain what failed or how the user can recover.",
    issues: [
      {
        id: "generic-login-error-copy",
        title: "Generic login error copy",
        issueType: "ux_clarity",
        severity: "medium",
        affectedElement: "Login error message",
        evidence: {
          screenshotObservation:
            "The form shows a red error message that says 'Something went wrong.'",
          domEvidence: '<p class="error">Something went wrong.</p>',
        },
        userImpact:
          "Users do not know whether the email, password, account status, or server caused the failed sign-in attempt.",
        suggestedFix:
          "Use a more specific recovery message, such as 'Email or password is incorrect. Check your details and try again.' Avoid exposing sensitive account-existence information.",
      },
      {
        id: "login-error-not-associated-with-form",
        title: "Login error is not associated with the form fields",
        issueType: "state_feedback",
        severity: "medium",
        affectedElement: "Login error message",
        evidence: {
          screenshotObservation:
            "The error appears below the password field, but the message does not identify which field or action needs attention.",
          domEvidence: '<p class="error">Something went wrong.</p>',
        },
        userImpact:
          "Assistive technology users may not have the error announced or connected to the failed login attempt.",
        suggestedFix:
          "Give the error message a stable id, expose it after failed submission with an appropriate live region, and reference it from the relevant field or form with aria-describedby where appropriate.",
      },
    ],
  },
};
