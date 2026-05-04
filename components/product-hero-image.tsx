import Image from "next/image";
import type { Product } from "@/lib/products";

interface ProductHeroImageProps {
  product: Product;
  size?: "card" | "detail" | "hero";
  showBatch?: boolean;
}

const sizeStyles = {
  card: {
    container: "h-72 sm:h-80",
    vialWidth: "w-[110px]",
    vialHeight: "h-[200px]",
    capHeight: "h-[28px]",
    labelHeight: "h-[136px]",
    nameSize: "text-[11px]",
    amountSize: "text-[16px]",
    brandSize: "text-[7px]",
    fooSize: "text-[6px]",
  },
  detail: {
    container: "h-[480px] lg:h-[600px]",
    vialWidth: "w-[200px] lg:w-[240px]",
    vialHeight: "h-[380px] lg:h-[460px]",
    capHeight: "h-[52px] lg:h-[64px]",
    labelHeight: "h-[260px] lg:h-[316px]",
    nameSize: "text-[18px] lg:text-[22px]",
    amountSize: "text-[28px] lg:text-[34px]",
    brandSize: "text-[11px] lg:text-[12px]",
    fooSize: "text-[9px] lg:text-[10px]",
  },
  hero: {
    container: "h-[380px] sm:h-[440px]",
    vialWidth: "w-[150px] sm:w-[170px]",
    vialHeight: "h-[290px] sm:h-[330px]",
    capHeight: "h-[40px] sm:h-[46px]",
    labelHeight: "h-[195px] sm:h-[220px]",
    nameSize: "text-[14px] sm:text-[16px]",
    amountSize: "text-[22px] sm:text-[26px]",
    brandSize: "text-[9px] sm:text-[10px]",
    fooSize: "text-[8px] sm:text-[8px]",
  },
};

const imageSizes = {
  card: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
  detail: "(max-width: 1024px) 100vw, 60vw",
  hero: "(max-width: 1024px) 100vw, 40vw",
};

export function ProductHeroImage({
  product,
  size = "card",
  showBatch = false,
}: ProductHeroImageProps) {
  const s = sizeStyles[size];

  if (product.image) {
    return (
      <div
        className={`relative w-full overflow-hidden ${s.container}`}
        style={{ background: "radial-gradient(ellipse at 50% 60%, #111116 0%, #050505 100%)" }}
      >
        {/* Subtle purple glow behind image */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(ellipse at 50% 70%, rgba(124,58,237,0.2) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes={imageSizes[size]}
          priority={size === "hero"}
        />

        {/* Status badge */}
        {product.status === "Request Only" && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center gap-1.5 bg-[#050505]/90 border border-violet-royal/30 text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] font-semibold backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Request Only
            </span>
          </div>
        )}

        {/* Bottom purity badge */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
          <span className="font-mono uppercase tracking-[0.18em] text-white/20 text-[9px]">
            Lot · KP-2504
          </span>
          <span className="font-mono uppercase tracking-[0.18em] text-white/20 text-[9px]">
            {product.purity} Purity
          </span>
        </div>
      </div>
    );
  }

  // CSS vial fallback (for products without images)
  return (
    <CSSVial product={product} size={size} showBatch={showBatch} />
  );
}

// Mini K icon for fallback vial
function MiniK() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="6" y="4" width="7" height="40" fill="#050505" />
      <path d="M13 24 L34 44 L42 44 L21 24 Z" fill="#050505" />
      <path d="M13 24 L34 4 L42 4 L21 24 Z" fill="#5B21B6" />
      <circle cx="18" cy="20" r="2" fill="#7C3AED" />
      <circle cx="22" cy="24" r="2" fill="#5B21B6" />
      <circle cx="18" cy="28" r="2" fill="#7C3AED" />
    </svg>
  );
}

function CSSVial({
  product,
  size,
  showBatch,
}: {
  product: Product;
  size: "card" | "detail" | "hero";
  showBatch: boolean;
}) {
  const s = sizeStyles[size];

  return (
    <div
      className={`relative w-full overflow-hidden ${s.container}`}
      style={{ background: "radial-gradient(ellipse at 50% 60%, #111116 0%, #050505 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`relative flex flex-col ${s.vialWidth} ${s.vialHeight} shadow-vial`}>
          {/* Cap */}
          <div className={`vial-cap relative ${s.capHeight} w-full rounded-t-md`}>
            <div className="absolute inset-x-2 top-1 h-px bg-white/30 rounded-full" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#050505]" />
          </div>
          {/* Crimp ring */}
          <div className="relative h-2 w-full bg-gradient-to-b from-violet-300/40 via-white/20 to-violet-300/40" />
          {/* Glass body */}
          <div className="vial-glass relative flex-1 w-full border-x border-white/20 overflow-hidden">
            <div className="vial-shine absolute left-3 top-2 bottom-2 w-1.5 opacity-50 blur-sm" />
            <div className="absolute right-3 top-3 bottom-3 w-px bg-white/40" />
            {/* Label */}
            <div
              className={`absolute inset-x-2 top-1/2 -translate-y-1/2 ${s.labelHeight} bg-white border border-ink-200 shadow-sm overflow-hidden label-grain`}
            >
              <div className="flex items-center gap-1.5 border-b border-ink-200 px-2 py-1.5 bg-white">
                <MiniK />
                <div className="flex flex-col leading-none">
                  <span className={`font-display font-semibold tracking-tight text-ink-950 ${s.brandSize}`}>
                    KUDA PEPTIDES
                  </span>
                  <span className={`mt-0.5 font-mono uppercase tracking-[0.18em] text-violet-deep ${s.fooSize}`}>
                    Research Use Only
                  </span>
                </div>
              </div>
              <div className="px-2 py-2 flex flex-col items-start">
                <span className={`font-mono uppercase tracking-[0.16em] text-ink-500 ${s.fooSize}`}>
                  Compound
                </span>
                <span className={`font-display font-semibold leading-tight text-ink-950 ${s.nameSize}`}>
                  {product.shortName}
                </span>
                <div className="mt-1 flex items-baseline gap-1">
                  <span className={`font-display font-bold text-violet-deep ${s.amountSize}`}>
                    {product.amount}
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0">
                <div className="bg-violet-deep px-2 py-1 flex items-center justify-center">
                  <span className={`font-mono uppercase tracking-[0.18em] text-white font-semibold ${s.fooSize}`}>
                    For Research Use Only
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-1 bottom-1 h-3 bg-gradient-to-t from-ink-100 to-transparent rounded-sm opacity-60" />
          </div>
          {/* Vial bottom */}
          <div className="h-2 w-full bg-gradient-to-b from-white/20 to-white/10 rounded-b-md border-x border-b border-white/10" />
        </div>
      </div>

      {product.status === "Request Only" && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 bg-[#050505]/90 border border-violet-royal/30 text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-[0.14em] font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Request Only
          </span>
        </div>
      )}
      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/20">
        <span className="font-mono uppercase tracking-[0.18em] text-[9px]">
          Lot · KP-2504
        </span>
        <span className="font-mono uppercase tracking-[0.18em] text-[9px]">
          {product.purity} Purity
        </span>
      </div>
    </div>
  );
}
