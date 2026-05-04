import type { Metadata } from "next";
import { Fraunces, Geist, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartProvider } from "@/components/cart-provider";
import { CartDrawer } from "@/components/cart-drawer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kuda Peptides — Precision Research Compounds",
    template: "%s · Kuda Peptides",
  },
  description:
    "Kuda Peptides supplies research-focused compounds with premium labeling, batch documentation, and a strict laboratory-use-only standard. For research use only.",
  metadataBase: new URL("https://kudapeptides.com"),
  openGraph: {
    title: "Kuda Peptides — Precision Research Compounds",
    description:
      "Premium peptide research compounds. Batch documentation. Laboratory-use-only standard.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans bg-[#050505] text-white antialiased">
        <CartProvider>
          <SiteHeader />
          <CartDrawer />
          <main className="pt-16">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
