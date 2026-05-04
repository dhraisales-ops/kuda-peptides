import type { Metadata } from "next";
import { ComplianceBanner } from "@/components/compliance-banner";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Kuda Peptides terms of service: research-use-only purchase terms, ordering, pricing, and limitations.",
};

const SECTIONS = [
  {
    no: "01",
    title: "Acceptance of Terms",
    body: "By accessing the Kuda Peptides website, browsing the catalog, or placing an order, you agree to these terms of service. If you do not agree, do not use the site or place orders. Continued use of the site constitutes ongoing acceptance of these terms, including any updates.",
  },
  {
    no: "02",
    title: "Research-Use-Only Purchase",
    body: "All products supplied by Kuda Peptides are research compounds intended strictly for laboratory research use only. By placing an order, the buyer represents that the buyer is acquiring the products for laboratory research purposes only and not for human or animal consumption, medical, diagnostic, therapeutic, or other regulated uses. The buyer is solely responsible for ensuring that purchase, possession, and use of the compounds comply with all applicable laws and regulations in the buyer's jurisdiction.",
  },
  {
    no: "03",
    title: "No Medical or Use Guidance",
    body: "Kuda Peptides does not provide medical advice, dosage guidance, reconstitution guidance, administration guidance, or human/animal use instructions. Inquiries containing such requests will not be answered. Product information and supporting documentation are provided for product identification and research documentation purposes only.",
  },
  {
    no: "04",
    title: "Eligibility",
    body: "Use of the site and placement of orders is restricted to individuals and organizations legally permitted to purchase research compounds in their jurisdiction. The buyer must be of the age of majority in the buyer's jurisdiction. Kuda Peptides reserves the right to refuse, cancel, or limit orders at its sole discretion.",
  },
  {
    no: "05",
    title: "Catalog, Pricing & Availability",
    body: "Catalog contents, pricing, and availability are subject to change without notice. Listed prices are stated in USD unless otherwise indicated and do not include applicable taxes, duties, or shipping charges. Some compounds are listed as request-only and require additional availability review before any order is confirmed.",
  },
  {
    no: "06",
    title: "Orders & Acceptance",
    body: "Submission of an order constitutes an offer to purchase. Kuda Peptides may accept, decline, or modify orders at its discretion, including for reasons of stock availability, regulatory considerations, payment review, or shipping restrictions. An order is considered accepted when payment is confirmed and the order has been queued for fulfillment.",
  },
  {
    no: "07",
    title: "Shipping, Returns & Refunds",
    body: "Shipping terms are described in the shipping policy. Return and refund eligibility is described in the refund policy. Both are incorporated into these terms by reference.",
  },
  {
    no: "08",
    title: "Intellectual Property",
    body: "All site content — including text, graphics, the Kuda Peptides name and logo, vial label designs, and catalog presentation — is owned by or licensed to Kuda Peptides and is protected by applicable intellectual property laws. Reproduction, redistribution, or commercial use without prior written permission is prohibited.",
  },
  {
    no: "09",
    title: "Disclaimer of Warranties",
    body: "Products and information are provided on an 'as-is' and 'as-available' basis, without warranties of any kind, express or implied, except as expressly required by applicable law. Kuda Peptides disclaims warranties of merchantability, fitness for a particular purpose, and non-infringement to the fullest extent permitted by law.",
  },
  {
    no: "10",
    title: "Limitation of Liability",
    body: "To the fullest extent permitted by law, Kuda Peptides shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to the use of the site or any product. Total aggregate liability arising from or relating to a particular order shall not exceed the amount paid for that order.",
  },
  {
    no: "11",
    title: "Indemnification",
    body: "The buyer agrees to indemnify and hold Kuda Peptides harmless from any claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from the buyer's misuse of products, breach of these terms, or violation of applicable laws — including any use of products outside of laboratory research purposes.",
  },
  {
    no: "12",
    title: "Governing Law & Updates",
    body: "These terms are governed by the laws of the jurisdiction in which Kuda Peptides operates, without regard to conflict-of-law principles. Kuda Peptides may update these terms from time to time. The latest version is the version posted on this page.",
  },
];

export default function TermsPage() {
  return (
    <>
      <PolicyHero
        eyebrow="Terms of Service"
        title="Purchase terms and site usage."
        description="The terms below describe the conditions under which the Kuda Peptides catalog is offered and the responsibilities of buyers placing orders."
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
