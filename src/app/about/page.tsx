import type { Metadata } from "next";
import "./about.css";
import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutHero } from "@/components/about/AboutHero";
import { CoreValues } from "@/components/about/CoreValues";
import { MissionVision } from "@/components/about/MissionVision";
import { OurApproach } from "@/components/about/OurApproach";
import { WhyGermany } from "@/components/about/WhyGermany";
import { WhoWeAre } from "@/components/about/WhoWeAre";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn how RheinBridge Global supports students from Bangladesh exploring higher education opportunities in Germany.",
  openGraph: {
    title: "About RheinBridge Global",
    description:
      "Our purpose, values and approach to clear, student-focused education guidance.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <AboutHero />
      <WhoWeAre />
      <MissionVision />
      <CoreValues />
      <OurApproach />
      <WhyGermany />
      <AboutCTA />
    </main>
  );
}
