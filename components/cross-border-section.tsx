"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowRight, Scale, Globe2, Gavel } from "lucide-react";
import { Link } from "@/i18n/navigation";

const PILLARS = [
  { key: "eu", Icon: Globe2 },
  { key: "us", Icon: Scale },
  { key: "litigation", Icon: Gavel },
] as const;

export function CrossBorderSection() {
  const t = useTranslations("crossBorderHomeTile");
  const pillars = t.raw("pillars") as Record<
    "eu" | "us" | "litigation",
    { title: string; desc: string }
  >;

  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-(--color-border-strong) bg-gradient-to-br from-(--color-brand-navy) via-[#020a26] to-(--color-brand-navy) p-8 shadow-[var(--shadow-lg)] md:p-12 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(4,58,253,0.25),transparent_60%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(4,58,253,0.15),transparent_55%)]"
          />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-(--color-brand-electric)/40 bg-(--color-brand-electric)/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
                <span className="size-1.5 rounded-full bg-(--color-brand-electric)" />
                {t("eyebrow")}
              </p>
              <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/75 md:text-lg">
                {t("subtitle")}
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3">
              {PILLARS.map(({ key, Icon }, idx) => {
                const p = pillars[key];
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >
                    <div className="flex size-10 items-center justify-center rounded-xl border border-(--color-brand-electric)/40 bg-(--color-brand-electric)/15 text-(--color-brand-electric)">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">
                      {p.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <Link
                href="/cross-border"
                className="group inline-flex items-center gap-2 rounded-xl border border-(--color-brand-electric) bg-(--color-brand-electric) px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(4,58,253,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-(--color-brand-glow) hover:border-(--color-brand-glow)"
              >
                {t("cta")}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
