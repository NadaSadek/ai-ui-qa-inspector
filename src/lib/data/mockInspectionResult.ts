import type { QAInspectionResult } from "@/lib/ai/schema";

export const mockInspectionResult: Record<string, QAInspectionResult> = {
  "checkout-payment-error": {
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
          visualObservation:
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
          visualObservation:
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
      "The login form shows a generic error state that does not clearly help users recover and may not be announced or associated with the failed sign-in attempt.",
    issues: [
      {
        id: "generic-login-error-copy",
        title: "Login error copy is too generic",
        issueType: "ux_clarity",
        severity: "medium",
        affectedElement: "Login error message",
        evidence: {
          visualObservation:
            "A pale red error message says 'Something went wrong.' below the password field.",
          domEvidence: '<p class="error">Something went wrong.</p>',
        },
        userImpact:
          "Users do not know whether the credentials were invalid, the session expired, or a temporary service problem occurred.",
        suggestedFix:
          "Use clearer recovery copy, such as 'Email or password is incorrect. Check your details and try again.' Keep the message general enough to avoid revealing whether an account exists.",
      },
      {
        id: "login-error-not-programmatically-connected",
        title: "Login error is not programmatically connected",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Login error message",
        evidence: {
          visualObservation:
            "The error message appears as a general form-level message below the password field.",
          domEvidence: '<p class="error">Something went wrong.</p>',
        },
        userImpact:
          "Assistive technology users may not be notified when the sign-in error appears or understand that it belongs to the failed login attempt.",
        suggestedFix:
          'Give the error message a stable id and expose it with role="alert" or aria-live="polite" when it appears. Reference it from the relevant input group or form controls with aria-describedby where appropriate.',
      },
    ],
  },
  "account-menu-non-semantic-trigger": {
    targetId: "account-menu-non-semantic-trigger",
    summary:
      "The account dropdown is visually clear, but the trigger and menu options are implemented with non-semantic divs, which can make the menu harder to operate with keyboard and assistive technologies.",
    issues: [
      {
        id: "account-menu-trigger-not-semantic",
        title: "Account menu trigger is not semantic",
        issueType: "accessibility",
        severity: "high",
        affectedElement: "Account menu trigger",
        evidence: {
          visualObservation:
            "The header shows an account control with initials, the name 'Nada Sadek', and a chevron indicating a dropdown.",
          domEvidence:
            '<div class="account-trigger"><span class="avatar">NS</span><span>Nada Sadek</span><span>⌄</span></div>',
        },
        userImpact:
          "Keyboard users and assistive technologies may not recognize the account control as an interactive dropdown trigger or understand whether the menu is open.",
        suggestedFix:
          'Use a native <button type="button"> for the account trigger. Add aria-expanded to communicate the open state, aria-controls to reference the dropdown panel, and preserve a visible focus style.',
      },
      {
        id: "account-menu-items-not-semantic",
        title: "Dropdown items are not semantic actions",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Account dropdown menu items",
        evidence: {
          visualObservation:
            "The open dropdown shows Profile, Billing, and Sign out as selectable menu options.",
          domEvidence:
            '<div class="menu"><div>Profile</div><div>Billing</div><div>Sign out</div></div>',
        },
        userImpact:
          "Menu options may not be reachable, focusable, or announced as actionable items for keyboard and screen reader users.",
        suggestedFix:
          "Render navigation items such as Profile and Billing as links, and render actions such as Sign out as buttons. Use a full ARIA menu pattern only if the component implements the expected keyboard behavior.",
      },
    ],
  },
  "data-table-unclear-headers": {
    targetId: "data-table-unclear-headers",
    summary:
      "The invoice table is visually structured, but the header row uses data cells instead of semantic header cells, which weakens column context for assistive technologies.",
    issues: [
      {
        id: "semantic-table-headers-missing",
        title: "Table headers should use th elements",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Invoices table header row",
        evidence: {
          visualObservation:
            "The table header shows column titles: Customer, Status, Amount, and Date.",
          domEvidence:
            "<thead><tr><td>Customer</td><td>Status</td><td>Amount</td><td>Date</td></tr></thead>",
        },
        userImpact:
          "Screen reader users may not get proper column header context when navigating invoice rows, making the table harder to understand.",
        suggestedFix:
          'Replace header cells with semantic <th> elements and mark them as column headers, for example <th scope="col">Customer</th>. Consider adding a table caption only if the surrounding page context is not enough.',
      },
    ],
  },
  "settings-modal-focus-risk": {
    targetId: "settings-modal-focus-risk",
    summary:
      "The notification preferences modal is visually clear, but its dialog structure and close control are not semantically exposed for keyboard and assistive technology users.",
    issues: [
      {
        id: "modal-close-control-not-button",
        title: "Close control should be a button",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Modal close control",
        evidence: {
          visualObservation: "The top-right of the modal shows an × close glyph.",
          domEvidence: '<div class="close-control">×</div>',
        },
        userImpact:
          "Keyboard users and assistive technologies may not recognize the close control as an actionable element or operate it reliably.",
        suggestedFix:
          'Replace the non-semantic element with a native <button type="button" aria-label="Close notification preferences">×</button> and preserve a visible focus style.',
      },
      {
        id: "modal-missing-dialog-semantics",
        title: "Modal is missing dialog semantics",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Notification preferences modal",
        evidence: {
          visualObservation:
            "A modal panel appears over the page with a backdrop and a heading 'Notification preferences'.",
          domEvidence:
            '<div class="modal-backdrop"><div class="modal-panel"><h2>Notification preferences</h2>...</div></div>',
        },
        userImpact:
          "Assistive technology users may not be told that a dialog opened or understand which content belongs to the active modal.",
        suggestedFix:
          'Render the modal container with role="dialog", aria-modal="true", and aria-labelledby pointing to the modal heading. Move focus into the modal when it opens and return focus to the trigger when it closes.',
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
          visualObservation:
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
          visualObservation:
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
          visualObservation: "The primary action near the Projects header is labeled only 'Add'.",
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
          visualObservation:
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
          visualObservation:
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
  "search-filters-poor-labels": {
    targetId: "search-filters-poor-labels",
    summary:
      "The filter panel has visible labels, but several are too generic to make the filtering behavior clear. The date fields also rely on freeform text placeholders instead of stronger date input affordances.",
    issues: [
      {
        id: "generic-search-filter-label",
        title: "Search filter label is too generic",
        issueType: "ux_clarity",
        severity: "medium",
        affectedElement: "Search input",
        evidence: {
          visualObservation:
            "The first field is labeled 'Search' with placeholder text 'Name, email, company'.",
          domEvidence:
            '<label for="query">Search</label><input id="query" name="query" placeholder="Name, email, company" />',
        },
        userImpact:
          "Users may need to read the placeholder to understand what the field searches, and that guidance disappears once they start typing.",
        suggestedFix:
          "Use a more descriptive visible label, such as 'Search customers', and keep the searchable fields as helper text, for example 'Name, email, or company'.",
      },
      {
        id: "ambiguous-type-filter-label",
        title: "Type filter does not explain what type means",
        issueType: "ux_clarity",
        severity: "medium",
        affectedElement: "Type select",
        evidence: {
          visualObservation:
            "The second field is labeled 'Type' and shows a default option of 'Select'.",
          domEvidence:
            '<label for="type">Type</label><select id="type" name="type"><option value="" disabled>Select</option><option value="customer">Customer</option><option value="trial">Trial</option><option value="enterprise">Enterprise</option></select>',
        },
        userImpact:
          "Users may not understand whether this filter refers to customer type, account type, plan type, or lifecycle status.",
        suggestedFix:
          "Rename the label to describe the domain more clearly, such as 'Account type' or 'Customer type'. Use a clearer placeholder like 'Choose account type'.",
      },
      {
        id: "date-range-fields-use-freeform-text",
        title: "Date range fields rely on freeform text",
        issueType: "ux_clarity",
        severity: "medium",
        affectedElement: "From and To date inputs",
        evidence: {
          visualObservation: "The From and To fields show 'dd/mm/yyyy' placeholders.",
          domEvidence:
            '<input id="from" name="from" placeholder="dd/mm/yyyy" /><input id="to" name="to" placeholder="dd/mm/yyyy" />',
        },
        userImpact:
          "Users may enter dates in the wrong format or be unsure which date range the fields apply to.",
        suggestedFix:
          "Use clearer labels such as 'Created from' and 'Created to' or 'Billing date from/to'. Prefer type=\"date\" or a date picker when the product needs structured date input.",
      },
    ],
  },
  "toast-short-duration": {
    targetId: "toast-short-duration",
    summary:
      "The save confirmation toast gives visible feedback, but it may not be announced to assistive technologies, overlaps the main content area, and may disappear before users have enough time to read it.",
    issues: [
      {
        id: "toast-not-announced",
        title: "Toast may not be announced",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Success toast notification",
        evidence: {
          visualObservation:
            "A pale-green toast appears in the upper-right with the message 'Saved' and 'Your changes were saved.'",
          domEvidence:
            '<div class="toast success" data-duration="2500"><strong>Saved</strong><p>Your changes were saved.</p></div>',
        },
        userImpact:
          "Screen reader users may not be notified that the save action succeeded when the toast appears.",
        suggestedFix:
          'Expose the toast as non-interruptive status feedback using role="status" or aria-live="polite". Keep the visible message text inside the live region and consider aria-atomic="true" if the message is updated dynamically.',
      },
      {
        id: "toast-overlaps-content",
        title: "Toast overlaps main content",
        issueType: "visual_hierarchy",
        severity: "medium",
        affectedElement: "Success toast notification",
        evidence: {
          visualObservation:
            "The toast is positioned over the top-right area of the profile settings card.",
          domEvidence: '<div class="toast success" data-duration="2500">',
        },
        userImpact:
          "The confirmation message can compete with or obscure primary page content, making the state change feel visually intrusive.",
        suggestedFix:
          "Position toast notifications in a reserved viewport area with enough spacing from primary content, or offset the page layout so transient feedback does not cover important UI.",
      },
      {
        id: "toast-feedback-too-temporary",
        title: "Toast feedback may disappear too quickly",
        issueType: "state_feedback",
        severity: "medium",
        affectedElement: "Success toast notification",
        evidence: {
          visualObservation:
            "The success message is shown as a temporary toast rather than persistent inline feedback.",
          domEvidence: '<div class="toast success" data-duration="2500">',
        },
        userImpact:
          "Users may miss the confirmation if the toast disappears quickly, especially when reading slowly, using magnification, or shifting focus after saving.",
        suggestedFix:
          "Use a longer duration for important confirmations, provide a dismiss control for persistent toasts, or add inline confirmation near the saved form state.",
      },
    ],
  },
  "onboarding-stepper-low-contrast": {
    targetId: "onboarding-stepper-low-contrast",
    summary:
      "The onboarding stepper shows progress visually, but the current step is not programmatically exposed and the low-contrast styling makes the progress state harder to scan.",
    issues: [
      {
        id: "current-step-not-programmatically-exposed",
        title: "Current step is not programmatically exposed",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Onboarding stepper current step",
        evidence: {
          visualObservation:
            "The stepper shows four steps: Account, Team, Billing, and Finish, with Team presented as the current step.",
          domEvidence:
            '<ol class="stepper"><li>Account</li><li class="current">Team</li><li>Billing</li><li>Finish</li></ol>',
        },
        userImpact:
          "Users relying on assistive technologies may not be told which onboarding step is current, making it harder to understand their position in the flow.",
        suggestedFix:
          'Add aria-current="step" to the current step item. Keep the visual current-step styling aligned with the programmatic state.',
      },
      {
        id: "stepper-progress-low-contrast",
        title: "Stepper progress styling has weak contrast",
        issueType: "accessibility",
        severity: "medium",
        affectedElement: "Onboarding stepper labels and indicators",
        evidence: {
          visualObservation:
            "The stepper numbers and labels appear pale against the white background, making the progress state visually subtle.",
          domEvidence:
            '<ol class="stepper"><li>Account</li><li class="current">Team</li><li>Billing</li><li>Finish</li></ol>',
        },
        userImpact:
          "Low-vision users may have difficulty distinguishing the step labels and identifying the current progress state quickly.",
        suggestedFix:
          "Increase contrast for the step labels and indicators, especially the current step. Verify the final colors against WCAG contrast requirements and avoid relying on subtle color differences alone.",
      },
    ],
  },
};
