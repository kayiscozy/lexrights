import { setRequestLocale, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import {
  articles,
  articleCategories,
  formatArticleDate,
  getArticleBySlug,
} from "@/lib/articles";
import { team } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";
import { env } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const a of articles) {
      params.push({ locale, slug: a.slug[locale] });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!hasLocale(routing.locales, rawLocale)) return {};
  const locale = rawLocale as Locale;
  const article = getArticleBySlug(slug, locale);
  if (!article) return {};

  const insightsPath = locale === "de" ? "wissen" : "insights";

  return {
    title: article.title[locale],
    description: article.summary[locale],
    keywords: article.keywords,
    alternates: {
      canonical: `${env.siteUrl}/${locale}/${insightsPath}/${article.slug[locale]}`,
      languages: {
        de: `${env.siteUrl}/de/wissen/${article.slug.de}`,
        en: `${env.siteUrl}/en/insights/${article.slug.en}`,
      },
    },
    openGraph: {
      title: article.title[locale],
      description: article.summary[locale],
      type: "article",
      publishedTime: article.date,
      authors: [team.find((m) => m.id === article.author)?.name ?? ""],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!hasLocale(routing.locales, rawLocale)) notFound();
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const article = getArticleBySlug(slug, locale);
  if (!article) notFound();

  const tNav = await getTranslations({ locale, namespace: "nav" });
  const author = team.find((m) => m.id === article.author);

  const related = articles
    .filter((a) => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[locale],
    description: article.summary[locale],
    datePublished: article.date,
    dateModified: article.date,
    author: author
      ? {
          "@type": "Person",
          name: author.name,
          url: `${env.siteUrl}/${locale}/${locale === "de" ? "kanzlei" : "firm"}#${author.id}`,
        }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: env.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${env.siteUrl}/logos/wordmark.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${env.siteUrl}/${locale}/${locale === "de" ? "wissen" : "insights"}/${article.slug[locale]}`,
    },
    keywords: article.keywords.join(", "),
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="bg-gradient-to-b from-(--color-bg-tint) to-(--color-bg) pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <Link
            href="/wissen"
            className="inline-flex items-center gap-1.5 text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-brand-electric)"
          >
            <ArrowLeft className="size-3.5" aria-hidden />
            {locale === "de" ? "Alle Artikel" : "All articles"}
          </Link>

          <span className="mt-8 inline-flex rounded-full border border-(--color-brand-electric)/30 bg-(--color-brand-electric)/8 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
            {articleCategories[article.category][locale]}
          </span>

          <h1 className="mt-6 text-balance text-3xl font-semibold leading-tight tracking-tight text-(--color-fg) md:text-4xl lg:text-5xl">
            {article.title[locale]}
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-(--color-fg-muted) md:text-xl">
            {article.summary[locale]}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-(--color-border) pt-6 text-sm text-(--color-fg-muted)">
            {author && (
              <span>
                {locale === "de" ? "Von" : "By"}{" "}
                <strong className="text-(--color-fg)">{author.name}</strong>
              </span>
            )}
            <span aria-hidden>·</span>
            <time dateTime={article.date}>
              {formatArticleDate(article.date, locale)}
            </time>
            <span aria-hidden>·</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden />
              {article.readingMinutes} min
            </span>
          </div>
        </div>
      </div>

      <article className="relative pb-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          {article.sections.map((section) => (
            <section
              key={section.heading[locale]}
              className="mt-12 first:mt-0"
            >
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-(--color-fg) md:text-3xl">
                {section.heading[locale]}
              </h2>
              <div className="mt-5 space-y-5">
                {section.body[locale].map((para, i) => (
                  <p
                    key={i}
                    className="text-pretty text-base leading-relaxed text-(--color-fg-muted) md:text-lg"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Author card */}
          {author && (
            <div className="mt-16 rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 shadow-[var(--shadow-xs)] md:p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
                {locale === "de" ? "Autor" : "Author"}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-(--color-fg)">
                {author.name}
              </h3>
              <p className="mt-1 text-sm text-(--color-fg-muted)">
                {author.role[locale]} · {author.bar}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-(--color-fg-muted)">
                {locale === "de"
                  ? `Schwerpunkte: ${author.focus.de.join(", ")}.`
                  : `Focus: ${author.focus.en.join(", ")}.`}
              </p>
              <Link
                href={`/kanzlei#${author.id}` as never}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-(--color-brand-electric) hover:underline"
              >
                {locale === "de" ? "Zum Profil" : "View profile"}
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 rounded-2xl border border-(--color-brand-navy) bg-(--color-brand-navy) p-8 text-center text-white md:p-10">
            <h3 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              {locale === "de"
                ? "Sie sind selbst betroffen?"
                : "Affected yourself?"}
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/80 md:text-base">
              {locale === "de"
                ? "Wir prüfen Ihren Fall in 24 Stunden - kostenlos und unverbindlich."
                : "We'll review your case within 24 hours - free of charge and without obligation."}
            </p>
            <div className="mt-6">
              <Button asChild variant="brand" size="lg">
                <Link href="/erstberatung">
                  {tNav("consultationCta")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="relative pb-24">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold tracking-tight text-(--color-fg) md:text-3xl">
              {locale === "de" ? "Weiterlesen" : "Keep reading"}
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((a) => (
                <Link
                  key={a.id}
                  href={`/wissen/${a.slug[locale]}` as never}
                  className="card-hover group flex flex-col rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 shadow-[var(--shadow-xs)]"
                >
                  <span className="inline-flex w-fit rounded-full border border-(--color-brand-electric)/30 bg-(--color-brand-electric)/8 px-2.5 py-0.5 font-mono text-[11px] font-semibold uppercase tracking-wider text-(--color-brand-electric)">
                    {articleCategories[a.category][locale]}
                  </span>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-(--color-fg) transition-colors group-hover:text-(--color-brand-navy)">
                    {a.title[locale]}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-(--color-fg-muted)">
                    {a.summary[locale]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
