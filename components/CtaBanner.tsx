"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CTA_TAGLINE, SALES_MESSAGE } from "@/lib/packages";
import { buttonVariants } from "@/components/ui/button";
import { motionTransition, viewportOnce } from "@/lib/motion";

type CtaBannerProps = {
  showSalesMessage?: boolean;
};

export function CtaBanner({ showSalesMessage = true }: CtaBannerProps) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-6xl px-5 py-14 text-center text-white sm:px-6">
        {showSalesMessage ? (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0)}
            className="mx-auto max-w-2xl text-sm leading-7 text-white/90 md:text-base"
          >
            {SALES_MESSAGE}
          </motion.p>
        ) : null}
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition(showSalesMessage ? 0.06 : 0)}
          className="mt-6 text-2xl font-bold md:text-3xl"
        >
          {CTA_TAGLINE}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition(showSalesMessage ? 0.12 : 0.06)}
          className="mt-8 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/packages"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className: "border-white bg-white text-brand hover:bg-brand-tint",
            })}
          >
            View All Packages
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className:
                "border border-white/60 text-white hover:bg-white/10 hover:text-white",
            })}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
