import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const SettingsModalFocusRiskFixture = () => (
  <FixturePageShell>
    <div className="relative w-full max-w-5xl rounded-3xl border border-slate-200 bg-slate-50 p-12">
      <h1 className="text-3xl font-semibold">Account settings</h1>
      <p className="mt-2 text-slate-500">Manage notifications and workspace preferences.</p>

      <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-slate-950/30">
        <Card className="max-w-xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Notification preferences</h2>
              <p className="mt-2 text-slate-500">Choose which updates you want to receive.</p>
            </div>

            <div className="close-control text-2xl text-slate-500">×</div>
          </div>

          <div className="mt-8 space-y-4">
            {["Product updates", "Billing reminders", "Weekly summary"].map((label) => (
              <label key={label} className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5" />
                {label}
              </label>
            ))}
          </div>

          <div className="mt-8 flex justify-end gap-3">
            <button type="button" className="rounded-xl border border-slate-300 px-4 py-3">
              Cancel
            </button>
            <button type="submit" className="rounded-xl bg-slate-950 px-4 py-3 text-white">
              Save
            </button>
          </div>
        </Card>
      </div>
    </div>
  </FixturePageShell>
);
