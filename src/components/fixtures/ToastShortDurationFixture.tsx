import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const ToastShortDurationFixture = () => (
  <FixturePageShell>
    <div className="relative w-full max-w-4xl">
      <Card>
        <h1 className="text-3xl font-semibold">Profile settings</h1>
        <p className="mt-2 text-slate-500">Update account details.</p>
        <form aria-label="Profile settings" className="mt-8 max-w-md">
          <label htmlFor="display-name" className="text-sm font-medium">
            Display name
          </label>
          <input
            id="display-name"
            name="displayName"
            defaultValue="Nada"
            className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
          />
          <button
            type="submit"
            className="mt-6 rounded-xl bg-slate-950 px-4 py-3 font-medium text-white"
          >
            Save
          </button>
        </form>
      </Card>
      <div
        className="toast success absolute right-6 top-[-40px] w-80 rounded-2xl border border-green-200 bg-green-50 p-4 shadow-sm"
        data-duration="2500"
      >
        <strong className="text-green-800">Saved</strong>
        <p className="mt-1 text-sm text-green-700">Your changes were saved.</p>
      </div>
    </div>
  </FixturePageShell>
);
