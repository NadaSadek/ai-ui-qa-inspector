import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const LoginUnclearErrorFixture = () => (
  <FixturePageShell>
    <Card className="max-w-xl">
      <form aria-label="Sign in">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <p className="mt-2 text-slate-500">Sign in to continue.</p>
        <div className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue="nada@example.com"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3"
            />
          </div>
          <p className="error rounded-xl bg-red-50 px-4 py-3 text-red-600">Something went wrong.</p>
          <button
            type="submit"
            className="w-full rounded-xl bg-slate-950 px-4 py-4 font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </Card>
  </FixturePageShell>
);
