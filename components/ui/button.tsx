import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[--color-brand-electric] text-white hover:bg-[--color-brand-glow] shadow-[0_0_24px_-4px_rgba(4,58,253,0.4)] hover:shadow-[0_0_32px_-4px_rgba(46,91,255,0.55)]",
        secondary:
          "bg-[--color-bg-elevated] text-[--color-fg] hover:bg-[--color-bg-surface] border border-[--color-border-strong]",
        ghost:
          "text-[--color-fg-muted] hover:bg-[--color-bg-surface] hover:text-[--color-fg]",
        outline:
          "border border-[--color-border-strong] bg-transparent text-[--color-fg] hover:bg-[--color-bg-surface] hover:border-[--color-border-brand]",
        link: "text-[--color-accent] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "size-10",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
