"use client";

import { motion } from "framer-motion";
import { useViewportOnce } from "@/hooks/useViewportOnce";
import { motionTransition } from "@/lib/motion";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
  animationOffset?: number;
};

export function FaqList({ items, animationOffset = 0 }: FaqListProps) {
  const viewport = useViewportOnce();

  return (
    <div className="mt-8 space-y-4">
      {items.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={motionTransition(
            animationOffset * 0.04 + index * 0.05,
            0.35,
          )}
        >
          <details className="group rounded-2xl border border-border border-l-4 border-l-brand bg-white p-5 shadow-sm transition hover:border-brand/35 hover:shadow-md hover:shadow-brand/5 sm:p-6">
            <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-tint text-lg font-bold text-brand transition duration-200 group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
          </details>
        </motion.div>
      ))}
    </div>
  );
}
