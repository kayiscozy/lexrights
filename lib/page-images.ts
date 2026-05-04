/**
 * Locally hosted hero images (downloaded from Unsplash).
 * Stored in /public/images/heroes/
 *
 * License: Unsplash License (free for commercial use, no attribution required).
 */

export interface PageImage {
  src: string;
  alt: string;
}

export const pageImages = {
  home: {
    src: "/images/heroes/home.jpg",
    alt: "Moderne Architektur - Symbol für klare Rechtsdurchsetzung",
  },
  firm: {
    src: "/images/heroes/firm.jpg",
    alt: "Bibliothek mit Rechtsbüchern",
  },
  services: {
    src: "/images/heroes/services.jpg",
    alt: "Justizia-Statue mit Waage",
  },
  insights: {
    src: "/images/heroes/insights.jpg",
    alt: "Aufgeschlagenes Buch - Symbol für Wissen und Tiefe",
  },
  cases: {
    src: "/images/heroes/cases.jpg",
    alt: "Säulen eines Gerichtsgebäudes",
  },
  contact: {
    src: "/images/heroes/contact.jpg",
    alt: "Berlin Architektur - Sitz unserer Kanzlei",
  },
  consultation: {
    src: "/images/heroes/consultation.jpg",
    alt: "Beratungsgespräch",
  },
  pillarGaming: {
    src: "/images/heroes/gaming.jpg",
    alt: "Gaming-Setup",
  },
  pillarSocial: {
    src: "/images/heroes/social.jpg",
    alt: "Smartphone mit Social-Apps",
  },
  pillarMarketplace: {
    src: "/images/heroes/marketplace.jpg",
    alt: "Online-Marktplatz",
  },
  pillarPayment: {
    src: "/images/heroes/payment.jpg",
    alt: "Digitale Zahlungsdienste",
  },
  pillarCreator: {
    src: "/images/heroes/creator.jpg",
    alt: "Content-Creation Setup",
  },
} as const satisfies Record<string, PageImage>;

export type PageImageKey = keyof typeof pageImages;
