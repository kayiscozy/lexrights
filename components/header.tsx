"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { LanguageToggle } from "./language-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/routing";

export function Header({ locale }: { locale: Locale }) {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/leistungen" as const, label: t("services") },
    { href: "/kanzlei" as const, label: t("firm") },
    { href: "/wissen" as const, label: t("insights") },
    { href: "/faelle" as const, label: t("cases") },
    { href: "/kontakt" as const, label: t("contact") },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[--color-border] bg-[--color-bg]/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            aria-label="LexRights — Home"
          >
            <Logo variant="wordmark" className="h-5 w-auto" priority />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-[--color-fg-muted] transition-colors hover:text-[--color-fg]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <LanguageToggle className="hidden sm:inline-flex" />
            <Button
              asChild
              variant="primary"
              size="sm"
              className="hidden md:inline-flex"
            >
              <Link href="/erstberatung">{t("consultationCta")}</Link>
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-md text-[--color-fg] transition-colors hover:bg-[--color-bg-surface] lg:hidden"
              aria-expanded={open}
              aria-label={open ? t("close") : t("menu")}
            >
              {open ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 top-16 z-40 lg:hidden">
          <div className="absolute inset-0 bg-[--color-bg]/95 backdrop-blur-xl" />
          <nav
            aria-label="Mobile"
            className="relative flex h-full flex-col gap-2 px-4 py-8"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-lg font-medium text-[--color-fg] transition-colors hover:bg-[--color-bg-surface]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3 border-t border-[--color-border] pt-6">
              <LanguageToggle />
              <Button
                asChild
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                <Link href="/erstberatung">{t("consultationCta")}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
