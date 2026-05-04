"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/components/cart-provider";

const NAV_LINKS = [
  { href: "/products", label: "Shop" },
  { href: "/quality", label: "Quality" },
  { href: "/coa", label: "COA" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { cartCount, toggleCart } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/[0.06]">
      {/* Top compliance strip */}
      <div className="hidden lg:block border-b border-white/[0.04]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between py-1.5">
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/40">
              For Laboratory Research Use Only · Not For Human or Animal Consumption
            </p>
            <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/30">
              Premium Research Compounds · ≥98% Purity Standard
            </p>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            href="/"
            className="relative flex items-center transition-opacity hover:opacity-80"
            aria-label="Kuda Peptides — Home"
          >
            {/* Replace /public/kuda/kuda-logo-transparent.png with the final transparent website logo if needed. */}
            <div className="relative h-8 w-44">
              <Image
                src="/kuda/kuda-logo-transparent.png"
                alt="Kuda Peptides"
                fill
                className="object-contain object-left"
                priority
                onError={() => {}}
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Account link */}
            <Link
              href="/account"
              className="hidden sm:flex items-center justify-center h-9 w-9 text-white/50 hover:text-white transition-colors"
              aria-label="Account"
              title="Account"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </Link>

            {/* Cart button */}
            <button
              onClick={toggleCart}
              aria-label={`Open cart${cartCount > 0 ? ` — ${cartCount} item${cartCount === 1 ? "" : "s"}` : ""}`}
              className="relative flex items-center justify-center h-9 w-9 text-white/50 hover:text-white transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
              {cartCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-violet-royal text-[9px] font-mono font-bold text-white flex items-center justify-center leading-none"
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
            </button>

            {/* Request button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 bg-violet-royal/10 border border-violet-royal/30 text-violet-300 px-4 sm:px-5 py-2.5 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-royal/20 hover:border-violet-royal/50 hover:text-white transition-all"
            >
              Request Information
              <svg
                width="11"
                height="9"
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

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-white/60 hover:text-white"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              ) : (
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M3 7h18M3 12h18M3 17h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/[0.06] bg-[#0B0B0F]">
          <div className="mx-auto max-w-8xl px-6 sm:px-8 py-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-base font-medium text-white/70 hover:text-white border-b border-white/[0.06]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/account"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-white/70 hover:text-white border-b border-white/[0.06]"
            >
              Account
            </Link>
            <div className="flex gap-3 pt-4">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-violet-royal/10 border border-violet-royal/30 text-violet-300 px-5 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold"
              >
                Request Information
              </Link>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  toggleCart();
                }}
                className="inline-flex items-center justify-center gap-2 border border-white/[0.12] text-white/70 px-4 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold relative"
                aria-label="Open cart"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="font-mono text-xs text-violet-400 font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
