"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import type { Locale, SiteContent } from "@/content/site";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/validation";
import { getStoredAttribution } from "@/lib/utm";
import { appendAttributionToUrl } from "@/lib/utm";
import { trackEvent } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FadeIn } from "@/components/ui/FadeIn";

type QuoteFormProps = {
  locale: Locale;
  content: SiteContent;
  defaultServiceId?: string;
};

export function QuoteForm({ locale, content, defaultServiceId }: QuoteFormProps) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [started, setStarted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      privacyAccepted: undefined,
      website: "",
      serviceId: defaultServiceId,
      locale,
    },
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service) setValue("serviceId", service);
  }, [setValue]);

  const onFocusCapture = () => {
    if (!started) {
      setStarted(true);
      trackEvent("quote_form_started");
    }
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          utm: getStoredAttribution(),
        }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? content.quote.error);
      }

      trackEvent("quote_form_submitted");
      const thankYouPath =
        locale === "pt" ? "/pt/thank-you" : "/thank-you";
      router.push(appendAttributionToUrl(thankYouPath));
    } catch (error) {
      setServerError(
        error instanceof Error ? error.message : content.quote.error
      );
    } finally {
      setSubmitting(false);
    }
  };

  const privacyPath = locale === "pt" ? "/pt/privacy" : "/privacy";
  const fields = content.quote.fields;

  return (
    <section id="quote" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <h2 className="text-3xl font-semibold text-navy md:text-4xl">
            {content.quote.title}
          </h2>
          <p className="mt-4 text-lg text-navy/75">{content.quote.description}</p>
        </FadeIn>

        <FadeIn className="mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            onFocusCapture={onFocusCapture}
            className="space-y-5 rounded-3xl border border-blush-pink/40 bg-white p-6 shadow-sm md:p-8"
            noValidate
          >
            <div className="absolute -left-[9999px]" aria-hidden>
              <label htmlFor="website">Website</label>
              <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={fields.fullName} error={errors.fullName?.message} required>
                <Input id="fullName" autoComplete="name" {...register("fullName")} />
              </Field>
              <Field label={fields.phone} error={errors.phone?.message} required>
                <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
              </Field>
            </div>

            <Field label={fields.email} error={errors.email?.message} required>
              <Input id="email" type="email" autoComplete="email" {...register("email")} />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={fields.eventDate} error={errors.eventDate?.message} required>
                <Input id="eventDate" type="date" {...register("eventDate")} />
              </Field>
              <Field label={fields.eventType} error={errors.eventType?.message} required>
                <Select onValueChange={(v) => setValue("eventType", v, { shouldValidate: true })}>
                  <SelectTrigger id="eventType" aria-invalid={!!errors.eventType}>
                    <SelectValue placeholder={fields.eventType} />
                  </SelectTrigger>
                  <SelectContent>
                    {content.quote.eventTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <Field label={fields.venue} error={errors.venue?.message} required>
              <Input id="venue" {...register("venue")} />
            </Field>

            <Field label={fields.indoorOutdoor} error={errors.indoorOutdoor?.message} required>
              <Select onValueChange={(v) => setValue("indoorOutdoor", v, { shouldValidate: true })}>
                <SelectTrigger id="indoorOutdoor">
                  <SelectValue placeholder={fields.indoorOutdoor} />
                </SelectTrigger>
                <SelectContent>
                  {content.quote.indoorOutdoorOptions.map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={fields.colors} error={errors.colors?.message}>
                <Input id="colors" {...register("colors")} />
              </Field>
              <Field label={fields.guests} error={errors.guests?.message}>
                <Input id="guests" type="number" min={1} {...register("guests")} />
              </Field>
            </div>

            <Field label={fields.description} error={errors.description?.message} required>
              <Textarea id="description" rows={4} {...register("description")} />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={fields.contactMethod} error={errors.contactMethod?.message} required>
                <Select onValueChange={(v) => setValue("contactMethod", v, { shouldValidate: true })}>
                  <SelectTrigger id="contactMethod">
                    <SelectValue placeholder={fields.contactMethod} />
                  </SelectTrigger>
                  <SelectContent>
                    {content.quote.contactMethods.map((method) => (
                      <SelectItem key={method} value={method}>
                        {method}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </Field>
              <Field label={fields.budget} error={errors.budget?.message}>
                <Input id="budget" {...register("budget")} />
              </Field>
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="privacyAccepted"
                onCheckedChange={(checked) =>
                  setValue("privacyAccepted", checked === true ? true : (undefined as unknown as true), {
                    shouldValidate: true,
                  })
                }
                aria-invalid={!!errors.privacyAccepted}
              />
              <Label htmlFor="privacyAccepted" className="text-sm leading-relaxed text-navy/80">
                {fields.privacy}{" "}
                <Link href={privacyPath} className="font-semibold text-vibrant-pink underline">
                  {fields.privacyLink}
                </Link>
                .
              </Label>
            </div>
            {errors.privacyAccepted && (
              <p className="text-sm text-destructive" role="alert">
                {errors.privacyAccepted.message}
              </p>
            )}

            {serverError && (
              <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert">
                {serverError}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="h-12 w-full rounded-full bg-vibrant-pink text-base font-semibold hover:bg-vibrant-pink/90"
            >
              {submitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {content.quote.loading}
                </>
              ) : (
                content.quote.submit
              )}
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium text-navy">
        {label}
        {required && <span className="text-vibrant-pink"> *</span>}
      </Label>
      {children}
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
