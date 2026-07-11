"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark and light mode"
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 dark:border-ivory/10 text-ink dark:text-ivory hover:border-gold/60 transition-colors"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
