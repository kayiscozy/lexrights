import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium",
    "transition-[transform,background,box-shadow,border,color] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-fg]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "active:scale-[0.98] select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary — bright WHITE with dark navy text. Maximum contrast on dark bg.
        primary: [
          "relative overflow-hidden",
          "bg-[--color-fg] text-[--color-brand-navy]",
          "shadow-[0_8px_24px_-6px_rgba(245,247,255,0.25),inset_0_1px_0_0_rgba(255,255,255,0.5)]",
          "hover:bg-white",
          "hover:shadow-[0_14px_36px_-8px_rgba(245,247,255,0.4),inset_0_1px_0_0_rgba(255,255,255,0.6)]",
          "hover:-translate-y-0.5",
        ].join(" "),
        // Brand — electric blue accent, for emphasis CTAs (use sparingly)
        brand: [
          "relative overflow-hidden",
          "bg-[--color-brand-electric] text-white",
          "shadow-[0_8px_24px_-6px_rgba(4,58,253,0.55),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          "hover:bg-[--color-brand-glow]",
          "hover:shadow-[0_14px_36px_-8px_rgba(46,91,255,0.7),inset_0_1px_0_0_rgba(255,255,255,0.28)]",
          "hover:-translate-y-0.5",
        ].join(" "),
        // Secondary — high-contrast surface, clearly visible
        secondary: [
          "border border-[--color-fg]/20 bg-[--color-fg]/[0.08]",
          "text-[--color-fg] backdrop-blur-md",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]",
          "hover:border-[--color-fg]/35 hover:bg-[--color-fg]/[0.14]",
          "hover:-translate-y-0.5",
        ].join(" "),
        // Outline — clear border, transparent fill — sec. CTAs
        outline: [
          "border border-[--color-fg]/30 bg-transparent text-[--color-fg]",
          "hover:border-[--color-fg]/60 hover:bg-[--color-fg]/[0.06]",
          "hover:-translate-y-0.5",
        ].join(" "),
        // Ghost — minimum visual weight
        ghost: [
          "text-[--color-fg-muted]",
          "hover:bg-[--color-fg]/[0.06] hover:text-[--color-fg]",
        ].join(" "),
        // Link — inline-text-style action
        link: [
          "text-[--color-accent] underline-offset-4 px-0 h-auto",
          "hover:text-[--color-brand-glow] hover:underline",
        ].join(" "),
        // Destructive
        destructive: [
          "bg-[--color-error]/90 text-white",
          "shadow-[0_8px_24px_-8px_rgba(248,113,113,0.45)]",
          "hover:bg-[--color-error] hover:-translate-y-0.5",
        ].join(" "),
      },
      size: {
        xs: "h-8 px-3 text-xs",
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-9 text-base",
        icon: "size-10",
        "icon-sm": "size-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    if (asChild) {
      return (
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant, size }), className)}
          {...props}
        >
          {children}
        </Comp>
      );
    }

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" aria-hidden />
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
