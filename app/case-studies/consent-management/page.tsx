import { notFound } from "next/navigation";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";
import { getCaseStudy } from "@/lib/content";

export const metadata = {
  title: "Consent Management Platform | Taylor Howson",
};

export default function ConsentManagementPage() {
  const study = getCaseStudy("consent-management");

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
