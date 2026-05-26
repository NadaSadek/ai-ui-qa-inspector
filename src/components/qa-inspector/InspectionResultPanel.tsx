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
        <h2 className="text-xs font-medium uppercase tracking-wide text-slate-600">
          Inspection report
        </h2>
        <div className="mt-1 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p aria-live="polite" className="text-lg font-semibold text-slate-950">
              {issueCount} {issueCount === 1 ? "finding" : "findings"} found
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-5 p-5 lg:grid-cols-[360px_minmax(0,1fr)]">
        <section aria-labelledby="findings-heading">
          <h3 id="findings-heading" className="sr-only">
            Findings
          </h3>
          <ul className="space-y-2">
            {result.issues.map((issue, index) => (
              <li key={issue.id}>
                <FindingListItem
                  issue={issue}
                  index={index}
                  isSelected={selectedIssueId === issue.id}
                  onSelect={() => onSelectIssue(issue.id)}
                />
              </li>
            ))}
          </ul>
        </section>
        <section className="space-y-5" aria-label="Selected finding details">
          {selectedIssue ? <IssueDetail issue={selectedIssue} /> : null}
        </section>
      </div>
    </section>
  );
};
