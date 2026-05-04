"use client";

import { useState } from "react";
import Link from "next/link";
import { AuthCard } from "@/components/auth-card";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [compliance, setCompliance] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!compliance) {
      alert("You must confirm the research-use-only compliance agreement.");
      return;
    }
    // Auth backend not yet connected. See docs/auth-setup-notes.md
    alert(
      "Authentication system pending setup. See docs/auth-setup-notes.md for integration details."
    );
  }

  return (
    <AuthCard
      title="Create Account"
      subtitle="Register for a Kuda Peptides research account."
    >
      {/* Google OAuth placeholder */}
      <button
        type="button"
        onClick={() =>
          alert(
            "Google OAuth not yet connected. See docs/auth-setup-notes.md for setup instructions."
          )
        }
        className="w-full flex items-center justify-center gap-3 bg-[#111116] border border-white/[0.12] text-white/80 py-3 text-sm font-medium hover:border-white/25 hover:text-white transition-all mb-6"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Continue with Google
      </button>

      {/* Divider */}
      <div className="relative flex items-center gap-4 mb-6">
        <div className="flex-1 h-px bg-white/[0.08]" />
        <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/30">
          or
        </span>
        <div className="flex-1 h-px bg-white/[0.08]" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50"
          >
            Full Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Dr. Jane Smith"
            required
            className="w-full bg-[#111116] border border-white/[0.10] text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-violet-royal/60 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="researcher@institution.edu"
            required
            className="w-full bg-[#111116] border border-white/[0.10] text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-violet-royal/60 transition-colors"
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="password"
            className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Minimum 8 characters"
            minLength={8}
            required
            className="w-full bg-[#111116] border border-white/[0.10] text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-violet-royal/60 transition-colors"
          />
        </div>

        {/* Compliance */}
        <div className="bg-[#111116] border border-white/[0.08] p-4 mt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <div
              onClick={() => setCompliance(!compliance)}
              className={`mt-0.5 h-5 w-5 flex-shrink-0 border flex items-center justify-center cursor-pointer transition-colors ${
                compliance
                  ? "border-violet-royal bg-violet-royal"
                  : "border-white/25 bg-transparent"
              }`}
            >
              {compliance && (
                <svg width="11" height="9" viewBox="0 0 12 10" fill="none" aria-hidden="true">
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
            <span
              className="text-xs text-white/60 leading-relaxed select-none"
              onClick={() => setCompliance(!compliance)}
            >
              I confirm that I am a qualified researcher and will use all products
              from Kuda Peptides strictly for{" "}
              <strong className="text-white">laboratory research use only</strong>.
              Products are not for human or animal consumption.
              <span className="text-violet-400 ml-1">*</span>
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={!compliance}
          className="w-full flex items-center justify-center gap-2.5 bg-violet-royal text-white py-3.5 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all mt-2"
        >
          Create Account
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
      </form>

      <p className="mt-5 text-xs text-white/30 text-center leading-relaxed">
        Authentication system pending setup. See{" "}
        <code className="text-violet-400/70 font-mono text-[11px]">
          docs/auth-setup-notes.md
        </code>
      </p>

      <p className="mt-6 text-center text-sm text-white/45">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
        >
          Sign in
        </Link>
      </p>
    </AuthCard>
  );
}
