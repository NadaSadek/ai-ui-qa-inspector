import Link from "next/link";
import { inspectionTargets } from "@/lib/data/inspectionTargets";

export default function FixturesIndexPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8 text-slate-950">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold">AI UI QA Inspector fixtures</h1>
        <ul className="mt-8 grid gap-3">
          {inspectionTargets.map((target) => (
            <li key={target.id}>
              <Link
                href={`/fixtures/${target.id}`}
                className="block rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                <span className="font-medium">{target.screenName}</span>
                <span className="ml-2 text-slate-500">| {target.stateName}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
