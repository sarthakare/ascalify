"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useViewportOnce } from "@/hooks/useViewportOnce";
import { motionTransition } from "@/lib/motion";

const journeySteps = [
  {
    icon: Sparkles,
    range: "$99 – $499",
    title: "Start Online",
    description: "Freelancers, clinics, cafes, coaches, and local brands.",
    href: "/packages/stage-1",
  },
  {
    icon: TrendingUp,
    range: "$999 – $2,999",
    title: "Grow Your Business",
    description: "Agencies, startups, clinics, and professional services.",
    href: "/packages/stage-2",
  },
  {
    icon: Building2,
    range: "$4,999 – $9,999+",
    title: "Scale Beyond Limits",
    description: "SMEs, SaaS, logistics, marketplaces, and enterprise teams.",
    href: "/packages/stage-3",
  },
];

const metrics = [
  { icon: Rocket, value: "$99", label: "Starting From" },
  { icon: Users, value: "9", label: "Packages Available" },
  { icon: TrendingUp, value: "3", label: "Growth Stages" },
];

export function GrowthOverviewSection() {
  const viewport = useViewportOnce();

  return (
    <section className="border-y border-border bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={motionTransition(0)}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Built for every business size
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-foreground sm:text-4xl md:text-5xl">
            From freelancer to enterprise
          </h2>
          <p className="mt-4 text-base leading-7 text-muted md:text-lg">
            Nine packages across three stages. Pick the tier that fits your
            goals, or explore who each stage is built for.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={motionTransition(index * 0.06)}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <Icon className="h-5 w-5 text-brand" strokeWidth={2} />
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">
                  {step.range}
                </p>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>
                <Link
                  href={step.href}
                  className="mt-5 inline-flex items-center text-sm font-semibold text-foreground underline-offset-4 hover:text-brand hover:underline"
                >
                  Explore stage
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={motionTransition(0.08)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href="/packages"
            className={buttonVariants({
              size: "lg",
              className: "w-full sm:w-auto",
            })}
          >
            Compare All Packages
          </Link>
          <Link
            href="/audience"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "w-full sm:w-auto",
            })}
          >
            Who We Serve
          </Link>
        </motion.div>

        <div className="mt-14 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={motionTransition(index * 0.05, 0.35)}
                className="text-center"
              >
                <Icon className="mx-auto h-5 w-5 text-muted" strokeWidth={1.75} />
                <p className="mt-3 text-3xl font-black text-foreground">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
