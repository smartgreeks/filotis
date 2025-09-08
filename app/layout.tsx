import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { siteDescription, siteTitle } from "@/lib/seo";
import { business } from "@/lib/business";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: siteTitle(),
  description: siteDescription(),
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: business.brandName,
    description: siteDescription(),
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: business.brandName,
    description: siteDescription(),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}

