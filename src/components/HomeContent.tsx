"use client";

import { useMemo, useState } from "react";
import type { Club } from "@/data/clubs";
import { getCategoryDescription } from "@/lib/categoryDescriptions";
import { getCategoryIcon } from "@/lib/categoryIcons";
import ClubCard from "./ClubCard";

const PAGE_SIZE = 8;

type Props = {
  clubs: Club[];
  categories: string[];
  districts: string[];
};

export default function HomeContent({ clubs, categories, districts }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [page, setPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState({ search, category, district });

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return clubs.filter((club) => {
      const matchesSearch =
        !q ||
        club.name.toLowerCase().includes(q) ||
        club.description.toLowerCase().includes(q);
      const matchesCategory = !category || club.category === category;
      const matchesDistrict = !district || club.district === district;
      return matchesSearch && matchesCategory && matchesDistrict;
    });
  }, [clubs, search, category, district]);

  if (
    search !== appliedFilters.search ||
    category !== appliedFilters.category ||
    district !== appliedFilters.district
  ) {
    setAppliedFilters({ search, category, district });
    setPage(1);
  }

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const selectCategory = (c: string) => {
    setCategory((current) => (current === c ? "" : c));
    document.getElementById("klubok")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section className="mb-14">
        <h2 style={{ fontFamily: "var(--font-serif)" }} className="text-2xl font-medium text-foreground">
          Böngéssz tevékenység szerint
        </h2>
        <p className="mt-1 text-foreground/60">
          Válassz egy kategóriát, és nézd meg az abban működő budapesti klubokat.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => {
            const isActive = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => selectCategory(c)}
                className={`group flex flex-col items-start rounded-2xl border p-5 text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  isActive ? "border-accent bg-accent-soft" : "border-accent-soft bg-background hover:border-accent"
                }`}
              >
                <span className="text-2xl">{getCategoryIcon(c)}</span>
                <h3 className="mt-3 font-semibold text-foreground">{c}</h3>
                <p className="mt-1 text-sm text-foreground/60">{getCategoryDescription(c)}</p>
                <span className="mt-3 text-sm font-medium text-accent">
                  {isActive ? "Kiválasztva ✓" : "Klubok megtekintése →"}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <div id="klubok">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Keress klub neve vagy leírás alapján…"
            className="w-full flex-1 rounded-full border border-accent-soft bg-white/70 px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
          />
          {category && (
            <button
              type="button"
              onClick={() => setCategory("")}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-4 py-2.5 text-sm font-medium text-accent"
            >
              {getCategoryIcon(category)} {category} ✕
            </button>
          )}
          <select
            value={district}
            onChange={(e) => setDistrict(e.target.value)}
            className="rounded-full border border-accent-soft bg-white/70 px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none"
          >
            <option value="">Minden kerület</option>
            {districts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        <p className="mb-6 text-sm text-foreground/60">{filtered.length} klub található</p>

        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-accent-soft p-10 text-center text-foreground/60">
            Nincs a szűrésnek megfelelő klub. Próbálj más keresést vagy szűrőt.
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {paginated.map((club) => (
                <ClubCard key={club.id} club={club} />
              ))}
            </div>

            {pageCount > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="rounded-full border border-accent-soft px-4 py-2 text-sm font-medium text-foreground/70 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Előző
                </button>
                {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPage(p)}
                    className={`h-9 w-9 rounded-full text-sm font-medium transition-colors ${
                      p === currentPage ? "bg-accent text-white" : "text-foreground/60 hover:bg-accent-soft"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                  disabled={currentPage === pageCount}
                  className="rounded-full border border-accent-soft px-4 py-2 text-sm font-medium text-foreground/70 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Következő
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
