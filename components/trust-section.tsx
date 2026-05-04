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

        <div className="mx-auto mt-16 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-[--color-border] bg-[--color-border] md:grid-cols-2 lg:grid-cols-3">
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
              className="bg-[--color-bg-surface]/60 p-6 md:p-8"
            >
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
