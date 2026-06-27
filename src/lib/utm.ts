const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

const STORAGE_KEY = "siteparty_attribution";

export function captureAttributionFromSearch(search: string): UtmParams {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(search);
  const captured: UtmParams = {};

  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) captured[key] = value;
  }

  if (Object.keys(captured).length > 0) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(captured));
  }

  return captured;
}

export function getStoredAttribution(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}

export function appendAttributionToUrl(baseUrl: string): string {
  const attribution = getStoredAttribution();
  const url = new URL(baseUrl, window.location.origin);

  for (const [key, value] of Object.entries(attribution)) {
    if (value) url.searchParams.set(key, value);
  }

  return url.pathname + url.search;
}
