import "server-only";

import { generateText, Output } from "ai";
import { InspectionRequest, qaInspectionResultSchema } from "@/lib/ai/schema";

export async function inspectUiState(target: InspectionRequest) {
  const { output } = await generateText({
    temperature: 0,
    model: "openai/gpt-5-nano",
    output: Output.object({
      schema: qaInspectionResultSchema,
    }),
    system: `You are a senior frontend QA reviewer.

You inspect frontend UI states using:
- rendered UI screenshot description
- DOM snippets
- accessibility check input

Return developer-facing QA findings.
Do not invent inaccessible behavior that is not supported by the input.
Prefer concrete remediation advice.
Focus on frontend accessibility, UX clarity, state feedback, visual hierarchy, and implementation issues.`,
    prompt: `Inspect this UI state.

Target ID:
${target.id}

Screenshot description:
${target.screenshotDescription}

Screen name:
${target.screenName}

State name:
${target.stateName}

Description:
${target.description}

DOM snippet:
${target.domSnippet}

Accessibility check input:
Rule: ${target.accessibilityCheck.ruleId}
Impact: ${target.accessibilityCheck.impact}
Target: ${target.accessibilityCheck.target}
Message: ${target.accessibilityCheck.message}
HTML: ${target.accessibilityCheck.html ?? "Not provided"}

Rules:
- targetId must exactly equal "${target.id}".
- Return 2 to 4 distinct findings.
- Do not create two findings for the same root cause; merge overlapping accessibility and UX-labeling findings.
- Use stable, descriptive kebab-case issue ids, e.g. "missing-card-number-label", not generic ids like "ISS-1".

Evidence rules:
- affectedElement must be a human-readable UI element name, not only a CSS selector.
- screenshotObservation must describe only visible UI details from the screenshot description.
- Do not include screen reader behavior, DOM behavior, or implementation assumptions in screenshotObservation.
- domEvidence must come only from the DOM snippet.
- domEvidence should quote the smallest relevant DOM fragment, not the full DOM snippet.
- accessibilityCheckReference must directly cite the provided accessibility check rule or message.
- If the accessibility check does not directly support an issue, set accessibilityCheckReference to null.
- Do not mention color contrast unless the screenshot description or accessibility check input explicitly provides contrast evidence.

Severity rules:
- Use high severity only for blocking issues or serious accessibility failures.
- Use medium severity for incomplete feedback that is still visually available or recoverable.

Fix rules:
- Suggested fixes must be concrete frontend remediation steps.
- For dynamic error messages, mention aria-live or role="alert" only when the input indicates the message appears after user action or form submission.
- When suggesting aria-describedby, reference the id of the descriptive or error message element, not the input element's own id.`,
  });

  return output;
}
