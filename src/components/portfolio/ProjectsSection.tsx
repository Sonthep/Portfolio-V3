"use client";

import { Icon } from "@iconify/react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { featuredProjects } from "@/data/projects";

export default function ProjectsSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 60, scale: 0.95 },
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
			y: [-10, 10, -10],
			x: [-5, 5, -5],
			transition: {
				duration: 6,
				repeat: Infinity,
				type: "tween",
				ease: "easeInOut",
			},
		},
	};

	return (
		<motion.section
			id="projects"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.2 }}
			viewport={{ once: true }}
			className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
		>
			{/* Enhanced Background Elements */}
			<div className="absolute inset-0 pointer-events-none">
				<motion.div
					variants={floatVariants}
					animate="animate"
					className="absolute top-5 md:top-20 right-2 md:right-16 w-12 sm:w-16 md:w-32 h-12 sm:h-16 md:h-32 bg-gradient-to-br from-purple-400/15 md:from-purple-400/20 to-pink-400/15 md:to-pink-400/20 rounded-full blur-xl md:blur-4xl"
				/>
				<motion.div
					variants={floatVariants}
					animate="animate"
					style={{ animationDelay: "2s" }}
					className="absolute bottom-5 md:bottom-20 left-2 md:left-16 w-16 sm:w-20 md:w-40 h-16 sm:h-20 md:h-40 bg-gradient-to-br from-blue-400/10 md:from-blue-400/15 to-cyan-400/10 md:to-cyan-400/15 rounded-full blur-xl md:blur-2xl"
				/>
				<motion.div
					variants={floatVariants}
					animate="animate"
					style={{ animationDelay: "4s" }}
					className="hidden lg:block absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-xl"
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
					tagText="Portfolio Showcase"
					tagIcon="solar:code-square-bold"
					heading="Featured Projects"
					description="Discover my latest work in web development, AI integration, and digital innovation"
					showUnderline={true}
					centered={true}
				/>

				{/* Full-Width Stacked Projects */}
				<div className="max-w-7xl mx-auto px-3 md:px-4 space-y-8 md:space-y-12 lg:space-y-16">
					{/* Top Read More Button */}
					<motion.a
						href="https://github.com/Sonthep?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						variants={itemVariants}
						whileHover={{ scale: 1.02 }}
						className="block w-full"
					>
						<div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl p-6 md:p-8">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
										Explore More Projects
									</h3>
									<p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
										Discover my complete portfolio on GitHub
									</p>
								</div>
								<div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
									<Icon
										icon="solar:arrow-right-bold"
										className="w-6 h-6 text-white"
									/>
								</div>
							</div>
						</div>
					</motion.a>

					{/* View All Projects Button */}
					<motion.a
						href="/projects"
						variants={itemVariants}
						whileHover={{ scale: 1.02 }}
						className="block w-full"
					>
						<div className="bg-gradient-to-r from-indigo-500/90 to-purple-600/90 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 hover:border-white/50 transition-all duration-500 overflow-hidden shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl p-6 md:p-8">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-lg md:text-xl font-semibold text-white mb-2">
										View All Projects
									</h3>
									<p className="text-sm md:text-base text-white/80">
										Explore my complete project collection
									</p>
								</div>
								<div className="bg-white/20 p-3 rounded-full">
									<Icon icon="solar:arrow-right-bold" className="w-6 h-6 text-white" />
								</div>
							</div>
						</div>
					</motion.a>

					{featuredProjects.map((project) => (
						<ProjectCard key={project.title} project={project} variants={itemVariants} />
					))}

					{/* Bottom Read More Button */}
					<motion.a
						href="https://github.com/Sonthep?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
						variants={itemVariants}
						whileHover={{ scale: 1.02 }}
						className="block w-full"
					>
						<div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/30 dark:border-gray-700/40 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 overflow-hidden shadow-lg md:shadow-xl hover:shadow-xl md:hover:shadow-2xl p-6 md:p-8">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
										Want to See More?
									</h3>
									<p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
										Check out my GitHub repository for additional projects
									</p>
								</div>
								<div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-full">
									<Icon
										icon="solar:arrow-up-right-bold"
										className="w-6 h-6 text-white"
									/>
								</div>
							</div>
						</div>
					</motion.a>
				</div>

				{/* Call to Action */}

				<motion.div
					variants={itemVariants}
					className="text-center mt-12 md:mt-16 lg:mt-20 px-4 mb-12"
				>
					<Link href="#contact">
						<motion.div
							className="inline-flex items-center gap-2 md:gap-3 px-4 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 dark:border-purple-500/20 rounded-xl md:rounded-2xl"
							whileHover={{ scale: 1.05 }}
						>
							<Icon
								icon="solar:programming-bold"
								className="text-blue-500 dark:text-purple-400 w-5 h-5 md:w-6 md:h-6"
							/>
							<span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base text-center">
								Interested in working together? Let&apos;s create something amazing!
							</span>
						</motion.div>
					</Link>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
