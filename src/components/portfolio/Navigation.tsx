"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", "stack", "experience", "projects", "certifications", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    if (pathname === "/") {
      // On homepage, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to homepage then scroll
      router.push(`/#${sectionId}`);
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  // Effect to handle scroll on initial load if URL has hash
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <nav className="fixed top-0 md:top-4 w-full z-50">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-600 to-violet-600 dark:from-indigo-400 dark:to-violet-400"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="md:max-w-fit md:border-2 md:rounded-full mx-auto px-7 py-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg">
        <div className="flex justify-between items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent"
          >
            SS
          </motion.div>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {["Overview", "Stack", "Experience", "Projects", "Certifications", "Contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => handleClick(e, item.toLowerCase())}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-all duration-300 text-sm font-medium cursor-pointer
                    ${activeSection === item.toLowerCase() ? 'text-indigo-600 dark:text-indigo-400' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-600 dark:bg-indigo-400"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              initial={false}
              animate={{ 
                rotate: isMobileMenuOpen ? 180 : 0,
                scale: isMobileMenuOpen ? 1.1 : 1
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon 
                icon={isMobileMenuOpen ? "solar:close-circle-bold" : "solar:hamburger-menu-bold"} 
                className="text-gray-600 dark:text-gray-300 transition-transform" 
                width={28} 
                height={28} 
              />
            </motion.button>

            {/* Theme Toggle Button with enhanced design */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-3 rounded-full bg-gradient-to-r from-indigo-100 to-violet-100 dark:from-indigo-900 dark:to-violet-900 shadow-lg hover:shadow-xl transition-all duration-300"
              aria-label="Toggle theme"
            >
              <motion.div
                animate={{ rotate: theme === "dark" ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {theme === "dark" ? (
                  <Icon icon="solar:sun-bold" className="text-yellow-500" width={24} height={24} />
                ) : (
                  <Icon icon="solar:moon-bold" className="text-blue-500" width={24} height={24} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm md:hidden z-40"
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300,
                mass: 0.8
              }}
              className="fixed inset-y-0 right-0 w-64 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl md:hidden z-50 shadow-xl"
            >
              <nav className="flex flex-col items-center pt-20 pb-8 h-full">
                <div className="space-y-6 text-center">
                  {["Overview", "Stack", "Experience", "Projects", "Certifications", "Contact"].map((item, index) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block px-8 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 text-lg font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}