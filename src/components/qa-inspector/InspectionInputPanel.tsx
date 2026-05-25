import type { InspectionTarget } from "@/types/qa";
import { InputRow } from "./InputRow";
import { CheckoutScreenshotMock } from "./CheckoutScreenshotMock";

export const InspectionInputPanel = ({ target }: { target: InspectionTarget }) => (
  <section className="overflow-y-auto p-6" aria-label="Inspection input">
    <header>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Inspection input</p>
      <h1 className="mt-1 text-2xl font-semibold text-slate-100">AI UI QA Inspector</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
        This inspection package contains the rendered UI state, DOM snippet, and accessibility check
        result provided to the inspector.
      </p>
    </header>

    <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">UI state</p>
        <h2 className="mt-1 text-lg font-semibold text-slate-100">{target.screenName}</h2>
        <p className="mt-1 text-sm text-slate-400">{target.stateName}</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">{target.description}</p>
      </div>

      <div className="p-4">
        <CheckoutScreenshotMock />
      </div>
    </section>

    <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900">
      <div className="border-b border-slate-800 px-4 py-3">
        <h3 className="text-sm font-medium text-slate-100">DOM snippet</h3>
      </div>

      <div className="p-4">
        <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg bg-slate-950 p-4 text-xs leading-6 text-slate-300">
          <code>{target.domSnippet}</code>
        </pre>
      </div>
    </section>
  </section>
);
