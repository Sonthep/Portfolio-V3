// src/app/project/[slug]/page.tsx
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { allProjects } from "@/data/projects";

// Force dynamic rendering to avoid prerender errors
export const dynamic = 'force-dynamic';

// Generate static params for dynamic routes
export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.title.toLowerCase().replace(/\s+/g, "-"),
  }));
}

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  // For server component, we need to await the params
  const { slug } = await params;

  const project = allProjects.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative py-20 md:py-28 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              {project.subtitle}
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              >
                <Icon icon="mdi:github" className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-colors"
              >
                <Icon icon="solar:globe-line-duotone" className="w-5 h-5 mr-2" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Project Overview
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.description}
              </p>

              {project.image && (
                <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Deliverables
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-8">
                {project.deliverables.map((deliverable, index) => (
                  <li key={index}>{deliverable}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Status
                  </h4>
                  <p className="text-gray-900 dark:text-white">{project.status}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Category
                  </h4>
                  <p className="text-gray-900 dark:text-white">{project.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Timeline
                  </h4>
                  <p className="text-gray-900 dark:text-white">{project.timeline}</p>
                </div>
                {project.highlight && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Highlight
                    </h4>
                    <p className="text-gray-900 dark:text-white">{project.highlight}</p>
                  </div>
                )}
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Projects */}
        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Icon icon="solar:arrow-left-line-duotone" className="w-5 h-5" />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;