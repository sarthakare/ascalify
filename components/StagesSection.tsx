"use client";

import { StageCard } from "@/components/StageCard";
import { AnimateIn } from "@/components/AnimateIn";
import { stages } from "@/lib/packages";

export function StagesSection() {
  return (
    <section className="bg-surface-alt py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          <AnimateIn variant="slideLeft" className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Growth stages
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-foreground sm:text-4xl">
              Choose Your Stage of Growth
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Three stages designed for where you are today — and where you
              want to go next.
            </p>
            <div
              aria-hidden
              className="mt-8 hidden h-px w-16 bg-brand lg:block"
            />
          </AnimateIn>

          <div className="grid gap-5 sm:gap-6">
            {stages.map((stage) => (
              <StageCard key={stage.id} stage={stage} variant="minimal" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
