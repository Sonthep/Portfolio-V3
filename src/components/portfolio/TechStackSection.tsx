"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";

interface TechItem {
  name: string;
  icon: string;
  category: string;
  description: string;
}

const techStackData: Record<string, TechItem[]> = {
  "Backend": [
    {
      name: "Node.js",
      icon: "devicon:nodejs",
      category: "Backend",
      description: "JavaScript runtime for server-side applications",
    },
    {
      name: "Python",
      icon: "devicon:python",
      category: "Backend",
      description: "Versatile language for backend and data science",
    },
    // {
    //   name: "Express",
    //   icon: "skill-icons:expressjs-dark",
    //   category: "Backend",
    //   description: "Fast, minimalist web framework for Node.js",
    // },
    // {
    //   name: "Django",
    //   icon: "material-icon-theme:django",
    //   category: "Backend",
    //   description: "High-level Python web framework",
    // },
    // {
    //   name: "GraphQL",
    //   icon: "logos:graphql",
    //   category: "Backend",
    //   description: "Query language for APIs",
    // }
    
  ],
  "Frontend": [
    {
      name: "React",
      icon: "skill-icons:react-dark",
      category: "Frontend",
      description: "Building modern, interactive user interfaces",
    },
    {
      name: "Next.js",
      icon: "devicon:nextjs",
      category: "Frontend",
      description: "Full-stack React framework for production apps",
    },
    {
      name: "TypeScript",
      icon: "devicon:typescript",
      category: "Frontend",
      description: "Type-safe JavaScript for scalable applications",
    },
    {
      name: "JavaScript",
      icon: "devicon:javascript",
      category: "Frontend",
      description: "Core language for web development",
    },
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      category: "Frontend",
      description: "Utility-first CSS framework for rapid UI development",
    },
    {
      name: "Flutter",
      icon: "devicon:flutter",
      category: "Frontend",
      description: "Cross-platform mobile app development",
    },
  ],
  "Database": [
    {
      name: "PostgreSQL",
      icon: "logos:postgresql",
      category: "Database",
      description: "Advanced open-source relational database",
    },
    {
      name: "MongoDB",
      icon: "devicon:mongodb",
      category: "Database",
      description: "NoSQL document database",
    },
    {
      name: "MySQL",
      icon: "logos:mysql",
      category: "Database",
      description: "Popular open-source relational database",
    },
    
    // {
    //   name: "Prisma",
    //   icon: "skill-icons:prisma",
    //   category: "Database",
    //   description: "Next-generation ORM for Node.js and TypeScript",
    // },
  ],
  "Cloud & DevOps": [
  
    
    {
      name: "Firebase",
      icon: "vscode-icons:file-type-firebase",
      category: "Cloud & DevOps",
      description: "Google's app development platform",
    },
    // {
    //   name: "Docker",
    //   icon: "devicon:docker",
    //   category: "Cloud & DevOps",
    //   description: "Containerization platform",
    // },
    {
      name: "Git",
      icon: "devicon:git",
      category: "Cloud & DevOps",
      description: "Version control system",
    },
  ],
  "AI & Integration": [
    {
      name: "OpenAI",
      icon: "simple-icons:openai",
      category: "AI & Integration",
      description: "AI-powered applications and chatbots",
    },

  
    {
      name: "Stripe",
      icon: "logos:stripe",
      category: "AI & Integration",
      description: "Payment processing integration",
    }
    
  ],
};

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...Object.keys(techStackData)];

  const filteredTech = activeCategory === "All"
    ? Object.values(techStackData).flat()
    : techStackData[activeCategory] || [];

  return (
    <motion.section
      id="stack"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16 mx-6 md:mx-6 lg:mx-8"
    >
      <SectionHeader
        tagText="Tech Arsenal"
        tagIcon="solar:settings-bold"
        heading="Technology Stack"
        description="Technologies I use to bring ideas to life"
        showUnderline={false}
        centered={true}
      />
      <div className="mb-12">

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? "bg-blue-600 text-white shadow-lg scale-105"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {activeCategory === "All" ? (
        // Categorized view
        <div className="space-y-12">
          {Object.entries(techStackData).map(([categoryName, techs]) => (
            <motion.div
              key={categoryName}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                {techs.map((tech, index) => (
                  <TechCard
                    key={tech.name}
                    tech={tech}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // Filtered view
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredTech.map((tech, index) => (
            <TechCard
              key={tech.name}
              tech={tech}
              index={index}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}

function TechCard({
  tech,
  index
}: {
  tech: TechItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Card Background with Gradient Border */}
      <div className="relative">
        {/* Subtle Gradient Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 rounded-xl border border-gray-200/50 dark:border-gray-600/50 group-hover:border-gray-300/70 dark:group-hover:border-gray-500/70 transition-all duration-300 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl scale-105" />

        {/* Main Card */}
        <div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-200/60 dark:border-gray-700/60 group-hover:border-gray-300/80 dark:group-hover:border-gray-600/80 transition-all duration-300 shadow-lg group-hover:shadow-2xl group-hover:shadow-black/5 dark:group-hover:shadow-black/40 overflow-hidden">

          {/* Subtle Top Accent - Much More Refined */}
          <div className="relative h-0.5 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 dark:via-gray-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Floating Particles Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-4 right-4 w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-8 left-6 w-0.5 h-0.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-6 right-8 w-0.5 h-0.5 bg-gray-300 dark:bg-gray-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="p-6 relative">
            {/* Icon Container with Enhanced Design */}
            <div className="flex justify-center mb-4">
              <div className="relative group/icon">
                {/* Icon Background with Subtle Pattern */}
                <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 rounded-xl border border-gray-200/50 dark:border-gray-600/50 group-hover:border-gray-300/70 dark:group-hover:border-gray-500/70 transition-all duration-300">
                  <Icon
                    icon={tech.icon}
                    className="group-hover/icon:scale-110 group-hover/icon:rotate-3 transition-all duration-300"
                    width={36}
                    height={36}
                  />

                  {/* Subtle Icon Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Technology Name with Better Typography */}
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 text-center mb-2 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors tracking-tight">
              {tech.name}
            </h3>

            {/* Experience Years with Enhanced Styling */}
          </div>

          {/* Subtle Mesh Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: '20px 20px'
            }}
          />
        </div>
      </div>
    </motion.div>
  );
} 