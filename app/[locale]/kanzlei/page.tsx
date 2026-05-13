import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Mail, Globe, GraduationCap } from "lucide-react";
import { team, attorneyJsonLd } from "@/lib/schema";
import { PageHero } from "@/components/page-hero";
import { pageAlternates } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "firm.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: pageAlternates(locale, { de: "/kanzlei", en: "/firm" }),
  };
}

export default async function FirmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const tHero = await getTranslations({ locale, namespace: "firm.hero" });
  const tValues = await getTranslations({ locale, namespace: "firm.values" });
  const tTeam = await getTranslations({ locale, namespace: "firm.team" });
  const values = tValues.raw("items") as Array<{
    title: string;
    desc: string;
  }>;

  return (
    <>
      {team.map((m) => (
        <script
          key={m.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(attorneyJsonLd(m, locale)),
          }}
        />
      ))}

      <PageHero
        imageKey="firm"
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        subtitle={tHero("sub")}
      />

      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl">
            {tValues("title")}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="card-hover rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6"
              >
                <h3 className="text-lg font-semibold text-(--color-fg)">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--color-fg-muted)">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl">
              {tTeam("title")}
            </h2>
            <p className="mt-4 text-pretty text-base text-(--color-fg-muted) md:text-lg">
              {tTeam("subtitle")}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.id}
                id={m.id}
                className="card-hover group relative overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 shadow-[var(--shadow-xs)] md:p-8"
              >
                <div className="relative mb-6 size-24 overflow-hidden rounded-2xl ring-2 ring-(--color-brand-electric)/30 ring-offset-2 ring-offset-(--color-bg-surface)">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold tracking-tight text-(--color-fg)">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-(--color-brand-electric)">
                  {m.role[locale]}
                </p>
                <p className="mt-3 text-sm text-(--color-fg-muted)">
                  {m.title[locale]} · {m.bar} ·{" "}
                  {locale === "de" ? "zugelassen seit" : "admitted"}{" "}
                  {m.admittedSince}
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
                      <GraduationCap className="size-3.5" aria-hidden />
                      {locale === "de" ? "Vita" : "Education"}
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-(--color-fg-muted)">
                      {m.education.map((e, i) => (
                        <li key={i}>{e[locale]}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
                      {locale === "de" ? "Schwerpunkte" : "Focus areas"}
                    </h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {m.focus[locale].map((f) => (
                        <span
                          key={f}
                          className="rounded-md border border-(--color-border) bg-(--color-bg-elevated)/50 px-2 py-1 text-xs text-(--color-fg-muted)"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
                      <Globe className="size-3.5" aria-hidden />
                      {locale === "de" ? "Sprachen" : "Languages"}
                    </h4>
                    <p className="mt-2 text-sm text-(--color-fg-muted)">
                      {m.languages.join(" · ")}
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${m.email}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--color-brand-electric) transition-colors hover:text-(--color-brand-electric)"
                >
                  <Mail className="size-4" aria-hidden />
                  {m.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
