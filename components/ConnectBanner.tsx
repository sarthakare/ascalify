"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_HASH } from "@/lib/contact";
import { useViewportOnce } from "@/hooks/useViewportOnce";
import { motionTransition } from "@/lib/motion";

export function ConnectBanner() {
  const viewport = useViewportOnce();

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
        viewport={viewport}
        transition={motionTransition(0, 0.7)}
        className="absolute right-0 top-0 hidden h-full w-[42%] bg-[#7c55f2] md:block [clip-path:polygon(52%_0,100%_0,100%_28%,74%_28%,100%_78%,100%_100%,55%_100%,20%_58%,58%_58%,20%_18%)]"
      />
      <div className="relative mx-auto max-w-6xl px-5 py-14 text-white sm:px-6 sm:py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={motionTransition(0, 0.45)}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={motionTransition(0, 0.35)}
            className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"
          >
            <MessageCircle className="h-4 w-4" />
            1 Click Connect
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={motionTransition(0.06, 0.4)}
            className="mt-6 text-3xl font-black leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Not sure which package fits your business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={motionTransition(0.1, 0.4)}
            className="mt-5 max-w-md text-sm leading-7 text-white/85 md:text-base"
          >
            Connect with Ascalify in one click. Share your goal, timeline, and
            budget, and we will guide you to the right website package.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={motionTransition(0.14, 0.4)}
          >
            <Link
              href={CONTACT_HASH}
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "mt-10 w-full border-white bg-white text-[#2f147d] hover:bg-brand-tint sm:w-auto",
              })}
            >
              Connect with Ascalify
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
