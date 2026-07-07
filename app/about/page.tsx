import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { home } from "@/lib/content";

export const metadata = {
  title: "About Me | Taylor Howson",
};

export default function AboutPage() {
  return (
    <main>
      <section className="container-pad py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Image
              src="/images/taylor-howson-bike.jpeg"
              alt="Taylor Howson on a bike"
              width={1792}
              height={1344}
              priority
              className="aspect-[4/3] w-full rounded-lg border border-white object-cover object-[52%_48%] shadow-[0_28px_80px_rgba(15,23,42,0.14)]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
          </div>
          <div className="surface rounded-lg p-6 sm:p-9">
            <SectionHeader eyebrow="About Me" title={home.name} />
            <div className="prose-copy mt-8 max-w-[700px]">
              {home.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
