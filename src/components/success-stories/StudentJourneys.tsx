import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function StudentJourneys() {
  return (
    <section
      aria-labelledby="student-journeys-title"
      className="student-journeys"
      id="student-journeys"
    >
      <Container className="student-journeys__inner">
        <div className="student-journeys__heading">
          <SectionHeading
            description="We want this space to reflect real people and real experiences, shared thoughtfully."
            eyebrow="Student journeys"
            id="student-journeys-title"
            title="Real experiences, when they’re ready."
          />
        </div>
        <div className="student-journeys__empty">
          <span aria-hidden="true" className="student-journeys__marker">
            01
          </span>
          <p>
            We&apos;re building our first student success stories. As students
            begin their journeys with RheinBridge Global, we&apos;ll share their
            experiences here&mdash;with their permission.
          </p>
          <span className="student-journeys__caption">
            Genuine stories, shared with consent
          </span>
        </div>
      </Container>
    </section>
  );
}
