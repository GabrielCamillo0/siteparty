"use client";

import { useEffect } from "react";
import { CtaButton, getWhatsAppHref } from "@/components/ui/CtaButton";
import { trackEvent } from "@/lib/analytics";
import { getContent } from "@/content/site";

export default function ThankYouPage() {
  const content = getContent("en");

  useEffect(() => {
    trackEvent("thank_you_view");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-lg rounded-3xl border border-blush-pink/40 bg-white p-8 shadow-sm md:p-12">
        <h1 className="font-heading text-3xl font-semibold text-navy md:text-4xl">
          {content.thankYou.title}
        </h1>
        <p className="mt-4 text-lg text-navy/75">{content.thankYou.description}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <CtaButton
            href={getWhatsAppHref("en")}
            external
            onClick={() => trackEvent("whatsapp_click", { location: "thank_you" })}
          >
            {content.thankYou.whatsapp}
          </CtaButton>
          <CtaButton href="/" variant="secondary">
            {content.thankYou.back}
          </CtaButton>
        </div>
      </div>
    </main>
  );
}
