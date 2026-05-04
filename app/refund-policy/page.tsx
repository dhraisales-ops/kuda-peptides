import type { Metadata } from "next";
import { ComplianceBanner } from "@/components/compliance-banner";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Kuda Peptides refund policy: returns, damaged shipments, documentation requirements, and post-handling limitations.",
};

const SECTIONS = [
  {
    no: "01",
    title: "General Refund Rules",
    body: "Refund and return eligibility for research-compound orders is reviewed on a case-by-case basis. Returns are not accepted on opened, partially used, or compromised research compounds. Eligible returns must be requested within 7 calendar days of delivery and must include the original packaging, labels, and batch reference.",
  },
  {
    no: "02",
    title: "Damaged Shipment Process",
    body: "If a shipment arrives visibly damaged or compromised in transit, document the condition with photographs of the package, packaging materials, and the affected product before opening or moving the contents. Contact Kuda Peptides within 48 hours of delivery with the documentation and the order's batch reference. Damage claims submitted without supporting documentation may not be eligible for resolution.",
  },
  {
    no: "03",
    title: "Documentation Requirement",
    body: "All refund and return requests must include the order reference, batch number printed on the affected product, and a written description of the issue. Requests submitted without this documentation cannot be processed. Documentation may be submitted through the contact form or the contact channel originally used to place the order.",
  },
  {
    no: "04",
    title: "Post-Handling Limitations",
    body: "Returns are not guaranteed for products where storage, handling, or chain-of-custody has been compromised after delivery. Compounds stored outside their listed storage profile, transferred between containers, or otherwise mishandled are not eligible for return or refund. Once a research compound has left a controlled storage environment under the customer's care, return eligibility ends.",
  },
  {
    no: "05",
    title: "Refund Method & Timing",
    body: "Approved refunds are returned to the original payment method when possible. Refund timing depends on the originating payment provider and may take 5–10 business days to appear after the refund has been initiated. Partial refunds may apply where only a portion of the order qualifies.",
  },
  {
    no: "06",
    title: "Non-Returnable Items",
    body: "Request-only items including Bac Water and Retatrutide presentations may carry additional return restrictions. Catalog items may also be marked as non-returnable when listed; non-returnable status will be indicated at the time of order or in the order documentation.",
  },
];

export default function RefundPolicyPage() {
  return (
    <>
      <PolicyHero
        eyebrow="Refund Policy"
        title="Returns, damages, and refund eligibility."
        description="The terms below describe how returns, refunds, and damaged-shipment claims are reviewed for Kuda Peptides research-compound orders."
        lastUpdated="April 2026"
      />
      <PolicyBody sections={SECTIONS} />
      <ComplianceBanner variant="subtle" />
    </>
  );
}

function PolicyHero({
  eyebrow,
  title,
  description,
  lastUpdated,
}: {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
}) {
  return (
    <section className="bg-[#050505] border-b border-white/[0.06]">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-12 pb-12 sm:pt-16 sm:pb-14">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-violet-royal" />
              <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
                {eyebrow}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
              {title}
            </h1>
            <p className="mt-5 text-lg text-white/60 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/30">
              Last Updated
            </p>
            <p className="mt-1 font-display text-base font-semibold text-white">
              {lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PolicyBody({
  sections,
}: {
  sections: { no: string; title: string; body: string }[];
}) {
  return (
    <section className="bg-[#0B0B0F] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <div className="space-y-3">
          {sections.map((s) => (
            <article
              key={s.no}
              className="bg-[#111116] border border-white/[0.08] p-6 sm:p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                {s.no} / {sections.length.toString().padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-xl sm:text-2xl font-semibold text-white tracking-tight leading-tight">
                {s.title}
              </h2>
              <p className="mt-4 text-base text-white/60 leading-relaxed">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
