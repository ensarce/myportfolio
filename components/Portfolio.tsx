"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const projects = [
    {
        title: "Operating Room Optimization",
        titleTr: "Ameliyathane Optimizasyonu",
        description: "Optimized surgical workflows with Bluetooth-based patient and equipment tracking system.",
        descriptionTr: "Bluetooth tabanlı hasta ve ekipman takip sistemi ile ameliyathane süreçlerini optimize ettim.",
        tech: ["C#", ".NET", "Bluetooth", "MSSQL"],
        category: "healthcare",
        status: "Production",
        statusTr: "Üretimde",
        impact: "30%+ Efficiency",
        impactTr: "%30+ Verimlilik",
        type: "company",
        typeTr: "Şirket",
    },
    {
        title: "Barber Platform (KuaförBul)",
        titleTr: "Berber Platformu (KuaförBul)",
        description: "Full-stack appointment booking platform for barbers with DDD architecture.",
        descriptionTr: "DDD mimarisi ile berberler için full-stack randevu platformu.",
        tech: ["TypeScript", "Next.js", "Node.js"],
        category: "web",
        status: "Live",
        statusTr: "Canlı",
        impact: "Active Users",
        impactTr: "Aktif Kullanıcılar",
        type: "personal",
        typeTr: "Kişisel",
        github: "https://github.com/ensarce/barber-platform",
        link: "https://kuaforbul.vercel.app",
    },
    {
        title: "Patient Tracking System",
        titleTr: "Hasta Takip Sistemi",
        description: "Angular-based hospital patient management application.",
        descriptionTr: "Angular tabanlı hastane hasta yönetim uygulaması.",
        tech: ["Angular", "Java", "Spring Boot"],
        category: "healthcare",
        status: "Production",
        statusTr: "Üretimde",
        impact: "Daily Use",
        impactTr: "Günlük Kullanım",
        type: "company",
        typeTr: "Şirket",
    },
    {
        title: "SKT Takip",
        titleTr: "SKT Takip",
        description: "Product expiration date tracking app.",
        descriptionTr: "Ürün son kullanma tarihi takip uygulaması.",
        tech: ["TypeScript", "React", "Node.js"],
        category: "web",
        status: "Shipped",
        statusTr: "Tamamlandı",
        impact: "Personal",
        impactTr: "Kişisel",
        type: "personal",
        typeTr: "Kişisel",
        github: "https://github.com/ensarce/skttakip",
    },
    {
        title: "Store Density Detection",
        titleTr: "Mağaza Yoğunluk Tespiti",
        description: "Computer vision for customer density detection.",
        descriptionTr: "Müşteri yoğunluğu tespiti için bilgisayar görüşü.",
        tech: ["Python", "OpenCV", "ML"],
        category: "ai",
        status: "Completed",
        statusTr: "Tamamlandı",
        impact: "Senior Project",
        impactTr: "Bitirme Projesi",
        type: "university",
        typeTr: "Üniversite",
    },
    {
        title: "Dietitian Application",
        titleTr: "Diyetisyen Uygulaması",
        description: "Mobile nutrition tracking application.",
        descriptionTr: "Mobil beslenme takip uygulaması.",
        tech: ["Java", "Android", "REST API"],
        category: "mobile",
        status: "Completed",
        statusTr: "Tamamlandı",
        impact: "Internship",
        impactTr: "Staj",
        type: "internship",
        typeTr: "Staj",
    },
];

const categories = [
    { id: "all", labelEn: "All", labelTr: "Tümü" },
    { id: "healthcare", labelEn: "Healthcare", labelTr: "Sağlık" },
    { id: "web", labelEn: "Web", labelTr: "Web" },
    { id: "mobile", labelEn: "Mobile", labelTr: "Mobil" },
    { id: "ai", labelEn: "AI/ML", labelTr: "AI/ML" },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("all");
    const { language, t } = useLanguage();

    const filteredProjects = activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-16 sm:py-24 px-4 sm:px-6 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {t.portfolioTitle}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
                        {t.portfolioSubtitle}
                    </p>
                </motion.div>

                {/* Category Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                                    : "bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700"
                                }`}
                        >
                            {language === "tr" ? category.labelTr : category.labelEn}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            {/* Status Badge */}
                            <div className="flex justify-between items-start mb-3 sm:mb-4">
                                <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-cyan-500/10 text-cyan-400 text-[10px] sm:text-xs font-medium rounded-full">
                                    {language === "tr" ? project.statusTr : project.status}
                                </span>
                                <span className="text-[10px] sm:text-xs text-gray-500">
                                    {language === "tr" ? project.typeTr : project.type}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-base sm:text-xl font-semibold text-white mb-1.5 sm:mb-2 group-hover:text-cyan-400 transition-colors">
                                {language === "tr" ? project.titleTr : project.title}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                                {language === "tr" ? project.descriptionTr : project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-800 text-gray-400 text-[10px] sm:text-xs rounded-md"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Impact */}
                            <div className="flex items-center gap-2 text-xs sm:text-sm mb-3 sm:mb-4">
                                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                <span className="text-green-400">
                                    {language === "tr" ? project.impactTr : project.impact}
                                </span>
                            </div>

                            {/* Links */}
                            <div className="flex gap-3">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        {t.viewProject}
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        {t.viewCode}
                                    </a>
                                )}
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
