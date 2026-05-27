import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const OnboardingStepperLowContrastFixture = () => (
  <FixturePageShell>
    <Card className="max-w-4xl">
      <h1 className="text-3xl font-semibold">Set up your workspace</h1>
      <p className="mt-2 text-slate-500">Complete the steps below to start collaborating.</p>
      <ol className="mt-10 grid grid-cols-4 gap-4 text-center text-sm text-slate-400">
        {["Account", "Team", "Billing", "Finish"].map((step, index) => (
          <li key={step} className={step === "Team" ? "current" : undefined}>
            <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-400">
              {index + 1}
            </span>
            <span className="mt-2 block">{step}</span>
          </li>
        ))}
      </ol>
      <form className="mt-12">
        <h2 className="text-2xl font-semibold">Invite your team</h2>
        <p className="mt-2 text-slate-500">Add teammates to collaborate on projects.</p>
        <div className="mt-6">
          <label htmlFor="invite-email" className="text-sm font-medium mr-4">
            Teammate email
          </label>
          <input
            id="invite-email"
            name="inviteEmail"
            type="email"
            placeholder="teammate@example.com"
            className="mt-2 w-full max-w-md rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>
        <button
          type="submit"
          className="mt-6 block rounded-xl bg-slate-950 px-4 py-3 font-medium text-white"
        >
          Continue
        </button>
      </form>
    </Card>
  </FixturePageShell>
);
