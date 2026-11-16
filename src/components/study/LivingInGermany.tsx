import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { livingConsiderations } from "@/data/study-in-germany";

export function LivingInGermany() {
  return (
    <section
      aria-labelledby="study-living-title"
      className="study-living"
      id="living-in-germany"
    >
      <Container>
        <div className="study-living__intro">
          <SectionHeading
            eyebrow="Living in Germany"
            id="study-living-title"
            title="Prepare for life beyond the classroom."
          />
          <p>
            A thoughtful arrival plan can help you settle into a new place and
            make the most of your student experience.
          </p>
        </div>
        <div className="study-living__grid">
          {livingConsiderations.map((item, index) => (
            <article key={item.title}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
