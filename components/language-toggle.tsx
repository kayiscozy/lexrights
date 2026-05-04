"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";

export function LanguageToggle({ className }: { className?: string }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  function switchLocale(next: "de" | "en") {
    if (next === locale || isPending) return;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;
    startTransition(() => {
      router.replace(pathname as never, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-[--color-fg]/20 bg-[--color-fg]/[0.05] p-0.5 backdrop-blur-sm transition-colors duration-200 hover:border-[--color-fg]/35",
        className,
      )}
    >
      <Globe
        className="ml-2 mr-1 size-3.5 text-[--color-fg-subtle]"
        aria-hidden
      />
      {(["de", "en"] as const).map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => switchLocale(lng)}
          aria-pressed={locale === lng}
          disabled={isPending}
          className={cn(
            "h-7 min-w-[2.5rem] rounded-full px-3 text-xs font-semibold uppercase tracking-wide transition-all duration-200",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-electric] focus-visible:ring-offset-1 focus-visible:ring-offset-[--color-bg]",
            locale === lng
              ? "bg-[--color-brand-electric] text-white shadow-[0_0_0_1px_rgba(4,58,253,0.5),0_4px_14px_-4px_rgba(4,58,253,0.75),inset_0_1px_0_0_rgba(255,255,255,0.18)]"
              : "text-[--color-fg-muted] hover:bg-[--color-brand-electric]/[0.18] hover:text-white",
          )}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
