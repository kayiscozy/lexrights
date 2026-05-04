/**
 * Curated Unsplash images per page.
 * Selected for premium law-firm aesthetic — abstract architecture,
 * library, justice motifs. NO platform logos (trademark issues).
 *
 * Format: photo-{id}?...
 * License: Unsplash License (free for commercial use, no attribution required).
 */

export interface PageImage {
  /** Unsplash photo URL (will be optimized via next/image) */
  src: string;
  /** Photographer credit (optional but courteous) */
  credit: string;
  /** Alt text for accessibility (locale-neutral or DE) */
  alt: string;
}

const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1920&q=80&fit=crop&auto=format`;

export const pageImages = {
  /** Homepage hero — modern architectural perspective, premium feel */
  home: {
    src: u("1518005020951-eccb494ad742"),
    credit: "Aaron Dubois on Unsplash",
    alt: "Moderne Architektur, klare Linien — Symbol für klare Rechtsdurchsetzung",
  },

  /** /kanzlei — Library, books, knowledge */
  firm: {
    src: u("1568667256549-094345857637"),
    credit: "Photo on Unsplash",
    alt: "Bibliothek mit Rechtsbüchern",
  },

  /** /leistungen — Justice / scales motif (subtle) */
  services: {
    src: u("1589994965851-a8f479c573a9"),
    credit: "Tingey Injury Law Firm on Unsplash",
    alt: "Justizia-Statue mit Waage — Symbol für Rechtsprechung",
  },

  /** /wissen — Books, study, editorial */
  insights: {
    src: u("1457369804613-52c61a468e7d"),
    credit: "Aaron Burden on Unsplash",
    alt: "Aufgeschlagenes Buch — Symbol für Wissen und Tiefe",
  },

  /** /faelle — Court / chambers feel */
  cases: {
    src: u("1505664194779-8beaceb93744"),
    credit: "Photo on Unsplash",
    alt: "Säulen eines Gerichtsgebäudes — Symbol für Rechtsstaat",
  },

  /** /kontakt — Berlin architecture, modern */
  contact: {
    src: u("1599386904022-d2b8a8e44e6a"),
    credit: "Photo on Unsplash",
    alt: "Berliner Architektur — Sitz unserer Kanzlei in Berlin Mitte",
  },

  /** /erstberatung — Communication, dialogue */
  consultation: {
    src: u("1450101499163-c8848c66ca85"),
    credit: "Photo on Unsplash",
    alt: "Beratungsgespräch — vertrauensvoller Erstkontakt",
  },

  /** Pillar-Pages — gemeinsamer Hero (Tech meets Law) */
  pillarGaming: {
    src: u("1542751371-adc38448a05e"),
    credit: "Sean Do on Unsplash",
    alt: "Gaming-Setup — moderne digitale Welt",
  },
  pillarSocial: {
    src: u("1611162617213-7d7a39e9b1d7"),
    credit: "Photo on Unsplash",
    alt: "Smartphone mit Social-Media-Apps",
  },
  pillarMarketplace: {
    src: u("1556742049-0cfed4f6a45d"),
    credit: "Photo on Unsplash",
    alt: "Online-Marktplatz Symbol",
  },
  pillarPayment: {
    src: u("1563013544-824ae1b704d3"),
    credit: "Photo on Unsplash",
    alt: "Digitale Zahlungsdienste",
  },
  pillarCreator: {
    src: u("1611162616305-c69b3fa7fbe0"),
    credit: "Photo on Unsplash",
    alt: "Content-Creation Setup",
  },
} as const satisfies Record<string, PageImage>;

export type PageImageKey = keyof typeof pageImages;
