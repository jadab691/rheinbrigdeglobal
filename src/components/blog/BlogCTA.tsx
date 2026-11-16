import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function BlogCTA() {
  return (
    <section aria-labelledby="blog-cta-title" className="blog-cta">
      <Container className="blog-cta__inner">
        <div aria-hidden="true" className="blog-cta__mark">
          <svg fill="none" viewBox="0 0 92 92">
            <path d="M9 68h74M18 64V39a28 28 0 0 1 56 0v25M30 64V40a16 16 0 0 1 32 0v24" />
          </svg>
        </div>
        <div className="blog-cta__copy">
          <span className="eyebrow">A thoughtful first conversation</span>
          <h2 id="blog-cta-title">Have questions about your next step?</h2>
          <p>
            Explore our services or get in touch to discuss your plans for
            higher education in Germany.
          </p>
        </div>
        <PrimaryButton href="/contact" variant="light">
          Contact RheinBridge
        </PrimaryButton>
      </Container>
    </section>
  );
}
