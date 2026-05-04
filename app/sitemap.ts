import type { MetadataRoute } from "next";
import { platforms } from "@/lib/platforms";
import { env } from "@/lib/utils";

const BASE = env.siteUrl.replace(/\/$/, "");

const STATIC_PATHS: { de: string; en: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { de: "/de", en: "/en", priority: 1.0, freq: "weekly" },
  { de: "/de/leistungen", en: "/en/services", priority: 0.9, freq: "monthly" },
  { de: "/de/erstberatung", en: "/en/consultation", priority: 0.9, freq: "monthly" },
  { de: "/de/kanzlei", en: "/en/firm", priority: 0.7, freq: "monthly" },
  { de: "/de/wissen", en: "/en/insights", priority: 0.6, freq: "weekly" },
  { de: "/de/faelle", en: "/en/cases", priority: 0.6, freq: "monthly" },
  { de: "/de/kontakt", en: "/en/contact", priority: 0.6, freq: "yearly" },
  { de: "/de/impressum", en: "/en/legal-notice", priority: 0.2, freq: "yearly" },
  { de: "/de/datenschutz", en: "/en/privacy", priority: 0.2, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const items: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    items.push({
      url: `${BASE}${path.de}`,
      lastModified: now,
      changeFrequency: path.freq,
      priority: path.priority,
      alternates: {
        languages: {
          de: `${BASE}${path.de}`,
          en: `${BASE}${path.en}`,
        },
      },
    });
    items.push({
      url: `${BASE}${path.en}`,
      lastModified: now,
      changeFrequency: path.freq,
      priority: path.priority,
      alternates: {
        languages: {
          de: `${BASE}${path.de}`,
          en: `${BASE}${path.en}`,
        },
      },
    });
  }

  for (const p of platforms) {
    const dePath = `/de/leistungen/${p.slug.de}`;
    const enPath = `/en/services/${p.slug.en}`;
    items.push({
      url: `${BASE}${dePath}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { de: `${BASE}${dePath}`, en: `${BASE}${enPath}` } },
    });
    items.push({
      url: `${BASE}${enPath}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: { languages: { de: `${BASE}${dePath}`, en: `${BASE}${enPath}` } },
    });
  }

  return items;
}
