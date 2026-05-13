import { setRequestLocale, getTranslations } from "next-intl/server";
import { CasesList } from "@/components/cases-list";
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
  const t = await getTranslations({ locale, namespace: "faelle.meta" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: pageAlternates(locale, { de: "/faelle", en: "/cases" }),
  };
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
      <PageHero
        imageKey="cases"
        eyebrow={tHero("eyebrow")}
        title={tHero("title")}
        subtitle={tHero("sub")}
      />

      <CasesList locale={locale} />
    </>
  );
}
