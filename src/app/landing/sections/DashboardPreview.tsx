"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, CheckCircle2, Flame, Timer } from "lucide-react";

export function DashboardPreview() {
  const reduced = useReducedMotion();

  return (
<section id="dashboard-preview" aria-label="Dashboard Preview" className="relative">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold">Dashboard Preview</h2>
          <p className="mt-2 text-sm text-[#94A3B8]">Streaks, countdowns, and analytics—cyber-fast.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: reduced ? 0 : 0.6, ease: "easeOut" }}
        className="mt-8 grid gap-4 md:grid-cols-3"
      >
        <div className="glass-card neon-border rounded-3xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[#94A3B8]">Study Streak</div>
              <div className="mt-1 text-3xl font-bold">14 days</div>
            </div>
            <Flame className="h-8 w-8 text-[#FF00C8]" />
          </div>
          <div className="mt-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="mt-4 flex items-center gap-2 text-xs text-[#94A3B8]">
            <CheckCircle2 className="h-4 w-4 text-[#00F5FF]" />
            Auto revision reminders
          </div>
        </div>

        <div className="glass-card neon-border rounded-3xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[#94A3B8]">Exam Countdown</div>
              <div className="mt-1 text-3xl font-bold">09:12:05</div>
            </div>
            <Timer className="h-8 w-8 text-[#00F5FF]" />
          </div>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full w-2/3 bg-gradient-to-r from-[#00F5FF] to-[#7C3AED]"
              initial={{ width: 0 }}
              animate={{ width: "66%" }}
              transition={{ duration: reduced ? 0 : 0.9, ease: "easeOut" }}
            />
          </div>
          <div className="mt-3 text-xs text-[#94A3B8]">Adaptive prep blocks based on PYQ gaps.</div>
        </div>

        <div className="glass-card neon-border rounded-3xl p-5 md:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-[#94A3B8]">Progress Analytics</div>
              <div className="mt-1 text-3xl font-bold">+18%</div>
            </div>
            <BarChart3 className="h-8 w-8 text-[#7C3AED]" />
          </div>
          <div className="mt-5 grid grid-cols-5 gap-2 items-end">
            {[12, 18, 14, 22, 28].map((h, i) => (
              <motion.div
                key={i}
                className="w-full rounded bg-gradient-to-t from-[#00F5FF] to-[#7C3AED]"
                initial={{ height: 0, opacity: 0.4 }}
                whileInView={{ height: h + 20, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : i * 0.07 }}
              />
            ))}
          </div>
          <div className="mt-4 text-xs text-[#94A3B8]">Heatmaps and revision tracker included.</div>
        </div>
      </motion.div>
    </section>
  );
}

