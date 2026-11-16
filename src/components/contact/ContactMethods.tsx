import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/site-config";

const { contact } = siteConfig;

const methods = [
  {
    number: "01",
    label: "WhatsApp",
    value: contact.whatsappUrl ? "Chat with RheinBridge Global" : null,
    href: contact.whatsappUrl,
    external: true,
  },
  {
    number: "02",
    label: "Phone",
    value: contact.phone,
    href: contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : null,
    external: false,
  },
  {
    number: "03",
    label: "Email",
    value: contact.email,
    href: contact.email ? `mailto:${contact.email}` : null,
    external: false,
  },
  {
    number: "04",
    label: "Facebook",
    value: contact.facebookUrl ? "Visit our Facebook page" : null,
    href: contact.facebookUrl,
    external: true,
  },
] as const;

export function ContactMethods() {
  return (
    <section
      aria-labelledby="contact-methods-title"
      className="contact-methods"
      id="contact-options"
    >
      <Container>
        <div className="contact-methods__heading">
          <SectionHeading
            description="Choose the channel that works for you. We’ll publish each option here when its details are confirmed."
            eyebrow="Get in touch"
            id="contact-methods-title"
            title="Contact options"
          />
          <p className="contact-methods__note">
            Public contact details are not yet available.
          </p>
        </div>
        <ul className="contact-methods__list">
          {methods.map((method) => (
            <li className="contact-method" key={method.label}>
              <span aria-hidden="true" className="contact-method__number">
                {method.number}
              </span>
              <h3>{method.label}</h3>
              {method.href && method.value ? (
                <a
                  className="contact-method__value"
                  href={method.href}
                  rel={method.external ? "noreferrer" : undefined}
                  target={method.external ? "_blank" : undefined}
                >
                  {method.value}
                  {method.external && (
                    <span aria-hidden="true" className="contact-method__arrow">
                      ↗
                    </span>
                  )}
                </a>
              ) : (
                <span className="contact-method__placeholder">
                  {contact.placeholderLabel}
                </span>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
