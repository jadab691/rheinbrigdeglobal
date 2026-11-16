import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Initial inquiry",
    description:
      "You share the study plans or questions you would like to discuss.",
  },
  {
    number: "02",
    title: "Understand your goals",
    description:
      "We learn about your academic background, interests, and current stage.",
  },
  {
    number: "03",
    title: "Discuss next steps",
    description:
      "Together, we consider the options and information relevant to you.",
  },
  {
    number: "04",
    title: "Guidance for your situation",
    description:
      "Any guidance is shaped around your circumstances, without guaranteed outcomes.",
  },
];

export function ContactProcess() {
  return (
    <section
      aria-labelledby="contact-process-title"
      className="contact-process"
    >
      <Container>
        <SectionHeading
          description="A clear first conversation can help you understand which questions to explore next."
          eyebrow="What happens next"
          id="contact-process-title"
          title="A considered process, one step at a time."
        />
        <ol className="contact-process__list">
          {steps.map((step) => (
            <li className="contact-process__step" key={step.number}>
              <span aria-hidden="true" className="contact-process__number">
                {step.number}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
