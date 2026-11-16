import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { Container } from "./Container";
import { BrandMark } from "./BrandMark";

const footerLinks = [
  { label: "About RheinBridge", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Study in Germany", href: "/study-in-germany" },
  { label: "University directory", href: "/universities" },
];

const legalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__main">
          <div className="site-footer__brand">
            <BrandMark />
            <p>
              Clear, considered guidance for students exploring higher
              education in Germany.
            </p>
          </div>
          <div className="site-footer__column">
            <h2>Explore</h2>
            {footerLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="site-footer__column">
            <h2>Get in touch</h2>
            {siteConfig.contact.email ? (
              <a href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            ) : (
              <span>Contact details to be confirmed</span>
            )}
            <Link className="site-footer__contact-link" href="/contact">
              Contact RheinBridge <span aria-hidden="true">↗</span>
            </Link>
          </div>
          {siteConfig.socialLinks.length > 0 && (
            <div className="site-footer__column">
              <h2>Follow</h2>
              {siteConfig.socialLinks.map((item) => (
                <a href={item.href} key={item.label} rel="noreferrer" target="_blank">
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="site-footer__bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </span>
          <div className="site-footer__legal">
            {legalLinks.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <span>Independent education guidance · Bangladesh to Germany</span>
        </div>
      </Container>
    </footer>
  );
}
