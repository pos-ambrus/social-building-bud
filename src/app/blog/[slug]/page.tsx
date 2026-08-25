import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogBody from "@/components/BlogBody";
import { getPostBySlug, posts } from "@/data/blog";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, url: `/blog/${post.slug}` },
    twitter: { title: post.title, description: post.description },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const faqBlock = post.body.find((b) => b.type === "faq");

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "hu",
  };

  const faqJsonLd =
    faqBlock && faqBlock.type === "faq"
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqBlock.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }
      : null;

  return (
    <div className="mx-auto max-w-2xl px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Link href="/blog" className="text-sm font-medium text-pin-blue hover:underline">
        ← Blog
      </Link>

      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="mb-2 mt-4 text-3xl uppercase leading-tight tracking-tight text-ink"
      >
        {post.title}
      </h1>
      <p className="mb-8 text-sm text-ink/50">
        Frissítve: {new Date(post.updatedAt).toLocaleDateString("hu-HU")}
      </p>

      <BlogBody blocks={post.body} />

      <div className="mt-10 border-t-2 border-ink/10 pt-6">
        <Link
          href={post.category ? `/klubok?kategoria=${encodeURIComponent(post.category)}` : "/klubok"}
          className="inline-flex items-center rounded-full border-2 border-cta bg-cta px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-cta-hover hover:bg-cta-hover"
        >
          {post.category ? `${post.category} klubok böngészése` : "Klubok böngészése"} →
        </Link>
      </div>
    </div>
  );
}
