"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import { platforms, platformCategories, type Platform } from "@/lib/platforms";
import type { Locale } from "@/i18n/routing";

export function PlatformsSection() {
  const t = useTranslations("platforms");
  const locale = useLocale() as Locale;

  const featured: Platform[] = [
    platforms[0], // Fortnite
    platforms[1], // TikTok
    platforms[2], // Steam
    platforms[3], // Meta
    platforms[4], // PayPal
    platforms[7], // YouTube
    platforms[10], // Amazon Seller
    platforms[11], // Coinbase
  ];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[--color-fg] md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-pretty text-base text-[--color-fg-muted] md:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {featured.map((platform, idx) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={{
                  pathname: "/leistungen/[slug]",
                  params: { slug: platform.slug[locale] },
                }}
                className="card-hover card-glow group relative flex h-full flex-col rounded-xl border border-[--color-fg]/10 bg-[--color-bg-surface]/40 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[--color-brand-glow]">
                    {platformCategories[platform.category][locale]}
                  </span>
                  <ArrowUpRight
                    className="size-4 -translate-y-0.5 translate-x-0.5 text-[--color-fg-subtle] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[--color-brand-electric]"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-3 text-base font-semibold text-[--color-fg]">
                  {platform.name}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[--color-fg-muted]">
                  {platform.shortDesc[locale]}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 text-sm font-medium text-[--color-brand-electric] transition-colors hover:text-[--color-brand-glow]"
          >
            {t("viewAll")}
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
