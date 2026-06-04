"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AnimateIn } from "@/components/AnimateIn";
import { motionTransition, viewportOnce } from "@/lib/motion";

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
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <AnimateIn variant="fadeUp">
              <Badge variant="secondary">Our clients</Badge>
              <h2 className="mt-4 text-2xl font-bold text-foreground md:text-4xl">
                Built for local brands, service teams, startups, and enterprises.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted md:text-base">
                From clinics and cafes to logistics, coaching, and agencies — we
                build websites that help businesses look professional and grow
                online.
              </p>
            </AnimateIn>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {outcomes.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={motionTransition(index * 0.05, 0.35)}
                >
                  <Card className="p-4">
                    <p className="text-xl font-black text-brand">{item.value}</p>
                    <p className="mt-1 text-xs text-muted">{item.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={viewportOnce}
            transition={motionTransition(0.08, 0.45)}
            className="overflow-hidden rounded-3xl border border-border bg-white p-3 shadow-lg shadow-brand/10 sm:p-4"
          >
            <Image
              src="/ascalify-client-logos.png"
              alt="Ascalify client logos including Aarogya Clinic, UrbanBite Cafe, PrimeFit Studio, LegalNest Advisors, HomeKey Realty, SwiftLogix, BrightPath Coaching, and MarketFlow Agency"
              width={1200}
              height={600}
              className="h-auto w-full rounded-2xl object-contain"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
