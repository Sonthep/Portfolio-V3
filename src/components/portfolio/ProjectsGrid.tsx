// src/components/portfolio/ProjectsGrid.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// นำเข้าชนิดข้อมูล Project
import type { Project } from "@/types/project";
import { allProjects } from "@/data/projects";

// กำหนดชนิดข้อมูลให้กับ projects โดยตรง
const projects: Project[] = allProjects.slice(0, 3);


export default function ProjectsGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
        >
          <Link href={`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}