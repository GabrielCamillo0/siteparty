"use client";

import Image from "next/image";
import type { Locale, SiteContent } from "@/content/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { CtaButton } from "@/components/ui/CtaButton";
import { trackEvent } from "@/lib/analytics";

type ServicesProps = {
  locale: Locale;
  content: SiteContent;
};

export function Services({ locale, content }: ServicesProps) {
  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            {content.services.title}
          </h2>
          <p className="mt-4 text-lg text-navy/75">{content.services.subtitle}</p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.services.items.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.06}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blush-pink/40 bg-white shadow-sm transition-shadow hover:shadow-lg hover:shadow-blush-pink/20">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`Illustrative ${service.title.toLowerCase()} balloon decor example`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/75">
                    {service.description}
                  </p>
                  <CtaButton
                    href={`#quote?service=${service.id}`}
                    variant="secondary"
                    className="mt-5 w-full text-sm"
                    onClick={() =>
                      trackEvent("service_selected", { service: service.id, locale })
                    }
                  >
                    {content.services.cta}
                  </CtaButton>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
