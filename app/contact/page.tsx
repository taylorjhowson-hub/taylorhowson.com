import { ContactCard } from "@/components/ContactCard";
import { SectionHeader } from "@/components/SectionHeader";
import { contact } from "@/lib/content";

export const metadata = {
  title: "Contact | Taylor Howson",
};

export default function ContactPage() {
  return (
    <main>
      <section className="container-pad py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <SectionHeader
            eyebrow="Contact"
            title={contact.name}
            description={contact.title}
          />
          <ContactCard />
        </div>
      </section>
    </main>
  );
}
