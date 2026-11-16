import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { admissionFactors } from "@/data/study-in-germany";

export function AdmissionRequirements() {
  return (
    <section
      aria-labelledby="study-admission-title"
      className="study-admission"
      id="admission-requirements"
    >
      <Container className="study-admission__grid">
        <div className="study-admission__intro">
          <SectionHeading
            description="Requirements are not identical across Germany. Review the current rules for each institution and program you are considering."
            eyebrow="Before you apply"
            id="study-admission-title"
            title="Understand what each program asks for."
          />
          <p className="study-admission__aside">
            A careful comparison can help you focus your research and prepare
            questions before starting an application.
          </p>
        </div>
        <ol className="study-admission__list">
          {admissionFactors.map((factor, index) => (
            <li key={factor}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <p>{factor}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
