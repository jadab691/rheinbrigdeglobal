import { approachSteps } from "@/data/about";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function OurApproach() {
  return (
    <section aria-labelledby="approach-title" className="approach">
      <Container className="approachGrid">
        <div className="approachIntro">
          <SectionHeading
            className="approachHeading"
            description="A clear process helps turn a big ambition into practical decisions, one step at a time."
            eyebrow="Our approach"
            id="approach-title"
            title="Guidance that moves at your pace."
          />
          <p className="approachNote">
            Your route may look different. We begin by understanding where you
            are and what you need to decide next.
          </p>
        </div>
        <ol className="approachList">
          {approachSteps.map((step) => (
            <li className="approachStep" key={step.number}>
              <span>{step.number}</span>
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
