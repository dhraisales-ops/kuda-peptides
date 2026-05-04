import type { Metadata } from "next";
import { ComplianceBanner } from "@/components/compliance-banner";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "Kuda Peptides shipping policy: processing time, shipping availability, and customer responsibilities.",
};

const SECTIONS = [
  {
    no: "01",
    title: "General Shipping",
    body: "Kuda Peptides ships research compounds in compliance with applicable carrier requirements and regional regulations. Orders are processed and shipped from our fulfillment partners using temperature-aware handling appropriate to the compound's storage profile.",
  },
  {
    no: "02",
    title: "Processing Time",
    body: "Standard processing time is typically 1–3 business days from order confirmation, excluding weekends and holidays. Processing windows may extend during high-volume periods or for orders requiring batch documentation review. Specific processing windows for an individual order will be communicated at order confirmation.",
  },
  {
    no: "03",
    title: "Shipping Availability",
    body: "Shipping availability may vary by region, product, and current regulatory environment. Some compounds and presentations are not available for shipping to all regions. If a region or product is restricted, the order will not be processed and any payment will be returned in accordance with the refund policy.",
  },
  {
    no: "04",
    title: "Product Availability",
    body: "Catalog availability may change without notice. Some compounds are listed as request-only and require additional availability review before shipping is confirmed. Bac Water and Retatrutide presentations are request-only and require pre-shipping confirmation.",
  },
  {
    no: "05",
    title: "Customer Responsibility",
    body: "The customer is responsible for providing accurate shipping details, including a deliverable address and a contact channel. Kuda Peptides is not responsible for delays, returns, or losses caused by inaccurate shipping information, refused delivery, or third-party carrier delays once the package has been dispatched.",
  },
  {
    no: "06",
    title: "Tracking & Delivery",
    body: "Tracking information, when available, will be provided after dispatch. Delivery timelines are estimated by the carrier and are not guaranteed by Kuda Peptides. Compounds should be received and stored under the conditions listed on the corresponding product page.",
  },
];

export default function ShippingPolicyPage() {
  return (
    <>
      <PolicyHero
        eyebrow="Shipping Policy"
        title="Shipping & fulfillment terms."
        description="The terms below describe how Kuda Peptides processes, ships, and fulfills research-compound orders."
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
