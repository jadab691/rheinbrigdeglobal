import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function StudyCTA() {
  return (
    <section
      aria-labelledby="study-cta-title"
      className="study-cta"
      id="study-contact"
    >
      <Container className="study-cta__inner">
        <div aria-hidden="true" className="study-cta__mark">
          <svg fill="none" viewBox="0 0 92 92">
            <path d="M9 68h74M18 64V39a28 28 0 0 1 56 0v25M30 64V40a16 16 0 0 1 32 0v24" />
          </svg>
        </div>
        <div className="study-cta__copy">
          <span className="eyebrow">Your next step, thoughtfully planned</span>
          <h2 id="study-cta-title">
            Ready to Explore Your Study Opportunities in Germany?
          </h2>
          <p>
            Start with a conversation about your academic goals and the
            questions you want to explore.
          </p>
        </div>
        <div className="study-cta__actions">
          <PrimaryButton href="/universities" variant="light">
            Explore Universities
          </PrimaryButton>
          <PrimaryButton href="/contact" variant="outline">
            Contact RheinBridge Global
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
