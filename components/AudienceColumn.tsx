"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type AudienceColumnProps = {
  priceBand: string;
  personas: string[];
};

export function AudienceColumn({ priceBand, personas }: AudienceColumnProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
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
