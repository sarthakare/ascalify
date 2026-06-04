"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_HASH } from "@/lib/contact";

export function PackageFitSection() {
  return (
    <section className="relative overflow-hidden bg-[#10062f] text-white">
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 hidden w-1/2 bg-[#2f147d] lg:block [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
      />
      <div
        aria-hidden
        className="absolute right-0 top-0 hidden h-full w-[48%] bg-[#6d3ff0] opacity-80 lg:block [clip-path:polygon(66%_0,100%_0,100%_42%,76%_42%,100%_100%,58%_100%,20%_58%,52%_58%,20%_18%)]"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/60">
            Smart package guidance
          </p>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Not sure which website package to choose?
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/75 md:text-base">
            Tell us your business type, goals, timeline, and budget. We will
            help you choose the right Ascalify package before you spend a
            single dollar.
          </p>
          <Link
            href={CONTACT_HASH}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "mt-9 w-full border-white bg-white text-[#10062f] hover:bg-brand-tint sm:w-auto",
            })}
          >
            Find My Package
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-4xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur">
            <Image
              src="/ascalify-package-guide.png"
              alt="Ascalify package guidance preview"
              width={1024}
              height={768}
              className="h-auto w-full rounded-3xl object-cover"
              sizes="(min-width: 1024px) 600px, 100vw"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
