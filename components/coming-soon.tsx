import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ComingSoonProps {
  namespace: "wissen" | "faelle";
}

export function ComingSoon({ namespace }: ComingSoonProps) {
  const tHero = useTranslations(`${namespace}.hero`);
  const t = useTranslations(`${namespace}.comingSoon`);

  return (
    <>
      <section className="relative pb-20 pt-32 md:pb-24 md:pt-40">
        <div className="aurora-bg absolute inset-x-0 top-0 -z-10 h-[600px]" aria-hidden />
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="font-mono text-xs uppercase tracking-wider text-[--color-brand-electric]">
            {tHero("eyebrow")}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight text-[--color-fg] md:text-5xl lg:text-6xl">
            {tHero("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-[--color-fg-muted] md:text-lg">
            {tHero("sub")}
          </p>
        </div>
      </section>

      <section className="relative pb-24 pt-8">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[--color-border-brand] bg-[--color-bg-surface]/60 p-10 text-center md:p-16">
            <div
              className="pointer-events-none absolute inset-0 -z-10 opacity-50"
              aria-hidden
            >
              <div className="absolute -left-24 top-0 size-96 rounded-full bg-[--color-brand-electric]/15 blur-3xl" />
              <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-[--color-brand-glow]/10 blur-3xl" />
            </div>
            <Sparkles
              className="mx-auto size-8 text-[--color-brand-electric]"
              aria-hidden
            />
            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-[--color-fg] md:text-3xl">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-[--color-fg-muted]">
              {t("sub")}
            </p>
            <Button asChild size="lg" className="mt-10">
              <Link href="/erstberatung">
                {t("cta")}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
