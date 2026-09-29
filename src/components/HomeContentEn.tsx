"use client";

import { useMemo, useState } from "react";
import type { Club } from "@/data/clubs";
import { getCategoryIcon } from "@/lib/categoryIcons";
import { getCategoryEn } from "@/lib/categoriesEn";
import ClubCardEn from "./ClubCardEn";

const PAGE_SIZE = 9;

type Props = {
  clubs: Club[];
  categories: string[];
  initialCategory?: string;
};

export default function HomeContentEn({ clubs, categories, initialCategory }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>(initialCategory ?? "");
  const [page, setPage] = useState(1);
  const [appliedFilters, setAppliedFilters] = useState({ search, category });

  const sortedCategories = useMemo(
    () => [...categories].sort((a, b) => getCategoryEn(a).name.localeCompare(getCategoryEn(b).name)),
    [categories]
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return clubs.filter((club) => {
      const matchesSearch =
        !q ||
        club.name.toLowerCase().includes(q) ||
        club.description_en.toLowerCase().includes(q);
      const matchesCategory = !category || club.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [clubs, search, category]);

  if (search !== appliedFilters.search || category !== appliedFilters.category) {
    setAppliedFilters({ search, category });
    setPage(1);
  }

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by club name or description…"
          className="w-full flex-1 rounded-full border-2 border-ink/15 bg-paper px-5 py-2.5 text-sm text-ink placeholder:text-ink/40 focus:border-pin-blue focus:outline-none"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-full border-2 border-ink/15 bg-paper px-5 py-2.5 text-sm text-ink focus:border-pin-blue focus:outline-none"
        >
          <option value="">All categories</option>
          {sortedCategories.map((c) => (
            <option key={c} value={c}>
              {getCategoryEn(c).name}
            </option>
          ))}
        </select>
      </div>

      {category && (
        <div className="mb-6">
          <button
            type="button"
            onClick={() => setCategory("")}
            className="inline-flex items-center gap-1.5 rounded-full border-2 border-pin-blue bg-accent-soft px-4 py-2.5 text-sm font-medium text-pin-blue"
          >
            {getCategoryIcon(category)} {getCategoryEn(category).name} ✕
          </button>
        </div>
      )}

      <p className="mb-6 text-sm text-ink/60">{filtered.length} clubs found</p>

      {filtered.length === 0 ? (
        <p className="border-2 border-dashed border-ink/20 p-10 text-center text-ink/60">
          No club matches this filter. Try a different search or filter.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((club) => (
              <ClubCardEn key={club.id} club={club} />
            ))}
          </div>

          {pageCount > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="border-2 border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className={`flex h-9 w-9 items-center justify-center border-2 text-sm font-medium transition-colors ${
                    p === currentPage
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/15 text-ink/60 hover:border-ink/40"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                disabled={currentPage === pageCount}
                className="border-2 border-ink/15 px-4 py-2 text-sm font-medium text-ink/70 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
