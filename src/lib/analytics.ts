export type AnalyticsEvent =
  | "hero_quote_click"
  | "whatsapp_click"
  | "phone_click"
  | "service_selected"
  | "gallery_open"
  | "quote_form_started"
  | "quote_form_submitted"
  | "thank_you_view";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...params });

  if (window.gtag) {
    window.gtag("event", event, params);
  }

  if (window.fbq) {
    window.fbq("trackCustom", event, params);
  }
}

export const analyticsConfig = {
  gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID,
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
};

export function hasAnalytics(): boolean {
  return Boolean(
    analyticsConfig.gaId ||
      analyticsConfig.gtmId ||
      analyticsConfig.metaPixelId
  );
}
