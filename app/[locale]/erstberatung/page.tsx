import { setRequestLocale, getTranslations } from "next-intl/server";
import { ConsultationForm } from "@/components/consultation-form";
import { PageHero } from "@/components/page-hero";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "consultation.meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ConsultationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "consultation.intro" });

  return (
    <>
      <PageHero
        imageKey="consultation"
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("sub")}
        size="sm"
      />
      <section className="relative pb-24 pt-12 md:pb-32 md:pt-16">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <ConsultationForm />
        </div>
      </section>
    </>
  );
}
