import type { InspectionTarget } from "@/types/qa";
import Image from "next/image";

export const InspectionInputPanel = ({ target }: { target: InspectionTarget }) => (
  <section
    className="rounded-2xl border border-slate-200 bg-white shadow-sm"
    aria-label="UI under inspection"
  >
    <div className="border-b border-slate-200 px-5 py-4">
      <h2 className="text-xs font-medium uppercase tracking-wide text-slate-600">
        UI under inspection
      </h2>
      <div className="mt-1 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-950">{target.screenName}</p>
          <p className="mt-1 text-sm text-slate-600">{target.stateName}</p>
        </div>
      </div>
    </div>
    <div className="grid gap-5 p-5 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-stretch">
      <section
        aria-labelledby="screenshot-heading"
        className="flex min-h-0 flex-col lg:h-[560px] lg:max-h-[65vh]"
      >
        <h3 id="screenshot-heading" className="mb-3 text-sm font-medium text-slate-950">
          Screenshot
        </h3>

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
          <Image
            src={target.screenshotSrc}
            alt={`${target.screenName} — ${target.stateName}`}
            width={1600}
            height={900}
            loading="eager"
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="h-full w-full object-contain"
          />
        </div>
      </section>

      <section
        aria-labelledby="dom-snippet-heading"
        className="flex min-h-0 flex-col lg:h-[560px] lg:max-h-[65vh]"
      >
        <h3 id="dom-snippet-heading" className="mb-3 text-sm font-medium text-slate-950">
          DOM snippet
        </h3>
        <pre
          tabIndex={0}
          aria-labelledby="dom-snippet-heading"
          className="min-h-0 flex-1 overflow-auto whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-950 p-4 text-[11px] leading-5 text-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
        >
          <code>{target.domSnippet}</code>
        </pre>
      </section>
    </div>
  </section>
);
