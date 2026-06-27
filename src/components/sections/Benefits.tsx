import {
  Camera,
  Gem,
  Palette,
  Sparkles,
  Truck,
} from "lucide-react";
import type { SiteContent } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

const icons = [Palette, Truck, Gem, Camera, Sparkles];

type BenefitsProps = {
  content: SiteContent;
};

export function Benefits({ content }: BenefitsProps) {
  return (
    <section className="bg-gradient-to-b from-white/70 to-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            {content.benefits.title}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.benefits.items.map((item, index) => {
            const Icon = icons[index] ?? Sparkles;
            return (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-3xl border border-blush-pink/30 bg-white p-6 shadow-sm">
                  <div className="mb-4 inline-flex rounded-2xl bg-cream p-3 text-gold">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/75">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
