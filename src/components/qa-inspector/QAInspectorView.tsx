"use client";

import { useMemo, useState } from "react";
import type { QAInspectionResult } from "@/lib/ai/schema";
import { inspectionTarget } from "@/lib/data/inspectionTarget";
import { InspectionInputPanel } from "./InspectionInputPanel";
import { InspectionResultPanel } from "./InspectionResultPanel";

export function QAInspectorView() {
  const [inspectionResult, setInspectionResult] = useState<QAInspectionResult | null>(null);
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);
  const [isInspecting, setIsInspecting] = useState(false);
  const [inspectionError, setInspectionError] = useState<string | null>(null);

  const selectedIssue = useMemo(() => {
    if (!inspectionResult) {
      return null;
    }

    return (
      inspectionResult.issues.find((issue) => issue.id === selectedIssueId) ??
      inspectionResult.issues[0]
    );
  }, [inspectionResult, selectedIssueId]);

  async function handleRunInspection() {
    setIsInspecting(true);
    setInspectionError(null);

    try {
      const response = await fetch("/api/inspect-ui", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: inspectionTarget.id,
          screenName: inspectionTarget.screenName,
          stateName: inspectionTarget.stateName,
          description: inspectionTarget.description,
          screenshotDescription: inspectionTarget.screenshotDescription,
          domSnippet: inspectionTarget.domSnippet,
        }),
      });

      if (!response.ok) {
        throw new Error("Inspection request failed.");
      }

      const result = await response.json();

      setInspectionResult(result);
      setSelectedIssueId(null);
    } catch {
      setInspectionError("Could not run inspection. Try again.");
    } finally {
      setIsInspecting(false);
    }
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
        isInspecting={isInspecting}
        inspectionError={inspectionError}
      />
    </section>
  );
}
