import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { ComplianceBanner } from "@/components/compliance-banner";

export const metadata: Metadata = {
  title: "Quality Standards",
  description:
    "Kuda Peptides quality standards: HPLC documentation, mass spectrometry confirmation, batch traceability, storage handling, and labeling.",
};

const SECTIONS = [
  {
    no: "01",
    title: "Quality Assurance",
    body: "Every compound supplied by Kuda Peptides is processed through a consistent quality framework. Our process emphasizes consistent labeling, batch identification, and clean documentation suitable for laboratory research workflows. We do not stock off-spec inventory and we do not extend our catalog to compounds that fall outside our internal sourcing standards.",
  },
  {
    no: "02",
    title: "Documentation Standards",
    body: "Each batch is recorded with a unique identifier, sourcing reference, storage profile, and a labeling pass that meets premium research-supply standards. Documentation is prepared so that researchers can match each compound back to its corresponding batch reference.",
  },
  {
    no: "03",
    title: "Batch Traceability",
    body: "Batches are tracked from receiving through labeling and fulfillment. The batch identifier on every Kuda label corresponds to a documented lot, and batch documentation is available on request. Kuda batches use a structured KP-YYMMDD format.",
  },
  {
    no: "04",
    title: "COA Availability",
    body: "Certificate of Analysis documentation is available on request for applicable batches. COA contents and availability may vary by product and batch. Researchers may request available documentation through the contact page.",
  },
  {
    no: "05",
    title: "Storage & Handling",
    body: "Compounds are held under controlled conditions consistent with each product's stated storage profile (typically -20°C for lyophilized peptide research compounds). Storage information appears on every product page, vial label, and product documentation.",
  },
  {
    no: "06",
    title: "Labeling Standards",
    body: "Premium labels carry compound identity, quantity, batch reference, storage profile, and the research-use-only mark. Labels are designed to remain consistent across the full Kuda catalog.",
  },
  {
    no: "07",
    title: "Research Compliance",
    body: "Every product page, label, and piece of supporting documentation positions Kuda compounds strictly for laboratory research. Kuda Peptides does not provide dosage, reconstitution, administration, or human/animal use instructions, and does not market compounds for medical, diagnostic, therapeutic, human, or animal use.",
  },
];

const PILLARS = [
  { label: "HPLC Documentation", value: "Available" },
  { label: "Mass Spec Confirmation", value: "When applicable" },
  { label: "Batch Format", value: "KP-YYMMDD" },
  { label: "Standard Purity", value: "≥98%" },
];

export default function QualityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#050505] border-b border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
            <div className="lg:col-span-7 max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-violet-royal" />
                <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                  Quality Standards
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                A premium research-supply standard, end to end.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl">
                Kuda was built around clean documentation, traceable batches,
                and consistent labeling. The quality standards below describe
                how every compound supplied through our catalog is processed,
                labeled, and documented.
              </p>
            </div>

            {/* Pillars */}
            <div className="lg:col-span-5">
              <div className="border border-white/[0.08] divide-y divide-white/[0.06]">
                {PILLARS.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center justify-between px-5 py-4 bg-[#111116]"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/40">
                      {p.label}
                    </span>
                    <span className="font-display text-base font-semibold text-white">
                      {p.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-[#0B0B0F] py-16 sm:py-24">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left rail */}
            <aside className="lg:col-span-3">
              <div className="sticky top-28">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/30 mb-4">
                  Sections
                </p>
                <ul className="space-y-2.5 border-l border-white/[0.08] pl-4">
                  {SECTIONS.map((s) => (
                    <li key={s.no}>
                      <a
                        href={`#${s.title.toLowerCase().replace(/\s+&\s+|\s+/g, "-")}`}
                        className="text-sm text-white/50 hover:text-violet-400 transition-colors block"
                      >
                        <span className="font-mono text-[10px] text-white/30 mr-2 tabular">
                          {s.no}
                        </span>
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Body */}
            <div className="lg:col-span-9 space-y-4">
              {SECTIONS.map((section) => (
                <article
                  key={section.no}
                  id={section.title.toLowerCase().replace(/\s+&\s+|\s+/g, "-")}
                  className="bg-[#111116] border border-white/[0.08] p-7 sm:p-10"
                >
                  <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                    {section.no} / {SECTIONS.length.toString().padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-tight">
                    {section.title}
                  </h2>
                  <p className="mt-5 text-base text-white/60 leading-relaxed max-w-3xl">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#050505] py-16 sm:py-20 border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
          <SectionHeading
            eyebrow="Looking for documentation?"
            title="Request batch documentation."
            description="COA documentation is available on request for applicable batches. Reach out for the batch you're working with."
            align="center"
          />
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/coa"
              className="inline-flex items-center gap-2.5 bg-violet-royal text-white px-7 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
            >
              View COA Page
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
