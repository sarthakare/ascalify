"use client";

import { motion, type Variants } from "framer-motion";
import { Check, Clock, Headphones } from "lucide-react";
import type { Package } from "@/lib/packages";
import { whatsappPackageLink } from "@/lib/contact";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { motionTransition, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const cardHoverVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -4, transition: { duration: 0.25, ease: "easeOut" } },
};

const comparePriceVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.2,
    y: -1,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
};

const slashVariants: Variants = {
  rest: { scaleX: 1, opacity: 0.85, x: 0 },
  hover: {
    scaleX: [0.04, 1.14, 1],
    opacity: [0.45, 1, 0.95],
    x: [-10, 0, 0],
    transition: {
      duration: 0.7,
      delay: 0.14,
      times: [0, 0.7, 1],
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const slashGlowVariants: Variants = {
  rest: { opacity: 0, x: "-28%" },
  hover: {
    opacity: [0, 1, 0],
    x: ["-28%", "42%", "122%"],
    transition: { duration: 0.76, delay: 0.18, ease: "easeInOut" },
  },
};

const salePriceVariants: Variants = {
  rest: {
    opacity: 1,
    y: 0,
    scale: 1,
    textShadow: "0 0 0 rgba(103,61,230,0)",
  },
  hover: {
    opacity: [1, 0, 1],
    y: [0, 6, 0],
    scale: [0.92, 0.88, 0.96, 0.92],
    textShadow: [
      "0 0 0 rgba(103,61,230,0)",
      "0 0 0 rgba(103,61,230,0)",
      "0 0 18px rgba(103,61,230,0.45)",
      "0 0 10px rgba(103,61,230,0.25)",
    ],
    transition: {
      duration: 0.72,
      times: [0, 0.38, 0.72, 1],
      ease: "easeOut",
    },
  },
};

function PackagePricing({ pkg }: { pkg: Package }) {
  return (
    <div className="pt-3">
      <p className="text-sm font-semibold text-muted">Starting at</p>
      <div className="mt-1 flex items-end gap-3">
        <div className="relative w-fit">
          <motion.p
            variants={comparePriceVariants}
            className="text-lg font-bold text-muted/80"
          >
            {pkg.compareAtPriceLabel}
          </motion.p>
          <motion.span
            aria-hidden
            variants={slashVariants}
            className="pointer-events-none absolute top-[43%] left-[-8%] h-1 w-[116%] origin-left rounded-full bg-red-500 shadow-[0_0_14px_rgba(239,68,68,0.55)]"
          />
          <motion.span
            aria-hidden
            variants={slashGlowVariants}
            className="pointer-events-none absolute top-[52%] left-[-8%] h-2 w-14 -translate-y-1/2 rounded-full bg-linear-to-r from-transparent via-red-100 to-transparent blur-[2px]"
          />
        </div>
        <motion.p
          variants={salePriceVariants}
          className="text-3xl font-black text-brand leading-none"
        >
          {pkg.priceLabel}
        </motion.p>
      </div>
    </div>
  );
}

type PricingCardProps = {
  pkg: Package;
  compact?: boolean;
  animationIndex?: number;
};

export function PricingCard({
  pkg,
  compact = false,
  animationIndex = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={motionTransition(animationIndex * 0.06, 0.4)}
    >
      <motion.div
        className="h-full"
        variants={cardHoverVariants}
        initial="rest"
        whileHover="hover"
      >
      <Card
        className={cn(
          "relative flex h-full flex-col overflow-hidden transition duration-300",
          pkg.highlight
            ? "border-brand bg-brand-tint shadow-xl shadow-brand/15 ring-1 ring-brand/20"
            : "hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5",
        )}
      >
        {pkg.highlight ? (
          <div className="absolute inset-x-0 top-0 bg-brand px-6 py-2 text-center text-xs font-bold uppercase tracking-wider text-white">
            Most Popular
          </div>
        ) : null}
        <CardHeader className={pkg.highlight ? "pt-12" : undefined}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
              <p className="mt-2 text-sm text-muted">{pkg.tagline}</p>
            </div>
            {pkg.highlight ? <Badge>Recommended</Badge> : null}
          </div>
          <PackagePricing pkg={pkg} />
        </CardHeader>

        {!compact ? (
          <CardContent className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Includes
            </p>
            <ul className="mt-3 space-y-2">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
              <p className="flex items-center gap-2 text-muted">
                <Clock className="h-4 w-4 text-brand" />
                <span>
                  <strong className="text-foreground">Delivery:</strong>{" "}
                  {pkg.delivery}
                </span>
              </p>
              <p className="flex items-center gap-2 text-muted">
                <Headphones className="h-4 w-4 text-brand" />
                <span>
                  <strong className="text-foreground">Support:</strong>{" "}
                  {pkg.support}
                </span>
              </p>
            </div>
          </CardContent>
        ) : (
          <CardContent className="flex-1">
            <div className="grid gap-2 text-sm text-muted">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand" />
                {pkg.delivery}
              </p>
              <p className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-brand" />
                {pkg.support}
              </p>
            </div>
          </CardContent>
        )}

        <CardFooter>
          <a
            href={whatsappPackageLink(pkg.name)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: pkg.highlight ? "default" : "secondary",
              className:
                "w-full transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]",
            })}
          >
            Get {pkg.name}
          </a>
        </CardFooter>
      </Card>
      </motion.div>
    </motion.div>
  );
}
