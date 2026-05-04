"use client";

import { useActionState, useEffect, useId } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
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
        className="flex flex-col gap-3 rounded-2xl border border-[--color-border-strong] bg-[--color-bg-surface]/70 p-3 backdrop-blur-md sm:flex-row sm:items-stretch"
      >
        <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <input type="hidden" name="locale" value={locale} />

        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor={issueId} className="sr-only">
            {t("issueLabel")}
          </label>
          <select
            id={issueId}
            name="issue"
            required
            defaultValue=""
            className={cn(
              "h-12 w-full appearance-none rounded-lg border border-[--color-border] bg-[--color-bg]/40 px-4 text-sm text-[--color-fg] outline-none transition-colors hover:bg-[--color-bg]/70 focus:border-[--color-brand-electric]",
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

        <div className="flex flex-1 flex-col gap-1">
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
            className="h-12 w-full rounded-lg border border-[--color-border] bg-[--color-bg]/40 px-4 text-sm text-[--color-fg] outline-none transition-colors placeholder:text-[--color-fg-subtle] hover:bg-[--color-bg]/70 focus:border-[--color-brand-electric]"
          />
        </div>

        <Button type="submit" size="lg" disabled={pending} className="h-12 sm:w-auto">
          {pending ? t("submitting") : t("submit")}
          {!pending && <ArrowRight className="size-4" />}
        </Button>
      </form>

      {state.status === "success" && (
        <p
          role="status"
          className="mt-4 inline-flex items-center gap-2 text-sm text-[--color-success]"
        >
          <CheckCircle2 className="size-4" aria-hidden />
          {t("success")}
        </p>
      )}
      {state.status === "error" && (
        <p
          role="alert"
          className="mt-4 inline-flex items-center gap-2 text-sm text-[--color-error]"
        >
          <AlertCircle className="size-4" aria-hidden />
          {t("error")}
        </p>
      )}

      <p className="mt-3 text-center text-xs leading-relaxed text-[--color-fg-subtle]">
        {t.rich("consent", {
          privacyLink: (chunks) => (
            <Link
              href="/datenschutz"
              className="underline-offset-2 hover:underline"
            >
              {chunks}
            </Link>
          ),
        })}
      </p>
    </motion.div>
  );
}
