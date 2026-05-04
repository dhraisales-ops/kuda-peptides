"use client";

import { PRODUCT_CATEGORIES } from "@/lib/products";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const FILTERS = ["All", ...PRODUCT_CATEGORIES, "Request Only"];

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="border-y border-white/[0.06] bg-[#0B0B0F]">
      <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-4">
          <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/30 flex-shrink-0">
            Filter:
          </span>
          <div className="flex items-center gap-1.5 sm:gap-2">
            {FILTERS.map((category) => {
              const isActive = selected === category;
              return (
                <button
                  key={category}
                  onClick={() => onSelect(category)}
                  className={`whitespace-nowrap px-3.5 py-1.5 text-xs font-mono font-medium transition-all border ${
                    isActive
                      ? "bg-violet-royal border-violet-royal text-white"
                      : "bg-transparent text-white/50 border-white/[0.08] hover:border-violet-royal/30 hover:text-white/80"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
