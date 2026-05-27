import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const PricingMobileHierarchyFixture = () => {
  const plans = [
    {
      name: "Starter",
      price: "$19",
      description: "Good for trying the product",
    },
    {
      name: "Pro",
      price: "$49",
      description: "For growing teams",
      badge: "Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Advanced controls",
    },
  ];

  return (
    <FixturePageShell>
      <Card className="max-w-md">
        <h1 className="text-3xl font-semibold">Choose a plan</h1>
        <p className="mt-2 text-slate-500">Upgrade anytime.</p>

        <div className="mt-8 space-y-4">
          {plans.map((plan) => (
            <article key={plan.name} className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-base font-semibold">{plan.name}</h2>

                {plan.badge ? (
                  <span className="rounded-full bg-sky-100 px-2 py-1 text-xs font-medium text-sky-700">
                    {plan.badge}
                  </span>
                ) : null}
              </div>

              <p className="mt-4 text-3xl font-semibold">{plan.price}</p>
              <p className="mt-1 text-sm text-slate-500">{plan.description}</p>

              <button className="mt-5 w-full rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600">
                Select
              </button>
            </article>
          ))}
        </div>
      </Card>
    </FixturePageShell>
  );
};
