import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Taylor Howson home"
      className="inline-flex items-center gap-3"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-[#FFD21E] text-sm font-semibold tracking-[0.08em] text-slate-950 shadow-sm outline outline-1 outline-[#F5B700]/45">
        TH
      </span>
      <span className="hidden text-sm font-semibold tracking-wide text-slate-950 sm:inline">
        Taylor Howson
      </span>
    </Link>
  );
}
