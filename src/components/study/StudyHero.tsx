import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

export function StudyHero() {
  return (
    <section aria-labelledby="study-hero-title" className="study-hero">
      <Container>
        <nav aria-label="Breadcrumb" className="study-breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">Study in Germany</span>
            </li>
          </ol>
        </nav>
        <div className="study-hero__grid">
          <div className="study-hero__copy">
            <span className="eyebrow">Explore your possibilities</span>
            <h1 id="study-hero-title">
              Discover Your Future Through Higher Education{" "}
              <em>in Germany.</em>
            </h1>
            <p>
              Explore Germany&apos;s universities, academic opportunities, and
              student life with clear information and guidance from RheinBridge
              Global.
            </p>
            <div className="study-hero__actions">
              <PrimaryButton href="/universities">
                Explore Universities
              </PrimaryButton>
              <Link className="study-hero__text-link" href="/contact">
                Talk to an Advisor <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <figure className="study-hero__visual">
            <Image
              alt="The Brandenburg Gate in Berlin, Germany"
              className="study-hero__image"
              fill
              priority
              sizes="(max-width: 760px) 100vw, 48vw"
              src="/images/germany/brandenburg-gate.jpg"
            />
            <figcaption className="study-hero__caption">
              <span>Brandenburg Gate</span>
              <span>Berlin, Germany</span>
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
