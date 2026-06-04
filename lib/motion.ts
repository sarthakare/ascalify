export const viewportOnce = { once: true, amount: 0.3 } as const;

export function motionTransition(delay = 0, duration = 0.4) {
  return { duration, delay, ease: "easeOut" as const };
}
