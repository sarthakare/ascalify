"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useMotionPreferences } from "@/hooks/useMotionPreferences";
import { motionTransition, reducedMotionTransition } from "@/lib/motion";

type HeroProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow = "Ascalify Website Packages",
  title,
  highlight,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: HeroProps) {
  const { reducedMotion, isMobile } = useMotionPreferences();
  const enterY = reducedMotion ? 0 : isMobile ? 8 : 14;
  const enterTransition = (delay: number, duration = 0.4) =>
    reducedMotion ? reducedMotionTransition(delay) : motionTransition(delay, duration);

  const trustItems = [
    "30-day support included",
    "Mobile-first delivery",
    "Scale-ready packages",
  ];

  return (
    <section className="relative overflow-hidden bg-brand-tint">
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover opacity-100"
      >
        <source src="/hero_section_bg_video.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,6,47,0.65),rgba(16,6,47,0.72)),radial-gradient(circle_at_20%_20%,rgba(103,61,230,0.25),transparent_45%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 md:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: enterY }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition(0, 0.4)}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-brand sm:text-sm"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: enterY }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition(0.05, 0.45)}
            className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
            {highlight ? (
              <>
                {" "}
                <span className="text-brand">{highlight}</span>
              </>
            ) : null}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: enterY }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition(0.1, 0.45)}
            className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base md:text-lg"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: enterY }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition(0.15, 0.45)}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <Link
              href={primaryHref}
              className={buttonVariants({
                size: "lg",
                className: "w-full justify-center sm:w-auto",
              })}
            >
              {primaryLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "w-full justify-center sm:w-auto",
                })}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: enterY }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition(0.2, 0.45)}
            className="mt-8 grid gap-3 text-sm text-white/85 sm:flex sm:flex-wrap sm:gap-4"
          >
            {trustItems.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"
              >
                <CheckCircle2 className="h-4 w-4 text-brand" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
