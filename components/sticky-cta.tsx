"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { env } from "@/lib/utils";

const HIDE_ON_PATHS = ["/erstberatung", "/consultation"];

export function StickyCta() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHidePath = HIDE_ON_PATHS.some((p) => pathname.startsWith(p));
  if (onHidePath) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0)" }}
        >
          <div className="mx-3 mb-3 flex items-center gap-2 rounded-2xl border border-[--color-border-strong] bg-[--color-bg-surface]/95 p-2 shadow-2xl backdrop-blur-xl">
            <a
              href={`tel:${env.phone}`}
              aria-label={env.phoneDisplay}
              className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[--color-border] bg-[--color-bg-elevated] text-[--color-fg] transition-all duration-200 active:scale-95 hover:border-[--color-border-brand] hover:text-[--color-brand-electric]"
            >
              <Phone className="size-4" aria-hidden />
            </a>
            {env.whatsapp && (
              <a
                href={`https://wa.me/${env.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-[--color-border] bg-[--color-bg-elevated] text-[--color-fg] transition-all duration-200 active:scale-95 hover:border-[--color-border-brand] hover:text-[--color-brand-electric]"
              >
                <MessageCircle className="size-4" aria-hidden />
              </a>
            )}
            <Link
              href="/erstberatung"
              className="group flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[--color-fg] px-4 text-sm font-semibold text-[--color-brand-navy] shadow-[0_4px_16px_-4px_rgba(245,247,255,0.3)] transition-all duration-200 active:scale-[0.98] hover:bg-white"
            >
              {t("consultationCta")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
