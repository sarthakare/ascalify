"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_HASH } from "@/lib/contact";

export function ConnectBanner() {
  return (
    <section className="relative overflow-hidden bg-[#673de6]">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#2f147d] md:block [clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]"
      />
      <motion.div
        aria-hidden
        initial={{ x: 60, opacity: 0.5 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute right-0 top-0 hidden h-full w-[42%] bg-[#7c55f2] md:block [clip-path:polygon(52%_0,100%_0,100%_28%,74%_28%,100%_78%,100%_100%,55%_100%,20%_58%,58%_58%,20%_18%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 text-white md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]">
            <MessageCircle className="h-4 w-4" />
            1 Click Connect
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Not sure which package fits your business?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/85 md:text-base">
            Connect with Ascalify in one click. Share your goal, timeline, and
            budget, and we will guide you to the right website package.
          </p>
          <Link
            href={CONTACT_HASH}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "mt-10 border-white bg-white text-[#2f147d] hover:bg-brand-tint",
            })}
          >
            Connect with Ascalify
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
