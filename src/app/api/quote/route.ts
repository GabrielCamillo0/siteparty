import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation";
import { sendQuoteEmail } from "@/lib/email";

const recentSubmissions = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = quoteFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";
    const rateKey = `${ip}:${data.email}`;
    const lastSubmit = recentSubmissions.get(rateKey);
    const now = Date.now();

    if (lastSubmit && now - lastSubmit < RATE_LIMIT_MS) {
      return NextResponse.json(
        { error: "Please wait before submitting again." },
        { status: 429 }
      );
    }

    recentSubmissions.set(rateKey, now);

    await sendQuoteEmail(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[api/quote]", error);
    return NextResponse.json(
      { error: "Unable to process your request. Please try WhatsApp." },
      { status: 500 }
    );
  }
}
