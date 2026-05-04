interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  className?: string;
  light?: boolean; // true = dark text on light background
}

const sizeMap = {
  sm: "text-2xl sm:text-3xl",
  md: "text-3xl sm:text-4xl lg:text-5xl",
  lg: "text-4xl sm:text-5xl lg:text-6xl",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  size = "md",
  className = "",
  light = false,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  const titleColor = light ? "text-ink-950" : "text-white";
  const descColor = light ? "text-ink-600" : "text-white/60";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2.5 mb-4">
          <span className="h-px w-6 bg-violet-royal" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-display font-semibold leading-[1.05] tracking-tight ${titleColor} ${sizeMap[size]}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base sm:text-lg ${descColor} leading-relaxed ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
