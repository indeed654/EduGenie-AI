"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pdfCards = [
  { id: 1, title: "AI Notes", subtitle: "Auto-structured", x: "-10%", y: "-5%" },
  { id: 2, title: "PYQ Turbo", subtitle: "Smart drill", x: "6%", y: "-2%" },
  { id: 3, title: "Revision Planner", subtitle: "Streak-ready", x: "-2%", y: "8%" },
];

export default function FloatingPdfCards() {
  return (
    <div className="relative h-[280px] w-full">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/10 blur-2xl" />
        <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00F5FF]/10 blur-2xl" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[240px] w-full -translate-x-1/2 -translate-y-1/2">
        {pdfCards.map((c, idx) => (
          <motion.div
            key={c.id}
            className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-[22px] border border-white/10 bg-white/5 p-5 backdrop-blur shadow-[0_0_40px_rgba(124,58,237,0.15)]"
            style={{ transform: `translate(-50%, -50%) translate(${c.x}, ${c.y}) rotate(${idx * 3 - 3}deg)` }}
            initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
            whileHover={{ y: -8, rotate: 0, scale: 1.02 }}
          >
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-xl border border-white/10 bg-gradient-to-b from-[#7C3AED]/30 to-[#00F5FF]/10">
                <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(0,245,255,0.5),transparent_55%)]" />
              </div>
              <div>
                <div className="text-sm font-semibold">{c.title}</div>
                <div className="text-xs text-[#94A3B8]">{c.subtitle}</div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-[10px] w-full rounded bg-white/10" />
              <div className="h-[10px] w-11/12 rounded bg-white/10" />
              <div className="h-[10px] w-9/12 rounded bg-white/10" />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[11px] text-[#00F5FF]">Preview</span>
              <motion.span
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/5"
                whileHover={{ boxShadow: "0 0 18px rgba(0,245,255,0.45)" }}
              >
                <span className="text-xs text-[#F8FAFC]">↗</span>
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* fallback decorative PDF placeholder */}
      <div className="pointer-events-none absolute bottom-2 left-1/2 h-20 w-[540px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00F5FF]/10 via-[#7C3AED]/10 to-[#FF00C8]/10 blur-2xl" />
    </div>
  );
}

