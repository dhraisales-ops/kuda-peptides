import Link from "next/link";
import Image from "next/image";

const PRODUCT_LINKS = [
  { href: "/products", label: "All Compounds" },
  { href: "/products/bpc-157-10mg", label: "BPC-157" },
  { href: "/products/tb-500-10mg", label: "TB-500" },
  { href: "/products/ghk-cu-50mg", label: "GHK-Cu" },
  { href: "/products/nad-1000mg", label: "NAD+" },
  { href: "/products/glow-70mg", label: "GLOW Blend" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/quality", label: "Quality Standards" },
  { href: "/coa", label: "COA Documentation" },
];

const SUPPORT_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/shipping-policy", label: "Shipping Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

const LEGAL_LINKS = [
  { href: "/disclaimer", label: "Disclaimer" },
  { href: "/terms", label: "Terms" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[#050505] text-white border-t border-white/[0.06]">
      {/* Top section */}
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center transition-opacity hover:opacity-80">
              <div className="relative h-9 w-48">
                <Image
                  src="/kuda/kuda-logo-transparent.png"
                  alt="Kuda Peptides"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-white/50 leading-relaxed">
              Kuda Peptides supplies research-focused compounds with premium
              labeling, batch documentation, and a strict laboratory-use-only
              standard.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-violet-royal/20 bg-violet-royal/5 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-300/80">
                Research Use Only · ≥98% Purity
              </span>
            </div>
          </div>

          {/* Links grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                Compounds
              </h3>
              <ul className="mt-4 space-y-2.5">
                {PRODUCT_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                Support
              </h3>
              <ul className="mt-4 space-y-2.5">
                {SUPPORT_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5">
                {LEGAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer banner */}
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-6">
          <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold mb-2">
            Compliance Disclaimer
          </p>
          <p className="text-xs sm:text-sm text-white/40 leading-relaxed max-w-4xl">
            Products are sold strictly for laboratory research use only.
            Products are not intended for human or animal consumption. Products
            are not drugs, foods, cosmetics, dietary supplements, or medical
            products. Kuda Peptides does not provide dosage, reconstitution,
            administration, or human/animal use instructions.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/30">
            © {new Date().getFullYear()} Kuda Peptides · All Rights Reserved
          </p>
          <p className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/30">
            For Research Use Only · Not For Human or Animal Consumption
          </p>
        </div>
      </div>
    </footer>
  );
}
