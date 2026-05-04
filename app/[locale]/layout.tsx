import { notFound } from "next/navigation";
import { setRequestLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing, type Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StickyCta } from "@/components/sticky-cta";
import { ScrollToTop } from "@/components/scroll-to-top";
import { RouteProgress } from "@/components/route-progress";
import { ToastProvider } from "@/components/toast";
import { env } from "@/lib/utils";
import { organizationJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) return {};

  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `${env.siteUrl}/${locale}`,
      languages: {
        de: `${env.siteUrl}/de`,
        en: `${env.siteUrl}/en`,
        "x-default": `${env.siteUrl}/en`,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${env.siteUrl}/${locale}`,
      locale: locale === "de" ? "de_DE" : "en_US",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const orgLd = organizationJsonLd(locale as Locale);

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang=${JSON.stringify(locale)};`,
        }}
      />
      <ToastProvider>
        <RouteProgress />
        <div className="relative flex min-h-dvh flex-col">
          <Header locale={locale as Locale} />
          <main className="flex-1">{children}</main>
          <Footer locale={locale as Locale} />
        </div>
        <StickyCta />
        <ScrollToTop />
      </ToastProvider>
    </NextIntlClientProvider>
  );
}
