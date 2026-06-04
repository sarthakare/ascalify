"use client";

import { motion } from "framer-motion";
import { PricingCard } from "@/components/PricingCard";
import { AnimateIn } from "@/components/AnimateIn";
import type { Package, Stage } from "@/lib/packages";

type PackagesStageBlockProps = {
  stage: Stage;
  stagePackages: Package[];
  index: number;
  pageTitle?: string;
};

export function PackagesStageBlock({
  stage,
  stagePackages,
  index,
  pageTitle,
}: PackagesStageBlockProps) {
  const isFirstPage = index === 0;

  return (
    <div className="relative">
      {!isFirstPage ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center"
        >
          <div className="h-1 w-full max-w-6xl bg-gradient-to-r from-transparent via-brand/25 to-transparent" />
          <div className="absolute top-0 h-8 w-full bg-gradient-to-b from-black/6 to-transparent" />
        </div>
      ) : null}

      <motion.section
        id={stage.id}
        initial={
          isFirstPage ? { opacity: 0, y: 12 } : { opacity: 0, y: 28 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
        transition={{
          duration: isFirstPage ? 0.5 : 0.75,
          ease: "easeOut",
        }}
        className={`scroll-mt-28 overflow-hidden ${
          isFirstPage ? "pt-8 pb-14 md:pt-10 md:pb-16" : "py-16 md:py-20"
        } ${index % 2 === 0 ? "bg-white" : "bg-surface-alt"}`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          {pageTitle ? (
            <AnimateIn variant="fadeUp">
              <h1 className="text-3xl font-black text-foreground md:text-4xl">
                {pageTitle}
              </h1>
            </AnimateIn>
          ) : null}
          {isFirstPage ? (
            <AnimateIn variant="fadeUp" className={pageTitle ? "mt-6" : undefined}>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Stage {stage.number}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                {stage.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
                {stage.subtitle}
              </p>
            </AnimateIn>
          ) : (
            <div className={pageTitle ? "mt-6" : undefined}>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                Stage {stage.number}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                {stage.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
                {stage.subtitle}
              </p>
            </div>
          )}

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {stagePackages.map((pkg, cardIndex) => (
              <PricingCard
                key={pkg.id}
                pkg={pkg}
                animationIndex={cardIndex + index}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
