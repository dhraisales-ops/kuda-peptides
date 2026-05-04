// Source of truth for the Kuda Peptides catalog.
// All products are positioned strictly for laboratory research use only.

export type ProductStatus = "Available" | "Request Only";

export type ProductCategory =
  | "Core Peptides"
  | "Copper Peptide Research"
  | "Research Compounds"
  | "Peptide Research"
  | "Combination Research"
  | "Premium Blends"
  | "Laboratory Supplies"
  | "Request Only";

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  amount: string;
  price: number | null; // null = contact for pricing
  category: ProductCategory;
  form: string;
  purity: string;
  storage: string;
  status: ProductStatus;
  composition?: string;
  description: string;
  image: string;
  accentTone: "violet" | "deep" | "graphite" | "ink";
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  "Core Peptides",
  "Copper Peptide Research",
  "Research Compounds",
  "Peptide Research",
  "Combination Research",
  "Premium Blends",
  "Laboratory Supplies",
  "Request Only",
];

export const PRODUCTS: Product[] = [
  {
    slug: "bpc-157-5mg",
    name: "BPC-157 5mg",
    shortName: "BPC-157",
    amount: "5 mg",
    price: 35.0,
    category: "Core Peptides",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "BPC-157 supplied as a lyophilized research compound for laboratory study. Documentation and batch traceability available on request.",
    image: "/kuda/products/bpc-157-5mg.png",
    accentTone: "violet",
  },
  {
    slug: "bpc-157-10mg",
    name: "BPC-157 10mg",
    shortName: "BPC-157",
    amount: "10 mg",
    price: 45.0,
    category: "Core Peptides",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "BPC-157 supplied as a lyophilized research compound for laboratory study. Larger 10 mg presentation for extended research workflows.",
    image: "/kuda/products/bpc-157-10mg.png",
    accentTone: "violet",
  },
  {
    slug: "tb-500-5mg",
    name: "TB-500 5mg",
    shortName: "TB-500",
    amount: "5 mg",
    price: 55.0,
    category: "Core Peptides",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "TB-500 supplied as a lyophilized research compound. For laboratory characterization and reference workflows.",
    image: "/kuda/products/tb-500-5mg.png",
    accentTone: "deep",
  },
  {
    slug: "tb-500-10mg",
    name: "TB-500 10mg",
    shortName: "TB-500",
    amount: "10 mg",
    price: 80.0,
    category: "Core Peptides",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "TB-500 supplied as a lyophilized research compound. Higher quantity presentation for extended laboratory study.",
    image: "/kuda/products/tb-500-10mg.png",
    accentTone: "deep",
  },
  {
    slug: "ghk-cu-50mg",
    name: "GHK-Cu 50mg",
    shortName: "GHK-Cu",
    amount: "50 mg",
    price: 30.0,
    category: "Copper Peptide Research",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "GHK-Cu copper-peptide complex supplied as a lyophilized research compound for laboratory study and reference characterization.",
    image: "/kuda/products/ghk-cu-50mg.png",
    accentTone: "graphite",
  },
  {
    slug: "nad-500mg",
    name: "NAD+ 500mg",
    shortName: "NAD+",
    amount: "500 mg",
    price: 49.99,
    category: "Research Compounds",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "NAD+ supplied as a lyophilized research compound for laboratory characterization. Standard 500 mg presentation.",
    image: "/kuda/products/nad-500mg.png",
    accentTone: "violet",
  },
  {
    slug: "nad-1000mg",
    name: "NAD+ 1000mg",
    shortName: "NAD+",
    amount: "1000 mg",
    price: 69.99,
    category: "Research Compounds",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "NAD+ supplied as a lyophilized research compound. Extended 1000 mg presentation for larger laboratory research workflows.",
    image: "/kuda/products/nad-1000mg.png",
    accentTone: "violet",
  },
  {
    slug: "ipamorelin-10mg",
    name: "Ipamorelin 10mg",
    shortName: "Ipamorelin",
    amount: "10 mg",
    price: 55.0,
    category: "Peptide Research",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "Ipamorelin supplied as a lyophilized research compound for laboratory characterization workflows.",
    image: "/kuda/products/ipamorelin-10mg.png",
    accentTone: "ink",
  },
  {
    slug: "cjc-ipamorelin-10mg",
    name: "CJC + Ipamorelin 10mg",
    shortName: "CJC + Ipamorelin",
    amount: "10 mg",
    price: 65.0,
    category: "Combination Research",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "Combination research compound supplied as a lyophilized blend for laboratory characterization. Documentation available on request.",
    image: "/kuda/products/cjc-ipamorelin-10mg.png",
    accentTone: "deep",
  },
  {
    slug: "glow-70mg",
    name: "GLOW Blend 70mg",
    shortName: "GLOW",
    amount: "70 mg",
    price: 95.0,
    category: "Premium Blends",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    composition: "BPC-157 + GHK-Cu + TB-500",
    description:
      "GLOW is a premium research blend supplied as a lyophilized formulation. Composition and batch documentation available on request.",
    image: "/kuda/products/glow-70mg.png",
    accentTone: "violet",
  },
  {
    slug: "retatrutide-10mg",
    name: "Retatrutide 10mg",
    shortName: "Retatrutide",
    amount: "10 mg",
    price: 70.0,
    category: "Request Only",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Request Only",
    description:
      "Retatrutide supplied as a lyophilized research compound. Availability is limited and subject to additional review.",
    image: "/kuda/products/retatrutide-10mg.png",
    accentTone: "ink",
  },
  {
    slug: "retatrutide-20mg",
    name: "Retatrutide 20mg",
    shortName: "Retatrutide",
    amount: "20 mg",
    price: 110.0,
    category: "Request Only",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Request Only",
    description:
      "Retatrutide supplied as a lyophilized research compound. Higher quantity presentation. Availability is limited and subject to additional review.",
    image: "/kuda/products/retatrutide-20mg.png",
    accentTone: "ink",
  },
  {
    slug: "bac-water-10ml",
    name: "Bac Water 10ml",
    shortName: "Bac Water",
    amount: "10 ml",
    price: 10.0,
    category: "Laboratory Supplies",
    form: "Sterile solution",
    purity: "N/A",
    storage: "Store as directed on product documentation",
    status: "Request Only",
    description:
      "Bacteriostatic water supplied as a laboratory handling supply. Availability is subject to review and may vary by region.",
    image: "/kuda/products/bac-water-10ml.png",
    accentTone: "graphite",
  },
  {
    slug: "adamax-10mg",
    name: "Adamax 10mg",
    shortName: "Adamax",
    amount: "10 mg",
    price: 75.0,
    category: "Research Compounds",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "Adamax supplied as a lyophilized research compound for laboratory characterization. Batch documentation available on request.",
    image: "/kuda/products/adamax-10mg.png",
    accentTone: "violet",
  },
  {
    slug: "l-carnitine-1200mg",
    name: "L-Carnitine 1200mg",
    shortName: "L-Carnitine",
    amount: "1200 mg",
    price: 40.0,
    category: "Research Compounds",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "L-Carnitine supplied as a lyophilized research compound. Standard presentation for laboratory research workflows.",
    image: "/kuda/products/l-carnitine-1200mg.png",
    accentTone: "graphite",
  },
  {
    slug: "tesamorelin-5mg",
    name: "Tesamorelin 5mg",
    shortName: "Tesamorelin",
    amount: "5 mg",
    price: null,
    category: "Peptide Research",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "Tesamorelin supplied as a lyophilized research compound for laboratory characterization workflows.",
    image: "/kuda/products/tesamorelin-5mg.png",
    accentTone: "deep",
  },
  {
    slug: "tesamorelin-10mg",
    name: "Tesamorelin 10mg",
    shortName: "Tesamorelin",
    amount: "10 mg",
    price: null,
    category: "Peptide Research",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Available",
    description:
      "Tesamorelin supplied as a lyophilized research compound. Extended 10 mg presentation for larger laboratory research workflows.",
    image: "/kuda/products/tesamorelin-10mg.png",
    accentTone: "deep",
  },
  {
    slug: "tirzepatide-5mg",
    name: "Tirzepatide 5mg",
    shortName: "Tirzepatide",
    amount: "5 mg",
    price: null,
    category: "Request Only",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Request Only",
    description:
      "Tirzepatide supplied as a lyophilized research compound. Availability is subject to additional review.",
    image: "/kuda/products/tirzepatide-5mg.png",
    accentTone: "ink",
  },
  {
    slug: "tirzepatide-10mg",
    name: "Tirzepatide 10mg",
    shortName: "Tirzepatide",
    amount: "10 mg",
    price: null,
    category: "Request Only",
    form: "Lyophilized powder",
    purity: "≥98%",
    storage: "Store at -20°C",
    status: "Request Only",
    description:
      "Tirzepatide supplied as a lyophilized research compound. Higher quantity presentation. Availability is subject to additional review.",
    image: "/kuda/products/tirzepatide-10mg.png",
    accentTone: "ink",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count: number = 3): Product[] {
  const current = getProduct(slug);
  if (!current) return [];
  const sameCategory = PRODUCTS.filter(
    (p) => p.slug !== slug && p.category === current.category,
  );
  const others = PRODUCTS.filter(
    (p) => p.slug !== slug && p.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function formatPrice(price: number | null): string {
  if (price === null) return "Contact for Pricing";
  return `$${price.toFixed(2)}`;
}
