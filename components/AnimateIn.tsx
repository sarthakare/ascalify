"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { motionTransition, viewportOnce } from "@/lib/motion";

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
  return (
    <motion.div
      {...props}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants[variant]}
      transition={motionTransition(delay)}
    >
      {children}
    </motion.div>
  );
}
