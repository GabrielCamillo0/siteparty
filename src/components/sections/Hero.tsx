"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import type { SiteContent } from "@/content/site";
import { siteConfig } from "@/content/site";
import { CtaButton, getWhatsAppHref } from "@/components/ui/CtaButton";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Locale } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

type HeroProps = {
  locale: Locale;
  content: SiteContent;
};

export function Hero({ locale, content }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24">
      <div className="pointer-events-none absolute -right-20 -top-10 h-64 w-64 rounded-full bg-blush-pink/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <FadeIn>
          <p className="font-script text-2xl text-rose-gold md:text-3xl">
            {content.hero.eyebrow.split("•")[0]?.trim()}
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-navy/70">
            {content.hero.eyebrow.includes("•")
              ? content.hero.eyebrow.split("•")[1]?.trim()
              : content.hero.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-navy md:text-5xl lg:text-[3.25rem]">
            {content.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/80 md:text-lg">
            {content.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaButton
              href="#quote"
              onClick={() => trackEvent("hero_quote_click")}
            >
              {content.hero.ctaPrimary}
            </CtaButton>
            <CtaButton
              href={getWhatsAppHref(locale)}
              variant="secondary"
              external
              onClick={() => trackEvent("whatsapp_click", { location: "hero" })}
            >
              {content.hero.ctaSecondary}
            </CtaButton>
          </div>

          <p className="mt-4 text-sm text-navy/70">{content.hero.urgency}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.hero.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-navy/90">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
                {benefit}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-navy/10 md:aspect-[5/6]">
            <Image
              src={siteConfig.images.hero}
              alt={`Illustrative elegant balloon garland decor example in ${siteConfig.brand.location}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden h-20 w-20 rounded-full bg-blush-pink/60 blur-xl md:block" />
        </FadeIn>
      </div>
    </section>
  );
}
