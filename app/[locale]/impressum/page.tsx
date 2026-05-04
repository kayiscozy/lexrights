import { setRequestLocale, getTranslations } from "next-intl/server";
import { env } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "imprint.meta" });
  return {
    title: t("title"),
    description: t("description"),
    robots: { index: true, follow: true },
  };
}

export default async function ImpressumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "imprint" });

  return (
    <article className="relative pb-24 pt-32 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-(--color-fg) md:text-5xl">
          {t("title")}
        </h1>

        <div className="prose-content mt-12 space-y-10 text-(--color-fg-muted)">
          <Section heading={t("providerHeading")}>
            <address className="not-italic">
              {env.legalName}
              <br />
              {env.address.street}
              <br />
              {env.address.zip} {env.address.city}
              <br />
              {env.address.country}
            </address>
            {env.register && (
              <p className="mt-3 text-sm">
                {locale === "de"
                  ? "Eingetragen im Partnerschafts­register: "
                  : "Registered in the Partnership Register: "}
                {env.register}
              </p>
            )}
            {env.vatId && (
              <p className="text-sm">USt-IdNr.: {env.vatId}</p>
            )}
          </Section>

          <Section heading={t("partnersHeading")}>
            <ul className="space-y-1 text-sm">
              <li>Dr. Nikolas Hartmann, Rechtsanwalt</li>
              <li>Sophie Vogel, Rechtsanwältin</li>
            </ul>
          </Section>

          <Section heading={t("contactHeading")}>
            <p className="text-sm">
              {locale === "de" ? "Telefon: " : "Phone: "}
              <a
                href={`tel:${env.phone}`}
                className="text-(--color-brand-electric) underline-offset-2 hover:underline"
              >
                {env.phoneDisplay}
              </a>
              <br />
              E-Mail:{" "}
              <a
                href={`mailto:${env.email}`}
                className="text-(--color-brand-electric) underline-offset-2 hover:underline"
              >
                {env.email}
              </a>
            </p>
          </Section>

          <Section heading={t("professionHeading")}>
            <p className="text-sm">
              <strong className="text-(--color-fg)">
                {t("professionTitle")}:
              </strong>{" "}
              {locale === "de"
                ? "Rechtsanwalt / Rechtsanwältin"
                : "Rechtsanwalt / Rechtsanwältin (German Attorney-at-Law)"}
              <br />
              <strong className="text-(--color-fg)">
                {t("professionState")}:
              </strong>{" "}
              {t("professionStateValue")}
            </p>
            <p className="mt-3 text-sm">
              <strong className="text-(--color-fg)">
                {t("barAuthority")}:
              </strong>
              <br />
              {env.bar.name}
              <br />
              Littenstraße 9, 10179 Berlin
              <br />
              <a
                href={env.bar.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-brand-electric) underline-offset-2 hover:underline"
              >
                {env.bar.url.replace(/^https?:\/\//, "")}
              </a>
            </p>
          </Section>

          <Section heading={t("regulationsHeading")}>
            <ul className="space-y-1 text-sm">
              <li>Bundesrechtsanwaltsordnung (BRAO)</li>
              <li>Berufsordnung für Rechtsanwälte (BORA)</li>
              <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
              <li>Fachanwaltsordnung (FAO)</li>
              <li>
                {locale === "de"
                  ? "Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)"
                  : "Code of Conduct for European Lawyers (CCBE)"}
              </li>
            </ul>
            <p className="mt-3 text-sm">{t("regulationsBody")}</p>
          </Section>

          <Section heading={t("insuranceHeading")}>
            <p className="text-sm">
              {env.insurance.name}
              <br />
              {env.insurance.address}
            </p>
            <p className="mt-3 text-sm">
              <strong className="text-(--color-fg)">
                {t("insuranceSum")}:
              </strong>{" "}
              {env.insurance.sum}
              <br />
              <strong className="text-(--color-fg)">
                {t("insuranceScope")}:
              </strong>{" "}
              {t("insuranceScopeValue")}
            </p>
          </Section>

          <Section heading={t("vsbgHeading")}>
            <p className="text-sm">{t("vsbgBody")}</p>
          </Section>

          <Section heading={t("odrHeading")}>
            <p className="text-sm">
              {t("odrBody")}{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--color-brand-electric) underline-offset-2 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </Section>

          <Section heading={t("liabilityHeading")}>
            <p className="text-sm leading-relaxed">{t("liabilityBody")}</p>
          </Section>

          <Section heading={t("linksHeading")}>
            <p className="text-sm leading-relaxed">{t("linksBody")}</p>
          </Section>

          <Section heading={t("copyrightHeading")}>
            <p className="text-sm leading-relaxed">{t("copyrightBody")}</p>
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
