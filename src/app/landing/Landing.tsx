"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LandingHero } from "@/app/landing/sections/Hero";
import { FloatingStats } from "@/app/landing/sections/FloatingStats";
import { FeaturesGrid } from "@/app/landing/sections/FeaturesGrid";
import { TrendingMaterials } from "@/app/landing/sections/TrendingMaterials";
import { SmartSearch } from "@/app/landing/sections/SmartSearch";
import { DashboardPreview } from "@/app/landing/sections/DashboardPreview";
import { Testimonials } from "@/app/landing/sections/Testimonials";
import { FAQ } from "@/app/landing/sections/FAQ";
import { LandingFooter } from "@/app/landing/sections/Footer";
import { LoadingSplash } from "@/app/landing/sections/LoadingSplash";

export default function Landing() {
  const reduced = useReducedMotion();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setShowSplash(false), 1200);
    return () => window.clearTimeout(t);
  }, []);

  const variants = useMemo(
    () => ({
      container: {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15,
          },
        },
      },
      item: {
        hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: reduced ? 0 : 0.55, ease: "easeOut" as const },
        },
      },

    }),
    [reduced]
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <LoadingSplash open={showSplash} />

      {/* animated grid background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="cyber-grid" />
        <div className="cyber-scan" />
      </div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        className="relative"
      >
        <motion.section variants={variants.item}>
          <LandingHero />
        </motion.section>

        <motion.section variants={variants.item} className="px-4 sm:px-6 lg:px-10">
          <FloatingStats />
        </motion.section>

        <motion.section variants={variants.item} className="px-4 sm:px-6 lg:px-10">
          <FeaturesGrid />
        </motion.section>

        <motion.section variants={variants.item} className="px-4 sm:px-6 lg:px-10">
          <TrendingMaterials />
        </motion.section>

        <motion.section variants={variants.item} className="px-4 sm:px-6 lg:px-10">
          <SmartSearch />
        </motion.section>

        <motion.section variants={variants.item} className="px-4 sm:px-6 lg:px-10">
          <DashboardPreview />
        </motion.section>

        <motion.section variants={variants.item} className="px-4 sm:px-6 lg:px-10">
          <Testimonials />
        </motion.section>

        <motion.section variants={variants.item} className="px-4 sm:px-6 lg:px-10">
          <FAQ />
        </motion.section>

        <motion.section variants={variants.item}>
          <LandingFooter />
        </motion.section>
      </motion.div>
    </div>
  );
}
