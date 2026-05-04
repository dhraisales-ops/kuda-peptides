"use client";

import Link from "next/link";
import { useState } from "react";
import { ComplianceBanner } from "@/components/compliance-banner";

const FAQS = [
  {
    q: "Are these products for human use?",
    a: "No. Kuda Peptides products are intended strictly for laboratory research use only and are not for human or animal consumption.",
  },
  {
    q: "Do you provide dosage or usage instructions?",
    a: "No. Kuda Peptides does not provide dosage, reconstitution, administration, or human/animal use instructions.",
  },
  {
    q: "Do products include COAs?",
    a: "Batch-specific documentation and COA availability may vary by product and batch. Researchers may request available documentation.",
  },
  {
    q: "How should products be stored?",
    a: "Storage information is listed on each product page and product documentation.",
  },
  {
    q: "Can I request availability for specific compounds?",
    a: "Yes. Some compounds are listed as request-only and require additional availability review.",
  },
  {
    q: "Are these approved for medical use?",
    a: "No. Products are research compounds only and are not sold for medical, diagnostic, therapeutic, human, or animal use.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                  Frequently Asked Questions
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                Common questions, clearly answered.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Below are answers to the questions most frequently raised about
                Kuda Peptides catalog, documentation, and compliance posture.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-violet-royal/20 bg-violet-royal/5 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-violet-royal/0 via-violet-royal/50 to-violet-royal/0" />
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                  Compliance Reminder
                </p>
                <p className="mt-3 font-display text-base text-white leading-snug">
                  All Kuda Peptides products are intended strictly for
                  laboratory research use only. Not for human or animal
                  consumption.
                </p>
                <p className="mt-3 text-xs text-white/50 leading-relaxed">
                  Kuda Peptides does not provide dosage, reconstitution,
                  administration, or human/animal use instructions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ list */}
      <section className="bg-[#0B0B0F] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 sm:px-8">
          <ul className="space-y-2">
            {FAQS.map((item, i) => {
              const isOpen = openIndex === i;
              return (
                <li
                  key={item.q}
                  className={`bg-[#111116] border transition-colors ${
                    isOpen ? "border-violet-royal/40" : "border-white/[0.08]"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 p-5 sm:p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold pt-1.5 tabular flex-shrink-0">
                        Q · {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-lg sm:text-xl font-semibold text-white leading-snug">
                        {item.q}
                      </h2>
                    </div>
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center border transition-all ${
                        isOpen
                          ? "border-violet-royal bg-violet-royal text-white rotate-45"
                          : "border-white/[0.15] text-white/40"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      >
                        <path d="M6 1v10M1 6h10" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 ml-0 sm:ml-[88px]">
                      <div className="border-t border-white/[0.06] pt-4">
                        <p className="text-base text-white/60 leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Still have questions */}
          <div className="mt-10 border border-white/[0.08] bg-[#111116] p-7 sm:p-9 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-violet-royal/0 via-violet-royal/30 to-violet-royal/0" />
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
              Didn't find an answer?
            </p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight">
              Reach out directly.
            </h2>
            <p className="mt-3 text-sm text-white/50 max-w-md mx-auto">
              For catalog availability, documentation, or wholesale questions
              not covered above, contact Kuda Peptides directly.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2.5 bg-violet-royal text-white px-6 py-3.5 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
            >
              Contact Kuda
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
      </section>

      <ComplianceBanner variant="subtle" />
    </>
  );
}
