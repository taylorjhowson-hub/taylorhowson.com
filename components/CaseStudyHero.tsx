import Image from "next/image";
import type { CaseStudy } from "@/lib/content";

export function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <section className="container-pad py-16 sm:py-24">
      <div className="surface mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-lg p-7 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          {study.logoImage ? (
            <div className="mb-7 inline-flex rounded-lg border border-slate-900/10 bg-white p-3 shadow-[0_18px_44px_rgba(15,23,42,0.08)]">
              <Image
                src={study.logoImage}
                alt={study.logoAlt ?? `${study.title} logo`}
                width={360}
                height={126}
                className="h-12 w-auto object-contain sm:h-14"
                sizes="360px"
                priority
              />
            </div>
          ) : null}
          <p className="eyebrow">
            Case Study
          </p>
          <h1 className="text-balance mt-5 text-4xl font-semibold leading-[1.02] text-slate-950 sm:text-6xl lg:text-7xl">
            {study.title}
          </h1>
        </div>
        <p className="max-w-[700px] text-xl leading-9 text-slate-600">
          {study.description}
        </p>
      </div>
    </section>
  );
}
