"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export function ProcessSection() {
  const t = useTranslations("process");
  const steps = t.raw("steps") as Array<{ title: string; desc: string }>;

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-(--color-fg) md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-pretty text-base text-(--color-fg-muted) md:text-lg">
            {t("subtitle")}
          </p>
        </div>

        <ol className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          {steps.map((step, idx) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="card-hover relative rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 shadow-[var(--shadow-xs)] md:p-8"
            >
              <span
                className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)"
                aria-hidden
              >
                0{idx + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-(--color-fg)">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-(--color-fg-muted)">
                {step.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
