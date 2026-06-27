"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, X } from "lucide-react";
import type { Locale, SiteContent } from "@/content/site";
import { quickQuoteSchema, type QuickQuoteValues } from "@/lib/validation";
import { getStoredAttribution, appendAttributionToUrl } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type QuickQuoteModalProps = {
  locale: Locale;
  content: SiteContent;
};

export function QuickQuoteModal({ locale, content }: QuickQuoteModalProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuickQuoteValues>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: { website: "" },
  });

  useEffect(() => {
    if (sessionStorage.getItem("siteparty_engagement_prompt_shown")) return;

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.4) {
        sessionStorage.setItem("siteparty_engagement_prompt_shown", "1");
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    const timer = setTimeout(() => {
      window.addEventListener("scroll", onScroll, { passive: true });
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onSubmit = async (data: QuickQuoteValues) => {
    setSubmitting(true);
    setError(null);
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          email: "quick-quote@placeholder.local",
          eventType: "Quick date check",
          venue: "—",
          indoorOutdoor: "—",
          description: "Quick date availability check from modal.",
          contactMethod: "Phone call",
          privacyAccepted: true,
          locale,
          utm: getStoredAttribution(),
        }),
      });
      if (!response.ok) throw new Error(content.quote.error);
      trackEvent("quote_form_submitted", { source: "quick_modal" });
      router.push(
        appendAttributionToUrl(locale === "pt" ? "/pt/thank-you" : "/thank-you")
      );
    } catch {
      setError(content.quote.error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="bg-cream sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-navy">
            {content.engagementPrompt.text}
          </DialogTitle>
          <DialogDescription>{content.quote.quickDescription}</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input type="text" className="hidden" tabIndex={-1} {...register("website")} />
          <div>
            <Label htmlFor="quick-fullName">{content.quote.fields.fullName}</Label>
            <Input id="quick-fullName" className="mt-1" {...register("fullName")} />
            {errors.fullName && (
              <p className="mt-1 text-sm text-destructive">{errors.fullName.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="quick-phone">{content.quote.fields.phone}</Label>
            <Input id="quick-phone" type="tel" className="mt-1" {...register("phone")} />
            {errors.phone && (
              <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="quick-eventDate">{content.quote.fields.eventDate}</Label>
            <Input id="quick-eventDate" type="date" className="mt-1" {...register("eventDate")} />
            {errors.eventDate && (
              <p className="mt-1 text-sm text-destructive">{errors.eventDate.message}</p>
            )}
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <div className="flex gap-2">
            <Button
              type="submit"
              disabled={submitting}
              className="flex-1 rounded-full bg-vibrant-pink hover:bg-vibrant-pink/90"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : content.engagementPrompt.button}
            </Button>
            <Button type="button" variant="outline" onClick={() => setOpen(false)} aria-label="Close">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
