import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function SuccessStoriesPreview() {
  return (
    <section aria-labelledby="stories-title" className="stories-section" id="success-stories">
      <Container className="stories-section__inner">
        <div className="stories-section__heading">
          <SectionHeading
            eyebrow="Student stories"
            id="stories-title"
            title="Every journey is personal."
            description="We look forward to sharing real student experiences—with their permission and in their own words."
          />
        </div>
        <div className="stories-empty">
          <span aria-hidden="true" className="stories-empty__quote">
            “
          </span>
          <p>
            We don&apos;t have student stories to share just yet. When we do,
            you&apos;ll find honest accounts of the questions, choices and
            moments along the way.
          </p>
          <span className="stories-empty__caption">
            Genuine stories, when they&apos;re ready.
          </span>
        </div>
      </Container>
    </section>
  );
}
