import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account",
  description: "Your Kuda Peptides research account.",
};

const SECTIONS = [
  {
    id: "details",
    label: "Account Details",
    icon: (
      <path
        d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
    description: "Manage your profile, email, and password.",
  },
  {
    id: "orders",
    label: "Order History",
    icon: (
      <>
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="3" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 12h6M9 16h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    description: "View past orders and track pending order requests.",
  },
  {
    id: "documentation",
    label: "Documentation Requests",
    icon: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </>
    ),
    description: "Access COA documentation and batch records for your orders.",
  },
  {
    id: "saved",
    label: "Saved Products",
    icon: (
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    ),
    description: "Research compounds you have saved for later.",
  },
];

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Header */}
      <div className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-violet-royal" />
            <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
              My Account
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Research Account
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left sidebar */}
          <aside className="lg:col-span-3">
            <div className="bg-[#0B0B0F] border border-white/[0.08] p-6">
              {/* Placeholder avatar */}
              <div className="flex flex-col items-center text-center gap-4 pb-6 border-b border-white/[0.08]">
                <div className="h-16 w-16 flex items-center justify-center bg-violet-royal/10 border border-violet-royal/20">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-violet-400"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-base font-semibold text-white">
                    Research Account
                  </p>
                  <p className="text-xs text-white/40 mt-1">
                    Authentication pending
                  </p>
                </div>
              </div>

              <nav className="pt-5 space-y-1">
                {SECTIONS.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex items-center gap-3 px-3 py-2.5 text-sm text-white/55 hover:text-white hover:bg-white/[0.04] transition-all"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      {s.icon}
                    </svg>
                    {s.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-4 bg-[#0B0B0F] border border-white/[0.08] p-5 text-center">
              <p className="text-xs text-white/40 mb-3 leading-relaxed">
                Not the right account?
              </p>
              <Link
                href="/login"
                className="text-xs font-mono uppercase tracking-[0.12em] text-violet-400 hover:text-violet-300 transition-colors"
              >
                Sign In / Sign Up
              </Link>
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9 space-y-6">
            {/* Auth pending notice */}
            <div className="bg-[#0B0B0F] border border-violet-royal/20 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center bg-violet-royal/10 border border-violet-royal/20">
                  <svg
                    width="18"
                    height="18"
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
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-white">
                    Customer account system pending authentication setup.
                  </h2>
                  <p className="mt-2 text-sm text-white/55 leading-relaxed max-w-2xl">
                    The account portal will be fully functional once authentication is
                    configured via Supabase Auth or NextAuth. See{" "}
                    <code className="font-mono text-violet-400/80 text-xs">
                      docs/auth-setup-notes.md
                    </code>{" "}
                    for the integration plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Account section cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {SECTIONS.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-[#0B0B0F] border border-white/[0.08] p-6 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 flex items-center justify-center border border-white/[0.10] bg-[#111116]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-violet-400"
                        aria-hidden="true"
                      >
                        {section.icon}
                      </svg>
                    </div>
                    <h3 className="font-display text-base font-semibold text-white">
                      {section.label}
                    </h3>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="mt-auto pt-3 border-t border-white/[0.06]">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
                      Available after authentication setup
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-[#0B0B0F] border border-white/[0.08] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  Browse the catalog
                </p>
                <p className="mt-1 text-sm text-white/50">
                  Explore 19 research compounds while account setup is pending.
                </p>
              </div>
              <Link
                href="/products"
                className="flex-shrink-0 inline-flex items-center gap-2.5 bg-violet-royal text-white px-7 py-3.5 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
              >
                Shop Catalog
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
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
