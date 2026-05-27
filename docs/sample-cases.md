# Sample inspection cases

AI UI QA Inspector includes 10 fixture cases. Each case has a screenshot, DOM snippet and reviewed mock result.

| Case ID | Screen | State | Main issue themes |
|---|---|---|---|
| `checkout-payment-error` | Checkout form | Payment error state | Missing input label, payment error association |
| `login-unclear-error` | Login form | Invalid credentials error | Generic error copy, form-level error announcement |
| `account-menu-non-semantic-trigger` | Account menu | Dropdown open | Non-semantic trigger, non-semantic menu actions |
| `data-table-unclear-headers` | Invoice table | Populated table | Table header semantics |
| `settings-modal-focus-risk` | Settings modal | Notification preferences open | Dialog semantics, close control semantics |
| `pricing-mobile-hierarchy` | Pricing page | Mobile plan comparison | Ambiguous repeated CTAs, weak recommended-plan hierarchy |
| `empty-table-vague-cta` | Projects table | Empty state | Vague CTA, non-actionable empty state |
| `search-filters-poor-labels` | Search filters | Expanded filter panel | Generic filter labels, ambiguous date range fields |
| `toast-short-duration` | Save confirmation | Success toast visible | Live-region feedback, toast placement, temporary feedback |
| `onboarding-stepper-low-contrast` | Onboarding stepper | Team invite step | Current-step semantics, weak progress contrast |

## Case selection rationale

The cases are intentionally not limited to one category of frontend issue.

They cover:

- form labeling
- error recovery
- dropdown semantics
- table semantics
- modal semantics
- pricing comparison clarity
- empty-state UX
- filter clarity
- toast/state feedback
- stepper/progress state accessibility

This makes the project a QA workbench rather than a single-purpose accessibility checker.

## Mock results

Mock results are curated from live AI runs and manually reviewed.

The public demo uses reviewed outputs so the evidence, impact and remediation guidance stay consistent.
