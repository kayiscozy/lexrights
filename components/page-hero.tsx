import Image from "next/image";
import { motion } from "motion/react";
import { pageImages, type PageImageKey } from "@/lib/page-images";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  imageKey: PageImageKey;
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Inverse the overlay — light overlay on dark image (default) or dark overlay on light bg */
  variant?: "image" | "subtle";
  /** Optional CTA section under hero */
  children?: React.ReactNode;
  className?: string;
  /** Hero height — default lg (~480px), use sm for inner pages */
  size?: "sm" | "md" | "lg";
}

/**
 * Reusable page hero with curated background image + brand overlay.
 * Light theme: image is significantly darkened so navy text stays legible.
 */
export function PageHero({
  imageKey,
  eyebrow,
  title,
  subtitle,
  children,
  className,
  size = "md",
}: PageHeroProps) {
  const img = pageImages[imageKey];

  const heightClass = {
    sm: "min-h-[360px] md:min-h-[420px]",
    md: "min-h-[440px] md:min-h-[520px]",
    lg: "min-h-[520px] md:min-h-[640px]",
  }[size];

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        heightClass,
        className,
      )}
    >
      {/* Background image */}
      <Image
        src={img.src}
        alt={img.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Brand-tinted overlay — minimal so the image stays visible */}
      <div
        className="absolute inset-0 bg-(--color-brand-navy)/55"
        aria-hidden
      />
      {/* Bottom-weighted gradient for text legibility on the lower portion */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-(--color-brand-navy)/20 via-(--color-brand-navy)/45 to-(--color-brand-navy)/80"
        aria-hidden
      />
      {/* Subtle electric-blue accent line at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-(--color-brand-electric) to-transparent opacity-70"
        aria-hidden
      />

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-end pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-brand-electric)">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 md:text-lg">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </div>
    </section>
  );
}
