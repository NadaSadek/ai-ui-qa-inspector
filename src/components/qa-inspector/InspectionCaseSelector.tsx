import type { InspectionTarget } from "@/types/qa";

export const InspectionCaseSelector = ({
  targets,
  selectedTargetId,
  onChange,
}: {
  targets: InspectionTarget[];
  selectedTargetId: string;
  onChange: (targetId: string) => void;
}) => (
  <section
    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    aria-labelledby="case-selector-heading"
  >
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 id="case-selector-heading" className="text-sm font-semibold text-slate-950">
          Inspection case
        </h2>
        <p className="mt-1 text-sm text-slate-600">Choose the UI state to inspect</p>
      </div>

      <div className="sm:min-w-80">
        <label
          htmlFor="inspection-case"
          className="text-xs font-medium uppercase tracking-wide text-slate-600"
        >
          UI state
        </label>

        <select
          id="inspection-case"
          value={selectedTargetId}
          onChange={(event) => onChange(event.target.value)}
          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
        >
          {targets.map((target) => (
            <option key={target.id} value={target.id}>
              {target.screenName} | {target.stateName}
            </option>
          ))}
        </select>
      </div>
    </div>
  </section>
);
