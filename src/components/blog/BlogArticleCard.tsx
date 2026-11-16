import Image from "next/image";
import Link from "next/link";
import type { BlogArticleSummary } from "@/data/blog";

interface BlogArticleCardProps {
  article: BlogArticleSummary;
  index: number;
  featured?: boolean;
}

export function BlogArticleCard({
  article,
  index,
  featured = false,
}: BlogArticleCardProps) {
  const articleHref = `/blog/${article.slug}`;

  return (
    <article
      className={`blog-card${featured ? " blog-card--featured" : ""}`}
    >
      <Link
        aria-label={`Read article: ${article.title}`}
        className="blog-card__visual"
        href={articleHref}
      >
        {featured && article.image ? (
          <Image
            alt={article.image.alt}
            className="blog-card__image"
            fill
            priority
            sizes="(max-width: 760px) 100vw, 50vw"
            src={article.image.src}
          />
        ) : (
          <span aria-hidden="true" className="blog-card__art">
            <span className="blog-card__art-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="blog-card__art-label">A guide for your next step</span>
            <span className="blog-card__art-mark">R</span>
          </span>
        )}
        {featured && (
          <span className="blog-card__featured-label">Featured article</span>
        )}
        {!featured && (
          <span className="blog-card__visual-category">{article.category}</span>
        )}
      </Link>
      <div className="blog-card__body">
        <span className="blog-card__category">{article.category}</span>
        <h3>
          <Link href={articleHref}>{article.title}</Link>
        </h3>
        <p>{article.excerpt}</p>
        <div className="blog-card__footer">
          <div className="blog-card__meta">
            <time dateTime={article.publishedAt}>{article.publishedLabel}</time>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
          <Link className="blog-card__link" href={articleHref}>
            Read article <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
