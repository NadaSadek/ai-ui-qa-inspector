export type AccessibilityCheck = {
  ruleId: string;
  impact: "minor" | "moderate" | "serious" | "critical";
  target: string;
  message: string;
  html?: string;
};

export type InspectionTarget = {
  id: string;
  screenName: string;
  stateName: string;
  description: string;
  domSnippet: string;
  accessibilityCheck: AccessibilityCheck;
  screenshotDescription: string;
};
