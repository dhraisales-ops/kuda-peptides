import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, getProduct } from "@/lib/products";
import { ProductCard } from "@/components/product-card";
import { ComplianceBanner } from "@/components/compliance-banner";

const CATALOG_GROUPS = [
  {
    label: "Core Peptides",
    slugs: ["bpc-157-5mg", "bpc-157-10mg", "tb-500-5mg", "tb-500-10mg"],
  },
  {
    label: "Research Compounds",
    slugs: [
      "ghk-cu-50mg",
      "nad-500mg",
      "nad-1000mg",
      "ipamorelin-10mg",
      "cjc-ipamorelin-10mg",
    ],
  },
  {
    label: "Premium Blends",
    slugs: ["glow-70mg", "retatrutide-10mg", "retatrutide-20mg", "bac-water-10ml"],
  },
  {
    label: "Additional Products",
    slugs: [
      "adamax-10mg",
      "l-carnitine-1200mg",
      "tesamorelin-5mg",
      "tesamorelin-10mg",
      "tirzepatide-5mg",
      "tirzepatide-10mg",
    ],
  },
];

const PILLARS = [
  {
    no: "01",
    title: "No off-spec inventory",
    body: "If a compound doesn't meet our sourcing standard, it doesn't reach the catalog. Simple.",
  },
  {
    no: "02",
    title: "Labeled to your workflow",
    body: "Compound name, quantity, batch number, storage profile. Every vial, every time — no exceptions.",
  },
  {
    no: "03",
    title: "COA documentation available",
    body: "Batch-specific documentation on request. You know exactly what arrived and where it came from.",
  },
  {
    no: "04",
    title: "Strictly research-only",
    body: "No dosage guidance. No use instructions. No gray-area marketing. Research compounds for research.",
  },
  {
    no: "05",
    title: "Consistent across 19 compounds",
    body: "Same label quality, same packaging standard, same documentation framework — across the entire catalog.",
  },
  {
    no: "06",
    title: "Bulk & wholesale",
    body: "Working at scale? Reach out. Volume pricing and availability for institutions and distributors.",
  },
];

export default function HomePage() {
  const heroProducts = ["bpc-157-10mg", "ghk-cu-50mg", "glow-70mg"]
    .map(getProduct)
    .filter(Boolean);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-[#050505] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(124,58,237,0.10) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Copy */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  Precision Research Compounds
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-[72px] xl:text-[84px] font-semibold tracking-tight text-white leading-[0.92]">
                The compound
                <br />
                <span className="italic font-normal text-violet-400">
                  supply standard.
                </span>
              </h1>

              <p className="mt-8 text-lg text-white/55 leading-relaxed max-w-lg">
                19 compounds. Clean labeling. Documented batches.
                No off-spec inventory. No medical positioning.
                Built for labs that know the difference.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  href="/products"
                  className="group inline-flex items-center gap-2.5 bg-violet-royal text-white px-7 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
                >
                  Browse Catalog
                  <svg width="13" height="11" viewBox="0 0 12 10" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                    <path d="M1 5h10m0 0L7 1m4 4L7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-transparent text-white/70 border border-white/[0.15] px-7 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:border-white/30 hover:text-white transition-all"
                >
                  Request Info
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-3 gap-8 pt-8 border-t border-white/[0.06]">
                {[
                  { stat: "≥98%", label: "Purity Standard" },
                  { stat: "19", label: "Catalog Compounds" },
                  { stat: "COA", label: "On Request" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <p className="font-display text-3xl font-semibold text-white">{stat}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product vials */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-3 gap-3">
                {heroProducts.map((p) =>
                  p ? (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="group relative bg-[#0D0D12] border border-white/[0.07] hover:border-violet-royal/35 transition-all overflow-hidden"
                    >
                      <div className="relative aspect-[3/4] w-full">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 1024px) 33vw, 18vw"
                          priority
                        />
                      </div>
                      <div className="px-3 pb-4">
                        <p className="font-display text-sm font-semibold text-white leading-tight">{p.shortName}</p>
                        <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">{p.amount}</p>
                      </div>
                      <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-royal group-hover:w-full transition-all duration-300" />
                    </Link>
                  ) : null
                )}
              </div>
              <div className="mt-3 border border-white/[0.06] bg-[#0D0D12] px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  {[
                    { icon: "≥98%", label: "Purity" },
                    { icon: "❄", label: "Store –20°C" },
                    { icon: "⬡", label: "Batch Docs" },
                  ].map(({ icon, label }) => (
                    <div key={label} className="flex items-center gap-1.5">
                      <span className="font-mono text-[10px] text-violet-400">{icon}</span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/30">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/20">For Research Use Only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="bg-[#0B0B0F] border-y border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-6 py-5">
            {[
              { label: "High Purity Standard", sub: "≥98% across all compounds" },
              { label: "Batch Documentation", sub: "COA available on request" },
              { label: "Lab Tested", sub: "HPLC & mass spec confirmation" },
              { label: "Cold Storage", sub: "Handled at –20°C" },
              { label: "Research Use Only", sub: "Strict compliance posture" },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-violet-royal/60 flex-shrink-0" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/70 font-semibold">{label}</p>
                  <p className="font-mono text-[9px] text-white/30 mt-0.5">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FULL CATALOG ── */}
      <section className="bg-[#050505] py-20 sm:py-28">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">Full Product Catalog</span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.0]">
                19 compounds.<br />Four categories.
              </h2>
            </div>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-white/50 hover:text-violet-400 transition-colors flex-shrink-0"
            >
              Shop All Compounds
              <svg width="13" height="11" viewBox="0 0 12 10" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M1 5h10m0 0L7 1m4 4L7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Category groups */}
          <div className="space-y-12">
            {CATALOG_GROUPS.map((group) => (
              <div key={group.label}>
                {/* Category divider */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-white/[0.06]" />
                  <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold px-4 py-1.5 border border-violet-royal/20 bg-violet-royal/5">
                    {group.label}
                  </span>
                  <div className="h-px flex-1 bg-white/[0.06]" />
                </div>

                {/* Products */}
                <div className={`grid gap-3 ${
                  group.slugs.length <= 4 ? "grid-cols-2 sm:grid-cols-4" :
                  group.slugs.length === 5 ? "grid-cols-2 sm:grid-cols-5" :
                  "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
                }`}>
                  {group.slugs.map((slug) => {
                    const p = getProduct(slug);
                    if (!p) return null;
                    const isRequest = p.status === "Request Only";
                    return (
                      <Link
                        key={slug}
                        href={`/products/${slug}`}
                        className="group relative bg-[#0D0D12] border border-white/[0.07] hover:border-violet-royal/30 transition-all overflow-hidden flex flex-col"
                      >
                        <div className="relative aspect-square w-full overflow-hidden">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            className="object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                          />
                          {isRequest && (
                            <div className="absolute top-2 right-2">
                              <span className="font-mono text-[7px] uppercase tracking-[0.14em] bg-violet-royal/20 text-violet-400 px-1.5 py-0.5 border border-violet-royal/20">
                                Request
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="p-3 border-t border-white/[0.05]">
                          <p className="font-display text-sm font-semibold text-white leading-tight">{p.shortName}</p>
                          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">{p.amount}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-royal group-hover:w-full transition-all duration-300" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 border border-white/[0.06] bg-[#0B0B0F] p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-2">For Research Use Only</p>
              <p className="font-display text-xl sm:text-2xl font-semibold text-white leading-tight">
                Every compound. Labeled, documented, traceable.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 bg-violet-royal text-white px-7 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors flex-shrink-0"
            >
              Shop Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY KUDA ── */}
      <section className="bg-[#0B0B0F] border-y border-white/[0.06] py-20 sm:py-28">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-14">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  Why Kuda Peptides
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.0]">
                The difference
                <br />
                <span className="italic font-normal text-violet-400">shows up on arrival.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                Most research compound supply looks the same — inconsistent labeling,
                vague documentation, ambiguous catalog structure. Kuda was built to be the
                exception. Not in marketing. In the actual vial on your bench.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/[0.06]">
            {PILLARS.map((card) => (
              <div
                key={card.no}
                className="group relative border-r border-b border-white/[0.06] p-8 sm:p-10 hover:bg-white/[0.015] transition-colors overflow-hidden"
              >
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                  {card.no}
                </p>
                <h3 className="mt-5 font-display text-xl sm:text-2xl font-semibold text-white leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/45 leading-relaxed">
                  {card.body}
                </p>
                <div className="mt-6 h-px w-0 bg-violet-royal/50 group-hover:w-12 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY STRIP ── */}
      <section className="bg-[#050505] py-20 sm:py-28 relative overflow-hidden">
        <div
          className="absolute right-0 top-0 h-full w-[600px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at right center, rgba(124,58,237,0.07) 0%, transparent 60%)" }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  Documentation Standard
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.0]">
                Every batch is accounted for.
              </h2>
              <p className="mt-6 text-base text-white/50 leading-relaxed max-w-sm">
                Batch ID, purity data, storage profile, and COA — on request,
                for every compound in the catalog.
              </p>
              <Link
                href="/quality"
                className="mt-8 inline-flex items-center gap-2.5 text-violet-400 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold hover:text-violet-300 transition-colors"
              >
                Quality Standards
                <svg width="13" height="11" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                  <path d="M1 5h10m0 0L7 1m4 4L7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div className="lg:col-span-7">
              <ul className="border-t border-white/[0.06]">
                {[
                  { label: "HPLC documentation", desc: "High-performance liquid chromatography records for applicable batches." },
                  { label: "Mass spectrometry", desc: "Compound identity confirmed via mass spec where available." },
                  { label: "KP-YYMMDD batch traceability", desc: "Every vial is traceable through receiving, labeling, and fulfillment." },
                  { label: "Controlled storage", desc: "Held at conditions matching each compound's stated profile." },
                  { label: "Consistent labeling", desc: "Name, quantity, batch, storage — on every label, across every SKU." },
                ].map((std, i) => (
                  <li key={std.label} className="grid grid-cols-12 gap-6 py-6 border-b border-white/[0.06] group">
                    <div className="col-span-1 font-mono text-xs text-violet-400 pt-0.5 tabular">{String(i + 1).padStart(2, "0")}</div>
                    <div className="col-span-11 sm:col-span-4">
                      <p className="font-display text-base font-semibold text-white leading-tight">{std.label}</p>
                    </div>
                    <div className="col-span-12 sm:col-span-7">
                      <p className="text-sm text-white/45 leading-relaxed">{std.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      <ComplianceBanner variant="purple" />

      {/* ── FINAL CTA ── */}
      <section className="bg-[#050505] py-20 sm:py-28 relative overflow-hidden border-t border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(124,58,237,0.06) 0%, transparent 60%)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-7">
            <span className="h-px w-12 bg-violet-royal/40" />
            <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">Get Started</span>
            <span className="h-px w-12 bg-violet-royal/40" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.0]">
            Ready to order or have questions?
          </h2>
          <p className="mt-6 text-lg text-white/50 max-w-xl mx-auto leading-relaxed">
            Catalog availability, batch documentation, wholesale pricing — it all starts
            with one message.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 bg-violet-royal text-white px-8 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
            >
              Browse Catalog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-transparent text-white border border-white/[0.15] px-8 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:border-white/30 transition-colors"
            >
              Contact Kuda
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
