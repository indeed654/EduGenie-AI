"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is EduGenie AI actually useful or just UI?",

    a: "Useful. You get AI-structured notes, PYQ drill flow, revision planning, and analytics that map to what you’re weak at.",
  },
  {
    q: "Does it work for multiple subjects?",
    a: "Yes—notes, PYQs, and revision tracking are designed to scale across subjects with consistent study mechanics.",
  },
  {
    q: "Will animations hurt performance?",
    a: "No. We respect reduced motion and lazy-load heavy visual layers like particle canvases.",
  },
];

export function FAQ() {
  const reduced = useReducedMotion();
  const [open, setOpen] = useState<number>(0);

  return (
    <section aria-label="FAQ">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold">FAQ</h2>
          <p className="mt-2 text-sm text-[#94A3B8]">Straight answers, no filler.</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {faqs.map((f, idx) => {
          const isOpen = open === idx;
          return (
            <motion.button
              key={f.q}
              type="button"
              onClick={() => setOpen(isOpen ? -1 : idx)}
              initial={false}
              className="glass-card neon-border rounded-3xl p-5 text-left"
              whileHover={{ y: -2, scale: 1.01 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">{f.q}</div>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: reduced ? 0 : 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm text-[#94A3B8] leading-relaxed">{f.a}</p>
                  </motion.div>
                </div>
                <ChevronDown className={`mt-1 h-5 w-5 text-[#00F5FF] transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
              </div>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}

