import type { Certificate } from "@/types/certificate";

export const certifications: Certificate[] = [
  {
    title: "Front End Development Libraries",
    provider: "freeCodeCamp",
    platform: "freeCodeCamp",
    issued: "February 2024",
    credentialId: "https://www.freecodecamp.org/certification/Sonthep/front-end-development-libraries",
    skills: ["HTML", "CSS", "JavaScript"],
    providerIcon: "logos:freecodecamp",
    platformIcon: "logos:freecodecamp",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/freecodecamp-frontend-libraries.png",
    providerIconSize: 64,
    platformIconSize: 88
  },
  {
    title: "Responsive Web Design",
    provider: "freeCodeCamp",
    platform: "freeCodeCamp",
    issued: "February 2024",
    credentialId: "https://www.freecodecamp.org/certification/Sonthep/responsive-web-design",
    skills: ["HTML", "CSS"],
    providerIcon: "logos:freecodecamp",
    platformIcon: "logos:freecodecamp",
    color: "from-blue-500 to-blue-600",
    certificatePreview: "/certificates/freecodecamp-responsive-web-design.png",
    providerIconSize: 64,
    platformIconSize: 88
  }
];
