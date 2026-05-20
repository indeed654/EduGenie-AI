"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function useCounter(target: number, startWhenInView: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startWhenInView) return;
    let raf = 0;
    const start = performance.now();
    const duration = 900;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.floor(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [startWhenInView, target]);

  return value;
}

const cards = [
  { label: "Students", value: 50000, suffix: "+" },
  { label: "Notes", value: 10000, suffix: "+" },
  { label: "Success", value: 95, suffix: "%" },
  { label: "Subjects", value: 100, suffix: "+" },
];

export function FloatingStats() {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section ref={ref as any} className="relative">
      <div className="grid gap-4 md:grid-cols-4">
        {cards.map((c, idx) => {
          const v = useCounter(c.value, !!inView);
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 18, filter: inView ? "blur(0px)" : "blur(8px)" }}
              transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : idx * 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#00F5FF]/10 blur-2xl" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-[#FF00C8]/10 blur-2xl" />
              </div>
              <div className="relative">
                <div className="text-4xl font-bold tracking-tight">
                  {v}
                  <span className="text-[#94A3B8]">{c.suffix}</span>
                </div>
                <div className="mt-2 text-sm text-[#94A3B8]">{c.label}</div>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

