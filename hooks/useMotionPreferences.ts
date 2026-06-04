"use client";

import { useReducedMotion as useFramerReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const MOBILE_QUERY = "(max-width: 767px)";

export function useReducedMotion() {
  return useFramerReducedMotion() ?? false;
}

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

export function useMotionPreferences() {
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  return { reducedMotion, isMobile };
}
