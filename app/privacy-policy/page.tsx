import type { Metadata } from "next";
import { ComplianceBanner } from "@/components/compliance-banner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Kuda Peptides privacy policy: information collected, how it is used, data retention, and contact options.",
};

const SECTIONS = [
  {
    no: "01",
    title: "Information We Collect",
    body: "Kuda Peptides collects information you provide directly — including name, email, organization (where supplied), and message content submitted through the contact form. We may also collect technical information automatically, including device type, browser, IP address, and pages viewed, for the purposes of operating, securing, and improving the website.",
  },
  {
    no: "02",
    title: "How We Use Information",
    body: "Information collected is used to respond to inquiries, process and fulfill orders, deliver requested documentation, maintain operational records, prevent abuse and fraud, and improve catalog and site performance. We do not sell personal information.",
  },
  {
    no: "03",
    title: "Cookies & Analytics",
    body: "The site may use cookies or similar technologies to remember preferences, maintain session state, and measure aggregate site performance. You can control cookies through your browser settings. Disabling cookies may affect certain site features.",
  },
  {
    no: "04",
    title: "Information Sharing",
    body: "Information is shared only with service providers who support Kuda Peptides operations — including payment processing, fulfillment, hosting, and analytics — and only to the extent required to provide those services. We may disclose information when required by law, regulation, or legal process.",
  },
  {
    no: "05",
    title: "Data Retention",
    body: "Information is retained for as long as necessary to fulfill the purposes for which it was collected, including operational, accounting, regulatory, and recordkeeping requirements. Records may be retained beyond active customer relationships where required by applicable law.",
  },
  {
    no: "06",
    title: "Security",
    body: "Kuda Peptides applies reasonable administrative, technical, and physical safeguards designed to protect information from unauthorized access, disclosure, alteration, or destruction. No system is fully secure; we do not warrant absolute security of information transmitted to or stored on our systems.",
  },
  {
    no: "07",
    title: "Your Rights",
    body: "Depending on jurisdiction, you may have rights to access, correct, or request deletion of personal information held about you. Requests may be submitted through the contact page. Identity verification may be required before any action is taken.",
  },
  {
    no: "08",
    title: "Updates To This Policy",
    body: "This privacy policy may be updated from time to time. The latest version is the version posted on this page. Material changes will be reflected by updating the 'Last Updated' date at the top of the policy.",
  },
  {
    no: "09",
    title: "Contact",
    body: "Questions about this privacy policy or about how Kuda Peptides handles personal information may be submitted through the contact page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PolicyHero
        eyebrow="Privacy Policy"
        title="How Kuda Peptides handles information."
        description="The policy below describes what information is collected, how it is used, how it is shared, and the rights available to website visitors and customers."
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
