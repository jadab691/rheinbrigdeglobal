"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { BlogArticleCard } from "@/components/blog/BlogArticleCard";
import type { BlogArticleSummary, BlogCategory } from "@/data/blog";

interface BlogListingProps {
  articles: readonly BlogArticleSummary[];
  categories: readonly BlogCategory[];
  featuredSlug: string;
}

type ArticleFilter = BlogCategory | "All topics";

export function BlogListing({
  articles,
  categories,
  featuredSlug,
}: BlogListingProps) {
  const [activeFilter, setActiveFilter] =
    useState<ArticleFilter>("All topics");
  const filters: readonly ArticleFilter[] = ["All topics", ...categories];
  const filteredArticles =
    activeFilter === "All topics"
      ? articles
      : articles.filter((article) => article.category === activeFilter);
  const featuredArticle = filteredArticles.find(
    (article) => article.slug === featuredSlug,
  );
  const remainingArticles = filteredArticles.filter(
    (article) => article.slug !== featuredSlug,
  );
  const gridArticles = featuredArticle ? remainingArticles : filteredArticles;

  return (
    <section aria-labelledby="blog-listing-title" className="blog-listing">
      <Container>
        <div className="blog-listing__intro">
          <div>
            <span className="eyebrow">Read, reflect, plan</span>
            <h2 id="blog-listing-title">Guides for the decisions ahead.</h2>
          </div>
          <p>
            Explore practical starting points, with official sources to help
            you verify the details that matter to your plans.
          </p>
        </div>

        {featuredArticle && (
          <div className="blog-listing__featured">
            <BlogArticleCard
              article={featuredArticle}
              featured
              index={articles.findIndex(
                (article) => article.slug === featuredArticle.slug,
              )}
            />
          </div>
        )}

        <div className="blog-listing__filter">
          <div className="blog-listing__filter-heading">
            <h3>Browse by topic</h3>
            <p aria-live="polite" className="blog-listing__count">
              Showing {filteredArticles.length}{" "}
              {filteredArticles.length === 1 ? "article" : "articles"}
            </p>
          </div>
          <div aria-label="Filter articles by category" className="blog-filters">
            {filters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter}
                className="blog-filter"
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="blog-listing__grid">
            {gridArticles.map((article) => (
              <BlogArticleCard
                article={article}
                index={articles.findIndex(
                  (item) => item.slug === article.slug,
                )}
                key={article.slug}
              />
            ))}
          </div>
        ) : (
          <div className="blog-listing__empty" role="status">
            <span aria-hidden="true">—</span>
            <h3>More on this topic is on the way.</h3>
            <p>
              We do not have a published article in this category yet. Browse
              all current guides in the meantime.
            </p>
            <button
              className="blog-listing__reset"
              onClick={() => setActiveFilter("All topics")}
              type="button"
            >
              View all topics
            </button>
          </div>
        )}

        <p className="blog-listing__disclaimer">
          Articles are general information, not official decisions or a
          substitute for checking current university and government guidance.
        </p>
      </Container>
    </section>
  );
}
