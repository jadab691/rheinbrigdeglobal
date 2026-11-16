import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function HigherEducation() {
  return (
    <section
      aria-labelledby="study-system-title"
      className="study-system"
      id="higher-education"
    >
      <Container>
        <SectionHeading
          className="study-system__heading"
          description="Germany's higher education system includes institutions with different academic profiles. Learn how they differ before choosing where to apply."
          eyebrow="Understanding higher education"
          id="study-system-title"
          title="Find the learning environment that fits."
          tone="light"
        />
        <div className="study-system__grid">
          <article className="study-system__type">
            <span className="study-system__index">01 / 02</span>
            <h3>Universities</h3>
            <p>
              Universities often place strong emphasis on academic study and
              research. Their subject range, teaching approach, and research
              opportunities vary by institution and program.
            </p>
          </article>
          <article className="study-system__type">
            <span className="study-system__index">02 / 02</span>
            <h3>Universities of Applied Sciences</h3>
            <p>
              These institutions typically emphasize applied learning and
              practice-oriented study. The balance of theory, projects, and
              practical work depends on the course.
            </p>
          </article>
        </div>
        <div className="study-system__note">
          <span aria-hidden="true">+</span>
          <p>
            <strong>Public or private is another distinction.</strong> Both
            types offer higher education, but programs, fees, and admissions
            can differ. Always check the details with the institution itself.
          </p>
        </div>
      </Container>
    </section>
  );
}
