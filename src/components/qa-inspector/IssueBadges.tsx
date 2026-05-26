import type { QAIssue } from "@/lib/ai/schema";

export const SeverityBadge = ({ severity }: { severity: QAIssue["severity"] }) => {
  return (
    <span className="rounded-full border border-slate-300 bg-white px-2 py-1 text-xs text-slate-700">
      {severity}
    </span>
  );
};

export const IssueTypeBadge = ({ issueType }: { issueType: QAIssue["issueType"] }) => {
  return (
    <span className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-600">
      {issueType.replace("_", " ")}
    </span>
  );
};
