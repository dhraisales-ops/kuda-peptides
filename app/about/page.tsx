import type { Metadata } from "next";
import Link from "next/link";
import { ComplianceBanner } from "@/components/compliance-banner";
import { TrustStrip } from "@/components/trust-strip";

export const metadata: Metadata = {
  title: "About Kuda Peptides",
  description:
    "Kuda Peptides is a premium research compound supplier focused on clean documentation, quality-first sourcing, and research-only compliance.",
};

const PRINCIPLES = [
  {
    no: "01",
    title: "Documentation first",
    body: "Catalog, labels, and supporting paperwork are designed so a researcher always knows what's in front of them.",
  },
  {
    no: "02",
    title: "Quality-first sourcing",
    body: "Compounds are sourced and inspected against an internal standard. Off-spec inventory is not held, listed, or shipped.",
  },
  {
    no: "03",
    title: "Research-only compliance",
    body: "Every page, label, and message is positioned strictly for laboratory research. No medical, dosage, or use claims — anywhere.",
  },
  {
    no: "04",
    title: "Premium presentation",
    body: "Vials, labels, and packaging are finished consistently across the catalog. Research compounds should feel professional.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#050505] border-b border-white/[0.06] overflow-hidden">
        <div
          className="absolute -right-40 top-10 h-96 w-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  About Kuda Peptides
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.02]">
                A premium standard for{" "}
                <span className="italic font-normal text-violet-400">
                  research compounds.
                </span>
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pt-6">
              <p className="text-lg text-white/60 leading-relaxed">
                Kuda Peptides was built for laboratories that care how their
                compounds arrive. Premium labeling. Clean catalog structure.
                Batch documentation. No off-spec inventory. No medical
                positioning. Just precision research compounds, supplied
                cleanly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#050505] py-16 sm:py-24 border-b border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-4">
                  Our Story
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Built around how research compounds should arrive.
                </h2>
                <div className="mt-8 border-l-2 border-violet-royal/40 pl-5">
                  <p className="font-display text-xl italic text-white/70 leading-relaxed">
                    "Premium labeling, clean documentation, and a strict
                    research-use-only standard — across every compound, every
                    batch."
                  </p>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-ultra-wide text-white/30">
                    — Kuda Operating Standard
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-6 text-white/60 leading-relaxed text-base sm:text-lg">
              <p>
                Kuda Peptides was founded around a single observation: most
                research-compound supply doesn't look or feel like the rest of
                a serious laboratory. Inconsistent labeling, ambiguous catalog
                structure, missing documentation. The compound itself might be
                fine — the supply experience around it usually isn't.
              </p>
              <p>
                We built Kuda to fix that. Every compound in the catalog is
                supplied with consistent, batch-traceable labeling, presented
                in clear research-grade format, and documented to a standard
                that makes it easy to match a vial back to its corresponding
                batch reference.
              </p>
              <p>
                Equally important: we built Kuda to remain strictly within a
                research-use-only frame. We don't make medical claims. We
                don't suggest use cases. We don't provide dosage,
                reconstitution, or administration guidance. Our products are
                research compounds — and our entire catalog, copy, and
                support flow is built around that boundary.
              </p>
              <p>
                The result is a compound supplier that operates the way labs
                expect a serious vendor to operate: clean documentation,
                consistent labeling, batch traceability, and a clear
                compliance posture. No theatrics — just precision compounds,
                supplied cleanly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-[#0B0B0F] border-b border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-4">
              Operating Principles
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.05]">
              Four principles, applied across every compound.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/[0.08]">
            {PRINCIPLES.map((p) => (
              <div
                key={p.no}
                className="group border-r border-b border-white/[0.08] p-8 sm:p-10 bg-[#111116] hover:bg-[#111116] transition-colors relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-royal group-hover:w-full transition-all duration-300" />
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                  {p.no} / 04
                </p>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white leading-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-base text-white/60 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* CTA */}
      <section className="bg-[#050505] py-20 sm:py-24 relative overflow-hidden border-t border-white/[0.06]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(124,58,237,0.08) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-8 bg-violet-royal/50" />
            <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
              Get In Touch
            </span>
            <span className="h-px w-8 bg-violet-royal/50" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight">
            Browse the catalog or reach out.
          </h2>
          <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto">
            Catalog availability, batch documentation, and wholesale inquiries
            — every conversation starts at the same place.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 bg-violet-royal text-white px-7 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
            >
              Browse Catalog
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 bg-transparent text-white border border-white/[0.15] px-7 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:border-white/40 transition-colors"
            >
              Contact Kuda
            </Link>
          </div>
        </div>
      </section>

      <ComplianceBanner variant="subtle" />
    </>
  );
}
