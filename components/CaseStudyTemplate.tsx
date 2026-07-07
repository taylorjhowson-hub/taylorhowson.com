import type { CaseStudy } from "@/lib/content";
import { AtAGlanceCard } from "@/components/AtAGlanceCard";
import { ImageGallery } from "@/components/ImageGallery";
import { MetricCard } from "@/components/MetricCard";
import { SectionHeader } from "@/components/SectionHeader";

function CopyBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose-copy max-w-[800px]">
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function ResultsText({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="prose-copy max-w-[800px]">
      {paragraphs.map((paragraph) => {
        const isHeading = [
          "Product Outcomes",
          "Development Outcomes",
          "Business Impact",
          "Operational Improvements",
          "Technical Outcomes",
        ].includes(paragraph);
        return isHeading ? (
          <h3
            key={paragraph}
            className="mt-8 text-xl font-semibold text-slate-950"
          >
            {paragraph}
          </h3>
        ) : (
          <p key={paragraph}>{paragraph}</p>
        );
      })}
    </div>
  );
}

export function CaseStudyTemplate({ study }: { study: CaseStudy }) {
  return (
    <main>
      <section className="container-pad pb-16">
        <div className="mx-auto max-w-7xl rounded-lg border border-[#FFD21E]/35 bg-slate-950 p-6 text-white shadow-[0_26px_80px_rgba(15,23,42,0.18)] sm:p-9 [&_h2]:text-white">
          <SectionHeader title="Executive Summary" />
          <div className="mt-6 max-w-[800px]">
            {study.executiveSummary.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-0 text-lg leading-9 text-white/78 sm:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad py-14">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="At a Glance" />
          <div className="mt-7">
            <AtAGlanceCard items={study.atAGlance} />
          </div>
        </div>
      </section>

      <section className="container-pad py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <SectionHeader title="Problem" />
          <div className="mt-6">
            <CopyBlock paragraphs={study.problem} />
          </div>
        </div>
      </section>

      <section className="container-pad py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <SectionHeader title={study.discoveryTitle} />
          <div className="mt-6">
            <CopyBlock paragraphs={study.discovery} />
          </div>
        </div>
      </section>

      <section className="container-pad py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.36fr_0.64fr]">
          <SectionHeader title={study.approachTitle} />
          <div className="mt-6">
            <CopyBlock paragraphs={study.approach} />
          </div>
        </div>
      </section>

      <section className="container-pad py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title={study.solutionTitle} />
          {study.solutionIntro ? (
            <div className="mt-6">
              <CopyBlock paragraphs={study.solutionIntro} />
            </div>
          ) : null}
          <div className="mt-12 space-y-20">
            {study.solutionSections.map((section) => (
              <article key={section.title} className="rounded-lg border border-slate-900/8 bg-white/76 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.07)] sm:p-8">
                <h3 className="text-3xl font-semibold leading-tight text-slate-950">
                  {section.title}
                </h3>
                {section.eyebrow ? (
                  <p className="mt-3 text-lg font-semibold text-[#C28A00]">
                    {section.eyebrow}
                  </p>
                ) : null}
                <div className="mt-5">
                  <CopyBlock paragraphs={section.body} />
                </div>
                {section.gallery ? <ImageGallery items={section.gallery} /> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader title="Results" />
          {study.metrics.length > 0 ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {study.metrics.map((metric) => (
                <MetricCard key={`${metric.value}-${metric.label}`} metric={metric} />
              ))}
            </div>
          ) : null}
          <div className="mt-8">
            <ResultsText paragraphs={study.resultsText} />
          </div>
        </div>
      </section>

      <section className="container-pad py-16 pb-24">
        <div className="surface mx-auto max-w-7xl rounded-lg p-6 sm:p-9">
          <SectionHeader title="What I Learned" />
          <div className="mt-6">
            <CopyBlock paragraphs={study.whatILearned} />
          </div>
        </div>
      </section>
    </main>
  );
}
