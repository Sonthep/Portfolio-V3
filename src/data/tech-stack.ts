import type { TechItem } from "@/types/tech-stack";

export const techStackData: Record<string, TechItem[]> = {
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
  ],
  "Cloud & DevOps": [
    {
      name: "Firebase",
      icon: "vscode-icons:file-type-firebase",
      category: "Cloud & DevOps",
      description: "Google's app development platform",
    },
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
