import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";

const germanyHighlights = [
  "Public and private universities, each with a distinct profile",
  "Undergraduate and master's pathways across a range of subjects",
  "An international student experience in a new academic and cultural setting",
];

export function StudyInGermany() {
  return (
    <section aria-labelledby="germany-title" className="germany-section" id="study-in-germany">
      <Container className="germany-section__grid">
        <div className="germany-visual">
          <Image
            alt="The Brandenburg Gate, one of Berlin's best-known landmarks"
            className="germany-visual__image"
            fill
            sizes="(max-width: 900px) 100vw, 45vw"
            src="/images/germany/brandenburg-gate.jpg"
          />
          <span className="germany-visual__label">A new perspective awaits</span>
        </div>
        <div className="germany-section__copy">
          <span className="eyebrow">Why Germany</span>
          <h2 id="germany-title">
            An education that opens up <em>new perspectives.</em>
          </h2>
          <p>
            Germany offers a diverse higher education landscape, from public
            and private institutions to undergraduate and master&apos;s programmes.
            Compare each option carefully: teaching language, admission
            requirements and timelines differ by university and programme.
          </p>
          <ul className="germany-highlights">
            {germanyHighlights.map((highlight) => (
              <li key={highlight}>
                <span aria-hidden="true">+</span>
                {highlight}
              </li>
            ))}
          </ul>
          <div className="germany-section__actions">
            <PrimaryButton href="/study-in-germany">
              Discover study in Germany
            </PrimaryButton>
            <Link className="text-link" href="/universities">
              Explore universities <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
