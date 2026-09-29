import Link from "next/link";
import { getCategoryDescriptionEn } from "@/lib/categoryDescriptionsEn";
import { getCategoryIcon } from "@/lib/categoryIcons";
import { categoryHrefEn, getCategoryEn } from "@/lib/categoriesEn";

type Props = {
  categories: string[];
};

function tiltFor(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) % 100;
  return (hash / 100) * 3 - 1.5;
}

export default function CategoryBrowseEn({ categories }: Props) {
  const sorted = [...categories].sort((a, b) => getCategoryEn(a).name.localeCompare(getCategoryEn(b).name));

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl uppercase tracking-tight text-ink">
        Which community fits you?
      </h2>
      <p className="mt-1 text-ink/60">
        Pick a category and check out the Budapest clubs active in it.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {sorted.map((c) => (
          <Link
            key={c}
            href={categoryHrefEn(c)}
            style={{ "--pin-rotation": `${tiltFor(c)}deg` } as React.CSSProperties}
            className="pinned relative flex flex-col items-start rounded-2xl bg-paper p-5 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="pin-dot" aria-hidden="true" />
            <span className="text-xl" aria-hidden="true">
              {getCategoryIcon(c)}
            </span>
            <h3 className="mt-3 font-semibold text-ink">{getCategoryEn(c).name}</h3>
            <p className="mt-1 text-sm text-ink/60">{getCategoryDescriptionEn(c)}</p>
            <span className="mt-3 text-sm font-medium text-pin-blue">See clubs →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
