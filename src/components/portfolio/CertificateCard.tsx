"use client";

import { Icon } from "@iconify/react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Certificate } from "@/types/certificate";

interface CertificateCardProps {
	cert: Certificate;
	variants: Variants;
	onView: (cert: Certificate) => void;
}

export default function CertificateCard({ cert, variants, onView }: CertificateCardProps) {
	return (
		<motion.div
			variants={variants}
			whileHover={{
				y: -8,
				scale: 1.02,
				transition: { duration: 0.3, ease: "easeOut" }
			}}
			className="group h-full"
		>
			<div className="h-full bg-white/70 dark:bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-300 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 overflow-hidden">

				{/* Header with gradient - keeping this as requested */}
				<div className={`h-20 flex items-center justify-between bg-slate-100 dark:bg-slate-900 px-4 ${cert.color} relative overflow-hidden`}>
					<div className="flex items-center justify-end mr-4 gap-1">
						{cert.provider === "freeCodeCamp" ? (
							<Image
								src="/freecodecamp-logo.svg"
								alt="freeCodeCamp"
								width={cert.providerIconSize}
								height={cert.providerIconSize}
							/>
						) : (
							<Icon icon={cert.providerIcon} className="" width={cert.providerIconSize} height={cert.providerIconSize} />
						)}
						<Icon icon={cert.platformIcon} className="" width={cert.platformIconSize} height={cert.platformIconSize} />
					</div>
					<div className="flex items-center justify-start gap-0">
						<div className="relative w-8 h-8 rounded-lg flex items-center justify-center">
							<div className="absolute top-1/5 left-1/4 w-1/2 h-1/2 bg-white rounded-lg -z-0"></div>
							<Icon icon="solar:verified-check-bold" className="text-blue-500 z-10" width={26} height={26} />
						</div>
						<span className="text-blue-500 text-sm font-medium">Verified</span>
					</div>
				</div>

				<div className="p-6 relative">
					{/* Subtle decorative elements */}
					<div className="absolute top-4 right-4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
					<div className="absolute top-6 right-8 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse delay-500"></div>

					{/* Certificate Title */}
					<h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 leading-tight group-hover:text-gray-700 dark:group-hover:text-gray-100 transition-colors">
						{cert.title}
					</h3>

					{/* Provider Info */}
					<div className="space-y-3 mb-6 bg-gray-50/50 dark:bg-gray-800/30 rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/30">
						<div className="flex items-center gap-3 text-sm">
							<div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md flex items-center justify-center">
								<Icon icon="solar:buildings-2-bold" className="text-white" width={12} height={12} />
							</div>
							<span className="text-gray-600 dark:text-gray-400 font-medium">Provider:</span>
							<span className="font-semibold text-gray-900 dark:text-white">{cert.provider}</span>
						</div>
						<div className="flex items-center gap-3 text-sm">
							<div className="w-5 h-5 bg-gradient-to-r from-purple-500 to-purple-600 rounded-md flex items-center justify-center">
								<Icon icon="solar:monitor-smartphone-bold" className="text-white" width={12} height={12} />
							</div>
							<span className="text-gray-600 dark:text-gray-400 font-medium">Platform:</span>
							<span className="font-semibold text-blue-600 dark:text-blue-400">{cert.platform}</span>
						</div>
						<div className="flex items-center gap-3 text-sm">
							<div className="w-5 h-5 bg-gradient-to-r from-green-500 to-green-600 rounded-md flex items-center justify-center">
								<Icon icon="solar:calendar-bold" className="text-white" width={12} height={12} />
							</div>
							<span className="text-gray-600 dark:text-gray-400 font-medium">Issued:</span>
							<span className="font-semibold text-gray-700 dark:text-gray-300">{cert.issued}</span>
						</div>
					</div>

					{/* Skills */}
					<div className="mb-6">
						<div className="flex items-center gap-2 mb-3">
							<div className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-md flex items-center justify-center">
								<Icon icon="solar:star-bold" className="text-white" width={10} height={10} />
							</div>
							<h4 className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
								Skills Validated
							</h4>
						</div>
						<div className="flex flex-wrap gap-2">
							{cert.skills.map((skill, skillIndex) => (
								<span
									key={skillIndex}
									className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200/80 dark:from-gray-700/50 dark:to-gray-800/50 text-gray-800 dark:text-gray-200 rounded-lg text-xs font-medium border border-gray-300/60 dark:border-gray-600/50 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 hover:border-blue-300/60 dark:hover:border-blue-600/50 hover:text-blue-800 dark:hover:text-blue-200 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
								>
									{skill}
								</span>
							))}
						</div>
					</div>

					{/* Credential ID */}
					<div className="flex items-center justify-between pt-4 border-t border-gray-200/60 dark:border-gray-700/50">
						<Link
							href={cert.credentialId}
							target="_blank"
						// rel="noopener noreferrer"
						>
							<div className="flex items-center gap-2">
								<Icon icon="solar:arrow-right-up-bold" className="text-green-500" width={14} height={14} />
								<span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
									View Certificate: <span className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">Click here to verify</span>
								</span>
								<Icon icon="solar:link-bold" className="text-gray-500" width={14} height={14} />
							</div>
						</Link>
						<button
							className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 rounded-lg border border-blue-200/60 dark:border-blue-700/50 hover:border-blue-300/80 dark:hover:border-blue-600/70 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/30 dark:hover:to-blue-700/30 transition-all duration-300 text-xs font-medium shadow-sm hover:shadow-md"
							onClick={() => onView(cert)}
						>
							<Icon icon="solar:eye-bold" width={12} height={12} />
							<span>View</span>
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
