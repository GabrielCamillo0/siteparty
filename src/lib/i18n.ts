import type { Locale } from "@/content/site";

export type { Locale };

export const locales: Locale[] = ["en", "pt"];

export function isValidLocale(value: string): value is Locale {
  return value === "en" || value === "pt";
}
