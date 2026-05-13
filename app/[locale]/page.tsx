import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/hero";
import { PillarsSection } from "@/components/pillars-section";
import { PlatformsSection } from "@/components/platforms-section";
import { ProcessSection } from "@/components/process-section";
import { TrustSection } from "@/components/trust-section";
import { CtaSection } from "@/components/cta-section";
import { CrossBorderSection } from "@/components/cross-border-section";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <PillarsSection />
      {locale === "en" && <CrossBorderSection />}
      <PlatformsSection />
      <ProcessSection />
      <TrustSection />
      <CtaSection />
    </>
  );
}
