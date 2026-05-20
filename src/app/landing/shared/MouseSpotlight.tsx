"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseSpotlight({ enabled }: { enabled: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 30, stiffness: 300, mass: 0.5 });
  const sy = useSpring(y, { damping: 30, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background: "transparent",
      }}
    >
      <motion.div
        className="absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,245,255,0.28),transparent_60%)] blur-2xl"
        style={{ x: sx, y: sy }}
      />
      <motion.div
        className="absolute left-0 top-0 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,200,0.18),transparent_60%)] blur-2xl"
        style={{ x: sx, y: sy }}
      />
    </motion.div>
  );
}

