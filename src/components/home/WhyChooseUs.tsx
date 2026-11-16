import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const principles = [
  {
    number: "01",
    title: "Personalised guidance",
    text: "Your academic background, priorities and questions shape the conversation.",
  },
  {
    number: "02",
    title: "Clear communication",
    text: "Understand what each stage involves, what is known and what still needs checking.",
  },
  {
    number: "03",
    title: "Structured application support",
    text: "Break preparation into manageable steps and keep important documents organised.",
  },
  {
    number: "04",
    title: "Student-focused assistance",
    text: "Explore options around your goals rather than a one-size-fits-all path.",
  },
  {
    number: "05",
    title: "Support throughout the journey",
    text: "From early research to pre-departure planning, get help with the next step.",
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="principles-title" className="principles-section">
      <Container className="principles-section__layout">
        <div className="principles-section__copy">
          <SectionHeading
            className="principles-section__heading"
            description="Thoughtful support should make the process easier to navigate, while keeping expectations clear and decisions in your hands."
            eyebrow="The RheinBridge approach"
            id="principles-title"
            title="Clarity at every step. Confidence in your own."
            tone="light"
          />
          <div className="principle-list">
            {principles.map((principle) => (
              <article className="principle" key={principle.number}>
                <span>{principle.number}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
          <a className="inline-link inline-link--light" href="/about">
            Our approach, in more detail <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="principles-visual">
          <Image
            alt="Berlin city skyline at dusk, with the Fernsehturm in the distance"
            className="principles-visual__image"
            fill
            sizes="(max-width: 900px) 100vw, 46vw"
            src="/images/germany/berlin-skyline.jpg"
          />
          <div aria-hidden="true" className="principles-visual__frame">
            <span>Perspective makes a difference.</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
