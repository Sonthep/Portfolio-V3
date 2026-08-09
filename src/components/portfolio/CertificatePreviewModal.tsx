"use client";

import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { Certificate } from "@/types/certificate";

interface CertificatePreviewModalProps {
	certificate: Certificate | null;
	onClose: () => void;
}

export default function CertificatePreviewModal({ certificate, onClose }: CertificatePreviewModalProps) {
	return (
		<AnimatePresence>
			{certificate && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
					onClick={onClose}
				>
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						className="bg-linear-to-br from-white/95 to-white/90 dark:from-gray-900/95 dark:to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl max-h-[90vh] overflow-hidden relative border border-white/20 dark:border-gray-700/30"
						onClick={(e) => e.stopPropagation()}
					>
						{/* Modal Header */}
						<div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xs">
							<div>
								<h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-1">
									{certificate.title}
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
									{certificate.provider} • {certificate.issued}
								</p>
							</div>
							<motion.button
								whileHover={{ scale: 1.1, rotate: 90 }}
								whileTap={{ scale: 0.9 }}
								onClick={onClose}
								className="p-3 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 rounded-xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50"
							>
								<Icon icon="solar:close-outline" className="text-gray-500" width={20} height={20} />
							</motion.button>
						</div>

						{/* Certificate Image */}
						<div className="p-6 flex justify-center bg-linear-to-br from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50">
							<div className="relative max-w-full max-h-[60vh] overflow-hidden  shadow-lg border border-gray-200/50 dark:border-gray-700/50">
								<Image
									src={certificate.certificatePreview || ""}
									alt={certificate.title}
									width={800}
									height={600}
									className="w-full h-auto"
									style={{ objectFit: 'contain' }}
								/>
							</div>
						</div>

						{/* Modal Footer */}
						<div className="flex items-center justify-between p-6 border-t border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xs">
							<div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
								Credential ID: <span className="text-gray-800 dark:text-gray-200">{certificate.credentialId}</span>
							</div>
							<div className="flex gap-3">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									onClick={onClose}
									className="px-4 py-2 bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-red-500/50"
								>
									<Icon icon="solar:close-circle-bold" className="text-white" width={20} height={20} />
									Close
								</motion.button>
								<motion.a
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									href={certificate.certificatePreview || ""}
									download={`${certificate.title}.png`}
									className="px-4 py-2 bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl border border-blue-500/50"
								>
									<Icon icon="solar:download-bold" width={16} height={16} />
									Download
								</motion.a>
							</div>
						</div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
