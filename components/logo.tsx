import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "wordmark" | "wordmarkDark" | "mark" | "combined";
  className?: string;
  priority?: boolean;
}

const sources = {
  wordmark: { src: "/logos/wordmark.svg", w: 500, h: 44, alt: "LexRights" },
  wordmarkDark: {
    src: "/logos/wordmark-dark.svg",
    w: 500,
    h: 44,
    alt: "LexRights",
  },
  mark: { src: "/logos/mark.svg", w: 187, h: 165, alt: "LexRights" },
  combined: {
    src: "/logos/combined.svg",
    w: 500,
    h: 165,
    alt: "LexRights — European Boutique for Digital Rights",
  },
} as const;

export function Logo({
  variant = "wordmark",
  className,
  priority = false,
}: LogoProps) {
  const { src, w, h, alt } = sources[variant];
  return (
    <Image
      src={src}
      alt={alt}
      width={w}
      height={h}
      priority={priority}
      className={cn("h-auto select-none", className)}
    />
  );
}
