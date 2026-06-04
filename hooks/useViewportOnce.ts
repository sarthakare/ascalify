"use client";

import { useIsMobile } from "@/hooks/useMotionPreferences";
import { getViewportOnce } from "@/lib/motion";

export function useViewportOnce() {
  const isMobile = useIsMobile();
  return getViewportOnce(isMobile);
}
