"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { motionTransition, viewportOnce } from "@/lib/motion";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={motionTransition(index * 0.04, 0.35)}
        >
          <Card className="overflow-hidden transition hover:border-brand/30">
            <details className="group p-5">
              <summary className="cursor-pointer list-none text-base font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="text-brand transition duration-200 group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
            </details>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
