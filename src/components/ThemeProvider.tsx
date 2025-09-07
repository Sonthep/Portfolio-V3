"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== 'undefined') {
      // Check for saved theme preference or default to dark
      const savedTheme = localStorage.getItem("theme") as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    // Update document class and save preference
    if (typeof window !== 'undefined') {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Always provide the context, even when not mounted
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div suppressHydrationWarning>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Return default theme in case of error to prevent crash
    if (typeof window !== 'undefined') {
      console.warn("useTheme must be used within a ThemeProvider. Using default theme.");
    }
    return {
      theme: "dark" as Theme,
      toggleTheme: () => {}
    };
  }
  return context;
} 