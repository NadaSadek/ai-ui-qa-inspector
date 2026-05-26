import { QAIssue } from "@/lib/ai/schema";
import { EvidenceItem } from "./EvidenceItem";
import { ResultRow } from "./ResultRow";

export const IssueDetail = ({ issue }: { issue: QAIssue }) => (
  <section className="rounded-xl border border-slate-200 bg-white">
    <div className="border-b border-slate-200 px-4 py-3">
      <h3 className="text-sm font-medium text-slate-950">Finding detail</h3>
    </div>

    <div className="space-y-4 p-4">
      <ResultRow label="Affected element">{issue.affectedElement}</ResultRow>

      <ResultRow label="Evidence cited">
        <div className="space-y-3">
          <EvidenceItem title="Screenshot observation">
            {issue.evidence.screenshotObservation}
          </EvidenceItem>
          <EvidenceItem title="DOM evidence">{issue.evidence.domEvidence}</EvidenceItem>
        </div>
      </ResultRow>

      <ResultRow label="User impact">{issue.userImpact}</ResultRow>
      <ResultRow label="Suggested fix">{issue.suggestedFix}</ResultRow>
    </div>
  </section>
);
