import type { InspectionTarget } from "@/types/qa";
import Image from "next/image";
import checkoutPaymentError from "@/../public/screenshots/checkout-payment-error.png";

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
    <div className="grid gap-5 p-5 lg:grid-cols-[minmax(0,1fr)_420px]">
      <section>
        <div className="mb-3">
          <h3 className="text-sm font-medium text-slate-950">Screenshot</h3>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <Image
            src={checkoutPaymentError}
            alt="Checkout form payment error state"
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="mx-auto h-auto w-full max-w-2xl object-contain"
          />
        </div>
      </section>
      <section>
        <div className="mb-3">
          <h3 id="dom-snippet-heading" className="text-sm font-medium text-slate-950">
            DOM snippet
          </h3>
        </div>
        <pre
          tabIndex={0}
          aria-labelledby="dom-snippet-heading"
          className="max-h-[300px] overflow-auto whitespace-pre-wrap rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs leading-6 text-slate-200"
        >
          <code>{target.domSnippet}</code>
        </pre>
      </section>
    </div>
  </section>
);
