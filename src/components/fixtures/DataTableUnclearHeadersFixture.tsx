import { Card } from "./Card";
import { FixturePageShell } from "./FixturePageShell";

export const DataTableUnclearHeadersFixture = () => (
  <FixturePageShell>
    <Card className="max-w-6xl">
      <h1 className="text-3xl font-semibold">Invoices</h1>
      <p className="mt-2 text-slate-500">Recent billing activity.</p>

      <table className="mt-8 w-full overflow-hidden rounded-2xl border border-slate-200 text-left">
        <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-600">
          <tr>
            <td className="px-5 py-3">Customer</td>
            <td className="px-5 py-3">Status</td>
            <td className="px-5 py-3">Amount</td>
            <td className="px-5 py-3">Date</td>
          </tr>
        </thead>

        <tbody>
          {[
            ["Brightlane Analytics", "Open", "$240", "Today"],
            ["Cedarflow", "Paid", "$1,240", "Yesterday"],
            ["OrbitDesk", "Failed", "$89", "May 22"],
          ].map((row) => (
            <tr key={row[0]} className="border-t border-slate-200">
              {row.map((cell) => (
                <td key={cell} className="px-5 py-4">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  </FixturePageShell>
);
