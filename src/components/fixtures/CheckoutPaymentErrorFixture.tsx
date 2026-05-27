import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const CheckoutPaymentErrorFixture = () => {
  return (
    <FixturePageShell>
      <Card className="max-w-2xl">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Checkout</p>
        <h1 className="mt-3 text-3xl font-semibold">Payment details</h1>
        <div className="mt-8">
          <input
            id="card-number"
            name="cardNumber"
            placeholder="Card number"
            autoComplete="cc-number"
            className="w-full rounded-xl border border-slate-300 px-4 py-4 text-base"
          />
        </div>
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-4 text-red-600">
          Payment failed. Try again.
        </p>
        <button className="mt-6 w-full rounded-xl bg-slate-950 px-4 py-4 font-medium text-white">
          Pay now
        </button>
      </Card>
    </FixturePageShell>
  );
};
