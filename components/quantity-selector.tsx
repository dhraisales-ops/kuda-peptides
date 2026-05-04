"use client";

interface QuantitySelectorProps {
  quantity: number;
  onChange: (quantity: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md";
}

export function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
  size = "md",
}: QuantitySelectorProps) {
  const isSmall = size === "sm";

  return (
    <div
      className={`inline-flex items-center border border-white/[0.10] bg-[#111116] ${
        isSmall ? "h-8" : "h-10"
      }`}
    >
      <button
        onClick={() => onChange(Math.max(min, quantity - 1))}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className={`flex items-center justify-center text-white/50 hover:text-white disabled:text-white/20 disabled:cursor-not-allowed transition-colors ${
          isSmall ? "w-8" : "w-10"
        } border-r border-white/[0.10]`}
      >
        <svg
          width={isSmall ? 10 : 12}
          height={isSmall ? 10 : 12}
          viewBox="0 0 12 2"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 1h10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <span
        className={`font-mono tabular text-white font-semibold select-none ${
          isSmall ? "w-8 text-xs" : "w-10 text-sm"
        } text-center`}
        aria-live="polite"
        aria-label={`Quantity: ${quantity}`}
      >
        {quantity}
      </span>

      <button
        onClick={() => onChange(Math.min(max, quantity + 1))}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className={`flex items-center justify-center text-white/50 hover:text-white disabled:text-white/20 disabled:cursor-not-allowed transition-colors ${
          isSmall ? "w-8" : "w-10"
        } border-l border-white/[0.10]`}
      >
        <svg
          width={isSmall ? 10 : 12}
          height={isSmall ? 10 : 12}
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 1v10M1 6h10"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
