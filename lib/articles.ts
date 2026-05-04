import type { Locale } from "@/i18n/routing";

export type ArticleCategory =
  | "guide"
  | "dsa"
  | "gdpr"
  | "consumer"
  | "case-law"
  | "p2b"
  | "crypto";

export interface Article {
  id: string;
  slug: { de: string; en: string };
  category: ArticleCategory;
  date: string;
  author: "hartmann" | "vogel";
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
