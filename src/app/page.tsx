import { BlogPreview } from "@/components/home/BlogPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StudentJourney } from "@/components/home/StudentJourney";
import { StudyInGermany } from "@/components/home/StudyInGermany";
import { SuccessStoriesPreview } from "@/components/home/SuccessStoriesPreview";
import { UniversitiesPreview } from "@/components/home/UniversitiesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />
      <ServicesOverview />
      <WhyChooseUs />
      <StudyInGermany />
      <StudentJourney />
      <UniversitiesPreview />
      <SuccessStoriesPreview />
      <BlogPreview />
      <FinalCTA />
    </main>
  );
}
