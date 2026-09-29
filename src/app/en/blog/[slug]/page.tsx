import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogBody from "@/components/BlogBody";
import { postsEn } from "@/data/blog.en";
import { getHuBlogSlug } from "@/lib/blogSlugMap";
import { getCategoryEn } from "@/lib/categoriesEn";

function getPostBySlugEn(slug: string) {
  return postsEn.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return postsEn.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlugEn(slug);
  if (!post) return {};

  const metaTitle = post.metaTitle ?? post.title;
  const huSlug = getHuBlogSlug(post.slug);

  return {
    title: { absolute: metaTitle },
    description: post.description,
    alternates: {
      canonical: `/en/blog/${post.slug}`,
      languages: huSlug
        ? { hu: `/blog/${huSlug}`, en: `/en/blog/${post.slug}` }
        : { en: `/en/blog/${post.slug}` },
    },
    openGraph: { title: metaTitle, description: post.description, url: `/en/blog/${post.slug}` },
    twitter: { title: metaTitle, description: post.description },
  };
}

export default async function BlogPostPageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlugEn(slug);
  if (!post) notFound();

  const faqBlock = post.body.find((b) => b.type === "faq");
  const categoryEn = post.category ? getCategoryEn(post.category) : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.sociallybudapest.hu/en/about",
    },
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

      <Link href="/en/blog" className="text-sm font-medium text-pin-blue hover:underline">
        ← Blog
      </Link>

      <div className="mt-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            post.kind === "listicle" ? "bg-cta/10 text-cta" : "bg-accent-soft text-pin-blue"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${post.kind === "listicle" ? "bg-cta" : "bg-pin-blue"}`}
            aria-hidden="true"
          />
          {categoryEn ? categoryEn.name : post.kind === "listicle" ? "List" : "Guide"}
        </span>
      </div>

      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="mb-3 mt-3 text-3xl uppercase leading-tight tracking-tight text-ink"
      >
        {post.title}
      </h1>
      <p className="mb-5 max-w-xl text-lg text-ink/70">{post.description}</p>
      <p className="mb-6 text-sm text-ink/50">
        {post.publishedAt === post.updatedAt ? (
          <>Published: {new Date(post.publishedAt).toLocaleDateString("en-GB")}</>
        ) : (
          <>
            Published: {new Date(post.publishedAt).toLocaleDateString("en-GB")} · Updated:{" "}
            {new Date(post.updatedAt).toLocaleDateString("en-GB")}
          </>
        )}
      </p>

      <div className="rounded-2xl bg-paper p-6 shadow-sm sm:p-8">
        <BlogBody blocks={post.body} />
      </div>

      <div className="mt-10 border-t-2 border-ink/10 pt-6">
        <Link
          href={categoryEn ? `/en/clubs?category=${categoryEn.slug}` : "/en/clubs"}
          className="inline-flex items-center rounded-full border-2 border-cta bg-cta px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-paper transition-colors hover:border-cta-hover hover:bg-cta-hover"
        >
          {categoryEn ? `Browse ${categoryEn.name} clubs` : "Browse clubs"} →
        </Link>
      </div>
    </div>
  );
}
