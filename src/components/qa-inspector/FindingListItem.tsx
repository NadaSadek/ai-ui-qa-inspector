import type { QAIssue } from "@/lib/ai/schema";
import { IssueTypeBadge, SeverityBadge } from "@/components/qa-inspector/IssueBadges";

export const FindingListItem = ({
  issue,
  index,
  isSelected,
  onSelect,
}: {
  issue: QAIssue;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
}) => (
  <button
    type="button"
    onClick={onSelect}
    className={`w-full rounded-xl border p-4 text-left transition ${
      isSelected
        ? "border-slate-400 bg-slate-50 ring-1 ring-slate-300"
        : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
    }`}
  >
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
          Finding {index + 1}
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-950">{issue.affectedElement}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <IssueTypeBadge issueType={issue.issueType} />
          <SeverityBadge severity={issue.severity} />
        </div>
      </div>

      <span
        className={`mt-1 h-2 w-2 rounded-full ${isSelected ? "bg-slate-950" : "bg-slate-300"}`}
        aria-hidden="true"
      />
    </div>
  </button>
);
