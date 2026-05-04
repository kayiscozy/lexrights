"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export function TrustSection() {
  const t = useTranslations("trustSection");
  const items = t.raw("items") as Array<{ title: string; desc: string }>;

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[--color-fg] md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-bg-surface] shadow-[var(--shadow-sm)] md:grid-cols-2 lg:grid-cols-3 [&>*]:border-[--color-border] [&>*:not(:last-child)]:border-b md:[&>*]:border-r md:[&>*:nth-child(2n)]:border-r-0 md:[&>*:nth-last-child(2)]:border-b-0 md:[&>*:last-child]:border-b-0 lg:[&>*]:border-r lg:[&>*:nth-child(3n)]:border-r-0 lg:[&>*:nth-last-child(3)]:border-b-0">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.05,
                ease: "easeOut",
              }}
              className="group relative p-6 transition-colors duration-300 hover:bg-[--color-bg-tint] md:p-8"
            >
              <div
                className="pointer-events-none absolute left-0 top-0 h-0.5 w-full origin-left scale-x-0 bg-[--color-brand-electric] opacity-0 transition-all duration-500 group-hover:scale-x-100 group-hover:opacity-100"
                aria-hidden
              />
              <h3 className="text-base font-semibold text-[--color-fg]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[--color-fg-muted]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
