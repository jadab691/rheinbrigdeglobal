import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function ServicesCTA() {
  return (
    <section
      aria-labelledby="services-cta-title"
      className="services-cta"
    >
      <Container className="services-cta__inner">
        <div aria-hidden="true" className="services-cta__mark">
          <svg fill="none" viewBox="0 0 92 92">
            <path d="M9 68h74M18 64V39a28 28 0 0 1 56 0v25M30 64V40a16 16 0 0 1 32 0v24" />
          </svg>
        </div>
        <div className="services-cta__copy">
          <span className="eyebrow">A thoughtful first conversation</span>
          <h2 id="services-cta-title">Let&apos;s Plan Your Next Step.</h2>
          <p>
            Every student&apos;s academic journey is different. Start with a
            conversation about your goals and explore the possibilities.
          </p>
        </div>
        <div className="services-cta__actions">
          <PrimaryButton href="/contact" variant="light">
            Book a Consultation
          </PrimaryButton>
          <PrimaryButton href="/contact" variant="outline">
            Contact Us
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
