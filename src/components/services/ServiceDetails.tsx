import { Container } from "@/components/layout/Container";
import { ServiceIcon } from "@/components/home/ServiceIcon";
import { serviceOffers } from "@/data/services";

export function ServiceDetails() {
  return (
    <div className="services-catalog" id="services-list">
      {serviceOffers.map((service) => (
        <section
          aria-labelledby={`${service.slug}-title`}
          className={[
            "service-detail",
            `service-detail--${service.tone}`,
            service.reverse ? "service-detail--reverse" : "",
          ]
            .filter(Boolean)
            .join(" ")}
          id={service.slug}
          key={service.slug}
        >
          <Container className="service-detail__grid">
            <div className="service-detail__identity">
              <span aria-hidden="true" className="service-detail__number">
                {service.number}
              </span>
              <span aria-hidden="true" className="service-detail__icon">
                <ServiceIcon name={service.icon} />
              </span>
              <span className="service-detail__label">
                RheinBridge guidance
              </span>
            </div>
            <div className="service-detail__content">
              <span className="eyebrow">{service.number} / Our services</span>
              <h2 id={`${service.slug}-title`}>{service.title}</h2>
              <p className="service-detail__summary">{service.summary}</p>
              <div className="service-detail__topics">
                <h3>What we can work through together</h3>
                <ul>
                  {service.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
              {service.note && (
                <aside className="service-detail__note">
                  <strong>Important to know</strong>
                  <p>{service.note}</p>
                </aside>
              )}
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
