import type { Metadata } from "next";
import "./services.css";
import { ProcessTimeline } from "@/components/services/ProcessTimeline";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesIntroduction } from "@/components/services/ServicesIntroduction";
import { WhyRheinBridge } from "@/components/services/WhyRheinBridge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore RheinBridge Global's university, application, visa, accommodation, and pre-departure guidance for students from Bangladesh planning to study in Germany.",
  openGraph: {
    title: "Services | RheinBridge Global",
    description:
      "Clear, student-focused guidance for the steps involved in exploring higher education in Germany.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="services-page">
      <ServicesHero />
      <ServicesIntroduction />
      <ServiceDetails />
      <ProcessTimeline />
      <WhyRheinBridge />
      <ServicesFAQ />
      <ServicesCTA />
    </main>
  );
}
