"use client";

import { useMemo, useState } from "react";
import type { QAInspectionResult } from "@/lib/ai/schema";
import { inspectionTargets } from "@/lib/data/inspectionTargets";
import { InspectionInputPanel } from "./InspectionInputPanel";
import { InspectionResultPanel } from "./InspectionResultPanel";
import { InspectionCaseSelector } from "./InspectionCaseSelector";

export function QAInspectorView() {
  const [inspectionResult, setInspectionResult] = useState<QAInspectionResult | null>(null);
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);
  const [isInspecting, setIsInspecting] = useState(false);
  const [inspectionError, setInspectionError] = useState<string | null>(null);
  const [selectedTargetId, setSelectedTargetId] = useState(inspectionTargets[0].id);

  const selectedTarget = useMemo(
    () =>
      inspectionTargets.find((target) => target.id === selectedTargetId) ?? inspectionTargets[0],
    [selectedTargetId]
  );

  const selectedIssue = useMemo(() => {
    if (!inspectionResult) {
      return null;
    }

    return (
      inspectionResult.issues.find((issue) => issue.id === selectedIssueId) ??
      inspectionResult.issues[0]
    );
  }, [inspectionResult, selectedIssueId]);

  function handleSelectTarget(targetId: string) {
    setSelectedTargetId(targetId);
    setInspectionResult(null);
    setSelectedIssueId(null);
    setInspectionError(null);
  }

  async function handleRunInspection() {
    setIsInspecting(true);
    setInspectionError(null);
    setInspectionResult(null);
    setSelectedIssueId(null);

    try {
      const response = await fetch("/api/inspect-ui", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedTarget),
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
    <section className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6">
        <header className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
            AI UI QA Inspector
          </p>
          <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-950">
                Inspect rendered UI states for frontend QA issues
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                Find frontend QA issues from a screenshot and DOM snippet
              </p>
            </div>

            <button
              type="button"
              onClick={handleRunInspection}
              disabled={isInspecting}
              className="w-fit rounded-lg bg-indigo-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-400 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-700 focus-visible:ring-offset-2"
            >
              {isInspecting
                ? "Inspecting…"
                : inspectionResult
                  ? "Run inspection again"
                  : "Run inspection"}
            </button>
          </div>
          {inspectionError ? (
            <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {inspectionError}
            </p>
          ) : null}
        </header>

        <InspectionCaseSelector
          targets={inspectionTargets}
          selectedTargetId={selectedTarget.id}
          onChange={handleSelectTarget}
        />
        <InspectionInputPanel target={selectedTarget} />
        <InspectionResultPanel
          result={inspectionResult}
          selectedIssue={selectedIssue}
          selectedIssueId={selectedIssue?.id ?? null}
          onSelectIssue={setSelectedIssueId}
          isInspecting={isInspecting}
        />
      </div>
    </section>
  );
}
