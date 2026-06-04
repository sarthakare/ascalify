"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import { motionTransition, viewportOnce } from "@/lib/motion";

type AudienceColumnProps = {
  priceBand: string;
  personas: string[];
  animationIndex?: number;
};

export function AudienceColumn({
  priceBand,
  personas,
  animationIndex = 0,
}: AudienceColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={motionTransition(animationIndex * 0.06, 0.4)}
      whileHover={{ y: -3 }}
    >
      <Card className="h-full transition hover:border-brand/40 hover:shadow-lg">
        <CardHeader>
          <Users className="h-6 w-6 text-brand" />
          <p className="text-lg font-bold text-brand">{priceBand}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {personas.map((persona) => (
              <li key={persona} className="text-sm text-foreground">
                {persona}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
