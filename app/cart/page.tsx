"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { QuantitySelector } from "@/components/quantity-selector";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, cartTotal, cartCount } =
    useCart();

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Page header */}
      <div className="border-b border-white/[0.06] bg-[#050505]">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-violet-royal" />
            <span className="font-mono text-[11px] uppercase tracking-ultra-wide text-violet-400 font-medium">
              Research Cart
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Your Cart
          </h1>
          {cartCount > 0 && (
            <p className="mt-2 text-white/50">
              {cartCount} {cartCount === 1 ? "compound" : "compounds"} selected
            </p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12 py-10 sm:py-14">
        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 gap-8 text-center">
            <div className="h-20 w-20 flex items-center justify-center border border-white/[0.08] bg-[#111116]">
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/20"
                aria-hidden="true"
              >
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </div>
            <div>
              <h2 className="font-display text-2xl font-semibold text-white/60">
                Your cart is empty
              </h2>
              <p className="mt-2 text-white/35 max-w-md">
                Browse the catalog to add research compounds to your cart.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 bg-violet-royal text-white px-8 py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
            >
              Browse Catalog
              <svg
                width="13"
                height="11"
                viewBox="0 0 12 10"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M1 5h10m0 0L7 1m4 4L7 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Cart items */}
            <div className="lg:col-span-8">
              {/* Compliance notice */}
              <div className="flex items-start gap-3 p-4 bg-violet-royal/[0.06] border border-violet-royal/[0.15] mb-8">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="text-violet-400 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="6.5" />
                  <path d="M8 5v3.5" strokeLinecap="round" />
                  <circle cx="8" cy="11" r="0.6" fill="currentColor" />
                </svg>
                <p className="text-xs text-white/60 leading-relaxed">
                  All products are for laboratory research use only. Not for
                  human or animal consumption. Compliance verification required
                  at checkout.
                </p>
              </div>

              <ul className="divide-y divide-white/[0.06] border border-white/[0.06]" role="list">
                {items.map((item) => (
                  <li
                    key={item.slug}
                    className="flex gap-5 p-5 sm:p-6 bg-[#0B0B0F]"
                  >
                    {/* Product image */}
                    <Link href={`/products/${item.slug}`} className="flex-shrink-0">
                      <div className="relative h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] bg-[#111116] border border-white/[0.06] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-3"
                          sizes="110px"
                        />
                      </div>
                    </Link>

                    {/* Info */}
                    <div className="flex flex-1 flex-col gap-4 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            href={`/products/${item.slug}`}
                            className="font-display text-xl font-semibold text-white hover:text-violet-300 transition-colors leading-tight"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1 font-mono text-xs text-white/40">
                            Laboratory Research Compound
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.slug)}
                          aria-label={`Remove ${item.name}`}
                          className="flex-shrink-0 text-white/30 hover:text-red-400 transition-colors p-1"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
                          </svg>
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <QuantitySelector
                          quantity={item.quantity}
                          onChange={(qty) => updateQuantity(item.slug, qty)}
                        />
                        <div className="text-right">
                          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/35">
                            Subtotal
                          </p>
                          <p className="font-display text-2xl font-semibold text-white tabular mt-0.5">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="font-mono text-[10px] text-white/35 mt-0.5">
                            ${item.price.toFixed(2)} per unit
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Continue shopping */}
              <div className="mt-6">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] font-semibold text-white/40 hover:text-violet-400 transition-colors"
                >
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M11 5H1m0 0l4-4M1 5l4 4"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-4">
              <div className="bg-[#0B0B0F] border border-white/[0.08] p-6 sm:p-8 sticky top-24">
                <h2 className="font-display text-xl font-semibold text-white tracking-tight mb-6">
                  Order Summary
                </h2>

                <div className="space-y-3 pb-5 border-b border-white/[0.08]">
                  {items.map((item) => (
                    <div key={item.slug} className="flex items-center justify-between gap-3">
                      <span className="text-sm text-white/60 leading-tight flex-1 min-w-0">
                        <span className="font-mono text-xs text-white/40 mr-1.5">
                          ×{item.quantity}
                        </span>
                        {item.name}
                      </span>
                      <span className="font-mono text-sm text-white/80 tabular flex-shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-5 mb-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                    Subtotal
                  </p>
                  <p className="font-display text-3xl font-semibold text-white tabular">
                    ${cartTotal.toFixed(2)}
                  </p>
                </div>

                <Link
                  href="/checkout"
                  className="flex items-center justify-center gap-2.5 bg-violet-royal text-white py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors w-full"
                >
                  Proceed to Checkout
                  <svg
                    width="13"
                    height="11"
                    viewBox="0 0 12 10"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M1 5h10m0 0L7 1m4 4L7 9"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>

                <p className="mt-4 text-xs text-white/35 leading-relaxed text-center">
                  Shipping, taxes, and compliance verification are calculated at
                  checkout.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
