import type { Metric } from "@/lib/content";

export function MetricCard({ metric }: { metric: Metric }) {
  return (
    <div className="rounded-lg border border-slate-900/10 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.07)]">
      <p className="text-4xl font-semibold tracking-normal text-slate-950 sm:text-5xl">
        {metric.value}
      </p>
      <p className="mt-3 text-sm font-medium leading-6 text-[#C28A00]">{metric.label}</p>
    </div>
  );
}
