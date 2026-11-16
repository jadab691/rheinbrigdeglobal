import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { visaPreparationSteps } from "@/data/study-in-germany";

export function StudentVisaOverview() {
  return (
    <section
      aria-labelledby="study-visa-title"
      className="study-visa"
      id="student-visa"
    >
      <Container className="study-visa__grid">
        <div className="study-visa__intro">
          <SectionHeading
            description="Visa procedures and required evidence can change. Use current official information throughout your preparation."
            eyebrow="Student visa overview"
            id="study-visa-title"
            title="Prepare carefully. Verify officially."
            tone="light"
          />
          <p className="study-visa__notice">
            Visa decisions are made exclusively by the relevant German
            authorities. RheinBridge Global does not guarantee visa approval.
          </p>
          <Link
            className="study-visa__official-link"
            href="https://dhaka.diplo.de/bd-en/service/2692778-2692778"
            rel="noreferrer"
            target="_blank"
          >
            View the German Embassy in Dhaka&apos;s visa information
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <ol className="study-visa__steps">
          {visaPreparationSteps.map((step) => (
            <li key={step.number}>
              <span aria-hidden="true">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
