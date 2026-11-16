import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function BlogHero() {
  return (
    <section aria-labelledby="blog-hero-title" className="blog-hero">
      <Container>
        <nav aria-label="Breadcrumb" className="blog-breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span aria-current="page">Blog</span>
            </li>
          </ol>
        </nav>
        <div className="blog-hero__grid">
          <div className="blog-hero__copy">
            <span className="eyebrow">The RheinBridge journal</span>
            <h1 id="blog-hero-title">
              Insights for Your <em>Journey to Germany</em>
            </h1>
            <p>
              Helpful, source-linked information for students from Bangladesh
              planning higher education in Germany. Use each article as a
              starting point, then confirm current requirements with the
              relevant university or authority.
            </p>
          </div>
          <aside aria-label="Editorial promise" className="blog-hero__note">
            <span>Research with care</span>
            <p>
              Clear explanations, official sources, and a reminder to check
              what may change.
            </p>
            <span aria-hidden="true" className="blog-hero__rule" />
          </aside>
        </div>
      </Container>
    </section>
  );
}
