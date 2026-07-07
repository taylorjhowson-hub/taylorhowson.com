import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getCaseStudy } from "@/lib/content";

export const metadata = {
  title: "ApplyGrid | Taylor Howson",
};

export default function ApplyGridPage() {
  const study = getCaseStudy("applygrid");

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
