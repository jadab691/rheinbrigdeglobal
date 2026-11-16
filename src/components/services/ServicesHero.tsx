import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function ServicesHero() {
  return (
    <section
      aria-labelledby="services-hero-title"
      className="services-hero"
    >
      <Container>
        <nav aria-label="Breadcrumb" className="services-breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">Services</span>
            </li>
          </ol>
        </nav>
        <div className="services-hero__grid">
          <div className="services-hero__copy">
            <span className="eyebrow">Support for your next step</span>
            <h1 id="services-hero-title">
              Guidance at Every Step{" "}
              <em>of Your German Education Journey.</em>
            </h1>
            <p>
              From your first university search to preparing for life in
              Germany, discover how RheinBridge Global can support your next
              step.
            </p>
            <div className="services-hero__actions">
              <PrimaryButton href="/contact">
                Book a Consultation
              </PrimaryButton>
              <Link className="services-hero__text-link" href="#services-list">
                Explore our services <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
          <figure className="services-hero__visual">
            <Image
              alt="The Brandenburg Gate in Berlin, Germany"
              className="services-hero__image"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              src="/images/germany/brandenburg-gate.jpg"
            />
            <figcaption className="services-hero__caption">
              <span>Berlin</span>
              <span>Germany</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
