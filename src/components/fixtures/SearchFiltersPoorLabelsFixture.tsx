import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const SearchFiltersPoorLabelsFixture = () => (
  <FixturePageShell>
    <Card className="max-w-5xl">
      <h1 className="text-3xl font-semibold">Customer search</h1>
      <p className="mt-2 text-slate-500">Filter accounts by customer and billing details.</p>

      <form className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <div>
          <label htmlFor="query" className="text-sm font-medium">
            Search
          </label>
          <input
            id="query"
            name="query"
            placeholder="Name, email, company"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="type" className="text-sm font-medium">
            Type
          </label>
          <select
            id="type"
            name="type"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
            defaultValue=""
          >
            <option value="" disabled>
              Select
            </option>
            <option value="customer">Customer</option>
            <option value="trial">Trial</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>

        <div>
          <label htmlFor="from" className="text-sm font-medium">
            From
          </label>
          <input
            id="from"
            name="from"
            placeholder="dd/mm/yyyy"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
          />
        </div>

        <div>
          <label htmlFor="to" className="text-sm font-medium">
            To
          </label>
          <input
            id="to"
            name="to"
            placeholder="dd/mm/yyyy"
            className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="col-start-2 rounded-xl bg-slate-950 px-4 py-3 font-medium text-white"
        >
          Apply filters
        </button>
      </form>
    </Card>
  </FixturePageShell>
);
