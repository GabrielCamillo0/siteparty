"use client";

import type { Locale, SiteContent } from "@/content/site";
import { CtaButton, getWhatsAppHref } from "@/components/ui/CtaButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { trackEvent } from "@/lib/analytics";

type FinalCTAProps = {
  locale: Locale;
  content: SiteContent;
};

export function FinalCTA({ locale, content }: FinalCTAProps) {
  return (
    <section className="py-16 md:py-24">
      <FadeIn>
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-navy to-navy/90 px-6 py-14 text-center shadow-xl sm:px-12">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            {content.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            {content.finalCta.description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaButton
              href="#quote"
              onClick={() => trackEvent("hero_quote_click", { location: "final_cta" })}
            >
              {content.finalCta.ctaPrimary}
            </CtaButton>
            <CtaButton
              href={getWhatsAppHref(locale)}
              variant="outline"
              external
              onClick={() => trackEvent("whatsapp_click", { location: "final_cta" })}
            >
              {content.finalCta.ctaSecondary}
            </CtaButton>
          </div>
          <p className="mt-6 text-sm text-white/70">{content.finalCta.serviceArea}</p>
        </div>
      </FadeIn>
    </section>
  );
}
