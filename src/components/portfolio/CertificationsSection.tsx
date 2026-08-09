"use client";

import { Icon } from "@iconify/react";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import CertificateCard from "./CertificateCard";
import CertificatePreviewModal from "./CertificatePreviewModal";
import { certifications } from "@/data/certifications";
import type { Certificate } from "@/types/certificate";

export default function CertificationsSection() {
	const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 40, scale: 0.95 },
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
				duration: 8,
				repeat: Infinity,
				type: "tween",
				ease: "easeInOut",
			},
		},
	};

	return (
		<>
			<motion.section
				id="certifications"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1.2 }}
				viewport={{ once: true }}
				className="mb-16 md:mb-24 lg:mb-32 relative overflow-hidden"
			>
				{/* Enhanced Background Elements */}
				<div className="absolute inset-0 overflow-hidden pointer-events-none">
					<motion.div
						variants={floatVariants}
						animate="animate"
						className="absolute top-20 right-16 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-2xl"
					/>
					<motion.div
						variants={floatVariants}
						animate="animate"
						style={{ animationDelay: "3s" }}
						className="absolute bottom-16 left-16 w-48 h-48 bg-gradient-to-br from-green-400/25 to-cyan-400/25 rounded-full blur-2xl"
					/>
					<motion.div
						variants={floatVariants}
						animate="animate"
						style={{ animationDelay: "6s" }}
						className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-xl"
					/>
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
				</div>

				<div className="relative z-10">
					<SectionHeader
						tagText="Professional Credentials"
						tagIcon="solar:verified-check-bold"
						heading="Certifications"
						description="Professional certifications and credentials that validate my expertise in modern technologies and development practices."
						showUnderline={false}
						centered={true}
					/>

					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
					>
						{certifications.map((cert, index) => (
							<CertificateCard
								key={index}
								cert={cert}
								variants={itemVariants}
								onView={setSelectedCertificate}
							/>
						))}
					</motion.div>

					{/* Enhanced Summary Stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}
						className="text-center mt-12 md:mt-16 px-4 mb-12"
					>
						<motion.div
							whileHover={{ scale: 1.02, y: -2 }}
							className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-blue-50/90 to-purple-50/90 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300/70 dark:hover:border-blue-600/70 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
						>
							<div className="flex items-center gap-3">
								<div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-md">
									<Icon icon="solar:star-outline" className="text-white" width={18} height={18} />
								</div>
								<span className="text-blue-700 dark:text-blue-300 text-sm md:text-base font-semibold">
									2 Professional Certifications
								</span>
							</div>
							<div className="w-px h-6 bg-gradient-to-b from-blue-300/50 via-purple-300/50 to-blue-300/50"></div>
							<div className="flex items-center gap-3">
								<Icon icon="solar:verified-check-bold" className="text-blue-500" width={22} height={22} />
								<span className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium">
									Verified by Industry Leaders
								</span>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			<CertificatePreviewModal
				certificate={selectedCertificate}
				onClose={() => setSelectedCertificate(null)}
			/>
		</>
	);
}
