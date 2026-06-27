"use client";

import Image from "next/image";
import type { Locale, SiteContent } from "@/content/site";
import { siteConfig } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { trackEvent } from "@/lib/analytics";

type EmotionalCTAProps = {
  locale: Locale;
  content: SiteContent;
};

export function EmotionalCTA({ locale, content }: EmotionalCTAProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl md:min-h-[480px]">
            <Image
              src={siteConfig.images.emotional}
              alt="Illustrative celebration moment with elegant balloon decor backdrop"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/40" />
            <div className="relative flex h-full min-h-[420px] flex-col justify-center p-8 md:min-h-[480px] md:p-14 lg:max-w-2xl">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                {content.emotional.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/90">
                {content.emotional.description}
              </p>
              <CtaButton
                href="#quote"
                variant="primary"
                className="mt-8 w-fit"
                onClick={() =>
                  trackEvent("hero_quote_click", { location: "emotional", locale })
                }
              >
                {content.emotional.cta}
              </CtaButton>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
