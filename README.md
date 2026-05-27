# AI UI QA Inspector

AI UI QA Inspector is an AI-assisted frontend QA workbench that turns rendered UI screenshots and DOM snippets into structured developer-facing QA findings.

It is designed for reviewing UI states where visual context and implementation context both matter: form errors, dropdowns, modals, tables, pricing cards, empty states, toasts and onboarding flows.

## What it does

The app takes an inspection case with:

- a screenshot of a rendered UI state
- a DOM snippet for the relevant component region
- basic screen/state metadata

It returns structured findings with:

- issue title
- issue type
- severity
- affected element
- visual observation
- DOM evidence
- user impact
- suggested frontend fix

## Purpose

This project explores a narrow workflow: given a rendered UI screenshot and a relevant DOM snippet, can AI draft structured frontend QA findings with separated visual evidence, DOM evidence, user impact and concrete remediation steps?

It is not an accessibility scanner replacement. It is a small workbench for experimenting with evidence-grounded AI-assisted UI review.

## Current v0 workflow

1. Choose one of the sample inspection cases.
2. Review the screenshot and DOM snippet.
3. Run a mock or live AI inspection.
4. Review the structured findings.
5. Inspect the cited visual observation, DOM evidence, user impact and suggested fix.

## Sample cases

The project includes 10 fixture cases:

- `checkout-payment-error`
- `login-unclear-error`
- `account-menu-non-semantic-trigger`
- `data-table-unclear-headers`
- `settings-modal-focus-risk`
- `pricing-mobile-hierarchy`
- `empty-table-vague-cta`
- `search-filters-poor-labels`
- `toast-short-duration`
- `onboarding-stepper-low-contrast`

The cases are intentionally varied across accessibility, UX clarity, state feedback, visual hierarchy and implementation issues.

## Evidence model

Each finding separates evidence into two fields:

### Visual observation

Visible facts from the screenshot only.

Example:

> The table header shows column titles: Customer, Status, Amount and Date.

### DOM evidence

The smallest relevant DOM fragment that supports the finding.

Example:

```html
<thead>
  <tr>
    <td>Customer</td>
    <td>Status</td>
    <td>Amount</td>
    <td>Date</td>
  </tr>
</thead>
```

The app validates this so DOM or accessibility implementation claims don't leak into visual observations.

More detail: [`docs/ai-ui-qa-evidence-model.md`](docs/ai-ui-qa-evidence-model.md)

## Mock mode and live AI mode

By default, the app can run in mock mode using reviewed fixture results.

Live AI mode can be enabled with:

```env
ENABLE_LIVE_AI=true
AI_GATEWAY_API_KEY=your_key_here
```

## Guardrails

The project uses:

- Zod schemas for structured AI output
- fixture coverage tests to ensure every selectable case has a mock result
- screenshot existence checks
- evidence validation to prevent DOM/accessibility claims inside visual observations

AI output is treated as a draft that needs schema and domain-specific validation.

## What this is not

This is not a replacement for axe, Lighthouse, browser accessibility trees, manual QA, or product design review.

It is a frontend QA workbench for turning UI evidence into structured findings that a developer can review and act on.

## Tech stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel AI SDK
- Zod
- Vitest

## Running locally

```bash
pnpm install
pnpm dev
```

Run checks:

```bash
pnpm lint
pnpm test:run
pnpm build
```
