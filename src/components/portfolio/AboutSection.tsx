"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hello, World! I am Sonthep Simmalee — A passionate Full Stack Developer and Web Master with 2+ years of experience crafting scalable digital experiences that users love.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          I specialize in building high-performance web and mobile applications using React, Next.js, TypeScript, and modern development technologies. My expertise spans CRM systems, low-code/no-code platforms (Kissflow), and full-stack development with ASP.NET (C#). I excel at turning complex business requirements into elegant, user-focused solutions — from real-time dashboards and automated financial reports to customized approval flows and service request management.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        Beyond coding, I am passionate about exploring emerging technologies, contributing to open-source projects, and mentoring aspiring developers. I believe in continuous learning and staying at the cutting edge of technological innovation to create products that truly make an impact.
        </p>
      </div>
    </motion.section>
  );
} 