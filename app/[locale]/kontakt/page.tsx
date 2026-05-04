import { setRequestLocale, getTranslations } from "next-intl/server";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { env } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tHero = await getTranslations({ locale, namespace: "contact.hero" });
  const tCh = await getTranslations({ locale, namespace: "contact.channels" });
  const tOf = await getTranslations({ locale, namespace: "contact.office" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const channels = [
    {
      Icon: Phone,
      title: tCh("phone"),
      value: env.phoneDisplay,
      href: `tel:${env.phone}`,
      note: tCh("phoneNote"),
    },
    {
      Icon: Mail,
      title: tCh("email"),
      value: env.email,
      href: `mailto:${env.email}`,
      note: tCh("emailNote"),
    },
    {
      Icon: MapPin,
      title: tCh("address"),
      value: `${env.address.street}, ${env.address.zip} ${env.address.city}`,
      href: undefined,
      note: tCh("addressNote"),
    },
  ];

  return (
    <>
      <section className="relative pb-20 pt-32 md:pb-24 md:pt-40">
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
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/erstberatung">
                {tNav("consultationCta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-3 md:grid-cols-2">
            {channels.map(({ Icon, title, value, href, note }) => {
              const card = (
                <div className={`group flex h-full items-start gap-4 rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 ${href ? "card-hover" : ""}`}>
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-(--color-brand-electric)/40 bg-(--color-brand-electric)/8 text-(--color-brand-electric) transition-all duration-300 group-hover:bg-(--color-brand-electric)/14 group-hover:shadow-[0_0_20px_-4px_rgba(4,58,253,0.4)]">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
                      {title}
                    </p>
                    <p className="mt-1 truncate text-base font-medium text-(--color-fg)">
                      {value}
                    </p>
                    <p className="mt-1 text-xs text-(--color-fg-muted)">
                      {note}
                    </p>
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {card}
                </a>
              ) : (
                <div key={title}>{card}</div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 md:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-(--color-fg)">
              {tOf("title")}
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-(--color-fg-muted) md:text-base">
              {tOf("desc")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
