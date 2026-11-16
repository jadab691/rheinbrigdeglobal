import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { studyQuestions } from "@/data/study-in-germany";

export function StudyFAQ() {
  return (
    <section
      aria-labelledby="study-faq-title"
      className="study-faq"
      id="study-faq"
    >
      <Container className="study-faq__grid">
        <SectionHeading
          className="study-faq__heading"
          description="Start with the questions students often ask, then confirm program-specific and current information with official sources."
          eyebrow="Frequently asked questions"
          id="study-faq-title"
          title="Clear answers for your research."
        />
        <div className="study-faq__list">
          {studyQuestions.map((item) => (
            <details className="study-faq__item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
