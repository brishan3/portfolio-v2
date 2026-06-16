"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const syncThemeState = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    setMounted(true);
    syncThemeState();

    const observer = new MutationObserver(syncThemeState);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex h-10 w-16 shrink-0 items-center rounded-full border bg-card/80 p-1 text-primary shadow-sm shadow-clay/10 backdrop-blur transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun className="absolute left-2.5 size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
      <Moon className="absolute right-2.5 size-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
      <motion.span
        className="relative z-10 grid size-8 place-items-center rounded-full bg-primary text-primary-foreground shadow-md shadow-moss/20"
        initial={false}
        animate={{ x: mounted && isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 420, damping: 30 }}
      >
        {mounted && isDark ? (
          <Moon className="size-4" />
        ) : (
          <Sun className="size-4" />
        )}
      </motion.span>
    </button>
  );
}
