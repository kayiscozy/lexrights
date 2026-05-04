import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { articles, articleCategories, formatArticleDate } from "@/lib/articles";
import { team } from "@/lib/schema";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "wissen.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function WissenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const tHero = await getTranslations({ locale, namespace: "wissen.hero" });

  const sorted = [...articles].sort((a, b) =>
    b.date.localeCompare(a.date),
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  const authorName = (id: string) =>
    team.find((m) => m.id === id)?.name ?? id;

  return (
    <>
      <PageHero
        imageKey="insights"
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        subtitle={tHero("sub")}
        size="md"
      />

      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {featured && (
            <Link
              href={`/wissen/${featured.slug[locale]}` as never}
              className="card-hover group block overflow-hidden rounded-3xl border border-(--color-border) bg-(--color-bg-surface) shadow-[var(--shadow-sm)]"
            >
              <div className="grid gap-0 md:grid-cols-2">
                <div className="relative bg-gradient-to-br from-(--color-brand-navy) to-(--color-brand-electric) p-10 text-white md:p-12">
                  <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider backdrop-blur">
                    {articleCategories[featured.category][locale]}
                  </span>
                  <h2 className="mt-6 text-balance text-2xl font-semibold leading-tight tracking-tight md:text-3xl lg:text-4xl">
                    {featured.title[locale]}
                  </h2>
                  <p className="mt-4 line-clamp-3 text-pretty text-sm leading-relaxed text-white/85 md:text-base">
                    {featured.summary[locale]}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-xs text-white/70">
                    <span>{formatArticleDate(featured.date, locale)}</span>
                    <span aria-hidden>·</span>
                    <span>{authorName(featured.author)}</span>
                    <span aria-hidden>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" aria-hidden />
                      {featured.readingMinutes} min
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between bg-(--color-bg-tint) p-10 md:p-12">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
                      {locale === "de" ? "Aktuelle Analyse" : "Latest analysis"}
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-(--color-fg-muted)">
                      {featured.sections.slice(0, 3).map((s) => (
                        <li key={s.heading[locale]} className="flex items-start gap-2">
                          <span className="mt-1 size-1.5 shrink-0 rounded-full bg-(--color-brand-electric)" aria-hidden />
                          <span>{s.heading[locale]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-(--color-brand-electric) transition-colors group-hover:text-(--color-brand-navy)">
                    {locale === "de" ? "Artikel lesen" : "Read article"}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </span>
                </div>
              </div>
            </Link>
          )}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a) => (
              <Link
                key={a.id}
                href={`/wissen/${a.slug[locale]}` as never}
                className="card-hover group flex flex-col rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 shadow-[var(--shadow-xs)] md:p-7"
              >
                <span className="inline-flex w-fit rounded-full border border-(--color-brand-electric)/30 bg-(--color-brand-electric)/8 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-(--color-brand-electric)">
                  {articleCategories[a.category][locale]}
                </span>
                <h3 className="mt-5 text-balance text-lg font-semibold leading-snug text-(--color-fg) transition-colors group-hover:text-(--color-brand-navy)">
                  {a.title[locale]}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-(--color-fg-muted)">
                  {a.summary[locale]}
                </p>
                <div className="mt-6 flex items-center gap-3 text-xs text-(--color-fg-subtle)">
                  <span>{formatArticleDate(a.date, locale)}</span>
                  <span aria-hidden>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-3" aria-hidden />
                    {a.readingMinutes} min
                  </span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-brand-electric)">
                  {locale === "de" ? "Lesen" : "Read"}
                  <ArrowUpRight className="size-3.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
