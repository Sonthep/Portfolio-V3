"use client";

import { Icon } from "@iconify/react";
import { motion, Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function OverviewSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const floatVariants: Variants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        type: "tween",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="overview"
      className="mb-16 md:mb-24 lg:mb-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-10 md:top-20 right-4 md:right-16 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue-400/20 md:from-blue-400/30 to-purple-400/20 md:to-purple-400/30 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "3s" }}
          className="absolute bottom-8 md:bottom-16 left-4 md:left-16 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-green-400/15 md:from-green-400/20 to-cyan-400/15 md:to-cyan-400/20 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{ animationDelay: "6s" }}
          className="hidden md:block absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <SectionHeader
          tagText="Get To Know Me"
          tagIcon="solar:user-heart-bold"
          heading="About Me"
          description="Crafting digital experiences with passion, precision, and purpose"
          showUnderline={true}
          centered={true}
        />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start px-4">

          {/* Main Profile Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8"
          >
            <div className="space-y-6 md:space-y-8">

              {/* Introduction Card */}
              <div className="relative p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/90 to-white/50 dark:from-gray-800/90 dark:to-gray-900/50 backdrop-blur-xl border border-white/30 dark:border-gray-700/40 shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-3 md:w-4 h-3 md:h-4 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute top-4 md:top-6 right-10 md:right-14 w-2 md:w-3 h-2 md:h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                <div className="hidden md:block absolute top-6 right-20 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-500"></div>

                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white flex items-center gap-2 md:gap-3">
                      <span className="text-2xl sm:text-3xl md:text-4xl">👋</span>
                      Hello, I&apos;m Sonthep Simmalee
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4 md:mb-6">
                      A passionate <span className="font-bold text-blue-600 dark:text-blue-400">Full Stack Developer</span> and
                      <span className="font-bold text-purple-600 dark:text-purple-400">
                        &nbsp; Web Master</span> with
                      <span className="font-bold text-green-600 dark:text-green-400"> 2+ years</span> of experience crafting
                      digital experiences that users love.
                    </p>
                  </div>

                  {/* Expanded About Content */}
                  <div className="space-y-3 md:space-y-4 border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      I specialize in building scalable web and mobile applications using React, Next.js, TypeScript,
                      and modern development technologies. I thrive on turning complex problems into elegant solutions
                      that users love.
                    </p>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      Beyond work, I love exploring emerging technologies, contributing to open-source projects, and
                      mentoring aspiring developers. I believe in continuous learning and staying at the forefront of
                      technological innovation.
                    </p>
                  </div>

                  {/* Skills Highlight */}
                  <div className="border-t border-gray-200/50 dark:border-gray-700/50 pt-4 md:pt-6">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 md:mb-4 flex items-center gap-2">
                      <Icon icon="solar:lightning-bold" className="text-yellow-500 w-4 md:w-5 h-4 md:h-5" width={20} height={20} />
                      Core Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {["React", "Next.js", "TypeScript", "Node.js", "Python", "UI/UX Design", "Kissflow", "ASP.NET", "C#"].map((skill, index) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 text-gray-800 dark:text-gray-200 rounded-lg md:rounded-xl border border-blue-200/50 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

           
            </div>
          </motion.div>

          {/* Enhanced Sidebar */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6 mt-6 lg:mt-0">
            {/* Contact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50/90 to-pink-50/90 dark:from-purple-950/30 dark:to-pink-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon icon="solar:chat-round-dots-bold" className="text-purple-500 w-5 h-5" width={20} height={20} />
                Let&apos;s Connect
              </h4>
              <div className="space-y-3">
                <motion.a
                  href="mailto:mramazan1@yahoo.com"
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30 hover:bg-white/90 dark:hover:bg-gray-800/50 transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                >
                  <div className="p-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-md group-hover:from-orange-600 group-hover:to-red-600 transition-all shadow-md">
                    <Icon icon="solar:letter-bold" className="text-white w-4 h-4" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white break-all">sonthep.simmalee@gmail.com</div>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30 border border-white/20 dark:border-gray-700/30"
                >
                  <div className="p-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md shadow-md">
                    <Icon icon="solar:global-bold" className="text-white w-4 h-4" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">sonthep.dev</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 dark:bg-gray-800/30"
                >
                  <div className="p-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-md shadow-md border border-white/20 dark:border-gray-700/30">
                    <Icon icon="solar:map-point-bold" className="text-white w-4 h-4" width={16} height={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900 dark:text-white">Thailand, Nonthaburi</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/90 to-yellow-50/90 dark:from-amber-950/30 dark:to-yellow-950/30 backdrop-blur-sm border border-white/30 dark:border-gray-700/40 shadow-xl">
              <h4 className="font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Icon icon="solar:cup-star-bold" className="text-amber-600 w-5 h-5" width={20} height={20} />
                Achievements
              </h4>
              <div className="space-y-4">
                {[
                  { icon: "solar:star-bold", text: "Top Developer in CRM & Internal Systems", color: "text-yellow-600" },
                  { icon: "solar:chat-square-code-bold", text: "200+ Hackos on HackerRank (Problem Solving & Algorithms)", color: "text-blue-600" },
                  { icon: "solar:laptop-bold", text: "76+ Repositories on GitHub", color: "text-green-600" },
                  { icon: "solar:settings-bold", text: "Expert in Low-Code (Kissflow) & Full Stack Development", color: "text-purple-600" },
                ].map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.2 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-amber-100/70 dark:bg-gray-800/30  transition-all duration-300 group border border-white/20 dark:border-gray-700/30"
                  >
                    <Icon icon={achievement.icon} className={`${achievement.color} w-5 h-5`} width={20} height={20} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-300">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
} 