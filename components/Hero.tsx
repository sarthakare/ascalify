"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

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
        className="pointer-events-none absolute inset-0 "
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-brand"
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href={primaryHref}
              className={buttonVariants({ size: "lg" })}
            >
              {primaryLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4 text-sm text-muted"
          >
            {trustItems.map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
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
