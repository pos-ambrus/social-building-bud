import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/data/blog";

const TITLE = "Blog";
const DESCRIPTION =
  "Útmutatók és listák budapesti közösségekről: hogyan találj klubot, futóklubot vagy nyelvcsere-közösséget, ami hozzád illik.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/blog" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1
        style={{ fontFamily: "var(--font-display)" }}
        className="mb-2 text-3xl uppercase tracking-tight text-ink"
      >
        Blog
      </h1>
      <p className="mb-8 text-ink/60">{DESCRIPTION}</p>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl bg-paper p-5 shadow-sm transition-shadow hover:shadow-md"
          >
            <h2
              style={{ fontFamily: "var(--font-display)" }}
              className="text-lg uppercase tracking-tight text-ink"
            >
              {post.title}
            </h2>
            <p className="mt-1.5 text-sm text-ink/70">{post.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
