import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./logo";
import { env } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

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

  return (
    <footer className="relative mt-32 border-t border-[--color-border] bg-[--color-bg]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" aria-label="LexRights — Home">
              <Logo variant="wordmark" className="h-6 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[--color-fg-muted]">
              {t("tagline")}
            </p>
            <p className="mt-6 text-xs leading-relaxed text-[--color-fg-subtle]">
              {env.legalName}
              <br />
              {env.address.street} · {env.address.zip} {env.address.city}
              <br />
              {env.phoneDisplay}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-8 lg:grid-cols-3">
            {sections.map((section) => (
              <div key={section.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[--color-fg]">
                  {section.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.links.map((link, idx) => (
                    <li key={`${link.href}-${idx}`}>
                      <Link
                        href={link.href}
                        className="text-sm text-[--color-fg-muted] transition-colors hover:text-[--color-fg]"
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

        <div className="mt-16 flex flex-col gap-4 border-t border-[--color-border] pt-8 text-xs text-[--color-fg-subtle] md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {env.legalName}. {t("copyright")}
          </p>
          <p className="text-pretty">{t("compliance")}</p>
        </div>
      </div>
    </footer>
  );
}
