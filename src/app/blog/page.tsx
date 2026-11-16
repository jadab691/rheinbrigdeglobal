import type { Metadata } from "next";
import "./blog.css";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListing } from "@/components/blog/BlogListing";
import {
  blogArticleSummaries,
  blogCategories,
  featuredArticleSlug,
} from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical, source-linked information for students from Bangladesh planning higher education in Germany.",
  openGraph: {
    title: "Insights for Your Journey to Germany | RheinBridge Global",
    description:
      "Explore helpful information about German university admissions, student visas, finances, and study planning.",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="blog-page">
      <BlogHero />
      <BlogListing
        articles={blogArticleSummaries}
        categories={blogCategories}
        featuredSlug={featuredArticleSlug}
      />
      <BlogCTA />
    </main>
  );
}
