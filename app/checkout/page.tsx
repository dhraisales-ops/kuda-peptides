"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";

type FormData = {
  email: string;
  fullName: string;
  organization: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  notes: string;
  compliance: boolean;
};

const INITIAL: FormData = {
  email: "",
  fullName: "",
  organization: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "US",
  notes: "",
  compliance: false,
};

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50"
      >
        {label}
        {required && <span className="ml-1 text-violet-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-[#111116] border border-white/[0.10] text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-violet-royal/60 transition-colors"
      />
    </div>
  );
}

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function set(field: keyof FormData) {
    return (value: string | boolean) =>
      setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.compliance) {
      alert("You must confirm the research-use-only compliance agreement before proceeding.");
      return;
    }
    setSubmitted(true);
  }

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-6 px-4 text-center py-24">
        <h1 className="font-display text-3xl font-semibold text-white">
          Your cart is empty
        </h1>
        <p className="text-white/50 max-w-sm">
          Add research compounds to your cart before proceeding to checkout.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2.5 bg-violet-royal text-white px-8 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
        >
          Browse Catalog
        </Link>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center gap-8 px-4 text-center py-24">
        <div className="h-16 w-16 flex items-center justify-center border border-emerald-400/30 bg-emerald-400/10">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-emerald-400"
            aria-hidden="true"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </div>
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white">
            Order Request Received
          </h1>
          <p className="mt-3 text-white/60 max-w-md leading-relaxed">
            Your order request has been received and is pending payment processor
            setup. We will contact you at <strong>{form.email}</strong> with
            next steps.
          </p>
        </div>
        <div className="bg-[#0B0B0F] border border-white/[0.08] p-6 max-w-md w-full text-left">
          <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 mb-3">
            Notice
          </p>
          <p className="text-sm text-white/60 leading-relaxed">
            Payment processing is pending final integration. No payment has been
            collected. You will be contacted with a secure payment link once the
            payment processor is connected.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 border border-white/[0.12] text-white/70 px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:border-white/25 hover:text-white transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Page header */}
      <div className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-violet-royal" />
            <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
              Checkout
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Complete Your Order
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: Form */}
            <div className="lg:col-span-7 space-y-10">
              {/* Contact */}
              <section>
                <h2 className="font-display text-2xl font-semibold text-white tracking-tight mb-6">
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="researcher@institution.edu"
                      required
                    />
                  </div>
                  <Field
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onChange={set("fullName")}
                    placeholder="Dr. Jane Smith"
                    required
                  />
                  <Field
                    label="Organization"
                    name="organization"
                    value={form.organization}
                    onChange={set("organization")}
                    placeholder="Research Institution"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </section>

              {/* Shipping */}
              <section>
                <h2 className="font-display text-2xl font-semibold text-white tracking-tight mb-6">
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <Field
                      label="Street Address"
                      name="address"
                      value={form.address}
                      onChange={set("address")}
                      placeholder="123 Research Blvd, Suite 400"
                      required
                    />
                  </div>
                  <Field
                    label="City"
                    name="city"
                    value={form.city}
                    onChange={set("city")}
                    placeholder="Boston"
                    required
                  />
                  <Field
                    label="State / Province"
                    name="state"
                    value={form.state}
                    onChange={set("state")}
                    placeholder="MA"
                    required
                  />
                  <Field
                    label="ZIP / Postal Code"
                    name="zip"
                    value={form.zip}
                    onChange={set("zip")}
                    placeholder="02101"
                    required
                  />
                  <div className="space-y-1.5">
                    <label
                      htmlFor="country"
                      className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      value={form.country}
                      onChange={(e) => set("country")(e.target.value)}
                      className="w-full bg-[#111116] border border-white/[0.10] text-white px-4 py-3 text-sm focus:outline-none focus:border-violet-royal/60 transition-colors appearance-none"
                    >
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Order notes */}
              <section>
                <h2 className="font-display text-xl font-semibold text-white tracking-tight mb-4">
                  Order Notes{" "}
                  <span className="font-sans text-sm font-normal text-white/40">
                    (optional)
                  </span>
                </h2>
                <div className="space-y-1.5">
                  <label
                    htmlFor="notes"
                    className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50"
                  >
                    Special instructions
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={(e) => set("notes")(e.target.value)}
                    placeholder="Any additional notes for your order..."
                    className="w-full bg-[#111116] border border-white/[0.10] text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-violet-royal/60 transition-colors resize-none"
                  />
                </div>
              </section>

              {/* Compliance */}
              <section className="bg-[#0B0B0F] border border-white/[0.08] p-6">
                <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-4">
                  Research Compliance Agreement
                </p>
                <label className="flex items-start gap-4 cursor-pointer">
                  <div className="flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      id="compliance"
                      checked={form.compliance}
                      onChange={(e) => set("compliance")(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      onClick={() => set("compliance")(!form.compliance)}
                      className={`h-5 w-5 border flex items-center justify-center flex-shrink-0 cursor-pointer transition-colors ${
                        form.compliance
                          ? "border-violet-royal bg-violet-royal"
                          : "border-white/25 bg-[#111116]"
                      }`}
                    >
                      {form.compliance && (
                        <svg
                          width="11"
                          height="9"
                          viewBox="0 0 12 10"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M1 5l3.5 3.5L11 1"
                            stroke="white"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span
                    className="text-sm text-white/70 leading-relaxed select-none"
                    onClick={() => set("compliance")(!form.compliance)}
                  >
                    I understand and confirm that these products are intended{" "}
                    <strong className="text-white">
                      strictly for laboratory research use only
                    </strong>{" "}
                    and are not for human or animal consumption. I am a qualified
                    researcher and will handle these compounds in accordance with
                    applicable laboratory safety standards.
                    <span className="text-violet-400 ml-1">*</span>
                  </span>
                </label>
              </section>

              {/* Payment placeholder */}
              <section className="bg-[#0B0B0F] border border-white/[0.08] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-8 w-8 flex items-center justify-center border border-white/[0.12] bg-[#111116]">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white/40"
                      aria-hidden="true"
                    >
                      <rect x="1" y="4" width="22" height="16" rx="2" />
                      <path d="M1 10h22" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    Payment
                  </h3>
                </div>
                <div className="bg-[#111116] border border-white/[0.06] p-5 text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      className="text-violet-400"
                      aria-hidden="true"
                    >
                      <circle cx="8" cy="8" r="6.5" />
                      <path d="M8 5v3.5" strokeLinecap="round" />
                      <circle cx="8" cy="11" r="0.6" fill="currentColor" />
                    </svg>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-violet-400 font-semibold">
                      Payment Processor Connection Pending
                    </p>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed max-w-sm mx-auto">
                    Do not enter payment information at this time. You will be
                    contacted with a secure payment link once our merchant
                    processor is fully configured.
                  </p>
                </div>
              </section>
            </div>

            {/* Right: Order summary */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B0B0F] border border-white/[0.08] p-6 sm:p-8 sticky top-24">
                <h2 className="font-display text-xl font-semibold text-white tracking-tight mb-6">
                  Order Summary
                </h2>

                <ul className="divide-y divide-white/[0.06] mb-5">
                  {items.map((item) => (
                    <li
                      key={item.slug}
                      className="flex items-center gap-4 py-4"
                    >
                      <div className="relative h-14 w-14 bg-[#111116] border border-white/[0.06] flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                          sizes="56px"
                        />
                        <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-violet-royal text-[10px] font-mono font-bold text-white flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white leading-tight truncate">
                          {item.name}
                        </p>
                        <p className="text-xs text-white/40 mt-0.5">
                          Research compound
                        </p>
                      </div>
                      <p className="font-mono text-sm text-white tabular flex-shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="space-y-2.5 pb-5 border-b border-white/[0.08]">
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Subtotal</span>
                    <span className="font-mono text-white tabular">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/50">Shipping</span>
                    <span className="font-mono text-white/50">
                      Calculated at confirmation
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-5 mb-8">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                    Estimated Total
                  </p>
                  <p className="font-display text-3xl font-semibold text-white tabular">
                    ${cartTotal.toFixed(2)}
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={!form.compliance}
                  className="flex items-center justify-center gap-2.5 bg-violet-royal text-white py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all w-full"
                >
                  Submit Order Request
                  <svg
                    width="13"
                    height="11"
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
                </button>

                <div className="mt-5 flex items-start gap-2 text-xs text-white/35 leading-relaxed">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className="text-violet-400/50 flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <circle cx="8" cy="8" r="6.5" />
                    <path d="M8 5v3.5" strokeLinecap="round" />
                    <circle cx="8" cy="11" r="0.6" fill="currentColor" />
                  </svg>
                  <span>
                    No payment is collected until a secure payment link is
                    provided. Order requests are reviewed for compliance before
                    fulfillment.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
