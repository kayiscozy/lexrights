"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "./ui/button";
import {
  cases,
  caseCategories,
  outcomeLabels,
  formatValue,
  formatDuration,
  type CaseCategory,
  type CaseStudy,
} from "@/lib/cases";
import type { Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { ArrowRight, ArrowUpRight, Calendar, Clock, Euro } from "lucide-react";

const categoryOrder: CaseCategory[] = [
  "gaming",
  "social",
  "creator",
  "marketplace",
  "payment",
];

export function CasesList({ locale }: { locale: Locale }) {
  const t = useTranslations("faelle");
  const [filter, setFilter] = useState<CaseCategory | "all">("all");

  const filteredCases = useMemo(
    () =>
      filter === "all"
        ? cases
        : cases.filter((c) => c.category === filter),
    [filter],
  );

  const stats = useMemo(() => {
    const totalRecovered = cases
      .filter((c) => c.value > 0)
      .reduce((sum, c) => sum + c.value, 0);
    const avgDays = Math.round(
      cases.reduce((sum, c) => sum + c.durationDays, 0) / cases.length,
    );
    return { totalRecovered, avgDays };
  }, []);

  return (
    <>
      {/* Stats */}
      <section className="relative py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-bg-surface) shadow-[var(--shadow-sm)] md:grid-cols-4">
            <Stat
              label={t("stats.casesShown")}
              value={String(cases.length)}
            />
            <Stat
              label={t("stats.totalRecovered")}
              value={formatValue(stats.totalRecovered, locale)}
            />
            <Stat
              label={t("stats.avgDuration")}
              value={formatDuration(stats.avgDays, locale)}
            />
            <Stat
              label={t("stats.successRate")}
              value={locale === "de" ? "DE · EN" : "DE · EN"}
            />
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-sm font-medium text-(--color-fg-muted)">
              {t("filter.label")}
            </span>
            <FilterBtn
              label={t("filter.all")}
              active={filter === "all"}
              onClick={() => setFilter("all")}
            />
            {categoryOrder.map((cat) => (
              <FilterBtn
                key={cat}
                label={caseCategories[cat][locale]}
                active={filter === cat}
                onClick={() => setFilter(cat)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cases grid */}
      <section className="relative pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.div
            layout
            className="grid gap-4 md:grid-cols-2"
          >
            <AnimatePresence mode="popLayout">
              {filteredCases.map((c, idx) => (
                <CaseCard key={c.id} c={c} locale={locale} index={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer + CTA */}
      <section className="relative pb-24 pt-8">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <p className="rounded-2xl border border-(--color-border) bg-(--color-bg-tint) p-6 text-center text-xs leading-relaxed text-(--color-fg-muted)">
            {t("disclaimer")}
          </p>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/erstberatung">
                {locale === "de"
                  ? "Kostenlose Ersteinschätzung"
                  : "Free first assessment"}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-(--color-bg-surface) p-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-(--color-fg) md:text-3xl">
        {value}
      </p>
    </div>
  );
}

function FilterBtn({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 active:scale-95",
        active
          ? "border-(--color-brand-navy) bg-(--color-brand-navy) text-white shadow-[0_2px_6px_-1px_rgba(1,20,68,0.20)]"
          : "border-(--color-border-strong) bg-(--color-bg-surface) text-(--color-fg-muted) hover:border-(--color-brand-navy) hover:text-(--color-fg)",
      )}
    >
      {label}
    </button>
  );
}

function CaseCard({
  c,
  locale,
  index,
}: {
  c: CaseStudy;
  locale: Locale;
  index: number;
}) {
  const t = useTranslations("faelle.card");

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.04, 0.2),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="card-hover group flex flex-col rounded-2xl border border-(--color-border) bg-(--color-bg-surface) p-6 shadow-[var(--shadow-xs)] md:p-8"
    >
      {/* Header: category badge + year */}
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-(--color-brand-electric)/35 bg-(--color-brand-electric)/8 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
          {caseCategories[c.category][locale]}
        </span>
        <span className="font-mono text-xs font-medium text-(--color-fg-subtle)">
          {c.year}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-(--color-fg) md:text-2xl">
        {c.headline[locale]}
      </h3>

      {/* Platform + client */}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-(--color-fg-muted)">
        <span>
          <strong className="text-(--color-fg)">{c.platform}</strong>
        </span>
        <span>·</span>
        <span>{c.client[locale]}</span>
      </div>

      {/* Key metrics */}
      <dl className="mt-6 grid grid-cols-3 gap-3">
        <Metric
          icon={<Euro className="size-3.5" aria-hidden />}
          label={t("value")}
          value={formatValue(c.value, locale)}
        />
        <Metric
          icon={<Clock className="size-3.5" aria-hidden />}
          label={t("duration")}
          value={formatDuration(c.durationDays, locale)}
        />
        <Metric
          icon={<Calendar className="size-3.5" aria-hidden />}
          label={t("outcome")}
          value={outcomeLabels[c.outcome][locale]}
        />
      </dl>

      {/* Problem / Strategy / Result */}
      <div className="mt-6 space-y-4 border-t border-(--color-border) pt-6 text-sm leading-relaxed text-(--color-fg-muted)">
        <Block label={t("problem")} text={c.problem[locale]} />
        <Block label={t("strategy")} text={c.strategy[locale]} />
        <Block
          label={t("result")}
          text={c.outcomeText[locale]}
          highlight
        />
      </div>

      {/* Legal basis */}
      <div className="mt-6 border-t border-(--color-border) pt-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
          {t("legalBasis")}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {c.legalBasis.map((basis) => (
            <span
              key={basis}
              className="rounded border border-(--color-border) bg-(--color-bg-tint) px-2 py-0.5 font-mono text-xs text-(--color-fg-muted)"
            >
              {basis}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border border-(--color-border) bg-(--color-bg-tint) px-3 py-2">
      <p className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-(--color-fg-subtle)">
        {icon}
        {label}
      </p>
      <p className="mt-0.5 text-sm font-semibold text-(--color-fg)">
        {value}
      </p>
    </div>
  );
}

function Block({
  label,
  text,
  highlight,
}: {
  label: string;
  text: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p
        className={cn(
          "text-xs font-semibold uppercase tracking-wider",
          highlight
            ? "text-(--color-brand-electric)"
            : "text-(--color-fg-subtle)",
        )}
      >
        {label}
      </p>
      <p
        className={cn(
          "mt-1.5",
          highlight && "font-medium text-(--color-fg)",
        )}
      >
        {text}
      </p>
    </div>
  );
}
