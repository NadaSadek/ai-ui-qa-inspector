import { QAInspectionResult, QAIssue } from "@/lib/ai/schema";
import { SeverityBadge } from "./IssueBadges";
import { IssueDetail } from "./IssueDetail";

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
  return (
    <section
      className="overflow-y-auto border-l border-slate-800 p-6"
      aria-label="Inspection result"
    >
      <header>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          Inspection result
        </p>
        <h2 className="mt-1 text-xl font-semibold text-slate-100">
          QA findings
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Findings generated from the inspection input. Evidence appears here as
          cited output, not as raw input.
        </p>
      </header>
      <button
        type="button"
        onClick={onRunInspection}
        disabled={isInspecting}
        className="mt-6 w-full rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isInspecting ? "Inspecting…" : "Run inspection"}
      </button>
      {inspectionError ? (
        <p className="mt-3 text-sm text-red-400">{inspectionError}</p>
      ) : null}
      {!result ? (
        <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-4">
          <p className="text-sm font-medium text-slate-100">
            No inspection result yet
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-400">
            Run the inspection to generate QA findings from the screenshot, DOM,
            and accessibility check.
          </p>
        </section>
      ) : (
        <div className="mt-6 space-y-4">
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm font-medium text-slate-100">Summary</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {result.summary}
            </p>
          </section>
          <section className="rounded-xl border border-slate-800 bg-slate-900">
            <div className="border-b border-slate-800 px-4 py-3">
              <h3 className="text-sm font-medium text-slate-100">Findings</h3>
            </div>
            <div className="divide-y divide-slate-800">
              {result.issues.map((issue) => (
                <button
                  key={issue.id}
                  type="button"
                  onClick={() => onSelectIssue(issue.id)}
                  className={`w-full p-4 text-left transition ${
                    selectedIssueId === issue.id
                      ? "bg-slate-800"
                      : "hover:bg-slate-800/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-100">
                        {issue.affectedElement}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {issue.issueType.replace("_", " ")}
                      </p>
                    </div>

                    <SeverityBadge severity={issue.severity} />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {selectedIssue ? <IssueDetail issue={selectedIssue} /> : null}
        </div>
      )}
    </section>
  );
};
