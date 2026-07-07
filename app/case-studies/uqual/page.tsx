import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getCaseStudy } from "@/lib/content";

export const metadata = {
  title: "Strategic Partnership with Uqual | Taylor Howson",
};

export default function UqualPage() {
  const study = getCaseStudy("uqual");

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseStudyHero study={study} />
      <CaseStudyTemplate study={study} />
    </>
  );
}
