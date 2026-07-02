"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { useMotionPreferences } from "@/hooks/useMotionPreferences";
import { motionTransition, reducedMotionTransition } from "@/lib/motion";

type HeroProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  rotatingStaticText?: string;
  rotatingPhrases?: string[];
  description: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow = "",
  title,
  highlight,
  rotatingStaticText = "",
  rotatingPhrases = [],
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
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const metallicSilverText =
    "bg-zinc-300 bg-clip-text text-transparent";

  useEffect(() => {
    if (reducedMotion || rotatingPhrases.length < 2) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setCurrentPhraseIndex((index) => (index + 1) % rotatingPhrases.length);
    }, 2400);

    return () => window.clearInterval(intervalId);
  }, [reducedMotion, rotatingPhrases]);

  const trustItems = [
    "Websites, Automations & SaaS Products",
    "Launch Fast, Iterate Continuously",
    "Built to Scale With Your Growth",
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
            className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${metallicSilverText}`}
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
          {rotatingStaticText.trim() ? (
            <motion.p
              initial={{ opacity: 0, y: enterY }}
              animate={{ opacity: 1, y: 0 }}
              transition={enterTransition(0.1, 0.45)}
              className="mt-5 text-sm font-medium text-white/80 sm:text-base"
            >
              {rotatingStaticText}
            </motion.p>
          ) : null}
          <motion.div
            initial={{ opacity: 0, y: enterY }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition(0.125, 0.45)}
            className={`relative overflow-hidden mt-1 h-10 sm:h-12 md:h-[3.6rem] lg:h-[4.4rem]`}
            style={{ perspective: 1200 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={rotatingPhrases[currentPhraseIndex]}
                initial={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 18, rotateX: -60, transformOrigin: "50% 50% -40px" }
                }
                animate={
                  reducedMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, rotateX: 0, transformOrigin: "50% 50% -40px" }
                }
                exit={
                  reducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: -18, rotateX: 60, transformOrigin: "50% 50% -40px" }
                }
                transition={
                  reducedMotion
                    ? enterTransition(0, 0.24)
                    : {
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }
                }
                className={`absolute left-0 right-0 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl ${metallicSilverText}`}
              >
                {rotatingPhrases[currentPhraseIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: enterY }}
            animate={{ opacity: 1, y: 0 }}
            transition={enterTransition(0.14, 0.45)}
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
