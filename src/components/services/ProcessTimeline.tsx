import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { serviceProcess } from "@/data/services";

export function ProcessTimeline() {
  return (
    <section
      aria-labelledby="service-process-title"
      className="services-process"
    >
      <Container>
        <SectionHeading
          className="services-process__heading"
          description="A flexible sequence helps make the work easier to follow. The right timing and next steps depend on your plans and the programs you are considering."
          eyebrow="How our process works"
          id="service-process-title"
          title="One step at a time."
        />
        <ol className="services-process__list">
          {serviceProcess.map((step) => (
            <li className="services-process__step" key={step.number}>
              <span aria-hidden="true" className="services-process__number">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
