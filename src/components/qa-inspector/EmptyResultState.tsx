export const EmptyResultState = () => (
  <section
    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    aria-label="Inspection report"
  >
    <p className="text-xs font-medium uppercase tracking-wide text-slate-600">Inspection report</p>
    <h2 className="mt-1 text-lg font-semibold text-slate-950">No findings yet</h2>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
      Run the inspection to generate structured QA findings from the screenshot and DOM context.
    </p>
  </section>
);
