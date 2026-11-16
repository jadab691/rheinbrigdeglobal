import { Container } from "@/components/layout/Container";
import { PrimaryButton } from "@/components/shared/PrimaryButton";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function WhyGermany() {
  return (
    <section aria-labelledby="why-germany-title" className="germany">
      <Container className="germanyGrid">
        <SectionHeading
          eyebrow="Why Germany"
          id="why-germany-title"
          title="A focus shaped by possibility."
        />
        <div className="germanyCopy">
          <p>
            Germany has a varied higher education landscape, with public and
            private universities and programmes at different study levels.
            Exploring it carefully means comparing each programme&apos;s
            requirements, language and timelines rather than assuming one path
            fits everyone.
          </p>
          <p>
            This focus lets RheinBridge Global offer guidance around the
            questions students may encounter as they consider studying there.
          </p>
          <PrimaryButton href="/study-in-germany">
            Explore study in Germany
          </PrimaryButton>
        </div>
      </Container>
    </section>
  );
}
