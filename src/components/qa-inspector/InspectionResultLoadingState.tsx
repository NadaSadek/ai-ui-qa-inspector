export const InspectionResultLoadingState = () => (
  <section
    className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    aria-label="Inspection report"
    aria-busy="true"
  >
    <div className="border-b border-slate-200 px-5 py-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-600">
        Inspection report
      </p>
      <div className="mt-2 flex items-center gap-3">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-600" />
        <p className="text-lg font-semibold text-slate-950">Inspecting UI state…</p>
      </div>
      <p className="mt-1 text-sm text-slate-600">
        Reviewing the screenshot and DOM snippet for evidence-backed QA findings.
      </p>
    </div>
    <div className="grid gap-5 p-5 lg:grid-cols-[360px_minmax(0,1fr)]">
      <div className="space-y-3">
        {[0, 1, 2].map((item) => (
          <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-4 w-48 animate-pulse rounded bg-slate-200" />
            <div className="mt-4 flex gap-2">
              <div className="h-7 w-24 animate-pulse rounded-full bg-slate-200" />
              <div className="h-7 w-16 animate-pulse rounded-full bg-slate-200" />
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-4 py-3">
          <div className="h-4 w-40 animate-pulse rounded bg-slate-200" />
        </div>
        <div className="space-y-5 p-4">
          <div>
            <div className="h-3 w-20 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              <div className="h-24 animate-pulse rounded-xl bg-slate-100" />
              <div className="h-24 animate-pulse rounded-xl bg-slate-100" />
            </div>
          </div>
          <div>
            <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-4 w-full animate-pulse rounded bg-slate-100" />
            <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-slate-100" />
          </div>
          <div>
            <div className="h-3 w-24 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-4 w-full animate-pulse rounded bg-slate-100" />
            <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
