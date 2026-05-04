import { z } from "zod";

export const issueOptions = [
  "accountSuspended",
  "dataAccess",
  "dataDamage",
  "platformDispute",
  "inGamePurchases",
  "other",
] as const;
export type IssueType = (typeof issueOptions)[number];

export const timingOptions = [
  "today",
  "thisWeek",
  "weeksAgo",
  "monthsAgo",
] as const;
export type Timing = (typeof timingOptions)[number];

export const valueOptions = [
  "below100",
  "100to500",
  "500to2000",
  "above2000",
  "unknown",
] as const;
export type ValueEstimate = (typeof valueOptions)[number];

export const consultationSchema = z.object({
  issue: z.enum(issueOptions),
  platform: z.string().min(1).max(100),
  reason: z.string().max(2000).optional().default(""),
  timing: z.enum(timingOptions),
  value: z.enum(valueOptions),
  name: z.string().min(2, "min2").max(120),
  email: z.string().email("invalidEmail"),
  phone: z.string().max(40).optional().default(""),
  message: z.string().max(4000).optional().default(""),
  consent: z.literal("on", { errorMap: () => ({ message: "consentRequired" }) }),
  locale: z.enum(["de", "en"]).default("en"),
  source: z.enum(["consultation_form", "hero_quick"]).default("consultation_form"),
  hp: z.string().max(0).optional().default(""), // honeypot
});

export type ConsultationInput = z.infer<typeof consultationSchema>;

export const heroQuickSchema = z.object({
  issue: z.enum(issueOptions),
  email: z.string().email("invalidEmail"),
  locale: z.enum(["de", "en"]).default("en"),
  hp: z.string().max(0).optional().default(""),
});

export type HeroQuickInput = z.infer<typeof heroQuickSchema>;
