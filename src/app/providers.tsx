"use client";

import { AnimatePresence } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Lenis from "lenis";
import { useEffect, useState, type ReactNode } from "react";

import { ScrollProgress } from "../components/shared/ScrollProgress";

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 30_000,
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    // Avoid setState-in-effect rule by scheduling to next frame
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);


  useEffect(() => {
    if (!mounted) return;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      // smoothTouch intentionally omitted
    });




    let raf = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [mounted]);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        <ScrollProgress />
        {children}
      </AnimatePresence>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

