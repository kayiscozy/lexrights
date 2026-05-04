import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold",
    "transition-[transform,background,box-shadow,border-color,color] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-brand-electric)",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-bg)",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "active:scale-[0.98] select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // PRIMARY -Solid navy, classic premium law firm
        primary: [
          "border border-(--color-brand-navy) bg-(--color-brand-navy) text-white",
          "shadow-[0_2px_4px_rgba(1,20,68,0.10),0_1px_2px_rgba(1,20,68,0.06)]",
          "hover:bg-[#001033] hover:border-[#001033]",
          "hover:shadow-[0_8px_20px_-4px_rgba(1,20,68,0.25),0_2px_4px_rgba(1,20,68,0.10)]",
          "hover:-translate-y-px",
        ].join(" "),

        // BRAND -Electric blue, secondary CTA emphasis
        brand: [
          "border border-(--color-brand-electric) bg-(--color-brand-electric) text-white",
          "shadow-[0_2px_4px_rgba(4,58,253,0.18),0_1px_2px_rgba(4,58,253,0.10)]",
          "hover:bg-(--color-brand-glow) hover:border-(--color-brand-glow)",
          "hover:shadow-[0_8px_20px_-4px_rgba(4,58,253,0.35),0_2px_4px_rgba(4,58,253,0.15)]",
          "hover:-translate-y-px",
        ].join(" "),

        // SECONDARY -White with subtle border, navy text
        secondary: [
          "border border-(--color-border-strong) bg-(--color-bg-surface) text-(--color-fg)",
          "shadow-[0_1px_2px_rgba(1,20,68,0.04)]",
          "hover:border-(--color-brand-navy) hover:bg-(--color-bg-tint)",
          "hover:shadow-[0_4px_8px_rgba(1,20,68,0.06)]",
          "hover:-translate-y-px",
        ].join(" "),

        // OUTLINE -Transparent with navy border, full color-flip on hover
        outline: [
          "border border-(--color-brand-navy)/40 bg-transparent text-(--color-fg)",
          "hover:border-(--color-brand-navy) hover:bg-(--color-brand-navy) hover:text-white",
          "hover:-translate-y-px",
          "hover:shadow-[0_4px_10px_rgba(1,20,68,0.18)]",
        ].join(" "),

        // GHOST -Minimal, navy hover tint
        ghost: [
          "text-(--color-fg-muted)",
          "hover:bg-(--color-bg-tint) hover:text-(--color-fg)",
        ].join(" "),

        // LINK -Inline-text style
        link: [
          "text-(--color-brand-electric) underline-offset-4 px-0 h-auto font-medium",
          "hover:text-(--color-brand-electric) hover:underline",
        ].join(" "),

        // DESTRUCTIVE
        destructive: [
          "border border-(--color-error) bg-(--color-error) text-white",
          "shadow-[0_2px_4px_rgba(220,38,38,0.20)]",
          "hover:bg-[#b91c1c] hover:border-[#b91c1c]",
          "hover:-translate-y-px hover:shadow-[0_6px_14px_rgba(220,38,38,0.28)]",
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
