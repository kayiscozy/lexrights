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
      // pathname here can be any localized route incl. dynamic — accept as-is
      router.replace(pathname as never, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("language")}
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-[--color-border] bg-[--color-bg-surface]/60 p-1 backdrop-blur-sm",
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
            "h-7 min-w-[2.5rem] rounded-full px-3 text-xs font-medium uppercase tracking-wide transition-colors",
            locale === lng
              ? "bg-[--color-brand-electric] text-white"
              : "text-[--color-fg-muted] hover:text-[--color-fg]",
          )}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}
