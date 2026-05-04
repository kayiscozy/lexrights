import type { Locale } from "@/i18n/routing";

export type CaseCategory =
  | "gaming"
  | "social"
  | "marketplace"
  | "payment"
  | "creator";

export type CaseOutcome = "out-of-court" | "interim-injunction" | "settlement" | "adr";

export interface CaseStudy {
  id: string;
  category: CaseCategory;
  platform: string;
  year: number;
  /** Streitwert in EUR (numerisch für sort, formatiert in display) */
  value: number;
  /** Dauer in Tagen, von Mandatsannahme bis Erfolg */
  durationDays: number;
  outcome: CaseOutcome;
  /** Anonymisierte Mandanten-Description */
  client: { de: string; en: string };
  /** Kurz-Zusammenfassung */
  headline: { de: string; en: string };
  /** Was war das Problem? */
  problem: { de: string; en: string };
  /** Welche Strategie? */
  strategy: { de: string; en: string };
  /** Was war das Ergebnis? */
  outcomeText: { de: string; en: string };
  /** Genutzte Rechtsgrundlagen */
  legalBasis: string[];
}

export const cases: CaseStudy[] = [
  {
    id: "fortnite-easyanticheat-fp",
    category: "gaming",
    platform: "Fortnite / Epic Games",
    year: 2025,
    value: 1847,
    durationDays: 22,
    outcome: "out-of-court",
    client: {
      de: "Mandant T., 17 Jahre, Hamburg",
      en: "Client T., 17 years, Hamburg",
    },
    headline: {
      de: "Fortnite-Permaban wegen falscher Cheat-Erkennung",
      en: "Fortnite permaban due to false cheat detection",
    },
    problem: {
      de: "EasyAntiCheat hatte den Account permanent gesperrt mit der pauschalen Begründung „Cheating-Verdacht\". Save-the-World-Account, V-Bucks-Käufe und seltene Skins wären verloren gewesen. Eltern als Vertragspartner.",
      en: "EasyAntiCheat permanently suspended the account with a vague 'cheating' allegation. Save-the-World account, V-Bucks purchases and rare skins would have been lost. Parents as contracting party.",
    },
    strategy: {
      de: "DSGVO Art. 15 Auskunft erzwang Offenlegung der EAC-Logs — keine konkreten Cheat-Beweise, nur Heuristik. Anwaltsschreiben unter DSA Art. 17 (Begründungspflicht) + DSGVO Art. 22 (Verbot rein automatisierter Entscheidungen) + § 327 BGB. Frist 14 Tage.",
      en: "GDPR Art. 15 request forced disclosure of EAC logs — no concrete cheat evidence, just heuristics. Formal letter under DSA Art. 17, GDPR Art. 22 and § 327 BGB. 14-day deadline.",
    },
    outcomeText: {
      de: "Account vollständig wiederhergestellt, alle V-Bucks und Skins erhalten. Außergerichtlich.",
      en: "Account fully reinstated, all V-Bucks and skins preserved. Out-of-court.",
    },
    legalBasis: ["DSA Art. 17", "DSGVO Art. 15", "DSGVO Art. 22", "§ 327 BGB"],
  },
  {
    id: "steam-vac-cs2-inventory",
    category: "gaming",
    platform: "Steam / Valve",
    year: 2024,
    value: 12430,
    durationDays: 124,
    outcome: "settlement",
    client: {
      de: "Mandant L., 26 Jahre, Köln",
      en: "Client L., 26 years, Cologne",
    },
    headline: {
      de: "VAC-Ban auf CS2 mit 5-stelligem Inventar",
      en: "VAC ban on CS2 with 5-figure inventory",
    },
    problem: {
      de: "Plötzlicher VAC-Ban auf CS2 nach 8 Jahren Account-Nutzung. Inventar mit Karambit-Knife und mehreren Souvenir-AWPs im Wert von ca. 12.430 €. Valve-Position: „VAC-Bans werden nie aufgehoben.\"",
      en: "Sudden VAC ban on CS2 after 8 years of account use. Inventory with Karambit knife and several Souvenir AWPs worth ~ €12,430. Valve's position: 'VAC bans are never lifted.'",
    },
    strategy: {
      de: "Anwaltsschreiben mit Aufforderung zur Beweisofferte → keine substantiierte Antwort. Klage am Verbraucher­gerichtsstand (Art. 18 Brüssel-Ia-VO) am LG Köln. Argumentation: Verstoß gegen § 307 BGB (intransparente AGB) und Art. 22 DSGVO. Wertersatz nach § 280 BGB.",
      en: "Formal letter requesting evidence → no substantive response. Filed at consumer's home venue (Art. 18 Brussels Ia) at LG Cologne. Arguments: § 307 BGB (intransparent ToS) and Art. 22 GDPR. Damages claim under § 280 BGB.",
    },
    outcomeText: {
      de: "Vergleich: Valve zahlte 9.500 € Wertersatz, Account blieb gesperrt. Gerichtskosten von Valve übernommen.",
      en: "Settlement: Valve paid €9,500 in damages, account remained suspended. Court costs covered by Valve.",
    },
    legalBasis: [
      "§ 307 BGB",
      "DSGVO Art. 22",
      "Brüssel-Ia Art. 18",
      "§ 280 BGB",
    ],
  },
  {
    id: "meta-facebook-deactivation",
    category: "social",
    platform: "Meta / Facebook",
    year: 2025,
    value: 0,
    durationDays: 18,
    outcome: "out-of-court",
    client: {
      de: "Mandantin S., 34 Jahre, Frankfurt am Main",
      en: "Client S., 34 years, Frankfurt am Main",
    },
    headline: {
      de: "Facebook-Konto deaktiviert wegen „Authentizität\"",
      en: "Facebook account disabled over 'authenticity'",
    },
    problem: {
      de: "Konto seit 2008 in Nutzung, deaktiviert ohne konkrete Begründung. 14 Jahre Foto-Memorabilia, Kontakte, Gruppen-Mitgliedschaften betroffen. Identitäts-Verifikation per Ausweis abgelehnt.",
      en: "Account in use since 2008, deactivated without concrete reason. 14 years of photo memorabilia, contacts, group memberships affected. ID verification rejected.",
    },
    strategy: {
      de: "Anwaltsschreiben gestützt auf BGH III ZR 179/20 — die „Verfahrenstrias\" (Information, Anhörung, Neuentscheidung). Hinweis auf DSA Art. 17 als VLOP-Pflicht und einstweilige Verfügung als nächster Schritt.",
      en: "Formal letter based on BGH III ZR 179/20 — the 'procedural triad' (notice, hearing, redecision). Reference to DSA Art. 17 as VLOP duty and interim injunction as next step.",
    },
    outcomeText: {
      de: "Konto innerhalb von 7 Tagen nach Eingang des Anwaltsschreibens reaktiviert. Alle Inhalte intakt.",
      en: "Account reinstated within 7 days of receiving the formal letter. All content intact.",
    },
    legalBasis: [
      "BGH III ZR 179/20",
      "DSA Art. 17",
      "§ 307 BGB",
    ],
  },
  {
    id: "amazon-seller-suspension",
    category: "marketplace",
    platform: "Amazon Seller Central",
    year: 2024,
    value: 47300,
    durationDays: 11,
    outcome: "interim-injunction",
    client: {
      de: "Einzelunternehmer B., FBA-Händler",
      en: "Sole trader B., FBA seller",
    },
    headline: {
      de: "Amazon-Seller-Suspension mit 47.300 € Funds-Hold",
      en: "Amazon Seller suspension with €47,300 funds hold",
    },
    problem: {
      de: "Seller Account ohne Vorwarnung gesperrt. Plan-of-Action eingereicht — abgelehnt. 47.300 € Auszahlungen wurden 90 Tage zurückgehalten, Lagerbestand ebenfalls blockiert. Existenz­bedrohung.",
      en: "Seller account suspended without warning. Plan of Action submitted — rejected. €47,300 in payouts held for 90 days, inventory also blocked. Existential threat.",
    },
    strategy: {
      de: "Antrag auf einstweilige Verfügung am LG Hamburg gestützt auf P2B-VO Art. 4 (zwingende 30-Tage-Vorwarnung bei Beendigung) + Art. 11 P2B-VO (internes Beschwerdesystem). Eilbedürftigkeit durch laufende Lagerkosten begründet.",
      en: "Interim injunction filed at LG Hamburg based on P2B Regulation Art. 4 (mandatory 30-day prior notice) + Art. 11 (internal complaint system). Urgency demonstrated by ongoing storage costs.",
    },
    outcomeText: {
      de: "Einstweilige Verfügung nach 11 Tagen erlassen. Amazon reaktivierte Account binnen 48 Stunden, Auszahlung erfolgte. Hauptsacheklage nicht nötig.",
      en: "Interim injunction granted after 11 days. Amazon reactivated within 48 hours, payout processed. Main proceeding not required.",
    },
    legalBasis: [
      "P2B-VO Art. 4",
      "P2B-VO Art. 11",
      "§ 935 ZPO (einstw. Verfügung)",
    ],
  },
  {
    id: "paypal-180-tage-hold",
    category: "payment",
    platform: "PayPal",
    year: 2024,
    value: 14800,
    durationDays: 42,
    outcome: "out-of-court",
    client: {
      de: "Mandant T., 31 Jahre, Online-Händler",
      en: "Client T., 31 years, online merchant",
    },
    headline: {
      de: "PayPal-Konto eingefroren — 14.800 € im 180-Tage-Hold",
      en: "PayPal account frozen — €14,800 in 180-day hold",
    },
    problem: {
      de: "Konto „eingeschränkt\" mit 180-Tage-Reservebetrag von 14.800 €. PayPal-Begründung: „Verdacht auf erhöhtes Risiko\". Keine konkrete Tatsachen, kein Beschwerdeweg.",
      en: "Account 'restricted' with €14,800 reserve held for 180 days. PayPal's reasoning: 'suspected elevated risk'. No specific facts, no complaint path.",
    },
    strategy: {
      de: "Parallele Beschwerde bei der BaFin (PayPal als Zahlungs­institut nach ZAG) + Anwaltsschreiben mit Verweis auf OLG Bamberg-Entscheidung 2023 zum Reservebetrag. Auskunfts­anspruch nach § 675f BGB + § 27 ZAG.",
      en: "Parallel BaFin complaint (PayPal as ZAG payment institution) + formal letter referencing OLG Bamberg 2023 decision on reserve amounts. Disclosure claim under § 675f BGB + § 27 ZAG.",
    },
    outcomeText: {
      de: "Vollständige Auszahlung der 14.800 € nach 6 Wochen — vor Ablauf der 180 Tage. Account-Schließung mit ordnungs­gemäßer Abrechnung.",
      en: "Full payout of €14,800 after 6 weeks — before the 180-day expiry. Account closed with proper final accounting.",
    },
    legalBasis: ["§ 675f BGB", "§ 27 ZAG", "BaFin-Aufsicht"],
  },
  {
    id: "tiktok-creator-ban",
    category: "creator",
    platform: "TikTok",
    year: 2025,
    value: 38400,
    durationDays: 35,
    outcome: "adr",
    client: {
      de: "Mandantin C., 22 Jahre, Berlin (Creator, ~85k Follower)",
      en: "Client C., 22 years, Berlin (creator, ~85k followers)",
    },
    headline: {
      de: "TikTok-Permaban einer Lifestyle-Creatorin",
      en: "TikTok permaban of a lifestyle creator",
    },
    problem: {
      de: "Permanenter Account-Ban mit pauschaler „Community Guidelines\"-Begründung. Werbe­einnahmen ca. 3.200 €/Monat, mehrere Sponsoren-Verträge laufend. 12-Monats-Verlust geschätzt 38.400 €.",
      en: "Permanent account ban with vague 'Community Guidelines' reasoning. Ad revenue ~ €3,200/month, several active sponsor contracts. 12-month loss estimated at €38,400.",
    },
    strategy: {
      de: "DSA Art. 20 interne Beschwerde gefolgt von DSA Art. 21 Verfahren beim Appeals Centre Europe (Dublin). Argumentation: Statement of Reasons unzureichend, Entscheidung rein automatisiert (Art. 22 DSGVO).",
      en: "DSA Art. 20 internal complaint followed by DSA Art. 21 proceedings at Appeals Centre Europe (Dublin). Arguments: Statement of Reasons insufficient, decision fully automated (Art. 22 GDPR).",
    },
    outcomeText: {
      de: "Appeals Centre entschied zu Gunsten der Mandantin. Account innerhalb von 5 Wochen wieder­hergestellt, Reichweite zurück­gewonnen.",
      en: "Appeals Centre ruled in client's favor. Account reinstated within 5 weeks, reach recovered.",
    },
    legalBasis: ["DSA Art. 17", "DSA Art. 20", "DSA Art. 21", "DSGVO Art. 22"],
  },
  {
    id: "psn-console-ban-minor",
    category: "gaming",
    platform: "PlayStation Network",
    year: 2024,
    value: 4200,
    durationDays: 28,
    outcome: "out-of-court",
    client: {
      de: "Mandant J., 28 Jahre, München (für seinen Bruder, 16 J.)",
      en: "Client J., 28 years, Munich (for his 16-year-old brother)",
    },
    headline: {
      de: "PSN-Console-Ban nach Eltern-Chargeback",
      en: "PSN console ban after parental chargeback",
    },
    problem: {
      de: "16-jähriger Bruder hatte ohne Erlaubnis FUT-Punkte für 380 € gekauft. Eltern führten Chargeback durch — Sony reagierte mit Console-Ban (Hardware-bezogen) und Permaban des PSN-Kontos. Bibliothek von ca. 4.200 € verloren.",
      en: "16-year-old brother had purchased FUT points worth €380 without permission. Parents performed chargeback — Sony responded with console ban (hardware-tied) and permaban of PSN account. ~€4,200 library lost.",
    },
    strategy: {
      de: "§ 110 BGB (Taschen­geld­paragraph) — Käufe Minder­jähriger ohne Eltern­einwilligung sind schwebend unwirksam. Rück­buchung daher legitim — Sperre als Reaktion darauf rechts­widrig (§ 242 BGB Treu und Glauben). Anwalts­schreiben mit Frist­setzung.",
      en: "§ 110 BGB (allowance provision) — minors' purchases without parental consent are voidable. Chargeback therefore legitimate — ban in response unlawful (§ 242 BGB good faith). Formal letter with deadline.",
    },
    outcomeText: {
      de: "Console-Ban und PSN-Sperre nach 28 Tagen aufgehoben, Bibliothek vollständig wieder­hergestellt.",
      en: "Console ban and PSN suspension lifted after 28 days, library fully restored.",
    },
    legalBasis: ["§ 110 BGB", "§ 242 BGB", "DSA Art. 17"],
  },
  {
    id: "riot-vanguard-hwid",
    category: "gaming",
    platform: "Riot / Valorant",
    year: 2025,
    value: 2100,
    durationDays: 41,
    outcome: "out-of-court",
    client: {
      de: "Mandant K., 24 Jahre, Hamburg",
      en: "Client K., 24 years, Hamburg",
    },
    headline: {
      de: "Vanguard HWID-Ban auf Familien-PC",
      en: "Vanguard HWID ban on shared family PC",
    },
    problem: {
      de: "HWID-Ban traf den Familien-PC, dadurch wurden auch Mit­bewohner ausgeschlossen. Skins und Battle Pass (Elderflame-Bundle) im Wert von 2.100 € gesperrt. Riot-Position: HWID-Bans sind „permanent\".",
      en: "HWID ban hit the family PC, also excluding flatmates. Skins and Battle Pass (Elderflame bundle) worth €2,100 locked. Riot's position: HWID bans are 'permanent'.",
    },
    strategy: {
      de: "DSGVO Art. 22 — Vanguard-Erkennung ist rein automatisiert ohne menschliche Letzt­prüfung. EuGH C-634/21 (SCHUFA): solche Entscheidungen sind „erheblich beeinträchtigend\" und ohne menschliche Kontrolle rechts­widrig. Plus: Stör­erhaftung greift nicht (Mitnutzer).",
      en: "GDPR Art. 22 — Vanguard detection is fully automated without human review. ECJ C-634/21 (SCHUFA): such decisions are 'significantly affecting' and unlawful without human oversight. Plus: 'Störerhaftung' (interference liability) doesn't apply (cohabitants).",
    },
    outcomeText: {
      de: "Riot hob HWID-Ban nach 6 Wochen auf, Account wieder­hergestellt, alle Skins erhalten.",
      en: "Riot lifted HWID ban after 6 weeks, account reinstated, all skins preserved.",
    },
    legalBasis: ["DSGVO Art. 22", "EuGH C-634/21", "DSA Art. 17"],
  },
  {
    id: "youtube-channel-termination",
    category: "creator",
    platform: "YouTube / Google",
    year: 2024,
    value: 78000,
    durationDays: 9,
    outcome: "interim-injunction",
    client: {
      de: "Mandantin R. (240k Subs, ~6.500 €/Monat AdSense + Sponsoring)",
      en: "Client R. (240k subscribers, ~ €6,500/month AdSense + sponsoring)",
    },
    headline: {
      de: "YouTube-Channel-Termination einer Edu-Creatorin",
      en: "YouTube channel termination of education creator",
    },
    problem: {
      de: "Channel mit 240.000 Abonnenten plötzlich beendet. Begründung: „Wieder­holte Verstöße gegen Community-Richt­linien\" — keine konkreten Videos benannt. Einnahmen­verlust ~6.500 €/Monat. Sponsoren­verträge mit Vertrags­strafen­drohung.",
      en: "Channel with 240,000 subscribers suddenly terminated. Reason: 'repeated violations of Community Guidelines' — no specific videos cited. Revenue loss ~ €6,500/month. Sponsor contracts with penalty clauses.",
    },
    strategy: {
      de: "Eilantrag auf einstweilige Verfügung am LG Köln. Argumentation: DSA Art. 17 (Begründungs­pflicht) + Art. 22 DSGVO. Eil­bedürftigkeit über laufende Sponsoren­verträge und Reichweiten­verlust dargelegt.",
      en: "Urgent motion for interim injunction at LG Cologne. Arguments: DSA Art. 17 (statement of reasons) + Art. 22 GDPR. Urgency demonstrated through active sponsor contracts and reach loss.",
    },
    outcomeText: {
      de: "Einstweilige Verfügung nach 9 Tagen erlassen. Channel inkl. aller Videos und Abonnenten reaktiviert. Hauptsache­verfahren wegen Vergleich nicht nötig.",
      en: "Interim injunction granted after 9 days. Channel reactivated with all videos and subscribers. Main proceedings unnecessary due to settlement.",
    },
    legalBasis: ["DSA Art. 17", "DSGVO Art. 22", "OLG Dresden 4 W 577/18"],
  },
  {
    id: "ebay-seller-managed-payments",
    category: "marketplace",
    platform: "eBay",
    year: 2025,
    value: 5800,
    durationDays: 14,
    outcome: "out-of-court",
    client: {
      de: "Einzel­handel D., Sammler­zubehör (eBay Top-Rated Seller)",
      en: "Retailer D., collectibles (eBay Top-Rated Seller)",
    },
    headline: {
      de: "eBay-Verkäuferkonto-Sperre + 5.800 € Hold",
      en: "eBay seller suspension + €5,800 hold",
    },
    problem: {
      de: "Verkäufer­konto nach 6 Jahren mit Top-Rated-Status gesperrt. 5.800 € in Managed Payments einbehalten. eBay-Begründung: „Verdacht auf nicht autorisierte Konto­nutzung\" — Mandant war jedoch nachweislich der einzige Nutzer.",
      en: "Seller account suspended after 6 years with Top-Rated status. €5,800 held in Managed Payments. eBay's reasoning: 'suspected unauthorized account use' — yet client was demonstrably the sole user.",
    },
    strategy: {
      de: "Anwalts­schreiben gestützt auf BGH VIII ZR 244/10 (eBay darf nur bei wichtigem Grund sperren) und P2B-VO Art. 4 (Begründung + Beschwerde­recht). Sicherheits-Logs als Beweis: keine Fremd­zugriffe.",
      en: "Formal letter based on BGH VIII ZR 244/10 (eBay may only suspend for good cause) and P2B Regulation Art. 4 (reasoning + complaint right). Security logs as evidence: no third-party access.",
    },
    outcomeText: {
      de: "Account und Managed-Payments-Auszahlung nach 14 Tagen freigegeben. eBay übernahm anwaltliche Vertretungs­kosten.",
      en: "Account and Managed Payments payout released after 14 days. eBay covered legal representation costs.",
    },
    legalBasis: ["BGH VIII ZR 244/10", "P2B-VO Art. 4", "§ 307 BGB"],
  },
  {
    id: "roblox-minor-deletion",
    category: "gaming",
    platform: "Roblox",
    year: 2025,
    value: 1250,
    durationDays: 35,
    outcome: "out-of-court",
    client: {
      de: "Eltern für Mandant L., 12 Jahre",
      en: "Parents for Client L., 12 years",
    },
    headline: {
      de: "Roblox-Account eines Kindes ohne Anhörung gelöscht",
      en: "Roblox account of a minor deleted without hearing",
    },
    problem: {
      de: "Account eines 12-Jährigen wegen vermeintlichem „Filter-Bypass\" gelöscht — automatisierte Moderation, keine menschliche Prüfung. Limited UGC-Items (u.a. ein Dominus) und 4.500 Robux im Wert von ca. 1.250 € verloren. Zwei Jahre Spielfortschritt weg.",
      en: "12-year-old's account deleted over alleged 'filter bypass' — automated moderation, no human review. Limited UGC items (incl. a Dominus) and 4,500 Robux worth ~ €1,250 lost. Two years of progress gone.",
    },
    strategy: {
      de: "DSGVO Art. 22 + Anwendung auf Minder­jährigen-Konten besonders streng (Erwägungs­grund 38 DSGVO). Plus: § 110 BGB für Robux-Käufe. Anwalts­schreiben an Roblox Corporation in San Mateo (Verbraucher­gerichts­stand am Wohnsitz).",
      en: "GDPR Art. 22 + particularly strict application to minor's accounts (Recital 38 GDPR). Plus: § 110 BGB for Robux purchases. Formal letter to Roblox Corporation in San Mateo (consumer's home venue).",
    },
    outcomeText: {
      de: "Account und alle Items inkl. Dominus nach 5 Wochen wieder­hergestellt. Robux-Stand erhalten.",
      en: "Account and all items incl. Dominus restored after 5 weeks. Robux balance preserved.",
    },
    legalBasis: ["DSGVO Art. 22", "DSGVO Erwägungsgrund 38", "§ 110 BGB"],
  },
  {
    id: "discord-trading-server",
    category: "social",
    platform: "Discord",
    year: 2024,
    value: 14400,
    durationDays: 21,
    outcome: "out-of-court",
    client: {
      de: "Mandant M., 29 Jahre, Stuttgart (Trading-Coaching, ~1.200 zahlende Mitglieder)",
      en: "Client M., 29 years, Stuttgart (trading coaching, ~1,200 paying members)",
    },
    headline: {
      de: "Discord-Account-Disable trifft Trading-Coaching-Geschäft",
      en: "Discord account disable hits trading coaching business",
    },
    problem: {
      de: "Account deaktiviert wegen „Off-Platform Behaviour\" (Mandant hatte auf X einen Kommentar geschrieben, der Discord nicht zusagte). 12 verbundene Server, ~1.200 zahlende Coaching-Mitglieder. Monats­verlust ca. 12.000 €.",
      en: "Account disabled over 'off-platform behaviour' (client made a comment on X that Discord disliked). 12 connected servers, ~1,200 paying coaching members. Monthly loss ~ €12,000.",
    },
    strategy: {
      de: "Off-Platform-Behaviour-Klauseln nach BGH-Linie (Drittwirkung von AGB) regelmäßig unwirksam. Anwalts­schreiben mit DSA Art. 17/20 + § 307 BGB. Hinweis auf Wirtschafts­schaden + Aufforderung zur Wieder­herstellung.",
      en: "Off-platform behaviour clauses under BGH doctrine (third-party effect of ToS) regularly invalid. Formal letter with DSA Art. 17/20 + § 307 BGB. Reference to business damage + demand for reinstatement.",
    },
    outcomeText: {
      de: "Account und 8 von 12 Servern nach 3 Wochen reaktiviert. Vergleichs­zahlung wegen verbleibender 4 Server. Coaching-Programm konnte fortgesetzt werden.",
      en: "Account and 8 of 12 servers reactivated after 3 weeks. Settlement payment for remaining 4 servers. Coaching program could continue.",
    },
    legalBasis: ["BGH III ZR 179/20", "DSA Art. 17", "§ 307 BGB"],
  },
];

export const caseCategories: Record<CaseCategory, { de: string; en: string }> = {
  gaming: { de: "Gaming", en: "Gaming" },
  social: { de: "Social Media", en: "Social Media" },
  marketplace: { de: "Marktplätze", en: "Marketplaces" },
  payment: { de: "Zahlungs­dienste", en: "Payment Services" },
  creator: { de: "Creator-Plattformen", en: "Creator Platforms" },
};

export const outcomeLabels: Record<CaseOutcome, { de: string; en: string }> = {
  "out-of-court": { de: "Außer­gerichtlich", en: "Out-of-court" },
  "interim-injunction": { de: "Einstweilige Verfügung", en: "Interim injunction" },
  settlement: { de: "Vergleich", en: "Settlement" },
  adr: { de: "Streitbei­legung (ADR)", en: "Dispute resolution (ADR)" },
};

export function formatValue(value: number, locale: Locale): string {
  if (value === 0) return locale === "de" ? "—" : "—";
  return new Intl.NumberFormat(locale === "de" ? "de-DE" : "en-US", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDuration(days: number, locale: Locale): string {
  if (days < 14) {
    return locale === "de" ? `${days} Tage` : `${days} days`;
  }
  if (days <= 60) {
    const weeks = Math.round(days / 7);
    return locale === "de" ? `${weeks} Wochen` : `${weeks} weeks`;
  }
  const months = Math.round(days / 30);
  return locale === "de" ? `${months} Monate` : `${months} months`;
}
