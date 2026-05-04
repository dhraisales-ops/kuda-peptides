"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { QuantitySelector } from "@/components/quantity-selector";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, cartTotal, cartCount, isOpen, closeCart } =
    useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[420px] bg-[#0B0B0F] border-l border-white/[0.08] flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-xl font-semibold text-white tracking-tight">
              Research Cart
            </h2>
            {cartCount > 0 && (
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] bg-violet-royal/15 text-violet-400 px-2 py-0.5 border border-violet-royal/20">
                {cartCount} {cartCount === 1 ? "item" : "items"}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-9 w-9 items-center justify-center text-white/50 hover:text-white transition-colors border border-white/[0.08] hover:border-white/20"
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
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Compliance strip */}
        <div className="px-6 py-2.5 bg-violet-royal/[0.06] border-b border-violet-royal/[0.15]">
          <p className="font-mono text-[9px] uppercase tracking-ultra-wide text-violet-400/70">
            Laboratory Research Use Only · Not For Human or Animal Consumption
          </p>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6 text-center">
              <div className="h-16 w-16 flex items-center justify-center border border-white/[0.08] bg-[#111116]">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
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
                <p className="font-display text-lg font-semibold text-white/60">
                  Your cart is empty
                </p>
                <p className="mt-1.5 text-sm text-white/35">
                  Browse the catalog to add research compounds.
                </p>
              </div>
              <Link
                href="/products"
                onClick={closeCart}
                className="inline-flex items-center gap-2 bg-violet-royal text-white px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
              >
                Browse Catalog
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
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-white/[0.06]" role="list">
              {items.map((item) => (
                <li key={item.slug} className="flex gap-4 p-5">
                  {/* Product image */}
                  <Link
                    href={`/products/${item.slug}`}
                    onClick={closeCart}
                    className="flex-shrink-0"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <div className="relative h-[72px] w-[72px] bg-[#111116] border border-white/[0.06] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                        sizes="72px"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex flex-1 flex-col gap-3 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        href={`/products/${item.slug}`}
                        onClick={closeCart}
                        className="font-display text-base font-semibold text-white hover:text-violet-300 transition-colors leading-tight truncate"
                      >
                        {item.name}
                      </Link>
                      <button
                        onClick={() => removeFromCart(item.slug)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="flex-shrink-0 text-white/30 hover:text-red-400 transition-colors mt-0.5"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M6 6l12 12M6 18L18 6" />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-3">
                      <QuantitySelector
                        size="sm"
                        quantity={item.quantity}
                        onChange={(qty) => updateQuantity(item.slug, qty)}
                      />
                      <p className="font-mono text-base font-semibold text-white tabular">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/[0.08] p-6 space-y-4 bg-[#0B0B0F]">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/50">
                Subtotal
              </p>
              <p className="font-display text-2xl font-semibold text-white tabular">
                ${cartTotal.toFixed(2)}
              </p>
            </div>
            <p className="text-xs text-white/35 leading-relaxed">
              Shipping and compliance verification calculated at checkout.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="flex items-center justify-center gap-2.5 bg-violet-royal text-white py-4 text-sm font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-700 transition-colors"
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
              <Link
                href="/cart"
                onClick={closeCart}
                className="flex items-center justify-center gap-2 border border-white/[0.12] text-white/70 py-3 text-xs font-mono uppercase tracking-[0.14em] font-semibold hover:border-white/25 hover:text-white transition-all"
              >
                View Full Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
