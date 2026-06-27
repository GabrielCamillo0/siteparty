import type { SiteContent } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

type TrustHighlightsProps = {
  content: SiteContent;
};

export function TrustHighlights({ content }: TrustHighlightsProps) {
  return (
    <section className="border-y border-blush-pink/30 bg-white/60 py-8" aria-label="Highlights">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 sm:grid-cols-4 sm:gap-6 sm:px-6 lg:px-8">
        {content.hero.benefits.map((item, index) => (
          <FadeIn key={item} delay={index * 0.05}>
            <p className="text-center text-sm font-semibold text-navy md:text-base">
              {item}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
