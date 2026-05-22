"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Code2, FileText } from "lucide-react";

const materials = [
  { title: "Physics PYQ Set", semester: "Semester 5", tag: "Physics", icon: BookOpen },
  { title: "Data Structures", semester: "Semester 2", tag: "CS", icon: Code2 },
  { title: "Organic Chemistry", semester: "Semester 3", tag: "Chem", icon: FileText },
  { title: "Math Short Notes", semester: "Semester 1", tag: "Math", icon: BookOpen },
  { title: "Mock Paper: Unit Tests", semester: "Semester 4", tag: "CS", icon: Code2 },
];

export function TrendingMaterials() {
  const reduced = useReducedMotion();

  return (
    <section aria-label="Trending Materials">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-semibold">Trending materials</h2>
          <p className="mt-2 text-sm text-[#94A3B8]">Horizontal scroll, glass cards, premium hover.</p>
        </div>
      </div>

      <div className="mt-8 overflow-x-auto pb-2">
        <div className="flex gap-4">
          {materials.map((m, idx) => {
            const Icon = m.icon;
            // map each title to a stable slug route
            const slug =
              m.title === "Physics PYQ Set"
                ? "physics-pyq"
                : m.title === "Data Structures"
                  ? "data-structures"
                  : m.title === "Organic Chemistry"
                    ? "organic-chemistry"
                    : m.title === "Math Short Notes"
                      ? "math-shortnotes"
                      : "mock-tests";

            return (
              <motion.a
                key={m.title}
                href={`/materials/${slug}`}
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: reduced ? 0 : 0.25, delay: idx * 0.01 }}
                className="group relative w-[280px] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_10%,rgba(0,245,255,0.22),transparent_60%),radial-gradient(circle_at_80%_30%,rgba(255,0,200,0.18),transparent_55%)]" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/20">
                      <Icon className="h-5 w-5 text-[#00F5FF]" />
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#94A3B8]">
                      {m.tag}
                    </span>
                  </div>
                  <div className="mt-4 text-lg font-semibold leading-tight">{m.title}</div>
                  <div className="mt-2 text-sm text-[#94A3B8]">{m.semester}</div>

                  <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-[#00F5FF]">Open</span>
                    <span className="text-xs text-[#94A3B8]">Hover expands</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

