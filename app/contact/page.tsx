"use client";

import { useState } from "react";
import { PRODUCTS } from "@/lib/products";
import { ComplianceBanner } from "@/components/compliance-banner";

const INQUIRY_TYPES = [
  "Product Availability",
  "Batch Documentation",
  "Quality Documentation",
  "Wholesale Inquiry",
  "General Question",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiry: INQUIRY_TYPES[0],
    product: "",
    message: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

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
                  Contact Kuda Peptides
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
                Catalog inquiries and documentation requests.
              </h1>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                Submit catalog availability questions, batch documentation
                requests, wholesale inquiries, and general research-supply
                questions through the form below.
              </p>
            </div>
            <div className="lg:col-span-5 lg:pt-2">
              <div className="border border-violet-royal/20 bg-violet-royal/5 p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-violet-royal/0 via-violet-royal/60 to-violet-royal/0" />
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                  Important Disclaimer
                </p>
                <p className="mt-3 font-display text-base text-white leading-snug">
                  Kuda Peptides does not provide medical advice, dosage
                  guidance, reconstitution guidance, or human/animal use
                  instructions.
                </p>
                <p className="mt-3 text-xs text-white/50 leading-relaxed">
                  Inquiries containing medical, dosage, or use-related
                  questions will not be answered. All Kuda Peptides products
                  are research compounds for laboratory research use only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#0B0B0F] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          {submitted ? (
            <div className="bg-[#111116] border border-white/[0.08] p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-violet-royal/0 via-violet-royal/40 to-violet-royal/0" />
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-violet-royal/40 bg-violet-royal/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-violet-400"
                  aria-hidden="true"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="mt-6 font-display text-3xl font-semibold text-white tracking-tight">
                Inquiry received.
              </h2>
              <p className="mt-3 text-base text-white/60 max-w-md mx-auto">
                Your inquiry has been logged. The Kuda Peptides team will
                respond at the contact channel you provided.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    organization: "",
                    inquiry: INQUIRY_TYPES[0],
                    product: "",
                    message: "",
                  });
                }}
                className="mt-8 inline-flex items-center gap-2 bg-violet-royal text-white px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[#111116] border border-white/[0.08]"
            >
              <div className="border-b border-white/[0.06] bg-white/[0.02] px-6 py-4 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/40 font-semibold">
                  Inquiry Form
                </span>
                <span className="font-mono text-[10px] text-white/30">
                  All fields required except Organization &amp; Product
                </span>
              </div>
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <FormField
                    label="Name"
                    required
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                  />
                  <FormField
                    label="Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                  />
                </div>
                <FormField
                  label="Organization"
                  hint="Optional — laboratory, university, or research org."
                  value={formData.organization}
                  onChange={(v) =>
                    setFormData({ ...formData, organization: v })
                  }
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <SelectField
                    label="Inquiry Type"
                    required
                    value={formData.inquiry}
                    onChange={(v) => setFormData({ ...formData, inquiry: v })}
                    options={INQUIRY_TYPES}
                  />
                  <SelectField
                    label="Product of Interest"
                    hint="Optional"
                    value={formData.product}
                    onChange={(v) => setFormData({ ...formData, product: v })}
                    options={["", ...PRODUCTS.map((p) => p.name)]}
                    optionLabel={(o) => (o === "" ? "— None —" : o)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-[10px] uppercase tracking-ultra-wide text-white/40 mb-2"
                  >
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Briefly describe your inquiry…"
                    className="w-full bg-[#0B0B0F] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-violet-royal/40 focus:outline-none transition-colors resize-y"
                  />
                  <p className="mt-2 text-xs text-white/40">
                    Please do not include medical, dosage, reconstitution, or
                    use-related questions — these cannot be answered.
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-5 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-xs text-white/40 max-w-md">
                    By submitting, you confirm you are inquiring about
                    research compounds for laboratory research use only.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2.5 bg-violet-royal text-white px-7 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors flex-shrink-0"
                  >
                    Submit Inquiry
                    <svg
                      width="13"
                      height="11"
                      viewBox="0 0 12 10"
                      fill="none"
                      className="transition-transform group-hover:translate-x-0.5"
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
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      <ComplianceBanner variant="subtle" />
    </>
  );
}

function FormField({
  label,
  type = "text",
  required,
  value,
  onChange,
  hint,
}: {
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-ultra-wide text-white/40 mb-2">
        {label} {required && <span className="text-violet-400">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#0B0B0F] border border-white/[0.08] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:border-violet-royal/40 focus:outline-none transition-colors"
      />
      {hint && <p className="mt-1.5 text-xs text-white/30">{hint}</p>}
    </div>
  );
}

function SelectField({
  label,
  required,
  value,
  onChange,
  options,
  hint,
  optionLabel,
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  hint?: string;
  optionLabel?: (o: string) => string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-ultra-wide text-white/40 mb-2">
        {label} {required && <span className="text-violet-400">*</span>}
      </label>
      <select
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[#0B0B0F] border border-white/[0.08] px-4 py-3 text-sm text-white focus:border-violet-royal/40 focus:outline-none transition-colors appearance-none bg-no-repeat bg-[right_12px_center] pr-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23ffffff50' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#111116] text-white">
            {optionLabel ? optionLabel(opt) : opt}
          </option>
        ))}
      </select>
      {hint && <p className="mt-1.5 text-xs text-white/30">{hint}</p>}
    </div>
  );
}
