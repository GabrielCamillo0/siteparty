"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Share2 } from "lucide-react";
import type { SiteContent } from "@/content/site";
import { siteConfig } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { trackEvent } from "@/lib/analytics";

type GalleryProps = {
  content: SiteContent;
};

export function Gallery({ content }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = siteConfig.images.gallery.map((item, i) => {
    const category =
      content.gallery.categories[
        item.category as keyof typeof content.gallery.categories
      ];
    return {
      src: item.src,
      alt: `${content.gallery.altPrefix}: ${category}`,
      index: i,
    };
  });

  return (
    <section id="gallery" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            {content.gallery.title}
          </h2>
          <p className="mt-4 text-lg text-navy/75">{content.gallery.subtitle}</p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {slides.map((slide, i) => (
            <FadeIn key={slide.src} delay={i * 0.04}>
              <button
                type="button"
                className="group relative aspect-square w-full overflow-hidden rounded-2xl focus-visible:ring-2 focus-visible:ring-vibrant-pink focus-visible:ring-offset-2"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                  trackEvent("gallery_open", { index: i });
                }}
                aria-label={`View ${slide.alt}`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/10" />
              </button>
            </FadeIn>
          ))}
        </div>

        {siteConfig.social.instagram ? (
          <div className="mt-10 text-center">
            <a
              href={`https://instagram.com/${siteConfig.social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-vibrant-pink hover:underline"
            >
              <Share2 className="h-4 w-4" />
              {content.gallery.instagramCta}
            </a>
          </div>
        ) : (
          <p className="mt-10 text-center text-sm text-navy/60">
            {content.gallery.instagramPlaceholder}
          </p>
        )}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides.map((s) => ({ src: s.src, alt: s.alt }))}
      />
    </section>
  );
}
