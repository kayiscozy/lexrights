import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { platforms, platformCategories, type PlatformCategory } from "@/lib/platforms";
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
  return {
    title: locale === "de" ? "Leistungen -Plattformen & Themen" : "Services -Platforms & Topics",
    description:
      locale === "de"
        ? "Alle Plattformen und Rechtsthemen, auf die LexRights spezialisiert ist. Tiefen-Content statt Allgemeinplätze."
        : "All platforms and legal topics LexRights specializes in. Deep content, not generic advice.",
    alternates: pageAlternates(locale, { de: "/leistungen", en: "/services" }),
  };
}

const order: PlatformCategory[] = [
  "gaming",
  "social",
  "creator",
  "marketplace",
  "payment",
  "crypto",
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const grouped = order.map((cat) => ({
    category: cat,
    items: platforms.filter((p) => p.category === cat),
  }));

  return (
    <>
      <PageHero
        imageKey="services"
        eyebrow={locale === "de" ? "Leistungen" : "Services"}
        title={
          locale === "de"
            ? "Spezialisiert auf jede Plattform."
            : "Specialized for every platform."
        }
        subtitle={
          locale === "de"
            ? "Eigene Tiefen-Pages pro Plattform statt generischer Übersicht. Wir kennen die AGB, die Anti-Cheat-Systeme, die Beschwerde­wege und die einschlägige Rechts­prechung."
            : "Dedicated deep-content pages per platform -not a generic summary. We know the ToS, the anti-cheat systems, the complaint paths and the relevant case law."
        }
      />
      <section className="relative pb-24 pt-16 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-7xl space-y-16 px-4 md:px-6 lg:px-8">
          {grouped.map(({ category, items }) =>
            items.length === 0 ? null : (
              <div key={category}>
                <h2 className="text-lg font-semibold tracking-tight text-(--color-fg)">
                  {platformCategories[category][locale]}
                </h2>
                <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <Link
                      key={p.name}
                      href={{
                        pathname: "/leistungen/[slug]",
                        params: { slug: p.slug[locale] },
                      }}
                      className="card-hover card-glow group relative flex flex-col rounded-xl border border-(--color-border) bg-(--color-bg-surface) p-5"
                    >
                      <div className="flex items-start justify-between">
                        <h3 className="text-base font-semibold text-(--color-fg)">
                          {p.name}
                        </h3>
                        <ArrowUpRight
                          className="size-4 -translate-y-0.5 translate-x-0.5 text-(--color-fg-subtle) transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-(--color-brand-electric)"
                          aria-hidden
                        />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-(--color-fg-muted)">
                        {p.shortDesc[locale]}
                      </p>
                      <p className="mt-4 text-xs text-(--color-fg-subtle)">
                        {p.jurisdiction}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        <div className="mt-24 rounded-2xl border border-(--color-border-brand) bg-(--color-bg-surface) p-8 text-center md:p-12">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-(--color-fg) md:text-3xl">
            {locale === "de"
              ? "Ihre Plattform nicht dabei?"
              : "Your platform not listed?"}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-(--color-fg-muted)">
            {locale === "de"
              ? "Wir vertreten Sie auch bei kleineren oder neuen Plattformen -solange digitale Rechte betroffen sind."
              : "We also represent you for smaller or newer platforms -as long as digital rights are at stake."}
          </p>
          <Link
            href="/erstberatung"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-(--color-brand-electric) px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-(--color-brand-glow)"
          >
            {locale === "de"
              ? "Kostenlose Ersteinschätzung"
              : "Free first assessment"}
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
