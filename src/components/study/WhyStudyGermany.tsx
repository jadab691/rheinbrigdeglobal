import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { germanyReasons } from "@/data/study-in-germany";

export function WhyStudyGermany() {
  return (
    <section
      aria-labelledby="study-why-title"
      className="study-why"
      id="why-study-in-germany"
    >
      <Container>
        <div className="study-why__intro">
          <SectionHeading
            eyebrow="Why study in Germany?"
            id="study-why-title"
            title="A wide landscape of academic possibilities."
          />
          <p>
            Germany offers varied institutions and study environments. The
            right choice depends on your subject, goals, and the program&apos;s
            own details.
          </p>
        </div>
        <ul className="study-why__list">
          {germanyReasons.map((reason, index) => (
            <li className="study-why__item" key={reason.title}>
              <span aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
