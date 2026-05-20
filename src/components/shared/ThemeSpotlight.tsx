"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function ThemeSpotlight({ enabled }: { enabled: boolean }) {
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
    <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0">
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(0,245,255,0.12), transparent 55%)",
          opacity: 1,
        }}
      />

      <motion.div
        className="absolute left-0 top-0"
        style={{
          x: sx,
          y: sy,
          width: 520,
          height: 520,
          transform: "translate(-50%, -50%)",
          borderRadius: 9999,
          background: "radial-gradient(circle at center, rgba(0,245,255,0.22), transparent 55%)",
          filter: "blur(10px)",
        }}
      />
    </motion.div>
  );
}

