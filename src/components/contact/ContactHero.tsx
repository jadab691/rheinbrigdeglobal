import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function ContactHero() {
  return (
    <section aria-labelledby="contact-hero-title" className="contact-hero">
      <Container>
        <nav aria-label="Breadcrumb" className="contact-breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">Contact</span>
            </li>
          </ol>
        </nav>
        <div className="contact-hero__grid">
          <div className="contact-hero__copy">
            <span className="eyebrow">A thoughtful first conversation</span>
            <h1 id="contact-hero-title">
              Let&apos;s Start{" "}
              <em>Your Journey to Germany.</em>
            </h1>
            <p>
              Tell us what you hope to study and where you are in your planning.
              We&apos;ll listen first, then discuss possible next steps based on
              your situation.
            </p>
            <div className="contact-hero__actions">
              <PrimaryButton href="#contact-form">Share your plans</PrimaryButton>
              <Link className="contact-hero__link" href="#contact-options">
                View contact options <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
          <aside aria-label="What to expect" className="contact-hero__panel">
            <span aria-hidden="true" className="contact-hero__orb" />
            <span className="contact-hero__panel-label">Your next step</span>
            <h2>A conversation shaped around your goals.</h2>
            <p>
              Every study plan is different. A first conversation is a chance
              to understand yours and consider the questions that matter.
            </p>
            <span className="contact-hero__panel-foot">
              Clear guidance. No guaranteed outcomes.
            </span>
          </aside>
        </div>
      </Container>
    </section>
  );
}
