"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAlternateLocale, getLocalePath } from "@/content/site";
import type { Locale } from "@/content/site";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  locale: Locale;
  className?: string;
};

export function LanguageSwitcher({ locale, className }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const alternate = getAlternateLocale(locale);
  const targetPath = getLocalePath(alternate);

  const hash =
    typeof window !== "undefined" ? window.location.hash : "";

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-navy/10 bg-white/80 p-0.5 text-xs font-semibold",
        className
      )}
      role="group"
      aria-label="Language"
    >
      <Link
        href={locale === "en" ? pathname + hash : getLocalePath("en") + hash}
        className={cn(
          "rounded-full px-3 py-1.5 transition-colors",
          locale === "en" ? "bg-navy text-white" : "text-navy/70 hover:text-navy"
        )}
        aria-current={locale === "en" ? "true" : undefined}
      >
        EN
      </Link>
      <Link
        href={targetPath + hash}
        className={cn(
          "rounded-full px-3 py-1.5 transition-colors",
          locale === "pt" ? "bg-navy text-white" : "text-navy/70 hover:text-navy"
        )}
        aria-current={locale === "pt" ? "true" : undefined}
      >
        PT
      </Link>
    </div>
  );
}
