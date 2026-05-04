"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ShieldCheck, Globe2, Sparkles } from "lucide-react";
import { HeroQuickForm } from "./hero-quick-form";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
      <div className="aurora-bg absolute inset-0 -z-10" aria-hidden />
      <div
        className="aurora-grid absolute inset-0 -z-10 opacity-50"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[--color-brand-navy] via-[--color-brand-electric]/40 to-[--color-brand-glow]/30" />
      </div>

      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[--color-brand-electric]/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[--color-border-strong] bg-[--color-bg-surface]/60 px-4 py-1.5 text-xs font-medium tracking-wide text-[--color-fg-muted] backdrop-blur-sm"
          >
            <Sparkles className="size-3.5 text-[--color-brand-electric]" aria-hidden />
            {t("eyebrow")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-balance text-5xl font-semibold leading-[1.05] tracking-[-0.04em] text-[--color-fg] md:text-6xl lg:text-7xl xl:text-[88px]"
          >
            {t("headline")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[--color-fg-muted] md:text-xl"
          >
            {t("sub")}
          </motion.p>

          <HeroQuickForm />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[--color-fg-muted]"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck
                className="size-4 text-[--color-brand-electric]"
                aria-hidden
              />
              {t("trust.badge1")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Globe2
                className="size-4 text-[--color-brand-electric]"
                aria-hidden
              />
              {t("trust.badge2")}
            </span>
            <span className="inline-flex items-center gap-2">
              <Sparkles
                className="size-4 text-[--color-brand-electric]"
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
