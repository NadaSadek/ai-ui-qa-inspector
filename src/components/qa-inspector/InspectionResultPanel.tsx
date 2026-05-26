import type { QAInspectionResult, QAIssue } from "@/lib/ai/schema";
import { IssueDetail } from "./IssueDetail";
import { FindingListItem } from "./FindingListItem";
import { EmptyResultState } from "./EmptyResultState";

export const InspectionResultPanel = ({
  result,
  selectedIssue,
  selectedIssueId,
  onSelectIssue,
}: {
  result: QAInspectionResult | null;
  selectedIssue: QAIssue | null;
  selectedIssueId: string | null;
  onSelectIssue: (issueId: string) => void;
}) => {
  if (!result) {
    return <EmptyResultState />;
  }

  const issueCount = result.issues.length;

  return (
    <section
      className="rounded-2xl border border-slate-200 bg-white shadow-sm"
      aria-label="Inspection result"
    >
      <div className="border-b border-slate-200 px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Inspection report
        </p>
        <div className="mt-1 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">
              {issueCount} {issueCount === 1 ? "finding" : "findings"} found
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Select a finding to review evidence, impact and suggested fix.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 p-5 lg:grid-cols-[360px_minmax(0,1fr)]">
        <section aria-label="Findings list">
          <div className="space-y-2">
            {result.issues.map((issue, index) => (
              <FindingListItem
                key={issue.id}
                issue={issue}
                index={index}
                isSelected={selectedIssueId === issue.id}
                onSelect={() => onSelectIssue(issue.id)}
              />
            ))}
          </div>
        </section>
        <section className="space-y-5" aria-label="Selected finding details">
          {selectedIssue ? <IssueDetail issue={selectedIssue} /> : null}
          <section className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-950">Inspection summary</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{result.summary}</p>
          </section>
        </section>
      </div>
    </section>
  );
};
