import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Introduction() {
  return (
    <section aria-labelledby="intro-title" className="intro-section" id="our-approach">
      <Container className="intro-section__grid">
        <div className="intro-section__aside">
          <span className="eyebrow">A bridge between ambition and opportunity</span>
          <span aria-hidden="true" className="intro-section__ornament">
            01 <i />
          </span>
        </div>
        <div className="intro-section__copy">
          <SectionHeading
            className="intro-section__heading"
            eyebrow="A thoughtful beginning"
            id="intro-title"
            title="Big decisions deserve clear, personal guidance."
          />
          <p className="intro-section__body">
            RheinBridge Global helps students in Bangladesh make sense of the
            path to higher education in Germany. We help students explore
            universities and programmes, understand the process and prepare for
            each next step with clear, transparent guidance—without promising
            admission or visa outcomes.
          </p>
          <a className="inline-link" href="/about">
            Get to know RheinBridge <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
