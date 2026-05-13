import { setRequestLocale, getTranslations } from "next-intl/server";
import { env, pageAlternates } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy.meta" });
  return {
    title: t("title"),
    description: t("description"),
    robots: { index: true, follow: true },
    alternates: pageAlternates(locale, {
      de: "/datenschutz",
      en: "/privacy",
    }),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });

  const isDe = locale === "de";

  return (
    <article className="relative pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-(--color-fg) md:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-6 text-pretty text-base text-(--color-fg-muted)">
          {t("intro")}
        </p>

        <div className="prose-content mt-12 space-y-10 text-sm leading-relaxed text-(--color-fg-muted)">
          <Section heading={isDe ? "1. Verantwortlicher" : "1. Controller"}>
            <p>
              {isDe ? "Verantwortlich für die Datenverarbeitung auf dieser Website ist:" : "The controller for data processing on this website is:"}
            </p>
            <address className="mt-3 not-italic">
              {env.legalName}
              <br />
              {env.address.street}
              <br />
              {env.address.zip} {env.address.city}, {env.address.country}
              <br />
              E-Mail: <a href={`mailto:${env.email}`} className="text-(--color-brand-electric) underline-offset-2 hover:underline">{env.email}</a>
            </address>
          </Section>

          <Section heading={isDe ? "2. Verarbeitungszwecke und Rechtsgrundlagen" : "2. Processing purposes and legal bases"}>
            <p>
              {isDe
                ? "Wir verarbeiten personenbezogene Daten nur, soweit dies erforderlich ist, um Ihnen unsere Dienste anzubieten oder gesetzliche Pflichten zu erfüllen. Rechtsgrundlagen sind insbesondere:"
                : "We process personal data only to the extent necessary to provide our services or to fulfill legal obligations. Legal bases include in particular:"}
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>{isDe ? "Art. 6 Abs. 1 lit. a DSGVO – Einwilligung (z. B. Kontaktformular)" : "Art. 6(1)(a) GDPR – consent (e.g., contact form)"}</li>
              <li>{isDe ? "Art. 6 Abs. 1 lit. b DSGVO – Vertragserfüllung / vorvertragliche Maßnahmen" : "Art. 6(1)(b) GDPR – contract performance / pre-contractual measures"}</li>
              <li>{isDe ? "Art. 6 Abs. 1 lit. c DSGVO – Erfüllung rechtlicher Verpflichtungen" : "Art. 6(1)(c) GDPR – legal obligations"}</li>
              <li>{isDe ? "Art. 6 Abs. 1 lit. f DSGVO – berechtigte Interessen (sicherer Betrieb der Website)" : "Art. 6(1)(f) GDPR – legitimate interests (secure website operation)"}</li>
            </ul>
          </Section>

          <Section heading={isDe ? "3. Server-Logfiles" : "3. Server log files"}>
            <p>
              {isDe
                ? "Beim Aufruf dieser Website verarbeitet unser Hosting-Anbieter automatisch Daten, die Ihr Browser übermittelt: IP-Adresse (anonymisiert nach 7 Tagen), Datum und Uhrzeit der Anfrage, Zeitzonendifferenz, Inhalt der Anforderung, Zugriffsstatus, übertragene Datenmenge, Referrer-URL, Browser-Typ und Sprache, Betriebssystem. Speicherdauer max. 14 Tage zur Abwehr von Angriffen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO."
                : "When you access this website, our hosting provider automatically processes data transmitted by your browser: IP address (anonymized after 7 days), date and time of request, time zone difference, content of the request, access status, data volume transferred, referrer URL, browser type and language, operating system. Retention max. 14 days for security purposes. Legal basis: Art. 6(1)(f) GDPR."}
            </p>
          </Section>

          <Section heading={isDe ? "4. Hosting (Cloudflare Workers)" : "4. Hosting (Cloudflare Workers)"}>
            <p>
              {isDe
                ? "Diese Website wird auf Cloudflare Workers ausgeführt (Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA). Die Edge-Auslieferung erfolgt über das globale Cloudflare-Netz; bei Anfragen aus Europa werden die Inhalte aus EU-Edge-Standorten ausgeliefert. Mit Cloudflare besteht ein Auftrags­verarbeitungs­vertrag gemäß Art. 28 DSGVO inklusive EU-Standardvertragsklauseln (SCC) und ergänzender Maßnahmen nach Schrems II. Cloudflare ist zudem unter dem EU-U.S. Data Privacy Framework zertifiziert. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (effizienter und sicherer Betrieb der Website)."
                : "This website runs on Cloudflare Workers (Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA). Edge delivery uses Cloudflare's global network; requests from Europe are served from EU edge locations. A data processing agreement under Art. 28 GDPR is in place, including EU Standard Contractual Clauses (SCCs) and supplementary measures per Schrems II. Cloudflare is additionally certified under the EU-U.S. Data Privacy Framework. Legal basis: Art. 6(1)(f) GDPR (efficient and secure website operation)."}
            </p>
          </Section>

          <Section heading={isDe ? "5. Kontaktformular und Erstberatungs-Anfrage" : "5. Contact form and consultation request"}>
            <p>
              {isDe
                ? `Wenn Sie unser Kontakt- oder Erst­beratungs­formular nutzen, verarbeiten wir die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Telefon, Sachverhalts­beschreibung) zur Bearbeitung Ihrer Anfrage. Der Versand der Bestätigungs-E-Mail erfolgt über Resend (Resend, Inc., USA, EU-DPF zertifiziert). Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Speicherdauer: bis zur abschließenden Bearbeitung Ihrer Anfrage, längstens 6 Monate ab letztem Kontakt.`
                : `When you use our contact or consultation form, we process the data you provide (name, email, phone, description of facts) to handle your request. Confirmation emails are sent via Resend (Resend, Inc., USA, EU-DPF certified). Legal basis: Art. 6(1)(b) GDPR (pre-contractual measures) and Art. 6(1)(a) GDPR (consent). Retention: until your request is closed, no longer than 6 months after last contact.`}
            </p>
          </Section>

          <Section heading={isDe ? "6. Reichweitenmessung (Plausible Analytics)" : "6. Analytics (Plausible)"}>
            <p>
              {isDe
                ? "Wir nutzen Plausible Analytics (Plausible Insights OÜ, Estland) für eine cookielose, anonyme Reichweiten­messung. Es werden keine Cookies gesetzt, keine personen­bezogenen Daten erhoben und keine Daten an Drittländer übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Statistik)."
                : "We use Plausible Analytics (Plausible Insights OÜ, Estonia) for cookieless, anonymous traffic measurement. No cookies are set, no personal data is collected, no data is transferred to third countries. Legal basis: Art. 6(1)(f) GDPR (legitimate interest in statistics)."}
            </p>
          </Section>

          <Section heading={isDe ? "7. Cookies" : "7. Cookies"}>
            <p>
              {isDe
                ? "Diese Website setzt nur ein technisch notwendiges Cookie zur Speicherung Ihrer Sprachwahl (NEXT_LOCALE, Lebensdauer 1 Jahr). Es werden keine Tracking-Cookies, keine Marketing-Cookies und keine Drittanbieter-Cookies gesetzt. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO i. V. m. § 25 Abs. 2 TTDSG (technisch notwendig)."
                : "This website only sets a technically necessary cookie to store your language preference (NEXT_LOCALE, lifetime 1 year). No tracking cookies, no marketing cookies, no third-party cookies. Legal basis: Art. 6(1)(f) GDPR in conjunction with § 25(2) TTDSG (technically necessary)."}
            </p>
          </Section>

          <Section heading={isDe ? "8. Empfänger personenbezogener Daten" : "8. Recipients of personal data"}>
            <p>
              {isDe
                ? "Wir geben Ihre Daten nicht an Dritte weiter, außer an unsere Auftrags­verarbeiter (Cloudflare, Resend, Plausible) und – soweit gesetzlich erforderlich – an Aufsichts­behörden oder Gerichte. Eine Datenübermittlung in Drittländer findet nur in den unter Ziffer 4 und 5 genannten Fällen und unter Standard­vertrags­klauseln (SCC) bzw. EU-DPF statt."
                : "We do not transfer your data to third parties, except to our processors (Cloudflare, Resend, Plausible) and – where legally required – to supervisory authorities or courts. Transfers to third countries occur only as described in sections 4 and 5 above and under Standard Contractual Clauses (SCCs) or EU-DPF."}
            </p>
          </Section>

          <Section heading={isDe ? "9. Ihre Rechte" : "9. Your rights"}>
            <p>{isDe ? "Sie haben das Recht auf:" : "You have the right to:"}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>{isDe ? "Auskunft (Art. 15 DSGVO)" : "Access (Art. 15 GDPR)"}</li>
              <li>{isDe ? "Berichtigung (Art. 16 DSGVO)" : "Rectification (Art. 16 GDPR)"}</li>
              <li>{isDe ? "Löschung (Art. 17 DSGVO)" : "Erasure (Art. 17 GDPR)"}</li>
              <li>{isDe ? "Einschränkung der Verarbeitung (Art. 18 DSGVO)" : "Restriction of processing (Art. 18 GDPR)"}</li>
              <li>{isDe ? "Datenübertragbarkeit (Art. 20 DSGVO)" : "Data portability (Art. 20 GDPR)"}</li>
              <li>{isDe ? "Widerspruch (Art. 21 DSGVO)" : "Object (Art. 21 GDPR)"}</li>
              <li>{isDe ? "Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)" : "Withdraw consent (Art. 7(3) GDPR)"}</li>
              <li>{isDe ? "Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)" : "Lodge a complaint with a supervisory authority (Art. 77 GDPR)"}</li>
            </ul>
            <p className="mt-3">
              {isDe
                ? "Zur Geltendmachung Ihrer Rechte genügt eine formlose Mitteilung an "
                : "To exercise your rights, an informal message to "}
              <a href={`mailto:${env.email}`} className="text-(--color-brand-electric) underline-offset-2 hover:underline">
                {env.email}
              </a>
              {isDe ? "." : " is sufficient."}
            </p>
          </Section>

          <Section heading={isDe ? "10. Aufsichtsbehörde" : "10. Supervisory authority"}>
            <p>
              {isDe
                ? "Zuständig: Berliner Beauftragte für Datenschutz und Informationsfreiheit, Friedrichstr. 219, 10969 Berlin, "
                : "Competent: Berlin Commissioner for Data Protection and Freedom of Information, Friedrichstr. 219, 10969 Berlin, "}
              <a
                href="https://www.datenschutz-berlin.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-brand-electric) underline-offset-2 hover:underline"
              >
                www.datenschutz-berlin.de
              </a>
            </p>
          </Section>

          <Section heading={isDe ? "11. Anwaltliche Verschwiegenheit" : "11. Attorney-client privilege"}>
            <p>
              {isDe
                ? "Im Rahmen eines Mandats unterliegen wir der anwaltlichen Verschwiegenheits­pflicht (§ 43a Abs. 2 BRAO, § 203 StGB). Die Daten­übermittlung an Plattformen, Behörden oder Gerichte erfolgt ausschließlich auf Ihre Weisung."
                : "Within a mandate, we are subject to attorney-client privilege (§ 43a(2) BRAO, § 203 German Criminal Code). Data transmission to platforms, authorities or courts only takes place on your instruction."}
            </p>
          </Section>

          <Section heading={isDe ? "12. Stand dieser Datenschutzerklärung" : "12. Status of this privacy policy"}>
            <p>
              {isDe
                ? "Diese Datenschutz­erklärung wurde zuletzt im Mai 2026 aktualisiert. Wir behalten uns vor, diese Erklärung anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen unserer Dienste anzupassen."
                : "This privacy policy was last updated in May 2026. We reserve the right to adapt this policy to reflect changes in the legal framework or our services."}
            </p>
          </Section>
        </div>
      </div>
    </article>
  );
}

function Section({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-(--color-fg)">
        {heading}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
