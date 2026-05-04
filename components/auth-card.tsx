import Link from "next/link";
import Image from "next/image";

interface AuthCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function AuthCard({ children, title, subtitle }: AuthCardProps) {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 py-20">
      {/* Brand mark */}
      <Link href="/" className="mb-10 flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
        <div className="relative h-8 w-40">
          <Image
            src="/kuda/kuda-logo-transparent.png"
            alt="Kuda Peptides"
            fill
            className="object-contain"
            priority
            onError={() => {}}
          />
        </div>
      </Link>

      <div className="w-full max-w-[420px]">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-display text-3xl font-semibold tracking-tight text-white">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-sm text-white/50 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Card */}
        <div className="bg-[#0B0B0F] border border-white/[0.08] p-8 sm:p-10">
          {children}
        </div>

        {/* Compliance note */}
        <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-ultra-wide text-white/25">
          For Laboratory Research Use Only · Not For Human or Animal Consumption
        </p>
      </div>
    </div>
  );
}
