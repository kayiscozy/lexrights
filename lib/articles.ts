import type { Locale } from "@/i18n/routing";

export type ArticleCategory =
  | "guide"
  | "dsa"
  | "gdpr"
  | "consumer"
  | "case-law"
  | "p2b"
  | "crypto"
  | "cross-border";

export interface Article {
  id: string;
  slug: { de: string; en: string };
  category: ArticleCategory;
  date: string;
  author: "hartmann" | "vogel" | "phillips";
  readingMinutes: number;
  title: { de: string; en: string };
  summary: { de: string; en: string };
  sections: {
    heading: { de: string; en: string };
    body: { de: string[]; en: string[] };
  }[];
  keywords: string[];
}

export const articleCategories: Record<
  ArticleCategory,
  { de: string; en: string }
> = {
  guide: { de: "Praxisleitfaden", en: "Practical guide" },
  dsa: { de: "DSA", en: "DSA" },
  gdpr: { de: "DSGVO", en: "GDPR" },
  consumer: { de: "Verbraucherrecht", en: "Consumer law" },
  "case-law": { de: "Rechtsprechung", en: "Case law" },
  p2b: { de: "P2B-Verordnung", en: "P2B Regulation" },
  crypto: { de: "Crypto / MiCA", en: "Crypto / MiCA" },
  "cross-border": { de: "Cross-Border US ⇄ EU", en: "Cross-border US ⇄ EU" },
};

export const articles: Article[] = [
  {
    id: "account-gesperrt-erste-schritte",
    slug: {
      de: "account-gesperrt-was-tun",
      en: "account-suspended-what-to-do",
    },
    category: "guide",
    date: "2026-04-22",
    author: "hartmann",
    readingMinutes: 8,
    title: {
      de: "Account gesperrt - was tun? Die ersten 48 Stunden zählen.",
      en: "Account suspended - what to do? The first 48 hours matter.",
    },
    summary: {
      de:
        "Schritt-für-Schritt-Anleitung für die ersten zwei Tage nach einer Plattform-Sperrung: Beweissicherung, DSGVO-Auskunft, formelle Beschwerde, anwaltliche Vorbereitung. Was Sie tun müssen - und was Sie auf keinen Fall tun sollten.",
      en:
        "Step-by-step guide for the first 48 hours after a platform suspension: evidence, GDPR data request, formal complaint, legal prep. What to do - and what to avoid at all costs.",
    },
    keywords: [
      "Account gesperrt",
      "Plattform-Sperrung",
      "DSA Beschwerde",
      "Account suspended",
      "platform ban",
    ],
    sections: [
      {
        heading: {
          de: "Sofort: Beweise sichern - bevor sie verschwinden",
          en: "Immediately: secure evidence before it disappears",
        },
        body: {
          de: [
            "Plattformen löschen Sperrnachrichten nach Ablauf von Beschwerdefristen oder bei einer endgültigen Account-Schließung. Was nach 30 Tagen nicht mehr greifbar ist, lässt sich vor Gericht nicht mehr rekonstruieren.",
            "Speichern Sie als Erstes: die Sperrnachricht (Screenshot mit URL und Zeitstempel), den vollständigen E-Mail-Verkehr mit Support, alle bisherigen Login-Daten, eine Auflistung gekaufter digitaler Inhalte (V-Bucks, Skins, Items, Abonnements), Ihre Kontoeröffnungs-Bestätigung und - falls noch zugänglich - eine Datenschutz-Auskunft per Self-Service-Tool.",
            "Vermeiden Sie unbedingt, sich aus den E-Mails der Plattform „auszuloggen\" oder Konversationen zu löschen. Jede Nachricht kann später relevant sein, insbesondere wenn die Plattform widersprüchliche Begründungen liefert.",
          ],
          en: [
            "Platforms delete suspension notices after appeal deadlines expire or when an account is permanently closed. What is gone after 30 days cannot be reconstructed in court.",
            "Save first: the suspension notice (screenshot with URL and timestamp), all support email correspondence, your prior login data, an inventory of purchased digital content (V-Bucks, skins, items, subscriptions), your account opening confirmation, and - if still accessible - a self-service GDPR data export.",
            "Do not log out of platform emails or delete conversations. Every message can become relevant later, especially if the platform delivers contradictory reasoning.",
          ],
        },
      },
      {
        heading: {
          de: "DSGVO Art. 15: Auskunfts­anfrage stellen",
          en: "GDPR Art. 15: file a data access request",
        },
        body: {
          de: [
            "Die Auskunftsanfrage nach Art. 15 DSGVO ist Ihr stärkstes Werkzeug. Sie zwingt die Plattform innerhalb eines Monats, Ihnen alle gespeicherten Daten offenzulegen - inklusive interner Sperr-Logs, Risk-Scores und Begründungs­dokumente.",
            "Schicken Sie die Anfrage per E-Mail an die im Impressum oder in der Datenschutzerklärung benannte Adresse, mit Verweis auf Art. 15 DSGVO und einer Frist von einem Monat. Die Plattform muss antworten - sonst verstößt sie selbst gegen Datenschutzrecht und es droht Schadensersatz nach Art. 82 DSGVO.",
            "Was die Auskunft offenbart, entscheidet oft den Fall: Bei automatisierten Sperrungen wird die fehlende menschliche Kontrolle sichtbar. Bei pauschalen Vorwürfen fehlt der konkrete Tatsachen-Bezug. Beides ist juristischer Hebel.",
          ],
          en: [
            "A data access request under GDPR Art. 15 is your strongest tool. It forces the platform to disclose all stored data within one month - including internal suspension logs, risk scores, and reasoning documents.",
            "Send it by email to the address in the imprint or privacy policy, citing Art. 15 GDPR and a one-month deadline. The platform must respond - otherwise it itself breaches data protection law and triggers damages under Art. 82 GDPR.",
            "What the access request reveals often decides the case: with automated suspensions the lack of human oversight becomes visible. With generic allegations the concrete factual basis is missing. Both are legal levers.",
          ],
        },
      },
      {
        heading: {
          de: "DSA Art. 20: Internes Beschwerdesystem nutzen",
          en: "DSA Art. 20: use the internal complaint system",
        },
        body: {
          de: [
            "Seit Februar 2024 müssen alle in der EU tätigen Online-Plattformen ein internes, kostenloses Beschwerde­system bereithalten (Art. 20 DSA). Sie haben sechs Monate Zeit, eine Sperrung dort anzufechten.",
            "Reichen Sie die Beschwerde sauber begründet ein: konkrete Bezugnahme auf Art. 17 DSA (Begründungspflicht), das Datum der Sperrung, den Verweis auf den fehlenden Tatsachen­bezug. Die Plattform muss „rechtzeitig, sorgfältig, nicht-willkürlich und objektiv\" antworten - die Standards sind hoch.",
            "Wichtig: Die DSA-Beschwerde ist Voraussetzung für die spätere Eskalation an eine zertifizierte Out-of-Court Dispute Body (Art. 21 DSA) oder vor Gericht. Sparen Sie sich diesen Schritt also nicht - selbst wenn Sie wenig Vertrauen in den internen Prozess haben.",
          ],
          en: [
            "Since February 2024, all online platforms operating in the EU must offer a free internal complaint system (DSA Art. 20). You have six months to challenge a suspension there.",
            "File the complaint cleanly: cite DSA Art. 17 (statement of reasons), the date of suspension, and the missing factual basis. The platform must respond 'timely, diligently, in a non-arbitrary and objective manner' - the standard is high.",
            "Important: a DSA complaint is a prerequisite for later escalation to a certified out-of-court dispute body (DSA Art. 21) or to court. Don't skip this step - even if you have little faith in the internal process.",
          ],
        },
      },
      {
        heading: {
          de: "Was Sie auf keinen Fall tun sollten",
          en: "What you absolutely must not do",
        },
        body: {
          de: [
            "Erstellen Sie keinen Zweit-Account, um die Sperre zu umgehen. Das gibt der Plattform den schwersten Vorwurf - „evading enforcement\" - und macht später eine Reaktivierung nahezu unmöglich. Auch im Erfolgsfall werden Schadens­ersatz­ansprüche dadurch erschwert.",
            "Antworten Sie nicht emotional auf Sperrnachrichten. Ein „Ich werde Sie verklagen!\" oder Beleidigungen werden in Logs gespeichert und tauchen im Verfahren wieder auf - meist zum Nachteil. Halten Sie sich knapp, sachlich, terminsetzend.",
            "Verlassen Sie sich nicht auf Reddit-Tipps oder „Account-Recovery-Services\". Diese Drittanbieter haben oft nur einen Zweck: Ihr Geld. Anwaltliche Vertretung ist nicht teurer, aber juristisch durchsetzbar.",
          ],
          en: [
            "Do not create a second account to evade the suspension. That gives the platform the strongest allegation - 'evading enforcement' - and makes a later reinstatement almost impossible. Even on success, damages claims become harder.",
            "Don't reply emotionally to suspension notices. 'I'll sue you!' or insults are stored in logs and resurface during proceedings, usually to your detriment. Keep it brief, factual, deadline-driven.",
            "Don't rely on Reddit tips or 'account recovery services'. These third-party providers usually have one purpose: your money. Legal representation isn't more expensive but is legally enforceable.",
          ],
        },
      },
      {
        heading: {
          de: "Wann anwaltliche Vertretung sinnvoll ist",
          en: "When legal representation makes sense",
        },
        body: {
          de: [
            "Bei einer reinen 24-Stunden-Sperre wegen Bagatell-Verstoß lohnt der anwaltliche Aufwand selten. Bei dauerhafter Sperrung, beträchtlichen digitalen Inhalten (≥ 500 €), Zahlungsdiensten mit Hold oder Seller-Konten mit laufenden Geschäften ist anwaltliche Vertretung in der Regel wirtschaftlich.",
            "Lassen Sie eine kostenfreie Erst­einschätzung machen, bevor Sie selbst Rechts­positionen gegenüber der Plattform aufgeben (z.B. durch unbedachte Zustimmung zu „Settlement-Angeboten\" mit Verzichts­erklärung).",
            "Eine gute Kanzlei erkennt in 24 Stunden, ob Ihr Fall realistische Erfolgs­aussichten hat - und wird Sie auch im Zweifelsfall ehrlich darauf hinweisen, wenn der Aufwand den Nutzen übersteigt.",
          ],
          en: [
            "For a basic 24-hour suspension over a minor violation, legal costs rarely make sense. For permanent suspensions, substantial digital content (≥ €500), payment services with holds, or seller accounts with running operations, legal representation is usually economically justified.",
            "Get a free first assessment before giving up legal positions to the platform (e.g., unwary acceptance of settlement offers with waiver clauses).",
            "A good firm recognises in 24 hours whether your case has realistic prospects - and, when in doubt, will tell you honestly if costs outweigh benefits.",
          ],
        },
      },
    ],
  },
  {
    id: "dsa-art-17-statement-of-reasons",
    slug: {
      de: "dsa-artikel-17-begruendungspflicht",
      en: "dsa-article-17-statement-of-reasons",
    },
    category: "dsa",
    date: "2026-04-15",
    author: "hartmann",
    readingMinutes: 7,
    title: {
      de: "DSA Art. 17: Was muss eine ordentliche Sperr-Begründung enthalten?",
      en: "DSA Art. 17: What must a proper statement of reasons contain?",
    },
    summary: {
      de:
        "Das Statement of Reasons nach Art. 17 DSA ist mehr als ein Höflichkeitsschreiben - es ist ein juristisch verpflichtender Rechtsakt. Was die Plattform liefern muss, was nicht reicht, und wo wir den Hebel ansetzen.",
      en:
        "The statement of reasons under DSA Art. 17 is more than a courtesy - it's a binding legal act. What the platform must deliver, what isn't enough, and where we apply the lever.",
    },
    keywords: [
      "DSA Art. 17",
      "Statement of Reasons",
      "Begründungspflicht",
      "Digital Services Act",
    ],
    sections: [
      {
        heading: {
          de: "Was Art. 17 DSA verlangt",
          en: "What DSA Art. 17 requires",
        },
        body: {
          de: [
            "Art. 17 Abs. 3 DSA fordert von Plattformen einen klar definierten Mindest­inhalt: die konkreten Tatsachen, auf die die Entscheidung gestützt ist, die exakte AGB-Klausel oder Rechts­grundlage, eine Information darüber ob die Entscheidung automatisiert oder manuell getroffen wurde, sowie konkrete Verweise auf interne Beschwerdewege und Out-of-Court Dispute Bodies.",
            "Diese Anforderungen sind nicht weich. Der Europäische Gesetzgeber hat sie bewusst hart formuliert - eine Plattform, die generisch von „Verstoß gegen die Community Standards\" spricht, erfüllt sie nicht. Das ist anfechtbar.",
            "Wichtig: Die Begründungspflicht greift bei jeder Form der „Restriction\": Sperrung, Demonetarisierung, Reichweiten­drosselung, Item-Entfernung. Auch Schatten­sperren („Shadow Bans\") fallen darunter, sobald sie eine spürbare Auswirkung haben.",
          ],
          en: [
            "DSA Art. 17(3) requires a clearly defined minimum content: the concrete facts on which the decision is based, the exact ToS clause or legal basis, information on whether the decision was automated or manual, and concrete references to internal complaint routes and out-of-court dispute bodies.",
            "These requirements are not soft. The EU legislator intentionally formulated them strictly - a platform speaking generically of 'Community Standards violation' does not satisfy them. That is challengeable.",
            "Important: the duty applies to any form of 'restriction': suspension, demonetisation, reach throttling, item removal. Shadow bans are also covered, provided they have a tangible impact.",
          ],
        },
      },
      {
        heading: {
          de: "Was nicht ausreicht",
          en: "What does not suffice",
        },
        body: {
          de: [
            "„Verstoß gegen die Community Standards\" ohne Angabe der konkreten Klausel: nicht ausreichend.",
            "„Verdacht auf Cheating\" ohne Hinweis auf Tatsachen oder konkretes Spielverhalten: nicht ausreichend.",
            "„Mehrfache Verstöße in der Vergangenheit\" ohne Auflistung der einzelnen Vorfälle und ohne Datum: nicht ausreichend.",
            "Der Maßstab ist klar: Die Begründung muss so konkret sein, dass Sie als Betroffener sinnvoll Beschwerde führen können. Wenn Sie nicht genau wissen, was Sie getan haben sollen, fehlt die Substanz.",
          ],
          en: [
            "'Community Standards violation' without naming the specific clause: not enough.",
            "'Cheating suspicion' without facts or specific gameplay reference: not enough.",
            "'Repeated past violations' without listing individual incidents and dates: not enough.",
            "The standard is clear: the reasoning must be specific enough that you, as the affected user, can meaningfully complain. If you cannot tell exactly what you supposedly did, the substance is missing.",
          ],
        },
      },
      {
        heading: {
          de: "Wo wir den Hebel ansetzen",
          en: "Where we apply the lever",
        },
        body: {
          de: [
            "Wenn das Statement of Reasons den Anforderungen nicht genügt, ist die zugrunde liegende Maßnahme formell rechtswidrig. Das gilt unabhängig davon, ob der materielle Vorwurf zutrifft - ein Cheater muss nicht freigesprochen werden, aber die Sperrung muss wegen Form­mängeln aufgehoben werden.",
            "Praktisch bedeutet das: Wir lehnen die Sperre wegen Verstoß gegen Art. 17 DSA ab, fordern eine ordnungs­gemäße Begründung mit Frist, und können bei Stillstand zur Out-of-Court Dispute Body (Art. 21 DSA) oder direkt vor Gericht ziehen.",
            "Erfahrungs­gemäß führt schon das Anwalts­schreiben mit präzisem Verweis auf den Form­fehler in vielen Fällen zur Reaktivierung - die Plattformen wissen, dass eine Verfahrens­eskalation für sie teurer wird als die Wieder­herstellung.",
          ],
          en: [
            "If the statement of reasons fails the requirements, the underlying measure is formally unlawful. This applies regardless of whether the substantive allegation is true - a cheater doesn't need to be exonerated, but the suspension must be lifted for procedural defects.",
            "Practically: we reject the suspension for breach of DSA Art. 17, demand a proper statement with a deadline, and can escalate to an out-of-court dispute body (DSA Art. 21) or directly to court if the platform stalls.",
            "Experience shows that even a precise lawyer letter pointing to the procedural defect leads to reactivation in many cases - platforms know that procedural escalation costs them more than reinstatement.",
          ],
        },
      },
      {
        heading: {
          de: "Sonderfall: Statement of Reasons bei automatisierten Entscheidungen",
          en: "Special case: statement of reasons for automated decisions",
        },
        body: {
          de: [
            "Wenn die Sperre rein automatisiert getroffen wurde (z.B. durch Anti-Cheat-Software oder Trust-and-Safety-KI), muss das Statement of Reasons das ausdrücklich offenlegen. Das ist nicht nur eine Form­frage - es eröffnet einen zusätzlichen Hebel nach Art. 22 DSGVO.",
            "Art. 22 DSGVO verbietet rein automatisierte Entscheidungen mit erheblicher Auswirkung. Nach EuGH C-634/21 (SCHUFA) ist diese Grenze niedrig - eine permanente Account-Sperre überschreitet sie regel­mäßig.",
            "Wenn also automatisiert entschieden wurde und keine menschliche Letzt­kontrolle stattgefunden hat, sind sowohl Art. 17 DSA als auch Art. 22 DSGVO verletzt. Doppelter Hebel, deutlich höhere Schadens­ersatz­chancen.",
          ],
          en: [
            "If the suspension was purely automated (e.g., anti-cheat software or trust-and-safety AI), the statement of reasons must disclose this explicitly. That's not just a formality - it opens an additional lever under GDPR Art. 22.",
            "GDPR Art. 22 prohibits solely automated decisions with significant impact. Following ECJ C-634/21 (SCHUFA), the threshold is low - a permanent account suspension regularly crosses it.",
            "So when a decision was automated and no human oversight took place, both DSA Art. 17 and GDPR Art. 22 are breached. Double lever, materially higher damages prospects.",
          ],
        },
      },
    ],
  },
  {
    id: "dsgvo-art-22-automatisierte-sperren",
    slug: {
      de: "dsgvo-artikel-22-automatisierte-account-sperren",
      en: "gdpr-article-22-automated-account-suspensions",
    },
    category: "gdpr",
    date: "2026-04-08",
    author: "vogel",
    readingMinutes: 9,
    title: {
      de: "DSGVO Art. 22 nach SCHUFA: Wann automatisierte Sperrungen rechtswidrig sind",
      en: "GDPR Art. 22 post-SCHUFA: when automated suspensions become unlawful",
    },
    summary: {
      de:
        "Das EuGH-Urteil zu SCHUFA hat die Reichweite von Art. 22 DSGVO drastisch erweitert. Was das für Anti-Cheat-Software, Trust-and-Safety-KI und automatisierte Plattform-Entscheidungen bedeutet.",
      en:
        "The ECJ's SCHUFA ruling expanded GDPR Art. 22 dramatically. What it means for anti-cheat software, trust-and-safety AI, and automated platform decisions.",
    },
    keywords: [
      "DSGVO Art. 22",
      "automatisierte Entscheidung",
      "EuGH SCHUFA",
      "EasyAntiCheat",
      "Vanguard",
    ],
    sections: [
      {
        heading: {
          de: "Was der EuGH 2023 entschieden hat",
          en: "What the ECJ decided in 2023",
        },
        body: {
          de: [
            "In der Rechtssache C-634/21 hat der EuGH am 7. Dezember 2023 entschieden, dass schon die automatisierte Berechnung eines Risiko-Scores eine Entscheidung im Sinne von Art. 22 DSGVO ist - nicht erst die darauf basierende Folge­handlung.",
            "Der entscheidende Satz: Eine Entscheidung ist „automatisiert\" auch dann, wenn ein Mensch formal beteiligt ist, sich aber faktisch auf den maschinellen Output verlässt, ohne eigene Prüfung. Reine Rubber-Stamping-Vorgänge bleiben automatisiert im Sinne der Norm.",
            "Übertragen auf Plattform-Sperrungen heißt das: Ein Mod, der einen Anti-Cheat-Verdacht „bestätigt\", ohne den Sachverhalt eigenständig zu prüfen, schafft keine menschliche Entscheidung. Die Sperre bleibt im Anwendungs­bereich von Art. 22 DSGVO.",
          ],
          en: [
            "In Case C-634/21, on 7 December 2023, the ECJ ruled that the automated calculation of a risk score is itself a decision within the meaning of GDPR Art. 22 - not only the subsequent follow-up action.",
            "The key sentence: a decision is 'automated' even when a human is formally involved but in fact relies on the machine output without an independent check. Rubber-stamping remains automated under the norm.",
            "Applied to platform suspensions: a mod who 'confirms' an anti-cheat suspicion without independently verifying the facts does not create a human decision. The suspension stays within the scope of GDPR Art. 22.",
          ],
        },
      },
      {
        heading: {
          de: "Was \"erhebliche Beeinträchtigung\" bedeutet",
          en: "What 'significant impairment' means",
        },
        body: {
          de: [
            "Art. 22 DSGVO greift nur bei Entscheidungen mit „rechtlicher Wirkung\" oder „erheblicher Beeinträchtigung\" für die betroffene Person. Bei Plattform-Sperrungen wird oft argumentiert, das treffe nicht zu - es handle sich ja nur um den Verlust eines „Zusatz­dienstes\".",
            "Das überzeugt nicht mehr. Bei beruflichen Creator-Konten (Twitch, YouTube), bei Seller-Konten (Amazon, eBay), bei Zahlungs­diensten (PayPal) und bei substantiellen digitalen Inhalten (CS2-Inventar, Fortnite-Skins, Steam-Bibliothek) ist die wirtschaftliche und persönliche Auswirkung erheblich.",
            "Die Schwelle ist deutlich niedriger als oft angenommen: Schon ein nachhaltig genutztes Social-Media-Konto mit aufgebauter Reichweite überschreitet sie - das hat das BGH-Urteil zu Facebook (III ZR 179/20) bereits 2021 implizit anerkannt.",
          ],
          en: [
            "GDPR Art. 22 applies only to decisions with 'legal effects' or 'significantly affecting' the data subject. Platform suspensions are often argued not to qualify - it's just the loss of an 'add-on service'.",
            "That argument no longer holds. With professional creator accounts (Twitch, YouTube), seller accounts (Amazon, eBay), payment services (PayPal), and substantial digital content (CS2 inventory, Fortnite skins, Steam library), the economic and personal impact is significant.",
            "The threshold is much lower than often assumed: even a consistently used social media account with built-up reach exceeds it - the German Federal Court's Facebook ruling (III ZR 179/20) implicitly recognised this back in 2021.",
          ],
        },
      },
      {
        heading: {
          de: "Praktische Anwendung: Anti-Cheat-Software",
          en: "Practical application: anti-cheat software",
        },
        body: {
          de: [
            "EasyAntiCheat (Epic), Vanguard (Riot), VAC (Valve), BattleEye - sie alle treffen Sperr­entscheidungen ohne strukturierte menschliche Prüfung. Ihre Outputs werden in der Regel direkt umgesetzt: Account permanent gesperrt, ohne Anhörung.",
            "Das ist nach Art. 22 DSGVO unzulässig. Selbst bei tatsächlichem Cheating wäre eine permanente Sperre ohne menschliche Prüfung verfahrens­mäßig fehlerhaft - der Schutz greift unabhängig von der materiellen Berechtigung.",
            "In der Praxis fragen wir per Art. 15 DSGVO die Anti-Cheat-Logs ab und decken auf, dass die Entscheidung allein heuristisch (also: spekulativ) erfolgte. Damit ist die Sperre regelmäßig anfechtbar - und die Plattformen wissen das.",
          ],
          en: [
            "EasyAntiCheat (Epic), Vanguard (Riot), VAC (Valve), BattleEye - all make suspension decisions without structured human review. Their outputs are usually implemented directly: account permanently banned, no hearing.",
            "That's unlawful under GDPR Art. 22. Even with actual cheating, a permanent ban without human review would be procedurally flawed - the protection applies independently of substantive merits.",
            "In practice we request anti-cheat logs under GDPR Art. 15 and reveal that the decision was purely heuristic (i.e., speculative). The suspension is thus regularly challengeable - and platforms know it.",
          ],
        },
      },
      {
        heading: {
          de: "Schadensersatz nach Art. 82 DSGVO",
          en: "Damages under GDPR Art. 82",
        },
        body: {
          de: [
            "Art. 82 DSGVO gewährt Schadens­ersatz auch für immaterielle Schäden. Der EuGH hat in C-300/21 (Österreichische Post) klargestellt: Es bedarf keiner „Erheblichkeits­schwelle\" - jeder konkret nachweisbare Schaden ist ersatzfähig.",
            "Bei rechtswidrigen Account-Sperrungen kommen typischerweise drei Schadens­positionen in Betracht: Zeitaufwand für die Wieder­herstellung, persönlicher Frust und Stress (Belastung), und konkrete wirtschaftliche Schäden (verlorene Items, entgangene Einnahmen).",
            "Übliche Größen­ordnungen: 500-3.000 € für reine Sperrung mit moderatem Aufwand; 3.000-15.000 € bei substantiellen wirtschaftlichen Folgen. Bei Großfällen mit 6-stelligen Folge­schäden öffnet sich der Rahmen entsprechend.",
          ],
          en: [
            "GDPR Art. 82 grants damages also for non-material harm. The ECJ clarified in C-300/21 (Österreichische Post) that no 'threshold of seriousness' is required - any concretely demonstrable damage is recoverable.",
            "For unlawful account suspensions, three damage categories are typical: time spent on reinstatement; personal frustration and stress (burden); and concrete economic damages (lost items, lost revenue).",
            "Typical magnitudes: €500-3,000 for plain suspension with moderate effort; €3,000-15,000 for substantial economic effects. Large cases with 6-figure consequential damages open the frame accordingly.",
          ],
        },
      },
    ],
  },
  {
    id: "bgh-iii-zr-179-20-facebook-urteil",
    slug: {
      de: "bgh-facebook-urteil-iii-zr-179-20",
      en: "german-federal-court-facebook-ruling-iii-zr-179-20",
    },
    category: "case-law",
    date: "2026-04-01",
    author: "hartmann",
    readingMinutes: 8,
    title: {
      de: "BGH III ZR 179/20: Was das Facebook-Urteil für alle Plattformen bedeutet",
      en: "German Federal Court III ZR 179/20: what the Facebook ruling means for every platform",
    },
    summary: {
      de:
        "Mit dem Urteil vom 29. Juli 2021 hat der BGH eine Verfahrenstrias für Plattform-Sperrungen etabliert: Anhörung, Begründung, Beschwerdemöglichkeit. Was daraus für andere Plattformen folgt - und wie weit das Urteil wirklich reicht.",
      en:
        "On 29 July 2021, the German Federal Court established a procedural triad for platform suspensions: prior hearing, reasoning, appeal route. What follows for other platforms - and how far the ruling actually reaches.",
    },
    keywords: [
      "BGH III ZR 179/20",
      "Facebook-Urteil",
      "AGB-Kontrolle",
      "Verfahrenstrias",
      "Plattform-Sperre",
    ],
    sections: [
      {
        heading: {
          de: "Was der BGH entschieden hat",
          en: "What the BGH decided",
        },
        body: {
          de: [
            "Der BGH hat in zwei Parallelverfahren (III ZR 179/20 und III ZR 192/20) die Frage geklärt, unter welchen Bedingungen Facebook (heute Meta) Inhalte löschen oder Accounts sperren darf. Die Antwort: nur unter klar definierten Verfahrens­anforderungen.",
            "Konkret entschieden: Die Klauseln, mit denen sich Facebook ein „at sole discretion\"-Sperr­recht zugestand, sind nach § 307 BGB unwirksam. Die Plattform muss vor permanenter Sperrung die betroffene Person anhören, die Entscheidung konkret begründen, und einen Beschwerde­weg eröffnen.",
            "Der Verstoß gegen diese Trias führt nicht nur zu einem Wieder­herstellungs­anspruch, sondern auch zu Unterlassung weiterer Sperrungen ohne Verfahrens­einhaltung - ein wirkungs­voller Hebel auch gegen wieder­holte Sperrungen.",
          ],
          en: [
            "In two parallel cases (III ZR 179/20 and III ZR 192/20), the BGH clarified under what conditions Facebook (now Meta) may delete content or suspend accounts. The answer: only under clearly defined procedural conditions.",
            "Concretely: the clauses by which Facebook reserved 'at sole discretion' suspension rights are invalid under § 307 BGB. The platform must hear the affected person before permanent suspension, give specific reasons, and open an appeal route.",
            "Violation of this triad triggers not only a reinstatement claim, but also an injunction against further suspensions without procedural compliance - an effective lever against repeated suspensions.",
          ],
        },
      },
      {
        heading: {
          de: "Übertragung auf andere Plattformen",
          en: "Transfer to other platforms",
        },
        body: {
          de: [
            "Das Urteil ist formal auf Facebook bezogen, aber inhaltlich auf jede Plattform mit vergleichbarer Marktposition übertragbar - der BGH stützt sich auf allgemeine AGB-Kontrolle und mittelbare Drittwirkung der Grundrechte.",
            "Tatsächlich wenden Land- und Oberlandes­gerichte die Verfahrenstrias mittlerweile auf YouTube, TikTok, Instagram, Twitch, eBay-Verkäuferkonten und sogar Discord an. Bei Gaming-Plattformen ist die Lage etwas komplizierter, aber der Grundsatz greift auch dort.",
            "Die Mindest­standards sind klar: Anhörung vor permanenter Sperre, konkrete Begründung der Entscheidung, mindestens ein interner Beschwerde­weg. Plattformen, die diese Standards nicht halten, sind angreifbar - das ist Routine in unserer Praxis.",
          ],
          en: [
            "The ruling is formally about Facebook, but materially transferable to any platform with comparable market position - the BGH relies on general unfair-terms control and the horizontal effect of fundamental rights.",
            "In fact, regional and higher regional courts now apply the procedural triad to YouTube, TikTok, Instagram, Twitch, eBay seller accounts, and even Discord. For gaming platforms the picture is more nuanced, but the principle applies there too.",
            "Minimum standards are clear: hearing before permanent suspension, specific reasoning, at least one internal appeal route. Platforms not meeting these standards are challengeable - this is routine in our practice.",
          ],
        },
      },
      {
        heading: {
          de: "Verhältnis zum Digital Services Act",
          en: "Relationship to the Digital Services Act",
        },
        body: {
          de: [
            "Mit dem DSA seit Februar 2024 haben sich die Standards verschärft: Was der BGH 2021 als Mindest­anforderung definierte, ist jetzt EU-weite gesetzliche Pflicht (Art. 17, 20, 21 DSA). Der BGH-Maßstab läuft praktisch parallel mit dem DSA-Standard.",
            "Beide Regelungen ergänzen sich: Der DSA regelt formell, der BGH inhaltlich. In der Klage zitieren wir beides - die Plattform kann sich keiner Pflichtsicht entziehen.",
            "Wichtig: Der DSA gilt nur für Anbieter mit Niederlassung oder Adressaten in der EU. Bei US-Plattformen ohne EU-Niederlassung greift er nur eingeschränkt - dort ist die BGH-Linie der primäre Hebel über § 307 BGB und die mittel­bare Drittwirkung.",
          ],
          en: [
            "With the DSA in force since February 2024, the standards have tightened: what the BGH defined as minimum in 2021 is now an EU-wide legal duty (DSA Art. 17, 20, 21). The BGH standard runs practically in parallel with the DSA standard.",
            "Both regimes complement each other: DSA governs formally, the BGH governs substantively. In litigation we cite both - the platform cannot escape any duty.",
            "Important: the DSA only applies to providers with EU establishment or EU addressees. For US-only platforms it applies only partially - there the BGH line is the primary lever via § 307 BGB and horizontal effect of rights.",
          ],
        },
      },
      {
        heading: {
          de: "Was das praktisch heißt",
          en: "What this means in practice",
        },
        body: {
          de: [
            "Wenn Sie eine permanente Plattform-Sperre erhalten haben und keine ordentliche Anhörung vorausging, ist die Sperre nach BGH-Linie regel­mäßig rechtswidrig - unabhängig davon, ob der materielle Vorwurf zutrifft.",
            "Wir prüfen drei Fragen: Hat die Plattform Sie vor der Sperre angehört? Hat sie konkrete Tatsachen genannt? Hat sie einen funktionierenden Beschwerdeweg eröffnet? Wenn auch nur eine dieser drei Fragen mit Nein zu beantworten ist, ist die Sperre angreifbar.",
            "Das macht die Verfahrenstrias zum stärksten Standard­hebel im Plattform­recht. Selbst bei zugegebenem Fehl­verhalten ist eine fehlerhaft durchgeführte Sperre formell unwirksam - mit voller Wieder­herstellung als Folge.",
          ],
          en: [
            "If you received a permanent platform suspension without a proper prior hearing, the suspension is regularly unlawful under the BGH line - regardless of whether the substantive allegation is true.",
            "We check three questions: Did the platform hear you before suspending? Did it provide concrete facts? Did it open a working appeal route? If even one is no, the suspension is challengeable.",
            "This makes the procedural triad the strongest standard lever in platform law. Even with acknowledged misconduct, a procedurally flawed suspension is formally invalid - with full reinstatement as the consequence.",
          ],
        },
      },
    ],
  },
  {
    id: "verbrauchergerichtsstand-us-plattformen",
    slug: {
      de: "verbrauchergerichtsstand-us-plattformen-bruessel-ia",
      en: "consumer-jurisdiction-us-platforms-brussels-ia",
    },
    category: "consumer",
    date: "2026-03-25",
    author: "vogel",
    readingMinutes: 6,
    title: {
      de: "Klage am Wohnsitz: Brüssel-Ia Art. 17/18 gegen US-Plattformen",
      en: "Sue at home: Brussels Ia Art. 17/18 against US platforms",
    },
    summary: {
      de:
        "Die meisten US-Plattformen versuchen, Streitigkeiten in kalifornische Schiedsverfahren zu zwingen. Verbraucher in der EU müssen das nicht akzeptieren - Brüssel-Ia gibt ihnen den Heimatgerichtsstand.",
      en:
        "Most US platforms try to push disputes into Californian arbitration. EU consumers don't have to accept this - the Brussels Ia Regulation grants them home jurisdiction.",
    },
    keywords: [
      "Brüssel-Ia Verordnung",
      "Verbrauchergerichtsstand",
      "US-Plattform",
      "Schiedsklausel unwirksam",
    ],
    sections: [
      {
        heading: {
          de: "Was Brüssel-Ia Art. 17/18 sagt",
          en: "What Brussels Ia Art. 17/18 says",
        },
        body: {
          de: [
            "Die Brüssel-Ia-Verordnung regelt den Gerichts­stand bei grenz­überschreitenden Streitigkeiten innerhalb der EU. Art. 17/18 enthalten einen Sonderschutz für Verbraucher: Sie können den Anbieter immer am eigenen Wohnsitz verklagen, unabhängig von dessen Sitz.",
            "Wichtig: Diese Regelung gilt auch dann, wenn der Anbieter außerhalb der EU sitzt - sofern er seine Tätigkeit auf EU-Mitglied­staaten ausgerichtet hat. Bei einer Plattform mit deutsch­sprachiger Oberfläche und Euro-Zahlungs­möglichkeit ist das praktisch immer gegeben.",
            "Der EuGH hat in mehreren Verfahren bestätigt: Schon die Verfügbarkeit der Plattform in einer Mitglied­staats­sprache reicht regelmäßig, um eine „Ausrichtung\" zu begründen (z.B. Pammer/Hotel Alpenhof, C-585/08).",
          ],
          en: [
            "The Brussels Ia Regulation governs jurisdiction in cross-border disputes within the EU. Art. 17/18 grants special consumer protection: consumers can always sue the provider at their own domicile, regardless of where the provider is based.",
            "Importantly: this applies even if the provider is outside the EU - provided it directs its activities at EU member states. For a platform with a German-language UI and euro payment, this is virtually always given.",
            "In several cases the ECJ confirmed: mere availability of the platform in a member state's language regularly suffices to establish 'direction' (e.g. Pammer/Hotel Alpenhof, C-585/08).",
          ],
        },
      },
      {
        heading: {
          de: "Schiedsklauseln: warum sie meist unwirksam sind",
          en: "Arbitration clauses: why they're usually invalid",
        },
        body: {
          de: [
            "Fast alle US-Plattformen schreiben in ihre Terms of Service Klauseln, die Streitigkeiten zur Schieds­gerichtsbarkeit nach kalifornischem Recht zwingen sollen. Das ist gegenüber EU-Verbrauchern in den meisten Fällen unwirksam.",
            "Der EuGH hat in C-191/15 (Verein für Konsumenten­information ./. Amazon) und C-498/16 (Schrems ./. Facebook) klargestellt: Schiedsklauseln, die Verbraucher von ihrem Heim­gerichtsstand abhalten sollen, sind nach AGB-Kontrolle (Art. 3 RL 93/13) unwirksam.",
            "Das gilt selbst dann, wenn die Klausel formell „verständlich\" ist - der Schutz ist materiell, nicht nur formal. Der Verbraucher kann die Schieds­klausel ignorieren und vor seinem Heim­gericht klagen.",
          ],
          en: [
            "Almost all US platforms include clauses in their ToS pushing disputes into Californian arbitration. This is mostly invalid against EU consumers.",
            "In C-191/15 (Verein für Konsumenten­information v. Amazon) and C-498/16 (Schrems v. Facebook) the ECJ clarified: arbitration clauses that block consumers from their home jurisdiction are invalid under unfair-terms control (Dir. 93/13 Art. 3).",
            "This holds even if the clause is formally 'plain' - protection is substantive, not merely formal. The consumer can ignore the arbitration clause and sue at their home court.",
          ],
        },
      },
      {
        heading: {
          de: "Praktische Konsequenzen",
          en: "Practical consequences",
        },
        body: {
          de: [
            "Sie als deutscher, österreichischer oder Schweizer Verbraucher klagen Riot, Epic, Microsoft, Meta, Twitch usw. in Ihrer eigenen Heimat­stadt - meist in Berlin, München, Wien, Zürich. Kein Flug nach Kalifornien, keine englisch­sprachigen Verfahren, kein US-Anwalt.",
            "Die Plattform muss antreten oder verliert per Versäumnis­urteil. Das ist erstaunlich einfach - die meisten US-Anbieter haben EU-Vertretungen, die für sie auftreten. Bei reinen US-Anbietern ohne Vertretung ist das Versäumnis­urteil der Standard­ausgang.",
            "Vollstreckung erfolgt entweder über die EU-Anerkennungs­regeln oder - bei reinen US-Anbietern - über das Hague Service Convention. Beide Wege sind etabliert und in der Praxis durchführbar, insbesondere wenn die Plattform europäische Vermögens­werte besitzt.",
          ],
          en: [
            "As a German, Austrian, or Swiss consumer you sue Riot, Epic, Microsoft, Meta, Twitch, etc. in your own home city - mostly Berlin, Munich, Vienna, Zurich. No flight to California, no English proceedings, no US lawyer.",
            "The platform must appear or loses by default judgment. That's surprisingly straightforward - most US providers have EU representatives who appear for them. For pure US providers without representation, default judgment is the standard outcome.",
            "Enforcement runs either via EU recognition rules or - for pure US providers - via the Hague Service Convention. Both routes are established and practically workable, especially where the platform has European assets.",
          ],
        },
      },
      {
        heading: {
          de: "Wann B2B-Konstellationen schwieriger werden",
          en: "When B2B constellations get harder",
        },
        body: {
          de: [
            "Der Heim­gerichts­stand-Schutz greift nur für Verbraucher. Bei B2B-Konstellationen (z.B. Amazon Seller, professionelle Twitch-Streamer mit Affiliate-Status, Trading-Konten auf Krypto-Börsen) wird die Lage komplexer.",
            "Hier gilt grundsätzlich der vertraglich vereinbarte Gerichts­stand - aber nicht uneingeschränkt. Die P2B-Verordnung 2019/1150 enthält eigene Schutz­regeln für gewerbliche Plattform-Nutzer, und Art. 25 Brüssel-Ia setzt der Klausel­durchsetzung Grenzen.",
            "In Großfällen prüfen wir individuell: Heim­gerichts­stand über P2B-VO, Erfüllungsort nach Art. 7 Brüssel-Ia, oder ggf. Schieds­verfahren nach UNCITRAL-Regeln. Die Wahl macht den Unterschied zwischen einem 6-monatigen Verfahren am eigenen Sitz und einem 18-monatigen in Kalifornien.",
          ],
          en: [
            "Home-jurisdiction protection applies only to consumers. For B2B constellations (e.g., Amazon sellers, professional Twitch streamers with affiliate status, trading accounts on crypto exchanges), the picture becomes more complex.",
            "There the contractually agreed venue applies in principle - but not unconditionally. The P2B Regulation 2019/1150 contains its own protections for business platform users, and Brussels Ia Art. 25 limits clause enforceability.",
            "In big cases we assess individually: home jurisdiction via P2B, place of performance under Brussels Ia Art. 7, or arbitration under UNCITRAL rules. The choice makes the difference between a 6-month proceeding at your own seat and an 18-month one in California.",
          ],
        },
      },
    ],
  },
  {
    id: "paragraph-327-bgb-in-game-kaeufe",
    slug: {
      de: "paragraph-327-bgb-in-game-kaeufe-zurueckfordern",
      en: "section-327-bgb-in-game-purchases-recovery",
    },
    category: "consumer",
    date: "2026-03-18",
    author: "vogel",
    readingMinutes: 7,
    title: {
      de: "§ 327 BGB für In-Game-Käufe: V-Bucks, Robux und Skins zurückfordern",
      en: "§ 327 BGB for in-game purchases: how to recover V-Bucks, Robux, and skins",
    },
    summary: {
      de:
        "Seit 2022 gelten die §§ 327 ff. BGB für digitale Inhalte und Dienste. Was das für Account-Sperren, In-Game-Käufe und plötzlich verschwundene Items bedeutet - und wie weit der Anspruch reicht.",
      en:
        "Since 2022 §§ 327ff. BGB apply to digital content and services. What that means for account bans, in-game purchases, and items that suddenly vanish - and how far the claim reaches.",
    },
    keywords: [
      "§ 327 BGB",
      "digitale Inhalte",
      "V-Bucks",
      "Robux",
      "Skins",
      "RL 2019/770",
    ],
    sections: [
      {
        heading: {
          de: "Was §§ 327 ff. BGB regeln",
          en: "What §§ 327ff. BGB regulate",
        },
        body: {
          de: [
            "Mit Umsetzung der EU-Digital­inhalte-Richtlinie 2019/770 wurden zum 1. Januar 2022 die §§ 327 ff. BGB neu gefasst. Sie regeln Verbraucher­verträge über digitale Inhalte und digitale Dienste - und beziehen sich ausdrücklich auf Items, In-Game-Währungen und Cloud-Inhalte.",
            "Erfasst sind insbesondere: V-Bucks, Robux, RP, Steam-Wallet-Guthaben, Skins, Battle Passes, Game Passes, Streaming-Bibliotheken und Cloud-Save-Daten. Sobald für die Bereit­stellung Geld oder personen­bezogene Daten geflossen sind, greift der Schutz.",
            "Die zentrale Norm ist § 327 r BGB: Bei Vertrags­beendigung haben Sie als Verbraucher Anspruch auf Heraus­gabe oder Wert­ersatz Ihrer digitalen Inhalte. Das ist der entscheidende Hebel bei Plattform-Sperrungen.",
          ],
          en: [
            "With implementation of the EU Digital Content Directive 2019/770, §§ 327ff. BGB were reworked as of 1 January 2022. They govern consumer contracts on digital content and services - and explicitly reference items, in-game currencies, and cloud content.",
            "Covered include: V-Bucks, Robux, RP, Steam wallet balances, skins, Battle Passes, Game Passes, streaming libraries, and cloud save data. Once money or personal data flows for delivery, protection applies.",
            "The central rule is § 327r BGB: on contract termination, the consumer has a claim to handover or value compensation for digital content. That's the decisive lever for platform suspensions.",
          ],
        },
      },
      {
        heading: {
          de: "Wertersatz: was bedeutet das konkret?",
          en: "Value compensation: what does that mean concretely?",
        },
        body: {
          de: [
            "Wertersatz heißt nicht zwangsläufig „Kaufpreis zurück\". Das BGB rechnet zum aktuellen Wert ab - also zum Markt­preis, den der Inhalt zum Zeitpunkt des Verlustes hatte. Bei seltenen CS2-Skins oder Roblox-Limiteds liegt der Markt­preis oft deutlich über dem ursprünglichen Kaufpreis.",
            "Praktisch ergibt sich daraus: Eine 5 € teuer gekaufte Skin kann bei Wert­ersatz 30 € oder 200 € auslösen - je nach Marktwert. Das ist kein Bonus, sondern die korrekte Anwendung des § 327 r BGB.",
            "Belege zählen: Sichern Sie Inventar­screenshots, Kauf­datum, Steam-Markt-Preise, Roblox-Limited-Charts. Je besser dokumentiert der ursprüngliche Bestand, desto höher der durch­setzbare Wert­ersatz.",
          ],
          en: [
            "Value compensation does not necessarily mean 'purchase price back'. The BGB compensates at current value - i.e., market price at the time of loss. For rare CS2 skins or Roblox Limiteds, the market price often greatly exceeds the original purchase price.",
            "Practically: a skin bought for €5 can trigger €30 or €200 in value compensation - depending on market value. That isn't a bonus, it's the correct application of § 327r BGB.",
            "Documentation matters: secure inventory screenshots, purchase date, Steam market prices, Roblox Limited charts. The better the original holdings are documented, the higher the enforceable value compensation.",
          ],
        },
      },
      {
        heading: {
          de: "Schwebende Unwirksamkeit bei Minderjährigen",
          en: "Voidability of minors' purchases",
        },
        body: {
          de: [
            "Ein Sonderfall, der praktisch häufig auftritt: Käufe Minderjähriger ohne Eltern-Einwilligung. Nach § 110 BGB („Taschengeld­paragraf\") sind sie schwebend unwirksam - werden also erst wirksam, wenn die Eltern zustimmen. Tun sie das nicht, kann zurück­gefordert werden.",
            "Das gilt unabhängig von der Höhe: Auch ein einzelner V-Bucks-Kauf für 99 € ist ohne Eltern-Einwilligung schwebend unwirksam. Eltern können nach § 812 BGB zurück­fordern - vom Plattform-Anbieter, nicht vom Kind.",
            "Brisant: Wenn die Plattform deshalb sperrt (typisch nach Eltern-Charge­back), ist diese Sperre selbst rechts­widrig - der Erstattungs­anspruch beruhte auf gesetzlicher Grundlage, das ist kein Vertrags­bruch des Kindes oder der Eltern.",
          ],
          en: [
            "A special case that frequently arises: minors' purchases without parental consent. Under § 110 BGB ('pocket-money rule') they are voidable - only effective if parents consent. If they don't, recovery is possible.",
            "This applies regardless of amount: a single V-Bucks purchase for €99 is voidable without parental consent. Parents can claim back under § 812 BGB - from the platform, not the child.",
            "Critically: if the platform bans because of that (typical after parental chargeback), the ban itself is unlawful - the recovery claim is based in statute, not a contractual breach by child or parents.",
          ],
        },
      },
      {
        heading: {
          de: "Grenzen des Schutzes",
          en: "Limits of protection",
        },
        body: {
          de: [
            "Der § 327-BGB-Schutz gilt nur für Verbraucher­verträge. Im B2B-Bereich (z.B. Marketing-Konten, kommerzielle Streaming-Setups, Trading-Konten) greift er nicht direkt - dort sind P2B-VO und allgemeines Schuldrecht der Hebel.",
            "Außerdem gilt der Schutz nur für Verträge ab dem 1. Januar 2022. Bei vor diesem Zeitpunkt geschlossenen Verträgen ist die Rechts­lage komplexer - aber nicht hoffnungs­los: Hier hilft das alte Recht (§§ 280, 311a BGB) und die EU-Verbraucher­rechte­richtlinie.",
            "In der Praxis ist die Abgrenzung B2C/B2B oft uneindeutig - ein Twitch-Streamer mit einigen tausend Subs ist juristisch nicht zwingend Unternehmer. Wir prüfen das individuell und nutzen je nach Lage Verbraucher- oder B2B-Hebel.",
          ],
          en: [
            "§ 327 BGB protection only covers consumer contracts. In B2B (e.g. marketing accounts, commercial streaming setups, trading accounts) it doesn't apply directly - there the P2B Regulation and general contract law are the levers.",
            "Protection also applies only to contracts concluded after 1 January 2022. For contracts predating it the picture is more complex - but not hopeless: the old §§ 280, 311a BGB and the EU consumer rights directive still help.",
            "In practice the B2C/B2B boundary is often blurred - a Twitch streamer with a few thousand subs is not necessarily an entrepreneur in law. We assess individually and use consumer or B2B levers depending on the case.",
          ],
        },
      },
    ],
  },
  {
    id: "p2b-verordnung-marketplace-sperren",
    slug: {
      de: "p2b-verordnung-marketplace-seller-sperren",
      en: "p2b-regulation-marketplace-seller-suspensions",
    },
    category: "p2b",
    date: "2026-03-11",
    author: "hartmann",
    readingMinutes: 6,
    title: {
      de: "P2B-Verordnung: 30-Tage-Vorwarnpflicht für Amazon-, eBay- und Etsy-Sperren",
      en: "P2B Regulation: 30-day prior-notice duty for Amazon, eBay, and Etsy suspensions",
    },
    summary: {
      de:
        "Die EU-P2B-Verordnung 2019/1150 ist die unbekannte Geheimwaffe gewerblicher Plattform-Seller. Sie zwingt Marketplaces zu 30 Tagen Vorwarnung vor Account-Schließung - und gibt Sellern starke Beschwerderechte.",
      en:
        "EU Regulation 2019/1150 (P2B) is the unsung weapon of commercial platform sellers. It forces marketplaces to give 30 days' prior notice before closure - and gives sellers strong complaint rights.",
    },
    keywords: [
      "P2B-Verordnung",
      "VO 2019/1150",
      "Amazon Seller",
      "eBay Seller",
      "Marketplace-Sperre",
    ],
    sections: [
      {
        heading: {
          de: "Was die P2B-VO regelt",
          en: "What the P2B Regulation covers",
        },
        body: {
          de: [
            "Die Verordnung 2019/1150 (P2B = Platform-to-Business) gilt seit Juli 2020. Sie regelt das Verhältnis zwischen Online-Plattformen und gewerblichen Nutzern - vor allem Marketplaces wie Amazon, eBay, Etsy, Booking, Zalando.",
            "Kernpflichten: transparente, klare AGB; sachliche Sperr-Begründung; mindestens 30 Tage Vorwarnung bei vollständiger Beendigung; ein internes Beschwerde­system; eine Mediations­klausel.",
            "Verstöße gegen die P2B-VO sind direkt klagbar - keine Auf­sichts­behörden­schwelle, kein Vorverfahren. Sie können den Marketplace direkt vor Gericht ziehen, mit konkreten Schadens­ersatz­ansprüchen.",
          ],
          en: [
            "Regulation 2019/1150 (P2B = Platform-to-Business) applies since July 2020. It governs the relationship between online platforms and business users - mainly marketplaces like Amazon, eBay, Etsy, Booking, Zalando.",
            "Core duties: transparent, clear ToS; substantive reasoning for suspensions; at least 30 days' prior notice for full terminations; an internal complaint system; a mediation clause.",
            "Breaches of the P2B Regulation are directly actionable - no regulatory threshold, no pre-litigation step. You can take the marketplace to court directly, with concrete damages claims.",
          ],
        },
      },
      {
        heading: {
          de: "30-Tage-Vorwarnpflicht: der schärfste Hebel",
          en: "The 30-day prior-notice duty: the sharpest lever",
        },
        body: {
          de: [
            "Art. 4 Abs. 1 P2B-VO ist eindeutig: Vor einer vollständigen Beendigung der Plattform-Dienste muss der Anbieter mindestens 30 Tage vorher schriftlich begründet warnen. Sofortige Sperren sind nur bei akutem, dokumentierbarem Verstoß zulässig.",
            "Das wird in der Praxis regel­mäßig verletzt. Amazon und eBay sperren oft fristlos und liefern die „Begründung\" erst Tage später nach. Das ist formell rechts­widrig - die Sperre kann allein wegen Verfahrens­fehler aufgehoben werden.",
            "Das Land­gericht Köln (z.B. 81 O 33/22) und das Land­gericht Frankfurt (z.B. 3-08 O 5/22) haben die Pflicht in mehreren Verfahren bestätigt - die Recht­sprechung ist klar und durch­setzbar.",
          ],
          en: [
            "Art. 4(1) P2B is unambiguous: before fully terminating platform services, the provider must give written reasoned notice at least 30 days in advance. Immediate suspensions are only allowed for acute, documentable breaches.",
            "This is regularly violated in practice. Amazon and eBay often suspend without notice and deliver the 'reasoning' days later. That is formally unlawful - the suspension can be reversed on procedural grounds alone.",
            "The Cologne Regional Court (e.g. 81 O 33/22) and the Frankfurt Regional Court (e.g. 3-08 O 5/22) confirmed the duty in several cases - the case law is clear and enforceable.",
          ],
        },
      },
      {
        heading: {
          de: "Schadensersatz bei Verstoß",
          en: "Damages for breaches",
        },
        body: {
          de: [
            "Bei Verstoß gegen die P2B-VO besteht Schadens­ersatz­anspruch nach § 280 BGB - inklusive Folge­schäden. Bei sofortiger Sperre eines Sellers mit laufendem Geschäft sind das schnell 5- bis 6-stellige Beträge: entgangener Gewinn, Verzugs­zinsen auf Funds-Holds, Kosten der Geschäfts­umstellung.",
            "Wir prüfen typischer­weise drei Schadens­positionen: konkreter Funds-Hold-Schaden (Verzugs­zinsen 9 % über Basiszins für gewerblich); entgangener Gewinn auf Basis der vorausgegangenen 6-12 Monate; Folge­schäden (Lager­miete, Kredit­zinsen, etc.).",
            "Wichtig: Der Streit­wert wird oft erheblich. Bei einem Hold von 80.000 € und entgangenem Gewinn von 30.000 € sind das schnell 6-stellige Forderungen - mit entsprechender wirtschaftlicher Wirkung. Erfolgs­honorar­komponenten sind hier oft sinnvoll.",
          ],
          en: [
            "Breach of the P2B Regulation triggers damages under § 280 BGB - including consequential damages. Immediate suspension of a seller with a running business quickly reaches 5- or 6-figure amounts: lost profits, default interest on holds, business reorganisation costs.",
            "We typically assess three damage categories: concrete fund-hold damage (default interest 9% above base rate for commercial); lost profits based on the preceding 6-12 months; consequential damages (warehouse rent, credit interest, etc.).",
            "Important: the value at stake is often substantial. An €80,000 hold plus €30,000 lost profit quickly reaches 6 figures - with corresponding economic effect. Success-fee components often make sense here.",
          ],
        },
      },
      {
        heading: {
          de: "Mediation als Beschleuniger",
          en: "Mediation as accelerator",
        },
        body: {
          de: [
            "Art. 12 P2B-VO zwingt Marketplaces zur Einrichtung eines Mediations­verfahrens - kostenfrei für den Seller, mit konkreten Antwort­fristen. Das ist ein wichtiger Hebel: wir kündigen oft Mediation an, bevor wir vor Gericht ziehen.",
            "Die Plattformen vermeiden Mediations­verfahren oft gerne, weil sie öffentlich werden können und EU-weite Reputations­wirkung haben. In der Praxis führt allein die formelle Mediations­ankündigung in vielen Fällen zur außer­gerichtlichen Einigung.",
            "Wir kombinieren P2B-Verfahren mit DSA-Beschwerden (Art. 20 DSA) und Aufsichts­anzeigen bei der jeweiligen Daten­schutz-Behörde - das schafft Druck auf mehreren Ebenen. Plattformen reagieren überraschend oft schnell.",
          ],
          en: [
            "Art. 12 P2B forces marketplaces to set up a mediation procedure - free of charge for the seller, with concrete response deadlines. That's an important lever: we often announce mediation before going to court.",
            "Platforms tend to avoid mediation because it can become public and trigger EU-wide reputational effects. In practice, the formal mediation announcement alone leads to out-of-court settlement in many cases.",
            "We combine P2B proceedings with DSA complaints (DSA Art. 20) and supervisory complaints to the relevant data protection authority - creating pressure on multiple fronts. Platforms react surprisingly quickly.",
          ],
        },
      },
    ],
  },
  {
    id: "mica-krypto-holds",
    slug: {
      de: "mica-krypto-holds-coinbase-binance-bafin",
      en: "mica-crypto-holds-coinbase-binance-bafin",
    },
    category: "crypto",
    date: "2026-03-04",
    author: "hartmann",
    readingMinutes: 7,
    title: {
      de: "MiCA und Krypto-Holds: Was Coinbase und Binance jetzt müssen",
      en: "MiCA and crypto holds: what Coinbase and Binance must now do",
    },
    summary: {
      de:
        "Seit Dezember 2024 gilt MiCA vollständig. Was das für KYC-Holds, eingefrorene Bestände und Withdrawal-Sperren bedeutet - und warum die BaFin-Beschwerde plötzlich der schnellste Hebel ist.",
      en:
        "Since December 2024 MiCA applies fully. What this means for KYC holds, frozen balances, and withdrawal blocks - and why the BaFin complaint is suddenly the fastest lever.",
    },
    keywords: [
      "MiCA",
      "Krypto-Hold",
      "Coinbase eingefroren",
      "Binance KYC",
      "BaFin",
      "Source of Funds",
    ],
    sections: [
      {
        heading: {
          de: "Was MiCA seit Dezember 2024 ändert",
          en: "What MiCA has changed since December 2024",
        },
        body: {
          de: [
            "Die Markets in Crypto-Assets Regulation (MiCA, VO 2023/1114) gilt seit dem 30. Dezember 2024 in allen ihren Bestand­teilen. Krypto-Asset-Service-Provider (CASPs) wie Coinbase, Bitvavo oder regulierte Stablecoin-Anbieter benötigen seitdem eine ausdrückliche EU-Zulassung.",
            "Mit der Zulassung kommen harte Pflichten: getrennte Verwahrung von Kunden­krypto, transparente Auszahlungs­regeln, formelle Risk-Management-Standards und - vor allem - eine Aufsichts­anbindung an die jeweilige nationale Behörde (in Deutschland: BaFin).",
            "Wichtig: Binance hat keine MiCA-Lizenz und muss EU-Aktivitäten nach einer Übergangsfrist einstellen oder umstrukturieren. Das ändert die Hebel - macht sie aber nicht schwächer, sondern verschiebt sie auf andere Regelungs­ebenen.",
          ],
          en: [
            "The Markets in Crypto-Assets Regulation (MiCA, Reg. 2023/1114) applies fully since 30 December 2024. Crypto-asset service providers (CASPs) like Coinbase, Bitvavo, or regulated stablecoin issuers need an explicit EU authorisation.",
            "With authorisation come hard duties: segregated client crypto custody, transparent withdrawal rules, formal risk management standards, and - importantly - supervisory link to the relevant national authority (in Germany: BaFin).",
            "Important: Binance has no MiCA licence and must wind down or restructure EU activities after a transition period. That changes the levers - but doesn't weaken them, it shifts them to other regulatory layers.",
          ],
        },
      },
      {
        heading: {
          de: "Art. 75 MiCA: getrennte Verwahrung",
          en: "MiCA Art. 75: segregated custody",
        },
        body: {
          de: [
            "Art. 75 MiCA verlangt von lizenzierten CASPs die strikt getrennte Verwahrung von Kunden­krypto. Das ist nicht nur eine Bilanz­frage - es ist ein heraus­gabe­fähiger Anspruch des Kunden gegen den Anbieter.",
            "Bei einem rechts­widrigen Hold haben Sie nicht nur einen schuld­rechtlichen Erstattungs­anspruch, sondern einen sachen­rechtlichen Heraus­gabe­anspruch - das macht den Anspruch insolvenz­fest und in der Vollstreckung deutlich stärker.",
            "Bei Anbietern wie Coinbase, die unter EU-Aufsicht stehen, ist die BaFin-Beschwerde oft der schnellste Hebel. Eine Aufsichts­behörde, die einen Verstoß gegen Art. 75 MiCA fest­stellt, kann unmittelbar und scharf eingreifen.",
          ],
          en: [
            "MiCA Art. 75 requires licensed CASPs to keep client crypto strictly segregated. That's not merely a balance-sheet matter - it is a recoverable claim by the client against the provider.",
            "On unlawful hold you have not only a contractual recovery claim but a property-law recovery claim - making it insolvency-proof and significantly stronger in enforcement.",
            "With providers like Coinbase under EU supervision, the BaFin complaint is often the fastest lever. A supervisor finding an Art. 75 MiCA breach can intervene immediately and sharply.",
          ],
        },
      },
      {
        heading: {
          de: "Source of Funds: was wirklich zumutbar ist",
          en: "Source of funds: what is actually reasonable",
        },
        body: {
          de: [
            "AML-Pflichten sind real - aber proportional. Wer 1.000 € auszahlen will, muss nicht das Bank­geheimnis seiner Eltern bis 2010 offen­legen. Krypto-Plattformen über­ziehen oft maßlos, was Source-of-Funds-Anforderungen angeht.",
            "Was Sie als saubere SoF-Doku liefern sollten: Kontoauszüge, die die Krypto-Käufe belegen; Lohn- oder Gewinn­nach­weise, die die Mittel­herkunft zeigen; bei Trading­gewinnen Transaktions­historie der Vorgänger­wallets.",
            "Wenn die Plattform trotz vollständiger SoF weiter blockiert, ist sie selbst pflicht­widrig - dann wird die BaFin-Beschwerde aktuell. Wir kombinieren das oft mit anwaltlichem Schreiben unter Fristsetzung und einer Klage­androhung am Verbraucher­wohnsitz.",
          ],
          en: [
            "AML duties are real - but proportionate. Wanting to withdraw €1,000 doesn't require disclosing your parents' banking history back to 2010. Crypto platforms often overshoot drastically on source-of-funds requirements.",
            "Clean SoF docs you should provide: bank statements evidencing crypto purchases; salary or profit evidence showing fund origin; for trading gains, transaction history of predecessor wallets.",
            "If the platform continues to block despite complete SoF, it is itself in breach - then the BaFin complaint becomes relevant. We often combine that with a lawyer letter under deadline and a litigation threat at the consumer's home court.",
          ],
        },
      },
      {
        heading: {
          de: "Schadensersatz für Hold-Verluste",
          en: "Damages for hold-related losses",
        },
        body: {
          de: [
            "Bei rechts­widrigen Holds entstehen mehrere Schadens­positionen: Verzugs­schäden nach § 286 BGB; entgangene Trading­gewinne, sofern konkret nachweisbar; Kurs­verluste während der Hold-Phase.",
            "Letzteres ist juristisch besonders interessant: Wenn Sie 5 BTC bei 60.000 € Kurs blockiert hatten und der Kurs während der Hold-Phase auf 40.000 € fällt, ist der Differenz­betrag konkret bezifferbarer Schaden - die Plattform haftet nach § 280 BGB.",
            "Voraussetzung: lückenlose Dokumentation. Speichern Sie die Hold-Auslösung, Korrespondenz, eingereichte SoF-Doku, alle Plattform-Zugriffs-Versuche während des Holds. Je besser dokumentiert, desto höher der durch­setzbare Anspruch.",
          ],
          en: [
            "Unlawful holds create several damage categories: default damages under § 286 BGB; lost trading gains where concretely demonstrable; price losses during the hold phase.",
            "The last is especially interesting: if 5 BTC were blocked at €60,000 and price falls to €40,000 during the hold, the difference is concretely quantifiable damage - the platform is liable under § 280 BGB.",
            "Requirement: complete documentation. Save the hold trigger, correspondence, submitted SoF docs, all platform access attempts during the hold. The better documented, the higher the enforceable claim.",
          ],
        },
      },
    ],
  },
  {
    id: "kalifornien-arbitration-eu-verbraucher",
    slug: {
      de: "kalifornien-arbitration-eu-verbraucher",
      en: "california-arbitration-eu-consumers",
    },
    category: "cross-border",
    date: "2026-05-13",
    author: "phillips",
    readingMinutes: 10,
    title: {
      de: "Kalifornische Arbitration-Klauseln gegen EU-Verbraucher — warum sie an Brüssel Ia Art. 17/18 scheitern",
      en: "California Arbitration Clauses vs EU Consumers — Why They Fail Under Brussels Ia Art. 17/18",
    },
    summary: {
      de:
        "Fast jede US-Plattform-TOS verweist auf JAMS- oder AAA-Arbitration in Kalifornien. Gegen EU-Verbraucher ist diese Klausel in den meisten Konstellationen wirkungslos: Brüssel Ia Art. 17/18 und § 38 ZPO geben dem Verbraucher den Heimatgerichtsstand zurück. Warum, mit welcher Rechtsprechung — und wie der praktische Workflow aussieht, wenn die Plattform JAMS aufruft.",
      en:
        "Almost every US platform TOS points to JAMS or AAA arbitration in California. Against EU consumers that clause is unenforceable in most constellations: Brussels Ia Art. 17/18 and § 38 ZPO return jurisdiction to the consumer's home court. Why, with which case law — and what the practical workflow looks like when the platform invokes JAMS.",
    },
    keywords: [
      "Kalifornien Arbitration EU-Verbraucher",
      "Brüssel Ia Art 17",
      "Verbrauchergerichtsstand US-Plattform",
      "JAMS Arbitration EU",
      "Klage US-Plattform Heimatgericht",
      "California arbitration EU consumer",
      "Brussels Ia Article 17",
      "consumer forum US platform",
      "Pammer Alpenhof",
      "directed activities EU",
    ],
    sections: [
      {
        heading: {
          de: "Die Standard-Klausel und wo sie steht",
          en: "The standard clause and where you find it",
        },
        body: {
          de: [
            "Steam, Roblox, Twitch, Discord, Coinbase, OpenSea — fast jede US-Plattform verwendet eine Variante derselben Klausel: „Any dispute arising out of or relating to these Terms shall be resolved by binding arbitration administered by JAMS in San Francisco, California, in accordance with JAMS Streamlined Arbitration Rules. Class arbitrations are waived.\" Manchmal AAA statt JAMS, manchmal Seattle oder Bellevue statt San Francisco — die Struktur ist identisch.",
            "Diese Klausel hat in den USA System: sie verlagert Streitigkeiten in ein nicht-öffentliches Verfahren, in dem die Plattform die Arbitration-Stelle vorgibt, die Fees teils selbst trägt (und damit der Schiedsrichter im Verfahren wiederholend für die Plattform tätig wird), und in dem Class Actions ausgeschlossen sind. Für US-Verbraucher hat der US Supreme Court diese Klauseln in AT&T Mobility v. Concepcion (2011) für zulässig erklärt.",
            "Für EU-Verbraucher ist dieselbe Klausel in vielen Fällen ein Papiertiger. Der Grund: die EU hat eine eigene, harte Schranke gegen Forum-Selection-Klauseln gegen Verbraucher, und diese Schranke greift unabhängig davon, was US-Recht zur Klausel sagt.",
          ],
          en: [
            "Steam, Roblox, Twitch, Discord, Coinbase, OpenSea — almost every US platform uses some variant of the same clause: \"Any dispute arising out of or relating to these Terms shall be resolved by binding arbitration administered by JAMS in San Francisco, California, in accordance with JAMS Streamlined Arbitration Rules. Class arbitrations are waived.\" Sometimes AAA instead of JAMS, sometimes Seattle or Bellevue instead of San Francisco — the structure is identical.",
            "The clause is by design: it moves disputes into a non-public proceeding, where the platform names the arbitration body, often pays a portion of the fees (so the arbitrator becomes a repeat player for the platform), and bars class arbitration. For US consumers the US Supreme Court endorsed these clauses in AT&T Mobility v. Concepcion (2011).",
            "Against EU consumers the same clause is often a paper tiger. Reason: the EU has its own hard limit on forum-selection clauses against consumers, and that limit operates regardless of what US law says about the clause.",
          ],
        },
      },
      {
        heading: {
          de: "Brüssel Ia Art. 17/18 — die EU-Verbraucher-Override",
          en: "Brussels Ia Art. 17/18 — the EU consumer override",
        },
        body: {
          de: [
            "Verordnung (EU) Nr. 1215/2012 (Brüssel Ia) regelt die internationale Zuständigkeit innerhalb der EU. Art. 17 definiert, wann ein Streit ein „Verbrauchersache\" ist: insbesondere wenn der Vertragspartner „eine berufliche oder gewerbliche Tätigkeit in dem Mitgliedstaat ausübt, in dessen Hoheitsgebiet der Verbraucher seinen Wohnsitz hat\" oder seine Tätigkeit „auf irgendeinem Wege auf diesen Mitgliedstaat oder auf mehrere Staaten, einschließlich dieses Mitgliedstaats, ausrichtet\" (Art. 17(1)(c)).",
            "Wenn Art. 17 greift, geben Art. 18 und 19 dem Verbraucher zwei Geschenke: erstens darf er den Anbieter an seinem (des Verbrauchers!) Wohnsitz verklagen (Art. 18(1)). Zweitens — und das ist der entscheidende Punkt für die Arbitration-Klausel — sind abweichende Gerichtsstands- und Schiedsvereinbarungen, die vor Streitentstehung getroffen werden, in der Regel unwirksam (Art. 19).",
            "Die Rechtsfolge: eine Arbitration-Klausel in den AGB einer US-Plattform, die ein EU-Verbraucher beim Account-Anlegen abnicken muss, ist gegen ihn nicht durchsetzbar. Er kann am Landgericht seines Heimatortes klagen, und das Gericht muss die Klage annehmen — die JAMS-Klausel ist insoweit nichtig.",
          ],
          en: [
            "Regulation (EU) No 1215/2012 (Brussels Ia) governs international jurisdiction within the EU. Article 17 defines when a dispute is a \"consumer matter\": in particular when the contracting partner \"pursues commercial or professional activities in the Member State of the consumer's domicile\" or \"directs such activities, by any means, to that Member State or to several States including that Member State\" (Art. 17(1)(c)).",
            "Once Art. 17 applies, Articles 18 and 19 hand the consumer two gifts: first, the consumer may sue the provider at the consumer's own domicile (Art. 18(1)). Second — and this is the decisive point for the arbitration clause — pre-dispute forum-selection and arbitration agreements are generally unenforceable (Art. 19).",
            "The legal consequence: an arbitration clause in the TOS of a US platform, accepted by an EU consumer at account creation, is not enforceable against the consumer. The consumer can sue at the regional court of their home domicile, and that court must accept jurisdiction — the JAMS clause is void to that extent.",
          ],
        },
      },
      {
        heading: {
          de: "Pammer / Alpenhof — der „Ausrichten\"-Test",
          en: "Pammer / Alpenhof — the \"directed activities\" test",
        },
        body: {
          de: [
            "Die Schlüsselfrage ist meist nicht ob Art. 17 anwendbar ist, sondern ob die US-Plattform ihre Tätigkeit „auf den EU-Mitgliedstaat ausrichtet\" (Art. 17(1)(c)). Hier hat der EuGH in den verbundenen Rechtssachen Pammer/Alpenhof (C-585/08 und C-144/09, Urteil vom 7. Dezember 2010) den Maßstab gesetzt.",
            "Indizien für ein „Ausrichten\" sind unter anderem: Top-Level-Domain des Mitgliedstaates (.de, .fr) oder eine länderneutrale Domain (.com) mit erkennbarer Adressierung an den Mitgliedstaat; Verwendung der Sprache oder Währung des Mitgliedstaates wenn sie sich von der gewöhnlichen Sprache/Währung des Anbieters unterscheidet; Telefon-Anschluss mit länderspezifischer Vorwahl; Hinweise auf Kunden aus diesem Mitgliedstaat; AdWords/SEO-Kampagnen in Suchmaschinen des Mitgliedstaates.",
            "Bei US-Plattformen ist das Ausrichten in der Praxis fast immer gegeben. Eine Plattform, die Konten für EU-Nutzer öffnet, Zahlungen in EUR akzeptiert, AGB auf Deutsch / Französisch / Italienisch übersetzt und gegebenenfalls einen Article-27-EU-Vertreter benannt hat, „richtet ihre Tätigkeit aus\". Pure US-Plattformen ohne EU-Lokalisierung sind die Ausnahme — und selbst dort kann das gezielte Annehmen von EU-Nutzern und das Generieren von Umsätzen aus der EU das Ausrichten begründen (vgl. BGH XI ZR 156/05).",
          ],
          en: [
            "The key question is rarely whether Art. 17 applies, but whether the US platform \"directs its activities\" to the Member State (Art. 17(1)(c)). The CJEU set the standard in joined cases Pammer/Alpenhof (C-585/08 and C-144/09, judgment of 7 December 2010).",
            "Indicia for \"directing activities\" include: top-level domain of the Member State (.de, .fr) or a country-neutral domain (.com) with visible targeting; use of language or currency of the Member State if different from the provider's usual language/currency; phone number with country-specific area code; references to customers from that Member State; AdWords/SEO campaigns in the Member State's search engines.",
            "For US platforms, directing is almost always satisfied in practice. A platform that opens accounts for EU users, accepts EUR payments, translates terms into German/French/Italian and possibly appoints an Article 27 EU representative is \"directing its activities.\" Pure US platforms without any EU localization are the exception — and even there, the targeted acceptance of EU users and EU-generated revenue can constitute directing (cf. German Federal Court of Justice, XI ZR 156/05).",
          ],
        },
      },
      {
        heading: {
          de: "Wenn die Plattform JAMS aufruft: der praktische Workflow",
          en: "When the platform invokes JAMS: the practical workflow",
        },
        body: {
          de: [
            "Der typische Verlauf: Ihr Mandant klagt am Heimatgericht (z. B. LG Berlin). Die Plattform reicht eine „Motion to Compel Arbitration\" in den USA ein oder erhebt vor dem deutschen Gericht eine Schiedseinrede nach § 1032 ZPO. Beides ist in EU-Verbrauchersachen aussichtslos — wenn die Verteidigungslinie sauber gefahren wird.",
            "Schritt 1: Verbraucher-Status nachweisen. Das ist meist trivial — der Mandant nutzt den Account privat, nicht gewerblich. Bei Twitch-Streamern mit Affiliate-Status, Amazon-Sellern oder professionellen Gaming-Accounts wird es heikler; hier ist eine Einzelfallprüfung erforderlich (vgl. EuGH C-498/16 Schrems II, der den Verbraucherbegriff streng auslegt).",
            "Schritt 2: Ausrichten der Tätigkeit auf die EU dokumentieren. Wir empfehlen: Screenshots der lokalisierten Plattform-Seite (deutschsprachiges UI, EUR-Preise), AGB-Übersetzung, Impressum/Article-27-Vertreter falls vorhanden, Google-Werbung in deutscher Sprache. Diese Beweise gehen in den Schriftsatz.",
            "Schritt 3: Art. 19 Brüssel Ia gegen die Schiedsklausel anführen. Das Gericht prüft nicht die Wirksamkeit der Klausel nach kalifornischem Recht — es prüft, ob die Klausel nach EU-Verbraucherschutzrecht durchsetzbar ist. Sie ist es nicht, weil sie vor Streitentstehung geschlossen wurde und den Verbraucher von Art. 18 abschneidet.",
            "Erfahrungswert: bei sauberer Vorbereitung wird die Schiedseinrede in 80-90 % der Fälle abgewiesen, oft schon im schriftlichen Vorverfahren. Das US-Verfahren der „Motion to Compel\" verläuft parallel im Sand: ein US-Gericht setzt das Verfahren auf Antrag des EU-Verbrauchers wegen forum non conveniens oder international comity aus — wir koordinieren das aus New York.",
          ],
          en: [
            "Typical sequence: your client files at the home court (e.g., LG Berlin). The platform files a \"Motion to Compel Arbitration\" in the US or raises an arbitration defense before the German court under § 1032 ZPO. Both fail in EU consumer matters — if the defense line is run cleanly.",
            "Step 1: establish consumer status. Usually trivial — the client uses the account privately, not commercially. Twitch streamers with affiliate status, Amazon sellers, or professional gaming accounts raise harder questions; case-by-case analysis required (cf. CJEU C-498/16 Schrems, narrowly construing the consumer concept).",
            "Step 2: document the directing of activities to the EU. We recommend: screenshots of the localized platform page (German UI, EUR pricing), translated terms, imprint / Article 27 representative if present, Google ads in the local language. This evidence goes into the brief.",
            "Step 3: invoke Art. 19 Brussels Ia against the arbitration clause. The court does not examine the clause's validity under California law — it examines whether the clause is enforceable under EU consumer protection law. It is not, because it was concluded pre-dispute and cuts the consumer off from Art. 18.",
            "Practical experience: with proper preparation the arbitration defense fails in 80-90% of cases, often already in written preliminary proceedings. The parallel US \"Motion to Compel\" runs into the sand: a US court will stay the proceeding on the EU consumer's motion based on forum non conveniens or international comity — we coordinate this from New York.",
          ],
        },
      },
      {
        heading: {
          de: "Was US-Unternehmen aus dieser Analyse mitnehmen sollten",
          en: "What US companies should take from this analysis",
        },
        body: {
          de: [
            "Aus der Compliance-Perspektive: eine pauschale Arbitration-Klausel in den globalen Terms ist nicht falsch, aber sie schützt nicht vor EU-Verbraucher-Klagen. US-Unternehmen mit EU-Nutzerbasis sollten zwei Dinge tun: erstens eine EU-spezifische Terms-Variante (oder eine „EU Addendum\") mit alternativem Forum (z. B. Niederlande / Irland), zweitens eine realistische Erwartung an die operative Wirkung der Schiedsklausel auf EU-Nutzer (gering).",
            "Aus der Litigation-Perspektive: das Volumen kleinerer EU-Verbraucherklagen wird in den nächsten Jahren steigen. DSA und Brüssel Ia geben deutschen / österreichischen Verbrauchern den Heimatgerichtsstand quasi geschenkt; Legal-Tech-Anbieter und spezialisierte Kanzleien werden diese Hebel ausnutzen. Wer als US-Plattform einen einheitlichen Defense-Playbook hat, fährt deutlich günstiger als 50 individuelle Antworten.",
            "Aus der strategischen Perspektive: bei werthaltigen Streitigkeiten (Account-Sperrung mit gekauftem Content, Payout-Holds bei Creators, signifikante GDPR-Schäden) ist die Heimatgerichts-Klage des EU-Verbrauchers das härtere Schwert. Verhandlungslösungen vor Klage sind oft die rationalere Antwort als 18 Monate Verfahren vor dem LG Berlin mit anschließender Vollstreckung in den USA — die nach Hague Service durchaus möglich ist.",
          ],
          en: [
            "From a compliance perspective: a blanket arbitration clause in global terms is not wrong, but it does not protect against EU consumer lawsuits. US companies with an EU user base should do two things: first, an EU-specific terms variant (or an \"EU Addendum\") with an alternative forum (e.g., Netherlands / Ireland); second, realistic expectations about the operational effect of the arbitration clause on EU users (low).",
            "From a litigation perspective: the volume of smaller EU consumer suits will grow in the coming years. DSA and Brussels Ia hand German/Austrian consumers their home forum essentially for free; legal-tech providers and specialized firms will exploit these levers. A US platform with a uniform defense playbook runs considerably cheaper than fielding 50 individual responses.",
            "From a strategic perspective: in higher-value disputes (account suspensions with purchased content, payout holds against creators, significant GDPR damages), the EU consumer's home-court suit is the harder sword. Negotiated solutions pre-suit are often the rational answer rather than 18 months of proceedings before LG Berlin followed by US-side enforcement — which is entirely possible via Hague Service.",
          ],
        },
      },
    ],
  },
  {
    id: "gdpr-art-27-eu-vertreter-us-unternehmen",
    slug: {
      de: "gdpr-art-27-eu-vertreter-us-unternehmen",
      en: "gdpr-art-27-eu-representative-us-companies",
    },
    category: "cross-border",
    date: "2026-05-13",
    author: "phillips",
    readingMinutes: 9,
    title: {
      de: "GDPR Art. 27 EU-Vertreter — Der 4-Wochen-Pre-Launch-Check für US-Unternehmen",
      en: "GDPR Article 27 EU Representative — The 4-Week Pre-Launch Check for US Companies",
    },
    summary: {
      de:
        "US-Unternehmen ohne EU-Niederlassung, die EU-Daten verarbeiten, brauchen einen Article-27-Vertreter — und in vielen Fällen zusätzlich einen DSA-Article-13-Vertreter. Wer wann was braucht, wie der Bestellungsprozess in 4 Schritten läuft, und welche fünf Fehler in 80 % der ersten Fines vorkommen.",
      en:
        "US companies without an EU establishment that process EU personal data need an Article 27 representative — and often additionally a DSA Article 13 representative. Who needs what when, how the 4-step appointment process runs, and which five mistakes appear in 80% of first-time fines.",
    },
    keywords: [
      "GDPR Art 27 EU-Vertreter",
      "EU representative US company",
      "Article 27 GDPR appointment",
      "DSA Article 13 legal representative",
      "DSGVO Vertreter US-Unternehmen",
      "GDPR Article 27",
      "EU representative threshold",
      "Datenschutz-Vertreter EU",
    ],
    sections: [
      {
        heading: {
          de: "Was Art. 27 wirklich verlangt",
          en: "What Article 27 actually mandates",
        },
        body: {
          de: [
            "Art. 27 Abs. 1 DSGVO verpflichtet jeden Verantwortlichen oder Auftragsverarbeiter, der „nicht in der Union niedergelassen ist\" aber Daten von Personen in der EU verarbeitet, einen schriftlich benannten Vertreter in der Union zu bestellen. Der Vertreter muss in einem der Mitgliedstaaten ansässig sein, in dem sich „die betroffenen Personen befinden\" — in der Praxis: in dem Mitgliedstaat mit der größten EU-Nutzerbasis des Unternehmens.",
            "Was der Vertreter NICHT ist: kein Datenschutzbeauftragter (Art. 37), kein EU-Anwalt, keine Tochtergesellschaft. Was er IST: eine vom Unternehmen schriftlich beauftragte juristische Person mit Sitz in der EU, die als Anlaufstelle für Aufsichtsbehörden und Betroffene fungiert, Anfragen entgegennimmt und an das US-Unternehmen weiterleitet. Die Haftung verbleibt beim US-Verantwortlichen — der Vertreter ist kein „Schutzschild\".",
            "Praktischer Hinweis: viele US-Unternehmen unterschätzen, dass Art. 27 ein „Ja oder Nein\"-Test ist, kein Schwellenwert-Test. Sobald die Datenverarbeitung „nicht nur gelegentlich\" ist UND besondere Datenkategorien (Art. 9) oder strafrechtliche Verurteilungen umfasst ODER ein Risiko für Betroffene darstellt, ist die Pflicht ausgelöst. In der Praxis fällt fast jede SaaS-Plattform mit EU-Nutzern unter diese Definition.",
          ],
          en: [
            "Article 27(1) GDPR obliges every controller or processor that is \"not established in the Union\" but processes personal data of individuals in the EU to designate in writing a representative in the Union. The representative must be established in one of the Member States where \"the data subjects... are\" — in practice, in the Member State with the company's largest EU user base.",
            "What the representative is NOT: not a Data Protection Officer (Art. 37), not an EU lawyer, not a subsidiary. What it IS: a legal entity established in the EU, mandated in writing by the company, acting as a point of contact for supervisory authorities and data subjects, receiving inquiries and forwarding them to the US company. Liability remains with the US controller — the representative is not a \"shield.\"",
            "Practical note: many US companies underestimate that Article 27 is a yes/no test, not a threshold test. Once the processing is \"not occasional\" AND involves special categories of data (Art. 9) or criminal convictions, OR involves a risk to data subjects, the obligation is triggered. In practice, almost every SaaS platform with EU users falls under this definition.",
          ],
        },
      },
      {
        heading: {
          de: "Wer braucht einen — und wann nicht",
          en: "Who needs one — and when not",
        },
        body: {
          de: [
            "Pflicht: jedes Unternehmen ohne EU-Niederlassung, das Waren oder Dienstleistungen an EU-Nutzer anbietet (Art. 3(2)(a)) oder das Verhalten von EU-Nutzern beobachtet (Art. 3(2)(b) — also fast jede Analytics-Plattform, jede Tracking-SDK, jede Programmatic-Ad-Plattform).",
            "Ausnahme nach Art. 27(2): Verarbeitung ist „nur gelegentlich\" UND nicht in großem Umfang UND keine besonderen Kategorien UND kein wahrscheinliches Risiko. Diese Schwelle ist eng — der EDPB hat 2018 (Guidelines 3/2018) klargestellt, dass „gelegentlich\" eine seltene, nicht wiederkehrende Verarbeitung meint. Eine US-App mit 50 deutschen Nutzern, die täglich Daten generieren, ist nicht „gelegentlich\".",
            "Häufig übersehen: B2B-Unternehmen sind nicht ausgenommen. Wenn ein US-CRM personenbezogene Daten von EU-Mitarbeitern bei deren Kunden verarbeitet, ist das Verarbeiten — der Adressat im EU-Mitgliedstaat ist eine natürliche Person, auch wenn der Vertrag B2B ist. Wir sehen den Fehler regelmäßig bei US-SaaS, das „business email\"-Adressen sammelt.",
            "Zweite Falle: der DSA-Article-13-Vertreter ist eine PARALLELE Pflicht, kein Ersatz. Wenn das US-Unternehmen ein „Intermediary Service\" nach DSA ist (Hosting, Online-Marketplace, sehr großer Online-Search-Engine etc.), braucht es ZUSÄTZLICH zum Article-27-Vertreter einen DSA-Article-13-Vertreter. Beide Rollen können von derselben Entität ausgeübt werden, aber das muss schriftlich klargestellt sein.",
          ],
          en: [
            "Required: every company without EU establishment that offers goods or services to EU users (Art. 3(2)(a)) or monitors the behavior of EU users (Art. 3(2)(b) — so virtually every analytics platform, every tracking SDK, every programmatic-ad platform).",
            "Exemption under Art. 27(2): processing is \"occasional\" AND not large-scale AND no special categories AND no likely risk. This threshold is narrow — the EDPB clarified in 2018 (Guidelines 3/2018) that \"occasional\" means rare, non-recurring processing. A US app with 50 German users generating daily data is not \"occasional.\"",
            "Often overlooked: B2B companies are not exempt. If a US CRM processes personal data of EU employees at their customers, that is processing — the data subject in the EU Member State is a natural person, even if the contract is B2B. We see this mistake regularly at US SaaS that collects \"business email\" addresses.",
            "Second trap: the DSA Article 13 representative is a PARALLEL obligation, not a substitute. If the US company qualifies as an \"intermediary service\" under DSA (hosting, online marketplace, very large online search engine etc.), it needs a DSA Article 13 representative IN ADDITION to the Article 27 representative. Both roles can be performed by the same entity, but that must be clarified in writing.",
          ],
        },
      },
      {
        heading: {
          de: "Der 4-Schritte-Bestellungsprozess",
          en: "The 4-step appointment process",
        },
        body: {
          de: [
            "Schritt 1 (Woche 1) — Mitgliedstaat wählen. Nach Art. 27(3) muss der Vertreter in einem Mitgliedstaat sitzen, in dem die Betroffenen sind. Bei diffuser EU-Nutzerschaft wird in der Praxis der Mitgliedstaat mit dem höchsten Nutzeranteil gewählt — meist Deutschland, Niederlande, Irland oder Frankreich. Achtung: der gewählte Sitz bestimmt mittelbar die zuständige Aufsichtsbehörde im „One-Stop-Shop\"-Mechanismus, also potenziell BfDI vs. IE DPC vs. CNIL. Das ist eine strategische Wahl.",
            "Schritt 2 (Woche 2) — Vertreter mandatieren. Schriftliche Vollmacht („mandate letter\"), die mindestens umfasst: (a) die Verantwortlichen / Auftragsverarbeiter, die der Vertreter repräsentiert; (b) die Verarbeitungstätigkeiten; (c) die Verpflichtung zur Führung des Verzeichnisses nach Art. 30; (d) die Verfügbarkeitsgarantie (Anfragen innerhalb von [X] Werktagen weiterleiten); (e) die Haftungsverteilung. Spezialisierte Vertreter-Dienstleister haben Standard-Mandate, die anpassbar sind.",
            "Schritt 3 (Woche 3) — Datenschutzerklärung aktualisieren. Nach Art. 13(1)(a) muss die DS-Erklärung den Vertreter (Name, Anschrift, Kontaktdaten) ausweisen. Außerdem die Aufsichtsbehörde nennen. Ein häufiger Fehler: der Vertreter wird nur „intern\" benannt, aber nicht in der öffentlich zugänglichen Datenschutzerklärung — das ist nicht ausreichend und ein typischer Ansatzpunkt für Aufsichtsbehörden.",
            "Schritt 4 (Woche 4) — Betroffenenanfrage-Workflow aufsetzen. Der Vertreter muss Anfragen entgegennehmen UND zeitgerecht beantworten lassen — die DSGVO-Fristen (Art. 12(3): 1 Monat, verlängerbar) laufen ab Eingang beim Vertreter, nicht ab Weiterleitung an das US-Unternehmen. Operativ heißt das: SLAs zwischen Vertreter und US-Unternehmen, idealerweise mit einer geteilten Ticket-Inbox.",
          ],
          en: [
            "Step 1 (Week 1) — choose Member State. Per Art. 27(3) the representative must be established in a Member State where data subjects are. With diffuse EU user bases, in practice the Member State with the highest user share is selected — usually Germany, the Netherlands, Ireland, or France. Note: the chosen seat indirectly determines the lead supervisory authority under the \"one-stop-shop\" mechanism, potentially BfDI vs. IE DPC vs. CNIL. This is a strategic choice.",
            "Step 2 (Week 2) — mandate the representative. Written mandate letter, covering at minimum: (a) the controllers / processors the representative represents; (b) the processing activities; (c) the obligation to maintain the Article 30 record; (d) the availability guarantee (inquiries forwarded within [X] business days); (e) the liability allocation. Specialized representative service providers have template mandates, customizable.",
            "Step 3 (Week 3) — update the privacy notice. Per Art. 13(1)(a) the privacy notice must disclose the representative (name, address, contact details). Also name the supervisory authority. A common mistake: the representative is named only \"internally\" but not in the public-facing privacy notice — that is insufficient and a typical entry point for supervisory authorities.",
            "Step 4 (Week 4) — set up the data subject request workflow. The representative must accept requests AND have them answered in time — the GDPR deadlines (Art. 12(3): one month, extendable) start running upon receipt by the representative, not upon forwarding to the US company. Operationally: SLAs between representative and US company, ideally with a shared ticket inbox.",
          ],
        },
      },
      {
        heading: {
          de: "Fünf Fehler, die in 80 % der ersten Bußgelder vorkommen",
          en: "Five mistakes that appear in 80% of first-time fines",
        },
        body: {
          de: [
            "Fehler 1 — Kein Vertreter benannt, weil das US-Unternehmen sich auf eine US-Auftragsverarbeitung beruft. Wenn der Verantwortliche oder Auftragsverarbeiter selbst Anbieter ist, gilt Art. 27. Eine bestellte EU-Tochter ist keine Befreiung, wenn die Tochter nicht die GLEICHE rechtliche Person wie der Verantwortliche ist.",
            "Fehler 2 — Vertreter in einem Mitgliedstaat benannt, in dem keine Nutzer sitzen, weil es dort billiger ist. Aufsichtsbehörden akzeptieren das, aber wenn DSA Article 13 ebenfalls gilt und unterschiedliche Anforderungen entstehen, wird es operativ heikel. Wir empfehlen den Mitgliedstaat mit der größten EU-Nutzergruppe.",
            "Fehler 3 — Vertreter nur in interner E-Mail genannt, nicht in öffentlicher Privacy Notice. Die hessische Aufsichtsbehörde hat 2023 einen US-AdTech-Anbieter aus diesem Grund mit 240k € belegt — der Vertreter war zwar benannt, aber für Betroffene unauffindbar.",
            "Fehler 4 — Mandate Letter nennt nur die Muttergesellschaft, nicht die Tochtergesellschaften, die ebenfalls EU-Daten verarbeiten. Bei einer Group-Struktur muss jede Verantwortliche-Entität separat aufgeführt sein. Die CNIL hat 2024 in mindestens drei Fällen ausdrücklich kritisiert, dass „Subsidiaries\" nicht aufgeführt waren.",
            "Fehler 5 — Antwortzeiten nicht eingehalten. Wenn der Vertreter eine Anfrage am Tag X erhält und sie an das US-Unternehmen erst am Tag X+10 weiterleitet, läuft die 1-Monats-Frist trotzdem ab Tag X. Die häufigste Folge: Beschwerde der betroffenen Person, dann automatische Eskalation zur Aufsichtsbehörde, dann formelle Untersuchung. Operative SLAs sind kein Nice-to-have.",
          ],
          en: [
            "Mistake 1 — No representative appointed, because the US company points to a US processing arrangement. If the controller or processor itself is the offerer, Art. 27 applies. An EU subsidiary is not an exemption unless the subsidiary is the SAME legal entity as the controller.",
            "Mistake 2 — Representative appointed in a Member State where no users are located, because it is cheaper there. Supervisory authorities accept this, but if DSA Article 13 also applies and different requirements arise, it gets operationally messy. We recommend the Member State with the largest EU user group.",
            "Mistake 3 — Representative only named in internal email, not in public privacy notice. The Hessian supervisory authority fined a US AdTech provider €240k in 2023 for this reason — the representative was appointed but not findable for data subjects.",
            "Mistake 4 — Mandate letter only names the parent company, not the subsidiaries that also process EU data. In a group structure, each controlling entity must be listed separately. CNIL has expressly criticized the omission of \"subsidiaries\" in at least three decisions in 2024.",
            "Mistake 5 — Response times not met. If the representative receives an inquiry on day X and forwards it to the US company only on day X+10, the one-month deadline still runs from day X. The most common consequence: data subject complaint, automatic escalation to the supervisory authority, formal investigation. Operational SLAs are not a nice-to-have.",
          ],
        },
      },
      {
        heading: {
          de: "Koordination mit US-Counsel und DSA Art. 13",
          en: "Coordinating with US counsel and DSA Article 13",
        },
        body: {
          de: [
            "Für US-Unternehmen läuft die Article-27-Bestellung in der Regel parallel zu einer Reihe weiterer Compliance-Schritte: SCC-Modul-2-Verträge mit EU-Subprozessoren, TIA (Transfer Impact Assessment) nach Schrems II, Art. 30 Record of Processing Activities, ggf. eine DPIA nach Art. 35. Wer den Article-27-Vertreter isoliert benennt, ohne die anderen Bausteine zu adressieren, schafft eine Compliance-Fassade, die bei der ersten Aufsichtsbehörden-Anfrage zusammenbricht.",
            "Bei DSA-Relevanz (Hosting, Marketplace, Search): Article 13 DSA verlangt einen Vertreter in einem der Mitgliedstaaten, in denen der Dienst angeboten wird. Pflichten teilweise parallel zu Art. 27, teilweise schärfer — der DSA-Vertreter haftet zusätzlich für DSA-Verstöße. Wir empfehlen dieselbe Entität, aber ZWEI getrennte Mandate Letters, weil Audit-Tracking und Haftungsabgrenzung sonst kollidieren.",
            "Aus US-Sicht: die Article-27- und Article-13-Bestellung wird typischerweise vom US General Counsel oder Privacy Lead initiiert. Wir koordinieren als EU-Counsel mit dem US-Team, schreiben die Mandate Letters, prüfen die Privacy Notice-Updates und briefen den US-Privacy-Lead vor der ersten Aufsichtsbehörden-Anfrage. Time-to-Production aus unserer Erfahrung: 4-6 Wochen bei vorhandener EU-Lokalisierung, 8-10 Wochen ohne.",
          ],
          en: [
            "For US companies, the Article 27 appointment typically runs in parallel to a series of additional compliance steps: SCC Module 2 contracts with EU sub-processors, TIA (Transfer Impact Assessment) per Schrems II, Art. 30 record of processing activities, possibly a DPIA per Art. 35. Whoever appoints the Article 27 representative in isolation, without addressing the other building blocks, creates a compliance facade that collapses on the first supervisory inquiry.",
            "Where DSA applies (hosting, marketplace, search): Article 13 DSA requires a representative in one of the Member States where the service is offered. Duties partly parallel to Art. 27, partly stricter — the DSA representative is additionally liable for DSA violations. We recommend the same entity but TWO separate mandate letters, because audit tracking and liability boundaries otherwise collide.",
            "From the US perspective: the Article 27 / Article 13 appointment is typically initiated by US General Counsel or Privacy Lead. We coordinate as EU counsel with the US team, draft the mandate letters, review the privacy notice updates, and brief US privacy lead before the first supervisory inquiry. Time-to-production in our experience: 4-6 weeks where EU localization already exists, 8-10 weeks without.",
          ],
        },
      },
    ],
  },
];

export function getArticleBySlug(slug: string, locale: Locale): Article | undefined {
  return articles.find((a) => a.slug[locale] === slug);
}

export function getArticlesByCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

export function formatArticleDate(date: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale === "de" ? "de-DE" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}
