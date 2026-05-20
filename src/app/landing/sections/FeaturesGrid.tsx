"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "AI Notes that feel engineered",
    desc: "Turn chapters into structured notes with a premium cyber workflow.",
    icon: Sparkles,
  },
  {
    title: "PYQ Turbo drill flow",
    desc: "Adaptive practice that targets weak concepts—not random repeats.",
    icon: ShieldCheck,
  },
  {
    title: "Streaks + revision analytics",
    desc: "Track what matters, see progress, and stay locked-in with streak mechanics.",
    icon: GraduationCap,
  },
];

export function FeaturesGrid() {
  const reduced = useReducedMotion();

  return (
    <section aria-label="Features">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold">A study OS built for momentum</h2>
          <p className="mt-2 text-sm text-[#94A3B8]">
            Premium UX + AI-driven workflows.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {features.map((f, idx) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                duration: reduced ? 0 : 0.65,
                delay: reduced ? 0 : idx * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card neon-border rounded-3xl p-6"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                  <Icon className="h-5 w-5 text-[#00F5FF]" />
                </span>
                <span className="text-xs text-[#94A3B8]">Premium</span>
              </div>

              <div className="mt-5">
                <div className="font-heading text-lg font-semibold">{f.title}</div>
                <div className="mt-2 text-sm text-[#94A3B8]">{f.desc}</div>
              </div>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <div className="mt-4 flex items-center justify-between text-xs text-[#94A3B8]">
                <span>AI-driven</span>
                <span className="text-[#00F5FF]">↗</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

