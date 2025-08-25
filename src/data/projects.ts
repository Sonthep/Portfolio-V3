// src/data/projects.ts

import type { Project } from "@/types/project";

// แก้ไข: เปลี่ยนชื่อตัวแปรจาก 'projects' เป็น 'allProjects'
export const allProjects: Project[] = [
  // ...your projects data here
  {
    title: "BrainTraining Mobile App",
    subtitle: "Personalized Cognitive Training Platform",
    description: "Elevate cognitive abilities with personalized challenges and engaging exercises. This mobile app adapts to user performance with smart difficulty scaling and tracks progress over time. Designed as a graduation project with advanced machine learning integration.",
    features: [
      "Adaptive difficulty with personalized training plans",
      "Gamified challenges across various cognitive skills",
      "Progress tracking and performance analytics",
      "Offline access with local data storage via SQLite",
      "Machine learning integration for user profiling",
      "Firebase-powered authentication and cloud sync",
      "Social engagement with leaderboards and friend challenges",
      "Optimized for Android & iOS using Flutter"
    ],
    deliverables: [
      "Fully functional mobile application (Android/iOS)",
      "User authentication and profile system",
      "Firebase integration for real-time sync",
      "Machine learning backend via TensorFlow & Google Colab",
      "Gamified UI with feedback and rewards",
      "Offline-first support with SQLite database",
      "Progress dashboard and analytics module"
    ],
    tech: ["Flutter", "Dart", "Firebase", "SQLite", "TensorFlow", "Google Colab"],
    github: "https://github.com/Sonthep/braintrainingV2-main",
    live: "https://github.com/Sonthep/braintrainingV2-main",
    gradient: "from-yellow-500 to-pink-500",
    status: "In Progress",
    category: "Mobile Application",
    highlight: "Graduation Project",
    timeline: "5 months",
    clientType: "Education & HealthTech",
    image: "/image/mobile.webp"
  },
  {
    title: "ThepAPI",
    subtitle: "Dynamic Data-Fetching Web App",
    description: "A dynamic web application that fetches data from an external API and displays it in a clean, user-friendly interface. Built with React.js and styled using Tailwind CSS, the app demonstrates seamless integration of frontend technologies with API data handling.",
    features: [
      "Real-time data fetching from external APIs",
      "Responsive UI using Tailwind CSS",
      "User-friendly layout and design",
      "Loading and error handling states",
      "Search and filter functionality",
      "Pagination for large datasets",
      "Reusable React components"
    ],
    deliverables: [
      "Responsive React web application",
      "API integration with dynamic data rendering",
      "Tailwind CSS-based modern UI",
      "Error and loading state management",
      "Deployment-ready frontend code"
    ],
    tech: ["React", "Tailwind CSS", "External API"],
    github: "https://github.com/Sonthep/react_router_api",
    live: "https://thepapi.netlify.app/",
    gradient: "from-green-400 to-lime-500",
    status: "Completed",
    category: "Web Application",
    highlight: "Frontend Showcase",
    timeline: "1 month",
    clientType: "Personal Project",
    image: "/image/thepapi.webp"
  },
  {
    title: "Authentication Clerk",
    subtitle: "Seamless User Authentication Platform",
    description: "Authentication Clerk is a web application built using React.js, Tailwind CSS, and Clerk. The project provides a seamless authentication experience for users by leveraging Clerk's secure and developer-friendly authentication services, all within a clean and responsive interface.",
    features: [
      "User sign-up and login with Clerk integration",
      "Passwordless and social login support",
      "Customizable user profile management",
      "Responsive design with Tailwind CSS",
      "Session handling and access control",
      "Protected routes and role-based UI rendering",
      "Minimalistic UI with fast loading times"
    ],
    deliverables: [
      "Fully functional authentication system",
      "Responsive React frontend with Clerk integration",
      "Tailwind CSS for styling and layout",
      "Authentication flow: Sign-up, login, logout",
      "Protected routes and session management",
      "Deployment-ready frontend"
    ],
    tech: ["React", "Tailwind CSS", "Clerk"],
    github: "https://github.com/Sonthep/clerk",
    live: "https://reactauthclerk.netlify.app/",
    gradient: "from-purple-500 to-indigo-500",
    status: "Completed",
    category: "Web Application",
    highlight: "Authentication Demo",
    timeline: "2 weeks",
    clientType: "Personal Project",
    image: "/image/authen.webp"
  },
  {
    title: "Portfolio Website",
    subtitle: "Modern Developer Portfolio",
    description: "A modern, responsive portfolio website built with Next.js 13, React, and Tailwind CSS. Features a clean design, smooth animations, and optimal performance with server-side rendering.",
    features: [
      "Server-side rendering with Next.js 13",
      "Responsive design for all devices",
      "Dark/Light mode support",
      "Smooth scroll animations",
      "Interactive project showcase",
      "Performance optimized images",
      "Contact form integration",
      "SEO optimized"
    ],
    deliverables: [
      "Next.js 13 application with App Router",
      "Responsive and interactive UI",
      "Dark mode implementation",
      "Project showcase section",
      "Contact form functionality",
      "Performance optimizations",
      "SEO configuration"
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/Sonthep/portfolio-v3",
    live: "https://portfolio-v3-iota.vercel.app/",
    gradient: "from-blue-500 to-violet-500",
    status: "Completed",
    category: "Web Application",
    highlight: "Personal Website",
    timeline: "2 months",
    clientType: "Personal Project",
    image: "/image/mobile.webp"
  }
];
// แก้ไข: export featuredProjects จาก allProjects
export const featuredProjects = allProjects.slice(0, 3);