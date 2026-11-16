import { Container } from "@/components/layout/Container";

const statements = [
  {
    label: "Our mission",
    title: "Help students make informed choices.",
    description:
      "We are committed to offering clear, structured guidance so students can understand their options and make thoughtful decisions about studying in Germany.",
  },
  {
    label: "Our vision",
    title: "A more considered path to global learning.",
    description:
      "We envision students approaching international education with better information, greater confidence and support that encourages both academic and personal growth.",
  },
] as const;

export function MissionVision() {
  return (
    <section aria-label="Our mission and vision" className="beliefs">
      <Container className="beliefsGrid">
        {statements.map((statement, index) => (
          <article className="belief" key={statement.label}>
            <span className="beliefNumber">0{index + 1}</span>
            <span className="beliefLabel">{statement.label}</span>
            <h2>{statement.title}</h2>
            <p>{statement.description}</p>
          </article>
        ))}
      </Container>
    </section>
  );
}
