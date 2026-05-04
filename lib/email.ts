import { Resend } from "resend";
import type { ConsultationInput } from "./consultation-schema";

const apiKey = process.env.RESEND_API_KEY;
const from = process.env.RESEND_FROM ?? "contact@lexrights.com";
const to = process.env.RESEND_TO ?? "mandate@lexrights.com";

const issueLabels: Record<string, { de: string; en: string }> = {
  accountSuspended: { de: "Account gesperrt", en: "Account suspended" },
  dataAccess: { de: "DSGVO-Auskunft", en: "GDPR data access" },
  dataDamage: { de: "DSGVO-Schadensersatz", en: "GDPR damages claim" },
  platformDispute: { de: "Plattform-Streit", en: "Platform dispute" },
  inGamePurchases: {
    de: "In-Game-Käufe / digitale Inhalte",
    en: "In-game purchases / digital content",
  },
  other: { de: "Anderes Thema", en: "Other" },
};

const timingLabels: Record<string, { de: string; en: string }> = {
  today: { de: "Heute", en: "Today" },
  thisWeek: { de: "Diese Woche", en: "This week" },
  weeksAgo: { de: "Vor Wochen", en: "Weeks ago" },
  monthsAgo: { de: "Vor Monaten", en: "Months ago" },
};

const valueLabels: Record<string, { de: string; en: string }> = {
  below100: { de: "Unter 100 €", en: "Under €100" },
  "100to500": { de: "100 € – 500 €", en: "€100–€500" },
  "500to2000": { de: "500 € – 2 000 €", en: "€500–€2,000" },
  above2000: { de: "Über 2 000 €", en: "Above €2,000" },
  unknown: { de: "Unbekannt", en: "Unknown" },
};

function renderHtml(data: ConsultationInput): string {
  const loc = data.locale;
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 16px;background:#f8f9fc;border:1px solid #e8e9ee;font-weight:600;width:200px;color:#011444">${label}</td><td style="padding:8px 16px;border:1px solid #e8e9ee">${value
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/\n/g, "<br />")}</td></tr>`
      : "";

  return `<!doctype html><html><body style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;background:#fff;padding:24px;color:#0a0a0a">
  <h2 style="color:#011444;margin:0 0 8px">LexRights — ${
    loc === "de" ? "Neue Erstberatungs-Anfrage" : "New Consultation Request"
  }</h2>
  <p style="color:#6b7280;margin:0 0 24px">Source: ${data.source} · Locale: ${loc}</p>
  <table style="border-collapse:collapse;width:100%;font-size:14px">
    ${row(loc === "de" ? "Thema" : "Topic", issueLabels[data.issue]?.[loc] ?? data.issue)}
    ${row(loc === "de" ? "Plattform" : "Platform", data.platform)}
    ${row(loc === "de" ? "Sperrgrund / Beschreibung" : "Reason / Description", data.reason ?? "")}
    ${row(loc === "de" ? "Wann" : "When", timingLabels[data.timing]?.[loc] ?? data.timing)}
    ${row(loc === "de" ? "Geschätzter Wert" : "Estimated value", valueLabels[data.value]?.[loc] ?? data.value)}
    ${row(loc === "de" ? "Name" : "Name", data.name)}
    ${row("E-Mail", data.email)}
    ${row(loc === "de" ? "Telefon" : "Phone", data.phone ?? "")}
    ${row(loc === "de" ? "Nachricht" : "Message", data.message ?? "")}
  </table>
  <p style="color:#6b7280;font-size:12px;margin-top:24px">${
    loc === "de"
      ? "Diese Nachricht wurde über das Erstberatungs-Formular auf lexrights.com gesendet."
      : "This message was sent via the consultation form on lexrights.com."
  }</p>
</body></html>`;
}

function renderText(data: ConsultationInput): string {
  const loc = data.locale;
  return [
    `LexRights — ${loc === "de" ? "Neue Erstberatungs-Anfrage" : "New Consultation Request"}`,
    `Source: ${data.source}`,
    "",
    `Topic: ${issueLabels[data.issue]?.[loc] ?? data.issue}`,
    `Platform: ${data.platform}`,
    `Reason: ${data.reason ?? ""}`,
    `When: ${timingLabels[data.timing]?.[loc] ?? data.timing}`,
    `Value: ${valueLabels[data.value]?.[loc] ?? data.value}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone ?? ""}`,
    `Message: ${data.message ?? ""}`,
  ].join("\n");
}

export async function sendConsultationEmail(data: ConsultationInput) {
  if (!apiKey) {
    console.warn(
      "[lexrights] RESEND_API_KEY not set — logging instead of sending.",
    );
    console.warn(JSON.stringify({ to, from, subject: "consultation", data }, null, 2));
    return { ok: true as const, dev: true as const };
  }

  const resend = new Resend(apiKey);
  const subject =
    data.locale === "de"
      ? `Neue Anfrage: ${data.platform} — ${data.name}`
      : `New request: ${data.platform} — ${data.name}`;

  try {
    const result = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject,
      html: renderHtml(data),
      text: renderText(data),
      headers: {
        "X-Source": data.source,
        "X-Locale": data.locale,
      },
    });
    if (result.error) {
      console.error("[lexrights] Resend error", result.error);
      return { ok: false as const, error: result.error.message };
    }
    return { ok: true as const, id: result.data?.id };
  } catch (err) {
    console.error("[lexrights] Resend exception", err);
    return {
      ok: false as const,
      error: err instanceof Error ? err.message : "unknown",
    };
  }
}
