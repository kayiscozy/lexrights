"use server";

import {
  consultationSchema,
  heroQuickSchema,
  type ConsultationInput,
} from "./consultation-schema";
import { sendConsultationEmail } from "./email";

export type ActionState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Record<string, string>;
};

export async function submitConsultation(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = consultationSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const err of parsed.error.errors) {
      const key = err.path[0]?.toString();
      if (key && !fieldErrors[key]) fieldErrors[key] = err.message;
    }
    return {
      status: "error",
      message: "validation",
      fieldErrors,
    };
  }

  if (parsed.data.hp) {
    return { status: "success" };
  }

  const result = await sendConsultationEmail(parsed.data as ConsultationInput);

  if (!result.ok) {
    return {
      status: "error",
      message: "send_failed",
    };
  }

  return { status: "success" };
}

export async function submitHeroQuick(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = heroQuickSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const err of parsed.error.errors) {
      const key = err.path[0]?.toString();
      if (key && !fieldErrors[key]) fieldErrors[key] = err.message;
    }
    return {
      status: "error",
      message: "validation",
      fieldErrors,
    };
  }

  if (parsed.data.hp) {
    return { status: "success" };
  }

  const result = await sendConsultationEmail({
    issue: parsed.data.issue,
    platform: "(via hero quick form)",
    reason: "",
    timing: "today",
    value: "unknown",
    name: parsed.data.email.split("@")[0],
    email: parsed.data.email,
    phone: "",
    message: "Quick lead submitted from hero — please follow up to gather details.",
    consent: "on",
    locale: parsed.data.locale,
    source: "hero_quick",
    hp: "",
  });

  if (!result.ok) {
    return {
      status: "error",
      message: "send_failed",
    };
  }

  return { status: "success" };
}
