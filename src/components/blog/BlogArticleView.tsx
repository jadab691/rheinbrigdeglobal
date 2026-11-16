import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import type { BlogArticle } from "@/data/blog";

interface BlogArticleViewProps {
  article: BlogArticle;
  relatedArticles: readonly BlogArticle[];
}

function getSectionId(text: string, index: number) {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `${slug}-${index}`;
}

export function BlogArticleView({
  article,
  relatedArticles,
}: BlogArticleViewProps) {
  const headings = article.content.flatMap((block, index) =>
    block.type === "heading"
      ? [{ id: getSectionId(block.text, index), text: block.text }]
      : [],
  );

  return (
    <article className="blog-article">
      <header className="blog-article__hero">
        <Container>
          <nav aria-label="Breadcrumb" className="blog-breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <span aria-current="page">Article</span>
              </li>
            </ol>
          </nav>
          <div className="blog-article__heading">
            <span className="blog-article__category">{article.category}</span>
            <h1>{article.title}</h1>
            <p>{article.introduction}</p>
            <dl className="blog-article__meta">
              <div>
                <dt>Published</dt>
                <dd>
                  <time dateTime={article.publishedAt}>
                    {article.publishedLabel}
                  </time>
                </dd>
              </div>
              <div>
                <dt>Reading time</dt>
                <dd>{article.readingTime}</dd>
              </div>
            </dl>
          </div>
          {article.image && (
            <figure className="blog-article__visual">
              <Image
                alt={article.image.alt}
                className="blog-article__image"
                fill
                priority
                sizes="(max-width: 760px) 100vw, 82vw"
                src={article.image.src}
              />
              <figcaption>{article.image.alt}</figcaption>
            </figure>
          )}
        </Container>
      </header>

      <Container className="blog-article__layout">
        {headings.length > 1 && (
          <aside className="blog-article__sidebar">
            <nav aria-label="On this page" className="blog-article__toc">
              <h2>On this page</h2>
              <ol>
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a href={`#${heading.id}`}>{heading.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
            <Link className="blog-article__back" href="/blog">
              <span aria-hidden="true">←</span> Back to the blog
            </Link>
          </aside>
        )}
        <div className="blog-article__main">
          <div className="blog-article__content">
            {article.content.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2 id={getSectionId(block.text, index)} key={block.text}>
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "paragraph") {
                return <p key={`${index}-${block.text}`}>{block.text}</p>;
              }

              if (block.type === "list") {
                return (
                  <ul key={`${index}-${block.items[0]}`}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              }

              return (
                <aside
                  aria-label={block.title}
                  className="blog-article__callout"
                  key={`${index}-${block.title}`}
                >
                  <h3>{block.title}</h3>
                  <p>{block.text}</p>
                </aside>
              );
            })}
          </div>

          <p className="blog-article__review-note">
            Information reviewed {article.reviewedLabel}. Requirements,
            processes, and costs can change; confirm current details with the
            official sources below.
          </p>

          <section
            aria-labelledby="blog-article-sources-title"
            className="blog-article__sources"
          >
            <h2 id="blog-article-sources-title">Official sources</h2>
            <p>
              Use these authoritative sources to verify current information
              before making decisions or applying.
            </p>
            <ul>
              {article.sources.map((source) => (
                <li key={source.href}>
                  <div>
                    <a
                      href={source.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {source.label} <span aria-hidden="true">↗</span>
                    </a>
                    <p>{source.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <nav
          aria-label="Related articles"
          className="blog-article__related"
        >
          <div className="blog-article__related-heading">
            <span className="eyebrow">Continue exploring</span>
            <h2>Related articles</h2>
          </div>
          <div className="blog-article__related-list">
            {relatedArticles.map((relatedArticle) => (
              <article key={relatedArticle.slug}>
                <span>{relatedArticle.category}</span>
                <h3>
                  <Link href={`/blog/${relatedArticle.slug}`}>
                    {relatedArticle.title}
                  </Link>
                </h3>
                <Link
                  className="blog-article__related-link"
                  href={`/blog/${relatedArticle.slug}`}
                >
                  Read article <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          <Link className="blog-article__back blog-article__back--bottom" href="/blog">
            <span aria-hidden="true">←</span> Back to all articles
          </Link>
        </nav>
      </Container>
    </article>
  );
}
