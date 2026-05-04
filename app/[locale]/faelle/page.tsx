import { setRequestLocale, getTranslations } from "next-intl/server";
import { CasesList } from "@/components/cases-list";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faelle.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function FaellePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as Locale;
  setRequestLocale(locale);

  const tHero = await getTranslations({ locale, namespace: "faelle.hero" });

  return (
    <>
      <section className="relative pb-12 pt-32 md:pb-16 md:pt-40">
        <div className="editorial-bg absolute inset-x-0 top-0 -z-10 h-[400px]" aria-hidden />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
            {tHero("eyebrow")}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-(--color-fg) md:text-5xl lg:text-6xl">
            {tHero("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-(--color-fg-muted) md:text-lg">
            {tHero("sub")}
          </p>
        </div>
      </section>

      <CasesList locale={locale} />
    </>
  );
}
