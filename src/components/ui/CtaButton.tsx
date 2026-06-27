import { cn } from "@/lib/utils";
import type { Locale } from "@/content/site";
import { siteConfig } from "@/content/site";
import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "navy";
  className?: string;
  onClick?: () => void;
  external?: boolean;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  external,
}: CtaButtonProps) {
  const styles = {
    primary:
      "bg-vibrant-pink text-white hover:bg-vibrant-pink/90 shadow-md shadow-vibrant-pink/20",
    secondary:
      "bg-white text-navy border-2 border-navy/10 hover:border-vibrant-pink/40 hover:text-vibrant-pink",
    outline:
      "border-2 border-white/80 text-white hover:bg-white/10",
    navy: "bg-navy text-white hover:bg-navy/90",
  };

  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-vibrant-pink focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    styles[variant],
    className
  );

  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me")) {
    return (
      <a href={href} className={classes} onClick={onClick} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}

export function getWhatsAppHref(locale: Locale, eventDate?: string): string {
  const base = siteConfig.contact.whatsapp.href;
  const message =
    locale === "pt"
      ? `Olá! Gostaria de solicitar um orçamento para decoração com balões. A data do meu evento é: ${eventDate ?? ""}`
      : `${siteConfig.contact.whatsapp.prefilledMessage} ${eventDate ?? ""}`;
  return `${base}?text=${encodeURIComponent(message.trim())}`;
}
