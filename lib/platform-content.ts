import type { Locale } from "@/i18n/routing";

export interface PillarContent {
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
  };
  problems: { title: string; items: string[] };
  legal: {
    title: string;
    intro: string;
    arguments: { paragraph: string; title: string; desc: string }[];
  };
  process: { title: string; steps: { title: string; desc: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  ctaTitle: string;
}

const fortniteDe: PillarContent = {
  hero: {
    eyebrow: "Fortnite · Epic Games",
    headline: "Fortnite-Account gesperrt? Wir holen ihn zurück.",
    sub:
      "Permanent-Bann, V-Bucks-Verlust, Skin-Verlust, EasyAntiCheat-False-Positive: Epic Games muss DSA-konform begründen. Tut Epic das nicht, ist die Sperrung rechtswidrig.",
  },
  problems: {
    title: "Typische Fortnite-Sperrungen",
    items: [
      "„Cheating-Verdacht\" durch EasyAntiCheat ohne menschliche Prüfung",
      "Account-Sharing-Vorwurf bei Familiennutzung oder Fremd-IP",
      "Chargeback-bedingte Permaban nach Eltern-Rückbuchung",
      "Hardware-Ban (HWID), der ganze Familien trifft",
      "Plötzliche Sperrung wegen „verdächtiger Aktivität\" ohne Details",
      "Skin-Trading-Vorwurf trotz nur eigener Account-Nutzung",
      "Save-the-World-Lifetime-Account weg ohne Erstattung",
      "Display-Name-Sperre als Vorwand für Permanent-Bann",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "Epic Games unterliegt seit Februar 2024 dem Digital Services Act und seit 2022 den §§ 327 ff. BGB. Daraus ergeben sich konkrete Pflichten — und für Sie konkrete Ansprüche.",
    arguments: [
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Epic muss bei jeder Sperrung einen konkreten „Statement of Reasons\" liefern: Tatsachen, AGB-Klausel, automatisiert oder menschlich entschieden, Beschwerdeweg. Pauschalbegründungen wie „Verstoß gegen die EULA\" reichen nicht.",
      },
      {
        paragraph: "Art. 22 DSGVO",
        title: "Verbot rein automatisierter Entscheidungen",
        desc:
          "EasyAntiCheat trifft Bann-Entscheidungen oft ohne menschliche Prüfung. Das ist nach EuGH C-634/21 (SCHUFA) eine erheblich beeinträchtigende Einzelentscheidung — ohne menschliche Letztkontrolle rechtswidrig.",
      },
      {
        paragraph: "§§ 327 c, m, r BGB",
        title: "Digitale-Inhalte-Recht",
        desc:
          "V-Bucks, Battle Pass, gekaufte Skins sind digitale Inhalte. Verlust ohne Entschädigung verstößt gegen § 327 r BGB — Sie haben Anspruch auf Wiederherstellung oder Wertersatz.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "AGB-Kontrolle",
        desc:
          "Klauseln wie „We may terminate at any time, for any reason\" sind nach BGH III ZR 179/20 (Facebook) auf Plattformverträge übertragbar — und unwirksam, wenn keine Verfahrensgarantien vorgesehen sind.",
      },
      {
        paragraph: "§ 110 BGB",
        title: "Minderjährige & In-Game-Käufe",
        desc:
          "V-Bucks-Käufe Minderjähriger ohne Eltern-Einwilligung sind schwebend unwirksam. Eltern können zurückfordern (§ 812 BGB) — und Sperrung wegen Chargeback ist dann selbst rechtswidrig.",
      },
      {
        paragraph: "Art. 18 Brüssel-Ia-VO",
        title: "Klage am Wohnsitz",
        desc:
          "Auch gegen Epic Games International S.à r.l. (Luxemburg) und die US-Mutter klagen Sie am eigenen Wohnsitz — die US-Gerichtsstandsklausel ist gegenüber Verbrauchern unwirksam.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & DSGVO-Auskunft",
        desc:
          "Wir sichern alle relevanten Beweise (Sperrnachricht, Account-Daten, Skin-Inventar) und stellen Art. 15 DSGVO-Anfrage — Epic muss binnen 1 Monat alle internen Logs offenlegen.",
      },
      {
        title: "DSA-Beschwerde (Art. 20)",
        desc:
          "Wir reichen die interne Beschwerde DSA-konform ein. Häufig kassieren bereits hier viele Sperren — weil Epic den Statement-of-Reasons-Mangel selbst erkennt.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc:
          "Förmliches Schreiben an Epic Games International S.à r.l. mit klar bezifferten Ansprüchen und 14-Tage-Frist. Ankündigung Schadens­ersatz nach Art. 54 DSA.",
      },
      {
        title: "ADR oder Klage",
        desc:
          "Falls Epic nicht einlenkt: Verweisung an zertifizierte Out-of-Court Dispute Body (Art. 21 DSA) oder Klage am Verbraucher­wohnsitz mit Antrag auf einstweilige Verfügung.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Was kostet die Vertretung?",
        a:
          "Die Erst­einschätzung ist kostenlos. Die konkreten Honorare hängen von Verfahrensart und Streit­wert ab — wir vereinbaren transparent vor Mandats­annahme. Bei Rechtsschutz­versicherung Direkt­abrechnung.",
      },
      {
        q: "Wie lange dauert es, bis mein Account zurück ist?",
        a:
          "Außergerichtlich häufig 14–30 Tage. Bei einstweiliger Verfügung wenige Tage bis Wochen. Hauptsacheklagen 6–18 Monate — im Eilfall reicht aber meist die einstweilige Verfügung.",
      },
      {
        q: "Bekomme ich meine V-Bucks und Skins zurück?",
        a:
          "Ja, sofern der Account wiederhergestellt wird, bleiben alle Inhalte erhalten. Bei endgültigem Verlust haben Sie Anspruch auf Wertersatz nach § 327 r BGB / Art. 17 RL 2019/770.",
      },
      {
        q: "Mein Kind hat ohne Erlaubnis V-Bucks gekauft — kann ich das zurückfordern?",
        a:
          "Wenn der Kauf ohne Eltern-Einwilligung erfolgte, ist er nach § 110 BGB schwebend unwirksam — Rückforderung über § 812 BGB. Wenn Epic deshalb gesperrt hat, ist die Sperrung selbst rechtswidrig.",
      },
      {
        q: "Wir sind nicht in Deutschland — können Sie helfen?",
        a:
          "Ja. Wir vertreten EU-weit nach DSA und Brüssel-Ia. Verbraucher können am eigenen Wohnsitz klagen — wir koordinieren das mit der jeweiligen Sprachfassung der Plattform-AGB.",
      },
      {
        q: "Was, wenn ich tatsächlich gecheatet habe?",
        a:
          "Wir prüfen offen — auch dann gilt: Verhältnis­mäßigkeit. Permanent­ban bei Erstvergehen ist häufig unverhältnismäßig. Eine Verkürzung der Sperre oder Reaktivierung ist oft möglich.",
      },
    ],
  },
  ctaTitle: "Fortnite-Account weg? Wir prüfen Ihren Fall in 24 Stunden.",
};

const fortniteEn: PillarContent = {
  hero: {
    eyebrow: "Fortnite · Epic Games",
    headline: "Fortnite account banned? We'll get it back.",
    sub:
      "Permanent ban, V-Bucks loss, skin loss, EasyAntiCheat false positive: Epic Games must justify suspensions under the DSA. If they don't, the ban is unlawful.",
  },
  problems: {
    title: "Typical Fortnite suspensions",
    items: [
      "'Cheating' allegation by EasyAntiCheat without human review",
      "Account-sharing claim despite legitimate family use",
      "Chargeback-induced permaban after parental refund",
      "Hardware ban (HWID) hitting entire households",
      "Sudden ban for 'suspicious activity' without specifics",
      "Skin-trading allegation despite single-account use",
      "Save the World lifetime account gone without refund",
      "Display-name violation used as pretext for permanent ban",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "Epic Games is subject to the Digital Services Act since February 2024 and to digital-content consumer law since 2022. That gives you concrete claims.",
    arguments: [
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Epic must provide a specific statement of reasons for every suspension: facts, the ToS clause, whether the decision was automated, and the appeal route. Vague 'EULA violation' messages don't suffice.",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "Ban on solely automated decisions",
        desc:
          "EasyAntiCheat decisions are often made without human review. Following ECJ C-634/21 (SCHUFA), this counts as a significant automated decision — unlawful without human oversight.",
      },
      {
        paragraph: "§§ 327c, m, r BGB",
        title: "Digital-content consumer rights",
        desc:
          "V-Bucks, Battle Pass, purchased skins are digital content. Loss without compensation violates § 327r BGB — you have a claim to reinstatement or compensation.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "Unfair-terms control",
        desc:
          "Clauses like 'We may terminate at any time, for any reason' are caught by BGH III ZR 179/20 (Facebook) — invalid without procedural safeguards.",
      },
      {
        paragraph: "§ 110 BGB",
        title: "Minors & in-game purchases",
        desc:
          "V-Bucks purchases by minors without parental consent are voidable. Parents can claim back (§ 812 BGB) — and an Epic ban triggered by chargeback is itself unlawful.",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Sue at consumer's home court",
        desc:
          "Even against Epic Games International S.à r.l. (Luxembourg) and the US parent, you sue in your home country — US choice-of-court clauses are void against consumers.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & GDPR data request",
        desc:
          "We secure all evidence (suspension notice, account data, skin inventory) and file a GDPR Art. 15 request — Epic must disclose all internal logs within one month.",
      },
      {
        title: "DSA complaint (Art. 20)",
        desc:
          "We file the internal complaint DSA-compliant. Many bans are reversed at this stage already — Epic recognizes the missing Statement of Reasons.",
      },
      {
        title: "Formal letter with deadline",
        desc:
          "Formal letter to Epic Games International S.à r.l. with quantified claims and a 14-day deadline. Notice of damages claim under Art. 54 DSA.",
      },
      {
        title: "ADR or court action",
        desc:
          "If Epic doesn't budge: referral to a certified Out-of-Court Dispute Body (DSA Art. 21) or court action at consumer's home with interim injunction.",
      },
    ],
  },
  faq: {
    title: "Frequently asked",
    items: [
      {
        q: "What does representation cost?",
        a:
          "First assessment is free. Specific fees depend on the procedure type and value at stake — we agree transparently before engagement. Direct billing with legal-expenses insurance possible.",
      },
      {
        q: "How long until my account is back?",
        a:
          "Out-of-court typically 14–30 days. With interim injunction days to weeks. Full court action 6–18 months — but usually an interim injunction is enough.",
      },
      {
        q: "Will I get my V-Bucks and skins back?",
        a:
          "Yes — if the account is reinstated, all content remains. If permanently lost, you have a compensation claim under § 327r BGB / Art. 17 Directive 2019/770.",
      },
      {
        q: "My child bought V-Bucks without permission — can I claim back?",
        a:
          "Without parental consent, the purchase is voidable under § 110 BGB — refund claim under § 812 BGB. If Epic banned over the chargeback, the ban itself is unlawful.",
      },
      {
        q: "We're not in Germany — can you help?",
        a:
          "Yes. We represent EU-wide under DSA and Brussels Ia. Consumers may sue at home — we coordinate with the relevant language version of the platform's terms.",
      },
      {
        q: "What if I actually did cheat?",
        a:
          "We assess openly — proportionality still applies. A permanent ban for a first offence is often disproportionate. A ban reduction or reactivation is frequently possible.",
      },
    ],
  },
  ctaTitle: "Fortnite account gone? We'll review your case in 24 hours.",
};

const metaDe: PillarContent = {
  hero: {
    eyebrow: "Meta · Facebook · Instagram",
    headline: "Konto bei Meta deaktiviert? Sie haben starke Rechte.",
    sub:
      "Der BGH hat 2021 (III ZR 179/20) für Plattform­sperrungen klare Regeln gesetzt: Information, Anhörung, Neuent­scheidung. Tut Meta das nicht, ist die Sperre rechts­widrig.",
  },
  problems: {
    title: "Typische Meta-Sperrungen",
    items: [
      "„Verstoß gegen die Community-Standards\" ohne konkrete Begründung",
      "Permanente Konto-Deaktivierung ohne Vorwarnung",
      "Werbekonto gesperrt – Marketing-Investments fließen weiter ab",
      "Verlust der Reichweite (Schattenban / De-Ranking)",
      "Verifizierung (Meta Verified) revoked",
      "Marketplace-Reputation gelöscht",
      "Identitäts-Vorwürfe trotz hochgeladener Ausweise",
      "Whatsapp-Business-Account ohne Erklärung gesperrt",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "Meta ist als VLOP (Very Large Online Platform) nach Art. 33 DSA zu strengsten Pflichten verpflichtet. Hinzu kommt die etablierte BGH-Linie zu Plattform­sperrungen.",
    arguments: [
      {
        paragraph: "BGH III ZR 179/20",
        title: "Verfahrenstrias",
        desc:
          "Vor jeder Sperrung muss Meta informieren, Sie anhören und auf Basis Ihrer Stellungnahme neu entscheiden. Ohne diese Verfahrensrechte ist die Sperrung rechtswidrig — Anspruch auf Wieder­herstellung.",
      },
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Statement of Reasons mit konkreten Tatsachen, AGB-Klausel und Beschwerdeweg. Meta veröffentlicht jedes Statement of Reasons in der DSA Transparency Database — wir nutzen das als Beweismittel.",
      },
      {
        paragraph: "Art. 33 ff. DSA",
        title: "VLOP-Pflichten",
        desc:
          "Meta muss Risikobewertungen durchführen, Audits zulassen und Forschern Datenzugang gewähren. Verstöße werden mit bis zu 6 % des weltweiten Jahresumsatzes geahndet — starkes Druckmittel.",
      },
      {
        paragraph: "Art. 21 DSA",
        title: "Outside Dispute Settlement",
        desc:
          "Das Appeals Centre Europe (Dublin) ist für Meta-Beschwerden zertifiziert. Wir leiten Sie strategisch dorthin oder direkt vor Gericht.",
      },
      {
        paragraph: "Art. 22 DSGVO",
        title: "Automatisierte Entscheidung",
        desc:
          "Algorithmische Moderation ohne menschliche Letztkontrolle ist nach EuGH C-634/21 angreifbar — typisch bei automatischen Konto-Deaktivierungen.",
      },
      {
        paragraph: "Art. 82 DSGVO",
        title: "Schadensersatz",
        desc:
          "EuGH C-300/21 (Österreichische Post) erkennt auch immateriellen Schaden an. Reichweiten-Verlust, Werbekonto-Ausfall, Stress: alles ersatzfähig.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & Auskunft",
        desc:
          "Screenshots der Sperr-Meldungen, Statement-of-Reasons aus DSA Transparency DB, Reichweiten-Daten. Parallel DSGVO-Art.-15-Anfrage.",
      },
      {
        title: "Interne Beschwerde DSA Art. 20",
        desc:
          "Wir nutzen das interne Beschwerdesystem (kostenlos, 6-Monats-Frist). Bei VLOPs sehr häufig erfolgreich.",
      },
      {
        title: "Anwaltsschreiben + Appeals Centre Europe",
        desc:
          "Förmliches Schreiben mit Frist + parallel Verfahren beim Appeals Centre Europe in Dublin. Doppel­druck wirkt.",
      },
      {
        title: "Einstweilige Verfügung am Wohnsitz",
        desc:
          "Bei Eilbedürftigkeit (Wahl­kampf, Business-Account, laufende Werbe­kampagne): einstweilige Verfügung mit Antrag auf vorläufige Wieder­herstellung.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Mein Konto wurde permanent gelöscht — kann ich überhaupt noch klagen?",
        a:
          "Ja. Selbst wenn Meta die Daten gelöscht hat, bleiben Schadens­ersatz­ansprüche und Wieder­herstellungs­ansprüche bestehen. In vielen Fällen liegen die Daten noch im 30-Tage-Backup.",
      },
      {
        q: "Was, wenn Meta sagt, ich verstoße gegen die Community-Standards?",
        a:
          "Meta muss konkret benennen, welcher Beitrag, welcher Standard und warum. Ein bloßer Verweis reicht nach BGH 179/20 nicht aus — solche Sperren sind regelmäßig anfechtbar.",
      },
      {
        q: "Mein Werbekonto ist gesperrt, das schadet täglich meinem Geschäft.",
        a:
          "Das ist ein typischer Fall für die einstweilige Verfügung. Wir setzen auf Eilrechts­schutz mit Antrag auf vorläufige Wieder­herstellung — meist binnen weniger Tage entschieden.",
      },
      {
        q: "Was, wenn ich wirklich gegen die Standards verstoßen habe?",
        a:
          "Auch dann: Verhältnismäßigkeit. Permanent­sperre bei Erstvergehen ist oft unverhältnis­mäßig. Reduzierung auf Tages­sperre oder Wieder­herstellung mit Auflagen ist häufig möglich.",
      },
      {
        q: "Bekomme ich auch Schadensersatz?",
        a:
          "Bei nachweisbarem Schaden (entgangene Werbe-Auszahlungen, Reichweiten­verlust mit Business-Bezug) ja — auch immaterielle Schäden nach EuGH C-300/21.",
      },
    ],
  },
  ctaTitle: "Konto gesperrt? Wir prüfen Ihren Fall in 24 Stunden.",
};

const metaEn: PillarContent = {
  hero: {
    eyebrow: "Meta · Facebook · Instagram",
    headline: "Meta account disabled? You have strong rights.",
    sub:
      "The German Federal Court (BGH III ZR 179/20, 2021) set clear rules for platform suspensions: notice, hearing, redecision. If Meta skips them, the suspension is unlawful.",
  },
  problems: {
    title: "Typical Meta suspensions",
    items: [
      "'Community Standards violation' without specific facts",
      "Permanent account deactivation without warning",
      "Ad account locked — marketing budget keeps draining",
      "Reach loss (shadow ban / de-ranking)",
      "Meta Verified status revoked",
      "Marketplace reputation deleted",
      "Identity allegations despite uploaded ID",
      "WhatsApp Business account banned without explanation",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "Meta is a Very Large Online Platform under Art. 33 DSA — subject to the strictest obligations. On top sits the well-established BGH precedent on platform suspensions.",
    arguments: [
      {
        paragraph: "BGH III ZR 179/20",
        title: "Procedural triad",
        desc:
          "Before any suspension Meta must inform, hear you, and redecide based on your statement. Without these procedural rights the suspension is unlawful — claim for reinstatement.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Statement of Reasons with concrete facts, ToS clause and appeal route. Meta publishes every Statement of Reasons in the DSA Transparency Database — we use that as evidence.",
      },
      {
        paragraph: "DSA Art. 33 ff.",
        title: "VLOP duties",
        desc:
          "Meta must conduct risk assessments, allow audits, grant researcher access. Violations carry fines up to 6 % of global annual turnover — strong leverage.",
      },
      {
        paragraph: "DSA Art. 21",
        title: "Out-of-court settlement",
        desc:
          "The Appeals Centre Europe (Dublin) is certified for Meta complaints. We route you there strategically or directly to court.",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "Automated decision",
        desc:
          "Algorithmic moderation without human oversight is challengeable per ECJ C-634/21 — typical for automatic account deactivations.",
      },
      {
        paragraph: "GDPR Art. 82",
        title: "Damages",
        desc:
          "ECJ C-300/21 (Österreichische Post) recognizes non-material damages too. Reach loss, ad-account downtime, stress: all compensable.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & data request",
        desc:
          "Screenshots of the suspension messages, Statement of Reasons from the DSA Transparency DB, reach data. In parallel, GDPR Art. 15 request.",
      },
      {
        title: "Internal complaint DSA Art. 20",
        desc:
          "We file via the internal complaint system (free, 6-month deadline). Often successful with VLOPs.",
      },
      {
        title: "Formal letter + Appeals Centre Europe",
        desc:
          "Formal letter with deadline + parallel proceeding at Appeals Centre Europe in Dublin. Two-track pressure works.",
      },
      {
        title: "Interim injunction at home court",
        desc:
          "For urgency (campaign, business account, live ads): interim injunction with motion for provisional reinstatement.",
      },
    ],
  },
  faq: {
    title: "Frequently asked",
    items: [
      {
        q: "My account was permanently deleted — can I still sue?",
        a:
          "Yes. Even after deletion, damages and reinstatement claims survive. Often the data is still in Meta's 30-day backup.",
      },
      {
        q: "What if Meta says I violated the Community Standards?",
        a:
          "Meta must point to the specific post, the specific standard and why it applies. A bare reference doesn't suffice under BGH 179/20 — such bans are regularly challengeable.",
      },
      {
        q: "My ad account is locked — it's hurting business daily.",
        a:
          "Classic case for an interim injunction. We pursue urgent relief with a motion for provisional reinstatement — usually decided within days.",
      },
      {
        q: "What if I really did violate the standards?",
        a:
          "Proportionality still applies. Permanent ban for a first offence is often disproportionate. Reduction to a temporary ban or conditional reinstatement is frequently possible.",
      },
      {
        q: "Can I claim damages too?",
        a:
          "If you can show actual harm (lost ad revenue, reach loss with business impact) yes — including non-material damages per ECJ C-300/21.",
      },
    ],
  },
  ctaTitle: "Account suspended? We'll review your case in 24 hours.",
};

const content: Record<string, Record<Locale, PillarContent>> = {
  "Fortnite / Epic Games": { de: fortniteDe, en: fortniteEn },
  "Meta (Facebook, Instagram)": { de: metaDe, en: metaEn },
};

export function getPillarContent(
  platformName: string,
  locale: Locale,
): PillarContent | null {
  return content[platformName]?.[locale] ?? null;
}
