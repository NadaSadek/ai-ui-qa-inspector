import type { QAInspectionResult } from "@/lib/ai/schema";

const forbiddenVisualObservationPatterns = [
  /</,
  />/,
  /\bhtml\b/i,
  /\bdom\b/i,
  /\baria[-\w]*\b/i,
  /\brole\b/i,
  /\bclass(Name)?\b/i,
  /\bid=/i,
  /\bdiv\b/i,
  /\bspan\b/i,
  /\bthead\b/i,
  /\btbody\b/i,
  /\btr\b/i,
  /\btd\b/i,
  /\bth\b/i,
  /\bscreen reader/i,
  /\bassistive technolog(y|ies)\b/i,
  /\bkeyboard\b/i,
  /\bprogrammatic(ally)?\b/i,
  /\bannounced?\b/i,
  /\bfocusable\b/i,
];

export const getInspectionResultValidationErrors = (result: QAInspectionResult) => {
  const errors: string[] = [];

  for (const issue of result.issues) {
    const matchedPattern = forbiddenVisualObservationPatterns.find((pattern) =>
      pattern.test(issue.evidence.visualObservation)
    );

    if (matchedPattern) {
      errors.push(
        `${issue.id}: visualObservation matches ${matchedPattern}: "${issue.evidence.visualObservation}"`
      );
    }
  }

  return errors;
};

export const assertValidInspectionResultEvidence = (result: QAInspectionResult) => {
  const errors = getInspectionResultValidationErrors(result);

  if (errors.length > 0) {
    throw new Error(`Invalid inspection evidence:\n${errors.join("\n")}`);
  }
};
