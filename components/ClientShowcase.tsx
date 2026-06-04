"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const clientNames = [
  "Aarogya Clinic",
  "UrbanBite Cafe",
  "PrimeFit Studio",
  "LegalNest Advisors",
  "HomeKey Realty",
  "SwiftLogix",
  "BrightPath Coaching",
  "MarketFlow Agency",
];

const outcomes = [
  {
    value: "3-5 days",
    label: "starter launch window",
  },
  {
    value: "9 plans",
    label: "from basic sites to platforms",
  },
  {
    value: "3+ years",
    label: "enterprise support options",
  },
];

export function ClientShowcase() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Badge variant="secondary">Our clients</Badge>
            <h2 className="mt-4 text-2xl font-bold text-foreground md:text-4xl">
              Built for local brands, service teams, startups, and enterprises.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted md:text-base">
              Ascalify helps clients move from a simple online presence to
              scalable digital platforms. Add your real client names or logos
              here as your portfolio grows.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {outcomes.map((item) => (
                <Card key={item.label} className="p-4">
                  <p className="text-xl font-black text-brand">{item.value}</p>
                  <p className="mt-1 text-xs text-muted">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {clientNames.map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className="flex min-h-24 items-center justify-center rounded-2xl border border-border bg-surface-alt px-4 text-center text-sm font-bold text-foreground shadow-sm"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
