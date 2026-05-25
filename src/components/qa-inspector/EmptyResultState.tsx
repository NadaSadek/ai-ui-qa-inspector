export const EmptyResultState = ({
  onRunInspection,
  isInspecting,
  inspectionError,
}: {
  onRunInspection: () => void;
  isInspecting: boolean;
  inspectionError: string | null;
}) => (
  <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/70 p-5">
    <p className="text-sm font-medium text-slate-100">No inspection has been run yet</p>
    <p className="mt-2 text-sm leading-6 text-slate-400">
      Run the inspection to generate QA findings from the screenshot, DOM snippet, and accessibility
      check input.
    </p>

    <button
      type="button"
      onClick={onRunInspection}
      disabled={isInspecting}
      className="mt-5 rounded-lg bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60">
      {isInspecting ? "Inspecting…" : "Run inspection"}
    </button>

    {inspectionError ? <p className="mt-3 text-sm text-red-300">{inspectionError}</p> : null}
  </section>
);
