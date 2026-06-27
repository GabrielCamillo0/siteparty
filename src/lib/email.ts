import type { QuoteFormValues } from "@/lib/validation";

export async function sendQuoteEmail(data: QuoteFormValues): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_EMAIL_TO;
  const from =
    process.env.QUOTE_EMAIL_FROM ?? "onboarding@resend.dev";

  if (!apiKey || !to) {
    console.warn(
      "[quote] Email not configured (RESEND_API_KEY or QUOTE_EMAIL_TO missing). Lead logged only."
    );
    console.info("[quote] Lead:", JSON.stringify(data, null, 2));
    return false;
  }

  const html = `
    <h2>New Quote Request</h2>
    <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Event Date:</strong> ${escapeHtml(data.eventDate)}</p>
    <p><strong>Event Type:</strong> ${escapeHtml(data.eventType)}</p>
    <p><strong>Venue:</strong> ${escapeHtml(data.venue)}</p>
    <p><strong>Indoor/Outdoor:</strong> ${escapeHtml(data.indoorOutdoor)}</p>
    <p><strong>Colors/Theme:</strong> ${escapeHtml(data.colors ?? "—")}</p>
    <p><strong>Guests:</strong> ${escapeHtml(data.guests ?? "—")}</p>
    <p><strong>Contact Method:</strong> ${escapeHtml(data.contactMethod)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(data.budget ?? "—")}</p>
    <p><strong>Description:</strong></p>
    <p>${escapeHtml(data.description)}</p>
    ${data.serviceId ? `<p><strong>Service:</strong> ${escapeHtml(data.serviceId)}</p>` : ""}
    ${data.utm ? `<pre>${escapeHtml(JSON.stringify(data.utm, null, 2))}</pre>` : ""}
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New Quote Request — ${data.fullName} — ${data.eventDate}`,
      html,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    console.error("[quote] Resend error:", text);
    return false;
  }

  return true;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
