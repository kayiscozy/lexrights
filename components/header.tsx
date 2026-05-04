"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "motion/react";
import { Link, usePathname } from "@/i18n/navigation";
import { Logo } from "./logo";
import { Button } from "./ui/button";
import { LanguageToggle } from "./language-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/i18n/routing";

type NavLink = {
  href:
    | "/leistungen"
    | "/kanzlei"
    | "/wissen"
    | "/faelle"
    | "/kontakt";
  labelKey: "services" | "firm" | "insights" | "cases" | "contact";
};

const NAV_LINKS: NavLink[] = [
  { href: "/leistungen", labelKey: "services" },
  { href: "/kanzlei", labelKey: "firm" },
  { href: "/wissen", labelKey: "insights" },
  { href: "/faelle", labelKey: "cases" },
  { href: "/kontakt", labelKey: "contact" },
];

export function Header({ locale: _locale }: { locale: Locale }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
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

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-[--color-border] bg-[--color-bg]/85 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 transition-opacity"
            aria-label="LexRights — Home"
          >
            <Logo
              variant="wordmark"
              className="h-5 w-auto transition-all duration-300 group-hover:[filter:drop-shadow(0_0_12px_rgba(74,123,255,0.5))]"
              priority
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-200",
                    active
                      ? "text-[--color-fg]"
                      : "text-[--color-fg-muted] hover:bg-[--color-brand-electric]/[0.06] hover:text-[--color-fg]",
                  )}
                >
                  {t(link.labelKey)}
                  {active && (
                    <motion.span
                      layoutId="active-nav-indicator"
                      className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[--color-brand-electric] shadow-[0_0_8px_rgba(4,58,253,0.6)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              );
            })}
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
              className="relative inline-flex size-10 items-center justify-center rounded-md border border-[--color-fg]/15 bg-[--color-fg]/[0.03] text-[--color-fg] transition-all duration-200 hover:border-[--color-brand-electric]/55 hover:bg-[--color-brand-electric]/[0.08] hover:text-[--color-brand-electric] hover:shadow-[0_0_0_3px_rgba(4,58,253,0.10)] lg:hidden"
              aria-expanded={open}
              aria-label={open ? t("close") : t("menu")}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute"
                  >
                    <X className="size-5" aria-hidden />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute"
                  >
                    <Menu className="size-5" aria-hidden />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-[--color-bg]/95 backdrop-blur-xl" />
            <motion.nav
              aria-label="Mobile"
              className="relative flex h-full flex-col gap-1 px-4 py-8"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.04 } },
              }}
            >
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: -16 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium transition-all duration-200",
                        active
                          ? "border border-[--color-brand-electric]/40 bg-[--color-brand-electric]/[0.08] text-[--color-fg] shadow-[0_0_24px_-8px_rgba(4,58,253,0.5)]"
                          : "border border-transparent text-[--color-fg]/80 hover:border-[--color-brand-electric]/30 hover:bg-[--color-brand-electric]/[0.05] hover:text-[--color-fg]",
                      )}
                    >
                      <span>{t(link.labelKey)}</span>
                      {active && (
                        <span className="size-1.5 rounded-full bg-[--color-brand-electric] shadow-[0_0_8px_rgba(4,58,253,0.8)]" aria-hidden />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="mt-6 flex flex-col gap-3 border-t border-[--color-border] pt-6"
              >
                <LanguageToggle />
                <Button asChild variant="primary" size="lg" className="w-full">
                  <Link href="/erstberatung">{t("consultationCta")}</Link>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
