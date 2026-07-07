import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/lib/content";

export const metadata = {
  title: "Case Studies | Taylor Howson",
};

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="container-pad py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <SectionHeader
              eyebrow="Case Studies"
              title="Selected product work"
            />
            <p className="max-w-2xl text-xl leading-9 text-slate-600">
              A closer look at product strategy, discovery, execution, and measurable outcomes across AI-powered products, enterprise platforms, and strategic partnerships.
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <ProjectCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
