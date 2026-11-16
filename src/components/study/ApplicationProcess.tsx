import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { applicationSteps } from "@/data/study-in-germany";

export function ApplicationProcess() {
  return (
    <section
      aria-labelledby="study-process-title"
      className="study-process"
      id="application-process"
    >
      <Container>
        <SectionHeading
          className="study-process__heading"
          description="A clear sequence can make a complex process easier to approach. Exact requirements and timing depend on the programs you choose."
          eyebrow="Application process"
          id="study-process-title"
          title="Move forward, one informed step at a time."
        />
        <ol className="study-process__list">
          {applicationSteps.map((step) => (
            <li className="study-process__step" key={step.number}>
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
