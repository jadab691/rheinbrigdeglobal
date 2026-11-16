import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { serviceQuestions } from "@/data/services";

export function ServicesFAQ() {
  return (
    <section
      aria-labelledby="services-faq-title"
      className="services-faq"
    >
      <Container className="services-faq__grid">
        <SectionHeading
          className="services-faq__heading"
          description="A few helpful answers before you take the next step."
          eyebrow="Frequently asked questions"
          id="services-faq-title"
          title="Good questions deserve clear answers."
        />
        <div className="services-faq__list">
          {serviceQuestions.map((item) => (
            <details className="services-faq__item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
