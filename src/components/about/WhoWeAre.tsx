import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function WhoWeAre() {
  return (
    <section aria-labelledby="who-we-are-title" className="whoSection">
      <Container className="whoGrid">
        <SectionHeading
          className="whoHeading"
          eyebrow="Who we are"
          id="who-we-are-title"
          title="A bridge between ambition and opportunity."
        />
        <div className="whoCopy">
          <p>
            RheinBridge Global is an education consultancy focused on helping
            students in Bangladesh explore higher education in Germany. We help
            make a complex journey easier to understand, from researching
            universities and programmes to preparing for life after admission.
          </p>
          <p>
            Our approach is centred on clear information, practical next steps
            and decisions that reflect each student&apos;s goals. We do not
            promise admission or visa outcomes; those decisions belong to
            universities and the relevant authorities.
          </p>
        </div>
      </Container>
    </section>
  );
}
