import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const commitments = [
  {
    title: "Every journey is different",
    description:
      "Students bring different academic backgrounds, questions, and goals. Guidance should reflect that.",
  },
  {
    title: "Guidance, not guarantees",
    description:
      "We can help students understand and prepare for processes, but we do not promise outcomes.",
  },
  {
    title: "Decisions belong to institutions",
    description:
      "Universities decide admissions, and the relevant German authorities decide visa applications.",
  },
  {
    title: "Stories require permission",
    description:
      "We will only publish a student’s experience when they have given permission to share it.",
  },
];

export function SuccessStoriesCommitment() {
  return (
    <section
      aria-labelledby="success-stories-commitment-title"
      className="success-stories-commitment"
    >
      <Container className="success-stories-commitment__grid">
        <div className="success-stories-commitment__intro">
          <SectionHeading
            description="Trust is built through honest expectations, respectful support, and care for each student’s choices."
            eyebrow="Our commitment"
            id="success-stories-commitment-title"
            title="Honest guidance at every step."
          />
        </div>
        <ul className="success-stories-commitment__list">
          {commitments.map((commitment, index) => (
            <li
              className="success-stories-commitment__item"
              key={commitment.title}
            >
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{commitment.title}</h3>
                <p>{commitment.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
