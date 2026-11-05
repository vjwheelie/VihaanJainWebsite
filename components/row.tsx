// A section on the 12-column grid: label in the first three columns, content
// in the rest, starting under a rule.
export function Row({
  id,
  label,
  children,
  className = "",
}: {
  id?: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`grid scroll-mt-6 gap-x-6 gap-y-3 pt-24 md:grid-cols-12 md:pt-32 ${className}`}>
      <h2 className="text-dim md:col-span-3 md:pt-4">{label}</h2>
      <div className="min-w-0 border-t border-fg md:col-span-9">{children}</div>
    </section>
  );
}
