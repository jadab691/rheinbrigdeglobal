import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { studyLevels } from "@/data/study-in-germany";

export function StudyLevels() {
  return (
    <section
      aria-labelledby="study-levels-title"
      className="study-levels"
      id="study-levels"
    >
      <Container>
        <SectionHeading
          className="study-levels__heading"
          description="Whether you are considering your first degree or postgraduate study, the program's published criteria are the place to begin."
          eyebrow="Study levels"
          id="study-levels-title"
          title="A pathway for your next academic step."
        />
        <div className="study-levels__grid">
          {studyLevels.map((level) => (
            <article className="study-levels__item" key={level.number}>
              <span aria-hidden="true">{level.number}</span>
              <div>
                <h3>{level.title}</h3>
                <p>{level.description}</p>
                <p className="study-levels__note">{level.note}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
