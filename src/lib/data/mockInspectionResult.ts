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
  "account-menu-non-semantic-trigger": {
    targetId: "account-menu-non-semantic-trigger",
    summary:
      "The account dropdown is visually clear, but the trigger and menu items are built with non-semantic elements, which can make the menu harder to operate with keyboard and assistive technologies.",
    issues: [
      {
        id: "account-menu-trigger-not-semantic",
        title: "Account menu trigger is not semantic",
        issueType: "implementation",
        severity: "high",
        affectedElement: "Account menu trigger",
        evidence: {
          screenshotObservation:
            "The account control appears as a rounded dropdown trigger with avatar, user name, and chevron.",
          domEvidence:
            '<div class="account-trigger"><span class="avatar">NS</span><span>Nada Sadek</span><span>⌄</span></div>',
        },
        userImpact:
          "Keyboard and assistive technology users may not be able to identify or operate the menu trigger as an interactive control.",
        suggestedFix:
          'Use a native <button type="button"> for the menu trigger. Add aria-haspopup="menu" and aria-expanded to communicate the menu state.',
      },
      {
        id: "account-menu-items-not-semantic",
        title: "Dropdown items are not semantic actions",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Account dropdown menu items",
        evidence: {
          screenshotObservation:
            "The dropdown shows Profile, Billing, and Sign out as selectable menu options.",
          domEvidence:
            '<div class="menu"><div>Profile</div><div>Billing</div><div>Sign out</div></div>',
        },
        userImpact:
          "Menu options may not be reachable or announced correctly as actionable items for keyboard and screen reader users.",
        suggestedFix:
          "Render navigational items as links and actions as buttons. If using menu semantics, use an appropriate menu pattern with keyboard support.",
      },
    ],
  },
  "data-table-unclear-headers": {
    targetId: "data-table-unclear-headers",
    summary:
      "The invoice table is visually structured, but the header row is not marked up with semantic table headers, which weakens navigation and context for assistive technologies.",
    issues: [
      {
        id: "table-headers-use-td",
        title: "Table headers are not semantic",
        issueType: "accessibility",
        severity: "high",
        affectedElement: "Invoice table header row",
        evidence: {
          screenshotObservation:
            "The table shows a header-like row with Customer, Status, Amount, and Date above the invoice rows.",
          domEvidence:
            "<thead><tr><td>Customer</td><td>Status</td><td>Amount</td><td>Date</td></tr></thead>",
        },
        userImpact:
          "Screen reader users may not get proper column header context when navigating invoice rows, making the table harder to understand.",
        suggestedFix:
          'Use <th scope="col"> for each column header instead of <td>. For example, <th scope="col">Customer</th>.',
      },
      {
        id: "failed-status-lacks-visual-context",
        title: "Failed invoice status lacks extra context",
        issueType: "ux_clarity",
        severity: "medium",
        affectedElement: "Failed invoice row",
        evidence: {
          screenshotObservation:
            "One invoice row shows the status 'Failed' without additional explanation or next action.",
          domEvidence: "<tr><td>OrbitDesk</td><td>Failed</td><td>$89</td><td>May 22</td></tr>",
        },
        userImpact:
          "Users may see that an invoice failed but not know whether they should retry payment, contact the customer, or inspect the invoice.",
        suggestedFix:
          "Add a clear next action or contextual link for failed rows, such as 'Review failure' or 'Retry payment', depending on the product workflow.",
      },
    ],
  },
};
