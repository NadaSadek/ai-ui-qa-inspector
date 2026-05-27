export const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
};
