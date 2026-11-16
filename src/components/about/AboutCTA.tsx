import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function AboutCTA() {
  return (
    <section aria-labelledby="about-cta-title" className="cta">
      <Container className="ctaInner">
        <div className="ctaMark" aria-hidden="true">
          <svg fill="none" viewBox="0 0 92 92">
            <path d="M9 68h74M18 64V39a28 28 0 0 1 56 0v25M30 64V40a16 16 0 0 1 32 0v24" />
          </svg>
        </div>
        <div className="ctaCopy">
          <span className="eyebrow">A thoughtful first conversation</span>
          <h2 id="about-cta-title">
            Let&apos;s Explore Your Future <em>in Germany.</em>
          </h2>
          <p>Bring your questions. We&apos;ll help you find a place to begin.</p>
        </div>
        <PrimaryButton href="/contact" variant="light">
          Contact RheinBridge
        </PrimaryButton>
      </Container>
    </section>
  );
}
