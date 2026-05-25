import "server-only";

import { openai } from "@ai-sdk/openai";
import { generateText, Output } from "ai";
import { qaInspectionResultSchema } from "@/lib/ai/schema";
import type { InspectionTarget } from "@/types/qa";

export async function inspectUiState(target: InspectionTarget) {
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
- Use screenshotObservation only from the screenshot description.
- Use accessibilityCheckReference only when directly citing the provided accessibility check rule/message.
- If the accessibility check does not directly support an issue, set accessibilityCheckReference to null.
- Do not create two findings for the same root cause. Merge overlapping accessibility and UX-labeling findings.
- Return 2 to 4 distinct findings.
- Suggested fixes must be concrete frontend remediation steps.`,
  });

  return output;
}
