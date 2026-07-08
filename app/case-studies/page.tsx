import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { caseStudies } from "@/lib/content";

export const metadata = {
  title: "Case Studies | Taylor Howson",
};

export default function CaseStudiesPage() {
  const orderedCaseStudies = [...caseStudies].sort((a, b) => {
    if (a.slug === "applygrid") return 1;
    if (b.slug === "applygrid") return -1;
    return 0;
  });

  return (
    <main>
      <section className="container-pad py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <SectionHeader
              eyebrow="Case Studies"
              title="Selected product work"
            />
          </div>
          <div className="space-y-8">
            {orderedCaseStudies.map((study, index) => (
              <ProjectCard key={study.slug} study={study} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
