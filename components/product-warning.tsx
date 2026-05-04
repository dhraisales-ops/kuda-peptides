export function ProductWarning() {
  return (
    <div className="relative border border-violet-royal/20 bg-violet-royal/5 p-6 sm:p-8 overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-violet-royal/40" />
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-7 w-7 items-center justify-center border border-violet-royal/40 bg-violet-royal/10">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-violet-400"
              aria-hidden="true"
            >
              <path
                d="M8 1L1 14h14L8 1z"
                stroke="currentColor"
                strokeWidth="1.4"
                fill="none"
                strokeLinejoin="round"
              />
              <path
                d="M8 6v3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <circle cx="8" cy="11.5" r="0.6" fill="currentColor" />
            </svg>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-semibold">
            Compliance Warning
          </span>
        </div>
        <p className="font-display text-lg sm:text-xl leading-snug text-white">
          For laboratory research use only. Not for human or animal
          consumption.
        </p>
        <p className="text-sm text-white/60 leading-relaxed">
          Kuda Peptides does not provide dosage, reconstitution,
          administration, or human/animal use instructions. Products are not
          drugs, foods, cosmetics, dietary supplements, or medical products.
          Purchasers are responsible for compliance with applicable laws and
          regulations.
        </p>
      </div>
    </div>
  );
}
