import Link from "next/link";
import { contact } from "@/lib/content";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="container-pad border-t border-slate-900/8 bg-white/56 py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-600">
          <Link href="/about" className="hover:text-slate-950">
            About
          </Link>
          <Link href="/case-studies" className="hover:text-slate-950">
            Case Studies
          </Link>
          <Link href="/contact" className="hover:text-slate-950">
            Contact
          </Link>
          <a href={`mailto:${contact.email}`} className="hover:text-slate-950">
            {contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
