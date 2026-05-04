import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/leistungen": {
      de: "/leistungen",
      en: "/services",
    },
    "/leistungen/[slug]": {
      de: "/leistungen/[slug]",
      en: "/services/[slug]",
    },
    "/erstberatung": {
      de: "/erstberatung",
      en: "/consultation",
    },
    "/kanzlei": {
      de: "/kanzlei",
      en: "/firm",
    },
    "/wissen": {
      de: "/wissen",
      en: "/insights",
    },
    "/wissen/[slug]": {
      de: "/wissen/[slug]",
      en: "/insights/[slug]",
    },
    "/faelle": {
      de: "/faelle",
      en: "/cases",
    },
    "/kontakt": {
      de: "/contact",
      en: "/contact",
    },
    "/impressum": {
      de: "/impressum",
      en: "/legal-notice",
    },
    "/datenschutz": {
      de: "/datenschutz",
      en: "/privacy",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

export const DACH_COUNTRIES = ["DE", "AT", "CH", "LI", "LU"] as const;

export function detectLocaleFromCountry(country: string | null | undefined): Locale {
  if (!country) return routing.defaultLocale;
  return (DACH_COUNTRIES as readonly string[]).includes(country.toUpperCase())
    ? "de"
    : "en";
}
