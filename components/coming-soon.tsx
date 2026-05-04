"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ComingSoonProps {
  namespace: "wissen" | "faelle";
}

export function ComingSoon({ namespace }: ComingSoonProps) {
  const tHero = useTranslations(`${namespace}.hero`);
  const t = useTranslations(`${namespace}.comingSoon`);

  return (
    <>
      <section className="relative pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="editorial-bg absolute inset-x-0 top-0 -z-10 h-[400px]" aria-hidden />
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl px-4 text-center md:px-6"
        >
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
            {tHero("eyebrow")}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-(--color-fg) md:text-5xl lg:text-6xl">
            {tHero("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-(--color-fg-muted) md:text-lg">
            {tHero("sub")}
          </p>
        </motion.div>
      </section>

      <section className="relative pb-24 pt-8">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-10 text-center shadow-[var(--shadow-md)] md:p-16"
          >
            <motion.div
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto inline-flex size-14 items-center justify-center rounded-xl border border-(--color-brand-electric)/40 bg-(--color-brand-electric)/8 text-(--color-brand-electric)"
            >
              <Sparkles className="size-6" aria-hidden />
            </motion.div>
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-(--color-fg) md:text-3xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-(--color-fg-muted)">
              {t("sub")}
            </p>
            <Button asChild size="lg" className="mt-10">
              <Link href="/erstberatung">
                {t("cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
