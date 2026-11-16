import { homeServices } from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceIcon } from "./ServiceIcon";

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-title" className="services-section" id="services">
      <Container>
        <div className="services-section__top">
          <SectionHeading
            eyebrow="How we can help"
            id="services-title"
            title="Support for the whole journey."
            description="The right support at the right moment can make a complex process feel more manageable."
          />
          <a className="inline-link services-section__all" href="/services">
            Explore all services <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="service-grid">
          {homeServices.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-card__meta">
                <span className="service-card__number">{service.number}</span>
                <ServiceIcon name={service.icon} />
              </div>
              <span aria-hidden="true" className="service-card__arrow">
                ↗
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <span aria-hidden="true" className="service-card__rule" />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
