"use client";

import { useState, useTransition, useId } from "react";
import { useLocale, useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "@/i18n/navigation";
import { submitConsultation, type ActionState } from "@/lib/actions";
import {
  issueOptions,
  timingOptions,
  valueOptions,
  type IssueType,
  type Timing,
  type ValueEstimate,
} from "@/lib/consultation-schema";
import { env } from "@/lib/utils";
import { cn } from "@/lib/utils";

type FormState = {
  issue: IssueType | "";
  platform: string;
  reason: string;
  timing: Timing | "";
  value: ValueEstimate | "";
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const initialForm: FormState = {
  issue: "",
  platform: "",
  reason: "",
  timing: "",
  value: "",
  name: "",
  email: "",
  phone: "",
  message: "",
  consent: false,
};

const TOTAL_STEPS = 4;

export function ConsultationForm({
  initialIssue,
}: {
  initialIssue?: IssueType;
} = {}) {
  const t = useTranslations("consultation");
  const locale = useLocale();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    ...initialForm,
    issue: initialIssue ?? "",
  });
  const [result, setResult] = useState<ActionState>({ status: "idle" });
  const [isPending, startTransition] = useTransition();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
  }

  function isStepValid(s: number) {
    if (s === 1) return form.issue !== "" && form.platform.trim().length > 0;
    if (s === 2) return form.timing !== "";
    if (s === 3) return form.value !== "";
    if (s === 4)
      return (
        form.name.trim().length >= 2 &&
        /^\S+@\S+\.\S+$/.test(form.email) &&
        form.consent
      );
    return false;
  }

  function next() {
    if (!isStepValid(step)) return;
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }
  function back() {
    setStep((s) => Math.max(1, s - 1));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!isStepValid(4)) return;

    const fd = new FormData();
    fd.set("issue", form.issue);
    fd.set("platform", form.platform);
    fd.set("reason", form.reason);
    fd.set("timing", form.timing);
    fd.set("value", form.value);
    fd.set("name", form.name);
    fd.set("email", form.email);
    fd.set("phone", form.phone);
    fd.set("message", form.message);
    fd.set("consent", form.consent ? "on" : "");
    fd.set("locale", locale);
    fd.set("source", "consultation_form");
    fd.set("hp", "");

    startTransition(async () => {
      const r = await submitConsultation({ status: "idle" }, fd);
      setResult(r);
    });
  }

  if (result.status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-3xl border border-[--color-border-brand] bg-[--color-bg-surface]/60 p-8 text-center md:p-12"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-60"
          aria-hidden
        >
          <div className="absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-[--color-success]/10 blur-3xl" />
        </div>
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <CheckCircle2 className="mx-auto size-14 text-[--color-success]" aria-hidden />
        </motion.div>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
          {t("success.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-[--color-fg-muted]">
          {t("success.sub")}
        </p>
        <Button asChild variant="outline" className="mt-8">
          <Link href="/">{t("success.back")}</Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-[--color-border] bg-[--color-bg-surface]/40 p-6 backdrop-blur-sm md:p-10"
    >
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <div className="flex items-center justify-between">
        <p className="font-mono text-xs tracking-wide text-[--color-brand-electric]">
          {t("steps.step", { current: step, total: TOTAL_STEPS })}
        </p>
        <div className="flex flex-1 items-center gap-1.5 px-6">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1 flex-1 rounded-full transition-all duration-300",
                i + 1 <= step
                  ? "bg-[--color-brand-electric]"
                  : "bg-[--color-bg-elevated]",
              )}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 min-h-[420px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <Step1 key="1" form={form} update={update} />
          )}
          {step === 2 && (
            <Step2 key="2" form={form} update={update} />
          )}
          {step === 3 && (
            <Step3 key="3" form={form} update={update} />
          )}
          {step === 4 && (
            <Step4 key="4" form={form} update={update} />
          )}
        </AnimatePresence>
      </div>

      {result.status === "error" && (
        <p
          role="alert"
          className="mb-4 inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[--color-error]"
        >
          <AlertCircle className="size-4" aria-hidden />
          <span>
            {t("error.title")} {t("error.sub")}{" "}
            <a
              href={`mailto:${env.email}`}
              className="underline-offset-2 hover:underline"
            >
              {env.email}
            </a>
          </span>
        </p>
      )}

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-[--color-border] pt-6">
        <Button
          type="button"
          variant="ghost"
          onClick={back}
          disabled={step === 1 || isPending}
          className={step === 1 ? "invisible" : ""}
        >
          <ArrowLeft className="size-4" />
          {t("steps.back")}
        </Button>

        {step < TOTAL_STEPS ? (
          <Button
            type="button"
            onClick={next}
            disabled={!isStepValid(step) || isPending}
          >
            {t("steps.next")}
            <ArrowRight className="size-4" />
          </Button>
        ) : (
          <Button
            type="submit"
            loading={isPending}
            disabled={!isStepValid(4)}
          >
            {isPending ? t("steps.submitting") : t("steps.submit")}
            {!isPending && <ArrowRight className="size-4" />}
          </Button>
        )}
      </div>
    </form>
  );
}

const stepMotion = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -24 },
  transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
} as const;

function Field({
  label,
  htmlFor,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-[--color-fg]"
      >
        {label}
      </label>
      {children}
      {hint && <p className="text-xs text-[--color-fg-subtle]">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full rounded-lg border border-[--color-border] bg-[--color-bg]/40 px-4 py-3 text-sm text-[--color-fg] outline-none transition-all duration-200 placeholder:text-[--color-fg-subtle] hover:border-[--color-border-strong] hover:bg-[--color-bg]/70 focus:border-[--color-brand-electric] focus:bg-[--color-bg]/80 focus:shadow-[0_0_0_4px_rgba(4,58,253,0.08)]";

function Step1({
  form,
  update,
}: {
  form: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  const t = useTranslations("consultation");
  const tHero = useTranslations("hero.form");
  const issueId = useId();
  const platformId = useId();

  return (
    <motion.div {...stepMotion}>
      <h2 className="text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
        {t("step1.title")}
      </h2>
      <p className="mt-2 text-sm text-[--color-fg-muted]">{t("step1.sub")}</p>

      <div className="mt-8 space-y-6">
        <Field label={tHero("issueLabel")} htmlFor={issueId}>
          <div className="grid gap-2 sm:grid-cols-2">
            {issueOptions.map((opt) => (
              <label
                key={opt}
                className={cn(
                  "cursor-pointer rounded-lg border px-4 py-3 text-sm transition-all",
                  form.issue === opt
                    ? "border-[--color-brand-electric] bg-[--color-brand-electric]/10 text-[--color-fg]"
                    : "border-[--color-border] bg-[--color-bg]/40 text-[--color-fg-muted] hover:border-[--color-border-strong] hover:text-[--color-fg]",
                )}
              >
                <input
                  type="radio"
                  name="issue"
                  value={opt}
                  checked={form.issue === opt}
                  onChange={() => update("issue", opt)}
                  className="sr-only"
                />
                {tHero(`issues.${opt}`)}
              </label>
            ))}
          </div>
        </Field>

        <Field label={t("step1.platformLabel")} htmlFor={platformId}>
          <input
            id={platformId}
            type="text"
            value={form.platform}
            onChange={(e) => update("platform", e.target.value)}
            placeholder={t("step1.platformPlaceholder")}
            className={inputCls}
            autoComplete="off"
          />
        </Field>
      </div>
    </motion.div>
  );
}

function Step2({
  form,
  update,
}: {
  form: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  const t = useTranslations("consultation");
  const reasonId = useId();

  return (
    <motion.div {...stepMotion}>
      <h2 className="text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
        {t("step2.title")}
      </h2>
      <p className="mt-2 text-sm text-[--color-fg-muted]">{t("step2.sub")}</p>

      <div className="mt-8 space-y-6">
        <Field label={t("step2.reasonLabel")} htmlFor={reasonId}>
          <textarea
            id={reasonId}
            value={form.reason}
            onChange={(e) => update("reason", e.target.value)}
            placeholder={t("step2.reasonPlaceholder")}
            rows={4}
            className={cn(inputCls, "resize-y")}
            maxLength={2000}
          />
        </Field>

        <Field label={t("step2.timingLabel")} htmlFor="timing-group">
          <div id="timing-group" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {timingOptions.map((opt) => (
              <label
                key={opt}
                className={cn(
                  "cursor-pointer rounded-lg border px-3 py-2.5 text-center text-sm transition-all",
                  form.timing === opt
                    ? "border-[--color-brand-electric] bg-[--color-brand-electric]/10 text-[--color-fg]"
                    : "border-[--color-border] bg-[--color-bg]/40 text-[--color-fg-muted] hover:border-[--color-border-strong] hover:text-[--color-fg]",
                )}
              >
                <input
                  type="radio"
                  name="timing"
                  value={opt}
                  checked={form.timing === opt}
                  onChange={() => update("timing", opt)}
                  className="sr-only"
                />
                {t(`step2.timing.${opt}`)}
              </label>
            ))}
          </div>
        </Field>
      </div>
    </motion.div>
  );
}

function Step3({
  form,
  update,
}: {
  form: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  const t = useTranslations("consultation");

  return (
    <motion.div {...stepMotion}>
      <h2 className="text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
        {t("step3.title")}
      </h2>
      <p className="mt-2 text-sm text-[--color-fg-muted]">{t("step3.sub")}</p>

      <div className="mt-8 space-y-2">
        {valueOptions.map((opt) => (
          <label
            key={opt}
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3.5 text-sm transition-all",
              form.value === opt
                ? "border-[--color-brand-electric] bg-[--color-brand-electric]/10 text-[--color-fg]"
                : "border-[--color-border] bg-[--color-bg]/40 text-[--color-fg-muted] hover:border-[--color-border-strong] hover:text-[--color-fg]",
            )}
          >
            <input
              type="radio"
              name="value"
              value={opt}
              checked={form.value === opt}
              onChange={() => update("value", opt)}
              className="sr-only"
            />
            <span
              className={cn(
                "size-4 shrink-0 rounded-full border-2 transition-colors",
                form.value === opt
                  ? "border-[--color-brand-electric] bg-[--color-brand-electric]"
                  : "border-[--color-border-strong]",
              )}
              aria-hidden
            />
            {t(`step3.value.${opt}`)}
          </label>
        ))}
      </div>
    </motion.div>
  );
}

function Step4({
  form,
  update,
}: {
  form: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
}) {
  const t = useTranslations("consultation");
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const messageId = useId();
  const consentId = useId();

  return (
    <motion.div {...stepMotion}>
      <h2 className="text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
        {t("step4.title")}
      </h2>
      <p className="mt-2 text-sm text-[--color-fg-muted]">{t("step4.sub")}</p>

      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t("step4.nameLabel")} htmlFor={nameId}>
            <input
              id={nameId}
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder={t("step4.namePlaceholder")}
              autoComplete="name"
              className={inputCls}
              required
            />
          </Field>

          <Field label={t("step4.emailLabel")} htmlFor={emailId}>
            <input
              id={emailId}
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder={t("step4.emailPlaceholder")}
              autoComplete="email"
              inputMode="email"
              className={inputCls}
              required
            />
          </Field>
        </div>

        <Field label={t("step4.phoneLabel")} htmlFor={phoneId}>
          <input
            id={phoneId}
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder={t("step4.phonePlaceholder")}
            autoComplete="tel"
            inputMode="tel"
            className={inputCls}
          />
        </Field>

        <Field label={t("step4.messageLabel")} htmlFor={messageId}>
          <textarea
            id={messageId}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder={t("step4.messagePlaceholder")}
            rows={4}
            className={cn(inputCls, "resize-y")}
            maxLength={4000}
          />
        </Field>

        <label
          htmlFor={consentId}
          className="flex cursor-pointer items-start gap-3 text-sm text-[--color-fg-muted]"
        >
          <input
            id={consentId}
            type="checkbox"
            checked={form.consent}
            onChange={(e) => update("consent", e.target.checked)}
            className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-[--color-border-strong] bg-[--color-bg] accent-[--color-brand-electric]"
            required
          />
          <span>
            {t.rich("step4.consent", {
              privacyLink: (chunks) => (
                <Link
                  href="/datenschutz"
                  className="text-[--color-brand-electric] underline-offset-2 hover:underline"
                >
                  {chunks}
                </Link>
              ),
            })}
          </span>
        </label>
      </div>
    </motion.div>
  );
}
