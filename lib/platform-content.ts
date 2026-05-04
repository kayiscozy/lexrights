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
      "Epic Games unterliegt seit Februar 2024 dem Digital Services Act und seit 2022 den §§ 327 ff. BGB. Daraus ergeben sich konkrete Pflichten - und für Sie konkrete Ansprüche.",
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
          "EasyAntiCheat trifft Bann-Entscheidungen oft ohne menschliche Prüfung. Das ist nach EuGH C-634/21 (SCHUFA) eine erheblich beeinträchtigende Einzelentscheidung - ohne menschliche Letztkontrolle rechtswidrig.",
      },
      {
        paragraph: "§§ 327 c, m, r BGB",
        title: "Digitale-Inhalte-Recht",
        desc:
          "V-Bucks, Battle Pass, gekaufte Skins sind digitale Inhalte. Verlust ohne Entschädigung verstößt gegen § 327 r BGB - Sie haben Anspruch auf Wiederherstellung oder Wertersatz.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "AGB-Kontrolle",
        desc:
          "Klauseln wie „We may terminate at any time, for any reason\" sind nach BGH III ZR 179/20 (Facebook) auf Plattformverträge übertragbar - und unwirksam, wenn keine Verfahrensgarantien vorgesehen sind.",
      },
      {
        paragraph: "§ 110 BGB",
        title: "Minderjährige & In-Game-Käufe",
        desc:
          "V-Bucks-Käufe Minderjähriger ohne Eltern-Einwilligung sind schwebend unwirksam. Eltern können zurückfordern (§ 812 BGB) - und Sperrung wegen Chargeback ist dann selbst rechtswidrig.",
      },
      {
        paragraph: "Art. 18 Brüssel-Ia-VO",
        title: "Klage am Wohnsitz",
        desc:
          "Auch gegen Epic Games International S.à r.l. (Luxemburg) und die US-Mutter klagen Sie am eigenen Wohnsitz - die US-Gerichtsstandsklausel ist gegenüber Verbrauchern unwirksam.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & DSGVO-Auskunft",
        desc:
          "Wir sichern alle relevanten Beweise (Sperrnachricht, Account-Daten, Skin-Inventar) und stellen Art. 15 DSGVO-Anfrage - Epic muss binnen 1 Monat alle internen Logs offenlegen.",
      },
      {
        title: "DSA-Beschwerde (Art. 20)",
        desc:
          "Wir reichen die interne Beschwerde DSA-konform ein. Häufig kassieren bereits hier viele Sperren - weil Epic den Statement-of-Reasons-Mangel selbst erkennt.",
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
          "Die Erst­einschätzung ist kostenlos. Die konkreten Honorare hängen von Verfahrensart und Streit­wert ab - wir vereinbaren transparent vor Mandats­annahme. Bei Rechtsschutz­versicherung Direkt­abrechnung.",
      },
      {
        q: "Wie lange dauert es, bis mein Account zurück ist?",
        a:
          "Außergerichtlich häufig 14–30 Tage. Bei einstweiliger Verfügung wenige Tage bis Wochen. Hauptsacheklagen 6–18 Monate - im Eilfall reicht aber meist die einstweilige Verfügung.",
      },
      {
        q: "Bekomme ich meine V-Bucks und Skins zurück?",
        a:
          "Ja, sofern der Account wiederhergestellt wird, bleiben alle Inhalte erhalten. Bei endgültigem Verlust haben Sie Anspruch auf Wertersatz nach § 327 r BGB / Art. 17 RL 2019/770.",
      },
      {
        q: "Mein Kind hat ohne Erlaubnis V-Bucks gekauft - kann ich das zurückfordern?",
        a:
          "Wenn der Kauf ohne Eltern-Einwilligung erfolgte, ist er nach § 110 BGB schwebend unwirksam - Rückforderung über § 812 BGB. Wenn Epic deshalb gesperrt hat, ist die Sperrung selbst rechtswidrig.",
      },
      {
        q: "Wir sind nicht in Deutschland - können Sie helfen?",
        a:
          "Ja. Wir vertreten EU-weit nach DSA und Brüssel-Ia. Verbraucher können am eigenen Wohnsitz klagen - wir koordinieren das mit der jeweiligen Sprachfassung der Plattform-AGB.",
      },
      {
        q: "Was, wenn ich tatsächlich gecheatet habe?",
        a:
          "Wir prüfen offen - auch dann gilt: Verhältnis­mäßigkeit. Permanent­ban bei Erstvergehen ist häufig unverhältnismäßig. Eine Verkürzung der Sperre oder Reaktivierung ist oft möglich.",
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
          "EasyAntiCheat decisions are often made without human review. Following ECJ C-634/21 (SCHUFA), this counts as a significant automated decision - unlawful without human oversight.",
      },
      {
        paragraph: "§§ 327c, m, r BGB",
        title: "Digital-content consumer rights",
        desc:
          "V-Bucks, Battle Pass, purchased skins are digital content. Loss without compensation violates § 327r BGB - you have a claim to reinstatement or compensation.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "Unfair-terms control",
        desc:
          "Clauses like 'We may terminate at any time, for any reason' are caught by BGH III ZR 179/20 (Facebook) - invalid without procedural safeguards.",
      },
      {
        paragraph: "§ 110 BGB",
        title: "Minors & in-game purchases",
        desc:
          "V-Bucks purchases by minors without parental consent are voidable. Parents can claim back (§ 812 BGB) - and an Epic ban triggered by chargeback is itself unlawful.",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Sue at consumer's home court",
        desc:
          "Even against Epic Games International S.à r.l. (Luxembourg) and the US parent, you sue in your home country - US choice-of-court clauses are void against consumers.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & GDPR data request",
        desc:
          "We secure all evidence (suspension notice, account data, skin inventory) and file a GDPR Art. 15 request - Epic must disclose all internal logs within one month.",
      },
      {
        title: "DSA complaint (Art. 20)",
        desc:
          "We file the internal complaint DSA-compliant. Many bans are reversed at this stage already - Epic recognizes the missing Statement of Reasons.",
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
          "First assessment is free. Specific fees depend on the procedure type and value at stake - we agree transparently before engagement. Direct billing with legal-expenses insurance possible.",
      },
      {
        q: "How long until my account is back?",
        a:
          "Out-of-court typically 14–30 days. With interim injunction days to weeks. Full court action 6–18 months - but usually an interim injunction is enough.",
      },
      {
        q: "Will I get my V-Bucks and skins back?",
        a:
          "Yes - if the account is reinstated, all content remains. If permanently lost, you have a compensation claim under § 327r BGB / Art. 17 Directive 2019/770.",
      },
      {
        q: "My child bought V-Bucks without permission - can I claim back?",
        a:
          "Without parental consent, the purchase is voidable under § 110 BGB - refund claim under § 812 BGB. If Epic banned over the chargeback, the ban itself is unlawful.",
      },
      {
        q: "We're not in Germany - can you help?",
        a:
          "Yes. We represent EU-wide under DSA and Brussels Ia. Consumers may sue at home - we coordinate with the relevant language version of the platform's terms.",
      },
      {
        q: "What if I actually did cheat?",
        a:
          "We assess openly - proportionality still applies. A permanent ban for a first offence is often disproportionate. A ban reduction or reactivation is frequently possible.",
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
          "Vor jeder Sperrung muss Meta informieren, Sie anhören und auf Basis Ihrer Stellungnahme neu entscheiden. Ohne diese Verfahrensrechte ist die Sperrung rechtswidrig - Anspruch auf Wieder­herstellung.",
      },
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Statement of Reasons mit konkreten Tatsachen, AGB-Klausel und Beschwerdeweg. Meta veröffentlicht jedes Statement of Reasons in der DSA Transparency Database - wir nutzen das als Beweismittel.",
      },
      {
        paragraph: "Art. 33 ff. DSA",
        title: "VLOP-Pflichten",
        desc:
          "Meta muss Risikobewertungen durchführen, Audits zulassen und Forschern Datenzugang gewähren. Verstöße werden mit bis zu 6 % des weltweiten Jahresumsatzes geahndet - starkes Druckmittel.",
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
          "Algorithmische Moderation ohne menschliche Letztkontrolle ist nach EuGH C-634/21 angreifbar - typisch bei automatischen Konto-Deaktivierungen.",
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
        q: "Mein Konto wurde permanent gelöscht - kann ich überhaupt noch klagen?",
        a:
          "Ja. Selbst wenn Meta die Daten gelöscht hat, bleiben Schadens­ersatz­ansprüche und Wieder­herstellungs­ansprüche bestehen. In vielen Fällen liegen die Daten noch im 30-Tage-Backup.",
      },
      {
        q: "Was, wenn Meta sagt, ich verstoße gegen die Community-Standards?",
        a:
          "Meta muss konkret benennen, welcher Beitrag, welcher Standard und warum. Ein bloßer Verweis reicht nach BGH 179/20 nicht aus - solche Sperren sind regelmäßig anfechtbar.",
      },
      {
        q: "Mein Werbekonto ist gesperrt, das schadet täglich meinem Geschäft.",
        a:
          "Das ist ein typischer Fall für die einstweilige Verfügung. Wir setzen auf Eilrechts­schutz mit Antrag auf vorläufige Wieder­herstellung - meist binnen weniger Tage entschieden.",
      },
      {
        q: "Was, wenn ich wirklich gegen die Standards verstoßen habe?",
        a:
          "Auch dann: Verhältnismäßigkeit. Permanent­sperre bei Erstvergehen ist oft unverhältnis­mäßig. Reduzierung auf Tages­sperre oder Wieder­herstellung mit Auflagen ist häufig möglich.",
      },
      {
        q: "Bekomme ich auch Schadensersatz?",
        a:
          "Bei nachweisbarem Schaden (entgangene Werbe-Auszahlungen, Reichweiten­verlust mit Business-Bezug) ja - auch immaterielle Schäden nach EuGH C-300/21.",
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
      "Ad account locked - marketing budget keeps draining",
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
      "Meta is a Very Large Online Platform under Art. 33 DSA - subject to the strictest obligations. On top sits the well-established BGH precedent on platform suspensions.",
    arguments: [
      {
        paragraph: "BGH III ZR 179/20",
        title: "Procedural triad",
        desc:
          "Before any suspension Meta must inform, hear you, and redecide based on your statement. Without these procedural rights the suspension is unlawful - claim for reinstatement.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Statement of Reasons with concrete facts, ToS clause and appeal route. Meta publishes every Statement of Reasons in the DSA Transparency Database - we use that as evidence.",
      },
      {
        paragraph: "DSA Art. 33 ff.",
        title: "VLOP duties",
        desc:
          "Meta must conduct risk assessments, allow audits, grant researcher access. Violations carry fines up to 6 % of global annual turnover - strong leverage.",
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
          "Algorithmic moderation without human oversight is challengeable per ECJ C-634/21 - typical for automatic account deactivations.",
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
        q: "My account was permanently deleted - can I still sue?",
        a:
          "Yes. Even after deletion, damages and reinstatement claims survive. Often the data is still in Meta's 30-day backup.",
      },
      {
        q: "What if Meta says I violated the Community Standards?",
        a:
          "Meta must point to the specific post, the specific standard and why it applies. A bare reference doesn't suffice under BGH 179/20 - such bans are regularly challengeable.",
      },
      {
        q: "My ad account is locked - it's hurting business daily.",
        a:
          "Classic case for an interim injunction. We pursue urgent relief with a motion for provisional reinstatement - usually decided within days.",
      },
      {
        q: "What if I really did violate the standards?",
        a:
          "Proportionality still applies. Permanent ban for a first offence is often disproportionate. Reduction to a temporary ban or conditional reinstatement is frequently possible.",
      },
      {
        q: "Can I claim damages too?",
        a:
          "If you can show actual harm (lost ad revenue, reach loss with business impact) yes - including non-material damages per ECJ C-300/21.",
      },
    ],
  },
  ctaTitle: "Account suspended? We'll review your case in 24 hours.",
};

/* ════════════════════════════════════════════════════════════════════
   TIKTOK
   ════════════════════════════════════════════════════════════════════ */
const tiktokDe: PillarContent = {
  hero: {
    eyebrow: "TikTok",
    headline: "TikTok-Account gesperrt? Der DSA gibt Ihnen klare Rechte.",
    sub: "Permanent-Ban, Shadow-Ban, Live-Sperre. TikTok ist als Very Large Online Platform (VLOP) seit 2023 strengsten DSA-Pflichten unterworfen — pauschale Begründungen sind seit Februar 2024 nicht mehr zulässig.",
  },
  problems: {
    title: "Typische TikTok-Sperrungen",
    items: [
      "Permanent-Account-Ban mit pauschaler „Community Guidelines\"-Begründung",
      "Shadow-Ban — Ausschluss aus der For-You-Page ohne Information",
      "Live-Stream-Sperre für Creator mit Reichweite und Werbedeals",
      "Demonetarisierung — Creator-Fund-Ausschluss, Coin-Sperre",
      "Account-Sperre nach Urheberrechts-Strikes (Sounds, Musik)",
      "Falsche Identifikation als Bot oder Fake-Account",
      "Sperre wegen „Misinformation\" ohne konkreten Inhaltsbezug",
      "Off-Platform-Behaviour-Vorwürfe (Verhalten auf anderen Plattformen)",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro: "TikTok ist VLOP nach Art. 33 DSA. Damit gelten die strengsten Pflichten — und Sie haben starke Rechte.",
    arguments: [
      {
        paragraph: "Art. 17 DSA",
        title: "Statement of Reasons",
        desc: "TikTok muss bei jeder Sperre konkrete Tatsachen, die genaue AGB-Klausel und den Beschwerde­weg nennen. „Verstoß gegen die Community-Richt­linien\" ohne Beleg reicht nicht — TikTok publiziert jedes Statement of Reasons in der DSA Transparency Database, wir nutzen das als Beweismittel.",
      },
      {
        paragraph: "Art. 20 DSA",
        title: "Internes Beschwerdesystem",
        desc: "TikTok muss ein kostenloses, mindestens 6-monatiges internes Beschwerdesystem bereitstellen. Die Beschwerde darf nicht ausschließlich automatisiert entschieden werden — qualifiziertes Personal muss prüfen.",
      },
      {
        paragraph: "Art. 21 DSA",
        title: "Appeals Centre Europe",
        desc: "Das Appeals Centre Europe (Dublin) ist von Coimisiún na Meán für TikTok-Streit­fälle zertifiziert. Außer­gerichtliche Streit­beilegung mit hoher faktischer Bindung — TikTok muss in good faith kooperieren.",
      },
      {
        paragraph: "DSGVO Art. 22",
        title: "Verbot rein automatisierter Entscheidungen",
        desc: "Algorithmische Moderation ohne menschliche Letztkontrolle ist nach EuGH C-634/21 (SCHUFA) eine erheblich beeinträchtigende Einzelentscheidung — und damit rechtswidrig.",
      },
      {
        paragraph: "Art. 33–37 DSA",
        title: "VLOP-Pflichten",
        desc: "Risiko­bewertungen, unabhängige Audits, Forscher­zugang. Verstöße werden mit bis zu 6 % des weltweiten Jahres­umsatzes geahndet — starkes Druckmittel.",
      },
      {
        paragraph: "DSGVO Art. 82",
        title: "Schadensersatz",
        desc: "EuGH C-300/21 (Österreichische Post) erkennt auch immateriellen Schaden. Reichweiten­verlust, Werbe-Ausfall, Stress: alles ersatz­fähig.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & Statement of Reasons",
        desc: "Screenshots der Sperre, Statement-of-Reasons aus der DSA Transparency Database abrufen, Reichweiten-Daten sichern. Parallel DSGVO-Art.-15-Auskunft.",
      },
      {
        title: "Interne Beschwerde DSA Art. 20",
        desc: "Wir reichen die DSA-konforme interne Beschwerde ein. Bei VLOPs sehr häufig erfolgreich, weil TikTok den Statement-of-Reasons-Mangel erkennt.",
      },
      {
        title: "Anwaltsschreiben + Appeals Centre Europe",
        desc: "Förmliches Schreiben an TikTok Technology Limited (Dublin) mit Frist + parallel Verfahren beim Appeals Centre Europe. Doppel­druck wirkt.",
      },
      {
        title: "Klage am Wohnsitz",
        desc: "Verbraucher-Gerichts­stand am Wohnsitz nach Brüssel-Ia Art. 18, einstweilige Verfügung bei Eilbedürftigkeit (laufende Werbedeals, Sponsorings).",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Mein TikTok-Account ist permanent gebannt — was kann ich tun?",
        a: "Erste Maßnahme: Statement of Reasons anfordern, DSGVO-Auskunft stellen. Dann interne Beschwerde nach DSA Art. 20. In den meisten Fällen reicht ein gut begründetes Anwalts­schreiben — TikTok lenkt häufig ein.",
      },
      {
        q: "Was ist ein „Shadow-Ban\" — und ist das rechtlich angreifbar?",
        a: "Shadow-Ban = Ausschluss aus der For-You-Page ohne Information. Nach DSA Art. 17 ist genau das rechts­widrig — jede Reichweiten-Beschränkung muss begründet sein. Ohne Begründung haben Sie Anspruch auf Wieder­herstellung.",
      },
      {
        q: "Ich bin Creator und habe Sponsoren­verträge — was kann ich an Schadens­ersatz fordern?",
        a: "Entgangene Werbe­auszahlungen, verlorene Sponsoring-Einnahmen, ggf. Vertrags­strafen aus Sponsoren­verträgen. Plus immaterielle Schäden nach Art. 82 DSGVO. Wir berechnen den Streit­wert konkret nach Ihrer 12-Monats-Historie.",
      },
      {
        q: "Wie lange dauert das Verfahren?",
        a: "Außer­gerichtlich häufig 14–35 Tage. Bei einstweiliger Verfügung wenige Tage. Appeals-Centre-Verfahren typisch 4–8 Wochen. Bei Eilbedürftigkeit (Wahlkampf, Live-Event) sofortige einstweilige Verfügung.",
      },
      {
        q: "Was, wenn TikTok behauptet, ich hätte gegen Urheberrecht verstoßen?",
        a: "Die meisten Strikes basieren auf Content-ID — automatische Erkennung mit hoher Fehler­rate. Bei berechtigter Nutzung (Fair Use, Lizenz, Ihr eigener Content) ist die Sperre rechts­widrig. Wir prüfen Ihre Lizenzen und legen Beweise vor.",
      },
      {
        q: "Kann TikTok mich für Aktivitäten auf anderen Plattformen sperren?",
        a: "„Off-Platform Behaviour\"-Klauseln sind in TikTok-AGB enthalten — aber nach BGH-Linie (mittelbare Drittwirkung) regelmäßig unwirksam. Verhalten außerhalb der Plattform rechtfertigt fast nie eine Sperre.",
      },
    ],
  },
  ctaTitle: "TikTok-Account weg? Wir prüfen Ihren Fall in 24 Stunden.",
};

const tiktokEn: PillarContent = {
  hero: {
    eyebrow: "TikTok",
    headline: "TikTok account suspended? The DSA gives you clear rights.",
    sub: "Permanent ban, shadow ban, live restriction. TikTok is a Very Large Online Platform (VLOP) since 2023 — subject to the strictest DSA obligations. Vague reasons no longer suffice since February 2024.",
  },
  problems: {
    title: "Typical TikTok suspensions",
    items: [
      "Permanent account ban with vague 'Community Guidelines' reasoning",
      "Shadow ban — For-You-Page exclusion without notice",
      "Live-stream restriction for creators with reach and brand deals",
      "Demonetization — Creator Fund exclusion, coin restriction",
      "Account suspension after copyright strikes (sounds, music)",
      "False bot or fake-account identification",
      "'Misinformation' suspension without concrete content reference",
      "Off-platform behaviour allegations (conduct on other platforms)",
    ],
  },
  legal: {
    title: "Legal levers",
    intro: "TikTok is a VLOP under DSA Art. 33. The strictest obligations apply — and you have strong rights.",
    arguments: [
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc: "TikTok must provide concrete facts, the specific ToS clause and appeal route for every suspension. 'Community guidelines violation' without proof is insufficient — TikTok publishes every Statement of Reasons in the DSA Transparency Database, which we use as evidence.",
      },
      {
        paragraph: "DSA Art. 20",
        title: "Internal complaint system",
        desc: "TikTok must provide a free internal complaint system available for at least 6 months. Decisions cannot be made by automated means alone — qualified personnel must review.",
      },
      {
        paragraph: "DSA Art. 21",
        title: "Appeals Centre Europe",
        desc: "The Appeals Centre Europe (Dublin) is certified by Coimisiún na Meán for TikTok disputes. Out-of-court resolution with strong factual binding — TikTok must engage in good faith.",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "Ban on solely automated decisions",
        desc: "Algorithmic moderation without human oversight is, per ECJ C-634/21 (SCHUFA), a significantly affecting decision — and unlawful.",
      },
      {
        paragraph: "DSA Art. 33–37",
        title: "VLOP duties",
        desc: "Risk assessments, independent audits, researcher access. Violations carry fines up to 6 % of global annual turnover — strong leverage.",
      },
      {
        paragraph: "GDPR Art. 82",
        title: "Damages",
        desc: "ECJ C-300/21 (Österreichische Post) recognizes non-material damages too. Reach loss, ad downtime, stress: all compensable.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & Statement of Reasons",
        desc: "Screenshots of the suspension, Statement of Reasons from the DSA Transparency Database, reach data secured. In parallel, GDPR Art. 15 disclosure request.",
      },
      {
        title: "Internal complaint DSA Art. 20",
        desc: "We file the DSA-compliant internal complaint. Often successful with VLOPs — TikTok recognizes the Statement-of-Reasons defect.",
      },
      {
        title: "Formal letter + Appeals Centre Europe",
        desc: "Formal letter to TikTok Technology Limited (Dublin) with deadline + parallel proceeding at Appeals Centre Europe. Two-track pressure works.",
      },
      {
        title: "Court action at consumer's home",
        desc: "Consumer's home venue under Brussels Ia Art. 18, interim injunction for urgency (live brand deals, sponsorships).",
      },
    ],
  },
  faq: {
    title: "Frequently asked",
    items: [
      {
        q: "My TikTok account is permanently banned — what can I do?",
        a: "First step: request Statement of Reasons, file GDPR data request. Then internal complaint under DSA Art. 20. In most cases a well-founded formal letter is enough — TikTok often relents.",
      },
      {
        q: "What is a shadow ban — and is it legally challengeable?",
        a: "Shadow ban = exclusion from the For-You-Page without notice. Under DSA Art. 17 this is precisely what's unlawful — every reach restriction must be reasoned. Without reason you have a claim to reinstatement.",
      },
      {
        q: "I'm a creator with sponsor contracts — what damages can I claim?",
        a: "Lost ad payouts, lost sponsorship revenue, possible penalty clauses from sponsor contracts. Plus non-material damages under GDPR Art. 82. We calculate the value at stake based on your 12-month history.",
      },
      {
        q: "How long does the procedure take?",
        a: "Out-of-court typically 14–35 days. With interim injunction days. Appeals Centre proceedings typically 4–8 weeks. For urgency (campaign, live event) immediate interim injunction.",
      },
      {
        q: "What if TikTok claims a copyright violation?",
        a: "Most strikes are based on Content ID — automated detection with high error rates. For legitimate use (Fair Use, license, your own content) the suspension is unlawful. We review your licenses and present evidence.",
      },
      {
        q: "Can TikTok suspend me for activity on other platforms?",
        a: "Off-Platform-Behaviour clauses are in TikTok's ToS — but per BGH doctrine (third-party effect of ToS) regularly invalid. Conduct outside the platform almost never justifies suspension.",
      },
    ],
  },
  ctaTitle: "TikTok account gone? We'll review your case in 24 hours.",
};

/* ════════════════════════════════════════════════════════════════════
   STEAM / VALVE
   ════════════════════════════════════════════════════════════════════ */
const steamDe: PillarContent = {
  hero: {
    eyebrow: "Steam · Valve",
    headline: "Steam-Account gesperrt? Klage am Wohnsitz möglich.",
    sub: "VAC-Bann, Trade-Ban, Community-Ban: Valves Position „Bans werden nie aufgehoben\" hält der deutschen Rechtslage nicht stand. Wir setzen Inventarwerte und Account-Wieder­herstellung durch.",
  },
  problems: {
    title: "Typische Steam-Sperrungen",
    items: [
      "VAC-Ban auf einem Spiel (z. B. CS2) — angeblich Cheating, oft False Positive",
      "Game-Ban durch Entwickler — keine Beweisofferte",
      "Trade-Ban — Inventar­transfers blockiert, Skins nicht verkäuflich",
      "Community-Ban — Forum, Workshop, Gruppen-Zugriff weg",
      "Vollständige Account-Sperre nach Chargeback durch Eltern",
      "Verlust 5-stelliger CS2-Inventare (Knives, Souvenir AWPs, Stickers)",
      "Sperre wegen Account-Sharing oder fremder IP",
      "Region-Lock-Sperren bei VPN-Nutzung",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro: "Valve sitzt in Bellevue (USA) — aber Verbraucher in der EU können am eigenen Wohnsitz klagen. Die deutschen Maßstäbe an AGB sind streng.",
    arguments: [
      {
        paragraph: "§ 307 BGB",
        title: "AGB-Kontrolle",
        desc: "„VAC-Bans are final\" — solche Klauseln sind nach § 307 Abs. 2 BGB unwirksam, weil sie wesentliche Vertrags­pflichten aushöhlen. Anti-Cheat-Bann ohne Anhörung ist intransparent (§ 307 Abs. 1 S. 2 BGB).",
      },
      {
        paragraph: "Brüssel-Ia Art. 18",
        title: "Verbrauchergerichtsstand am Wohnsitz",
        desc: "Trotz US-Sitz von Valve können Sie am deutschen Wohnsitz klagen. EuGH C-585/08 (Pammer/Alpenhof): Steam richtet sich klar an EU-Verbraucher (deutsche Sprache, EUR-Preise, EU-Zahlungs­methoden).",
      },
      {
        paragraph: "Rom-I Art. 6",
        title: "Schutzland-Recht greift",
        desc: "Die US-Rechtswahlklausel im Steam Subscriber Agreement wird durch zwingendes deutsches Verbraucher­schutzrecht überlagert. EuGH C-191/15 (VKI/Amazon): Solche Klauseln sind intransparent, wenn sie nicht auf zwingende Schutz­rechte hinweisen.",
      },
      {
        paragraph: "§§ 327ff BGB",
        title: "Digitale-Inhalte-Recht",
        desc: "Skins, Stickers, gekaufte Spiele = digitale Inhalte. Verlust ohne Entschädigung verstößt gegen § 327r BGB. Anspruch auf Wiederherstellung oder Wertersatz nach Markt­preis (Buff163, dmarket).",
      },
      {
        paragraph: "DSGVO Art. 22",
        title: "VAC = automatisierte Entscheidung",
        desc: "Valve Anti-Cheat trifft Bann-Entscheidungen ohne menschliche Letzt­prüfung. Nach EuGH C-634/21 ist das eine erheblich beeinträchtigende Einzel­entscheidung — ohne menschliche Kontrolle rechts­widrig.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Schadensersatz",
        desc: "Bei dauerhaftem Inventar­verlust: Wertersatz zum Markt­wert (Buff163, externe Marktplätze). Bei CS2-Knives oder seltenen Souvenir-AWPs typisch 5-stellig.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Inventarbewertung & Beweissicherung",
        desc: "Steam-Inventar mit Markt­preisen (Buff163, dmarket) bewerten. Sperr­nachricht, Trade-Historie, Käufe als Belege sichern.",
      },
      {
        title: "DSGVO-Auskunft & Anwaltsschreiben",
        desc: "Art. 15 DSGVO zwingt Valve zur Offen­legung der Bann-Logik. Anwalts­schreiben mit Frist­setzung und Verweis auf § 307 BGB + Brüssel-Ia.",
      },
      {
        title: "Klage am Wohnsitz",
        desc: "Bei Nichtreaktion: Klage an Ihrem Wohnsitz­gericht (LG / AG je nach Streitwert). Die US-Forum-Selection-Clause greift gegenüber Verbrauchern nicht.",
      },
      {
        title: "Vergleich oder Wertersatz",
        desc: "Häufig Vergleich mit Wert­ersatz für Inventar (typisch 60–80 % des Markt­werts). Hauptsache­klage selten nötig.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Steam sagt: VAC-Bans werden nie aufgehoben — stimmt das?",
        a: "Nein, das ist eine pauschale Behauptung, die der deutschen Rechts­lage nicht standhält. Die Klausel ist nach § 307 BGB unwirksam. Auch wenn der Account selbst gesperrt bleibt: Sie haben Anspruch auf Wert­ersatz für das gesperrte Inventar.",
      },
      {
        q: "Kann ich Valve in Deutschland verklagen?",
        a: "Ja. Verbraucher klagen am eigenen Wohnsitz nach Brüssel-Ia Art. 18 — auch gegen Unter­nehmen außerhalb der EU. Steam richtet seine Tätigkeit auf Deutschland aus (Sprache, Währung, EU-Zahlung), das genügt nach EuGH-Recht­sprechung.",
      },
      {
        q: "Wie hoch ist der typische Streitwert?",
        a: "Das hängt vom Inventar ab. CS2-Inventare mit Knife oder Souvenir-AWP häufig 5-stellig (Buff163-Markt­preis). Plus gekaufte Spiele-Bibliothek. Bei langen Steam-Konten (10+ Jahre) sind 4-stellige Streit­werte üblich.",
      },
      {
        q: "Ich habe einen False Positive — wie beweise ich das?",
        a: "Über DSGVO Art. 15 erzwingen wir Valves interne VAC-Logs. Plus: Hardware/Software-Beweise (Screenshots, Drittanbieter-Software wie MSI Afterburner, die fälschlich geflagt wurden). Die Beweis­last liegt bei Valve.",
      },
      {
        q: "Was ist mit gekauften Spielen — bekomme ich Geld zurück?",
        a: "Ja. Spiele in Steam-Bibliotheken sind digitale Inhalte nach §§ 327 ff. BGB. Bei dauerhaftem Verlust haben Sie Anspruch auf Rückerstattung — bei langen Steam-Konten oft 4-stellig.",
      },
      {
        q: "Wie lange dauert ein Verfahren gegen Valve?",
        a: "Außer­gerichtlich: 30–90 Tage (Valve reagiert oft erst nach Klage­androhung). Mit Klage 6–18 Monate. Vergleiche kommen häufig zustande, bevor Hauptsache­urteil ergeht.",
      },
    ],
  },
  ctaTitle: "Steam-Account oder Inventar verloren? Wir prüfen Ihren Fall in 24 Stunden.",
};

const steamEn: PillarContent = {
  hero: {
    eyebrow: "Steam · Valve",
    headline: "Steam account banned? File at your home court.",
    sub: "VAC ban, trade ban, community ban: Valve's 'bans are never lifted' position doesn't hold against German consumer law. We enforce inventory value and account reinstatement.",
  },
  problems: {
    title: "Typical Steam suspensions",
    items: [
      "VAC ban on one game (e.g. CS2) — alleged cheating, often false positive",
      "Game ban by developer — no evidence offered",
      "Trade ban — inventory transfers blocked, skins unsellable",
      "Community ban — forum, workshop, group access removed",
      "Full account suspension after parental chargeback",
      "5-figure CS2 inventory loss (Knives, Souvenir AWPs, Stickers)",
      "Suspension over account sharing or foreign IP",
      "Region-lock blocks for VPN usage",
    ],
  },
  legal: {
    title: "Legal levers",
    intro: "Valve is in Bellevue (USA) — but EU consumers may sue at their home venue. German ToS standards are strict.",
    arguments: [
      {
        paragraph: "§ 307 BGB",
        title: "Unfair-terms control",
        desc: "'VAC bans are final' — such clauses are invalid under § 307(2) BGB because they hollow out essential contract duties. Anti-cheat bans without hearing are intransparent (§ 307(1) sentence 2 BGB).",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Consumer's home venue",
        desc: "Despite Valve's US seat, you may sue at your German home court. ECJ C-585/08 (Pammer/Alpenhof): Steam clearly targets EU consumers (German language, EUR pricing, EU payment methods).",
      },
      {
        paragraph: "Rome I Art. 6",
        title: "Protection-country law applies",
        desc: "The US choice-of-law clause in the Steam Subscriber Agreement is overridden by mandatory German consumer protection. ECJ C-191/15 (VKI/Amazon): such clauses are intransparent if they fail to point to mandatory protective rights.",
      },
      {
        paragraph: "§§ 327 et seq. BGB",
        title: "Digital-content consumer rights",
        desc: "Skins, stickers, purchased games = digital content. Loss without compensation violates § 327r BGB. Claim for reinstatement or compensation at market value (Buff163, dmarket).",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "VAC = automated decision",
        desc: "Valve Anti-Cheat decides bans without human oversight. Per ECJ C-634/21 this is a significantly affecting decision — unlawful without human control.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Damages",
        desc: "For permanent inventory loss: compensation at market value (Buff163, external marketplaces). CS2 knives or rare Souvenir AWPs typically 5-figure.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Inventory valuation & evidence",
        desc: "Value Steam inventory at market prices (Buff163, dmarket). Secure suspension notice, trade history and purchases as evidence.",
      },
      {
        title: "GDPR request & formal letter",
        desc: "GDPR Art. 15 forces Valve to disclose ban logic. Formal letter with deadline citing § 307 BGB + Brussels Ia.",
      },
      {
        title: "Court action at home",
        desc: "If no response: file at your home court (LG/AG depending on value). The US forum-selection clause does not bind consumers.",
      },
      {
        title: "Settlement or compensation",
        desc: "Frequently settled with inventory compensation (typically 60–80 % of market value). Main proceedings rarely needed.",
      },
    ],
  },
  faq: {
    title: "Frequently asked",
    items: [
      {
        q: "Steam says VAC bans are never lifted — is that true?",
        a: "No, that's a blanket assertion that doesn't hold under German law. The clause is invalid under § 307 BGB. Even if the account stays suspended: you have a claim for compensation for the locked inventory.",
      },
      {
        q: "Can I sue Valve in Germany?",
        a: "Yes. Consumers sue at their home venue under Brussels Ia Art. 18 — even against non-EU companies. Steam targets Germany (language, currency, EU payment), which suffices per ECJ case law.",
      },
      {
        q: "What's a typical value at stake?",
        a: "Depends on inventory. CS2 inventories with knife or Souvenir AWP often 5-figure (Buff163 market price). Plus purchased game library. For long Steam accounts (10+ years), 4-figure values are common.",
      },
      {
        q: "I have a false positive — how do I prove it?",
        a: "Through GDPR Art. 15 we force Valve's internal VAC logs. Plus: hardware/software evidence (screenshots, third-party tools like MSI Afterburner that have been falsely flagged). Burden of proof is on Valve.",
      },
      {
        q: "What about purchased games — do I get refunded?",
        a: "Yes. Games in Steam libraries are digital content under §§ 327 et seq. BGB. For permanent loss you have a refund claim — for long Steam accounts often 4-figure.",
      },
      {
        q: "How long does a Valve case take?",
        a: "Out-of-court: 30–90 days (Valve often only responds after court threat). With litigation 6–18 months. Settlements frequently occur before main judgment.",
      },
    ],
  },
  ctaTitle: "Steam account or inventory lost? We'll review your case in 24 hours.",
};

/* ════════════════════════════════════════════════════════════════════
   PAYPAL
   ════════════════════════════════════════════════════════════════════ */
const paypalDe: PillarContent = {
  hero: {
    eyebrow: "PayPal",
    headline: "PayPal-Konto eingeschränkt? BaFin-Aufsicht greift.",
    sub: "180-Tage-Hold, eingefrorenes Guthaben, plötzliche Konto­schließung. PayPal ist als Zahlungs­institut in Luxemburg lizenziert — und unter­liegt damit strikten Pflichten nach ZAG und BGB.",
  },
  problems: {
    title: "Typische PayPal-Sperrungen",
    items: [
      "Konto „eingeschränkt\" mit pauschaler Begründung — Zahlungen blockiert",
      "180-Tage-Reservebetrag ohne konkrete Tatsachen­basis",
      "Permanente Konto­schließung ohne Anhörung",
      "PayPal-Käufer­schutz-Streitigkeit zu Lasten des Verkäufers",
      "Chargeback-bedingte Sperre nach betrügerischer Käufer-Beschwerde",
      "Sperrung wegen vermeintlich „verdächtiger Aktivität\" ohne Details",
      "Fehlende KYC-Verifizierung trotz korrekt eingereichter Dokumente",
      "Geschäfts­konto gesperrt — Existenz­gefährdung für Online-Händler",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro: "PayPal ist als Zahlungs­institut nach ZAG reguliert. Daraus ergeben sich starke Verbraucher- und Aufsichts­rechte.",
    arguments: [
      {
        paragraph: "§ 675f BGB",
        title: "Zahlungsdiensterahmenvertrag",
        desc: "Konto­sperrung ist eine Vertrags­änderung — sie unterliegt der Schrift­form, Begründungs­pflicht und 2-Monats-Kündigungs­frist nach § 675h BGB. Pauschale „Sicherheits-Sperren\" sind ohne konkreten Anlass rechts­widrig.",
      },
      {
        paragraph: "§ 27 ZAG",
        title: "Auskunftspflicht des Zahlungsinstituts",
        desc: "PayPal muss als beaufsichtigtes Institut Auskunft über Verarbeitungs­regeln erteilen. Die Aufsicht durch CSSF (Luxemburg) und BaFin (DE) greift bei Verstößen.",
      },
      {
        paragraph: "BaFin-Beschwerde",
        title: "Aufsichtsrechtlicher Druck",
        desc: "Beschwerde bei der BaFin als deutsche Auf­sichts­behörde für Zahlungs­dienste. PayPal reagiert auf BaFin-Anfragen typisch innerhalb von 14 Tagen — schnellster Hebel bei Geschäfts­konten.",
      },
      {
        paragraph: "OLG Bamberg 2023",
        title: "Reservebetrag-Recht­sprechung",
        desc: "Der Reservebetrag muss konkret begründet sein. Pauschale 180-Tage-Holds sind nach OLG-Recht­sprechung oft unzulässig — Anspruch auf vor­zeitige Frei­gabe.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Bei Plattform-Account-Sperre",
        desc: "Wenn PayPal-Konto Teil einer Online-Plattform ist (eBay, Etsy etc.), greifen zusätzlich DSA-Pflichten.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Schadensersatz bei Geschäftsausfall",
        desc: "Bei Online-Händlern: Berechnung des Geschäfts­ausfalls während der Sperre, Wertverlust durch Verzug. Plus immaterieller Schaden nach Art. 82 DSGVO.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Sicherung & DSGVO-Auskunft",
        desc: "Kontostand, alle Transaktions­historie und Sperr-Nachrichten sichern. Art. 15 DSGVO erzwingt PayPals Verarbeitungs­logs.",
      },
      {
        title: "BaFin-Beschwerde + Anwaltsschreiben",
        desc: "Parallel BaFin-Beschwerde (deutsche Aufsicht) und förmliches Schreiben an PayPal Europe (Luxemburg). Frist 14 Tage.",
      },
      {
        title: "Einstweilige Verfügung bei Eilbedürftigkeit",
        desc: "Wenn Geschäfts­ausfall oder existenzieller Schaden droht: Antrag auf einstweilige Verfügung am LG. Eil­bedürftigkeit über laufende Verbindlich­keiten begründet.",
      },
      {
        title: "Klage auf Auszahlung + Schadensersatz",
        desc: "Hauptsache­klage am Wohnsitz­gericht (Brüssel-Ia Art. 18). Streitwert = einbehaltenes Guthaben + Geschäfts­ausfall.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "PayPal hält 180 Tage mein Geld zurück — kann ich das verkürzen?",
        a: "Ja. Pauschale 180-Tage-Holds sind ohne konkrete Begründung rechts­widrig (OLG Bamberg 2023). Mit Anwalts­schreiben und BaFin-Beschwerde erreichen wir oft Frei­gabe nach 4–6 Wochen.",
      },
      {
        q: "Mein Geschäfts­konto wurde gesperrt — was sind meine Optionen?",
        a: "Geschäfts­konten genießen P2B-VO-Schutz: 30-Tage-Vorwarnung bei Beendigung. Plus Eilrechts­schutz bei Existenz­gefährdung. Wir setzen sofort einstweilige Verfügung an, wenn nötig.",
      },
      {
        q: "Welche Rolle spielt die BaFin?",
        a: "BaFin ist deutsche Aufsicht für Zahlungs­dienst­leister. Bei einer Beschwerde fragt BaFin bei PayPal nach — Reaktions­zeit typisch 7–14 Tage. PayPal nimmt diese Anfragen sehr ernst (Bußgeld­risiko).",
      },
      {
        q: "Kann ich PayPal verklagen — und wo?",
        a: "Ja, am Verbraucher­wohnsitz (Brüssel-Ia Art. 18). PayPal Europe sitzt in Luxemburg — aber als Verbraucher klagen Sie am eigenen Wohnsitz. Bei Geschäfts­konten gelten andere Regeln.",
      },
      {
        q: "Was, wenn PayPal nach 180 Tagen einfach meinen Reservebetrag verfallen lässt?",
        a: "Das ist rechts­widrig. Sie haben einen Auszahlungs­anspruch nach § 675f BGB i. V. m. § 271 BGB. Wir setzen den Anspruch durch — bei Verzug zusätzlich Verzugs­zinsen.",
      },
      {
        q: "PayPal verlangt Identitäts­dokumente, die ich schon einge­reicht habe — was tun?",
        a: "Klassisches Pingpong-Problem. Wir setzen DSGVO Art. 15 (Auskunfts­anspruch) ein — PayPal muss alle bereits einge­reichten Dokumente offen­legen. Erfahrungs­gemäß löst das die Sperre innerhalb von 7–14 Tagen.",
      },
    ],
  },
  ctaTitle: "PayPal-Geld eingefroren? Wir holen es zurück.",
};

const paypalEn: PillarContent = {
  hero: {
    eyebrow: "PayPal",
    headline: "PayPal account restricted? BaFin oversight applies.",
    sub: "180-day hold, frozen balance, sudden account closure. PayPal is licensed as a Luxembourg payment institution — subject to strict obligations under ZAG and BGB.",
  },
  problems: {
    title: "Typical PayPal restrictions",
    items: [
      "Account 'restricted' with vague reasoning — payments blocked",
      "180-day reserve hold without concrete factual basis",
      "Permanent account closure without hearing",
      "PayPal Buyer Protection dispute against the seller",
      "Chargeback-induced suspension after fraudulent buyer complaint",
      "Suspension over alleged 'suspicious activity' without detail",
      "Failed KYC verification despite correctly submitted documents",
      "Business account suspended — existential threat for online merchants",
    ],
  },
  legal: {
    title: "Legal levers",
    intro: "PayPal is regulated as a payment institution under ZAG. This creates strong consumer and supervisory rights.",
    arguments: [
      {
        paragraph: "§ 675f BGB",
        title: "Payment-services framework contract",
        desc: "Account suspension is a contract amendment — subject to written form, reasoning duty and 2-month notice under § 675h BGB. Vague 'security holds' without concrete cause are unlawful.",
      },
      {
        paragraph: "§ 27 ZAG",
        title: "Disclosure duty of payment institution",
        desc: "PayPal must as a supervised institution disclose processing rules. Oversight by CSSF (Luxembourg) and BaFin (DE) applies for violations.",
      },
      {
        paragraph: "BaFin complaint",
        title: "Regulatory pressure",
        desc: "Complaint to BaFin as German payment-services authority. PayPal typically responds to BaFin inquiries within 14 days — fastest lever for business accounts.",
      },
      {
        paragraph: "OLG Bamberg 2023",
        title: "Reserve-hold case law",
        desc: "The reserve hold must be concretely justified. Blanket 180-day holds are often inadmissible — claim for early release.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "When part of a marketplace",
        desc: "If the PayPal account is part of an online platform (eBay, Etsy etc.), additional DSA duties apply.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Damages for business loss",
        desc: "For online merchants: calculation of business loss during suspension, value loss through delay. Plus non-material damages under GDPR Art. 82.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Securing & GDPR request",
        desc: "Account balance, full transaction history and suspension notices secured. GDPR Art. 15 forces PayPal's processing logs.",
      },
      {
        title: "BaFin complaint + formal letter",
        desc: "Parallel BaFin complaint (German oversight) and formal letter to PayPal Europe (Luxembourg). 14-day deadline.",
      },
      {
        title: "Interim injunction for urgency",
        desc: "If business loss or existential damage threatens: motion for interim injunction at LG. Urgency demonstrated through running liabilities.",
      },
      {
        title: "Action for payout + damages",
        desc: "Main action at home venue (Brussels Ia Art. 18). Value at stake = held balance + business loss.",
      },
    ],
  },
  faq: {
    title: "Frequently asked",
    items: [
      {
        q: "PayPal is holding my money for 180 days — can I shorten that?",
        a: "Yes. Blanket 180-day holds are unlawful without concrete reasoning (OLG Bamberg 2023). With formal letter and BaFin complaint we often achieve release in 4–6 weeks.",
      },
      {
        q: "My business account was suspended — what are my options?",
        a: "Business accounts are protected by the P2B Regulation: 30-day prior notice for termination. Plus urgent relief for existential damage. We file interim injunctions when needed.",
      },
      {
        q: "What role does BaFin play?",
        a: "BaFin is the German payment-services regulator. On complaint, BaFin asks PayPal to respond — typical response 7–14 days. PayPal takes these inquiries very seriously (fine risk).",
      },
      {
        q: "Can I sue PayPal — and where?",
        a: "Yes, at your consumer home venue (Brussels Ia Art. 18). PayPal Europe is in Luxembourg — but as a consumer you sue at your own home. Different rules apply for business accounts.",
      },
      {
        q: "What if PayPal lets my reserve simply lapse after 180 days?",
        a: "That's unlawful. You have a payout claim under § 675f BGB in conjunction with § 271 BGB. We enforce it — plus default interest in case of delay.",
      },
      {
        q: "PayPal demands ID documents I already submitted — what do I do?",
        a: "Classic ping-pong problem. We use GDPR Art. 15 (disclosure right) — PayPal must reveal all already submitted documents. Experience: this resolves the suspension in 7–14 days.",
      },
    ],
  },
  ctaTitle: "PayPal money frozen? We'll get it back.",
};

/* ════════════════════════════════════════════════════════════════════
   PSN PLAYSTATION NETWORK
   ════════════════════════════════════════════════════════════════════ */
const psnDe: PillarContent = {
  hero: {
    eyebrow: "PSN · PlayStation Network",
    headline: "PSN-Konto gesperrt oder Console-Ban?",
    sub: "Sony Interactive Entertainment Europe sitzt in der EU — und unterliegt damit voll dem deutschen Verbraucher­recht. Wir setzen Konto-Wieder­herstellung und Bibliothek-Erhalt durch.",
  },
  problems: {
    title: "Typische PSN-Sperrungen",
    items: [
      "Permanente PSN-Konto-Sperre ohne nachvollziehbare Begründung",
      "Console-Ban — Hardware-bezogen, ganze PS5 wird gebrickt",
      "Sperre nach Eltern-Chargeback bei Minderjährigen-Käufen (FUT, V-Bucks)",
      "Suspension wegen Toxic Voice Chat oder Communications Violation",
      "Verlust der Bibliothek (Spiele, DLCs) im Wert mehrerer Tausend Euro",
      "PS+ Membership entwertet trotz laufendem Abonnement",
      "Trophäen, Multiplayer-Progression, FIFA-Ultimate-Team-Stand verloren",
      "Sperre nach Account-Hack ohne Recovery-Möglichkeit",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro: "Sony Interactive Entertainment Network Europe Ltd. (London) ist EU-Vertragspartner — deutsche Recht­sprechung greift voll.",
    arguments: [
      {
        paragraph: "§ 110 BGB",
        title: "Taschengeld-Paragraph",
        desc: "Käufe Minderjähriger ohne Eltern­einwilligung (z. B. FUT-Punkte) sind schwebend unwirksam. Eltern können zurück­fordern (§ 812 BGB) — Sperre wegen Chargeback ist dann selbst rechts­widrig (§ 242 BGB Treu und Glauben).",
      },
      {
        paragraph: "§§ 327 ff. BGB",
        title: "Digitale Inhalte",
        desc: "Spiele, DLCs, In-Game-Käufe sind digitale Inhalte. Verlust ohne Entschädigung verstößt gegen § 327r BGB. Anspruch auf Wiederherstellung oder Rückzahlung des Kaufpreises.",
      },
      {
        paragraph: "BGH III ZR 179/20",
        title: "Verfahrenstrias",
        desc: "Auch wenn die Entscheidung Facebook betraf — die Linie wird auf Gaming-Plattformen übertragen: Information, Anhörung, Neuent­scheidung sind Pflicht. Ohne diese Verfahrens­rechte ist die Sperre rechtswidrig.",
      },
      {
        paragraph: "Eigentum (Art. 14 GG)",
        title: "Console-Ban als Eigentumsverletzung",
        desc: "Die PS5 ist physisches Eigentum des Mandanten. Console-Ban macht diese unbrauch­bar — das ist ein Eingriff in das Eigentum, nur durch wichtigen Grund gerecht­fertigt.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Begründungspflicht",
        desc: "PSN muss konkret begründen — pauschale „Verstoß gegen Nutzungs­bedingungen\" reicht nicht. Auskunft über genauen Vorwurf und Beweis­offerte einforderbar.",
      },
      {
        paragraph: "DSGVO Art. 15",
        title: "Auskunftsrecht",
        desc: "PSN muss alle internen Logs offen­legen — Voice-Chat-Aufzeichnungen, Account-Historie, Trans­aktionen. Die Beweis­last für die Sperre liegt bei Sony.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Bibliotheksbewertung & Auskunft",
        desc: "Spiele-Bibliothek mit Anschaffungs­preisen bewerten. PS+ Restlauf­zeit, FUT/Apex-Inhalte dokumentieren. DSGVO-Auskunft zwingt Sony zur Offen­legung.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc: "Förmliches Schreiben an Sony Interactive Entertainment Network Europe Ltd. mit Fristsetzung und Verweis auf BGH-Linie + § 327 BGB.",
      },
      {
        title: "Bei Console-Ban: Eilrechtsschutz",
        desc: "Console-Ban ist Eigentums­eingriff — einstweilige Verfügung mit Antrag auf vorläufige Ent­sperrung. Eil­bedürftigkeit über entgangene Nutzung begründet.",
      },
      {
        title: "Klage am Wohnsitz",
        desc: "Verbraucher­wohnsitz nach Brüssel-Ia Art. 18. Streitwert = Bibliotheks­wert + PS+ Anteil + ggf. Console-Wert.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Mein 14-jähriger Sohn hat ohne Erlaubnis FUT-Punkte gekauft — kann ich zurück­fordern?",
        a: "Ja, nach § 110 BGB. Käufe Minderjähriger ohne Eltern­einwilligung sind schwebend unwirksam. Bank-Charge­back oder direkte Rück­forderung von Sony rechtmäßig. Wenn Sony deshalb sperrt, ist die Sperre selbst rechts­widrig.",
      },
      {
        q: "Was ist ein Console-Ban — und wie kann ich dagegen vorgehen?",
        a: "Console-Ban macht die Hardware (PS4/PS5) unbrauch­bar — auch für andere Nutzer im Haushalt. Das ist ein massiver Eingriff in Ihr Eigentum. Wir setzen einstweilige Verfügung — Sony hebt häufig schon nach Anwalts­schreiben auf.",
      },
      {
        q: "Bekomme ich meine Spiele-Bibliothek zurück?",
        a: "Ja, sofern der Account wieder­hergestellt wird. Bei dauerhaftem Verlust haben Sie Anspruch auf Wert­ersatz nach § 327r BGB — bei langen PSN-Konten oft 4-stellig.",
      },
      {
        q: "Sony reagiert nicht auf meine Beschwerde — was tun?",
        a: "Sony Support antwortet typisch in 24–72 h. Bei Nicht­reaktion auf Anwalts­schreiben: einstweilige Verfügung am Wohnsitz­gericht. Bei Geschäfts­schaden (Streamer mit PS5-Content): Eilrechts­schutz innerhalb 1–2 Wochen.",
      },
      {
        q: "Kann ich Schmerzens­geld fordern?",
        a: "Bei nachweisbarer Persönlichkeits­verletzung (öffentlicher „Cheater\"-Vermerk im Profil, Reputations­schaden) ja. Plus immaterieller Schaden nach Art. 82 DSGVO bei DSGVO-Verstoß.",
      },
      {
        q: "Sind PS+ und PS Plus Premium-Abos abgedeckt?",
        a: "Ja. PS+ ist ein Dauer­schuld­verhältnis — Sperre verhindert die Leistung. Anspruch auf Pro-rata-Erstattung nach § 327q BGB für die nicht genutzte Lauf­zeit.",
      },
    ],
  },
  ctaTitle: "PSN-Konto weg? Wir prüfen Ihren Fall in 24 Stunden.",
};

const psnEn: PillarContent = {
  hero: {
    eyebrow: "PSN · PlayStation Network",
    headline: "PSN account suspended or console ban?",
    sub: "Sony Interactive Entertainment Europe is in the EU — fully subject to German consumer law. We enforce account reinstatement and library preservation.",
  },
  problems: {
    title: "Typical PSN suspensions",
    items: [
      "Permanent PSN account ban without comprehensible reasoning",
      "Console ban — hardware-tied, entire PS5 bricked",
      "Suspension after parental chargeback for minor purchases (FUT, V-Bucks)",
      "Suspension over toxic voice chat or communications violation",
      "Library loss (games, DLCs) worth several thousand euros",
      "PS+ membership devalued despite active subscription",
      "Trophies, multiplayer progression, FIFA Ultimate Team progress lost",
      "Suspension after account hack with no recovery option",
    ],
  },
  legal: {
    title: "Legal levers",
    intro: "Sony Interactive Entertainment Network Europe Ltd. (London) is the EU contract partner — German case law applies fully.",
    arguments: [
      {
        paragraph: "§ 110 BGB",
        title: "Allowance provision",
        desc: "Minor's purchases without parental consent (e.g. FUT points) are voidable. Parents can reclaim (§ 812 BGB) — suspension in response to chargeback is itself unlawful (§ 242 BGB good faith).",
      },
      {
        paragraph: "§§ 327 et seq. BGB",
        title: "Digital content",
        desc: "Games, DLCs, in-game purchases are digital content. Loss without compensation violates § 327r BGB. Claim for reinstatement or refund of purchase price.",
      },
      {
        paragraph: "BGH III ZR 179/20",
        title: "Procedural triad",
        desc: "Although the ruling concerned Facebook — the doctrine extends to gaming platforms: notice, hearing, redecision are mandatory. Without these procedural rights the suspension is unlawful.",
      },
      {
        paragraph: "Property (Art. 14 GG)",
        title: "Console ban as property interference",
        desc: "The PS5 is the client's physical property. Console ban renders it unusable — that's interference with property, justified only by good cause.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc: "PSN must give concrete reasons — vague 'terms violation' is insufficient. Information about the specific allegation and evidence offer can be demanded.",
      },
      {
        paragraph: "GDPR Art. 15",
        title: "Right of access",
        desc: "PSN must disclose all internal logs — voice-chat recordings, account history, transactions. The burden of proof for the suspension lies with Sony.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Library valuation & disclosure",
        desc: "Value game library at purchase prices. Document PS+ remaining term, FUT/Apex content. GDPR request forces Sony to disclose.",
      },
      {
        title: "Formal letter with deadline",
        desc: "Formal letter to Sony Interactive Entertainment Network Europe Ltd. with deadline citing BGH doctrine + § 327 BGB.",
      },
      {
        title: "Console ban: urgent relief",
        desc: "Console ban = property interference — interim injunction with motion for provisional unlock. Urgency demonstrated through lost use.",
      },
      {
        title: "Court action at home",
        desc: "Consumer's home venue under Brussels Ia Art. 18. Value at stake = library + PS+ pro rata + console value.",
      },
    ],
  },
  faq: {
    title: "Frequently asked",
    items: [
      {
        q: "My 14-year-old bought FUT points without permission — can I reclaim?",
        a: "Yes, under § 110 BGB. Minors' purchases without parental consent are voidable. Bank chargeback or direct reclaim from Sony is lawful. If Sony suspends over this, the suspension itself is unlawful.",
      },
      {
        q: "What is a console ban — and how can I challenge it?",
        a: "Console ban renders the hardware (PS4/PS5) unusable — including for other household users. That's a major interference with your property. We file interim injunctions — Sony often lifts them just on formal letter.",
      },
      {
        q: "Will I get my game library back?",
        a: "Yes, if the account is reinstated. For permanent loss you have a compensation claim under § 327r BGB — for long PSN accounts often 4-figure.",
      },
      {
        q: "Sony doesn't respond to my complaint — what now?",
        a: "Sony Support typically replies in 24–72h. If no response to formal letter: interim injunction at home court. For business damage (PS5 streamer): urgent relief within 1–2 weeks.",
      },
      {
        q: "Can I claim emotional distress damages?",
        a: "For demonstrable personality interference (public 'cheater' note in profile, reputation damage) yes. Plus non-material damages under Art. 82 GDPR for GDPR violations.",
      },
      {
        q: "Are PS+ and PS Plus Premium subscriptions covered?",
        a: "Yes. PS+ is a continuing-obligation contract — suspension prevents performance. Claim for pro-rata refund under § 327q BGB for the unused term.",
      },
    ],
  },
  ctaTitle: "PSN account gone? We'll review your case in 24 hours.",
};

/* ════════════════════════════════════════════════════════════════════
   YOUTUBE
   ════════════════════════════════════════════════════════════════════ */
const youtubeDe: PillarContent = {
  hero: {
    eyebrow: "YouTube · Google",
    headline: "YouTube-Channel beendet? VLOP-Pflichten greifen.",
    sub: "Channel Termination, Strikes, Demonetarisierung. YouTube ist VLOP nach Art. 33 DSA — strengste Pflichten gelten. Bei Eilbedürftig­keit setzen wir einstweilige Verfügung am LG durch.",
  },
  problems: {
    title: "Typische YouTube-Sperrungen",
    items: [
      "Channel Termination wegen „Repeated Violations\" — keine konkreten Videos benannt",
      "Drei Community Guidelines Strikes innerhalb 90 Tagen",
      "Demonetarisierung — AdSense-Konto wird vom Kanal getrennt",
      "Copyright-Strike via Content ID (oft False Positive)",
      "Shadow-Demonetarisierung — Werbung läuft, aber kein Auszahlungs­fluss",
      "Channel-Reichweite massiv eingeschränkt nach Algorithmus-Änderung",
      "Verifikations-Verlust (Häkchen entfernt)",
      "Verbundenes AdSense-Konto gesperrt — Auszahlungen blockiert",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro: "YouTube ist VLOP nach DSA. Plus: Es gibt etablierte deutsche OLG-Recht­sprechung zur Channel-Wieder­herstellung.",
    arguments: [
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc: "Statement of Reasons mit konkreten Videos, AGB-Klausel, Auto­matisierung-Indikator. Pauschal­verweise auf „Repeated violations\" sind unzulässig — wir nutzen die DSA Transparency Database als Beweismittel.",
      },
      {
        paragraph: "OLG Dresden 4 W 577/18",
        title: "Channel-Wiederherstellung",
        desc: "Das OLG Dresden hat 2018 entschieden: YouTube muss bei Kanal-Löschung konkret begründen. Ohne Begründung Anspruch auf Wieder­herstellung. Diese Linie wird von LG Frankfurt, LG Köln und OLG Frankfurt fort­geführt.",
      },
      {
        paragraph: "DSGVO Art. 22",
        title: "Automatisierte Strike-Entscheidungen",
        desc: "Content ID und automatische Strikes ohne menschliche Letzt­prüfung sind nach EuGH C-634/21 unzulässig — wenn die Entscheidung erheblich beein­trächtigt (= bei AdSense-Channels regel­mäßig der Fall).",
      },
      {
        paragraph: "DSA Art. 21",
        title: "Appeals Centre Europe",
        desc: "Das Appeals Centre Europe (Dublin) ist für YouTube-Streit­fälle zertifiziert. Außer­gerichtliche Streit­beilegung mit hoher faktischer Bindung.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Schadensersatz für Creator",
        desc: "Bei Mid-Tier-Channels (50k–500k Subs): AdSense-Auszahlungen typisch 1.000–10.000 €/Monat plus Sponsoring. Wir berechnen den 12-Monats-Verdienstausfall als Streit­wert.",
      },
      {
        paragraph: "DSA Art. 33–37",
        title: "VLOP-Pflichten",
        desc: "Risikobewertung, unabhängige Audits, Forscher­zugang. Verstöße bis 6 % Jahresumsatz — bei Google ein Milliarden­druck­mittel.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & DSA Transparency DB",
        desc: "Statement of Reasons aus DSA Transparency Database, Channel-Statistiken, Sponsoren­verträge sichern. AdSense-Historie als Verdienst­beweis.",
      },
      {
        title: "DSA Art. 20 Beschwerde + Appeals Centre",
        desc: "Interne Beschwerde nach DSA Art. 20 + parallel Appeals Centre Europe einleiten. Doppel­druck wirkt.",
      },
      {
        title: "Einstweilige Verfügung bei Eilbedürftigkeit",
        desc: "Wenn laufende Sponsoren­verträge oder massiver Reichweiten­verlust drohen: einstweilige Verfügung am LG mit Antrag auf vorläufige Wieder­herstellung.",
      },
      {
        title: "Hauptsacheklage + Schadensersatz",
        desc: "Klage auf Wieder­herstellung + Schadens­ersatz für Verdienst­ausfall. Streit­werte typisch 5- bis 6-stellig bei Mid-Tier-Channels.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Mein Channel wurde wegen „Repeated Violations\" beendet — was kann ich tun?",
        a: "Pauschal­begründung reicht nach DSA Art. 17 nicht. YouTube muss konkrete Videos benennen. Mit Anwalts­schreiben + Appeals Centre Europe haben wir hohe Wieder­herstellungs­quote.",
      },
      {
        q: "Wie lange dauert eine einstweilige Verfügung?",
        a: "Typisch 7–14 Tage bei dringender Eilbedürftigkeit. LG Köln und LG Frankfurt sind erfahren mit YouTube-Fällen — Bescheid häufig binnen einer Woche.",
      },
      {
        q: "Was kann ich an Schadensersatz fordern?",
        a: "Verlorene AdSense-Einnahmen (12-Monats-Durchschnitt × Sperr-Dauer), entgangene Sponsoring-Verträge, Vertrags­strafen. Plus immaterieller Schaden nach Art. 82 DSGVO. Bei Mid-Tier-Channels regelmäßig 5- bis 6-stellig.",
      },
      {
        q: "Kann ich gegen Content-ID-Strikes vorgehen?",
        a: "Ja. Content ID ist automatisierte Erkennung ohne menschliche Prüfung — bei berechtigter Nutzung (Lizenz, eigener Content, Fair Use) ist der Strike rechts­widrig. Wir reichen Counter-Notice + Anwalts­schreiben ein.",
      },
      {
        q: "Mein AdSense-Konto wurde gesperrt — was sind meine Rechte?",
        a: "AdSense-Sperre ist eigen­ständige Vertrags­änderung. Plus: bei Geschäfts­konto greift P2B-VO mit 30-Tage-Vorwarn­pflicht. Auszahlungs­anspruch auf bereits verdiente Beträge.",
      },
      {
        q: "Was ist mit Google-Konten, die mit YouTube verbunden sind (Drive, Gmail)?",
        a: "Klassisches Problem: Strafe trifft den ganzen Google-Account. Wir argumentieren mit Verhältnis­mäßigkeit — Sperre nur des konkreten Dienstes, nicht des gesamten Google-Ökosystems.",
      },
    ],
  },
  ctaTitle: "YouTube-Channel beendet? Wir prüfen Ihren Fall in 24 Stunden.",
};

const youtubeEn: PillarContent = {
  hero: {
    eyebrow: "YouTube · Google",
    headline: "YouTube channel terminated? VLOP duties apply.",
    sub: "Channel termination, strikes, demonetization. YouTube is a VLOP under DSA Art. 33 — strictest obligations apply. For urgency we file interim injunctions at LG.",
  },
  problems: {
    title: "Typical YouTube suspensions",
    items: [
      "Channel termination over 'repeated violations' — no specific videos cited",
      "Three Community Guidelines strikes within 90 days",
      "Demonetization — AdSense account decoupled from channel",
      "Copyright strike via Content ID (often false positive)",
      "Shadow-demonetization — ads run but no payout",
      "Channel reach massively reduced after algorithm change",
      "Verification loss (checkmark removed)",
      "Linked AdSense account suspended — payouts blocked",
    ],
  },
  legal: {
    title: "Legal levers",
    intro: "YouTube is a VLOP under the DSA. Plus: established German OLG case law on channel reinstatement.",
    arguments: [
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc: "Statement of Reasons must cite concrete videos, ToS clause and automation indicator. Vague 'repeated violations' references are inadmissible — we use the DSA Transparency Database as evidence.",
      },
      {
        paragraph: "OLG Dresden 4 W 577/18",
        title: "Channel reinstatement",
        desc: "OLG Dresden ruled in 2018: YouTube must give concrete reasons for channel deletion. Without reasoning, claim for reinstatement. This line is followed by LG Frankfurt, LG Cologne and OLG Frankfurt.",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "Automated strike decisions",
        desc: "Content ID and automatic strikes without human oversight are unlawful per ECJ C-634/21 — when the decision significantly affects (= AdSense channels regularly).",
      },
      {
        paragraph: "DSA Art. 21",
        title: "Appeals Centre Europe",
        desc: "The Appeals Centre Europe (Dublin) is certified for YouTube disputes. Out-of-court resolution with strong factual binding.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Damages for creators",
        desc: "For mid-tier channels (50k–500k subs): AdSense payouts typically €1,000–€10,000/month plus sponsoring. We calculate the 12-month earnings loss as value at stake.",
      },
      {
        paragraph: "DSA Art. 33–37",
        title: "VLOP duties",
        desc: "Risk assessment, independent audits, researcher access. Violations up to 6 % of annual turnover — at Google a billion-euro pressure lever.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & DSA Transparency DB",
        desc: "Statement of Reasons from DSA Transparency Database, channel statistics, sponsor contracts. AdSense history as earnings proof.",
      },
      {
        title: "DSA Art. 20 complaint + Appeals Centre",
        desc: "Internal complaint under DSA Art. 20 + parallel Appeals Centre Europe. Two-track pressure works.",
      },
      {
        title: "Interim injunction for urgency",
        desc: "If running sponsor contracts or massive reach loss threaten: interim injunction at LG with motion for provisional reinstatement.",
      },
      {
        title: "Main proceedings + damages",
        desc: "Action for reinstatement + damages for earnings loss. Values typically 5- to 6-figure for mid-tier channels.",
      },
    ],
  },
  faq: {
    title: "Frequently asked",
    items: [
      {
        q: "My channel was terminated for 'repeated violations' — what can I do?",
        a: "Vague reasoning is insufficient under DSA Art. 17. YouTube must cite concrete videos. With formal letter + Appeals Centre Europe we have a high reinstatement rate.",
      },
      {
        q: "How long does an interim injunction take?",
        a: "Typically 7–14 days for urgent matters. LG Cologne and LG Frankfurt are experienced with YouTube cases — decisions often within a week.",
      },
      {
        q: "What can I claim in damages?",
        a: "Lost AdSense earnings (12-month average × suspension duration), lost sponsorship contracts, contract penalties. Plus non-material damages under GDPR Art. 82. For mid-tier channels regularly 5- to 6-figure.",
      },
      {
        q: "Can I challenge Content ID strikes?",
        a: "Yes. Content ID is automated detection without human review — for legitimate use (license, your own content, Fair Use) the strike is unlawful. We file counter-notice + formal letter.",
      },
      {
        q: "My AdSense account was suspended — what are my rights?",
        a: "AdSense suspension is its own contract amendment. Plus: P2B Regulation applies to business accounts with 30-day prior notice. Payout claim for already earned amounts.",
      },
      {
        q: "What about Google accounts linked with YouTube (Drive, Gmail)?",
        a: "Classic problem: penalty hits the whole Google account. We argue proportionality — suspension only of the specific service, not the entire Google ecosystem.",
      },
    ],
  },
  ctaTitle: "YouTube channel terminated? We'll review your case in 24 hours.",
};

const riotDe: PillarContent = {
  hero: {
    eyebrow: "Riot Games · Valorant · League of Legends",
    headline: "Riot-Sperre? Vanguard-Ban? Wir greifen die Black-Box an.",
    sub:
      "HWID-Bans durch Vanguard, Permanent-Bans bei Valorant und LoL, gesperrte Rang-Inventare: Riot trifft viele Ban-Entscheidungen rein automatisiert - das ist nach Art. 22 DSGVO angreifbar.",
  },
  problems: {
    title: "Typische Riot-Sperrungen",
    items: [
      "Vanguard HWID-Ban, der die gesamte Hardware unbrauchbar macht",
      "Permanent-Ban wegen angeblichem Cheating ohne menschliche Prüfung",
      "Smurfing-Vorwurf bei legitimen Zweitkonten von Familien",
      "Ban wegen „toxischem Verhalten\" auf Basis automatisierter Chat-Analyse",
      "Verlust gekaufter Skins, Champions und Rang-Fortschritte",
      "Account-Sharing-Vorwurf trotz dokumentierter Einzelnutzung",
      "Region-Lock-Verstoß bei VPN-Nutzung als Sperrgrund",
      "Permanent-Ban wegen False-Positive im Vanguard-Anti-Cheat-Driver",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "Riot Games Ireland Ltd. unterliegt voll dem DSA und der DSGVO. Vanguard arbeitet auf Kernel-Ebene und trifft automatisierte Entscheidungen - ein juristisches Einfallstor.",
    arguments: [
      {
        paragraph: "Art. 22 DSGVO",
        title: "Verbot rein automatisierter Entscheidungen",
        desc:
          "Vanguard sperrt ohne menschliche Letztkontrolle. Nach EuGH C-634/21 (SCHUFA) ist das eine erheblich beeinträchtigende Einzelentscheidung - rechtswidrig ohne human review.",
      },
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Riot muss konkret begründen: welcher Vanguard-Trigger, welche Tatsachen, welche AGB-Klausel. Pauschale „cheating detected\"-Meldungen erfüllen den Standard nicht.",
      },
      {
        paragraph: "§§ 327 c, m, r BGB",
        title: "Digitale-Inhalte-Recht",
        desc:
          "Skins, Champions, RP-Käufe sind digitale Inhalte. Bei Sperrung haben Sie Anspruch auf Wiederherstellung oder Wertersatz - bei Riot oft 4-stellige Inventare.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "AGB-Kontrolle",
        desc:
          "Riots Recht auf jederzeitige Sperrung „at sole discretion\" ist nach BGH III ZR 179/20 unwirksam. Hardware-Bans treffen Dritte (Familien) - klarer AGB-Verstoß.",
      },
      {
        paragraph: "Art. 18 Brüssel-Ia-VO",
        title: "Klage am Wohnsitz",
        desc:
          "Gegen Riot Games Ireland Ltd. (Dublin) klagen Sie am eigenen Wohnsitz. Die kalifornische Schiedsklausel ist gegenüber EU-Verbrauchern unwirksam (EuGH C-191/15).",
      },
      {
        paragraph: "§ 110 BGB",
        title: "Minderjährige & RP-Käufe",
        desc:
          "Riot Points-Käufe Minderjähriger ohne Eltern-Einwilligung sind schwebend unwirksam. Ban wegen Eltern-Chargeback ist selbst rechtswidrig.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & DSGVO-Auskunft",
        desc:
          "Wir sichern Sperrnachricht, Account-Daten, Inventar, Match-History und stellen Art. 15 DSGVO-Anfrage - inklusive Vanguard-Logs und Ban-Logik.",
      },
      {
        title: "DSA-Beschwerde (Art. 20)",
        desc:
          "Interne Beschwerde bei Riot DSA-konform mit konkreten Hebeln. Bei Vanguard-False-Positives kassieren oft schon hier viele Sperren.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc:
          "Förmliches Schreiben an Riot Games Ireland Ltd. mit Wertersatz-Bezifferung und 14-Tage-Frist. Ankündigung Schadensersatz nach Art. 54 DSA.",
      },
      {
        title: "ADR oder Klage",
        desc:
          "Bei Stillstand Out-of-Court Dispute Body (Art. 21 DSA) oder Klage am Verbraucherwohnsitz mit einstweiliger Verfügung gegen den Hardware-Ban.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Was ist ein Vanguard HWID-Ban?",
        a:
          "Vanguard ist Riots Kernel-Level-Anti-Cheat. Bei Verdacht sperrt es nicht nur den Account, sondern bindet einen Hardware-Identifier - jeder neue Account auf der Hardware wird sofort gesperrt. Das ist nach DSGVO und § 307 BGB angreifbar.",
      },
      {
        q: "Was kostet die Vertretung?",
        a:
          "Ersteinschätzung kostenlos. Honorare hängen von Verfahrensart und Streitwert ab - wir vereinbaren transparent vor Mandatsannahme. Bei Rechtsschutzversicherung Direktabrechnung.",
      },
      {
        q: "Wie lange dauert es bis zur Reaktivierung?",
        a:
          "Außergerichtlich oft 14–30 Tage. Bei einstweiliger Verfügung wenige Tage bis Wochen. Hauptsacheklagen 6–18 Monate - bei akuten Fällen reicht meist die einstweilige Verfügung.",
      },
      {
        q: "Bekomme ich gekaufte Skins und RP zurück?",
        a:
          "Ja. Bei Reaktivierung bleiben alle Inhalte erhalten. Bei endgültigem Verlust haben Sie Anspruch auf Wertersatz nach § 327 r BGB - dokumentieren Sie alle Käufe lückenlos.",
      },
      {
        q: "Mein Kind hat heimlich RP gekauft - kann ich zurückfordern?",
        a:
          "Ja, ohne Eltern-Einwilligung sind die Käufe nach § 110 BGB schwebend unwirksam. Wenn Riot deshalb gesperrt hat, ist die Sperrung selbst rechtswidrig.",
      },
      {
        q: "Was, wenn ich tatsächlich gecheatet habe?",
        a:
          "Wir prüfen offen - Verhältnismäßigkeit gilt auch hier. Permanent-Ban beim Erstvergehen ist häufig unverhältnismäßig. Eine Verkürzung oder Reaktivierung ist oft erreichbar.",
      },
    ],
  },
  ctaTitle: "Riot-Account gesperrt? Wir prüfen Ihren Fall in 24 Stunden.",
};

const riotEn: PillarContent = {
  hero: {
    eyebrow: "Riot Games · Valorant · League of Legends",
    headline: "Riot ban? Vanguard suspension? We challenge the black box.",
    sub:
      "Vanguard HWID bans, Valorant and LoL permabans, locked rank inventories: Riot makes most ban decisions purely automated - challengeable under GDPR Art. 22.",
  },
  problems: {
    title: "Typical Riot suspensions",
    items: [
      "Vanguard HWID ban that locks down the entire hardware",
      "Permanent ban for alleged cheating without human review",
      "Smurfing allegation against legitimate family secondary accounts",
      "Ban for 'toxicity' based on automated chat analysis",
      "Loss of purchased skins, champions, rank progress",
      "Account-sharing claim despite documented single use",
      "Region-lock violation due to VPN usage as ban reason",
      "Permanent ban from a Vanguard anti-cheat false positive",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "Riot Games Ireland Ltd. is fully subject to the DSA and GDPR. Vanguard runs at kernel level and makes automated decisions - a clear legal entry point.",
    arguments: [
      {
        paragraph: "GDPR Art. 22",
        title: "Ban on solely automated decisions",
        desc:
          "Vanguard suspends without human oversight. After ECJ C-634/21 (SCHUFA), this is a significant automated decision - unlawful without human review.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Riot must specify: which Vanguard trigger, which facts, which ToS clause. Generic 'cheating detected' messages don't meet the standard.",
      },
      {
        paragraph: "§§ 327c, m, r BGB",
        title: "Digital-content consumer rights",
        desc:
          "Skins, champions, RP purchases are digital content. On suspension you have a claim to reinstatement or compensation - Riot inventories often run into 4 figures.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "Unfair-terms control",
        desc:
          "Riot's right to suspend 'at sole discretion' is invalid under BGH III ZR 179/20. Hardware bans hit third parties (families) - a clear ToS violation.",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Sue at consumer's home court",
        desc:
          "Against Riot Games Ireland Ltd. (Dublin) you sue at home. The Californian arbitration clause is void against EU consumers (ECJ C-191/15).",
      },
      {
        paragraph: "§ 110 BGB",
        title: "Minors & RP purchases",
        desc:
          "Riot Points purchases by minors without parental consent are voidable. A ban triggered by parental chargeback is itself unlawful.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & GDPR data request",
        desc:
          "We secure suspension notice, account data, inventory, match history, and file a GDPR Art. 15 request - including Vanguard logs and ban logic.",
      },
      {
        title: "DSA complaint (Art. 20)",
        desc:
          "Internal complaint to Riot, DSA-compliant, with concrete legal levers. Vanguard false positives often get reversed at this stage already.",
      },
      {
        title: "Formal letter with deadline",
        desc:
          "Formal letter to Riot Games Ireland Ltd. with quantified compensation claim and 14-day deadline. Notice of damages claim under DSA Art. 54.",
      },
      {
        title: "ADR or court action",
        desc:
          "If Riot stalls: out-of-court dispute body (DSA Art. 21) or action in your home court with an injunction against the hardware ban.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What is a Vanguard HWID ban?",
        a:
          "Vanguard is Riot's kernel-level anti-cheat. On suspicion it doesn't just ban the account, it ties a hardware identifier - any new account on that machine is instantly banned. Challengeable under GDPR and § 307 BGB.",
      },
      {
        q: "What does representation cost?",
        a:
          "Initial assessment is free. Fees depend on procedure and value at stake - we agree everything transparently before mandate. Direct billing with legal expense insurance.",
      },
      {
        q: "How long until reactivation?",
        a:
          "Out-of-court often 14–30 days. With an injunction days to weeks. Main proceedings 6–18 months - in urgent cases the injunction is usually enough.",
      },
      {
        q: "Do I get my purchased skins and RP back?",
        a:
          "Yes. On reactivation everything is preserved. On final loss you have a compensation claim under § 327r BGB - document all purchases carefully.",
      },
      {
        q: "My child bought RP secretly - can I claim it back?",
        a:
          "Yes, without parental consent purchases are voidable under § 110 BGB. If Riot banned because of that chargeback, the ban itself is unlawful.",
      },
      {
        q: "What if I actually did cheat?",
        a:
          "We assess openly - proportionality still applies. A permaban for a first offense is often disproportionate. Reduction or reactivation is frequently achievable.",
      },
    ],
  },
  ctaTitle: "Riot account banned? We'll review your case in 24 hours.",
};

const robloxDe: PillarContent = {
  hero: {
    eyebrow: "Roblox",
    headline: "Roblox-Account gesperrt? Besonders für Eltern Minderjähriger relevant.",
    sub:
      "Automatisierte Moderation ohne menschliche Prüfung, Robux-Verluste, Item-Inventar weg, betroffene Kinder­konten: Roblox unterliegt voll der DSGVO und dem Verbraucherrecht für digitale Inhalte.",
  },
  problems: {
    title: "Typische Roblox-Sperrungen",
    items: [
      "Permanent-Ban des Kinder-Accounts ohne nachvollziehbare Begründung",
      "Verlust gekaufter Robux und Limited-Items im 4-stelligen Bereich",
      "Sperre wegen angeblicher Chat-Verstöße auf Basis automatisierter Filter",
      "Account-Löschung wegen Geburtsdatums-Verifikation",
      "Ban wegen vermeintlich eigener Spielerstellung („exploit content\")",
      "Sperre wegen Eltern-Chargeback nach unautorisiertem Robux-Kauf",
      "IP-Ban, der die ganze Familie trifft",
      "Plötzliche Sperre ohne Vorwarnung beim Premium-Abonnement",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "Roblox Corporation (USA) bietet Dienste in der EU an und unterliegt damit DSA, DSGVO und § 327 BGB. Bei Minderjährigen greift zusätzlich besonderer Schutz nach § 110 BGB.",
    arguments: [
      {
        paragraph: "§ 110 BGB",
        title: "Schwebende Unwirksamkeit bei Minderjährigen",
        desc:
          "Robux-Käufe ohne Eltern-Einwilligung sind schwebend unwirksam. Eltern können nach § 812 BGB zurückfordern. Sperrung wegen Chargeback ist dann selbst rechtswidrig.",
      },
      {
        paragraph: "Art. 22 DSGVO",
        title: "Verbot rein automatisierter Entscheidungen",
        desc:
          "Roblox' Chat-Filter und Moderations-KI treffen Sperrentscheidungen ohne Mensch im Loop. Nach EuGH C-634/21 ist das eine verbotene Profilbildung mit erheblicher Auswirkung.",
      },
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Roblox muss konkret nennen: welcher Verstoß, welche Klausel, automatisiert oder manuell. „Verletzung der Community Standards\" reicht nach DSA nicht.",
      },
      {
        paragraph: "§§ 327 c, m, r BGB",
        title: "Digitale-Inhalte-Recht",
        desc:
          "Robux, Limited-Items, Game-Pass-Inhalte sind digitale Inhalte. Verlust ohne Entschädigung ist unzulässig - bei Limiteds oft 4-stellige Wiederbeschaffungswerte.",
      },
      {
        paragraph: "DSGVO Art. 8",
        title: "Schutz von Kinderdaten",
        desc:
          "Bei Accounts unter 16 Jahren gelten verschärfte Anforderungen an Einwilligung und Datenverarbeitung. Verstöße sind zusätzlicher Hebel und Schadensersatz nach Art. 82 DSGVO.",
      },
      {
        paragraph: "Art. 18 Brüssel-Ia-VO",
        title: "Klage am Wohnsitz",
        desc:
          "Auch gegen Roblox Corporation (Kalifornien) klagen Verbraucher am eigenen Wohnsitz. US-Gerichtsstandsklauseln sind gegenüber EU-Verbrauchern unwirksam.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & DSGVO-Auskunft",
        desc:
          "Wir sichern Sperrnachricht, Robux-Kaufhistorie, Item-Inventar, Chat-Logs und stellen Art. 15 DSGVO-Anfrage - inklusive Moderations-Entscheidungs-Logs.",
      },
      {
        title: "DSA-Beschwerde (Art. 20)",
        desc:
          "Interne Beschwerde DSA-konform mit konkreten rechtlichen Hebeln. Bei automatisierten False-Positives kassieren oft schon hier viele Sperren.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc:
          "Förmliches Schreiben an Roblox Corporation (ggf. EU-Vertreter) mit Wertersatz-Bezifferung und 14-Tage-Frist - Schadensersatz nach DSA Art. 54 angekündigt.",
      },
      {
        title: "ADR oder Klage",
        desc:
          "Bei Stillstand zertifizierte Out-of-Court Dispute Body (Art. 21 DSA) oder Klage am Verbraucherwohnsitz mit einstweiliger Verfügung bei drohendem Item-Verlust.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Mein Kind ist gesperrt - was kann ich tun?",
        a:
          "Bei Minderjährigen haben Sie als Eltern besonders starke Hebel: § 110 BGB bei Käufen, DSGVO Art. 8 bei Datenverarbeitung. Wir vertreten Sie als gesetzliche Vertreter Ihres Kindes.",
      },
      {
        q: "Was kostet die Vertretung?",
        a:
          "Ersteinschätzung kostenlos. Honorare hängen von Verfahrensart und Streitwert ab - bei Limited-Items oder hohen Robux-Beständen ist der Streitwert oft erheblich. Bei Rechtsschutz Direktabrechnung.",
      },
      {
        q: "Bekomme ich Robux und Items zurück?",
        a:
          "Ja, bei Reaktivierung bleibt das Inventar erhalten. Bei endgültigem Verlust gibt es Wertersatz nach § 327 r BGB - Limiteds werden zum Marktwert berechnet, nicht zum Kaufpreis.",
      },
      {
        q: "Mein Kind hat heimlich Robux gekauft - rückforderbar?",
        a:
          "Ja, ohne Eltern-Einwilligung sind Käufe Minderjähriger nach § 110 BGB schwebend unwirksam. Wenn Roblox deshalb sperrt, ist die Sperre selbst rechtswidrig.",
      },
      {
        q: "Roblox antwortet nicht auf Beschwerden - geht das überhaupt?",
        a:
          "Das ist exakt der DSA-Verstoß. Art. 20 DSA verlangt funktionierende interne Beschwerdesysteme. Stillstand der Plattform ist eigenständiger Hebel.",
      },
      {
        q: "Mehrere Familienmitglieder über IP betroffen - was nun?",
        a:
          "IP-Bans, die unbeteiligte Familienmitglieder treffen, sind unverhältnismäßig (§ 307 BGB). Wir argumentieren für selektive Sperre nur des betroffenen Accounts.",
      },
    ],
  },
  ctaTitle: "Roblox-Account gesperrt? Wir prüfen Ihren Fall in 24 Stunden.",
};

const robloxEn: PillarContent = {
  hero: {
    eyebrow: "Roblox",
    headline: "Roblox account banned? Particularly relevant for parents.",
    sub:
      "Automated moderation without human review, Robux loss, lost item inventory, banned children's accounts: Roblox is fully subject to GDPR and EU digital-content consumer law.",
  },
  problems: {
    title: "Typical Roblox suspensions",
    items: [
      "Permanent ban of a child's account without traceable reason",
      "Loss of purchased Robux and Limited items in the 4-figure range",
      "Suspension for alleged chat violations from automated filters",
      "Account deletion over date-of-birth verification",
      "Ban for allegedly user-created 'exploit content'",
      "Suspension after parental chargeback for unauthorized Robux purchase",
      "IP ban that affects the whole family",
      "Sudden ban of a Premium subscription without warning",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "Roblox Corporation (USA) offers services in the EU and is subject to DSA, GDPR and § 327 BGB. With minors, additional protection under § 110 BGB applies.",
    arguments: [
      {
        paragraph: "§ 110 BGB",
        title: "Voidable contracts of minors",
        desc:
          "Robux purchases without parental consent are voidable. Parents can claim back under § 812 BGB. A suspension over chargeback is itself unlawful.",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "Ban on solely automated decisions",
        desc:
          "Roblox chat filters and moderation AI suspend without humans in the loop. Per ECJ C-634/21 that's prohibited profiling with significant impact.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Roblox must specify: which violation, which clause, automated or manual. 'Community Standards violation' is not enough under the DSA.",
      },
      {
        paragraph: "§§ 327c, m, r BGB",
        title: "Digital-content consumer rights",
        desc:
          "Robux, Limited items, Game Pass content are digital content. Loss without compensation is unlawful - Limiteds often have 4-figure replacement values.",
      },
      {
        paragraph: "GDPR Art. 8",
        title: "Children's data protection",
        desc:
          "Accounts under 16 trigger heightened consent and processing requirements. Breaches are an additional lever and trigger damages under GDPR Art. 82.",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Sue at consumer's home court",
        desc:
          "Even against Roblox Corporation (California), consumers sue at home. US choice-of-court clauses are void against EU consumers.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & GDPR data request",
        desc:
          "We secure suspension notice, Robux purchase history, item inventory, chat logs, and file a GDPR Art. 15 request - including moderation decision logs.",
      },
      {
        title: "DSA complaint (Art. 20)",
        desc:
          "Internal complaint, DSA-compliant, with concrete legal levers. Automated false positives often get reversed at this stage.",
      },
      {
        title: "Formal letter with deadline",
        desc:
          "Formal letter to Roblox Corporation (and EU rep where applicable) with quantified compensation claim and 14-day deadline. Damages noticed under DSA Art. 54.",
      },
      {
        title: "ADR or court action",
        desc:
          "On stalling: certified out-of-court dispute body (DSA Art. 21) or action at consumer's home court with an injunction if items are at risk.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "My child is banned - what can I do?",
        a:
          "With minors you have particularly strong levers: § 110 BGB on purchases, GDPR Art. 8 on data. We represent you as your child's legal representative.",
      },
      {
        q: "What does representation cost?",
        a:
          "Initial assessment is free. Fees depend on procedure and stakes - with Limited items or large Robux balances the value at stake is often substantial. Direct billing with legal expense insurance.",
      },
      {
        q: "Do I get Robux and items back?",
        a:
          "Yes, on reactivation the inventory is preserved. On final loss compensation under § 327r BGB - Limiteds are valued at market price, not purchase price.",
      },
      {
        q: "My child bought Robux secretly - reclaimable?",
        a:
          "Yes, purchases by minors without parental consent are voidable under § 110 BGB. If Roblox bans because of that, the ban itself is unlawful.",
      },
      {
        q: "Roblox doesn't respond to complaints - is that even allowed?",
        a:
          "That is the DSA violation. DSA Art. 20 requires functioning internal complaints. Platform stalling is its own lever.",
      },
      {
        q: "Multiple family members affected via IP - what now?",
        a:
          "IP bans hitting uninvolved family members are disproportionate (§ 307 BGB). We argue for selective banning of the relevant account only.",
      },
    ],
  },
  ctaTitle: "Roblox account banned? We'll review your case in 24 hours.",
};

const discordDe: PillarContent = {
  hero: {
    eyebrow: "Discord",
    headline: "Discord-Account disabled? Server-Ban? Wir greifen die Off-Platform-Klauseln an.",
    sub:
      "Account-Disable, Nitro-Verlust, Server-Bans, Off-Platform-Behaviour-Sperren: Discord muss DSA-konform begründen und darf Verhalten außerhalb der Plattform nicht beliebig sanktionieren.",
  },
  problems: {
    title: "Typische Discord-Sperrungen",
    items: [
      "Account-Disable wegen „Off-Platform-Behaviour\" auf Basis von Twitter-Posts",
      "Permanent-Ban wegen angeblicher Hassrede ohne genaue Quellen­angabe",
      "Verlust gekaufter Nitro-Subscription, Server-Boosts und Profile-Items",
      "Server-Owner-Ban führt zur Schließung der ganzen Community",
      "Spam-Vorwurf bei legitimen Marketing-Servern",
      "Doxing-Vorwurf trotz veröffentlichter Daten",
      "Sperre wegen Bot-Verdacht bei legitimen Nutzern",
      "Nitro-Erstattung nach Sperre verweigert",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "Discord Netherlands B.V. (Amsterdam) unterliegt voll dem DSA und der DSGVO. Off-Platform-Klauseln und „at sole discretion\"-Sperrrechte sind nach BGH-Linie angreifbar.",
    arguments: [
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Discord muss bei jeder Sperrung Statement of Reasons liefern: konkrete Tatsachen, AGB-Klausel, Quelle. „Violation of Community Guidelines\" ohne Details reicht nicht.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "AGB-Kontrolle Off-Platform-Klausel",
        desc:
          "Discords „we may consider behaviour outside the platform\"-Klausel ist bei verbraucherbenachteiligender Auslegung nach § 307 BGB unwirksam - Verhalten auf Twitter rechtfertigt keinen Discord-Ban.",
      },
      {
        paragraph: "Art. 22 DSGVO",
        title: "Verbot rein automatisierter Entscheidungen",
        desc:
          "Discord-Trust-and-Safety arbeitet stark KI-gestützt. Permanente Sperren ohne menschliche Letztkontrolle sind nach EuGH C-634/21 unzulässig.",
      },
      {
        paragraph: "§§ 327 c, m, r BGB",
        title: "Digitale-Inhalte-Recht",
        desc:
          "Nitro-Subscription, Server-Boosts, Profile-Items sind digitale Inhalte. Verlust ohne Erstattung ist unzulässig - Sie haben Anspruch auf anteilige Rückzahlung.",
      },
      {
        paragraph: "BGH III ZR 179/20",
        title: "Verfahrenstrias",
        desc:
          "Vor permanenter Sperre: Vorab-Anhörung, konkrete Begründung, Beschwerdemöglichkeit. Discord verletzt diese Trias regelmäßig - Sperrung deshalb rechtswidrig.",
      },
      {
        paragraph: "Art. 18 Brüssel-Ia-VO",
        title: "Klage am Wohnsitz",
        desc:
          "Gegen Discord Netherlands B.V. klagen Sie als Verbraucher am eigenen Wohnsitz. Discord muss vor jedem EU-Mitgliedstaat antreten - der US-Sitz spielt keine Rolle.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & DSGVO-Auskunft",
        desc:
          "Wir sichern Sperrnachricht, Account-Daten, Kaufhistorie und stellen Art. 15 DSGVO-Anfrage - Discord muss interne Trust-and-Safety-Logs offenlegen.",
      },
      {
        title: "DSA-Beschwerde (Art. 20)",
        desc:
          "Interne Beschwerde bei Discord DSA-konform mit konkreten Hebeln. Bei Off-Platform-Sperren oft erfolgreich - die rechtliche Grundlage ist häufig schwach.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc:
          "Förmliches Schreiben an Discord Netherlands B.V. mit Wertersatz und 14-Tage-Frist. Schadensersatz nach DSA Art. 54 angekündigt.",
      },
      {
        title: "ADR oder Klage",
        desc:
          "Bei Stillstand zertifizierte Out-of-Court Dispute Body (Art. 21 DSA) oder Klage am Verbraucherwohnsitz mit einstweiliger Verfügung.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Discord sperrt wegen Verhalten auf einer anderen Plattform - geht das?",
        a:
          "Eingeschränkt. Off-Platform-Klauseln sind bei verbraucherbenachteiligender Anwendung nach § 307 BGB unwirksam. Discord muss konkret darlegen, warum das Drittverhalten den Plattformbetrieb stört.",
      },
      {
        q: "Mein Server mit 50.000 Mitgliedern wurde geschlossen - was tun?",
        a:
          "Server-Owner-Bans sind besonders gravierend. Wir prüfen Wiederherstellung des Servers, einstweilige Verfügung bei drohendem Community-Verlust und Schadensersatz für entgangene Einnahmen.",
      },
      {
        q: "Was kostet die Vertretung?",
        a:
          "Ersteinschätzung kostenlos. Honorare hängen von Verfahrensart und Streitwert ab. Bei Server-Ownern mit Monetarisierung oft erheblicher Streitwert - bei Rechtsschutz Direktabrechnung.",
      },
      {
        q: "Bekomme ich Nitro-Geld zurück?",
        a:
          "Ja, anteilig für ungenutzte Laufzeit nach §§ 327 ff. BGB. Bei rechtswidriger Sperre haben Sie Anspruch auf Reaktivierung oder volle Rückerstattung.",
      },
      {
        q: "Discord antwortet nicht auf meine Beschwerde - was tun?",
        a:
          "Stillstand des Beschwerdesystems verstößt gegen Art. 20 DSA. Wir reichen direkt anwaltliche Beschwerde mit Frist ein und ziehen bei Bedarf zur Out-of-Court-Stelle.",
      },
      {
        q: "Wie lange dauert eine Reaktivierung?",
        a:
          "Außergerichtlich oft 14–30 Tage. Bei einstweiliger Verfügung Tage bis Wochen. Bei wichtigen Servern empfehlen wir den Eilweg.",
      },
    ],
  },
  ctaTitle: "Discord disabled? Wir prüfen Ihren Fall in 24 Stunden.",
};

const discordEn: PillarContent = {
  hero: {
    eyebrow: "Discord",
    headline: "Discord disabled? Server banned? We challenge the off-platform clauses.",
    sub:
      "Account disable, Nitro loss, server bans, off-platform behaviour suspensions: Discord must justify under the DSA and can't sanction off-platform conduct at will.",
  },
  problems: {
    title: "Typical Discord suspensions",
    items: [
      "Account disable for 'off-platform behaviour' based on tweets",
      "Permanent ban for alleged hate speech without specific source citations",
      "Loss of Nitro, server boosts, and profile items",
      "Server-owner ban that closes the entire community",
      "Spam allegation against legitimate marketing servers",
      "Doxing claim despite already-public information",
      "Suspension for bot suspicion against legitimate users",
      "Nitro refund denied after suspension",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "Discord Netherlands B.V. (Amsterdam) is fully subject to DSA and GDPR. Off-platform clauses and 'at sole discretion' suspension rights are challengeable under BGH case law.",
    arguments: [
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Discord must give Statement of Reasons on every suspension: concrete facts, ToS clause, source. 'Violation of Community Guidelines' without detail is not enough.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "Off-platform clause control",
        desc:
          "Discord's 'we may consider behaviour outside the platform' clause is invalid under § 307 BGB if applied to consumer detriment - Twitter behaviour does not justify a Discord ban.",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "Ban on solely automated decisions",
        desc:
          "Discord Trust & Safety relies heavily on AI. Permanent bans without human oversight are unlawful per ECJ C-634/21.",
      },
      {
        paragraph: "§§ 327c, m, r BGB",
        title: "Digital-content consumer rights",
        desc:
          "Nitro, server boosts, profile items are digital content. Loss without refund is unlawful - you have a pro-rata refund claim.",
      },
      {
        paragraph: "BGH III ZR 179/20",
        title: "Procedural triad",
        desc:
          "Before a permanent ban: prior hearing, concrete reasons, appeal route. Discord regularly violates this triad - the ban is therefore unlawful.",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Sue at consumer's home court",
        desc:
          "Against Discord Netherlands B.V. you sue at home as a consumer. Discord must appear in any EU member state - the US base is irrelevant.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & GDPR data request",
        desc:
          "We secure suspension notice, account data, purchase history, and file a GDPR Art. 15 request - Discord must disclose internal Trust & Safety logs.",
      },
      {
        title: "DSA complaint (Art. 20)",
        desc:
          "Internal complaint, DSA-compliant, with concrete levers. Off-platform bans often succeed at this stage - the legal basis is frequently weak.",
      },
      {
        title: "Formal letter with deadline",
        desc:
          "Formal letter to Discord Netherlands B.V. with quantified compensation and 14-day deadline. Damages noticed under DSA Art. 54.",
      },
      {
        title: "ADR or court action",
        desc:
          "On stalling: certified out-of-court dispute body (DSA Art. 21) or action at consumer's home court with an injunction.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Discord banned me for behaviour on another platform - is that allowed?",
        a:
          "Limited. Off-platform clauses are invalid under § 307 BGB if used to consumer detriment. Discord must specifically show why off-platform conduct disrupts platform operation.",
      },
      {
        q: "My 50,000-member server was closed - what now?",
        a:
          "Server-owner bans are particularly serious. We pursue server reinstatement, an injunction if community loss is imminent, and damages for lost revenue.",
      },
      {
        q: "What does representation cost?",
        a:
          "Initial assessment is free. Fees depend on procedure and stakes. Server owners with monetization often have substantial value at stake - direct billing with legal expense insurance.",
      },
      {
        q: "Do I get my Nitro money back?",
        a:
          "Yes, pro-rata for unused term under §§ 327ff. BGB. On unlawful suspension you have a claim to reactivation or full refund.",
      },
      {
        q: "Discord doesn't reply to my complaint - what now?",
        a:
          "A non-functional complaint system breaches DSA Art. 20. We file lawyer-led complaint with deadline directly and escalate to the out-of-court body if needed.",
      },
      {
        q: "How long until reactivation?",
        a:
          "Out-of-court often 14–30 days. With an injunction days to weeks. For important servers we recommend the urgent route.",
      },
    ],
  },
  ctaTitle: "Discord disabled? We'll review your case in 24 hours.",
};

const amazonDe: PillarContent = {
  hero: {
    eyebrow: "Amazon Seller Central",
    headline: "Amazon-Seller-Account gesperrt? P2B-VO greift mit harten Pflichten.",
    sub:
      "Seller-Suspension, 90-Tage-Funds-Hold, ASIN-Block, Section-3-Sperre: Amazon unterliegt der EU-P2B-Verordnung mit 30-Tage-Vorwarnpflicht. Streitwerte 5- bis 6-stellig.",
  },
  problems: {
    title: "Typische Amazon-Sperrungen",
    items: [
      "Account-Suspension wegen „Inauthentic Items\"-Vorwurf trotz Original-Ware",
      "90-Tage-Funds-Hold mit teils 6-stelligen Beträgen",
      "ASIN-Block ganzer Produktkategorien ohne Begründung",
      "Section-3-Sperre wegen angeblicher Markenrechtsverletzung",
      "Sperre nach Kunden-Reklamationsrate ohne tatsächliche Mängel",
      "Plötzliche Sperre nach Audit-Anfrage trotz vollständiger Antwort",
      "Verifizierungs-Loop: Account gesperrt für angebliche Doppelkonten",
      "Brand-Registry-Verlust mit anschließender Account-Sperre",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "Amazon Services Europe S.à r.l. (Luxemburg) unterliegt der P2B-Verordnung 2019/1150 - eine der seller-freundlichsten EU-Regelungen mit harten Begründungs- und Vorwarnpflichten.",
    arguments: [
      {
        paragraph: "Art. 4 P2B-VO",
        title: "30-Tage-Vorwarnpflicht",
        desc:
          "Amazon muss vor jeder Vollständigen Beendigung 30 Tage vorher schriftlich begründet warnen. Sofortige Suspensions sind nur bei akuten Verstößen zulässig - sonst formell rechtswidrig.",
      },
      {
        paragraph: "Art. 11 P2B-VO",
        title: "Internes Beschwerdesystem",
        desc:
          "Amazon muss kostenfreies Beschwerdesystem mit individueller Bearbeitung und Begründung der Entscheidung anbieten. Standard-Antworten erfüllen das nicht.",
      },
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Zusätzlich zur P2B-VO greift seit 2024 der DSA. Amazon muss konkrete Tatsachen, Klausel und Beschwerdeweg nennen. Pauschal­vorwürfe wie „Inauthentic\" reichen nicht.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Schadensersatz Funds-Hold",
        desc:
          "Bei rechtswidrigem 90-Tage-Hold haben Sie Anspruch auf Verzugsschaden plus Folgeschäden (entgangener Gewinn, Liquiditätsschäden). Amazon haftet nach § 280 BGB voll.",
      },
      {
        paragraph: "Art. 12 P2B-VO",
        title: "Mediation",
        desc:
          "P2B-Streitigkeiten gehören vor Mediator. Amazon muss benennen und Verfahren mitfinanzieren - das ist ein Hebel auch zur Beschleunigung außergerichtlicher Einigung.",
      },
      {
        paragraph: "Art. 7 Brüssel-Ia-VO",
        title: "Klage am Erfüllungsort",
        desc:
          "Bei B2B-Sellern Klage am Erfüllungsort des Vertrages - bei deutschen Sellern oft am eigenen Sitz. Amazons US-Klauseln sind im B2B-Kontext ebenfalls eingeschränkt durchsetzbar.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & Dokumentation",
        desc:
          "Wir sichern Performance-Notifications, A-to-Z-Claims, Funds-Hold-Beträge, Verifizierungs-Korrespondenz und Inventardaten. P2B-konforme Begründung wird angefordert.",
      },
      {
        title: "P2B + DSA-Beschwerde",
        desc:
          "Doppelte Beschwerde: Amazon-Beschwerdesystem nach Art. 11 P2B + DSA Art. 20. Frist für inhaltliche Antwort plus Hold-Freigabe innerhalb 14 Tagen.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc:
          "Förmliches Schreiben an Amazon Services Europe mit Schadens­bezifferung (Hold + Folgeschäden) und 14-Tage-Frist. Mediation und ggf. Klage angekündigt.",
      },
      {
        title: "Mediation oder Klage",
        desc:
          "Bei Stillstand: Mediation nach Art. 12 P2B (oft schnell wirksam, da Amazon das EU-weite Eskalationsrisiko meidet) oder Klage mit einstweiliger Verfügung auf Hold-Freigabe.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Was ist die P2B-Verordnung?",
        a:
          "Die EU-P2B-VO 2019/1150 schützt gewerbliche Plattform-Seller. Sie zwingt Amazon zu 30-Tage-Vorwarnung, individueller Begründung, internem Beschwerdesystem und Mediation. Stärkster Hebel im B2B-Bereich.",
      },
      {
        q: "Funds-Hold läuft seit Wochen - was kann ich tun?",
        a:
          "Bei rechtswidriger Hold-Auslösung haben Sie Anspruch auf sofortige Freigabe plus Schadensersatz (Verzugszinsen, entgangener Gewinn, Liquiditätsschäden). Einstweilige Verfügung möglich.",
      },
      {
        q: "Was kostet die Vertretung?",
        a:
          "Ersteinschätzung kostenlos. Bei Funds-Hold-Streitwerten oft schnell Argument für Erfolgshonorar-Anteil. Bei Rechtsschutz-Versicherung Direktabrechnung möglich.",
      },
      {
        q: "Mein Account ist wegen „Inauthentic\" gesperrt - was tun?",
        a:
          "Bei Originalware mit lückenloser Lieferkette ist der Vorwurf widerlegbar. Wir reichen Lieferketten-Dokumentation ein, fechten die Sperre formell an und setzen Wiedereröffnung durch.",
      },
      {
        q: "Wie schnell kann ich wieder verkaufen?",
        a:
          "Bei guter Dokumentation oft 14–30 Tage. Bei einstweiliger Verfügung Tage. Im B2B-Kontext spielt die schnelle Mediation oft eine entscheidende Rolle.",
      },
      {
        q: "Gilt das auch bei FBA-Inventar?",
        a:
          "Ja. FBA-Inventar im Lager ist Ihr Eigentum - bei rechtswidriger Sperre haben Sie Anspruch auf Herausgabe oder Verkauf. Amazon haftet für Lager­schäden während rechtswidriger Sperre.",
      },
    ],
  },
  ctaTitle: "Amazon-Seller gesperrt? Wir prüfen Ihren Fall in 24 Stunden.",
};

const amazonEn: PillarContent = {
  hero: {
    eyebrow: "Amazon Seller Central",
    headline: "Amazon seller account suspended? P2B Regulation gives you hard rights.",
    sub:
      "Seller suspension, 90-day funds hold, ASIN block, Section 3 suspension: Amazon is bound by the EU P2B Regulation with mandatory 30-day notice. Stakes typically 5- to 6-figure.",
  },
  problems: {
    title: "Typical Amazon suspensions",
    items: [
      "Account suspension for 'Inauthentic Items' allegations despite original goods",
      "90-day funds hold tying up 6-figure amounts",
      "ASIN block on whole categories without reasoning",
      "Section 3 suspension for alleged trademark infringement",
      "Suspension over customer complaint rate without actual defects",
      "Sudden suspension after audit despite full reply",
      "Verification loop: account locked for alleged duplicate accounts",
      "Brand Registry loss followed by account suspension",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "Amazon Services Europe S.à r.l. (Luxembourg) is subject to P2B Regulation 2019/1150 - one of the most seller-friendly EU rules, with hard reasoning and notice obligations.",
    arguments: [
      {
        paragraph: "P2B Art. 4",
        title: "30-day prior notice",
        desc:
          "Amazon must give 30 days' written reasoned notice before any full termination. Immediate suspensions are only allowed for acute breaches - otherwise formally unlawful.",
      },
      {
        paragraph: "P2B Art. 11",
        title: "Internal complaint system",
        desc:
          "Amazon must operate a free complaint system with individualised handling and reasoning. Generic responses don't satisfy that.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "On top of the P2B Regulation, the DSA applies since 2024. Amazon must give concrete facts, clause and appeal route. Generic 'Inauthentic' allegations don't suffice.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Damages for funds hold",
        desc:
          "An unlawful 90-day hold triggers default-interest plus consequential damages (lost profits, liquidity damages). Amazon is fully liable under § 280 BGB.",
      },
      {
        paragraph: "P2B Art. 12",
        title: "Mediation",
        desc:
          "P2B disputes go before a mediator. Amazon must designate one and co-fund the procedure - itself a lever to accelerate out-of-court settlements.",
      },
      {
        paragraph: "Brussels Ia Art. 7",
        title: "Sue at place of performance",
        desc:
          "B2B sellers sue at the place of contract performance - for German sellers often at their seat. Amazon's US clauses are also limited in B2B enforceability.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & documentation",
        desc:
          "We secure performance notifications, A-to-Z claims, hold amounts, verification correspondence, and inventory data. We request P2B-compliant reasoning.",
      },
      {
        title: "P2B + DSA complaint",
        desc:
          "Dual complaint: Amazon's internal system per P2B Art. 11 plus DSA Art. 20. Deadline for substantive reply plus hold release within 14 days.",
      },
      {
        title: "Formal letter with deadline",
        desc:
          "Formal letter to Amazon Services Europe with quantified damages (hold + consequential) and a 14-day deadline. Mediation and possible action announced.",
      },
      {
        title: "Mediation or court action",
        desc:
          "On stalling: P2B Art. 12 mediation (often effective quickly because Amazon avoids EU-wide escalation risk) or action with an injunction to release the hold.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What is the P2B Regulation?",
        a:
          "EU Regulation 2019/1150 protects business platform sellers. It forces Amazon to give 30-day notice, individual reasoning, an internal complaint system, and mediation. Strongest lever in B2B.",
      },
      {
        q: "Funds hold has run for weeks - what can I do?",
        a:
          "On unlawful hold you have a claim to immediate release plus damages (default interest, lost profit, liquidity damages). Injunction is available.",
      },
      {
        q: "What does representation cost?",
        a:
          "Initial assessment is free. With sizeable hold values there is often quickly a case for a success fee component. Direct billing with legal expense insurance.",
      },
      {
        q: "My account is suspended for 'Inauthentic' - what now?",
        a:
          "With original goods and a complete supply chain the allegation is rebuttable. We file supply-chain documentation, formally challenge the suspension, and push reactivation.",
      },
      {
        q: "How fast can I sell again?",
        a:
          "With good documentation often 14–30 days. With an injunction days. In B2B fast mediation is often decisive.",
      },
      {
        q: "Does this also apply to FBA inventory?",
        a:
          "Yes. FBA inventory is your property - on unlawful suspension you have a claim to handover or sale. Amazon is liable for warehouse damages during unlawful suspension.",
      },
    ],
  },
  ctaTitle: "Amazon seller suspended? We'll review your case in 24 hours.",
};

const cryptoDe: PillarContent = {
  hero: {
    eyebrow: "Coinbase · Binance · Krypto-Börsen",
    headline: "Coins eingefroren? Withdrawal gesperrt? MiCA und BaFin sind Ihr Hebel.",
    sub:
      "KYC-Holds, Withdrawal-Locks, eingefrorene Bestände, eingestellte Auszahlungen: Bei MiCA-lizenzierten Anbietern in der EU gelten klare Pflichten. Bei Coinbase Europe ist BaFin-Beschwerde möglich.",
  },
  problems: {
    title: "Typische Krypto-Sperrungen",
    items: [
      "KYC-Hold mit eingefrorenen 5- bis 6-stelligen Beträgen",
      "Withdrawal-Sperre nach plötzlichem Source-of-Funds-Audit",
      "Account-Schließung nach Source-of-Wealth-Vorwurf trotz vollständiger Belege",
      "Eingefrorene Coins wegen Tornado-Cash-Verdacht ohne konkrete Tatsachen",
      "Geo-Block trotz EU-Zuständigkeit der Lizenz",
      "Steuerliche Doppelmeldung mit Sperre als Hebel",
      "OnRamp-Provider-Sperre durch Drittpartei (Stripe, Banking-Backend)",
      "Plötzlicher Lock bei großen Auszahlungen ohne Vorab-Warnung",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "MiCA gilt seit Dezember 2024 vollständig. Coinbase Europe Ltd. (Irland) ist BaFin-aufsichtsrelevant. Binance hat keine EU-MiCA-Lizenz - das verändert die Hebel, schwächt sie aber nicht.",
    arguments: [
      {
        paragraph: "Art. 75 MiCA",
        title: "Pflicht zur ordnungsgemäßen Verwahrung",
        desc:
          "Lizenzierte CASPs müssen Kundenkrypto getrennt verwahren und auf Anforderung herausgeben. Pauschale Holds ohne Rechtsgrundlage verletzen Art. 75 MiCA - Hebel auch gegenüber BaFin.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Schadensersatz Hold-Schäden",
        desc:
          "Bei rechtswidrigem Hold haben Sie Schadensersatzanspruch für Verzugsschaden plus Folgeschäden (entgangene Tradinggewinne, Kursverluste während Hold-Phase).",
      },
      {
        paragraph: "Art. 22 DSGVO",
        title: "Verbot rein automatisierter Entscheidungen",
        desc:
          "Krypto-Compliance-KI trifft Sperrungen oft ohne menschliche Letztkontrolle. Bei beträchtlichen Holds ist das nach EuGH C-634/21 unzulässig.",
      },
      {
        paragraph: "BaFin-Beschwerde",
        title: "Aufsichtliche Eskalation",
        desc:
          "Coinbase Europe untersteht BaFin (über CSSF/BaFin-Kooperation). Wir nutzen die BaFin-Beschwerde als Druckmittel - oft schneller als Klage und mit aufsichtlicher Wucht.",
      },
      {
        paragraph: "GwG / AMLD",
        title: "Source of Funds richtig dokumentieren",
        desc:
          "AML-Pflichten sind real - aber proportional. Wir helfen, vollständige Source-of-Funds-Dokumente zu liefern und entkräften so den AML-Vorwurf rechtssicher.",
      },
      {
        paragraph: "Art. 18 Brüssel-Ia-VO",
        title: "Klage am Wohnsitz",
        desc:
          "Gegen Coinbase Europe Ltd. klagen Sie als Verbraucher am eigenen Wohnsitz. Bei Binance ist die Lage komplexer - wir prüfen den passenden Gerichtsstand individuell.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & Dokumentation",
        desc:
          "Wir sichern Sperrnachricht, Transaktionshistorie, Source-of-Funds-Dokumente und Kommunikation. Bei großen Bestände ist lückenlose Dokumentation entscheidend.",
      },
      {
        title: "Source-of-Funds + Compliance-Antwort",
        desc:
          "Strukturierte Antwort an die Plattform mit allen erforderlichen AML-Dokumenten. Bei rechtmäßigen Quellen reicht das oft schon zur Freigabe.",
      },
      {
        title: "Anwaltsschreiben + BaFin-Beschwerde",
        desc:
          "Bei Stillstand parallel: anwaltliches Schreiben mit Frist + BaFin-Beschwerde (bei Coinbase). Bei Binance ggf. CySEC oder andere Aufsicht je nach Domizil.",
      },
      {
        title: "Einstweilige Verfügung oder Klage",
        desc:
          "Bei Stillstand und drohendem Schaden einstweilige Verfügung auf Freigabe der Coins. Bei großen Beständen oft entscheidend wegen Volatilität.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Coinbase friert mein Guthaben ein - was kann ich tun?",
        a:
          "Erst Source of Funds vollständig liefern. Bleibt der Hold trotz vollständiger Dokumentation, ist er rechtswidrig - dann anwaltliches Schreiben + BaFin-Beschwerde + ggf. einstweilige Verfügung.",
      },
      {
        q: "Was ist der Unterschied bei Binance?",
        a:
          "Binance hat keine EU-MiCA-Lizenz und operiert über mehrere Rechtsträger. Das verändert den Gerichtsstand und die Aufsicht, schwächt aber nicht zwingend Ihre Ansprüche - wir prüfen den passenden Hebel je Fall.",
      },
      {
        q: "Bei Tornado-Cash-Verdacht - was tun?",
        a:
          "Pauschaler Tornado-Cash-Verdacht ohne konkrete Tatsachen reicht für Hold nicht aus. Wir argumentieren auf Basis der OFAC-Aufhebung von 2024 und konkretem Source of Funds.",
      },
      {
        q: "Was kostet die Vertretung?",
        a:
          "Ersteinschätzung kostenlos. Bei größeren Holds spielt das Verhältnis Honorar/Streitwert eine wichtige Rolle - wir kalkulieren transparent. Bei Rechtsschutz Direktabrechnung.",
      },
      {
        q: "Wie schnell kann ich auszahlen?",
        a:
          "Bei vollständiger SoF oft 14–30 Tage. Bei einstweiliger Verfügung Tage. Volatilität spielt eine Rolle - bei großen Beständen empfehlen wir den Eilweg.",
      },
      {
        q: "Bekomme ich auch Kursverluste ersetzt?",
        a:
          "Ja, bei rechtswidrigem Hold haben Sie Anspruch auf Ersatz konkret bezifferbarer Kursverluste während der Hold-Phase nach § 280 BGB.",
      },
    ],
  },
  ctaTitle: "Krypto-Konto eingefroren? Wir prüfen Ihren Fall in 24 Stunden.",
};

const cryptoEn: PillarContent = {
  hero: {
    eyebrow: "Coinbase · Binance · Crypto exchanges",
    headline: "Coins frozen? Withdrawal locked? MiCA and BaFin are your levers.",
    sub:
      "KYC holds, withdrawal locks, frozen balances, halted payouts: with MiCA-licensed providers in the EU, clear duties apply. With Coinbase Europe, BaFin complaint is possible.",
  },
  problems: {
    title: "Typical crypto suspensions",
    items: [
      "KYC hold tying up 5- to 6-figure balances",
      "Withdrawal lock after sudden source-of-funds audit",
      "Account closure for source-of-wealth allegations despite full evidence",
      "Frozen coins for Tornado Cash suspicion without specific facts",
      "Geo block despite EU jurisdiction of the licence",
      "Tax double-reporting with suspension as leverage",
      "OnRamp provider suspension by a third party (Stripe, banking back-end)",
      "Sudden lock on large withdrawals without prior warning",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "MiCA applies fully since December 2024. Coinbase Europe Ltd. (Ireland) is within BaFin oversight. Binance has no EU MiCA licence - which changes the levers but does not weaken them.",
    arguments: [
      {
        paragraph: "MiCA Art. 75",
        title: "Proper safekeeping obligation",
        desc:
          "Licensed CASPs must segregate client crypto and release it on request. Generic holds without legal basis breach MiCA Art. 75 - a lever also vis-à-vis BaFin.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Damages for hold losses",
        desc:
          "On unlawful hold you have a damages claim for default plus consequential damages (lost trading gains, price losses during the hold).",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "Ban on solely automated decisions",
        desc:
          "Crypto compliance AI often suspends without human oversight. With sizeable holds that's unlawful under ECJ C-634/21.",
      },
      {
        paragraph: "BaFin complaint",
        title: "Regulatory escalation",
        desc:
          "Coinbase Europe is under BaFin (via CSSF/BaFin cooperation). We use the BaFin complaint as leverage - often faster than litigation and with regulatory weight.",
      },
      {
        paragraph: "AMLD / GwG",
        title: "Document source of funds correctly",
        desc:
          "AML duties are real - but proportionate. We help deliver complete source-of-funds documents and rebut AML allegations on a sound legal basis.",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Sue at consumer's home court",
        desc:
          "Against Coinbase Europe Ltd. consumers sue at home. With Binance the picture is more complex - we assess the right venue case by case.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & documentation",
        desc:
          "We secure suspension notice, transaction history, source-of-funds documents, and correspondence. With large balances complete documentation is decisive.",
      },
      {
        title: "Source of Funds + compliance reply",
        desc:
          "Structured reply to the platform with all required AML documents. With lawful sources that often suffices to release.",
      },
      {
        title: "Lawyer letter + BaFin complaint",
        desc:
          "On stalling in parallel: lawyer letter with deadline + BaFin complaint (Coinbase). For Binance, CySEC or other regulators depending on domicile.",
      },
      {
        title: "Injunction or court action",
        desc:
          "On stalling and imminent loss, an injunction to release the coins. With large balances often decisive given volatility.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Coinbase froze my balance - what can I do?",
        a:
          "First deliver complete source of funds. If the hold persists despite full documentation it's unlawful - then lawyer letter + BaFin complaint + possible injunction.",
      },
      {
        q: "What's different with Binance?",
        a:
          "Binance has no EU MiCA licence and operates through multiple entities. That changes venue and oversight but does not necessarily weaken your claims - we assess the right lever per case.",
      },
      {
        q: "What about Tornado Cash suspicion?",
        a:
          "A generic Tornado Cash suspicion without concrete facts is not enough to hold. We argue based on the 2024 OFAC delisting and concrete source of funds.",
      },
      {
        q: "What does representation cost?",
        a:
          "Initial assessment is free. With larger holds the fee/stakes ratio matters - we calculate transparently. Direct billing with legal expense insurance.",
      },
      {
        q: "How fast can I withdraw?",
        a:
          "With complete SoF often 14–30 days. With an injunction days. Volatility matters - with large balances we recommend the urgent route.",
      },
      {
        q: "Are price losses also compensable?",
        a:
          "Yes, on unlawful holds you have a claim for quantifiable price losses during the hold phase under § 280 BGB.",
      },
    ],
  },
  ctaTitle: "Crypto account frozen? We'll review your case in 24 hours.",
};

const ebayDe: PillarContent = {
  hero: {
    eyebrow: "eBay",
    headline: "eBay-Konto gesperrt? BGH-Linie schützt Sie als Verkäufer.",
    sub:
      "Verkäuferkonto-Sperre, Managed-Payments-Hold, PowerSeller-Verlust, Bewertungs-Aussetzung: BGH VIII ZR 244/10 zeigt klare Linien - eBay darf nicht beliebig sperren.",
  },
  problems: {
    title: "Typische eBay-Sperrungen",
    items: [
      "Verkäuferkonto-Sperre wegen angeblich verspäteten Versands",
      "Managed-Payments-Hold mit gebundenem Verkaufserlös",
      "Mehrfach-Konten-Vorwurf bei Familien­nutzung im selben Haushalt",
      "Sperre wegen Markenrechtsverletzung trotz dokumentierter Originalware",
      "PowerSeller-Verlust nach Bewertungseinbruch durch wenige Reklamationen",
      "Geld-zurück-Garantie missbraucht zur Account-Belastung",
      "Sperre nach Käufer-Reklamation ohne Anhörung des Verkäufers",
      "Dauerhafte Sperre wegen alter Reklamation aus Vorjahren",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "eBay GmbH (Deutschland) und eBay Marketplaces GmbH unterliegen deutschem Recht und der P2B-VO. BGH VIII ZR 244/10 hat klare Linien gezogen: Sperre nur bei wichtigem Grund.",
    arguments: [
      {
        paragraph: "BGH VIII ZR 244/10",
        title: "Sperre nur bei wichtigem Grund",
        desc:
          "Bei eBay-Verkäuferkonten gilt: Sperre nur bei wichtigem Grund mit Abwägung der Interessen. Pauschal­sperren sind rechtswidrig - der BGH hat die Linie für Plattform-Sperren gesetzt.",
      },
      {
        paragraph: "Art. 4 P2B-VO",
        title: "30-Tage-Vorwarnpflicht",
        desc:
          "Bei vollständiger Beendigung muss eBay 30 Tage vorher schriftlich begründet warnen. Sofortige Sperren nur bei akuten Verstößen - sonst formell rechtswidrig.",
      },
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Seit 2024: konkrete Tatsachen, AGB-Klausel, Beschwerdeweg. eBay muss präzise nennen, welche Klausel verletzt sein soll - „mehrfache Verstöße\" reicht nicht.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "AGB-Kontrolle",
        desc:
          "eBay-Klauseln zu „at sole discretion\"-Sperrungen sind nach § 307 BGB unwirksam. Wir argumentieren auf Basis der BGH-Verfahrenstrias auch im eBay-Kontext.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Schadensersatz Hold",
        desc:
          "Bei rechtswidrigem Managed-Payments-Hold haben Sie Anspruch auf Verzugsschaden plus entgangenen Gewinn aus blockierter Liquidität.",
      },
      {
        paragraph: "Art. 7 Brüssel-Ia-VO",
        title: "Klage in Deutschland",
        desc:
          "Bei eBay GmbH (Sitz Kleinmachnow/Dreilinden) Klage am eigenen Sitz oder Erfüllungsort - kein US-Forum. eBay muss vor deutschen Gerichten antreten.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & Dokumentation",
        desc:
          "Wir sichern Sperrnachricht, Verkaufshistorie, Bewertungen, Reklamationen, Hold-Beträge und Korrespondenz - inklusive Auskunftsanfrage zu internen Risk-Logs.",
      },
      {
        title: "P2B + DSA-Beschwerde",
        desc:
          "Doppelte Beschwerde im internen System mit konkreten BGH- und DSA-Hebeln. Bei eBay-Deutschland ist die rechtliche Lage besonders günstig.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc:
          "Förmliches Schreiben an eBay GmbH mit Wertersatz und 14-Tage-Frist. Schadensersatz nach DSA Art. 54 + § 280 BGB für Hold-Schaden.",
      },
      {
        title: "Mediation oder Klage",
        desc:
          "Bei Stillstand: P2B-Mediation oder Klage am eigenen Sitz mit einstweiliger Verfügung auf Hold-Freigabe und Account-Reaktivierung.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Was bedeutet BGH VIII ZR 244/10 für meinen Fall?",
        a:
          "Der BGH hat entschieden, dass eBay-Sperren nur bei wichtigem Grund zulässig sind, mit Interessenabwägung. Diese Linie ist seit 2014 ständige Rechtsprechung - der stärkste Hebel im eBay-Kontext.",
      },
      {
        q: "Mein Managed-Payments-Hold läuft - was tun?",
        a:
          "Hold ohne wichtigen Grund ist rechtswidrig. Sie haben Anspruch auf Freigabe plus Verzugsschaden. Bei großen Beträgen einstweilige Verfügung möglich.",
      },
      {
        q: "Was kostet die Vertretung?",
        a:
          "Ersteinschätzung kostenlos. Honorare hängen von Verfahrensart und Streitwert ab. Bei Power­Sellern oft erheblicher Streitwert - bei Rechtsschutz Direktabrechnung möglich.",
      },
      {
        q: "Familienkonten getrennt? eBay sieht das als Verstoß.",
        a:
          "Bei legitimer Familiennutzung mit verschiedenen Personen ist Mehrfach­konten-Vorwurf widerlegbar. Wir dokumentieren die Trennung und fechten die Sperre formell an.",
      },
      {
        q: "Wie schnell kann ich wieder verkaufen?",
        a:
          "Bei guter Dokumentation oft 14–30 Tage. Bei einstweiliger Verfügung Tage. eBay-Deutschland ist im EU-Vergleich oft kooperativer wegen klarer BGH-Linie.",
      },
      {
        q: "Bekomme ich Bewertungsverlust ersetzt?",
        a:
          "Eingeschränkt. Konkrete Schäden aus Bewertungs­verlust (z.B. PowerSeller-Vorteile) sind grundsätzlich ersatzfähig - reine Reputationsschäden sind schwerer zu beziffern, aber nicht ausgeschlossen.",
      },
    ],
  },
  ctaTitle: "eBay-Konto gesperrt? Wir prüfen Ihren Fall in 24 Stunden.",
};

const ebayEn: PillarContent = {
  hero: {
    eyebrow: "eBay",
    headline: "eBay account suspended? German Federal Court precedent protects you.",
    sub:
      "Seller suspension, managed-payments hold, PowerSeller loss, feedback freezes: BGH VIII ZR 244/10 sets clear lines - eBay can't suspend at will.",
  },
  problems: {
    title: "Typical eBay suspensions",
    items: [
      "Seller suspension for alleged late shipping",
      "Managed-payments hold tying up sales proceeds",
      "Multi-account allegation against household family use",
      "Suspension for trademark infringement despite documented original goods",
      "PowerSeller loss after rating drop from a few complaints",
      "Money-back guarantee abused to charge the account",
      "Suspension following buyer claim without seller hearing",
      "Permanent suspension over years-old complaints",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "eBay GmbH (Germany) and eBay Marketplaces GmbH are subject to German law and the P2B Regulation. BGH VIII ZR 244/10 set clear lines: suspension only for good cause.",
    arguments: [
      {
        paragraph: "BGH VIII ZR 244/10",
        title: "Suspension only for good cause",
        desc:
          "For eBay seller accounts: suspension only for good cause with interest balancing. Generic suspensions are unlawful - the BGH set the line for platform suspensions.",
      },
      {
        paragraph: "P2B Art. 4",
        title: "30-day prior notice",
        desc:
          "On full termination eBay must give 30 days' written reasoned notice. Immediate suspensions only on acute breaches - otherwise formally unlawful.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Since 2024: concrete facts, ToS clause, appeal route. eBay must specify which clause is alleged to be breached - 'multiple breaches' isn't enough.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "Unfair-terms control",
        desc:
          "eBay's 'at sole discretion' suspension clauses are invalid under § 307 BGB. We argue from the BGH procedural triad in the eBay context too.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Damages for hold",
        desc:
          "On unlawful managed-payments hold you have a default-damages claim plus lost profit from blocked liquidity.",
      },
      {
        paragraph: "Brussels Ia Art. 7",
        title: "Sue in Germany",
        desc:
          "Against eBay GmbH (seat Kleinmachnow/Dreilinden) sue at your seat or place of performance - no US forum. eBay must appear before German courts.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & documentation",
        desc:
          "We secure suspension notice, sales history, ratings, complaints, hold amounts, and correspondence - including a request for internal risk logs.",
      },
      {
        title: "P2B + DSA complaint",
        desc:
          "Dual complaint in the internal system with concrete BGH and DSA levers. With eBay Germany the legal posture is particularly favourable.",
      },
      {
        title: "Formal letter with deadline",
        desc:
          "Formal letter to eBay GmbH with quantified compensation and 14-day deadline. Damages under DSA Art. 54 + § 280 BGB for the hold.",
      },
      {
        title: "Mediation or court action",
        desc:
          "On stalling: P2B mediation or action at your own seat with an injunction to release the hold and reactivate the account.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What does BGH VIII ZR 244/10 mean for my case?",
        a:
          "The BGH held that eBay suspensions are only valid for good cause, with interest balancing. Standing case law since 2014 - the strongest lever in the eBay context.",
      },
      {
        q: "My managed-payments hold is running - what now?",
        a:
          "A hold without good cause is unlawful. You have a release claim plus default damages. With large amounts an injunction is available.",
      },
      {
        q: "What does representation cost?",
        a:
          "Initial assessment is free. Fees depend on procedure and stakes. PowerSellers often have substantial value at stake - direct billing with legal expense insurance.",
      },
      {
        q: "Family accounts kept separate - eBay sees a violation.",
        a:
          "On legitimate family use by different individuals the multi-account claim is rebuttable. We document the separation and formally challenge the suspension.",
      },
      {
        q: "How fast can I sell again?",
        a:
          "With good documentation often 14–30 days. With an injunction days. eBay Germany is typically more cooperative in EU comparison due to the clear BGH line.",
      },
      {
        q: "Is feedback loss compensated?",
        a:
          "Limited. Concrete damages from feedback loss (e.g., PowerSeller benefits) are recoverable in principle - pure reputation damage is harder to quantify but not excluded.",
      },
    ],
  },
  ctaTitle: "eBay account suspended? We'll review your case in 24 hours.",
};

const xboxDe: PillarContent = {
  hero: {
    eyebrow: "Xbox Live · Microsoft",
    headline: "Xbox-Account gesperrt? Game Pass weg? Verbraucherrecht greift voll.",
    sub:
      "Communications Ban, Enforcement Ban, Device-Ban, Game-Pass-Sperre: Microsoft Ireland ist EU-Verbraucherrecht-pflichtig. Console-Bans als Eigentumseingriff sind besonders angreifbar.",
  },
  problems: {
    title: "Typische Xbox-Sperrungen",
    items: [
      "Permanenter Enforcement-Ban wegen Chat-Verstößen ohne Anhörung",
      "Communications Ban mit Sprach- und Chat-Sperre",
      "Device-Ban der Konsole - Hardware unbenutzbar trotz Eigentum",
      "Verlust des Game-Pass-Abonnements ohne anteilige Erstattung",
      "Cloud-Saves und gekaufte Spiele unzugänglich nach Sperre",
      "Gamertag-Verlust mit Reputations- und History-Schaden",
      "Sperre wegen Chargeback bei Eltern-Rückbuchung Minderjähriger",
      "Microsoft-Konto gesperrt - betrifft auch Office, OneDrive und mehr",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "Microsoft Ireland Operations Ltd. (Dublin) unterliegt EU-Verbraucherrecht und DSA. Der Device-Ban ist juristisch besonders heikel - Microsoft beschneidet Ihr Eigentum an der Hardware.",
    arguments: [
      {
        paragraph: "§§ 327 c, m, r BGB",
        title: "Digitale-Inhalte-Recht",
        desc:
          "Game Pass, gekaufte Spiele, DLC, Cloud-Saves sind digitale Inhalte. Bei Sperrung haben Sie Anspruch auf Wiederherstellung oder Wertersatz. Game-Pass anteilig erstattungsfähig.",
      },
      {
        paragraph: "§ 1004 BGB analog",
        title: "Eigentumseingriff bei Device-Ban",
        desc:
          "Die Konsole ist Ihr Eigentum. Microsoft entzieht Ihnen mit Device-Ban die Nutzungsmöglichkeit Ihrer Sache. Das ist ein Eigentumseingriff - Beseitigungs- und Unterlassungs­anspruch.",
      },
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Microsoft muss konkret begründen: welcher Verstoß, welche Klausel, automatisiert oder manuell. „Code of Conduct violation\" ohne Details reicht nach DSA nicht.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "AGB-Kontrolle",
        desc:
          "Klauseln zu „at sole discretion\"-Sperrungen sind nach BGH III ZR 179/20 unwirksam. Verfahrenstrias (Anhörung, Begründung, Beschwerde) gilt auch für Microsoft.",
      },
      {
        paragraph: "§ 110 BGB",
        title: "Minderjährige & In-Game-Käufe",
        desc:
          "Microsoft-Store-Käufe Minderjähriger ohne Eltern-Einwilligung sind schwebend unwirksam. Sperre wegen Chargeback ist selbst rechtswidrig - klassischer Hebel bei Familienkonten.",
      },
      {
        paragraph: "Art. 18 Brüssel-Ia-VO",
        title: "Klage am Wohnsitz",
        desc:
          "Gegen Microsoft Ireland Operations Ltd. (Dublin) klagen Sie als Verbraucher am eigenen Wohnsitz. Microsoft muss vor jedem EU-Gericht antreten - kein US-Forum.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & DSGVO-Auskunft",
        desc:
          "Wir sichern Sperrnachricht, Account-Daten, Bibliothek, Game-Pass-Historie, Geräte-IDs und stellen Art. 15 DSGVO-Anfrage - inklusive Enforcement-Logs und Ban-Logik.",
      },
      {
        title: "DSA-Beschwerde + Case Review",
        desc:
          "Interne Beschwerde bei Microsoft Enforcement, DSA-konform mit konkreten Hebeln. Bei Device-Bans zusätzlich gesonderter Eilantrag.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc:
          "Förmliches Schreiben an Microsoft Ireland mit Wertersatz-Bezifferung (Game Pass + Spiele + Hardware-Wert) und 14-Tage-Frist. Schadensersatz nach DSA Art. 54.",
      },
      {
        title: "ADR oder Klage",
        desc:
          "Bei Stillstand: Out-of-Court Dispute Body (Art. 21 DSA) oder Klage am Verbraucherwohnsitz mit einstweiliger Verfügung gegen Device-Ban.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Was ist ein Device-Ban?",
        a:
          "Microsoft sperrt dabei nicht nur den Account, sondern bindet eine Console-Hardware-ID. Jeder Account auf dem Gerät wird gesperrt. Das ist ein Eigentumseingriff und besonders angreifbar.",
      },
      {
        q: "Mein Game Pass läuft - bekomme ich Geld zurück?",
        a:
          "Ja. Bei rechtswidriger Sperre haben Sie Anspruch auf anteilige Erstattung des nicht genutzten Zeitraums nach §§ 327 ff. BGB plus Wiederherstellung der Bibliothek.",
      },
      {
        q: "Was kostet die Vertretung?",
        a:
          "Ersteinschätzung kostenlos. Honorare hängen von Verfahrensart und Streitwert ab. Bei großen Bibliotheken oft erheblicher Streitwert - bei Rechtsschutz Direktabrechnung.",
      },
      {
        q: "Microsoft-Konto gesperrt - betrifft das auch Office?",
        a:
          "Ja, oft sind Office, OneDrive, Skype mit betroffen. Wir argumentieren auf Verhältnismäßigkeit - Sperre nur für Xbox, nicht für unbeteiligte Microsoft-Dienste.",
      },
      {
        q: "Mein Kind hat heimlich Spiele gekauft - rückforderbar?",
        a:
          "Ja, ohne Eltern-Einwilligung sind Käufe Minderjähriger schwebend unwirksam (§ 110 BGB). Sperre wegen Chargeback ist dann selbst rechtswidrig.",
      },
      {
        q: "Wie schnell kann ich wieder zocken?",
        a:
          "Außergerichtlich oft 14–30 Tage. Bei einstweiliger Verfügung Tage bis Wochen. Bei Device-Bans ist der Eilweg oft entscheidend.",
      },
    ],
  },
  ctaTitle: "Xbox-Account gesperrt? Wir prüfen Ihren Fall in 24 Stunden.",
};

const xboxEn: PillarContent = {
  hero: {
    eyebrow: "Xbox Live · Microsoft",
    headline: "Xbox account banned? Game Pass gone? Consumer law fully applies.",
    sub:
      "Communications ban, enforcement ban, device ban, Game Pass suspension: Microsoft Ireland is bound by EU consumer law. Console bans as interference with property are particularly challengeable.",
  },
  problems: {
    title: "Typical Xbox suspensions",
    items: [
      "Permanent enforcement ban for chat violations without hearing",
      "Communications ban locking voice and chat",
      "Device ban - console unusable despite ownership",
      "Game Pass loss without pro-rata refund",
      "Cloud saves and purchased games inaccessible after ban",
      "Gamertag loss with reputation and history damage",
      "Ban triggered by parental chargeback for minor's purchases",
      "Microsoft account locked - affects Office, OneDrive too",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "Microsoft Ireland Operations Ltd. (Dublin) is subject to EU consumer law and DSA. The device ban is legally particularly delicate - Microsoft restricts your ownership of the hardware.",
    arguments: [
      {
        paragraph: "§§ 327c, m, r BGB",
        title: "Digital-content consumer rights",
        desc:
          "Game Pass, purchased games, DLC, cloud saves are digital content. On suspension you have a claim to reinstatement or compensation. Game Pass is pro-rata refundable.",
      },
      {
        paragraph: "§ 1004 BGB analogous",
        title: "Property interference on device ban",
        desc:
          "The console is your property. Microsoft deprives you of the use of your thing through a device ban. That's interference with property - removal and injunction claims apply.",
      },
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Microsoft must specify: which violation, which clause, automated or manual. 'Code of Conduct violation' without detail is not enough under DSA.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "Unfair-terms control",
        desc:
          "'At sole discretion' suspension clauses are invalid under BGH III ZR 179/20. The procedural triad (hearing, reasons, appeal) applies to Microsoft too.",
      },
      {
        paragraph: "§ 110 BGB",
        title: "Minors & in-store purchases",
        desc:
          "Microsoft Store purchases by minors without parental consent are voidable. A ban over chargeback is itself unlawful - classic lever for family accounts.",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Sue at consumer's home court",
        desc:
          "Against Microsoft Ireland Operations Ltd. (Dublin) consumers sue at home. Microsoft must appear in any EU court - no US forum.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & GDPR data request",
        desc:
          "We secure suspension notice, account data, library, Game Pass history, device IDs, and file a GDPR Art. 15 request - including enforcement logs and ban logic.",
      },
      {
        title: "DSA complaint + case review",
        desc:
          "Internal complaint to Microsoft Enforcement, DSA-compliant, with concrete levers. For device bans an additional urgent application.",
      },
      {
        title: "Formal letter with deadline",
        desc:
          "Formal letter to Microsoft Ireland with quantified compensation (Game Pass + games + hardware value) and 14-day deadline. Damages noticed under DSA Art. 54.",
      },
      {
        title: "ADR or court action",
        desc:
          "On stalling: out-of-court dispute body (DSA Art. 21) or action at consumer's home court with an injunction against the device ban.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "What is a device ban?",
        a:
          "Microsoft doesn't just ban the account, it ties a console hardware ID. Any account on the device gets banned. That's interference with property and particularly challengeable.",
      },
      {
        q: "My Game Pass is running - do I get a refund?",
        a:
          "Yes. On unlawful suspension you have a pro-rata refund claim for the unused term under §§ 327ff. BGB, plus reinstatement of the library.",
      },
      {
        q: "What does representation cost?",
        a:
          "Initial assessment is free. Fees depend on procedure and stakes. Large libraries often have substantial value at stake - direct billing with legal expense insurance.",
      },
      {
        q: "Microsoft account locked - does that hit Office too?",
        a:
          "Yes, often Office, OneDrive, Skype are affected. We argue proportionality - only Xbox should be suspended, not unrelated Microsoft services.",
      },
      {
        q: "My child bought games secretly - reclaimable?",
        a:
          "Yes, purchases by minors without parental consent are voidable (§ 110 BGB). A ban over chargeback is then itself unlawful.",
      },
      {
        q: "How fast can I play again?",
        a:
          "Out-of-court often 14–30 days. With an injunction days to weeks. For device bans the urgent route is often decisive.",
      },
    ],
  },
  ctaTitle: "Xbox account banned? We'll review your case in 24 hours.",
};

const twitchDe: PillarContent = {
  hero: {
    eyebrow: "Twitch",
    headline: "Twitch-Ban? Affiliate-Sperre? Streamer-Verdienst­ausfall ist messbar.",
    sub:
      "DMCA-Bans, Hateful-Conduct-Strikes, Affiliate-/Partner-Sperren, Subscriber-Verlust: Twitch muss DSA-konform begründen. Streamer-Verdienst­ausfall ist konkret bezifferbar.",
  },
  problems: {
    title: "Typische Twitch-Sperrungen",
    items: [
      "Permanenter Ban wegen Hateful-Conduct ohne konkrete Begründung",
      "DMCA-Strike mit Channel-Reset und VOD-Verlust",
      "Affiliate-/Partner-Status entzogen mit Verdienstausfall",
      "Subscriber- und Bits-Auszahlung gestoppt nach Sperre",
      "Off-Platform-Behaviour-Klausel triggert Sperre wegen Twitter-Posts",
      "Permanenter Ban nach Off-Stream-Verhalten ohne Anhörung",
      "Sponsoring-Deals platzen wegen Account-Sperre",
      "Sperre bei kurzer Sub-Underperformance trotz Vertragsverletzung Twitchs",
    ],
  },
  legal: {
    title: "Rechtliche Hebel",
    intro:
      "Twitch Interactive Inc. (San Francisco) bietet Dienste in der EU an und unterliegt damit DSA und Verbraucherrecht. Bei Affiliates/Partnern greifen zusätzlich vertragliche Pflichten - ein starker Hebel.",
    arguments: [
      {
        paragraph: "Art. 17 DSA",
        title: "Begründungspflicht",
        desc:
          "Twitch muss konkret begründen: welche Inhalte, welche Klausel, automatisiert oder manuell. „Violation of Community Guidelines\" ohne Quelle reicht nach DSA nicht.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Schadensersatz Verdienstausfall",
        desc:
          "Bei rechtswidriger Sperre haben Streamer Anspruch auf konkret bezifferbaren Verdienstausfall: Subs, Bits, Sponsoring, Werbeerlöse. Twitch haftet nach § 280 BGB.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "AGB-Kontrolle Off-Platform-Klausel",
        desc:
          "Twitchs Off-Platform-Behaviour-Klausel ist bei pauschaler Anwendung verbraucher­benachteiligend (§ 307 BGB) - Drittplattform-Verhalten rechtfertigt nicht jeden Twitch-Ban.",
      },
      {
        paragraph: "Art. 22 DSGVO",
        title: "Verbot rein automatisierter Entscheidungen",
        desc:
          "Twitch-Trust-and-Safety arbeitet KI-gestützt. Permanente Sperren ohne menschliche Letztkontrolle sind nach EuGH C-634/21 unzulässig.",
      },
      {
        paragraph: "DSA Art. 21",
        title: "Out-of-Court Dispute Body",
        desc:
          "Bei Twitch besonders effektiv: zertifizierte ADR-Stelle. Twitch unterzieht sich oft schon der Beschwerde, weil Verfahren öffentlich werden können.",
      },
      {
        paragraph: "Art. 18 Brüssel-Ia-VO",
        title: "Klage am Wohnsitz",
        desc:
          "Auch gegen Twitch Interactive Inc. (USA) klagen Sie als EU-Verbraucher am eigenen Wohnsitz. Die kalifornische Schiedsklausel ist gegenüber Verbrauchern unwirksam.",
      },
    ],
  },
  process: {
    title: "So gehen wir vor",
    steps: [
      {
        title: "Beweissicherung & DSGVO-Auskunft",
        desc:
          "Wir sichern Sperrnachricht, Channel-Daten, VOD-History, Sub-/Bits-Statistiken, Sponsoring-Verträge und stellen Art. 15 DSGVO-Anfrage.",
      },
      {
        title: "DSA-Beschwerde (Art. 20)",
        desc:
          "Interne Beschwerde DSA-konform. Bei DMCA-Strikes parallel formelle Counter-Notice. Bei Off-Platform-Bans starke rechtliche Argumentation.",
      },
      {
        title: "Anwaltsschreiben mit Frist",
        desc:
          "Förmliches Schreiben an Twitch Interactive Inc. mit beziffertem Verdienstausfall (Subs + Bits + Sponsoring + Affiliate) und 14-Tage-Frist.",
      },
      {
        title: "ADR oder Klage",
        desc:
          "Bei Stillstand: zertifizierte Out-of-Court Dispute Body (Art. 21 DSA, oft schnell wirksam) oder Klage mit einstweiliger Verfügung bei akut drohendem Schaden.",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      {
        q: "Mein Verdienstausfall - wie berechnet sich das?",
        a:
          "Auf Basis der letzten 6–12 Monate: durchschnittliche Sub-Einnahmen, Bits, Sponsoring-Deals, Werbeerlöse. Wir kalkulieren konkret bezifferbar - das ist die Grundlage für § 280 BGB.",
      },
      {
        q: "DMCA-Strike - was tun?",
        a:
          "Counter-Notice nach DMCA Section 512(g) mit anwaltlicher Begleitung. Bei Fair-Use-Inhalten starke Erfolgsaussichten. Bei zu Unrecht ausgelöstem Strike Schadensersatz möglich.",
      },
      {
        q: "Was kostet die Vertretung?",
        a:
          "Ersteinschätzung kostenlos. Bei Streamern mit nachweisbarem Verdienst­ausfall ist Erfolgshonorar-Komponente oft sinnvoll - wir kalkulieren transparent. Bei Rechtsschutz Direktabrechnung.",
      },
      {
        q: "Twitch sperrt wegen Off-Platform - geht das?",
        a:
          "Eingeschränkt. Off-Platform-Klauseln sind bei pauschaler Anwendung nach § 307 BGB unwirksam. Twitch muss konkret darlegen, warum Drittverhalten den Plattformbetrieb stört.",
      },
      {
        q: "Sponsoring-Deal geplatzt - bekomme ich das ersetzt?",
        a:
          "Bei rechtswidriger Sperre ja - der entgangene Sponsoring-Vertrag ist konkret bezifferbarer Schaden nach § 280 BGB. Lückenlose Vertrags­dokumentation hilft.",
      },
      {
        q: "Wie schnell kann ich wieder streamen?",
        a:
          "Außergerichtlich oft 14–30 Tage. Bei einstweiliger Verfügung Tage bis Wochen. Bei akut drohendem Verdienst­ausfall ist der Eilweg oft entscheidend.",
      },
    ],
  },
  ctaTitle: "Twitch-Account gebannt? Wir prüfen Ihren Fall in 24 Stunden.",
};

const twitchEn: PillarContent = {
  hero: {
    eyebrow: "Twitch",
    headline: "Twitch ban? Affiliate suspended? Streamer revenue loss is quantifiable.",
    sub:
      "DMCA bans, hateful-conduct strikes, affiliate/partner suspensions, sub revenue loss: Twitch must justify under the DSA. Streamer revenue loss is concretely quantifiable.",
  },
  problems: {
    title: "Typical Twitch suspensions",
    items: [
      "Permanent ban for hateful conduct without specific reasoning",
      "DMCA strike with channel reset and VOD loss",
      "Affiliate/partner status revoked with revenue loss",
      "Subscriber and bits payouts halted after ban",
      "Off-platform behaviour clause triggers ban over tweets",
      "Permanent ban over off-stream behaviour without hearing",
      "Sponsorship deals collapse over account suspension",
      "Suspension over short sub underperformance despite Twitch contract breach",
    ],
  },
  legal: {
    title: "Legal levers",
    intro:
      "Twitch Interactive Inc. (San Francisco) offers services in the EU and is therefore subject to DSA and consumer law. With affiliates/partners, contractual duties add a strong lever.",
    arguments: [
      {
        paragraph: "DSA Art. 17",
        title: "Statement of Reasons",
        desc:
          "Twitch must specify: which content, which clause, automated or manual. 'Violation of Community Guidelines' without source is not enough under the DSA.",
      },
      {
        paragraph: "§ 280 BGB",
        title: "Damages for revenue loss",
        desc:
          "On unlawful suspension streamers have a claim for quantifiable revenue loss: subs, bits, sponsorships, ad revenue. Twitch is liable under § 280 BGB.",
      },
      {
        paragraph: "§ 307 BGB",
        title: "Off-platform clause control",
        desc:
          "Twitch's off-platform behaviour clause, if applied broadly, is consumer-detrimental under § 307 BGB - third-party platform behaviour does not justify every Twitch ban.",
      },
      {
        paragraph: "GDPR Art. 22",
        title: "Ban on solely automated decisions",
        desc:
          "Twitch Trust & Safety relies on AI. Permanent bans without human oversight are unlawful under ECJ C-634/21.",
      },
      {
        paragraph: "DSA Art. 21",
        title: "Out-of-court dispute body",
        desc:
          "Particularly effective with Twitch: certified ADR body. Twitch often settles already at the complaint stage because procedures can become public.",
      },
      {
        paragraph: "Brussels Ia Art. 18",
        title: "Sue at consumer's home court",
        desc:
          "Even against Twitch Interactive Inc. (US) EU consumers sue at home. The Californian arbitration clause is void against consumers.",
      },
    ],
  },
  process: {
    title: "How we proceed",
    steps: [
      {
        title: "Evidence & GDPR data request",
        desc:
          "We secure suspension notice, channel data, VOD history, sub/bits stats, sponsorship contracts, and file a GDPR Art. 15 request.",
      },
      {
        title: "DSA complaint (Art. 20)",
        desc:
          "Internal complaint, DSA-compliant. For DMCA strikes a parallel formal counter-notice. Strong legal arguments for off-platform bans.",
      },
      {
        title: "Formal letter with deadline",
        desc:
          "Formal letter to Twitch Interactive Inc. with quantified revenue loss (subs + bits + sponsorship + affiliate) and 14-day deadline.",
      },
      {
        title: "ADR or court action",
        desc:
          "On stalling: certified out-of-court dispute body (DSA Art. 21, often fast and effective) or action with an injunction if loss is imminent.",
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How is my revenue loss calculated?",
        a:
          "Based on the last 6–12 months: average sub revenue, bits, sponsorship deals, ad revenue. We compute it concretely - that's the basis for § 280 BGB.",
      },
      {
        q: "DMCA strike - what now?",
        a:
          "Counter-notice under DMCA Section 512(g) with lawyer assistance. With fair-use content strong prospects. With wrongful strikes damages are possible.",
      },
      {
        q: "What does representation cost?",
        a:
          "Initial assessment is free. With streamers having documented revenue loss a success-fee component is often sensible - we calculate transparently. Direct billing with legal expense insurance.",
      },
      {
        q: "Twitch banned for off-platform - is that allowed?",
        a:
          "Limited. Off-platform clauses, if applied broadly, are invalid under § 307 BGB. Twitch must specifically show that off-platform conduct disrupts platform operation.",
      },
      {
        q: "Sponsorship deal collapsed - is that compensable?",
        a:
          "On unlawful suspension yes - the lost sponsorship contract is concretely quantifiable damage under § 280 BGB. Complete contract documentation helps.",
      },
      {
        q: "How fast can I stream again?",
        a:
          "Out-of-court often 14–30 days. With an injunction days to weeks. With imminent revenue loss the urgent route is often decisive.",
      },
    ],
  },
  ctaTitle: "Twitch account banned? We'll review your case in 24 hours.",
};

const content: Record<string, Record<Locale, PillarContent>> = {
  "Fortnite / Epic Games": { de: fortniteDe, en: fortniteEn },
  "Meta (Facebook, Instagram)": { de: metaDe, en: metaEn },
  "TikTok": { de: tiktokDe, en: tiktokEn },
  "Steam / Valve": { de: steamDe, en: steamEn },
  "PayPal": { de: paypalDe, en: paypalEn },
  "PlayStation Network": { de: psnDe, en: psnEn },
  "YouTube": { de: youtubeDe, en: youtubeEn },
  "Riot Games (Valorant, LoL)": { de: riotDe, en: riotEn },
  "Roblox": { de: robloxDe, en: robloxEn },
  "Discord": { de: discordDe, en: discordEn },
  "Amazon Seller Central": { de: amazonDe, en: amazonEn },
  "Coinbase / Binance": { de: cryptoDe, en: cryptoEn },
  "eBay": { de: ebayDe, en: ebayEn },
  "Xbox Live": { de: xboxDe, en: xboxEn },
  "Twitch": { de: twitchDe, en: twitchEn },
};

export function getPillarContent(
  platformName: string,
  locale: Locale,
): PillarContent | null {
  return content[platformName]?.[locale] ?? null;
}
