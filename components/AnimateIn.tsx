"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useMotionPreferences } from "@/hooks/useMotionPreferences";
import {
  getViewportOnce,
  motionTransition,
  reducedMotionTransition,
} from "@/lib/motion";

type AnimateVariant = "fadeUp" | "fadeIn" | "slideLeft" | "scaleIn";

const variants: Record<
  AnimateVariant,
  { hidden: Record<string, number>; visible: Record<string, number> }
> = {
  fadeUp: { hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0 } },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1 },
  },
};

const reducedVariants: Record<
  AnimateVariant,
  { hidden: Record<string, number>; visible: Record<string, number> }
> = {
  fadeUp: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  fadeIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  slideLeft: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scaleIn: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

type AnimateInProps = HTMLMotionProps<"div"> & {
  variant?: AnimateVariant;
  delay?: number;
};

export function AnimateIn({
  variant = "fadeUp",
  delay = 0,
  children,
  className,
  ...props
}: AnimateInProps) {
  const { reducedMotion, isMobile } = useMotionPreferences();

  return (
    <motion.div
      {...props}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={getViewportOnce(isMobile)}
      variants={reducedMotion ? reducedVariants[variant] : variants[variant]}
      transition={
        reducedMotion
          ? reducedMotionTransition(delay)
          : motionTransition(delay)
      }
    >
      {children}
    </motion.div>
  );
}
