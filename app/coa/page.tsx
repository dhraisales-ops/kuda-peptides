import type { Metadata } from "next";
import Link from "next/link";
import { CoaCard } from "@/components/coa-card";
import { ComplianceBanner } from "@/components/compliance-banner";

export const metadata: Metadata = {
  title: "Certificate of Analysis (COA)",
  description:
    "Request batch-specific Certificate of Analysis documentation for Kuda Peptides research compounds.",
};

const SAMPLE_COAS = [
  {
    productName: "BPC-157 10mg",
    batchNumber: "KP-250412",
    date: "Apr 2025",
    purity: "≥98%",
    category: "Research Peptide",
  },
  {
    productName: "TB-500 10mg",
    batchNumber: "KP-250408",
    date: "Apr 2025",
    purity: "≥98%",
    category: "Research Peptide",
  },
  {
    productName: "GHK-Cu 50mg",
    batchNumber: "KP-250322",
    date: "Mar 2025",
    purity: "≥98%",
    category: "Copper Peptide Research",
  },
  {
    productName: "NAD+ 1000mg",
    batchNumber: "KP-250318",
    date: "Mar 2025",
    purity: "≥98%",
    category: "Research Compound",
  },
  {
    productName: "Ipamorelin 10mg",
    batchNumber: "KP-250301",
    date: "Mar 2025",
    purity: "≥98%",
    category: "Peptide Research Compound",
  },
  {
    productName: "GLOW 70mg",
    batchNumber: "KP-250228",
    date: "Feb 2025",
    purity: "≥98%",
    category: "Premium Research Blend",
  },
];

export default function CoaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#050505] border-b border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-12 pb-14 sm:pt-16 sm:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7 max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  Certificate of Analysis
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                COA documentation, by batch.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Kuda Peptides provides batch-specific Certificate of Analysis
                documentation upon request. Documentation contents and
                availability may vary by product and batch.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-white/[0.08] bg-[#111116] p-6 sm:p-7 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-violet-royal/0 via-violet-royal/50 to-violet-royal/0" />
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                  How to Access
                </p>
                <ol className="mt-5 space-y-4">
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-white/30 tabular flex-shrink-0">
                      01
                    </span>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Note the batch number printed on the product label or
                      packaging.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-white/30 tabular flex-shrink-0">
                      02
                    </span>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Submit a documentation request via the contact form with
                      the batch reference.
                    </p>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-xs text-white/30 tabular flex-shrink-0">
                      03
                    </span>
                    <p className="text-sm text-white/60 leading-relaxed">
                      Available COA documentation for that batch will be
                      returned via the contact channel provided.
                    </p>
                  </li>
                </ol>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 bg-violet-royal text-white px-5 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
                >
                  Request Documentation
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
            </div>
          </div>
        </div>
      </section>

      {/* Sample COA grid */}
      <section className="bg-[#0B0B0F] py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-3">
                Recent Batches · Sample
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
                Sample documentation library
              </h2>
              <p className="mt-2 text-sm text-white/40 max-w-xl">
                Reference batches showing the COA format. Documentation is
                provided per request.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {SAMPLE_COAS.map((coa) => (
              <CoaCard key={coa.batchNumber} {...coa} />
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-[#050505] py-16 sm:py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  Documentation Format
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-tight">
                What batch documentation may include.
              </h2>
              <p className="mt-5 text-base text-white/60 leading-relaxed">
                COA contents and availability vary by product and batch. The
                fields listed here represent the typical structure of Kuda
                batch documentation when applicable.
              </p>
            </div>
            <div className="lg:col-span-7">
              <ul className="border-t border-white/[0.06] divide-y divide-white/[0.06]">
                {[
                  { label: "Compound Identity", desc: "Compound name and product reference" },
                  { label: "Batch Identifier", desc: "Unique KP-YYMMDD batch reference" },
                  { label: "Purity Method", desc: "HPLC analysis records when available" },
                  { label: "Mass Spectrometry", desc: "Confirmation of compound identity when available" },
                  { label: "Storage Profile", desc: "Recommended storage conditions for the batch" },
                  { label: "Documentation Date", desc: "Date the documentation was prepared" },
                ].map((item, i) => (
                  <li
                    key={item.label}
                    className="grid grid-cols-12 gap-4 py-5"
                  >
                    <div className="col-span-1 font-mono text-xs text-violet-400 pt-0.5 tabular font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="col-span-11 sm:col-span-5">
                      <p className="font-display text-base font-semibold text-white leading-tight">
                        {item.label}
                      </p>
                    </div>
                    <div className="col-span-12 sm:col-span-6">
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ComplianceBanner variant="subtle" />
    </>
  );
}
