"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, HelpCircle, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_HASH, WHATSAPP_URL } from "@/lib/contact";
import { useViewportOnce } from "@/hooks/useViewportOnce";
import { motionTransition } from "@/lib/motion";

const examples = [
  "Nonprofits & NGOs",
  "Education & e-learning",
  "E-commerce brands",
  "Manufacturing",
  "Hospitality groups",
  "Custom startups",
];

export function AudienceNotListedSection() {
  const viewport = useViewportOnce();

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

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-6 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={motionTransition(0, 0.45)}
          className="mx-auto max-w-3xl text-center lg:max-w-4xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            <HelpCircle className="h-4 w-4" />
            Category not listed?
          </span>
          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
            We build for your business type too
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
            If your industry or use case is not shown above, that is okay. Tell
            us what you do, who you serve, and what you want your website to
            achieve — we will recommend the right stage and package.
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={motionTransition(0.06, 0.45)}
          className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2"
        >
          {examples.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-tint" />
              {item}
            </li>
          ))}
        </motion.ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={motionTransition(0.12, 0.45)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <Link
            href={CONTACT_HASH}
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "w-full border-white bg-white text-[#10062f] hover:bg-brand-tint sm:w-auto",
            })}
          >
            1 Click Connect
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: "ghost",
              size: "lg",
              className:
                "w-full border border-white/50 text-white hover:bg-white/10 hover:text-white sm:w-auto",
            })}
          >
            Chat on WhatsApp
          </a>
          <Link
            href="/packages"
            className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            Browse all packages
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
