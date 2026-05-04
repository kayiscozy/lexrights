import { env } from "./utils";

export const team = [
  {
    id: "hartmann",
    name: "Dr. Nikolas Hartmann",
    role: { de: "Geschäftsführender Partner", en: "Managing Partner" },
    title: { de: "Rechtsanwalt", en: "Rechtsanwalt (German Attorney-at-Law)" },
    admittedSince: "2014",
    bar: "Rechtsanwaltskammer Berlin",
    education: [
      { de: "Studium der Rechts­wissen­schaften, Universität Bonn", en: "Law studies, University of Bonn" },
      { de: "Magister iuris (M.Jur.), University of Oxford (2015)", en: "Magister iuris (M.Jur.), University of Oxford (2015)" },
      { de: "Promotion zum Dr. iur., Universität Bonn (2014) -Plattformhaftung im europäischen Binnenmarkt", en: "PhD in Law, University of Bonn (2014) -Platform liability in the European single market" },
    ],
    focus: {
      de: ["Digital Services Act", "Plattformrecht", "IT-Vertragsrecht", "Digital Compliance"],
      en: ["Digital Services Act", "Platform law", "IT contract law", "Digital compliance"],
    },
    languages: ["Deutsch", "English", "Français"],
    email: "n.hartmann@lexrights.com",
  },
  {
    id: "vogel",
    name: "Sophie Vogel",
    role: { de: "Partnerin", en: "Partner" },
    title: { de: "Rechtsanwältin", en: "Rechtsanwältin (German Attorney-at-Law)" },
    admittedSince: "2017",
    bar: "Rechtsanwaltskammer Berlin",
    education: [
      { de: "Studium der Rechts­wissen­schaften, Ludwig-Maximilians-Universität München", en: "Law studies, Ludwig-Maximilians University Munich" },
      { de: "LL.M. Law & Technology, Tilburg University (NL, 2015)", en: "LL.M. Law & Technology, Tilburg University (NL, 2015)" },
      { de: "Referendariat OLG München, Zweites Staatsexamen 2017", en: "Legal clerkship Higher Regional Court Munich, second state exam 2017" },
    ],
    focus: {
      de: ["DSGVO & Datenschutz", "Verbraucherschutz digitaler Dienste", "Gaming-Recht", "Plattform-Compliance"],
      en: ["GDPR & data protection", "Consumer protection for digital services", "Gaming law", "Platform compliance"],
    },
    languages: ["Deutsch", "English", "Nederlands", "Français"],
    email: "s.vogel@lexrights.com",
  },
] as const;

export type TeamMember = (typeof team)[number];

export function organizationJsonLd(locale: "de" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${env.siteUrl}#organization`,
    name: env.legalName,
    alternateName: env.brandName,
    url: env.siteUrl,
    logo: `${env.siteUrl}/logos/wordmark.svg`,
    image: `${env.siteUrl}/logos/wordmark.svg`,
    description:
      locale === "de"
        ? "Pan-europäische Boutique-Kanzlei für digitale Rechte: Plattform-Sperrungen, DSA, DSGVO, Verbraucherschutz für digitale Inhalte."
        : "Pan-European boutique law firm for digital rights: platform suspensions, DSA, GDPR, consumer protection for digital content.",
    address: {
      "@type": "PostalAddress",
      streetAddress: env.address.street,
      postalCode: env.address.zip,
      addressLocality: env.address.city,
      addressCountry: "DE",
    },
    telephone: env.phone,
    email: env.email,
    areaServed: [
      { "@type": "AdministrativeArea", name: "European Union" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Austria" },
      { "@type": "Country", name: "Switzerland" },
      { "@type": "Country", name: "Netherlands" },
    ],
    knowsAbout: [
      "Digital Services Act",
      "GDPR",
      "Platform suspensions",
      "Account bans",
      "Gaming law",
      "Digital consumer rights",
      "Brussels Ia Regulation",
      "P2B Regulation",
    ],
    member: team.map((m) => ({
      "@type": "Person",
      "@id": `${env.siteUrl}/${locale}/kanzlei#${m.id}`,
      name: m.name,
      jobTitle: m.role[locale],
      memberOf: { "@id": `${env.siteUrl}#organization` },
    })),
    sameAs: [
      "https://www.linkedin.com/company/lexrights",
      "https://x.com/lexrights",
    ],
  };
}

export function attorneyJsonLd(member: TeamMember, locale: "de" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "@id": `${env.siteUrl}/${locale}/kanzlei#${member.id}`,
    name: member.name,
    jobTitle: member.role[locale],
    description:
      locale === "de"
        ? `${member.title.de} mit Schwerpunkt ${member.focus.de.join(", ")}.`
        : `${member.title.en} specializing in ${member.focus.en.join(", ")}.`,
    knowsAbout: member.focus[locale],
    knowsLanguage: member.languages,
    email: member.email,
    worksFor: { "@id": `${env.siteUrl}#organization` },
    memberOf: {
      "@type": "Organization",
      name: member.bar,
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
