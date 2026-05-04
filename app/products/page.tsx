"use client";

import { useState, useMemo } from "react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { CategoryFilter } from "@/components/category-filter";
import { ComplianceBanner } from "@/components/compliance-banner";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.shortName.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        (p.composition?.toLowerCase().includes(search.toLowerCase()) ?? false);

      const matchesCategory =
        category === "All"
          ? true
          : category === "Request Only"
            ? p.status === "Request Only"
            : p.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <>
      {/* Page header */}
      <section className="bg-[#050505] border-b border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-14 pb-12 sm:pt-16 sm:pb-14">
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(124,58,237,0.06) 0%, transparent 50%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  Research Catalog · {PRODUCTS.length} Compounds
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                19 compounds.
                <br />
                <span className="italic font-normal text-violet-400">All documented.</span>
              </h1>
              <p className="mt-5 text-lg text-white/55 leading-relaxed max-w-xl">
                The full Kuda catalog — lyophilized peptides, research blends, and
                ancillary compounds. Every vial labeled, every batch traceable.
                For laboratory research use only.
              </p>
            </div>

            {/* Search */}
            <div className="lg:w-80 lg:flex-shrink-0">
              <label
                htmlFor="search"
                className="block font-mono text-[10px] uppercase tracking-ultra-wide text-white/40 mb-2"
              >
                Search Catalog
              </label>
              <div className="relative">
                <input
                  id="search"
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Compound name or category…"
                  className="w-full bg-[#111116] border border-white/[0.08] px-4 py-3.5 pr-11 text-sm text-white placeholder:text-white/30 focus:border-violet-royal/40 focus:outline-none transition-colors"
                />
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.5-4.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <CategoryFilter selected={category} onSelect={setCategory} />

      {/* Products grid */}
      <section className="bg-[#050505] py-12 sm:py-16">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          {/* Results meta */}
          <div className="flex items-center justify-between mb-8">
            <p className="font-mono text-xs text-white/40">
              Showing{" "}
              <span className="text-white font-semibold">{filtered.length}</span>{" "}
              of {PRODUCTS.length} compounds
              {category !== "All" && (
                <>
                  {" "}
                  in{" "}
                  <span className="text-violet-400 font-semibold">{category}</span>
                </>
              )}
            </p>
            {(search || category !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="font-mono text-[11px] uppercase tracking-[0.14em] text-violet-400 font-semibold hover:text-violet-300 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-[#111116] border border-white/[0.06] py-20 text-center">
              <p className="font-display text-2xl font-semibold text-white">
                No compounds match those filters.
              </p>
              <p className="mt-2 text-sm text-white/50">
                Try a different category or clear your search.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 inline-flex items-center gap-2 bg-violet-royal text-white px-5 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <ComplianceBanner variant="subtle" />
    </>
  );
}
