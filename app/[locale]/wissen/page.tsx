import { setRequestLocale, getTranslations } from "next-intl/server";
import { ComingSoon } from "@/components/coming-soon";
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
  const { locale } = await params;
  setRequestLocale(locale);
  return <ComingSoon namespace="wissen" />;
}
