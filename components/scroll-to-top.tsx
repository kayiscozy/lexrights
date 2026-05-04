"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-4 z-30 hidden size-11 items-center justify-center rounded-full border border-[--color-border-strong] bg-[--color-bg-surface] text-[--color-fg-muted] shadow-[var(--shadow-md)] transition-all duration-200 hover:border-[--color-brand-navy] hover:bg-[--color-brand-navy] hover:text-white active:scale-95 lg:flex lg:bottom-8"
        >
          <ArrowUp className="size-4" aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
