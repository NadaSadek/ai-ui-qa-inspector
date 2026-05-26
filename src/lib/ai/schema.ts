import { z } from "zod";

export const qaIssueSchema = z.object({
  id: z.string().min(1),

  issueType: z.enum([
    "accessibility",
    "ux_clarity",
    "visual_hierarchy",
    "state_feedback",
    "implementation",
  ]),

  severity: z.enum(["low", "medium", "high"]),

  affectedElement: z.string().min(1),

  evidence: z.object({
    screenshotObservation: z.string().min(1),
    domEvidence: z.string().min(1),
  }),

  userImpact: z.string().min(1),

  suggestedFix: z.string().min(1),
});

export const qaInspectionResultSchema = z.object({
  targetId: z.string().min(1),
  summary: z.string().min(1),
  issues: z.array(qaIssueSchema).min(1).max(5),
});

export const inspectionRequestSchema = z.object({
  id: z.string().min(1),
  screenName: z.string().min(1),
  stateName: z.string().min(1),
  description: z.string().min(1),
  domSnippet: z.string().min(1),
  screenshotSrc: z
    .string()
    .min(1)
    .regex(
      /^\/screenshots\/.+\.(png|jpg|jpeg|webp)$/i,
      "screenshotSrc must point to an image in /screenshots"
    ),
});

export type QAIssue = z.infer<typeof qaIssueSchema>;
export type QAInspectionResult = z.infer<typeof qaInspectionResultSchema>;
export type InspectionRequest = z.infer<typeof inspectionRequestSchema>;
