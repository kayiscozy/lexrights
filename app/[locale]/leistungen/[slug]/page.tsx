import { setRequestLocale, getTranslations } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Scale,
  ShieldAlert,
} from "lucide-react";
import {
  platforms,
  platformCategories,
  getPlatformBySlug,
} from "@/lib/platforms";
import { getPillarContent } from "@/lib/platform-content";
import type { Locale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { routing } from "@/i18n/routing";
import { env } from "@/lib/utils";
import type { Metadata } from "next";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const p of platforms) {
      params.push({ locale, slug: p.slug[locale] });
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

  const platform = getPlatformBySlug(slug, locale);
  if (!platform) return {};

  const content = getPillarContent(platform.name, locale);
  const description = platform.shortDesc[locale];

  return {
    title: content?.hero.headline ?? platform.name,
    description,
    alternates: {
      canonical: `${env.siteUrl}/${locale}/leistungen/${platform.slug[locale]}`,
      languages: {
        de: `${env.siteUrl}/de/leistungen/${platform.slug.de}`,
        en: `${env.siteUrl}/en/services/${platform.slug.en}`,
      },
    },
    openGraph: {
      title: content?.hero.headline ?? platform.name,
      description,
    },
  };
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!hasLocale(routing.locales, rawLocale)) notFound();
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const platform = getPlatformBySlug(slug, locale);
  if (!platform) notFound();

  const content = getPillarContent(platform.name, locale);
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tCommon = await getTranslations({ locale });

  if (!content) {
    return (
      <section className="relative pb-24 pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
            {platformCategories[platform.category][locale]}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            {platform.name}
          </h1>
          <p className="mt-5 text-base text-(--color-fg-muted) md:text-lg">
            {platform.shortDesc[locale]}
          </p>
          <p className="mt-8 text-sm text-(--color-fg-subtle)">
            {locale === "de"
              ? "Detailinhalte zu dieser Plattform sind in Vorbereitung. Für eine kostenlose Ersteinschätzung kontaktieren Sie uns gerne direkt."
              : "Detailed content for this platform is in preparation. For a free first assessment, contact us directly."}
          </p>
          <Button asChild variant="brand" size="lg" className="mt-8">
            <Link href="/erstberatung">
              {tNav("consultationCta")}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    );
  }

  // FAQ Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="editorial-bg absolute inset-0 -z-10" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-(--color-fg) md:text-5xl lg:text-6xl">
            {content.hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-(--color-fg-muted) md:text-lg">
            {content.hero.sub}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="brand" size="lg">
              <Link href="/erstberatung">
                {tNav("consultationCta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/leistungen">
                {locale === "de" ? "Alle Plattformen" : "All platforms"}
              </Link>
            </Button>
          </div>
          <p className="mt-8 text-xs text-(--color-fg-subtle)">
            {platform.vendor} · {platform.jurisdiction}
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <ShieldAlert className="size-5 text-(--color-error)" aria-hidden />
            <h2 className="text-2xl font-semibold tracking-tight text-(--color-fg) md:text-3xl">
              {content.problems.title}
            </h2>
          </div>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {content.problems.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-(--color-border) bg-(--color-bg-surface) p-4 text-sm text-(--color-fg-muted) shadow-[var(--shadow-xs)] transition-colors duration-200 hover:border-(--color-error)/40 hover:bg-(--color-error)/4"
              >
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-(--color-error)" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Legal Arguments */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 text-(--color-brand-electric)">
              <Scale className="size-5" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-wider">
                {locale === "de" ? "Rechts­grundlagen" : "Legal grounds"}
              </span>
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl">
              {content.legal.title}
            </h2>
            <p className="mt-4 text-pretty text-base text-(--color-fg-muted) md:text-lg">
              {content.legal.intro}
            </p>
          </div>
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {content.legal.arguments.map((arg) => (
              <div
                key={arg.paragraph}
                className="card-hover rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 shadow-[var(--shadow-xs)]"
              >
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
                  {arg.paragraph}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-(--color-fg)">
                  {arg.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--color-fg-muted)">
                  {arg.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl">
            {content.process.title}
          </h2>
          <ol className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {content.process.steps.map((step, idx) => (
              <li
                key={step.title}
                className="card-hover rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 shadow-[var(--shadow-xs)] md:p-7"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
                  0{idx + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-(--color-fg)">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(--color-fg-muted)">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl">
            {content.faq.title}
          </h2>
          <div className="mt-12 divide-y divide-(--color-border) overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-surface) shadow-[var(--shadow-sm)]">
            {content.faq.items.map((item, i) => (
              <details
                key={i}
                className="group transition-colors duration-200 hover:bg-(--color-bg-tint) open:bg-(--color-bg-tint)"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-4 p-5 transition-colors md:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="text-base font-semibold text-(--color-fg)">
                    {item.q}
                  </span>
                  <span
                    className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-(--color-border-strong) text-(--color-fg-subtle) transition-all duration-200 group-hover:border-(--color-brand-electric) group-hover:text-(--color-brand-electric) group-open:rotate-45 group-open:border-(--color-brand-electric) group-open:bg-(--color-brand-electric) group-open:text-white"
                    aria-hidden
                  >
                    <svg className="size-3" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-(--color-fg-muted) md:px-6 md:pb-6">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-24 pt-12 md:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-(--color-brand-navy) bg-(--color-brand-navy) px-6 py-16 text-center md:px-12 md:py-20">
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {content.ctaTitle}
            </h2>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="brand" size="xl">
                <Link href="/erstberatung">
                  {tNav("consultationCta")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a
                href={`mailto:${env.email}`}
                className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
              >
                {env.email}
                <ArrowUpRight className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
