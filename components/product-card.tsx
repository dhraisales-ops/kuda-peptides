import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import { AddToCartButton } from "@/components/add-to-cart-button";

interface ProductCardProps {
  product: Product;
  emphasized?: boolean;
}

export function ProductCard({ product, emphasized = false }: ProductCardProps) {
  const isRequest = product.status === "Request Only";
  const isPurchasable = !isRequest && product.price !== null;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden bg-[#0D0D12] border transition-all duration-300 ${
        emphasized
          ? "border-violet-royal/30"
          : "border-white/[0.07] hover:border-violet-royal/35"
      }`}
    >
      {/* Image — links to product detail */}
      <Link
        href={`/products/${product.slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="block"
      >
        <div
          className="relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 50% 60%, #161620 0%, #0D0D12 100%)",
          }}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Status badge */}
          <div className="absolute top-3 left-3">
            {isRequest ? (
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] bg-violet-royal/15 text-violet-400 px-2 py-1 border border-violet-royal/20">
                Request Only
              </span>
            ) : (
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] bg-emerald-400/10 text-emerald-400/80 px-2 py-1 border border-emerald-400/15">
                In Stock
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 border-t border-white/[0.05]">
        <p className="font-mono text-[9px] uppercase tracking-ultra-wide text-white/30 mb-2">
          {product.category}
        </p>

        <Link href={`/products/${product.slug}`} className="block">
          <h3 className="font-display text-lg sm:text-xl font-semibold tracking-tight text-white leading-tight hover:text-violet-300 transition-colors">
            {product.name}
          </h3>
        </Link>

        {product.composition && (
          <p className="mt-1 text-xs text-violet-400/80 font-medium leading-snug">
            {product.composition}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-white/[0.05] flex items-end justify-between mt-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/30">
              Price
            </p>
            <p className="font-display text-xl font-semibold text-white tabular leading-none mt-1">
              {formatPrice(product.price)}
            </p>
          </div>

          {isPurchasable ? (
            <AddToCartButton product={product} variant="card" size="sm" />
          ) : (
            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] font-semibold text-violet-400 hover:text-violet-300 transition-colors"
            >
              {isRequest ? "Request" : "View"}
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                fill="none"
                className="transition-transform group-hover:translate-x-0.5"
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
          )}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-violet-royal/0 group-hover:bg-violet-royal/40 transition-colors duration-300" />
    </article>
  );
}
