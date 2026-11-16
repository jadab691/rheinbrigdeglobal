import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { servicePrinciples } from "@/data/services";

export function WhyRheinBridge() {
  return (
    <section
      aria-labelledby="why-rheinbridge-title"
      className="services-principles"
    >
      <Container>
        <SectionHeading
          className="services-principles__heading"
          description="The way we work matters as much as the information we share."
          eyebrow="Why work with RheinBridge Global"
          id="why-rheinbridge-title"
          title="Support with clarity and care."
          tone="light"
        />
        <ol className="services-principles__list">
          {servicePrinciples.map((principle) => (
            <li className="services-principles__item" key={principle.number}>
              <span aria-hidden="true">{principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
