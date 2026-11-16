import Link from "next/link";
import { Container } from "./Container";
import { BrandMark } from "./BrandMark";
import { NavigationLinks } from "./NavigationLinks";

export function Navbar() {
  return (
    <>
      <div className="utility-bar">
        <Container className="utility-bar__inner">
          <span>Guidance for students in Bangladesh</span>
          <span className="utility-bar__note">
            Your next chapter, thoughtfully planned.
          </span>
        </Container>
      </div>
      <header className="site-header">
        <Container className="site-header__inner">
          <BrandMark />
          <NavigationLinks variant="desktop" />
          <Link className="header-cta" href="/contact">
            <span>Book a consultation</span>
            <span aria-hidden="true" className="header-cta__arrow">
              ↗
            </span>
          </Link>
          <details className="mobile-nav">
            <summary aria-label="Toggle navigation menu" className="mobile-nav__toggle">
              <span />
              <span />
            </summary>
            <NavigationLinks variant="mobile" />
          </details>
        </Container>
      </header>
    </>
  );
}
