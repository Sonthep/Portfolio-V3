import ProjectsClient from './ProjectsClient';
import { allProjects } from "@/data/projects";

export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return <ProjectsClient projects={allProjects} />;
}