"use client";

import Link from "next/link";
import { Mail, Phone, Share2 } from "lucide-react";
import type { Locale, SiteContent } from "@/content/site";
import { siteConfig } from "@/content/site";
import { trackEvent } from "@/lib/analytics";

type FooterProps = {
  locale: Locale;
  content: SiteContent;
};

export function Footer({ locale, content }: FooterProps) {
  const homeHref = locale === "pt" ? "/pt" : "/";
  const privacyHref = locale === "pt" ? "/pt/privacy" : "/privacy";
  const termsHref = locale === "pt" ? "/pt/terms" : "/terms";
  const year = new Date().getFullYear();

  const navLinks = [
    { label: content.nav.services, href: "#services" },
    { label: content.nav.gallery, href: "#gallery" },
    { label: content.nav.howItWorks, href: "#how-it-works" },
    { label: content.nav.faq, href: "#faq" },
    { label: content.nav.contact, href: "#quote" },
  ];

  return (
    <footer className="border-t border-blush-pink/40 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-heading text-xl font-semibold">{siteConfig.brand.name}</p>
          <p className="mt-3 text-sm text-white/75">{content.footer.serviceArea}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            {content.footer.navigation}
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-white/80 hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link href={privacyHref} className="text-sm text-white/80 hover:text-white">
                {content.footer.privacy}
              </Link>
            </li>
            <li>
              <Link href={termsHref} className="text-sm text-white/80 hover:text-white">
                {content.footer.terms}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold">
            {content.footer.contact}
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={siteConfig.contact.whatsapp.href}
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "footer" })}
              >
                WhatsApp: {siteConfig.contact.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.phone.href}
                className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                onClick={() => trackEvent("phone_click", { location: "footer" })}
              >
                <Phone className="h-4 w-4" />
                {siteConfig.contact.phone.display}
              </a>
            </li>
            {siteConfig.contact.email && (
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.contact.email}
                </a>
              </li>
            )}
          </ul>

          {(siteConfig.social.instagram || siteConfig.social.facebook) && (
            <div className="mt-6">
              <p className="text-sm font-semibold text-gold">{content.footer.followUs}</p>
              <div className="mt-2 flex gap-3">
                {siteConfig.social.instagram && (
                  <a
                    href={`https://instagram.com/${siteConfig.social.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-white/80 hover:text-white"
                  >
                    <Share2 className="h-5 w-5" />
                  </a>
                )}
                {siteConfig.social.facebook && (
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-white/80 hover:text-white"
                  >
                    <Share2 className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {year} {siteConfig.brand.name}. {content.footer.copyright}
        {" · "}
        <Link href={homeHref} className="hover:text-white">
          {locale === "pt" ? "Início" : "Home"}
        </Link>
      </div>
    </footer>
  );
}
