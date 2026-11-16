import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function SuccessStoriesCTA() {
  return (
    <section
      aria-labelledby="success-stories-cta-title"
      className="success-stories-cta"
    >
      <Container className="success-stories-cta__inner">
        <div aria-hidden="true" className="success-stories-cta__mark">
          <svg fill="none" viewBox="0 0 92 92">
            <path d="M9 68h74M18 64V39a28 28 0 0 1 56 0v25M30 64V40a16 16 0 0 1 32 0v24" />
          </svg>
        </div>
        <div className="success-stories-cta__copy">
          <span className="eyebrow">Your next step, thoughtfully planned</span>
          <h2 id="success-stories-cta-title">
            Your Germany study journey can begin here.
          </h2>
          <p>
            Explore how we can support your plans, or get in touch with your
            questions.
          </p>
        </div>
        <div className="success-stories-cta__actions">
          <PrimaryButton href="/services" variant="light">
            Explore Services
          </PrimaryButton>
          <PrimaryButton href="/contact" variant="outline">
            Contact Us
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
