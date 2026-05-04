export type PlatformCategory =
  | "gaming"
  | "social"
  | "marketplace"
  | "payment"
  | "crypto"
  | "creator";

export interface Platform {
  slug: { de: string; en: string };
  name: string;
  category: PlatformCategory;
  shortDesc: { de: string; en: string };
  vendor: string;
  jurisdiction: string;
}

export const platforms: Platform[] = [
  {
    slug: {
      de: "fortnite-account-gesperrt",
      en: "fortnite-account-banned",
    },
    name: "Fortnite / Epic Games",
    category: "gaming",
    vendor: "Epic Games International S.à r.l. (Luxemburg)",
    jurisdiction: "EU – Verbrauchergerichtsstand am Wohnsitz",
    shortDesc: {
      de: "Account-Sperre, V-Bucks-Verlust, Skin-Wiederherstellung. EasyAntiCheat-False-Positives sind angreifbar.",
      en: "Account bans, V-Bucks loss, skin recovery. EasyAntiCheat false positives are challengeable.",
    },
  },
  {
    slug: {
      de: "tiktok-account-gesperrt",
      en: "tiktok-account-suspended",
    },
    name: "TikTok",
    category: "social",
    vendor: "TikTok Technology Limited (Dublin, Irland)",
    jurisdiction: "EU – DSA-Pflichten als VLOP nach Art. 33",
    shortDesc: {
      de: "Permanent Bans, Shadow Bans, Live-Sperren. DSA Art. 17 verlangt konkrete Begründung.",
      en: "Permanent bans, shadow bans, live restrictions. DSA Art. 17 requires specific reasons.",
    },
  },
  {
    slug: {
      de: "steam-account-gesperrt",
      en: "steam-account-banned",
    },
    name: "Steam / Valve",
    category: "gaming",
    vendor: "Valve Corporation (Bellevue, USA)",
    jurisdiction: "EU – Klage am Wohnsitz nach Brüssel-Ia Art. 18",
    shortDesc: {
      de: "VAC-Bans, Trade-Bans, CS2-Inventarverluste 5-stellig möglich. Anti-Cheat-Black-Box angreifbar.",
      en: "VAC bans, trade bans, 5-figure CS2 inventory losses possible. Anti-cheat black box is challengeable.",
    },
  },
  {
    slug: {
      de: "meta-instagram-gesperrt",
      en: "meta-instagram-disabled",
    },
    name: "Meta (Facebook, Instagram)",
    category: "social",
    vendor: "Meta Platforms Ireland Ltd. (Dublin)",
    jurisdiction: "EU – BGH III ZR 179/20 als Maßstab",
    shortDesc: {
      de: "Konto deaktiviert, Werbekonto gesperrt, Verifizierungs-Verlust. BGH-Verfahrenstrias zwingend.",
      en: "Account disabled, ad account suspended, verified status revoked. BGH procedural triad mandatory.",
    },
  },
  {
    slug: {
      de: "paypal-konto-gesperrt",
      en: "paypal-account-frozen",
    },
    name: "PayPal",
    category: "payment",
    vendor: "PayPal (Europe) S.à r.l. et Cie SCA (Luxemburg)",
    jurisdiction: "EU – Zahlungsdienst, BaFin-Beschwerde möglich",
    shortDesc: {
      de: "180-Tage-Holds, eingefrorene Guthaben, Account-Schließung. Direkt liquider Streitwert.",
      en: "180-day holds, frozen balances, account closure. Direct liquid claim value.",
    },
  },
  {
    slug: {
      de: "psn-playstation-gesperrt",
      en: "psn-playstation-banned",
    },
    name: "PlayStation Network",
    category: "gaming",
    vendor: "Sony Interactive Entertainment Network Europe Ltd. (London)",
    jurisdiction: "EU – Verbraucherrecht greift voll",
    shortDesc: {
      de: "Suspension, Console-Ban, Bibliotheksverlust. Hardware-Ban als Eigentumseingriff.",
      en: "Suspension, console ban, library loss. Hardware ban as interference with property.",
    },
  },
  {
    slug: {
      de: "riot-valorant-gesperrt",
      en: "riot-valorant-banned",
    },
    name: "Riot Games (Valorant, LoL)",
    category: "gaming",
    vendor: "Riot Games Ireland Ltd. (Dublin)",
    jurisdiction: "EU – DSGVO Art. 22 gegen Vanguard-Bans",
    shortDesc: {
      de: "Vanguard HWID-Bans, Permabans, Smurfing-Sperren. False Positives dokumentiert.",
      en: "Vanguard HWID bans, permabans, smurf bans. False positives documented.",
    },
  },
  {
    slug: {
      de: "youtube-kanal-geloescht",
      en: "youtube-channel-terminated",
    },
    name: "YouTube",
    category: "creator",
    vendor: "Google Ireland Ltd. (Dublin)",
    jurisdiction: "EU – DSA-VLOP nach Art. 33",
    shortDesc: {
      de: "Channel-Termination, Demonetarisierung, Content-ID-Disputes. Creator-Streitwerte oft 5-stellig.",
      en: "Channel termination, demonetization, Content ID disputes. Creator damages often 5-figure.",
    },
  },
  {
    slug: {
      de: "roblox-account-gesperrt",
      en: "roblox-account-banned",
    },
    name: "Roblox",
    category: "gaming",
    vendor: "Roblox Corporation (San Mateo, USA)",
    jurisdiction: "EU – Brüssel-Ia Verbrauchergerichtsstand",
    shortDesc: {
      de: "Automatisierte Moderation ohne menschliche Prüfung. Für Eltern Minderjähriger besonders relevant.",
      en: "Automated moderation without human review. Particularly relevant for parents of minors.",
    },
  },
  {
    slug: {
      de: "discord-account-gesperrt",
      en: "discord-account-suspended",
    },
    name: "Discord",
    category: "social",
    vendor: "Discord Netherlands B.V. (Amsterdam)",
    jurisdiction: "EU – DSA voll anwendbar",
    shortDesc: {
      de: "Account-Disable, Server-Bans, Off-Platform-Behaviour-Klauseln angreifbar.",
      en: "Account disable, server bans, off-platform behaviour clauses are challengeable.",
    },
  },
  {
    slug: {
      de: "amazon-seller-gesperrt",
      en: "amazon-seller-suspended",
    },
    name: "Amazon Seller Central",
    category: "marketplace",
    vendor: "Amazon Services Europe S.à r.l. (Luxemburg)",
    jurisdiction: "EU – P2B-VO + DSA, Streitwerte 5-6-stellig",
    shortDesc: {
      de: "Seller-Suspension, 90-Tage-Funds-Hold, ASIN-Block. P2B-VO verlangt 30-Tage-Vorwarnung.",
      en: "Seller suspension, 90-day funds hold, ASIN block. P2B Regulation requires 30-day notice.",
    },
  },
  {
    slug: {
      de: "coinbase-binance-gesperrt",
      en: "coinbase-binance-frozen",
    },
    name: "Coinbase / Binance",
    category: "crypto",
    vendor: "Coinbase Europe Ltd. (Irland) / Binance",
    jurisdiction: "EU/MiCA – BaFin bei Coinbase",
    shortDesc: {
      de: "Eingefrorene Coins, Withdrawal-Locks, KYC-Holds. Bei Coinbase BaFin-Beschwerde möglich.",
      en: "Frozen coins, withdrawal locks, KYC holds. BaFin complaint possible with Coinbase.",
    },
  },
  {
    slug: {
      de: "ebay-konto-gesperrt",
      en: "ebay-account-suspended",
    },
    name: "eBay",
    category: "marketplace",
    vendor: "eBay GmbH / eBay Marketplaces GmbH",
    jurisdiction: "EU – BGH VIII ZR 244/10 als Leitlinie",
    shortDesc: {
      de: "Verkäuferkonto-Sperre, Managed-Payments-Hold, PowerSeller-Verlust. Klare BGH-Linie.",
      en: "Seller account suspension, managed payments hold, PowerSeller loss. Clear BGH precedent.",
    },
  },
  {
    slug: {
      de: "xbox-live-gesperrt",
      en: "xbox-live-suspended",
    },
    name: "Xbox Live",
    category: "gaming",
    vendor: "Microsoft Ireland Operations Ltd. (Dublin)",
    jurisdiction: "EU – Verbraucherschutz greift voll",
    shortDesc: {
      de: "Communications Ban, Enforcement Ban, Device-Ban. Game-Pass-Verluste.",
      en: "Communications ban, enforcement ban, device ban. Game Pass losses.",
    },
  },
  {
    slug: {
      de: "twitch-ban-anwalt",
      en: "twitch-ban-lawyer",
    },
    name: "Twitch",
    category: "creator",
    vendor: "Twitch Interactive Inc. (San Francisco)",
    jurisdiction: "EU – Brüssel-Ia für Verbraucher",
    shortDesc: {
      de: "DMCA-Bans, Hateful-Conduct-Strikes, Affiliate-Sperren. Streamer-Verdienstausfall.",
      en: "DMCA bans, hateful conduct strikes, affiliate suspensions. Streamer revenue loss.",
    },
  },
];

export function getPlatformBySlug(
  slug: string,
  locale: "de" | "en",
): Platform | undefined {
  return platforms.find((p) => p.slug[locale] === slug);
}

export const platformCategories: Record<
  PlatformCategory,
  { de: string; en: string }
> = {
  gaming: { de: "Gaming", en: "Gaming" },
  social: { de: "Social Media", en: "Social Media" },
  marketplace: { de: "Marktplätze", en: "Marketplaces" },
  payment: { de: "Zahlungs­dienste", en: "Payment Services" },
  crypto: { de: "Crypto", en: "Crypto" },
  creator: { de: "Creator­-Plattformen", en: "Creator Platforms" },
};
