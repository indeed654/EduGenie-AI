"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aarav",
    role: "CS Student",
    text: "The PYQ turbo workflow is unreal. I stopped panic-revising and started controlling the timeline.",
  },
  {
    name: "Meera",
    role: "Physics Learner",
    text: "The cyberpunk UI feels premium, but the real win is the clarity: notes + solutions in minutes.",
  },
  {
    name: "Zayn",
    role: "GATE Aspirant",
    text: "Streak tracking + exam countdown keeps me focused. Heatmap revisions feel like a cheat code.",
  },
];

export function Testimonials() {
  const reduced = useReducedMotion();

  return (
    <section aria-label="Testimonials">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold">Loved by learners</h2>
          <p className="mt-2 text-sm text-[#94A3B8]">Premium feel. Real study results.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: reduced ? 0 : 0.6, ease: "easeOut", delay: reduced ? 0 : idx * 0.08 }}
            className="glass-card neon-border rounded-3xl p-6"
          >
            <div className="flex items-center gap-2 text-[#00F5FF]">
              <Quote className="h-5 w-5" />
              <span className="text-xs font-semibold">Verified</span>
            </div>
            <p className="mt-4 text-sm text-[#F8FAFC] leading-relaxed">“{t.text}”</p>
            <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="mt-4">
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-[#94A3B8]">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

