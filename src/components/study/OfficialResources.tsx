import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { officialResources } from "@/data/study-in-germany";

export function OfficialResources() {
  return (
    <section
      aria-labelledby="study-resources-title"
      className="study-resources"
      id="official-resources"
    >
      <Container>
        <div className="study-resources__intro">
          <SectionHeading
            description="Use authoritative sources for current program, admission, and visa information."
            eyebrow="Continue your research"
            id="study-resources-title"
            title="Go straight to the source."
          />
          <p>
            RheinBridge Global offers guidance, but official institutions
            determine their own requirements and decisions.
          </p>
        </div>
        <ul className="study-resources__list">
          {officialResources.map((resource, index) => (
            <li key={resource.name}>
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <Link
                href={resource.href}
                rel="noreferrer"
                target="_blank"
                aria-label={`${resource.linkLabel} (opens in a new tab)`}
              >
                {resource.linkLabel} <span aria-hidden="true">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
