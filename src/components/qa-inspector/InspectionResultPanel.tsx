import type { QAInspectionResult, QAIssue } from "@/lib/ai/schema";
import { IssueDetail } from "./IssueDetail";
import { EmptyResultState } from "./EmptyResultState";
import { FindingListItem } from "./FindingListItem";

export const InspectionResultPanel = ({
  result,
  selectedIssue,
  selectedIssueId,
  onSelectIssue,
  onRunInspection,
  isInspecting,
  inspectionError,
}: {
  result: QAInspectionResult | null;
  selectedIssue: QAIssue | null;
  selectedIssueId: string | null;
  onSelectIssue: (issueId: string) => void;
  onRunInspection: () => void;
  isInspecting: boolean;
  inspectionError: string | null;
}) => {
  const issueCount = result?.issues.length ?? 0;

  return (
    <section
      className="overflow-y-auto border-l border-slate-800 bg-slate-950 p-6"
      aria-label="Inspection result">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Inspection result
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-100">QA findings</h2>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Structured findings generated from the selected inspection input.
          </p>
        </div>
        {Boolean(result) ? (
          <button
            type="button"
            onClick={onRunInspection}
            disabled={isInspecting}
            className="shrink-0 rounded-lg border border-slate-700 px-3 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-slate-100 disabled:cursor-not-allowed disabled:opacity-60">
            {isInspecting ? "Inspecting…" : "Run again"}
          </button>
        ) : null}
      </header>
      {!result ? (
        <EmptyResultState
          onRunInspection={onRunInspection}
          isInspecting={isInspecting}
          inspectionError={inspectionError}
        />
      ) : (
        <div className="mt-6 space-y-5">
          {inspectionError ? (
            <p className="rounded-lg border border-red-900/60 bg-red-950/40 px-3 py-2 text-sm text-red-300">
              {inspectionError}
            </p>
          ) : null}
          <section>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-100">
                {issueCount} {issueCount === 1 ? "finding" : "findings"} found
              </h3>
              <p className="text-xs text-slate-500">Select a finding to inspect details</p>
            </div>
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
          {selectedIssue ? <IssueDetail issue={selectedIssue} /> : null}
          <section className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-sm font-medium text-slate-100">Inspection summary</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{result.summary}</p>
          </section>
        </div>
      )}
    </section>
  );
};
