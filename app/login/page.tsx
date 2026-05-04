"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { AuthCard } from "@/components/auth-card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Auth backend not yet connected. See docs/auth-setup-notes.md
    alert(
      "Authentication system pending setup. See docs/auth-setup-notes.md for integration details."
    );
  }

  return (
    <AuthCard
      title="Sign In"
      subtitle="Access your Kuda Peptides research account."
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

      {/* Email/password form */}
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block font-mono text-[10px] uppercase tracking-[0.14em] text-white/50"
            >
              Password
            </label>
            <Link
              href="/contact"
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-violet-400 hover:text-violet-300 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
            className="w-full bg-[#111116] border border-white/[0.10] text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-violet-royal/60 transition-colors"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2.5 bg-violet-royal text-white py-3.5 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors mt-6"
        >
          Sign In
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

      {/* Auth notice */}
      <p className="mt-5 text-xs text-white/30 text-center leading-relaxed">
        Authentication system pending setup. Contact{" "}
        <Link href="/contact" className="text-violet-400 hover:text-violet-300">
          support
        </Link>{" "}
        if you need access.
      </p>

      {/* Sign up link */}
      <p className="mt-6 text-center text-sm text-white/45">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="text-violet-400 hover:text-violet-300 font-medium transition-colors"
        >
          Create account
        </Link>
      </p>
    </AuthCard>
  );
}
