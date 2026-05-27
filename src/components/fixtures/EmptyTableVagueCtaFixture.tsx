import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const EmptyTableVagueCtaFixture = () => (
  <FixturePageShell>
    <Card className="max-w-5xl">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold">Projects</h1>
          <p className="mt-2 text-slate-500">Track active implementation work.</p>
        </div>

        <button type="button" className="rounded-xl bg-slate-950 px-4 py-3 font-medium text-white">
          Add
        </button>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
        <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-medium uppercase tracking-wide text-slate-600">
          <span>Name</span>
          <span>Owner</span>
          <span>Status</span>
        </div>

        <div className="px-5 py-20 text-center">
          <h2 className="text-xl font-semibold">No data</h2>
          <p className="mt-2 text-slate-500">Try changing filters or add something.</p>
        </div>
      </div>
    </Card>
  </FixturePageShell>
);
