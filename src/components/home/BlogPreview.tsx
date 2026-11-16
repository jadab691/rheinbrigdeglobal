import { articleIdeas } from "@/data/homepage";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function BlogPreview() {
  return (
    <section aria-labelledby="insights-title" className="insights-section" id="insights">
      <Container>
        <div className="insights-section__top">
          <SectionHeading
            eyebrow="Notes for the road"
            id="insights-title"
            title="Useful things to know."
            description="Clear, practical guidance for the questions that come up as you plan."
          />
          <span className="draft-note">Editorial topics in development</span>
        </div>
        <div className="article-grid">
          {articleIdeas.map((article, index) => (
            <article className="article-card" key={article.title}>
              <div className={`article-card__art article-card__art--${index + 1}`}>
                <span aria-hidden="true" className="article-card__art-mark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="article-card__category">{article.category}</span>
              </div>
              <div className="article-card__body">
                <span className="article-card__status">{article.readTime}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="article-disclaimer">
          These are draft article ideas, not published advice. Guidance will be
          reviewed and sourced before publication.
        </p>
      </Container>
    </section>
  );
}
