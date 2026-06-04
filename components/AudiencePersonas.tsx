"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { AudienceSegment, Stage } from "@/lib/packages";
import { motionTransition, viewportOnce } from "@/lib/motion";

type AudiencePersonasProps = {
  stage: Stage;
  segment: AudienceSegment;
  animationIndex?: number;
};

export function AudiencePersonas({
  stage,
  segment,
  animationIndex = 0,
}: AudiencePersonasProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={motionTransition(animationIndex * 0.06 + 0.08, 0.45)}
      className="mt-8 rounded-2xl border border-border border-l-4 border-l-brand bg-white p-5 sm:p-6 md:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
        Who this stage is for
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">{stage.audience}</p>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {segment.personas.map((persona, index) => (
          <motion.li
            key={persona}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(
              animationIndex * 0.04 + index * 0.03,
              0.35,
            )}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2.5 rounded-xl border border-border bg-surface-alt px-3 py-2.5 text-sm font-medium text-foreground transition hover:border-brand/35 hover:bg-brand-tint/40"
          >
            <Check className="h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
            {persona}
          </motion.li>
        ))}
      </ul>

      <Link
        href={stage.href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-foreground underline-offset-4 hover:text-brand hover:underline"
      >
        View {stage.title} packages
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  );
}
