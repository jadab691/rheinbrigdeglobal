import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const guidanceSteps = [
  {
    number: "01",
    title: "University and program exploration",
    description:
      "Explore universities and study programs in light of your academic background, interests, and goals.",
  },
  {
    number: "02",
    title: "Admission application preparation",
    description:
      "Understand application requirements and organize materials for the application process. Admission decisions remain with each university.",
  },
  {
    number: "03",
    title: "Visa application guidance",
    description:
      "Review relevant official information and prepare for the process. Visa decisions are made by the responsible German authorities.",
  },
  {
    number: "04",
    title: "Accommodation preparation",
    description:
      "Learn about accommodation options and plan for housing applications and arrival arrangements.",
  },
  {
    number: "05",
    title: "Pre-departure support",
    description:
      "Organize travel and documents, and consider practical preparations for beginning student life in Germany.",
  },
];

export function SuccessStoriesApproach() {
  return (
    <section
      aria-labelledby="success-stories-approach-title"
      className="success-stories-approach"
      id="our-approach"
    >
      <Container className="success-stories-approach__grid">
        <div className="success-stories-approach__intro">
          <SectionHeading
            description="A Germany study journey involves many decisions. We help students work through them in a clear, considered order."
            eyebrow="Our approach"
            id="success-stories-approach-title"
            title="Support for each practical next step."
          />
          <p className="success-stories-approach__note">
            The right path is personal. Guidance begins with understanding the
            student and the choices ahead.
          </p>
        </div>
        <ol className="success-stories-approach__list">
          {guidanceSteps.map((step) => (
            <li
              className="success-stories-approach__step"
              key={step.number}
            >
              <span aria-hidden="true">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
