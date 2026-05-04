"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/products";

interface AddToCartButtonProps {
  product: Product;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "card";
}

export function AddToCartButton({
  product,
  size = "md",
  className = "",
  variant = "primary",
}: AddToCartButtonProps) {
  const { addToCart, openCart } = useCart();
  const [added, setAdded] = useState(false);

  const isRequest = product.status === "Request Only";
  const isPurchasable = !isRequest && product.price !== null;

  if (isRequest || !isPurchasable) {
    return (
      <Link
        href="/contact"
        className={`inline-flex items-center justify-center gap-2.5 bg-violet-royal/10 border border-violet-royal/30 text-violet-300 font-mono uppercase tracking-[0.14em] font-semibold hover:bg-violet-royal/20 hover:border-violet-royal/50 hover:text-white transition-all ${
          size === "sm"
            ? "px-4 py-2.5 text-[10px]"
            : size === "lg"
            ? "px-7 py-4 text-sm"
            : "px-5 py-3 text-xs"
        } ${className}`}
      >
        Request Availability
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
    );
  }

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (added) {
      openCart();
      return;
    }
    addToCart({
      slug: product.slug,
      name: product.name,
      price: product.price as number,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
    if (variant === "primary") {
      setTimeout(() => openCart(), 350);
    }
  }

  if (variant === "card") {
    return (
      <button
        onClick={handleAdd}
        className={`inline-flex items-center justify-center gap-1.5 font-mono uppercase tracking-[0.12em] font-semibold transition-all ${
          added
            ? "text-emerald-400"
            : "text-white/40 group-hover:text-violet-400"
        } text-[10px] ${className}`}
        aria-label={added ? "Added to cart" : `Add ${product.name} to cart`}
      >
        {added ? (
          <>
            Added
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 5l3.5 3.5L11 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : (
          <>
            Add to Cart
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
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleAdd}
      className={`group inline-flex items-center justify-center gap-2.5 font-mono uppercase tracking-[0.14em] font-semibold transition-all ${
        added
          ? "bg-emerald-600 text-white border border-emerald-600"
          : "bg-violet-royal text-white hover:bg-violet-700"
      } ${
        size === "sm"
          ? "px-4 py-2.5 text-[10px]"
          : size === "lg"
          ? "px-7 py-4 text-sm"
          : "px-5 py-3 text-xs"
      } ${className}`}
      aria-label={added ? "Added to cart" : `Add ${product.name} to cart`}
    >
      {added ? (
        <>
          Added to Cart
          <svg
            width="13"
            height="11"
            viewBox="0 0 12 10"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 5l3.5 3.5L11 1"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>
      ) : (
        <>
          Add to Cart
          <svg
            width="13"
            height="11"
            viewBox="0 0 12 10"
            fill="none"
            className="transition-transform group-hover:translate-x-0.5"
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
        </>
      )}
    </button>
  );
}
