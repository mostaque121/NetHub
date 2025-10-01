"use client";

import { useTheme } from "@/contexts/theme-context";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex cursor-pointer h-8 w-14 items-center rounded-full bg-secondary border border-border transition-all duration-300 hover:glow-cyan focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      aria-label="Toggle theme"
    >
      {/* Track glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Switch thumb */}
      <div
        className={`relative inline-block h-6 w-6 transform rounded-full bg-primary shadow-lg transition-all duration-300 ease-in-out glow-cyan ${
          theme === "light" ? "translate-x-7" : "translate-x-1"
        }`}
      >
        {/* Icon container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {theme === "dark" ? (
            <Moon className="h-3 w-3 text-primary-foreground" />
          ) : (
            <Sun className="h-3 w-3 text-primary-foreground" />
          )}
        </div>
      </div>

      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Moon
          className={`h-3 w-3 transition-opacity duration-300 ${
            theme === "dark" ? "opacity-0" : "opacity-40"
          }`}
        />
        <Sun
          className={`h-3 w-3 transition-opacity duration-300 ${
            theme === "light" ? "opacity-0" : "opacity-40"
          }`}
        />
      </div>
    </button>
  );
}
