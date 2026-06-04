"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Stage } from "@/lib/packages";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

type StageCardProps = {
  stage: Stage;
};

export function StageCard({ stage }: StageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
    >
      <Card className="flex h-full flex-col transition hover:border-brand/40 hover:shadow-lg">
        <CardHeader>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {stage.number}
          </span>
          <Badge variant="secondary" className="mt-4">
            Stage {stage.number}
          </Badge>
          <h3 className="text-xl font-bold text-foreground">{stage.title}</h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm leading-6 text-muted">{stage.subtitle}</p>
        </CardContent>
        <CardFooter>
          <Link
            href={stage.href}
            className="inline-flex items-center text-sm font-semibold text-brand hover:text-brand-dark"
          >
            View packages
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
