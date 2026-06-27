"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";
import type { Locale, SiteContent } from "@/content/site";
import { siteConfig } from "@/content/site";
import { getWhatsAppHref } from "@/components/ui/CtaButton";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type MobileActionBarProps = {
  locale: Locale;
  content: SiteContent;
};

export function MobileActionBar({ locale, content }: MobileActionBarProps) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-blush-pink/40 bg-white/95 backdrop-blur-md md:hidden"
      )}
      role="navigation"
      aria-label="Quick actions"
    >
      <div className="grid grid-cols-3 divide-x divide-blush-pink/30">
        <a
          href={siteConfig.contact.phone.href}
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-navy"
          onClick={() => trackEvent("phone_click", { location: "mobile_bar" })}
        >
          <Phone className="h-4 w-4 text-vibrant-pink" />
          {content.mobileBar.call}
        </a>
        <a
          href={getWhatsAppHref(locale)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-navy"
          onClick={() => trackEvent("whatsapp_click", { location: "mobile_bar" })}
        >
          <MessageCircle className="h-4 w-4 text-vibrant-pink" />
          {content.mobileBar.whatsapp}
        </a>
        <a
          href="#quote"
          className="flex min-h-14 flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-vibrant-pink"
          onClick={() => trackEvent("hero_quote_click", { location: "mobile_bar" })}
        >
          <Calendar className="h-4 w-4" />
          {content.mobileBar.quote}
        </a>
      </div>
    </div>
  );
}
