import { universityExamples } from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function UniversitiesPreview() {
  return (
    <section aria-labelledby="universities-title" className="universities-section" id="universities">
      <Container>
        <div className="universities-section__top">
          <SectionHeading
            eyebrow="Start exploring"
            id="universities-title"
            title="A few places to begin."
            description="Germany's higher education landscape is broad. These institutions are examples to explore—not partner universities or recommendations."
          />
          <a className="inline-link" href="/universities">
            View university directory <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="university-list">
          {universityExamples.map((university, index) => (
            <article className="university-card" key={university.name}>
              <span className="university-card__index">
                0{index + 1}
              </span>
              <div>
                <h3>{university.name}</h3>
                <span>{university.city}, Germany</span>
              </div>
              <a
                aria-label={`Visit the official ${university.name} website`}
                href={university.href}
                rel="noreferrer"
                target="_blank"
              >
                Official website <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
        <p className="university-disclaimer">
          RheinBridge Global is not affiliated with the institutions shown.
          Always check each university&apos;s official website for current
          programme information and requirements.
        </p>
      </Container>
    </section>
  );
}
