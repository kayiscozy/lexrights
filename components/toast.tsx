"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type ToastVariant = "success" | "error" | "info";

export type Toast = {
  id: string;
  variant: ToastVariant;
  title: string;
  description?: string;
  duration?: number;
};

type ToastContextValue = {
  show: (t: Omit<Toast, "id">) => void;
  dismiss: (id: string) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = React.useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([]);

  const dismiss = React.useCallback((id: string) => {
    setToasts((list) => list.filter((t) => t.id !== id));
  }, []);

  const show = React.useCallback(
    (t: Omit<Toast, "id">) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      const toast: Toast = { id, duration: 5000, ...t };
      setToasts((list) => [...list, toast]);
      if (toast.duration && toast.duration > 0) {
        setTimeout(() => dismiss(id), toast.duration);
      }
    },
    [dismiss],
  );

  return (
    <ToastContext.Provider value={{ show, dismiss }}>
      {children}
      <ToastViewport toasts={toasts} dismiss={dismiss} />
    </ToastContext.Provider>
  );
}

function ToastViewport({
  toasts,
  dismiss,
}: {
  toasts: Toast[];
  dismiss: (id: string) => void;
}) {
  return (
    <div
      role="region"
      aria-label="Notifications"
      className="pointer-events-none fixed inset-x-0 top-20 z-[100] flex flex-col items-center gap-2 px-4 sm:bottom-6 sm:right-6 sm:left-auto sm:top-auto sm:items-end"
    >
      <AnimatePresence>
        {toasts.map((t) => (
          <ToastCard key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </AnimatePresence>
    </div>
  );
}

const variantStyles: Record<
  ToastVariant,
  { Icon: React.ElementType; ring: string; iconColor: string; border: string }
> = {
  success: {
    Icon: CheckCircle2,
    border: "border-[--color-success]/40",
    ring: "shadow-[0_0_0_1px_rgba(74,222,128,0.18),0_12px_32px_-10px_rgba(74,222,128,0.4)]",
    iconColor: "text-[--color-success]",
  },
  error: {
    Icon: AlertCircle,
    border: "border-[--color-error]/40",
    ring: "shadow-[0_0_0_1px_rgba(248,113,113,0.18),0_12px_32px_-10px_rgba(248,113,113,0.4)]",
    iconColor: "text-[--color-error]",
  },
  info: {
    Icon: CheckCircle2,
    border: "border-[--color-brand-electric]/40",
    ring: "shadow-[0_0_0_1px_rgba(4,58,253,0.2),0_12px_32px_-10px_rgba(4,58,253,0.45)]",
    iconColor: "text-[--color-brand-electric]",
  },
};

function ToastCard({
  toast,
  onDismiss,
}: {
  toast: Toast;
  onDismiss: () => void;
}) {
  const { Icon, ring, iconColor, border } = variantStyles[toast.variant];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: 200, transition: { duration: 0.2 } }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      role="status"
      className={cn(
        "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-xl border bg-[--color-bg-surface] p-4 shadow-[var(--shadow-lg)]",
        border,
      )}
    >
      <Icon className={cn("size-5 shrink-0 mt-0.5", iconColor)} aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-[--color-fg]">{toast.title}</p>
        {toast.description && (
          <p className="mt-1 text-sm text-[--color-fg-muted]">
            {toast.description}
          </p>
        )}
      </div>
      <button
        type="button"
        onClick={onDismiss}
        aria-label="Dismiss"
        className="-mr-1 -mt-1 inline-flex size-7 items-center justify-center rounded-md text-[--color-fg-subtle] transition-colors hover:bg-[--color-bg-surface] hover:text-[--color-fg]"
      >
        <X className="size-3.5" aria-hidden />
      </button>
    </motion.div>
  );
}
