// src/components/qa-inspector/QAInspectorView.tsx

"use client";

import { useMemo, useState } from "react";
import type { QAInspectionResult } from "@/lib/ai/schema";
import { inspectionTarget } from "@/lib/data/inspectionTarget";
import { mockInspectionResult } from "@/lib/data/mockInspectionResult";
import { InspectionInputPanel } from "./InspectionInputPanel";
import { InspectionResultPanel } from "./InspectionResultPanel";

export function QAInspectorView() {
  const [inspectionResult, setInspectionResult] =
    useState<QAInspectionResult | null>(null);
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);

  const selectedIssue = useMemo(() => {
    if (!inspectionResult) {
      return null;
    }

    return (
      inspectionResult.issues.find((issue) => issue.id === selectedIssueId) ??
      inspectionResult.issues[0]
    );
  }, [inspectionResult, selectedIssueId]);

  function handleRunInspection() {
    setInspectionResult(mockInspectionResult);
    setSelectedIssueId(null);
  }

  return (
    <section className="grid min-h-screen grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] bg-slate-950 text-slate-100">
      <InspectionInputPanel target={inspectionTarget} />
      <InspectionResultPanel
        result={inspectionResult}
        selectedIssue={selectedIssue}
        selectedIssueId={selectedIssue?.id ?? null}
        onSelectIssue={setSelectedIssueId}
        onRunInspection={handleRunInspection}
      />
    </section>
  );
}
