import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { clubs, getCategories } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Klubok | Social Budapest",
  description: "Böngéssz az összes valódi budapesti közösségi klub között, kategória szerint szűrve.",
};

export default async function KlubokPage({
  searchParams,
}: {
  searchParams: Promise<{ kategoria?: string }>;
}) {
  const { kategoria } = await searchParams;
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <h1 style={{ fontFamily: "var(--font-display)" }} className="mb-8 text-3xl uppercase tracking-tight text-ink">
        Klubok
      </h1>
      <HomeContent clubs={clubs} categories={categories} initialCategory={kategoria} />
    </div>
  );
}
