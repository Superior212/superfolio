"use client";

import { useTheme } from "@/components/ThemeProvider";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useState, useEffect } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-4.5 rounded-full bg-gradient-to-r from-sky-200 to-indigo-200 dark:from-sky-800 dark:to-indigo-800 transition-all duration-300"
      aria-label="Toggle theme">
      <div className="absolute inset-0.5 rounded-full bg-white dark:bg-neutral-900 transition-all duration-300"></div>
      <div
        className={`absolute w-3.5 h-3.5 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center transition-all duration-300 transform ${
          theme === "dark"
            ? "translate-x-[8px] shadow-lg"
            : "translate-x-[-8px] shadow-md"
        }`}>
        {theme === "dark" ? (
          <IconSun className="h-2.5 w-2.5 text-white" />
        ) : (
          <IconMoon className="h-2.5 w-2.5 text-white" />
        )}
      </div>
    </button>
  );
}
