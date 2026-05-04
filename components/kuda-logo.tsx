import Link from "next/link";

interface KudaLogoProps {
  variant?: "full" | "wordmark" | "icon";
  inverted?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  withTagline?: boolean;
  asLink?: boolean;
}

const sizeMap = {
  sm: { icon: 22, text: "text-base", tagline: "text-[9px]" },
  md: { icon: 28, text: "text-lg", tagline: "text-[10px]" },
  lg: { icon: 40, text: "text-2xl", tagline: "text-[11px]" },
};

function KudaIcon({
  size = 28,
  inverted = false,
}: {
  size?: number;
  inverted?: boolean;
}) {
  const blackColor = inverted ? "#FFFFFF" : "#050505";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left vertical bar of K */}
      <rect x="6" y="4" width="7" height="40" fill={blackColor} />
      {/* Lower diagonal of K */}
      <path
        d="M13 24 L34 44 L42 44 L21 24 Z"
        fill={blackColor}
      />
      {/* Upper diagonal — purple gradient */}
      <path
        d="M13 24 L34 4 L42 4 L21 24 Z"
        fill="url(#kuda-grad)"
      />
      {/* Molecule accent - three small nodes */}
      <circle cx="18" cy="20" r="2.2" fill="#7C3AED" />
      <circle cx="22" cy="24" r="2.2" fill="#5B21B6" />
      <circle cx="18" cy="28" r="2.2" fill="#7C3AED" />
      <line
        x1="18"
        y1="20"
        x2="22"
        y2="24"
        stroke="#5B21B6"
        strokeWidth="1.2"
      />
      <line
        x1="22"
        y1="24"
        x2="18"
        y2="28"
        stroke="#5B21B6"
        strokeWidth="1.2"
      />
      <defs>
        <linearGradient
          id="kuda-grad"
          x1="13"
          y1="14"
          x2="42"
          y2="14"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5B21B6" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function KudaLogo({
  variant = "full",
  inverted = false,
  size = "md",
  className = "",
  withTagline = false,
  asLink = true,
}: KudaLogoProps) {
  const s = sizeMap[size];
  const textColor = inverted ? "text-white" : "text-ink-950";
  const accentColor = inverted ? "text-violet-300" : "text-violet-deep";
  const dividerColor = inverted ? "bg-white/20" : "bg-ink-200";

  const content = (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {variant !== "wordmark" && (
        <KudaIcon size={s.icon} inverted={inverted} />
      )}
      {variant !== "icon" && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display font-semibold tracking-tight ${textColor} ${s.text}`}
          >
            KUDA <span className={accentColor}>PEPTIDES</span>
          </span>
          {withTagline && (
            <>
              <span className={`mt-1.5 h-px w-full ${dividerColor}`} />
              <span
                className={`mt-1.5 font-mono uppercase tracking-ultra-wide ${
                  inverted ? "text-white/70" : "text-ink-500"
                } ${s.tagline}`}
              >
                Precision Research Compounds
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center transition-opacity hover:opacity-80"
        aria-label="Kuda Peptides — Home"
      >
        {content}
      </Link>
    );
  }
  return content;
}
