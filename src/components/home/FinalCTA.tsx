import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-cta-title" className="final-cta">
      <Container className="final-cta__inner">
        <div className="final-cta__ornament" aria-hidden="true">
          <svg fill="none" viewBox="0 0 92 92">
            <path d="M9 68h74M18 64V39a28 28 0 0 1 56 0v25M30 64V40a16 16 0 0 1 32 0v24" />
          </svg>
        </div>
        <div className="final-cta__copy">
          <span className="eyebrow">Your next step starts here</span>
          <h2 id="final-cta-title">
            Your next chapter could <em>begin in Germany.</em>
          </h2>
          <p>
            Students and families are welcome to bring their questions and
            explore a thoughtful place to begin.
          </p>
        </div>
        <PrimaryButton href="/contact" variant="light">
          Talk to an advisor
        </PrimaryButton>
      </Container>
    </section>
  );
}
