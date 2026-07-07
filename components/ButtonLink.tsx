import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5 ${
        variant === "primary"
          ? "bg-[#FFD21E] text-slate-950 shadow-[0_16px_36px_rgba(255,210,30,0.32)] hover:bg-[#F5B700]"
          : "border border-slate-900/12 bg-white text-slate-950 hover:border-[#F5B700]/65 hover:bg-[#FFF3B0]/55"
      }`}
    >
      {children}
    </Link>
  );
}
