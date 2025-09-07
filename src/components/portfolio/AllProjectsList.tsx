// src/components/portfolio/AllProjectsList.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { useState, useMemo } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import type { Project } from "@/types/project";
// แก้ไข: เปลี่ยนจาก projects เป็น allProjects
import { allProjects } from "@/data/projects";

export default function AllProjectsList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    const query = searchQuery.toLowerCase();
    // แก้ไข: เปลี่ยนจาก projects.filter เป็น allProjects.filter
    return allProjects.filter((project: Project) => 
      project.title.toLowerCase().includes(query) ||
      project.subtitle.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tech.some((tech: string) => tech.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* Header with Search */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              All Projects
            </motion.h1>
            
            {/* Search Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects by name, description, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 text-gray-900 dark:text-white"
                />
                <Icon
                  icon="solar:magnifer-linear"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                  >
                    <Icon icon="solar:close-circle-line-duotone" className="w-5 h-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      >
        <div className="grid gap-8 md:gap-12">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href={`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                {/* ... Project Card Content ... */}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back to Home Button */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Icon icon="solar:arrow-left-line-duotone" className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}