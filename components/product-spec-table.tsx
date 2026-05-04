import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";

interface ProductSpecTableProps {
  product: Product;
  variant?: "compact" | "full";
}

export function ProductSpecTable({
  product,
  variant = "full",
}: ProductSpecTableProps) {
  const baseRows: { label: string; value: string }[] = [
    { label: "Compound", value: product.shortName },
    { label: "Quantity", value: product.amount },
    { label: "Form", value: product.form },
    { label: "Purity", value: product.purity },
    { label: "Category", value: product.category },
    { label: "Storage", value: product.storage },
    { label: "Status", value: product.status },
    { label: "Price", value: formatPrice(product.price) },
  ];

  if (product.composition) {
    baseRows.splice(1, 0, {
      label: "Composition",
      value: product.composition,
    });
  }

  const rows = variant === "compact" ? baseRows.slice(0, 4) : baseRows;

  return (
    <div className="border border-white/[0.08] bg-[#111116] overflow-hidden">
      <div className="border-b border-white/[0.06] bg-white/[0.02] px-5 py-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-ultra-wide text-white/40 font-semibold">
            Technical Specifications
          </span>
          <span className="font-mono text-[10px] text-white/30">
            BATCH KP-2504XX
          </span>
        </div>
      </div>
      <dl className="divide-y divide-white/[0.04]">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-3 gap-4 px-5 py-3.5 hover:bg-white/[0.02] transition-colors"
          >
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40 col-span-1 self-center">
              {row.label}
            </dt>
            <dd className="text-sm font-medium text-white/90 col-span-2 self-center tabular">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
