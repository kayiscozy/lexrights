"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-[--color-border-brand] bg-[--color-bg-surface] px-6 py-16 text-center md:px-12 md:py-20 lg:py-24"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-50"
            aria-hidden
          >
            <div className="absolute -left-24 top-0 size-96 rounded-full bg-[--color-brand-electric]/20 blur-3xl" />
            <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-[--color-brand-glow]/15 blur-3xl" />
          </div>

          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight text-[--color-fg] md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-[--color-fg-muted] md:text-lg">
            {t("subtitle")}
          </p>
          <div className="mt-10">
            <Button asChild size="xl">
              <Link href="/erstberatung">
                {t("button")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
