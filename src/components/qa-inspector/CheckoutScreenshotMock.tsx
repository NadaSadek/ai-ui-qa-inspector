export const CheckoutScreenshotMock = () => (
  <div className="rounded-lg border border-slate-800 bg-white p-6 text-slate-950">
    <div className="mx-auto max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Checkout</p>

      <h3 className="mt-2 text-xl font-semibold text-slate-950">Payment details</h3>

      <div className="mt-5">
        <input
          aria-label="Visual mock card number field"
          placeholder="Card number"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none"
        />
      </div>

      <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
        Payment failed. Try again.
      </p>

      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white">
        Pay now
      </button>
    </div>
  </div>
);
