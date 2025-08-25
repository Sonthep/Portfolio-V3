export interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  deliverables: string[];
  tech: string[];
  github: string;
  live: string;
  gradient: string;
  status: "Completed" | "In Progress";
  category: string;
  highlight?: string;
  timeline: string;
  clientType: string;
  image: string; // Add this property
}
