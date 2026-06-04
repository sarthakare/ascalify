"use client";

import { motion } from "framer-motion";
import { FaqList } from "@/components/FaqList";
import { AnimateIn } from "@/components/AnimateIn";
import type { FaqGroup } from "@/lib/packages";
import { faqs } from "@/lib/packages";

type FaqGroupBlockProps = {
  group: FaqGroup;
  index: number;
  pageTitle?: string;
};

export function FaqGroupBlock({
  group,
  index,
  pageTitle,
}: FaqGroupBlockProps) {
  const isFirst = index === 0;
  const items = group.questionIndices.map((i) => faqs[i]);

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
        id={group.id}
        initial={isFirst ? { opacity: 0, y: 12 } : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12 }}
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
                Answers about delivery timelines, support, upgrades, and getting
                started with your Ascalify website package.
              </p>
            </AnimateIn>
          ) : null}

          {isFirst ? (
            <AnimateIn
              variant="fadeUp"
              className={pageTitle ? "mt-10" : "mt-8"}
            >
              <GroupHeader group={group} index={index} />
            </AnimateIn>
          ) : (
            <div className={pageTitle ? "mt-10" : "mt-8"}>
              <GroupHeader group={group} index={index} />
            </div>
          )}

          <FaqList items={items} animationOffset={index} />
        </div>
      </motion.section>
    </div>
  );
}

function GroupHeader({ group, index }: { group: FaqGroup; index: number }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-brand">
          {group.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          {group.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">
          {group.subtitle}
        </p>
      </div>
      <span className="text-5xl font-black leading-none text-brand/20 sm:text-6xl">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>
  );
}
