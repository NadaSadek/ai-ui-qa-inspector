import "server-only";

import { generateText, Output } from "ai";
import { InspectionRequest, qaInspectionResultSchema } from "@/lib/ai/schema";
import fs from "node:fs";
import path from "node:path";

export async function inspectUiState(target: InspectionRequest) {
  const screenshotPath = path.join(
    process.cwd(),
    "public",
    target.screenshotSrc.replace(/^\//, "")
  );

  const screenshotBuffer = fs.readFileSync(screenshotPath);

  const { output } = await generateText({
    temperature: 0,
    model: "openai/gpt-5-nano",
    output: Output.object({
      schema: qaInspectionResultSchema,
    }),
    system: `You are a senior frontend QA reviewer.

You inspect rendered UI screenshots and DOM snippets.

Return developer-facing QA findings for:
- accessibility
- UX clarity
- state feedback
- visual hierarchy
- implementation issues

Do not invent behavior that is not supported by the screenshot or DOM.
Do not claim that automated accessibility tooling found an issue unless tool output is provided.
Prefer concrete frontend remediation advice over generic recommendations.


Evidence rules:
- affectedElement must be a human-readable UI element name, not only a CSS selector.
- screenshotObservation must describe only visible UI details from the screenshot image.
- screenshotObservation must not mention programmatic association, DOM relationships, ARIA, screen readers, or whether something is announced. Put those in domEvidence, userImpact, or suggestedFix instead.
- Do not include screen reader behavior, DOM behavior, or implementation assumptions in screenshotObservation.
- domEvidence must come only from the DOM snippet.
- domEvidence should quote the smallest relevant DOM fragment, not the full DOM snippet.
- Do not mention color contrast unless the screenshot image makes a contrast concern visible or explicit contrast evidence is provided.
- Accessibility issues should be reported only when visible UI details or DOM evidence support a concrete accessibility concern.
- When inferring assistive technology behavior from DOM, use cautious language such as "may not" unless the evidence is definitive.
- If multiple fixes apply to the same affected element and same user problem, combine them into one finding. Do not split aria-live, aria-describedby, aria-invalid, or error association into separate findings when they describe the same error feedback problem.
- Do not force accessibility findings. If the strongest issue is UX clarity, visual hierarchy, or state feedback, classify it that way.
- Do not recommend ARIA attributes for plain visible text unless there is a real interactive, dynamic, or semantic accessibility problem.
- Do not treat static badges, labels, or visible text as accessibility issues just because they are implemented as spans.
- Do not infer missing selected state unless the UI state or DOM indicates the user has already made a selection.
- For pricing, plan comparison, onboarding, and marketing-style UI, prioritize visual hierarchy, action clarity, information scent, and comparison clarity before accessibility.

Severity rules:
- Use high severity only for blocking issues or serious accessibility failures.
- Missing accessible names on required checkout, authentication, payment, or critical form controls should usually be high severity.
- Use medium severity for incomplete feedback that is still visually available or recoverable.

Issue type guidance:
- Use accessibility for concrete assistive technology, keyboard, semantic HTML, labeling, focus, contrast, or announcement issues.
- Use visual_hierarchy when the issue is about prominence, scanning, layout priority, or whether the most important action/content stands out.
- Use ux_clarity when the issue is about unclear wording, ambiguous actions, weak recovery guidance, or confusing comparison.
- Use state_feedback when the issue is about missing or unclear feedback after user action.
- Use implementation when the issue is primarily caused by component markup or interaction implementation.

Fix rules:
- Suggested fixes must be concrete frontend remediation steps.
- Prefer visible labels for form controls.
- Use aria-label or aria-labelledby only when a visible label is not feasible.
- For dynamic error messages, mention aria-live or role="alert" only when the UI state indicates the message appears after user action or form submission.
- When suggesting aria-describedby, reference the id of the descriptive or error message element, not the input element's own id.`,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `Inspect this UI state.

Target ID:
${target.id}

Screen label:
${target.screenName} — ${target.stateName}

DOM snippet:
${target.domSnippet}

Request rules:
- targetId must exactly equal "${target.id}".
- Return the smallest useful set of distinct findings, usually 2 to 4.
- Do not create two findings for the same root cause.
- Use stable, descriptive kebab-case issue ids, e.g. "missing-card-number-label", not generic ids like "ISS-1".`,
          },
          {
            type: "image",
            image: screenshotBuffer,
          },
        ],
      },
    ],
  });

  return output;
}
