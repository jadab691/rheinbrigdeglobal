import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function UniversitiesHero() {
  return (
    <section
      aria-labelledby="universities-hero-title"
      className="universities-hero"
    >
      <Container>
        <nav aria-label="Breadcrumb" className="universities-breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">Universities</span>
            </li>
          </ol>
        </nav>
        <div className="universities-hero__grid">
          <div className="universities-hero__copy">
            <span className="eyebrow">A considered place to begin</span>
            <h1 id="universities-hero-title">
              Explore Universities <em>Across Germany.</em>
            </h1>
            <p>
              Discover German higher education institutions and explore options
              that align with your academic background and future goals.
            </p>
            <PrimaryButton href="/contact">
              Contact RheinBridge Global
            </PrimaryButton>
          </div>
          <figure className="universities-hero__visual">
            <Image
              alt="The Brandenburg Gate in Berlin, Germany"
              className="universities-hero__image"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              src="/images/germany/brandenburg-gate.jpg"
            />
            <figcaption className="universities-hero__caption">
              <span>Discover the possibilities</span>
              <span>Germany</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
