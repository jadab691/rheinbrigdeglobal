import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function AboutHero() {
  return (
    <section aria-labelledby="about-hero-title" className="hero">
      <Container>
        <nav aria-label="Breadcrumb" className="breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">About Us</span>
            </li>
          </ol>
        </nav>
        <div className="heroGrid">
          <div className="heroCopy">
            <span className="eyebrow">About RheinBridge Global</span>
            <h1 id="about-hero-title">
              Guiding Your Journey <em>to Germany.</em>
            </h1>
            <p>
              We help students from Bangladesh explore higher education
              opportunities in Germany with clear, thoughtful guidance—from
              early research through preparation for departure.
            </p>
            <div className="heroSignature">
              <span aria-hidden="true" />
              A considered approach to every next step
            </div>
          </div>
          <figure className="heroVisual">
            <Image
              alt="The Brandenburg Gate in Berlin, Germany"
              className="heroImage"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              src="/images/germany/brandenburg-gate.jpg"
            />
            <figcaption className="heroCaption">
              <span>Berlin</span>
              <span>Germany</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
