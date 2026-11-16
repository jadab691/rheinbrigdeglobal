import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function UniversitiesCTA() {
  return (
    <section
      aria-labelledby="universities-cta-title"
      className="universities-cta"
    >
      <Container className="universities-cta__inner">
        <div className="universities-cta__mark" aria-hidden="true">
          <svg fill="none" viewBox="0 0 92 92">
            <path d="M9 68h74M18 64V39a28 28 0 0 1 56 0v25M30 64V40a16 16 0 0 1 32 0v24" />
          </svg>
        </div>
        <div className="universities-cta__copy">
          <span className="eyebrow">Thoughtful guidance, one step at a time</span>
          <h2 id="universities-cta-title">
            Need Help Choosing the Right University?
          </h2>
          <p>
            RheinBridge Global can help you explore options in light of your
            academic background and goals.
          </p>
        </div>
        <div className="universities-cta__actions">
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
