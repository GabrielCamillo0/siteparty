"use client";

import { MessageCircle } from "lucide-react";
import type { Locale } from "@/content/site";
import { getWhatsAppHref } from "@/components/ui/CtaButton";
import { trackEvent } from "@/lib/analytics";

type WhatsAppButtonProps = {
  locale: Locale;
};

export function WhatsAppButton({ locale }: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppHref(locale)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-vibrant-pink focus-visible:ring-offset-2 md:bottom-6"
      aria-label="Message us on WhatsApp"
      onClick={() => trackEvent("whatsapp_click", { location: "floating" })}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
