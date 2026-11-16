import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "./../blog.css";
import { BlogArticleView } from "@/components/blog/BlogArticleView";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { blogArticles, getBlogArticleBySlug } from "@/data/blog";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article not found",
      robots: { index: false, follow: true },
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | RheinBridge Global`,
      description: article.excerpt,
      type: "article",
      publishedTime: `${article.publishedAt}T00:00:00.000Z`,
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = article.relatedSlugs
    .map((relatedSlug) => getBlogArticleBySlug(relatedSlug))
    .filter((relatedArticle) => relatedArticle !== undefined);

  return (
    <main className="blog-article-page">
      <BlogArticleView article={article} relatedArticles={relatedArticles} />
      <BlogCTA />
    </main>
  );
}
