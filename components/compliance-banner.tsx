interface ComplianceBannerProps {
  variant?: "dark" | "purple" | "subtle";
  className?: string;
}

export function ComplianceBanner({
  variant = "dark",
  className = "",
}: ComplianceBannerProps) {
  const styles = {
    dark: "bg-[#0B0B0F] border-white/[0.06]",
    purple: "bg-violet-royal/5 border-violet-royal/20",
    subtle: "bg-[#111116] border-white/[0.06]",
  };

  return (
    <div className={`relative overflow-hidden border ${styles[variant]} ${className}`}>
      <div className="relative mx-auto max-w-8xl px-6 py-7 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center border border-violet-royal/30 bg-violet-royal/10">
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-violet-400"
                aria-hidden="true"
              >
                <path
                  d="M8 1L2 4v4c0 3.5 2.5 6.5 6 7 3.5-.5 6-3.5 6-7V4L8 1z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                />
                <path
                  d="M5.5 8L7 9.5l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  fill="none"
                />
              </svg>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
              Compliance Notice
            </span>
          </div>
          <p className="font-display text-base sm:text-lg leading-snug text-white/80 max-w-3xl">
            These products are intended strictly for laboratory research use
            only and are not intended for human or animal consumption.
          </p>
        </div>
      </div>
      {/* Accent line */}
      <div className="absolute bottom-0 left-0 h-px w-1/3 bg-violet-royal/40" />
    </div>
  );
}
