import { QAIssue } from "@/lib/ai/schema";
import { EvidenceItem } from "./EvidenceItem";
import { ResultRow } from "./ResultRow";

export const IssueDetail = ({ issue }: { issue: QAIssue }) => (
  <section className="rounded-xl border border-slate-200 bg-white">
    <div className="border-b border-slate-200 px-4 py-3">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Selected finding</p>
      <h3 className="mt-1 text-sm font-semibold text-slate-950">{issue.affectedElement}</h3>
    </div>
    <div className="space-y-4 p-4">
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Evidence</p>
        <div className="mt-2 grid gap-3 md:grid-cols-2">
          <EvidenceItem title="Screenshot">{issue.evidence.screenshotObservation}</EvidenceItem>
          <EvidenceItem title="DOM">{issue.evidence.domEvidence}</EvidenceItem>
        </div>
      </div>
      <ResultRow label="User impact">{issue.userImpact}</ResultRow>
      <ResultRow label="Suggested fix">{issue.suggestedFix}</ResultRow>
    </div>
  </section>
);
