import type { Locale, SiteContent } from "@/content/site";
import { siteConfig } from "@/content/site";

type JsonLdProps = {
  locale: Locale;
  content: SiteContent;
};

export function JsonLd({ locale, content }: JsonLdProps) {
  const baseUrl = siteConfig.seo.canonicalBase;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brand.name,
    description: content.meta.description,
    url: locale === "pt" ? `${baseUrl}/pt` : baseUrl,
    telephone: siteConfig.contact.phone.display,
    areaServed: {
      "@type": "City",
      name: "Orlando",
      containedInPlace: { "@type": "State", name: "Florida" },
    },
    ...(siteConfig.contact.email ? { email: siteConfig.contact.email } : {}),
    image: `${baseUrl}${siteConfig.seo.ogImage}`,
  };

  const services = content.services.items.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "LocalBusiness", name: siteConfig.brand.name },
    areaServed: "Orlando, Florida",
  }));

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const schemas = [localBusiness, faqPage, ...services];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
