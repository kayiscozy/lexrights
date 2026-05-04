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

type FieldErrors = Partial<Record<keyof FormState, string>>;

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
  const tValidation = useTranslations("consultation.validation");
  const locale = useLocale();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    ...initialForm,
    issue: initialIssue ?? "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Set<keyof FormState>>(new Set());
  const [result, setResult] = useState<ActionState>({ status: "idle" });
  const [isPending, startTransition] = useTransition();

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((s) => ({ ...s, [key]: value }));
    // Clear error on edit
    if (errors[key]) {
      setErrors((e) => {
        const { [key]: _, ...rest } = e;
        return rest;
      });
    }
  }

  function markTouched(key: keyof FormState) {
    setTouched((s) => new Set(s).add(key));
  }

  function validateStep(s: number): FieldErrors {
    const e: FieldErrors = {};
    if (s === 1) {
      if (!form.issue) e.issue = tValidation("selectIssue");
      if (!form.platform.trim()) e.platform = tValidation("platformRequired");
    }
    if (s === 2) {
      if (!form.timing) e.timing = tValidation("selectTiming");
    }
    if (s === 3) {
      if (!form.value) e.value = tValidation("selectValue");
    }
    if (s === 4) {
      if (form.name.trim().length < 2) e.name = tValidation("min2");
      if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = tValidation("invalidEmail");
      if (!form.consent) e.consent = tValidation("consentRequired");
    }
    return e;
  }

  function isStepValid(s: number) {
    return Object.keys(validateStep(s)).length === 0;
  }

  function next() {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length > 0) {
      setErrors((e) => ({ ...e, ...stepErrors }));
      // Mark all fields of this step as touched to show errors
      const keys = Object.keys(stepErrors) as (keyof FormState)[];
      setTouched((s) => {
        const next = new Set(s);
        keys.forEach((k) => next.add(k));
        return next;
      });
      return;
    }
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setStep((s) => Math.max(1, s - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const stepErrors = validateStep(4);
    if (Object.keys(stepErrors).length > 0) {
      setErrors((er) => ({ ...er, ...stepErrors }));
      setTouched((s) => {
        const next = new Set(s);
        (Object.keys(stepErrors) as (keyof FormState)[]).forEach((k) => next.add(k));
        return next;
      });
      return;
    }

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
      if (r.status === "success") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
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
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60" aria-hidden>
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
                "h-1 flex-1 rounded-full transition-all duration-500",
                i + 1 < step && "bg-[--color-brand-electric]/70",
                i + 1 === step && "bg-[--color-brand-electric]",
                i + 1 > step && "bg-[--color-bg-elevated]",
              )}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 min-h-[420px]">
        <AnimatePresence mode="wait">
          {step === 1 && <Step1 key="1" form={form} update={update} errors={errors} touched={touched} markTouched={markTouched} />}
          {step === 2 && <Step2 key="2" form={form} update={update} errors={errors} touched={touched} markTouched={markTouched} />}
          {step === 3 && <Step3 key="3" form={form} update={update} errors={errors} touched={touched} markTouched={markTouched} />}
          {step === 4 && <Step4 key="4" form={form} update={update} errors={errors} touched={touched} markTouched={markTouched} />}
        </AnimatePresence>
      </div>

      {result.status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="mb-4 flex items-start gap-3 rounded-lg border border-[--color-error]/40 bg-[--color-error]/[0.06] p-4 text-sm text-[--color-error]"
        >
          <AlertCircle className="size-4 mt-0.5 shrink-0" aria-hidden />
          <div>
            <p className="font-medium">{t("error.title")}</p>
            <p className="mt-1 text-[--color-fg-muted]">
              {t("error.sub")}{" "}
              <a
                href={`mailto:${env.email}`}
                className="text-[--color-brand-electric] underline-offset-2 hover:underline"
              >
                {env.email}
              </a>
            </p>
          </div>
        </motion.div>
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
          <Button type="button" onClick={next} disabled={isPending}>
            {t("steps.next")}
            <ArrowRight className="size-4" />
          </Button>
        ) : (
          <Button type="submit" loading={isPending}>
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

interface StepProps {
  form: FormState;
  update: <K extends keyof FormState>(k: K, v: FormState[K]) => void;
  errors: FieldErrors;
  touched: Set<keyof FormState>;
  markTouched: (k: keyof FormState) => void;
}

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -4, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -4, height: 0 }}
          transition={{ duration: 0.2 }}
          role="alert"
          className="flex items-center gap-1.5 text-xs text-[--color-error]"
        >
          <AlertCircle className="size-3" aria-hidden />
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
  error,
  hint,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  error?: string;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-[--color-fg]"
      >
        {label}
        {required && <span className="ml-1 text-[--color-error]" aria-hidden>*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-[--color-fg-subtle]">{hint}</p>}
      <FieldError message={error} />
    </div>
  );
}

const inputCls = (hasError: boolean) =>
  cn(
    "w-full rounded-lg border bg-[--color-bg]/40 px-4 py-3 text-sm text-[--color-fg] outline-none transition-all duration-200 placeholder:text-[--color-fg-subtle]",
    hasError
      ? "border-[--color-error]/60 focus:border-[--color-error] focus:shadow-[0_0_0_4px_rgba(248,113,113,0.10)]"
      : "border-[--color-border] hover:border-[--color-border-strong] hover:bg-[--color-bg]/70 focus:border-[--color-brand-electric] focus:bg-[--color-bg]/80 focus:shadow-[0_0_0_4px_rgba(4,58,253,0.10)]",
  );

function Step1({ form, update, errors, touched, markTouched }: StepProps) {
  const t = useTranslations("consultation");
  const tHero = useTranslations("hero.form");
  const platformId = useId();
  const issueErr = touched.has("issue") ? errors.issue : undefined;
  const platformErr = touched.has("platform") ? errors.platform : undefined;

  return (
    <motion.div {...stepMotion}>
      <h2 className="text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
        {t("step1.title")}
      </h2>
      <p className="mt-2 text-sm text-[--color-fg-muted]">{t("step1.sub")}</p>

      <div className="mt-8 space-y-6">
        <Field label={tHero("issueLabel")} htmlFor="issue-group" required error={issueErr}>
          <div id="issue-group" className="grid gap-2 sm:grid-cols-2">
            {issueOptions.map((opt) => (
              <label
                key={opt}
                className={cn(
                  "cursor-pointer rounded-lg border px-4 py-3 text-sm transition-all duration-200",
                  form.issue === opt
                    ? "border-[--color-brand-electric] bg-[--color-brand-electric]/10 text-[--color-fg] shadow-[0_0_0_3px_rgba(4,58,253,0.10)]"
                    : "border-[--color-border] bg-[--color-bg]/40 text-[--color-fg-muted] hover:border-[--color-border-strong] hover:bg-[--color-bg]/60 hover:text-[--color-fg]",
                )}
              >
                <input
                  type="radio"
                  name="issue"
                  value={opt}
                  checked={form.issue === opt}
                  onChange={() => {
                    update("issue", opt);
                    markTouched("issue");
                  }}
                  className="sr-only"
                />
                {tHero(`issues.${opt}`)}
              </label>
            ))}
          </div>
        </Field>

        <Field
          label={t("step1.platformLabel")}
          htmlFor={platformId}
          required
          error={platformErr}
        >
          <input
            id={platformId}
            type="text"
            value={form.platform}
            onChange={(e) => update("platform", e.target.value)}
            onBlur={() => markTouched("platform")}
            placeholder={t("step1.platformPlaceholder")}
            className={inputCls(!!platformErr)}
            autoComplete="off"
          />
        </Field>
      </div>
    </motion.div>
  );
}

function Step2({ form, update, errors, touched, markTouched }: StepProps) {
  const t = useTranslations("consultation");
  const reasonId = useId();
  const timingErr = touched.has("timing") ? errors.timing : undefined;

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
            className={cn(inputCls(false), "resize-y")}
            maxLength={2000}
          />
        </Field>

        <Field label={t("step2.timingLabel")} htmlFor="timing-group" required error={timingErr}>
          <div id="timing-group" className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {timingOptions.map((opt) => (
              <label
                key={opt}
                className={cn(
                  "cursor-pointer rounded-lg border px-3 py-2.5 text-center text-sm transition-all duration-200",
                  form.timing === opt
                    ? "border-[--color-brand-electric] bg-[--color-brand-electric]/10 text-[--color-fg] shadow-[0_0_0_3px_rgba(4,58,253,0.10)]"
                    : "border-[--color-border] bg-[--color-bg]/40 text-[--color-fg-muted] hover:border-[--color-border-strong] hover:bg-[--color-bg]/60 hover:text-[--color-fg]",
                )}
              >
                <input
                  type="radio"
                  name="timing"
                  value={opt}
                  checked={form.timing === opt}
                  onChange={() => {
                    update("timing", opt);
                    markTouched("timing");
                  }}
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

function Step3({ form, update, errors, touched, markTouched }: StepProps) {
  const t = useTranslations("consultation");
  const valueErr = touched.has("value") ? errors.value : undefined;

  return (
    <motion.div {...stepMotion}>
      <h2 className="text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
        {t("step3.title")}
      </h2>
      <p className="mt-2 text-sm text-[--color-fg-muted]">{t("step3.sub")}</p>

      <Field label="" htmlFor="value-group" required error={valueErr}>
        <div id="value-group" className="mt-8 space-y-2">
          {valueOptions.map((opt) => (
            <label
              key={opt}
              className={cn(
                "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3.5 text-sm transition-all duration-200",
                form.value === opt
                  ? "border-[--color-brand-electric] bg-[--color-brand-electric]/10 text-[--color-fg] shadow-[0_0_0_3px_rgba(4,58,253,0.10)]"
                  : "border-[--color-border] bg-[--color-bg]/40 text-[--color-fg-muted] hover:border-[--color-border-strong] hover:bg-[--color-bg]/60 hover:text-[--color-fg]",
              )}
            >
              <input
                type="radio"
                name="value"
                value={opt}
                checked={form.value === opt}
                onChange={() => {
                  update("value", opt);
                  markTouched("value");
                }}
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
      </Field>
    </motion.div>
  );
}

function Step4({ form, update, errors, touched, markTouched }: StepProps) {
  const t = useTranslations("consultation");
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const messageId = useId();
  const consentId = useId();

  const nameErr = touched.has("name") ? errors.name : undefined;
  const emailErr = touched.has("email") ? errors.email : undefined;
  const consentErr = touched.has("consent") ? errors.consent : undefined;

  return (
    <motion.div {...stepMotion}>
      <h2 className="text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
        {t("step4.title")}
      </h2>
      <p className="mt-2 text-sm text-[--color-fg-muted]">{t("step4.sub")}</p>

      <div className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label={t("step4.nameLabel")} htmlFor={nameId} required error={nameErr}>
            <input
              id={nameId}
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              onBlur={() => markTouched("name")}
              placeholder={t("step4.namePlaceholder")}
              autoComplete="name"
              className={inputCls(!!nameErr)}
            />
          </Field>

          <Field label={t("step4.emailLabel")} htmlFor={emailId} required error={emailErr}>
            <input
              id={emailId}
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              onBlur={() => markTouched("email")}
              placeholder={t("step4.emailPlaceholder")}
              autoComplete="email"
              inputMode="email"
              className={inputCls(!!emailErr)}
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
            className={inputCls(false)}
          />
        </Field>

        <Field label={t("step4.messageLabel")} htmlFor={messageId}>
          <textarea
            id={messageId}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder={t("step4.messagePlaceholder")}
            rows={4}
            className={cn(inputCls(false), "resize-y")}
            maxLength={4000}
          />
        </Field>

        <div className="space-y-2">
          <label
            htmlFor={consentId}
            className={cn(
              "flex cursor-pointer items-start gap-3 rounded-lg border p-4 text-sm transition-all duration-200",
              consentErr
                ? "border-[--color-error]/40 bg-[--color-error]/[0.04]"
                : form.consent
                  ? "border-[--color-brand-electric]/30 bg-[--color-brand-electric]/[0.04]"
                  : "border-[--color-border] bg-[--color-bg]/40 hover:border-[--color-border-strong]",
            )}
          >
            <input
              id={consentId}
              type="checkbox"
              checked={form.consent}
              onChange={(e) => {
                update("consent", e.target.checked);
                markTouched("consent");
              }}
              className="mt-0.5 size-4 shrink-0 cursor-pointer rounded border-[--color-border-strong] bg-[--color-bg] accent-[--color-brand-electric]"
            />
            <span className="text-[--color-fg-muted]">
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
          <FieldError message={consentErr} />
        </div>
      </div>
    </motion.div>
  );
}
