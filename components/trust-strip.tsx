interface TrustItem {
  label: string;
  description: string;
  icon: React.ReactNode;
}

const items: TrustItem[] = [
  {
    label: "High Purity Standard",
    description: "≥98% purity across the catalog",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7l-9-5z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Batch Documentation",
    description: "Batch records available on request",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8M8 17h6" />
      </svg>
    ),
  },
  {
    label: "Lab Tested",
    description: "HPLC & MS confirmation",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 3v6L4 19a2 2 0 002 3h12a2 2 0 002-3l-5-10V3" />
        <path d="M9 3h6" />
        <path d="M7 14h10" />
      </svg>
    ),
  },
  {
    label: "Store At -20°C",
    description: "Cold-chain standard maintained",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2v20M2 12h20" />
        <path d="M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

export function TrustStrip({
  variant = "dark",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`border-y ${
        isDark
          ? "border-white/[0.06] bg-[#0B0B0F]"
          : "border-ink-200 bg-ink-950"
      }`}
    >
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-4 px-6 lg:px-8 py-6 sm:py-8"
            >
              <div className="flex h-10 w-10 items-center justify-center border border-violet-royal/25 bg-violet-royal/5 text-violet-400 flex-shrink-0">
                <div className="h-5 w-5">{item.icon}</div>
              </div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-sm sm:text-base leading-tight text-white">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm leading-tight text-white/40">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
