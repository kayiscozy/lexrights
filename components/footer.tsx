import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./logo";
import { LanguageToggle } from "./language-toggle";
import { env } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";
import { ShieldCheck, Lock, Globe2 } from "lucide-react";

type FooterLink = {
  href:
    | "/leistungen"
    | "/erstberatung"
    | "/kanzlei"
    | "/wissen"
    | "/faelle"
    | "/kontakt"
    | "/impressum"
    | "/datenschutz";
  label: string;
};

export function Footer({ locale: _locale }: { locale: Locale }) {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  const sections: { heading: string; links: FooterLink[] }[] = [
    {
      heading: t("sections.services"),
      links: [
        { href: "/leistungen", label: t("links.platforms") },
        { href: "/leistungen", label: t("links.dsa") },
        { href: "/leistungen", label: t("links.gdpr") },
        { href: "/leistungen", label: t("links.digitalContent") },
      ],
    },
    {
      heading: t("sections.firm"),
      links: [
        { href: "/kanzlei", label: t("links.team") },
        { href: "/wissen", label: t("links.insights") },
        { href: "/faelle", label: t("links.cases") },
        { href: "/kontakt", label: tNav("contact") },
      ],
    },
    {
      heading: t("sections.legal"),
      links: [
        { href: "/impressum", label: t("links.imprint") },
        { href: "/datenschutz", label: t("links.privacy") },
      ],
    },
  ];

  const trustBadges = [
    { Icon: ShieldCheck, label: "BRAO/BORA" },
    { Icon: Lock, label: "DSGVO" },
    { Icon: Globe2, label: "EU-wide" },
  ];

  return (
    <footer className="relative mt-32 border-t border-(--color-border) bg-(--color-bg-tint)">

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="LexRights -Home"
              className="group inline-block"
            >
              <Logo
                variant="wordmark"
                className="h-6 w-auto transition-opacity duration-200 group-hover:opacity-70"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-(--color-fg-muted)">
              {t("tagline")}
            </p>
            <address className="mt-6 not-italic text-xs leading-relaxed text-(--color-fg-subtle)">
              {env.legalName}
              <br />
              {env.address.street} · {env.address.zip} {env.address.city}
              <br />
              <a
                href={`tel:${env.phone}`}
                className="link-hover transition-colors hover:text-(--color-fg)"
              >
                {env.phoneDisplay}
              </a>
              {" · "}
              <a
                href={`mailto:${env.email}`}
                className="link-hover transition-colors hover:text-(--color-fg)"
              >
                {env.email}
              </a>
            </address>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {trustBadges.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-(--color-border) bg-(--color-bg-surface) px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-(--color-fg-muted)"
                >
                  <Icon className="size-3 text-(--color-brand-electric)" aria-hidden />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
            {sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-(--color-fg)">
                  {section.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={`${link.href}-${idx}`}>
                      <Link
                        href={link.href}
                        className="link-hover text-sm text-(--color-fg-muted) transition-colors hover:text-(--color-fg)"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-(--color-border) pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 text-xs text-(--color-fg-subtle) sm:flex-row sm:items-center sm:gap-4">
            <p>
              © {year} {env.legalName}.
            </p>
            <p className="text-pretty">{t("compliance")}</p>
          </div>
          <LanguageToggle />
        </div>
      </div>
    </footer>
  );
}
