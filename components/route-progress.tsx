"use client";

import { useEffect, useRef, useState } from "react";
import { useTransition } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "@/i18n/navigation";

/**
 * Top progress bar visible on every page navigation.
 * Provides clear feedback that something is loading.
 * Inspired by NProgress / Vercel-style.
 */
export function RouteProgress() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const lastPath = useRef(pathname);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  // Listen to all internal anchor clicks -show bar immediately
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target === "_blank") return;
      if (e.metaKey || e.ctrlKey || e.shiftKey) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      // External or same-page hash
      if (href.startsWith("http") && !href.includes(window.location.host)) return;
      if (href.startsWith("#")) return;
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return;
      // Same path
      if (anchor.pathname === window.location.pathname && anchor.search === window.location.search) {
        return;
      }
      start();
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // When pathname changes, finish the bar
  useEffect(() => {
    if (lastPath.current !== pathname) {
      lastPath.current = pathname;
      finish();
    }
  }, [pathname]);

  function start() {
    if (interval.current) clearInterval(interval.current);
    if (timer.current) clearTimeout(timer.current);
    setVisible(true);
    setProgress(8);
    interval.current = setInterval(() => {
      setProgress((p) => {
        if (p >= 88) return p;
        const inc = (88 - p) * 0.08;
        return Math.min(p + Math.max(0.8, inc), 88);
      });
    }, 180);
  }

  function finish() {
    if (interval.current) clearInterval(interval.current);
    setProgress(100);
    timer.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 320);
  }

  useEffect(() => {
    return () => {
      if (interval.current) clearInterval(interval.current);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5"
        >
          <div
            className="h-full bg-gradient-to-r from-(--color-brand-electric) via-(--color-brand-glow) to-(--color-brand-electric) shadow-[0_0_12px_rgba(4,58,253,0.7)]"
            style={{
              width: `${progress}%`,
              transition: "width 200ms ease-out",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
