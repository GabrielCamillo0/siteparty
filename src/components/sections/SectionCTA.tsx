"use client";

import type { SiteContent } from "@/content/site";
import { CtaButton } from "@/components/ui/CtaButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { trackEvent } from "@/lib/analytics";

type SectionCTAProps = {
  content: SiteContent;
};

export function SectionCTA({ content }: SectionCTAProps) {
  return (
    <section className="py-10">
      <FadeIn>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 rounded-3xl border border-blush-pink/40 bg-white px-6 py-10 text-center shadow-sm sm:px-10">
          <p className="text-lg font-medium text-navy">{content.sectionCta.text}</p>
          <CtaButton
            href="#quote"
            onClick={() => trackEvent("hero_quote_click", { location: "section_cta" })}
          >
            {content.sectionCta.button}
          </CtaButton>
        </div>
      </FadeIn>
    </section>
  );
}
