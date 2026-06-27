import type { Locale } from "@/content/site";
import { getContent } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileActionBar } from "@/components/layout/MobileActionBar";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Hero } from "@/components/sections/Hero";
import { TrustHighlights } from "@/components/sections/TrustHighlights";
import { Services } from "@/components/sections/Services";
import { SectionCTA } from "@/components/sections/SectionCTA";
import { Gallery } from "@/components/sections/Gallery";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EmotionalCTA } from "@/components/sections/EmotionalCTA";
import { Testimonials } from "@/components/sections/Testimonials";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { QuickQuoteModal } from "@/components/forms/QuickQuoteModal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Suspense } from "react";
import { AttributionCapture } from "@/components/AttributionCapture";

type LandingPageProps = {
  locale: Locale;
};

export function LandingPage({ locale }: LandingPageProps) {
  const content = getContent(locale);

  return (
    <>
      <JsonLd locale={locale} content={content} />
      <Suspense fallback={null}>
        <AttributionCapture />
      </Suspense>
      <Header locale={locale} content={content} />
      <main className="pb-mobile-bar">
        <Hero locale={locale} content={content} />
        <TrustHighlights content={content} />
        <Services locale={locale} content={content} />
        <SectionCTA content={content} />
        <Gallery content={content} />
        <Benefits content={content} />
        <SectionCTA content={content} />
        <HowItWorks content={content} />
        <EmotionalCTA locale={locale} content={content} />
        <Testimonials content={content} />
        <QuoteForm locale={locale} content={content} />
        <FAQ content={content} />
        <FinalCTA locale={locale} content={content} />
      </main>
      <Footer locale={locale} content={content} />
      <MobileActionBar locale={locale} content={content} />
      <WhatsAppButton locale={locale} />
      <QuickQuoteModal locale={locale} content={content} />
    </>
  );
}
