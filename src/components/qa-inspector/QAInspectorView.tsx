export function QAInspectorView() {
  return (
    <section className="grid min-h-screen grid-cols-[280px_minmax(0,1fr)_420px]">
      <aside className="border-r border-slate-800 p-4">
        <h1 className="text-lg font-semibold">AI UI QA Inspector</h1>
        <p className="mt-2 text-sm text-slate-400">
          Inspect frontend UI states using screenshot, DOM, and accessibility
          evidence.
        </p>
      </aside>

      <section className="p-6">
        <h2 className="text-sm font-medium text-slate-400">
          Evidence workspace
        </h2>
        <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900 p-6">
          Screenshot preview and DOM evidence will go here.
        </div>
      </section>

      <aside className="border-l border-slate-800 p-4">
        <h2 className="text-sm font-medium text-slate-400">QA Inspector</h2>
        <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900 p-4">
          Structured QA issues will go here.
        </div>
      </aside>
    </section>
  );
}
