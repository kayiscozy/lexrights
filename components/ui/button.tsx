import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium",
    "transition-[transform,background,box-shadow,border-color,color] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-brand-electric]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "active:scale-[0.98] select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // Primary — brand electric blue (the X-color from the logo) with strong glow
        // Maximum-emphasis CTA. Glow comes alive on hover.
        primary: [
          "relative overflow-hidden border border-[--color-brand-electric]",
          "bg-[--color-brand-electric] text-white",
          "shadow-[0_0_0_1px_rgba(4,58,253,0.4),0_8px_24px_-8px_rgba(4,58,253,0.55)]",
          "hover:bg-[--color-brand-glow] hover:border-[--color-brand-glow]",
          "hover:shadow-[0_0_0_1px_rgba(46,91,255,0.5),0_14px_40px_-10px_rgba(46,91,255,0.75)]",
          "hover:-translate-y-0.5",
        ].join(" "),
        // Secondary — subtle outline with brand-blue come-alive hover
        secondary: [
          "border border-[--color-fg]/15 bg-[--color-fg]/[0.03] text-[--color-fg]",
          "hover:border-[--color-brand-electric]/55 hover:bg-[--color-brand-electric]/[0.08]",
          "hover:text-[--color-fg]",
          "hover:shadow-[0_0_0_3px_rgba(4,58,253,0.10),0_6px_18px_-8px_rgba(4,58,253,0.45)]",
          "hover:-translate-y-0.5",
        ].join(" "),
        // Outline — even more subtle, brand-blue comes alive on hover
        outline: [
          "border border-[--color-fg]/20 bg-transparent text-[--color-fg]",
          "hover:border-[--color-brand-electric]/60 hover:bg-[--color-brand-electric]/[0.06]",
          "hover:shadow-[0_0_0_3px_rgba(4,58,253,0.08)]",
          "hover:-translate-y-0.5",
        ].join(" "),
        // Ghost — minimal weight, brand-blue tint on hover
        ghost: [
          "text-[--color-fg-muted]",
          "hover:bg-[--color-brand-electric]/[0.06] hover:text-[--color-fg]",
        ].join(" "),
        // Link — text-only with brand color
        link: [
          "text-[--color-brand-glow] underline-offset-4 px-0 h-auto",
          "hover:text-[--color-brand-electric] hover:underline",
        ].join(" "),
        // Destructive
        destructive: [
          "border border-[--color-error] bg-[--color-error]/90 text-white",
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
