"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Shield, Scale, Lock, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  { key: "platforms", Icon: Shield },
  { key: "dsa", Icon: Scale },
  { key: "gdpr", Icon: Lock },
  { key: "consumer", Icon: ShoppingBag },
] as const;

export function PillarsSection() {
  const t = useTranslations("pillars");

  return (
    <section
      id="leistungen"
      className="relative scroll-mt-20 py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[--color-fg] md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-pretty text-base text-[--color-fg-muted] md:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {pillars.map(({ key, Icon }, idx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                "card-hover card-glow group relative rounded-2xl border border-[--color-fg]/10",
                "bg-[--color-bg-surface]/50 p-6 backdrop-blur-sm",
              )}
            >
              <div
                className="relative inline-flex size-11 items-center justify-center rounded-xl border border-[--color-brand-electric]/40 bg-[--color-brand-electric]/[0.10] text-[--color-brand-electric] transition-all duration-300 group-hover:scale-105 group-hover:border-[--color-brand-electric]/70 group-hover:bg-[--color-brand-electric]/[0.15] group-hover:shadow-[0_0_20px_-4px_rgba(4,58,253,0.5)]"
                aria-hidden
              >
                <Icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[--color-fg]">
                {t(`${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[--color-fg-muted]">
                {t(`${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
