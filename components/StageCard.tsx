"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Stage } from "@/lib/packages";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { useViewportOnce } from "@/hooks/useViewportOnce";
import { motionTransition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StageCardProps = {
  stage: Stage;
  variant?: "default" | "minimal";
  /** When false, parent handles scroll animation (e.g. StagesSection sticky scroll). */
  animate?: boolean;
};

export function StageCard({
  stage,
  variant = "default",
  animate = true,
}: StageCardProps) {
  const viewport = useViewportOnce();

  if (variant === "minimal") {
    const card = (
      <article className="flex gap-5 rounded-2xl border border-border border-l-4 border-l-brand bg-white p-5 sm:gap-6 sm:p-6">
        <span className="shrink-0 text-4xl font-black leading-none text-brand/25 sm:text-5xl">
          {String(stage.number).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Stage {stage.number}
          </p>
          <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">
            {stage.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{stage.subtitle}</p>
          <Link
            href={stage.href}
            className="mt-4 inline-flex items-center text-sm font-semibold text-foreground underline-offset-4 hover:text-brand hover:underline"
          >
            View packages
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </article>
    );

    if (!animate) {
      return card;
    }

    return (
      <motion.article
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={viewport}
        transition={motionTransition((stage.number - 1) * 0.06, 0.4)}
        className="flex gap-5 rounded-2xl border border-border border-l-4 border-l-brand bg-white p-5 sm:gap-6 sm:p-6"
      >
        <span className="shrink-0 text-4xl font-black leading-none text-brand/25 sm:text-5xl">
          {String(stage.number).padStart(2, "0")}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Stage {stage.number}
          </p>
          <h3 className="mt-1 text-lg font-bold text-foreground sm:text-xl">
            {stage.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{stage.subtitle}</p>
          <Link
            href={stage.href}
            className="mt-4 inline-flex items-center text-sm font-semibold text-foreground underline-offset-4 hover:text-brand hover:underline"
          >
            View packages
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      whileTap={{ y: -2 }}
    >
      <Card
        className={cn(
          "flex h-full flex-col transition hover:border-brand/40 hover:shadow-lg",
        )}
      >
        <CardHeader>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {stage.number}
          </span>
          <Badge variant="secondary" className="mt-4">
            Stage {stage.number}
          </Badge>
          <h3 className="text-xl font-bold text-foreground">{stage.title}</h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm leading-6 text-muted">{stage.subtitle}</p>
        </CardContent>
        <CardFooter>
          <Link
            href={stage.href}
            className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View packages
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
