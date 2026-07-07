"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-white/82 backdrop-blur-xl">
      <nav className="container-pad mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between py-3">
        <Logo />
        <div className="hidden items-center gap-1 rounded-full border border-slate-900/10 bg-white/84 p-1 shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? "bg-[#FFD21E] text-slate-950 shadow-sm ring-1 ring-[#F5B700]/40"
                    : "text-slate-600 hover:bg-[#FFF3B0]/70 hover:text-slate-950"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-slate-900/12 bg-white text-slate-950 shadow-sm md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open ? (
        <div className="container-pad border-t border-slate-900/8 bg-white/96 pb-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-slate-900 hover:bg-[#FFF3B0]/70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
