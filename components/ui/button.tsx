import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold",
    "transition-[transform,background,box-shadow,border-color,color] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-electric]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "active:scale-[0.97] select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // PRIMARY — Maximum-emphasis CTA. Vibrant brand-blue with strong glow.
        // Hover: noticeably brighter (brand-glow #2E5BFF) + larger lift + intensified glow
        primary: [
          "relative overflow-hidden border border-[--color-brand-electric]",
          "bg-[--color-brand-electric] text-white",
          "shadow-[0_0_0_1px_rgba(4,58,253,0.5),0_8px_24px_-6px_rgba(4,58,253,0.6),inset_0_1px_0_0_rgba(255,255,255,0.18)]",
          "hover:bg-[--color-brand-glow] hover:border-[--color-brand-glow]",
          "hover:shadow-[0_0_0_1px_rgba(46,91,255,0.6),0_18px_44px_-8px_rgba(46,91,255,0.85),inset_0_1px_0_0_rgba(255,255,255,0.30)]",
          "hover:-translate-y-0.5",
        ].join(" "),

        // SECONDARY — Substantial glass surface. Clearly visible default.
        // Hover: brighter glass + brand-electric border + brand-tinted glow
        secondary: [
          "border border-[--color-fg]/25 bg-[--color-fg]/[0.08] text-[--color-fg] backdrop-blur-md",
          "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.10)]",
          "hover:border-[--color-brand-electric] hover:bg-[--color-fg]/[0.14]",
          "hover:text-white hover:-translate-y-0.5",
          "hover:shadow-[0_0_0_3px_rgba(4,58,253,0.18),0_10px_28px_-8px_rgba(4,58,253,0.5),inset_0_1px_0_0_rgba(255,255,255,0.16)]",
        ].join(" "),

        // OUTLINE — Clear stroke, transparent fill. Full color-flip on hover.
        outline: [
          "border border-[--color-fg]/30 bg-[--color-fg]/[0.02] text-[--color-fg]",
          "hover:border-[--color-brand-electric] hover:bg-[--color-brand-electric]/[0.16]",
          "hover:text-white hover:-translate-y-0.5",
          "hover:shadow-[0_0_0_3px_rgba(4,58,253,0.18),0_10px_28px_-10px_rgba(4,58,253,0.55)]",
        ].join(" "),

        // GHOST — Minimal weight but clearly responsive on hover
        ghost: [
          "text-[--color-fg-muted]",
          "hover:bg-[--color-brand-electric]/[0.14] hover:text-white",
        ].join(" "),

        // LINK — Inline-text style with animated underline
        link: [
          "text-[--color-brand-glow] underline-offset-4 px-0 h-auto font-medium",
          "hover:text-white hover:underline",
        ].join(" "),

        // DESTRUCTIVE
        destructive: [
          "border border-[--color-error] bg-[--color-error]/90 text-white",
          "shadow-[0_8px_24px_-8px_rgba(248,113,113,0.45)]",
          "hover:bg-[--color-error] hover:-translate-y-0.5",
          "hover:shadow-[0_14px_36px_-8px_rgba(248,113,113,0.65)]",
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
