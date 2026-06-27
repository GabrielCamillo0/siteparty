import { Star } from "lucide-react";
import type { SiteContent } from "@/content/site";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";

type TestimonialsProps = {
  content: SiteContent;
};

export function Testimonials({ content }: TestimonialsProps) {
  if (siteConfig.reviews.enabled && siteConfig.reviews.items.length > 0) {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteConfig.reviews.items.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-3xl border border-blush-pink/40 bg-white p-6"
              >
                <p className="text-sm leading-relaxed text-navy/80">{review.text}</p>
                <footer className="mt-4 text-sm font-semibold text-navy">
                  — {review.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24" aria-label="Reviews">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <div className="rounded-3xl border border-dashed border-blush-pink/60 bg-white/80 px-6 py-12">
            <div className="mx-auto mb-4 flex w-fit gap-1 text-gold" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 opacity-30" />
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-navy md:text-3xl">
              {content.testimonials.title}
            </h2>
            <p className="mt-3 text-navy/75">{content.testimonials.description}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
