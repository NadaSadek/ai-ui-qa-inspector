export const InputRow = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div>
    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
      {label}
    </p>
    <div className="mt-1 leading-6 text-slate-300">{children}</div>
  </div>
);
