import { setRequestLocale, getTranslations } from "next-intl/server";
import { ConsultationForm } from "@/components/consultation-form";
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
    <section className="relative pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="aurora-bg absolute inset-x-0 top-0 -z-10 h-[600px]" aria-hidden />

      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-[--color-brand-electric]">
            {t("eyebrow")}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-[--color-fg] md:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-[--color-fg-muted] md:text-lg">
            {t("sub")}
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
