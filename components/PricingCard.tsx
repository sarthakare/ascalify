"use client";

import { motion } from "framer-motion";
import { Check, Clock, Headphones } from "lucide-react";
import type { Package } from "@/lib/packages";
import { whatsappPackageLink } from "@/lib/contact";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PricingCardProps = {
  pkg: Package;
  compact?: boolean;
};

export function PricingCard({ pkg, compact = false }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
    >
      <Card
        className={cn(
          "relative flex h-full flex-col overflow-hidden transition",
          pkg.highlight
            ? "border-brand bg-brand-tint shadow-xl shadow-brand/15"
            : "hover:border-brand/40 hover:shadow-lg",
        )}
      >
        {pkg.highlight ? (
          <div className="absolute inset-x-0 top-0 bg-brand px-6 py-2 text-center text-xs font-bold uppercase tracking-wider text-white">
            Most Popular
          </div>
        ) : null}
        <CardHeader className={pkg.highlight ? "pt-12" : undefined}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-foreground">{pkg.name}</h3>
              <p className="mt-2 text-sm text-muted">{pkg.tagline}</p>
            </div>
            {pkg.highlight ? <Badge>Recommended</Badge> : null}
          </div>
          <div className="pt-3">
            <p className="text-sm font-semibold text-muted">Starting at</p>
            <p className="text-4xl font-black text-brand">{pkg.priceLabel}</p>
          </div>
        </CardHeader>

        {!compact ? (
          <CardContent className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Includes
            </p>
            <ul className="mt-3 space-y-2">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
              <p className="flex items-center gap-2 text-muted">
                <Clock className="h-4 w-4 text-brand" />
                <span>
                  <strong className="text-foreground">Delivery:</strong>{" "}
                  {pkg.delivery}
                </span>
              </p>
              <p className="flex items-center gap-2 text-muted">
                <Headphones className="h-4 w-4 text-brand" />
                <span>
                  <strong className="text-foreground">Support:</strong>{" "}
                  {pkg.support}
                </span>
              </p>
            </div>
          </CardContent>
        ) : (
          <CardContent className="flex-1">
            <div className="grid gap-2 text-sm text-muted">
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand" />
                {pkg.delivery}
              </p>
              <p className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-brand" />
                {pkg.support}
              </p>
            </div>
          </CardContent>
        )}

        <CardFooter>
          <a
            href={whatsappPackageLink(pkg.name)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              variant: pkg.highlight ? "default" : "secondary",
              className: "w-full",
            })}
          >
            Get {pkg.name}
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
