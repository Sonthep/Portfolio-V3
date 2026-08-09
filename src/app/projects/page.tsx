import ProjectsClient from './ProjectsClient';
import { allProjects } from "@/data/projects";

export default function ProjectsPage() {
  return <ProjectsClient projects={allProjects} />;
}