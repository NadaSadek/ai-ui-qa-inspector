import type { QAIssue } from "@/lib/ai/schema";

export const SeverityBadge = ({ severity }: { severity: QAIssue["severity"] }) => {
  return (
    <span className="rounded-full border border-slate-700 px-2 py-1 text-xs text-slate-300">
      {severity}
    </span>
  );
};

export const IssueTypeBadge = ({ issueType }: { issueType: QAIssue["issueType"] }) => {
  return (
    <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400">
      {issueType.replace("_", " ")}
    </span>
  );
};
