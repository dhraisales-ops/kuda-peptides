import type { Metadata } from "next";
import Link from "next/link";
import { ProductWarning } from "@/components/product-warning";
import { ComplianceBanner } from "@/components/compliance-banner";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Kuda Peptides disclaimer: research-use-only positioning, regulatory status, and buyer responsibility.",
};

const STATEMENTS = [
  {
    no: "01",
    title: "Research Use Only",
    body: "Products are sold strictly for laboratory research use only. The Kuda Peptides catalog is intended for use in laboratory research workflows by qualified personnel and is not offered, marketed, or supplied for any other use.",
  },
  {
    no: "02",
    title: "Not For Consumption",
    body: "Products are not intended for human or animal consumption. Products are not to be ingested, inhaled, injected, applied to the body, or otherwise used in or on humans or animals under any circumstance.",
  },
  {
    no: "03",
    title: "Regulatory Status",
    body: "Products are not drugs, foods, cosmetics, dietary supplements, or medical products. Products have not been approved by the FDA or any equivalent regulatory body for any human or animal use, and are not intended to diagnose, treat, cure, or prevent any condition.",
  },
  {
    no: "04",
    title: "No Use Guidance",
    body: "Kuda Peptides does not provide dosage, reconstitution, administration, or use guidance — for humans, animals, or any other application. Inquiries containing such requests will not be answered. Product information and supporting documentation are provided for product identification and research documentation purposes only.",
  },
  {
    no: "05",
    title: "Buyer Responsibility",
    body: "Purchasers are responsible for compliance with all applicable laws and regulations in their jurisdiction, including those governing the purchase, possession, handling, and disposal of research compounds. The buyer represents that they are qualified to purchase research compounds and that they will not use products outside of laboratory research purposes.",
  },
  {
    no: "06",
    title: "Information Purpose",
    body: "Product information, including catalog descriptions, specifications, batch references, and supporting documentation, is provided strictly for product identification and research documentation purposes. None of the information on this site constitutes medical advice, professional advice, or use guidance of any kind.",
  },
];

export default function DisclaimerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#050505] border-b border-white/[0.06] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(124,58,237,0.10) 0%, transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-16 pb-16 sm:pt-20 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8 max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  Compliance Disclaimer
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                For laboratory research use only.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl">
                The statements below describe the regulatory status and
                research-use-only positioning of all products supplied through
                the Kuda Peptides catalog. Read in full before placing any
                order.
              </p>
            </div>
            <div className="lg:col-span-4">
              <div className="border border-violet-royal/25 bg-violet-royal/8 p-5 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-violet-royal/0 via-violet-royal/60 to-violet-royal/0" />
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                  Plain Statement
                </p>
                <p className="mt-3 font-display text-lg text-white leading-snug">
                  These products are intended strictly for laboratory research
                  use only and are not intended for human or animal
                  consumption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statements */}
      <section className="bg-[#0B0B0F] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <div className="space-y-3">
            {STATEMENTS.map((s) => (
              <article
                key={s.no}
                className="bg-[#111116] border border-white/[0.08] p-6 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border border-violet-royal/30 bg-violet-royal/10">
                    <span className="font-mono text-xs text-violet-400 font-bold tabular">
                      {s.no}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight leading-tight">
                      {s.title}
                    </h2>
                    <p className="mt-3 text-base text-white/60 leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Final warning block */}
          <div className="mt-8">
            <ProductWarning />
          </div>

          {/* Acknowledgement */}
          <div className="mt-8 bg-[#111116] border border-white/[0.08] p-7 sm:p-9 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-violet-royal/0 via-violet-royal/40 to-violet-royal/0" />
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
              Buyer Acknowledgement
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight max-w-xl mx-auto">
              By placing an order with Kuda Peptides, you acknowledge and
              accept the terms above.
            </h2>
            <p className="mt-4 text-sm text-white/50 max-w-md mx-auto leading-relaxed">
              For full purchase terms, see the Terms of Service. For shipping
              and refund information, see the corresponding policy pages.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/terms"
                className="inline-flex items-center gap-2 bg-violet-royal text-white px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
              >
                Read Full Terms
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent text-white border border-white/[0.15] px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:border-white/40 transition-colors"
              >
                Contact Kuda
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ComplianceBanner variant="subtle" />
    </>
  );
}
