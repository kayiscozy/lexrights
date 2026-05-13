import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import {
  Scale,
  Globe2,
  Gavel,
  ArrowRight,
  CheckCircle2,
  Mail,
  GraduationCap,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { team, faqJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { env } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale !== "en") return {};
  const t = await getTranslations({ locale, namespace: "crossBorder.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${env.siteUrl}/en/cross-border`,
      languages: {
        en: `${env.siteUrl}/en/cross-border`,
        "x-default": `${env.siteUrl}/en/cross-border`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${env.siteUrl}/en/cross-border`,
      locale: "en_US",
    },
  };
}

const USE_CASE_ICONS = [Globe2, Scale, Gavel] as const;

export default async function CrossBorderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;

  if (rawLocale !== "en") {
    notFound();
  }

  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const tHero = await getTranslations({ locale, namespace: "crossBorder.hero" });
  const tIntro = await getTranslations({ locale, namespace: "crossBorder.intro" });
  const tCases = await getTranslations({ locale, namespace: "crossBorder.useCases" });
  const tCounsel = await getTranslations({ locale, namespace: "crossBorder.counsel" });
  const tScope = await getTranslations({ locale, namespace: "crossBorder.scope" });
  const tFaq = await getTranslations({ locale, namespace: "crossBorder.faq" });
  const tCta = await getTranslations({ locale, namespace: "crossBorder.cta" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const useCases = tCases.raw("items") as Array<{
    title: string;
    desc: string;
    bullets: string[];
  }>;
  const inScope = tScope.raw("inScope") as string[];
  const outOfScope = tScope.raw("outOfScope") as string[];
  const faqItems = tFaq.raw("items") as Array<{ q: string; a: string }>;

  const phillips = team.find((m) => m.id === "phillips");

  const breadcrumbLd = breadcrumbJsonLd([
    { name: "LexRights", url: `${env.siteUrl}/en` },
    { name: tHero("eyebrow"), url: `${env.siteUrl}/en/cross-border` },
  ]);

  const faqLd = faqJsonLd(faqItems.map((f) => ({ q: f.q, a: f.a })));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <PageHero
        imageKey="crossBorder"
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        subtitle={tHero("sub")}
      >
        <Button asChild variant="brand" size="lg">
          <Link href="/erstberatung">
            {tNav("consultationCta")}
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <p className="text-pretty text-lg leading-relaxed text-(--color-fg-muted) md:text-xl">
            {tIntro("p1")}
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-(--color-fg-muted) md:text-lg">
            {tIntro("p2")}
          </p>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl">
              {tCases("title")}
            </h2>
            <p className="mt-4 text-pretty text-base text-(--color-fg-muted) md:text-lg">
              {tCases("subtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {useCases.map((uc, i) => {
              const Icon = USE_CASE_ICONS[i] ?? Globe2;
              return (
                <article
                  key={uc.title}
                  className="card-hover rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 md:p-8"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl border border-(--color-brand-electric)/40 bg-(--color-brand-electric)/8 text-(--color-brand-electric)">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-(--color-fg)">
                    {uc.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-(--color-fg-muted)">
                    {uc.desc}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {uc.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2 text-sm text-(--color-fg-muted)"
                      >
                        <CheckCircle2
                          className="mt-0.5 size-4 shrink-0 text-(--color-brand-electric)"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {phillips && (
        <section className="relative py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
            <div className="rounded-3xl border border-(--color-border) bg-(--color-bg-surface) p-6 md:p-10">
              <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-start">
                <div className="relative size-32 overflow-hidden rounded-2xl ring-2 ring-(--color-brand-electric)/30 ring-offset-2 ring-offset-(--color-bg-surface)">
                  <Image
                    src={phillips.image}
                    alt={phillips.name}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
                    {tCounsel("eyebrow")}
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-(--color-fg)">
                    {phillips.name}
                  </h2>
                  <p className="mt-1 text-base font-medium text-(--color-brand-electric)">
                    {phillips.role.en} · {phillips.title.en}
                  </p>
                  <p className="mt-1 text-sm text-(--color-fg-muted)">
                    {phillips.bar} · admitted {phillips.admittedSince}
                  </p>

                  <p className="mt-5 text-pretty text-base leading-relaxed text-(--color-fg-muted)">
                    {tCounsel("bio")}
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
                        <GraduationCap className="size-3.5" aria-hidden />
                        Education
                      </h4>
                      <ul className="mt-2 space-y-1 text-sm text-(--color-fg-muted)">
                        {phillips.education.map((e, i) => (
                          <li key={i}>{e.en}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
                        Focus areas
                      </h4>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {phillips.focus.en.map((f) => (
                          <span
                            key={f}
                            className="rounded-md border border-(--color-border) bg-(--color-bg-elevated)/50 px-2 py-1 text-xs text-(--color-fg-muted)"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a
                    href={`mailto:${phillips.email}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-(--color-brand-electric) transition-colors hover:opacity-80"
                  >
                    <Mail className="size-4" aria-hidden />
                    {phillips.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl">
              {tScope("title")}
            </h2>
            <p className="mt-4 text-pretty text-base text-(--color-fg-muted) md:text-lg">
              {tScope("subtitle")}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-(--color-brand-electric)/40 bg-(--color-brand-electric)/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-(--color-brand-electric)">
                {tScope("inScopeLabel")}
              </h3>
              <ul className="mt-4 space-y-2">
                {inScope.map((s) => (
                  <li key={s} className="flex gap-2 text-sm text-(--color-fg)">
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 text-(--color-brand-electric)"
                      aria-hidden
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
                {tScope("outOfScopeLabel")}
              </h3>
              <ul className="mt-4 space-y-2">
                {outOfScope.map((s) => (
                  <li
                    key={s}
                    className="flex gap-2 text-sm text-(--color-fg-muted)"
                  >
                    <span className="mt-0.5 size-4 shrink-0 text-(--color-fg-subtle)">
                      —
                    </span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-(--color-fg-subtle)">
                {tScope("outOfScopeNote")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl">
              {tFaq("title")}
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqItems.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-5 md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-(--color-fg)">
                  <span>{f.q}</span>
                  <span className="mt-1 shrink-0 text-(--color-brand-electric) transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-(--color-fg-muted) md:text-base">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
          <div className="rounded-3xl border border-(--color-brand-electric)/40 bg-gradient-to-br from-(--color-brand-navy) to-(--color-brand-electric) p-8 text-center md:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {tCta("title")}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/85 md:text-lg">
              {tCta("subtitle")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="secondary" size="lg">
                <Link href="/erstberatung">
                  {tCta("primary")}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-white hover:bg-white/10"
              >
                <Link href="/kontakt">{tCta("secondary")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
