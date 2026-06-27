import { z } from "zod";

export const quoteFormSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  eventDate: z.string().min(1, "Please select your event date"),
  eventType: z.string().min(1, "Please select an event type"),
  venue: z.string().min(2, "Please enter your venue or city"),
  indoorOutdoor: z.string().min(1, "Please select indoor or outdoor"),
  colors: z.string().optional(),
  guests: z.string().optional(),
  description: z.string().min(10, "Please share a brief description or inspiration"),
  contactMethod: z.string().min(1, "Please select a contact method"),
  budget: z.string().optional(),
  privacyAccepted: z.literal(true, {
    message: "You must accept the privacy policy",
  }),
  website: z.string().max(0).optional(),
  locale: z.enum(["en", "pt"]).optional(),
  serviceId: z.string().optional(),
  utm: z.record(z.string(), z.string()).optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const quickQuoteSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  eventDate: z.string().min(1, "Please select your event date"),
  website: z.string().max(0).optional(),
});

export type QuickQuoteValues = z.infer<typeof quickQuoteSchema>;
