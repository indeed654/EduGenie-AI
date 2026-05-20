"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FloatingPdfCards = dynamic(
  () => import("../shared/FloatingPdfCards"),
  { ssr: false }
);
const MouseSpotlight = dynamic(
  () => import("../shared/MouseSpotlight"),
  { ssr: false }
);

export function LandingHero() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative">
      <MouseSpotlight enabled={!reduced && mounted} />

      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="relative pt-20 sm:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 22, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: reduced ? 0 : 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
              <span className="flex h-2 w-2">
                <span className="relative h-2 w-2 rounded-full bg-[#00F5FF] shadow-[0_0_18px_#00F5FF]" />
              </span>
              <span className="text-xs sm:text-sm text-[#94A3B8]">
                Premium AI study OS • Cyberpunk academic suite
              </span>
            </div>

            <h1 className="mt-6 text-7xl font-bold tracking-tight sm:text-7xl">
              <span className="bg-gradient-to-r from-[#F8FAFC] via-[#00F5FF] to-[#FF00C8] bg-clip-text text-transparent">
                Study Smarter.
              </span>{" "}
              Score Better.
              <br />
              Learn Faster.
            </h1>

            <p className="mt-5 max-w-2xl text-sm sm:text-base text-[#94A3B8]">
              AI-powered notes, PYQs, syllabus tracking and exam preparation.
              Built for streaks, insights, and confidence.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold backdrop-blur shadow-[0_0_30px_rgba(124,58,237,0.25)]"
                href="#explore"
                aria-label="Explore Notes"
              >
                <Sparkles className="h-4 w-4 text-[#00F5FF] drop-shadow-[0_0_12px_#00F5FF]" />
                Explore Notes
                <ArrowRight className="h-4 w-4 opacity-80 transition group-hover:translate-x-0.5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#00F5FF] to-[#FF00C8] px-6 py-3 text-sm font-semibold text-[#050816] shadow-[0_0_42px_rgba(124,58,237,0.5)]"
                href="/dashboard"
                aria-label="Start Learning"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </motion.a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                { label: "AI Notes", sub: "Auto-structured" },
                { label: "PYQ Turbo", sub: "Smart drill" },
                { label: "Revision Planner", sub: "Streak-ready" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: reduced ? 0 : 0.5,
                    delay: reduced ? 0 : 0.1 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="text-sm font-semibold">{item.label}</div>
                  <div className="mt-1 text-xs text-[#94A3B8]">{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative mt-12">
            <FloatingPdfCards />
          </div>
        </div>
      </div>
    </section>
  );
}

