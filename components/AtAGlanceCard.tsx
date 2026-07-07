type AtAGlanceCardProps = {
  items: Record<string, string>;
};

export function AtAGlanceCard({ items }: AtAGlanceCardProps) {
  return (
    <div className="surface rounded-lg p-6 sm:p-8">
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
        {Object.entries(items).map(([label, value]) => (
          <div key={label} className="rounded-lg border border-slate-900/8 bg-white/78 p-5">
            <dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#C28A00]">
              {label}
            </dt>
            <dd className="mt-2 text-base leading-7 text-slate-700">{value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}
