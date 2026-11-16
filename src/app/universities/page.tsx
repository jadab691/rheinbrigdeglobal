import type { Metadata } from "next";
import "./universities.css";
import { UniversitiesCTA } from "@/components/universities/UniversitiesCTA";
import { UniversityDirectory } from "@/components/universities/UniversityDirectory";
import { UniversitiesHero } from "@/components/universities/UniversitiesHero";
import { UniversityNotice } from "@/components/universities/UniversityNotice";
import { universities } from "@/data/universities";

export const metadata: Metadata = {
  title: "Universities in Germany",
  description:
    "Explore a curated directory of German universities with official websites and verified information to support your research.",
  openGraph: {
    title: "Universities in Germany | RheinBridge Global",
    description:
      "Search German universities by name, city, institution type, study level, and verified ownership information.",
    type: "website",
  },
};

export default function UniversitiesPage() {
  return (
    <main className="universities-page">
      <UniversitiesHero />
      <UniversityDirectory universities={universities} />
      <UniversityNotice />
      <UniversitiesCTA />
    </main>
  );
}
