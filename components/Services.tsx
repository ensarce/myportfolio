"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const services = [
    {
        titleEn: "Healthcare Software",
        titleTr: "Sağlık Yazılımları",
        descriptionEn: "Hospital management systems, patient tracking, surgical workflow optimization.",
        descriptionTr: "Hastane yönetim sistemleri, hasta takibi, ameliyathane süreç optimizasyonu.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
    },
    {
        titleEn: "Full-Stack Development",
        titleTr: "Full-Stack Geliştirme",
        descriptionEn: "Angular/React frontend + Java Spring Boot or C#/.NET backend solutions.",
        descriptionTr: "Angular/React frontend + Java Spring Boot veya C#/.NET backend çözümleri.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
    },
    {
        titleEn: "Mobile & Web Apps",
        titleTr: "Mobil & Web Uygulamaları",
        descriptionEn: "Cross-platform applications with responsive design and RESTful APIs.",
        descriptionTr: "Responsive tasarım ve RESTful API'larla çapraz platform uygulamaları.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        titleEn: "DevOps & Deployment",
        titleTr: "DevOps & Deployment",
        descriptionEn: "Docker, Kubernetes, GitLab CI/CD, and Rancher for reliable deployments.",
        descriptionTr: "Docker, Kubernetes, GitLab CI/CD ve Rancher ile güvenilir deployment.",
        icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
    },
];

export default function Services() {
    const { language, t } = useLanguage();

    return (
        <section id="services" className="py-24 px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {t.servicesTitle}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t.servicesSubtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.titleEn}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-xl mb-4 text-cyan-400 group-hover:from-blue-600/30 group-hover:to-cyan-500/30 transition-colors duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                                {language === "tr" ? service.titleTr : service.titleEn}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm">
                                {language === "tr" ? service.descriptionTr : service.descriptionEn}
                            </p>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
