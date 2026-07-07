import { ExternalLink, Mail, Phone } from "lucide-react";
import { contact } from "@/lib/content";

export function ContactCard() {
  const rows = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: contact.linkedIn,
      href: contact.linkedIn,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/-/g, "")}`,
    },
  ];

  return (
    <div className="surface rounded-lg p-6 sm:p-8">
      <p className="text-3xl font-semibold text-slate-950">{contact.name}</p>
      <p className="mt-2 text-slate-600">{contact.title}</p>
      <div className="mt-8 space-y-4">
        {rows.map((row) => {
          const Icon = row.icon;
          return (
            <a
              key={row.label}
              href={row.href}
              className="flex items-start gap-4 rounded-lg border border-slate-900/8 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#F5B700]/60 hover:bg-[#FFFBEA]"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#FFD21E] text-slate-950">
                <Icon size={18} />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[#C28A00]">
                  {row.label}
                </span>
                <span className="mt-1 block break-words text-base text-slate-950">
                  {row.value}
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
