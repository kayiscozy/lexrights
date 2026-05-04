"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ShieldCheck, Globe2, Sparkles } from "lucide-react";
import { HeroQuickForm } from "./hero-quick-form";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32">
      <div className="editorial-bg absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-(--color-border-strong) bg-(--color-bg-surface) px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric) shadow-[var(--shadow-xs)]"
          >
            <Sparkles className="size-3.5" aria-hidden />
            {t("eyebrow")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.025em] text-(--color-fg) md:text-6xl lg:text-7xl xl:text-[88px]"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-(--color-fg-muted) md:text-xl"
          >
            {t("sub")}
          </motion.p>

          <HeroQuickForm />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-2 text-sm text-(--color-fg-muted)"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-bg-surface) px-3 py-1.5 shadow-[var(--shadow-xs)]">
              <ShieldCheck
                className="size-3.5 text-(--color-brand-electric)"
                aria-hidden
              />
              {t("trust.badge1")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-bg-surface) px-3 py-1.5 shadow-[var(--shadow-xs)]">
              <Globe2
                className="size-3.5 text-(--color-brand-electric)"
                aria-hidden
              />
              {t("trust.badge2")}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-(--color-bg-surface) px-3 py-1.5 shadow-[var(--shadow-xs)]">
              <Sparkles
                className="size-3.5 text-(--color-brand-electric)"
                aria-hidden
              />
              {t("trust.badge3")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
