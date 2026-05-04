"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./toast";
import { submitHeroQuick, type ActionState } from "@/lib/actions";
import { issueOptions } from "@/lib/consultation-schema";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const initialState: ActionState = { status: "idle" };

export function HeroQuickForm() {
  const t = useTranslations("hero.form");
  const locale = useLocale();
  const issueId = useId();
  const emailId = useId();
  const toast = useToast();
  const lastStatus = useRef<ActionState["status"]>("idle");

  const [state, formAction, pending] = useActionState(
    submitHeroQuick,
    initialState,
  );

  useEffect(() => {
    if (state.status === lastStatus.current) return;
    lastStatus.current = state.status;

    if (state.status === "success") {
      toast.show({
        variant: "success",
        title: t("success"),
        duration: 6000,
      });
      const form = document.getElementById("hero-quick-form") as HTMLFormElement | null;
      form?.reset();
    } else if (state.status === "error") {
      toast.show({
        variant: "error",
        title: t("error"),
        duration: 6000,
      });
    }
  }, [state.status, t, toast]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto mt-10 w-full max-w-2xl"
    >
      <form
        id="hero-quick-form"
        action={formAction}
        className={cn(
          "flex flex-col gap-1 rounded-xl border bg-(--color-bg-surface) p-1.5 shadow-[var(--shadow-md)] sm:flex-row sm:items-stretch",
          "transition-all duration-300",
          "border-(--color-border-strong) hover:border-(--color-brand-navy)/35",
          "focus-within:border-(--color-brand-electric)",
          "focus-within:shadow-[0_0_0_4px_rgba(4,58,253,0.12),var(--shadow-md)]",
        )}
      >
        <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <input type="hidden" name="locale" value={locale} />

        <div className="flex flex-1">
          <label htmlFor={issueId} className="sr-only">
            {t("issueLabel")}
          </label>
          <select
            id={issueId}
            name="issue"
            required
            defaultValue=""
            disabled={pending}
            className={cn(
              "h-12 w-full appearance-none rounded-lg border border-transparent bg-transparent px-4 text-sm font-medium text-(--color-fg) outline-none transition-colors duration-200",
              "hover:bg-(--color-bg-tint) focus:bg-(--color-bg-tint)",
              "disabled:opacity-60",
              "[background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e7894' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")] [background-position:right_0.75rem_center] [background-repeat:no-repeat] [background-size:1rem] pr-10",
            )}
          >
            <option value="" disabled>
              {t("issuePlaceholder")}
            </option>
            {issueOptions.map((opt) => (
              <option key={opt} value={opt}>
                {t(`issues.${opt}`)}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-1 sm:border-l sm:border-(--color-border)">
          <label htmlFor={emailId} className="sr-only">
            {t("emailLabel")}
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            placeholder={t("emailPlaceholder")}
            autoComplete="email"
            inputMode="email"
            disabled={pending}
            className="h-12 w-full rounded-lg border border-transparent bg-transparent px-4 text-sm text-(--color-fg) outline-none transition-colors duration-200 placeholder:text-(--color-fg-subtle) hover:bg-(--color-bg-tint) focus:bg-(--color-bg-tint) disabled:opacity-60"
          />
        </div>

        <Button type="submit" variant="brand" size="lg" loading={pending} className="h-12 sm:w-auto">
          {pending ? t("submitting") : t("submit")}
          {!pending && <ArrowRight className="size-4" />}
        </Button>
      </form>

      <p className="mt-3 text-center text-xs leading-relaxed text-(--color-fg-subtle)">
        {t.rich("consent", {
          privacyLink: (chunks) => (
            <Link
              href="/datenschutz"
              className="link-hover text-(--color-brand-electric) underline-offset-2"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </motion.div>
  );
}
