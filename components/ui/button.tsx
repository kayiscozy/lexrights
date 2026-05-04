import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-medium",
    "transition-[transform,background,box-shadow,border,color] duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent]",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
    "active:scale-[0.98]",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: [
          "relative overflow-hidden",
          "bg-[--color-brand-electric] text-white",
          "shadow-[0_8px_24px_-8px_rgba(4,58,253,0.5),inset_0_1px_0_0_rgba(255,255,255,0.15)]",
          "hover:bg-[--color-brand-glow]",
          "hover:shadow-[0_12px_36px_-8px_rgba(46,91,255,0.65),inset_0_1px_0_0_rgba(255,255,255,0.25)]",
          "hover:-translate-y-0.5",
        ].join(" "),
        secondary: [
          "border border-[--color-border-strong] bg-[--color-bg-elevated]/80",
          "text-[--color-fg] backdrop-blur-sm",
          "hover:border-[--color-border-brand] hover:bg-[--color-bg-elevated]",
          "hover:-translate-y-0.5",
        ].join(" "),
        outline: [
          "border border-[--color-border-strong] bg-transparent text-[--color-fg]",
          "hover:border-[--color-border-brand] hover:bg-[--color-bg-surface]/60",
          "hover:-translate-y-0.5",
        ].join(" "),
        ghost: [
          "text-[--color-fg-muted]",
          "hover:bg-[--color-bg-surface]/70 hover:text-[--color-fg]",
        ].join(" "),
        link: [
          "text-[--color-accent] underline-offset-4",
          "hover:text-[--color-brand-glow] hover:underline",
        ].join(" "),
        destructive: [
          "bg-[--color-error]/90 text-white",
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
