"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AudiencePersonas } from "@/components/AudiencePersonas";
import { AnimateIn } from "@/components/AnimateIn";
import { audienceStageImages } from "@/lib/audience-images";
import type { AudienceSegment, Stage } from "@/lib/packages";
import { useViewportOnce } from "@/hooks/useViewportOnce";
import { motionTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type AudienceStageBlockProps = {
  stage: Stage;
  segment: AudienceSegment;
  index: number;
  pageTitle?: string;
};

export function AudienceStageBlock({
  stage,
  segment,
  index,
  pageTitle,
}: AudienceStageBlockProps) {
  const isFirst = index === 0;
  const imageOnLeft = index % 2 === 1;
  const image = audienceStageImages[stage.id];
  const viewport = useViewportOnce();

  return (
    <div className="relative">
      {!isFirst ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center"
        >
          <div className="h-1 w-full max-w-6xl bg-linear-to-r from-transparent via-brand/25 to-transparent" />
          <div className="absolute top-0 h-8 w-full bg-linear-to-b from-black/6 to-transparent" />
        </div>
      ) : null}

      <motion.section
        id={stage.id}
        initial={isFirst ? { opacity: 0, y: 12 } : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{
          duration: isFirst ? 0.5 : 0.75,
          ease: "easeOut",
        }}
        className={`scroll-mt-28 overflow-hidden ${
          isFirst ? "pt-8 pb-14 md:pt-10 md:pb-16" : "py-16 md:py-20"
        } ${index % 2 === 0 ? "bg-white" : "bg-surface-alt"}`}
      >
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          {pageTitle ? (
            <AnimateIn variant="fadeUp">
              <h1 className="text-3xl font-black text-foreground md:text-4xl">
                {pageTitle}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
                Ascalify packages are designed for businesses at every stage —
                from solo professionals to enterprise teams.
              </p>
            </AnimateIn>
          ) : null}

          <div
            className={cn(
              "flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-10",
              pageTitle ? "mt-10" : "mt-8",
            )}
          >
            <div
              className={cn(
                "order-2",
                imageOnLeft ? "lg:order-1" : "lg:order-2",
              )}
            >
              {isFirst ? (
                <AnimateIn variant="fadeUp">
                  <StageHeader stage={stage} segment={segment} />
                </AnimateIn>
              ) : (
                <StageHeader stage={stage} segment={segment} />
              )}

              <AudiencePersonas
                segment={segment}
                stage={stage}
                animationIndex={index}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={viewport}
              transition={motionTransition(index * 0.05, 0.5)}
              className={cn(
                "order-1",
                imageOnLeft
                  ? "lg:order-2 lg:sticky lg:top-28"
                  : "lg:order-1 lg:sticky lg:top-28",
              )}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-lg shadow-brand/5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={900}
                  className="h-auto w-full rounded-xl object-cover"
                  sizes="(min-width: 1024px) 520px, 100vw"
                  priority={isFirst}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

function StageHeader({
  stage,
  segment,
}: {
  stage: Stage;
  segment: AudienceSegment;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          Stage {stage.number} · {segment.priceBand}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {stage.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
          {stage.subtitle}
        </p>
      </div>
      <span className="text-4xl font-black leading-none text-brand/20 sm:text-5xl lg:text-6xl">
        {String(stage.number).padStart(2, "0")}
      </span>
    </div>
  );
}
