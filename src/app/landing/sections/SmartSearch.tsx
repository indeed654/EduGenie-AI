"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Search, Mic, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

export function SmartSearch() {
  const reduced = useReducedMotion();
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    const base = [
      "PYQ for Semester 3",
      "Data Structures - Notes",
      "Physics Unit Test",
      "Revision Plan for CS",
    ];
    if (!query.trim()) return base;
    return base.map((s) => `${s}`);
  }, [query]);

  return (
    <section aria-label="Smart Search" className="relative">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-4xl font-semibold">Search like an AI</h2>
          <p className="mt-2 text-sm text-[#94A3B8]">
            Find notes, PYQs, and revision plans instantly.
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: reduced ? 0 : 0.6, ease: "easeOut" }}
        className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
      >
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: ‘Semester 2 CS PYQ’"
              className="w-full rounded-2xl border border-white/10 bg-black/20 px-12 py-3 text-sm outline-none placeholder:text-[#94A3B8]"
              aria-label="Search notes"
            />
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#7C3AED] via-[#00F5FF] to-[#FF00C8] px-5 py-3 text-sm font-semibold text-[#050816] shadow-[0_0_42px_rgba(124,58,237,0.5)]"
              type="button"
              aria-label="Search"
              onClick={() => {
                const q = query.trim();
                window.location.href = `/materials${q ? `?query=${encodeURIComponent(q)}` : ""}`;
              }}
            >
              <Sparkles className="h-4 w-4" />
              Search
            </motion.button>

            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              type="button"
              aria-label="Voice search"
              onClick={() => {
                // Demo: bring user to search results with current query.
                const q = query.trim();
                window.location.href = `/materials${q ? `?query=${encodeURIComponent(q)}` : ""}`;
              }}
            >
              <Mic className="h-4 w-4 text-[#00F5FF]" />
            </motion.button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <motion.button
              key={s}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.99 }}
              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-[#94A3B8]"
              type="button"
              onClick={() => setQuery(s)}
            >
              {s}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

