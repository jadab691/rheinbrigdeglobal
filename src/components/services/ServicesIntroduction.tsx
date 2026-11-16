import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ServicesIntroduction() {
  return (
    <section
      aria-labelledby="services-intro-title"
      className="services-intro"
    >
      <Container className="services-intro__grid">
        <SectionHeading
          eyebrow="A considered process"
          id="services-intro-title"
          title="Clear guidance, shaped around you."
        />
        <div className="services-intro__copy">
          <p>
            Pursuing higher education in another country comes with many
            decisions. RheinBridge Global helps students from Bangladesh
            navigate the steps involved in exploring and preparing for study in
            Germany.
          </p>
          <p>
            We bring structure to the research and preparation, while keeping
            guidance personal to each student. Universities and government
            authorities remain responsible for their own requirements and
            decisions.
          </p>
        </div>
      </Container>
    </section>
  );
}
