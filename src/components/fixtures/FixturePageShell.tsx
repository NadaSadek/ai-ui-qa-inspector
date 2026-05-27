export const FixturePageShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white p-12 text-slate-950">
      {children}
    </main>
  );
};
