"use client";

import { AnimateIn } from "@/components/AnimateIn";

type PageIntroProps = {
  title: string;
  description?: string;
  compact?: boolean;
};

export function PageIntro({ title, description, compact = false }: PageIntroProps) {
  return (
    <div
      className={`mx-auto max-w-6xl px-5 sm:px-6 ${
        compact ? "pt-8 pb-2 md:pt-10 md:pb-3" : "py-12 md:py-16"
      }`}
    >
      <AnimateIn variant="fadeUp">
        <h1 className="text-3xl font-black text-foreground md:text-4xl">{title}</h1>
      </AnimateIn>
      {description ? (
        <AnimateIn variant="fadeUp" delay={0.06} className="mt-4 max-w-2xl">
          <p className="text-base leading-7 text-muted md:text-lg">{description}</p>
        </AnimateIn>
      ) : null}
    </div>
  );
}
