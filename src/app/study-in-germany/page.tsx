import type { Metadata } from "next";
import "./study-in-germany.css";
import { AdmissionRequirements } from "@/components/study/AdmissionRequirements";
import { ApplicationProcess } from "@/components/study/ApplicationProcess";
import { FinancialPlanning } from "@/components/study/FinancialPlanning";
import { HigherEducation } from "@/components/study/HigherEducation";
import { LanguageRequirements } from "@/components/study/LanguageRequirements";
import { LivingInGermany } from "@/components/study/LivingInGermany";
import { OfficialResources } from "@/components/study/OfficialResources";
import { StudyCTA } from "@/components/study/StudyCTA";
import { StudyFAQ } from "@/components/study/StudyFAQ";
import { StudyHero } from "@/components/study/StudyHero";
import { StudyLevels } from "@/components/study/StudyLevels";
import { StudentVisaOverview } from "@/components/study/StudentVisaOverview";
import { WhyStudyGermany } from "@/components/study/WhyStudyGermany";

export const metadata: Metadata = {
  title: "Study in Germany",
  description:
    "Explore German higher education, study options, applications, student life, and official information with RheinBridge Global.",
  openGraph: {
    title: "Study in Germany | RheinBridge Global",
    description:
      "Clear information for students from Bangladesh exploring higher education opportunities in Germany.",
    type: "website",
  },
};

export default function StudyInGermanyPage() {
  return (
    <main className="study-page">
      <StudyHero />
      <WhyStudyGermany />
      <HigherEducation />
      <StudyLevels />
      <LanguageRequirements />
      <AdmissionRequirements />
      <ApplicationProcess />
      <FinancialPlanning />
      <LivingInGermany />
      <StudentVisaOverview />
      <StudyFAQ />
      <OfficialResources />
      <StudyCTA />
    </main>
  );
}
