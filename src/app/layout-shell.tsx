"use client";

import { useEffect, useState, type ReactNode } from "react";
import { ThemeSpotlight } from "../components/shared/ThemeSpotlight";

export default function LayoutShell({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);


  return (
    <div className="relative min-h-screen">
      <ThemeSpotlight enabled={mounted} />
      {children}
    </div>
  );
}

