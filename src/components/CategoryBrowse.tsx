import Link from "next/link";
import { getCategoryDescription } from "@/lib/categoryDescriptions";
import { getCategoryIcon } from "@/lib/categoryIcons";

type Props = {
  categories: string[];
};

function tiltFor(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) % 100;
  return (hash / 100) * 3 - 1.5;
}

export default function CategoryBrowse({ categories }: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 style={{ fontFamily: "var(--font-display)" }} className="text-2xl uppercase tracking-tight text-ink">
        Böngéssz tevékenység szerint
      </h2>
      <p className="mt-1 text-ink/60">
        Válassz egy kategóriát, és nézd meg az abban működő budapesti klubokat.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c}
            href={`/klubok?kategoria=${encodeURIComponent(c)}`}
            style={{ "--pin-rotation": `${tiltFor(c)}deg` } as React.CSSProperties}
            className="pinned relative flex flex-col items-start bg-paper p-5 text-left shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="pin-dot" aria-hidden="true" />
            <span className="text-xl" aria-hidden="true">
              {getCategoryIcon(c)}
            </span>
            <h3 className="mt-3 font-semibold text-ink">{c}</h3>
            <p className="mt-1 text-sm text-ink/60">{getCategoryDescription(c)}</p>
            <span className="mt-3 text-sm font-medium text-pin-blue">Klubok megtekintése →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
