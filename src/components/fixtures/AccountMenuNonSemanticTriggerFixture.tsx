import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const AccountMenuNonSemanticTriggerFixture = () => (
  <FixturePageShell>
    <Card className="max-w-5xl">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-slate-500">Revenue overview</p>

      <div className="relative mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-center justify-between">
          <strong>North Analytics</strong>

          <div className="account-trigger flex items-center gap-3 rounded-full border border-slate-300 bg-white px-4 py-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm">
              NS
            </span>
            <span>Nada Sadek</span>
            <span>⌄</span>
          </div>
        </div>

        <div className="menu absolute right-5 top-20 w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="rounded-lg px-3 py-2">Profile</div>
          <div className="rounded-lg px-3 py-2">Billing</div>
          <div className="rounded-lg px-3 py-2 text-red-600">Sign out</div>
        </div>
      </div>
    </Card>
  </FixturePageShell>
);
