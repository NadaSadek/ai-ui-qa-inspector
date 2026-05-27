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
  "settings-modal-focus-risk": {
    targetId: "settings-modal-focus-risk",
    summary:
      "The notification preferences modal is visually clear, but its dialog structure and close control are not semantically exposed for keyboard and assistive technology users.",
    issues: [
      {
        id: "modal-missing-dialog-semantics",
        title: "Modal is missing dialog semantics",
        issueType: "accessibility",
        severity: "high",
        affectedElement: "Notification preferences modal",
        evidence: {
          screenshotObservation:
            "A modal appears over the account settings page with a visible backdrop and notification preference controls.",
          domEvidence:
            '<div class="modal-backdrop"><div class="modal-panel"><h2>Notification preferences</h2>...</div></div>',
        },
        userImpact:
          "Assistive technology users may not be told that a dialog opened or understand which content belongs to the active modal.",
        suggestedFix:
          'Render the modal container with role="dialog", aria-modal="true", and aria-labelledby pointing to the modal heading. Manage focus when the modal opens and returns focus when it closes.',
      },
      {
        id: "modal-close-control-not-button",
        title: "Close control is not a button",
        issueType: "implementation",
        severity: "medium",
        affectedElement: "Modal close control",
        evidence: {
          screenshotObservation: "The modal has a visible × close control in the top-right corner.",
          domEvidence: '<div class="close-control">×</div>',
        },
        userImpact:
          "Keyboard users may not be able to focus or activate the close control reliably, and screen readers may not announce it as an action.",
        suggestedFix:
          'Use a native <button type="button" aria-label="Close notification preferences">×</button> for the close control.',
      },
    ],
  },
  "pricing-mobile-hierarchy": {
    targetId: "pricing-mobile-hierarchy",
    summary:
      "The mobile pricing comparison is scannable, but the plan actions and recommended plan treatment do not provide enough clarity for confident selection.",
    issues: [
      {
        id: "ambiguous-plan-select-buttons",
        title: "Plan select buttons are ambiguous",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Pricing plan select buttons",
        evidence: {
          screenshotObservation:
            "Each pricing card uses the same button label, 'Select', including Starter, Pro, and Enterprise.",
          domEvidence: "<button>Select</button>",
        },
        userImpact:
          "Users, especially screen reader users, may have trouble distinguishing which plan each button selects when the button label is announced out of visual context.",
        suggestedFix:
          "Give each button a unique accessible name or visible label, such as 'Select Starter', 'Select Pro', and 'Select Enterprise'. Prefer visible-specific labels when space allows.",
      },
      {
        id: "recommended-plan-not-prominent",
        title: "Recommended plan is not prominent enough",
        issueType: "visual_hierarchy",
        severity: "medium",
        affectedElement: "Pro plan card",
        evidence: {
          screenshotObservation:
            "The Pro plan has a small 'Popular' badge, but the card and button treatment look similar to the other plans.",
          domEvidence:
            '<article class="plan-card"><h2>Pro</h2><span>Popular</span><p>$49</p><p>For growing teams</p><button>Select</button></article>',
        },
        userImpact:
          "Users may not quickly understand which plan is recommended or what action the page is guiding them toward.",
        suggestedFix:
          "Increase the hierarchy of the recommended plan with a stronger card treatment, clearer badge placement, or a more prominent call-to-action. Do not rely only on color to communicate priority.",
      },
    ],
  },
  "empty-table-vague-cta": {
    targetId: "empty-table-vague-cta",
    summary:
      "The empty Projects table shows the missing-data state, but the action copy and table-like structure make the next step less clear than it should be.",
    issues: [
      {
        id: "vague-add-button-label",
        title: "Add button label is vague",
        issueType: "ux_clarity",
        severity: "medium",
        affectedElement: "Add button",
        evidence: {
          screenshotObservation:
            "The primary action near the Projects header is labeled only 'Add'.",
          domEvidence: '<button type="button">Add</button>',
        },
        userImpact:
          "Users may not immediately understand what the button will create, especially in an empty state where there is no existing project context.",
        suggestedFix:
          "Use a more specific visible label such as 'Add project'. Avoid relying only on an aria-label when visible copy can be clearer for everyone.",
      },
      {
        id: "empty-state-message-not-actionable",
        title: "Empty state message is not actionable",
        issueType: "ux_clarity",
        severity: "medium",
        affectedElement: "Projects empty state",
        evidence: {
          screenshotObservation:
            "The empty state says 'No data' and 'Try changing filters or add something.'",
          domEvidence:
            '<div class="empty-state"><h2>No data</h2><p>Try changing filters or add something.</p></div>',
        },
        userImpact:
          "Users may not know whether there are no projects yet, filters are hiding results, or which action they should take next.",
        suggestedFix:
          "Use more specific empty-state copy, such as 'No projects yet'. Place a clear primary action like 'Add project' inside the empty state, and show a separate 'Reset filters' action only when filters are actually active.",
      },
      {
        id: "table-like-region-uses-divs",
        title: "Table-like region uses non-semantic markup",
        issueType: "implementation",
        severity: "medium",
        affectedElement: "Projects table region",
        evidence: {
          screenshotObservation:
            "The region visually looks like a table with Name, Owner, and Status columns.",
          domEvidence:
            '<div class="table-header"><span>Name</span><span>Owner</span><span>Status</span></div>',
        },
        userImpact:
          "Assistive technology users may not receive table navigation or column context if this region later contains tabular project data.",
        suggestedFix:
          'If this region represents tabular project data, use semantic table markup with <table>, <thead>, <tr>, and <th scope="col">. If it is only an empty-state container, simplify the visual treatment so it does not imply a data table without table semantics.',
      },
    ],
  },
};
