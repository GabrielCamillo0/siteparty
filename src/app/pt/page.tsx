import type { Metadata } from "next";
import { getContent, siteConfig } from "@/content/site";
import { LandingPage } from "@/components/LandingPage";

const content = getContent("pt");
const baseUrl = siteConfig.seo.canonicalBase;

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
  alternates: {
    canonical: "/pt",
    languages: {
      en: "/",
      pt: "/pt",
    },
  },
  openGraph: {
    title: content.meta.title,
    description: content.meta.description,
    url: `${baseUrl}/pt`,
    locale: "pt_BR",
    type: "website",
    images: [{ url: siteConfig.seo.ogImage, alt: content.meta.title }],
  },
};

export default function PortugueseHomePage() {
  return <LandingPage locale="pt" />;
}
