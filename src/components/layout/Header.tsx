"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import type { Locale, SiteContent } from "@/content/site";
import { siteConfig } from "@/content/site";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { CtaButton } from "@/components/ui/CtaButton";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

type HeaderProps = {
  locale: Locale;
  content: SiteContent;
};

const navItems = [
  { key: "services" as const, href: "#services" },
  { key: "gallery" as const, href: "#gallery" },
  { key: "howItWorks" as const, href: "#how-it-works" },
  { key: "faq" as const, href: "#faq" },
  { key: "contact" as const, href: "#quote" },
];

export function Header({ locale, content }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const homeHref = locale === "pt" ? "/pt" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all duration-300",
        scrolled
          ? "border-blush-pink/40 bg-cream/95 py-2 shadow-sm backdrop-blur-md"
          : "bg-cream/80 py-4 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href={homeHref}
          className="min-w-0 font-heading text-lg font-semibold leading-tight text-navy sm:text-xl"
        >
          {siteConfig.brand.name}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-vibrant-pink"
            >
              {content.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher locale={locale} className="hidden sm:flex" />
          <CtaButton
            href="#quote"
            className="hidden min-h-10 px-4 text-sm md:inline-flex"
            onClick={() => trackEvent("hero_quote_click")}
          >
            {content.nav.getQuote}
          </CtaButton>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-navy/10 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-cream">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-navy">
                  {siteConfig.brand.name}
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-4">
                <LanguageSwitcher locale={locale} className="w-fit" />
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-navy"
                  >
                    {content.nav[item.key]}
                  </a>
                ))}
                <CtaButton
                  href="#quote"
                  className="w-full"
                  onClick={() => {
                    trackEvent("hero_quote_click");
                    setOpen(false);
                  }}
                >
                  {content.nav.getQuote}
                </CtaButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
