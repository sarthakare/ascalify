"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Free package guidance",
  "Clear delivery timelines",
  "Maintenance included",
  "Scale when ready",
];

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-tint px-4 py-3 text-sm font-semibold text-foreground"
          >
            <CheckCircle2 className="h-4 w-4 text-brand" />
            {item}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
