import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function SuccessStoriesHero() {
  return (
    <section
      aria-labelledby="success-stories-hero-title"
      className="success-stories-hero"
    >
      <Container>
        <nav aria-label="Breadcrumb" className="success-stories-breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">Success Stories</span>
            </li>
          </ol>
        </nav>
        <div className="success-stories-hero__grid">
          <div className="success-stories-hero__copy">
            <span className="eyebrow">Student journeys</span>
            <h1 id="success-stories-hero-title">
              Every Journey Starts <em>with a First Step.</em>
            </h1>
            <p>
              RheinBridge Global is committed to guiding students from
              Bangladesh through the decisions and preparations involved in
              pursuing higher education in Germany.
            </p>
            <div className="success-stories-hero__signature">
              <span aria-hidden="true" />
              Clear guidance, one step at a time
            </div>
          </div>
          <figure className="success-stories-hero__visual">
            <Image
              alt="The Brandenburg Gate in Berlin, Germany"
              className="success-stories-hero__image"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              src="/images/germany/brandenburg-gate.jpg"
            />
            <figcaption className="success-stories-hero__caption">
              <span>A new chapter begins</span>
              <span>Berlin, Germany</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
