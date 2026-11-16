import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { financialCategories } from "@/data/study-in-germany";

export function FinancialPlanning() {
  return (
    <section
      aria-labelledby="study-finances-title"
      className="study-finances"
      id="financial-planning"
    >
      <Container>
        <div className="study-finances__intro">
          <SectionHeading
            description="Build a realistic plan around your own destination, institution, and circumstances. Costs can differ considerably."
            eyebrow="Financial planning"
            id="study-finances-title"
            title="Understand the full picture."
          />
          <span className="study-finances__stamp">Plan with care</span>
        </div>
        <ul className="study-finances__list">
          {financialCategories.map((category, index) => (
            <li key={category.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </li>
          ))}
        </ul>
        <p className="study-finances__footnote">
          For current fee details and any financial evidence required for a visa,
          use the information published by the university and the relevant
          German authorities.
        </p>
      </Container>
    </section>
  );
}
