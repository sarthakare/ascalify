import type { Transition, ViewportOptions } from "framer-motion";

export const viewportOnce: ViewportOptions = {
  once: true,
  amount: 0.3,
};

export const viewportOnceMobile: ViewportOptions = {
  once: true,
  amount: 0.12,
  margin: "0px 0px -40px 0px",
};

export function getViewportOnce(isMobile = false): ViewportOptions {
  return isMobile ? viewportOnceMobile : viewportOnce;
}

export function motionTransition(delay = 0, duration = 0.4): Transition {
  return { duration, delay, ease: "easeOut" };
}

export function reducedMotionTransition(delay = 0): Transition {
  return { duration: 0.01, delay };
}

export const tapOrHoverVariantProps = {
  whileHover: "hover" as const,
  whileTap: "hover" as const,
};
