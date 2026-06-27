import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Great_Vibes } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { AnalyticsScripts } from "@/components/seo/AnalyticsScripts";
import { getContent, siteConfig } from "@/content/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const enContent = getContent("en");
const baseUrl = siteConfig.seo.canonicalBase;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: enContent.meta.title,
  description: enContent.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      pt: "/pt",
    },
  },
  openGraph: {
    title: enContent.meta.title,
    description: enContent.meta.description,
    url: baseUrl,
    siteName: siteConfig.brand.name,
    locale: "en_US",
    type: "website",
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630, alt: enContent.meta.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: enContent.meta.title,
    description: enContent.meta.description,
    images: [siteConfig.seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${greatVibes.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Toaster position="top-center" richColors />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
