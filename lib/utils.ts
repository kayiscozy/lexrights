import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Defaults are PLACEHOLDER values from strategie/KANZLEI-DATEN.md.
// Override via .env.local (dev) or wrangler.jsonc `vars` (production).
// Replace with real firm data before going live.
export const env = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || "LexRights",
  legalName:
    process.env.NEXT_PUBLIC_LEGAL_NAME ||
    "LexRights Rechtsanwälte PartG mbB",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://lexrights.com",
  address: {
    street: process.env.NEXT_PUBLIC_ADDRESS_STREET || "Charlottenstraße 65",
    zip: process.env.NEXT_PUBLIC_ADDRESS_ZIP || "10117",
    city: process.env.NEXT_PUBLIC_ADDRESS_CITY || "Berlin",
    country: process.env.NEXT_PUBLIC_ADDRESS_COUNTRY || "Deutschland",
  },
  email: process.env.NEXT_PUBLIC_EMAIL || "contact@lexrights.com",
  emailMandate:
    process.env.NEXT_PUBLIC_EMAIL_MANDATE || "mandate@lexrights.com",
  vatId: process.env.NEXT_PUBLIC_VAT_ID || "DE329884712",
  register:
    process.env.NEXT_PUBLIC_REGISTER ||
    "Amtsgericht Charlottenburg, PR 2024 B",
  insurance: {
    name:
      process.env.NEXT_PUBLIC_INSURANCE_NAME || "HDI Versicherung AG",
    address:
      process.env.NEXT_PUBLIC_INSURANCE_ADDRESS ||
      "HDI-Platz 1, 30659 Hannover",
    sum: process.env.NEXT_PUBLIC_INSURANCE_SUM || "5.000.000 €",
  },
  bar: {
    name: process.env.NEXT_PUBLIC_BAR_NAME || "Rechtsanwaltskammer Berlin",
    url: process.env.NEXT_PUBLIC_BAR_URL || "https://www.rak-berlin.de",
  },
} as const;
