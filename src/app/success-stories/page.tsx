import type { Metadata } from "next";
import "./success-stories.css";
import { SuccessStoriesApproach } from "@/components/success-stories/SuccessStoriesApproach";
import { SuccessStoriesCommitment } from "@/components/success-stories/SuccessStoriesCommitment";
import { SuccessStoriesCTA } from "@/components/success-stories/SuccessStoriesCTA";
import { SuccessStoriesHero } from "@/components/success-stories/SuccessStoriesHero";
import { StudentJourneys } from "@/components/success-stories/StudentJourneys";

export const metadata: Metadata = {
  title: "Student Journeys",
  description:
    "Learn how RheinBridge Global guides students from Bangladesh through their higher education journey in Germany. Genuine student stories will be shared with permission.",
  openGraph: {
    title: "Student Journeys | RheinBridge Global",
    description:
      "Our approach to student guidance, with genuine experiences to be shared when students are ready and have given permission.",
    type: "website",
  },
};

export default function SuccessStoriesPage() {
  return (
    <main className="success-stories-page">
      <SuccessStoriesHero />
      <SuccessStoriesApproach />
      <StudentJourneys />
      <SuccessStoriesCommitment />
      <SuccessStoriesCTA />
    </main>
  );
}
