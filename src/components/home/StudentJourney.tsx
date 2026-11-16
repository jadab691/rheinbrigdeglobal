import { journeySteps } from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function StudentJourney() {
  return (
    <section aria-labelledby="journey-title" className="journey-section" id="student-journey">
      <Container>
        <SectionHeading
          className="journey-section__heading"
          description="Every student's route is different. This is a starting point for the conversations and decisions ahead."
          eyebrow="From first question to first day"
          id="journey-title"
          title="A journey with clear next steps."
        />
        <ol className="journey-grid">
          {journeySteps.map((step) => (
            <li className="journey-step" key={step.number}>
              <span className="journey-step__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="journey-note">
          Visa decisions are made by the relevant authorities. Requirements and
          timelines can change; always check official guidance.
        </p>
      </Container>
    </section>
  );
}
