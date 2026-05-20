"use client";

import { AnimatePresence, motion } from "framer-motion";

export function LoadingSplash({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          aria-label="Loading"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#050816]"
        >
          <div className="relative">
            <motion.div
              className="mx-auto h-20 w-20 rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(0,245,255,0.18)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, ease: "linear" }}
            />
            <div className="mt-4 text-center text-sm text-[#94A3B8]">
              Initializing cyber study core…
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

