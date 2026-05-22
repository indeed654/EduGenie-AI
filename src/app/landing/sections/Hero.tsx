"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck, LineChart, Timer } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const FloatingPdfCards = dynamic(() => import("../shared/FloatingPdfCards"), {
  ssr: false,
});

export function LandingHero() {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section className="relative">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <div className="relative grid gap-10 pt-20 sm:pt-28 lg:grid-cols-[1fr_420px] lg:items-start">
          {/* LEFT: Product-grade hero */}
          <div className="max-w-[680px]">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduced ? 0 : 0.35, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,0,0,0.06)] bg-white/60 px-4 py-2 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur">
                <BadgeCheck className="h-4 w-4 text-[#4F46E5]" />
                <span className="text-xs sm:text-sm text-[#6B7280]">
                  Learning infrastructure built for engineers
                </span>
              </div>

              <h1 className="mt-7 text-[64px] leading-[1.02] font-semibold tracking-[-0.03em] sm:text-[72px]">
                Learn faster.
                <br />
                Revise smarter.
              </h1>

              <p className="mt-5 text-[16px] leading-relaxed text-[#6B7280] max-w-[560px]">
                AI-powered notes, PYQs, and syllabus tracking—organized for real study
                systems. Built to keep you consistent, confident, and exam-ready.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.a
                  whileHover={!reduced ? { y: -1 } : undefined}
                  whileTap={!reduced ? { y: 0, scale: 0.99 } : undefined}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[14px] bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1F2937] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
                  href="/signup"
                  aria-label="Start Learning Free"
                >
                  Start Learning Free
                  <ArrowRight className="h-4 w-4" />
                </motion.a>

                <motion.a
                  whileHover={!reduced ? { y: -1 } : undefined}
                  whileTap={!reduced ? { y: 0, scale: 0.99 } : undefined}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-[14px] border border-[#E5E7EB] bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition-colors hover:bg-[#F3F4F6] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5]"
href="/dashboard"
                  aria-label="View demo"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("dashboard-preview")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                >
                  View Demo
                  <ArrowRight className="h-4 w-4" />
                </motion.a>
              </div>

              {/* Trust metrics */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    icon: LineChart,
                    label: "52,814",
                    caption: "Students learning",
                  },
                  {
                    icon: Timer,
                    label: "94.3%",
                    caption: "Semester confidence",
                  },
                  {
                    icon: BadgeCheck,
                    label: "1.2M",
                    caption: "PYQs solved",
                  },
                ].map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <motion.div
                      key={m.caption}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: mounted ? 1 : 0, y: 0 }}
                      transition={{
                        duration: reduced ? 0 : 0.28,
                        delay: reduced ? 0 : idx * 0.06,
                        ease: [0.2, 0.8, 0.2, 1],
                      }}
                      className="rounded-[20px] border border-[rgba(0,0,0,0.06)] bg-white px-5 py-4 shadow-[0_2px_10px_rgba(0,0,0,0.04)]"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-[#4F46E5]" />
                        <div className="text-[22px] font-semibold tracking-[-0.01em] text-[#111827]">
                          {m.label}
                        </div>
                      </div>
                      <div className="mt-1 text-[14px] text-[#6B7280] leading-snug">
                        {m.caption}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: dashboard preview mock */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[24px] bg-gradient-to-b from-[#4F46E5]/10 to-transparent blur-[18px] pointer-events-none" />
            <div className="rounded-[24px] border border-[#E5E7EB] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
                <div className="text-[14px] font-medium text-[#6B7280]">Today&apos;s study system</div>
                <div className="text-[12px] font-semibold text-[#111827]">Exam in 12 days</div>
              </div>
              <div className="p-4">
                <FloatingPdfCards />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

