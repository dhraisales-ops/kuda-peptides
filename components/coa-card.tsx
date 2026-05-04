import Link from "next/link";

interface CoaCardProps {
  productName: string;
  batchNumber: string;
  date: string;
  purity: string;
  category: string;
}

export function CoaCard({
  productName,
  batchNumber,
  date,
  purity,
  category,
}: CoaCardProps) {
  return (
    <div className="group relative border border-white/[0.08] bg-[#111116] overflow-hidden transition-all hover:border-violet-royal/40 hover:shadow-card-hover">
      {/* Top accent */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-violet-royal/0 via-violet-royal/40 to-violet-royal/0" />

      {/* Header */}
      <div className="border-b border-white/[0.06] bg-white/[0.02] px-5 py-4">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
            Certificate of Analysis
          </span>
          <span className="font-mono text-[10px] text-white/30">{date}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
            Compound
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-white leading-tight">
            {productName}
          </p>
          <p className="mt-0.5 text-xs text-white/40">{category}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/[0.06]">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
              Batch No.
            </p>
            <p className="mt-1 font-mono text-sm font-semibold text-white/90">
              {batchNumber}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
              Purity
            </p>
            <p className="mt-1 font-mono text-sm font-semibold text-white/90">
              {purity}
            </p>
          </div>
        </div>

        <div className="pt-3 border-t border-white/[0.06]">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
              Documentation
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-violet-400 font-semibold hover:text-violet-300 transition-colors"
            >
              Request
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
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer band */}
      <div className="bg-violet-royal/5 border-t border-violet-royal/10 px-5 py-2">
        <p className="font-mono text-[9px] uppercase tracking-ultra-wide text-violet-400/60 text-center">
          For Research Use Only — Not For Human or Animal Consumption
        </p>
      </div>
    </div>
  );
}
