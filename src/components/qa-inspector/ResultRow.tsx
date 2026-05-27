export const ResultRow = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">{label}</p>
      <div className="mt-1 text-sm leading-6 text-slate-900">{children}</div>
    </div>
  );
};
