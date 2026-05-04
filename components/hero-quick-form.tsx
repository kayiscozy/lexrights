"use client";

import { useActionState, useEffect, useId } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
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

  const [state, formAction, pending] = useActionState(
    submitHeroQuick,
    initialState,
  );

  useEffect(() => {
    if (state.status === "success") {
      const form = document.getElementById("hero-quick-form") as HTMLFormElement | null;
      form?.reset();
    }
  }, [state.status]);

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
          "flex flex-col gap-2 rounded-2xl border bg-[--color-bg-surface]/70 p-2 backdrop-blur-md sm:flex-row sm:items-stretch",
          "transition-all duration-300",
          state.status === "error"
            ? "border-[--color-error]/40"
            : "border-[--color-border-strong] focus-within:border-[--color-border-brand] focus-within:shadow-[0_0_0_4px_rgba(4,58,253,0.08)]",
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
              "h-12 w-full appearance-none rounded-lg border border-transparent bg-[--color-bg]/40 px-4 text-sm text-[--color-fg] outline-none transition-all duration-200",
              "hover:bg-[--color-bg]/70 focus:border-[--color-border-brand] focus:bg-[--color-bg]/70",
              "disabled:opacity-60",
              "[background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238b95b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")] [background-position:right_0.75rem_center] [background-repeat:no-repeat] [background-size:1rem] pr-10",
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

        <div className="flex flex-1">
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
            className="h-12 w-full rounded-lg border border-transparent bg-[--color-bg]/40 px-4 text-sm text-[--color-fg] outline-none transition-all duration-200 placeholder:text-[--color-fg-subtle] hover:bg-[--color-bg]/70 focus:border-[--color-border-brand] focus:bg-[--color-bg]/70 disabled:opacity-60"
          />
        </div>

        <Button type="submit" size="lg" loading={pending} className="h-12 sm:w-auto">
          {pending ? t("submitting") : t("submit")}
          {!pending && <ArrowRight className="size-4" />}
        </Button>
      </form>

      <div className="mt-3 min-h-[24px] text-center">
        <AnimatePresence mode="wait">
          {state.status === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              role="status"
              className="inline-flex items-center gap-2 text-sm text-[--color-success]"
            >
              <CheckCircle2 className="size-4" aria-hidden />
              {t("success")}
            </motion.p>
          )}
          {state.status === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: [0, -4, 4, -2, 2, 0] }}
              exit={{ opacity: 0 }}
              transition={{ x: { duration: 0.4 } }}
              role="alert"
              className="inline-flex items-center gap-2 text-sm text-[--color-error]"
            >
              <AlertCircle className="size-4" aria-hidden />
              {t("error")}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <p className="mt-1 text-center text-xs leading-relaxed text-[--color-fg-subtle]">
        {t.rich("consent", {
          privacyLink: (chunks) => (
            <Link
              href="/datenschutz"
              className="link-hover underline-offset-2"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </motion.div>
  );
}
