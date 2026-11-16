import { coreValues } from "@/data/about";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function CoreValues() {
  return (
    <section aria-labelledby="values-title" className="values">
      <Container>
        <SectionHeading
          className="valuesHeading"
          description="The principles we want students and families to experience in every conversation."
          eyebrow="What guides us"
          id="values-title"
          title="The values behind our guidance."
        />
        <div className="valuesGrid">
          {coreValues.map((value) => (
            <article className="value" key={value.number}>
              <span className="valueNumber">{value.number}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
