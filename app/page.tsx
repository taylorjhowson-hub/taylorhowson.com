import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies, contact, home } from "@/lib/content";

export default function HomePage() {
  const orderedCaseStudies = [...caseStudies].sort((a, b) => {
    if (a.slug === "applygrid") return 1;
    if (b.slug === "applygrid") return -1;
    return 0;
  });

  return (
    <main>
      <section className="container-pad relative overflow-hidden py-8 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_430px] lg:items-center">
          <div>
            <p className="eyebrow">
              {home.name}
            </p>
            <h1 className="text-balance mt-5 max-w-5xl text-5xl font-semibold leading-[0.98] text-slate-950 sm:text-7xl lg:text-8xl">
              {home.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
              Product strategy, discovery, and execution for complex workflows, AI-powered tools, and enterprise platforms.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/case-studies">View Case Studies</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact Me
              </ButtonLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
            <div className="absolute -inset-4 rounded-lg border border-white/80 bg-white/64 shadow-[0_30px_100px_rgba(15,23,42,0.12)]" />
            <div className="absolute -bottom-5 left-8 right-8 h-24 rounded-full bg-[#FFD21E]/28 blur-2xl" />
            <Image
              src="/images/taylor-howson-official-headshot.jpeg"
              alt="Taylor Howson professional headshot"
              width={1200}
              height={1500}
              priority
              className="relative aspect-[4/5] w-full rounded-lg border border-white object-cover object-[50%_24%] shadow-[0_24px_70px_rgba(15,23,42,0.18)]"
              sizes="(min-width: 1024px) 420px, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="container-pad py-8 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.44fr_0.56fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl">
              Product work that moves from ambiguity to shipped systems.
            </h2>
          </div>
          <div className="prose-copy max-w-[760px] rounded-lg border border-slate-900/8 bg-white/82 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.07)] sm:p-8">
            {home.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad pt-12 pb-6 sm:pt-16 sm:pb-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Featured Work" title="Case studies" />
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C28A00]"
            >
              View all
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="space-y-8">
            {orderedCaseStudies.map((study, index) => (
              <ProjectCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad pt-4 pb-12 sm:pt-6 sm:pb-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-lg border border-slate-900/10 bg-gradient-to-br from-white via-[#FFFBEA] to-[#FFF3B0] p-7 shadow-[0_30px_90px_rgba(15,23,42,0.1)] sm:p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="eyebrow">
              Contact
            </p>
            <h2 className="mt-3 text-balance text-3xl font-semibold text-slate-950 sm:text-5xl">
              {home.name}
            </h2>
            <p className="mt-3 text-slate-600">{contact.email}</p>
          </div>
          <ButtonLink href="/contact">Contact Me</ButtonLink>
        </div>
      </section>
    </main>
  );
}
