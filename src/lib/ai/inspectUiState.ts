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
- affectedElement must be a human-readable UI element name, not only a CSS selector.
- Use screenshotObservation only from the screenshot description.
- Use domEvidence only from the DOM snippet.
- domEvidence should quote the smallest relevant DOM fragment, not the full DOM snippet.
- Use accessibilityCheckReference only when directly citing the provided accessibility check rule or message.
- If the accessibility check does not directly support an issue, set accessibilityCheckReference to null.
- Do not create two findings for the same root cause.
- Merge overlapping accessibility and UX-labeling findings.
- Return 2 to 4 distinct findings.
- Suggested fixes must be concrete frontend remediation steps.
- For dynamic error messages, mention aria-live or role="alert" only when the input indicates the message appears after user action or form submission.
- Do not mention color contrast unless the screenshot description or accessibility check input explicitly provides contrast evidence.`,
  });

  return output;
}
