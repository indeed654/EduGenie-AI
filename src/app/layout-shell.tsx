"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import { Providers } from "./providers";

export default function LayoutShell({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Respect system dark mode by default; allow CSS-based theming transitions.
  const themeClass = useMemo(() => {
    if (!mounted) return "";
    return "dark";
  }, [mounted]);

  return (
    <div className={themeClass}>
      <Providers>{children}</Providers>
    </div>
  );
}

