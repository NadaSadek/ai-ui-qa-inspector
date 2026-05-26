export const EvidenceItem = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
    <p className="text-xs font-medium text-slate-500">{title}</p>
    <p className="mt-1 text-sm leading-6 text-slate-600">{children}</p>
  </div>
);
