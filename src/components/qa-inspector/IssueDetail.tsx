import { QAIssue } from "@/lib/ai/schema";
import { EvidenceItem } from "./EvidenceItem";
import { ResultRow } from "./ResultRow";

export const IssueDetail = ({ issue }: { issue: QAIssue }) => (
  <section className="rounded-xl border border-slate-200 bg-white">
    <div className="border-b border-slate-200 px-4 py-3">
      <span className="mt-1 text-sm font-semibold text-slate-950">{issue.affectedElement}</span>
    </div>
    <div className="space-y-4 p-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">Evidence</p>
        <div className="mt-2 grid gap-3 md:grid-cols-2">
          <EvidenceItem title="Screenshot">{issue.evidence.visualObservation}</EvidenceItem>
          <EvidenceItem title="DOM">{issue.evidence.domEvidence}</EvidenceItem>
        </div>
      </div>
      <ResultRow label="User impact">{issue.userImpact}</ResultRow>
      <ResultRow label="Suggested fix">{issue.suggestedFix}</ResultRow>
    </div>
  </section>
);
