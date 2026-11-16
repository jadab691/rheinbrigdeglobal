import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero">
      <Image
        alt="The Brandenburg Gate in Berlin, Germany"
        className="hero__image"
        fill
        priority
        sizes="100vw"
        src="/images/germany/brandenburg-gate.jpg"
      />
      <div aria-hidden="true" className="hero__veil" />
      <Container className="hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            Bangladesh to Germany, with a plan
          </span>
          <h1 id="hero-title">
            Your Journey to Germany Starts With{" "}
            <em>the right guidance.</em>
          </h1>
          <p>
            From choosing the right university to preparing for your departure,
            RheinBridge Global helps Bangladeshi students navigate their journey
            toward higher education in Germany.
          </p>
          <div className="hero__actions">
            <PrimaryButton href="/study-in-germany" variant="light">
              Explore Study Opportunities
            </PrimaryButton>
            <PrimaryButton href="/contact" variant="outline">
              Talk to an Advisor
            </PrimaryButton>
          </div>
        </div>
        <div className="hero__caption">
          <span className="hero__caption-rule" />
          <span>Brandenburg Gate · Berlin</span>
        </div>
        <div aria-label="Our focus" className="hero-note">
          <span className="hero-note__mark" aria-hidden="true">
            RB
          </span>
          <span>
            <strong>A more considered way forward</strong>
            <small>Guidance built around your next step.</small>
          </span>
        </div>
      </Container>
      <div aria-hidden="true" className="hero__scroll">
        <span />
      </div>
    </section>
  );
}
