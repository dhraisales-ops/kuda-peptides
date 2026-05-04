import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PRODUCTS, getProduct, getRelatedProducts, formatPrice } from "@/lib/products";
import { ProductSpecTable } from "@/components/product-spec-table";
import { ProductWarning } from "@/components/product-warning";
import { ProductCard } from "@/components/product-card";
import { AddToCartButton } from "@/components/add-to-cart-button";

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.name} — ${product.category}`,
    description: `${product.name} supplied as ${product.form} for laboratory research use only. Purity ${product.purity}.`,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const isRequest = product.status === "Request Only";
  const related = getRelatedProducts(slug, 4);

  return (
    <>
      {/* Breadcrumb strip */}
      <div className="bg-[#050505] border-b border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-4">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs text-white/40"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span aria-hidden="true" className="text-white/20">/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Catalog
            </Link>
            <span aria-hidden="true" className="text-white/20">/</span>
            <span className="text-white/80 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Detail hero */}
      <section className="bg-[#050505]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Image */}
            <div className="lg:col-span-7">
              <div
                className="relative border border-white/[0.06] overflow-hidden"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, #161620 0%, #0B0B0F 100%)",
                }}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-10 sm:p-14"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                </div>
                {/* Subtle glow */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>

            {/* Info column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-4">
                <Link
                  href="/products"
                  className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold hover:text-violet-300 transition-colors"
                >
                  {product.category}
                </Link>
                <span className="text-white/20">·</span>
                {isRequest ? (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-violet-400 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                    Request Only
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-emerald-400 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Available
                  </span>
                )}
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-[1.05]">
                {product.name}
              </h1>

              {product.composition && (
                <p className="mt-3 text-base text-violet-400 font-medium">
                  Composition: {product.composition}
                </p>
              )}

              {/* Price block */}
              <div className="mt-7 flex items-baseline gap-3">
                <p className="font-display text-4xl font-semibold text-white tabular leading-none">
                  {formatPrice(product.price)}
                </p>
                {product.price !== null && (
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/40">
                    USD · per unit
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="mt-6 text-base text-white/60 leading-relaxed">
                {product.description}
              </p>

              {/* Spec summary grid */}
              <dl className="mt-8 grid grid-cols-2 gap-px bg-white/[0.04]">
                <div className="bg-[#111116] p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/40">
                    Quantity
                  </dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold text-white tabular">
                    {product.amount}
                  </dd>
                </div>
                <div className="bg-[#111116] p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/40">
                    Purity
                  </dt>
                  <dd className="mt-1.5 font-display text-lg font-semibold text-white tabular">
                    {product.purity}
                  </dd>
                </div>
                <div className="bg-[#111116] p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/40">
                    Form
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-white/90 leading-tight">
                    {product.form}
                  </dd>
                </div>
                <div className="bg-[#111116] p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/40">
                    Storage
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-white/90 leading-tight">
                    {product.storage}
                  </dd>
                </div>
              </dl>

              {/* CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <AddToCartButton product={product} size="lg" className="flex-1" />
                <Link
                  href="/coa"
                  className="inline-flex items-center justify-center gap-2.5 bg-transparent text-white border border-white/20 px-7 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:border-white/40 transition-colors"
                >
                  Request COA
                </Link>
              </div>

              {/* Compliance line */}
              <div className="mt-6 flex items-start gap-2 text-xs text-white/40 leading-relaxed border-t border-white/[0.06] pt-5">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="text-violet-400 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="6.5" />
                  <path d="M8 5v3.5" strokeLinecap="round" />
                  <circle cx="8" cy="11" r="0.6" fill="currentColor" />
                </svg>
                <p>
                  For laboratory research use only. Not for human or animal
                  consumption. Kuda Peptides does not provide dosage,
                  reconstitution, administration, or use guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail body sections */}
      <section className="bg-[#0B0B0F] border-y border-white/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Left rail */}
            <aside className="lg:col-span-3 hidden lg:block">
              <div className="sticky top-28">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/30 mb-4">
                  On This Page
                </p>
                <ul className="space-y-2.5 border-l border-white/[0.06] pl-4">
                  {[
                    "Overview",
                    "Specifications",
                    "Batch Documentation",
                    "COA",
                    "Storage & Handling",
                    "Compliance",
                  ].map((label, i) => (
                    <li key={label}>
                      <a
                        href={`#${label.toLowerCase().replace(/\s+&\s+|\s+/g, "-")}`}
                        className="text-sm text-white/50 hover:text-violet-400 transition-colors block"
                      >
                        <span className="font-mono text-[10px] text-white/25 mr-2 tabular">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-9 space-y-14">
              {/* Overview */}
              <article id="overview">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-3">
                  01 / Overview
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  About this compound
                </h2>
                <div className="mt-5 space-y-4 text-white/60 leading-relaxed max-w-3xl">
                  <p>{product.description}</p>
                  <p>
                    Kuda Peptides supplies {product.shortName} as a research
                    compound only. The compound is presented in{" "}
                    {product.form.toLowerCase()} format with documented purity
                    of {product.purity}, and is stored under conditions
                    consistent with its stability profile (
                    {product.storage.toLowerCase()}).
                  </p>
                  <p>
                    Researchers handling this compound should refer to internal
                    laboratory protocols and applicable safety standards. This
                    page is intended for product identification and research
                    documentation purposes only.
                  </p>
                </div>
              </article>

              {/* Specifications */}
              <article id="specifications">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-3">
                  02 / Specifications
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Technical specifications
                </h2>
                <div className="mt-5 max-w-3xl">
                  <ProductSpecTable product={product} />
                </div>
              </article>

              {/* Batch Documentation */}
              <article id="batch-documentation">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-3">
                  03 / Batch Documentation
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Batch traceability
                </h2>
                <div className="mt-5 max-w-3xl space-y-4 text-white/60 leading-relaxed">
                  <p>
                    Each {product.shortName} batch carries a unique batch
                    identifier traced through receiving, labeling, and
                    fulfillment. Batch documentation may include identity
                    confirmation and purity records for the corresponding lot.
                  </p>
                  <div className="bg-[#111116] border border-white/[0.06] p-5 sm:p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { label: "Batch Format", value: "KP-YYMMDD" },
                        { label: "Identity", value: "Documented" },
                        { label: "Purity Method", value: "HPLC" },
                        { label: "Confirmation", value: "MS (when avail.)" },
                      ].map((item) => (
                        <div key={item.label}>
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                            {item.label}
                          </p>
                          <p className="mt-1 font-mono text-sm text-white/90 font-semibold">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* COA */}
              <article id="coa">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-3">
                  04 / Certificate of Analysis
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  COA availability
                </h2>
                <div className="mt-5 max-w-3xl">
                  <p className="text-white/60 leading-relaxed">
                    Certificate of Analysis documentation is available upon
                    request for batches where applicable. COA availability and
                    contents may vary by product and batch.
                  </p>
                  <Link
                    href="/coa"
                    className="mt-5 inline-flex items-center gap-2 bg-transparent border border-white/[0.12] text-white/80 px-5 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:border-violet-royal/40 hover:text-white transition-all"
                  >
                    Request COA Documentation
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 5h10m0 0L7 1m4 4L7 9"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </article>

              {/* Storage & Handling */}
              <article id="storage-handling">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-3">
                  05 / Storage & Handling
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Storage profile
                </h2>
                <div className="mt-5 max-w-3xl">
                  <div className="bg-[#111116] border border-white/[0.06] p-5 sm:p-6 flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-violet-royal/25 bg-violet-royal/10">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-violet-400"
                        aria-hidden="true"
                      >
                        <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-display text-lg font-semibold text-white">
                        {product.storage}
                      </p>
                      <p className="mt-2 text-sm text-white/50 leading-relaxed">
                        Compounds should be held under conditions consistent
                        with the storage profile listed above. Refer to product
                        documentation for additional handling guidance.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Compliance */}
              <article id="compliance">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-3">
                  06 / Compliance
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  Research-use-only notice
                </h2>
                <div className="mt-5 max-w-3xl">
                  <ProductWarning />
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-[#050505] py-16 sm:py-20">
          <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
            <div className="flex items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-8 bg-violet-royal" />
                  <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                    Related Compounds
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                  Adjacent in the catalog
                </h2>
              </div>
              <Link
                href="/products"
                className="hidden sm:inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] font-semibold text-white/50 hover:text-violet-400 transition-colors"
              >
                View All
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 12 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M1 5h10m0 0L7 1m4 4L7 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
