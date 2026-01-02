"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const projects = [
    {
        title: "Portfolio Website",
        titleTr: "Portfolyo Web Sitesi",
        description: "A responsive personal portfolio website built with Next.js and TailwindCSS. Designed to showcase my projects and technical skills with a clean UI/UX, featuring dark/light theme, multi-language support, and interactive animations.",
        descriptionTr: "Next.js ve TailwindCSS ile olusturulmus responsive kisisel portfolyo web sitesi. Temiz UI/UX ile projelerimi ve teknik becerilerimi sergilemek icin tasarlandi. Koyu/acik tema, coklu dil destegi ve interaktif animasyonlar iceriyor.",
        tech: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
        category: "web",
        status: "Live",
        statusTr: "Canli",
        impact: "GitHub Pages",
        impactTr: "GitHub Pages",
        type: "personal",
        typeTr: "Kisisel",
        github: "https://github.com/ensarce/myportfolio",
        link: "https://ensarce.github.io/myportfolio",
    },
    {
        title: "Operating Room Optimization",
        titleTr: "Ameliyathane Optimizasyonu",
        description: "Enterprise-grade surgical workflow optimization system using Bluetooth-based patient and equipment tracking. Built with C# .NET WinForms, integrated with hospital RTLS infrastructure for real-time location tracking.",
        descriptionTr: "Bluetooth tabanli hasta ve ekipman takibi ile kurumsal ameliyathane is akisi optimizasyon sistemi. C# .NET WinForms ile gelistirildi, gercek zamanli konum takibi icin hastane RTLS altyapisiyla entegre.",
        tech: ["C#", ".NET", "WinForms", "Bluetooth", "MSSQL"],
        category: "healthcare",
        status: "Production",
        statusTr: "Uretimde",
        impact: "30%+ Efficiency",
        impactTr: "%30+ Verimlilik",
        type: "company",
        typeTr: "Sirket",
    },
    {
        title: "Patient Tracking System",
        titleTr: "Hasta Takip Sistemi",
        description: "Full-stack hospital patient management application used daily across departments. Features include patient registration, appointment scheduling, and department-wise tracking with role-based access control.",
        descriptionTr: "Bolumler arasi gunluk kullanilan full-stack hastane hasta yonetim uygulamasi. Hasta kaydi, randevu planlama ve rol tabanli erisim kontrolu ile bolum bazli takip ozellikleri iceriyor.",
        tech: ["Angular", "Java", "Spring Boot", "MSSQL"],
        category: "healthcare",
        status: "Production",
        statusTr: "Uretimde",
        impact: "Daily Hospital Use",
        impactTr: "Gunluk Hastane Kullanimi",
        type: "company",
        typeTr: "Sirket",
    },
    {
        title: "Barber Platform (KuaforBul)",
        titleTr: "Berber Platformu (KuaforBul)",
        description: "Full-stack appointment booking platform for barbers with DDD architecture. Features include real-time availability, customer reviews, and integrated payment processing.",
        descriptionTr: "DDD mimarisi ile berberler icin full-stack randevu platformu. Gercek zamanli musaitlik, musteri degerlendirmeleri ve entegre odeme isleme ozellikleri iceriyor.",
        tech: ["TypeScript", "Next.js", "Node.js", "MongoDB"],
        category: "web",
        status: "Live",
        statusTr: "Canli",
        impact: "Active Users",
        impactTr: "Aktif Kullanicilar",
        type: "personal",
        typeTr: "Kisisel",
        github: "https://github.com/ensarce/barber-platform",
        link: "https://kuaforbul.vercel.app",
    },
    {
        title: "Store Density Detection",
        titleTr: "Magaza Yogunluk Tespiti",
        description: "Real-time crowd density analysis system using Python and OpenCV. It processes video feeds to detect and track customers in a store environment, providing heatmaps and analytics for business insights.",
        descriptionTr: "Python ve OpenCV kullanarak gercek zamanli kalabalik yogunluk analiz sistemi. Video akislarini islayarak magaza ortaminda musterileri tespit eder ve takip eder, is icgörüleri icin isi haritalari ve analizler saglar.",
        tech: ["Python", "OpenCV", "Machine Learning", "NumPy"],
        category: "ai",
        status: "Completed",
        statusTr: "Tamamlandi",
        impact: "Senior Project",
        impactTr: "Bitirme Projesi",
        type: "university",
        typeTr: "Universite",
    },
    {
        title: "Dietitian Tracking App",
        titleTr: "Diyetisyen Takip Uygulamasi",
        description: "Android-based mobile application for patient-dietitian interaction. Integrated with backend services using SOAP and RESTEasy APIs for appointment management and nutrition tracking.",
        descriptionTr: "Hasta-diyetisyen etkilesimi icin Android tabanli mobil uygulama. Randevu yonetimi ve beslenme takibi icin SOAP ve RESTEasy API'leri ile backend servisleriyle entegre.",
        tech: ["Java", "Android", "SOAP", "RESTEasy"],
        category: "mobile",
        status: "Completed",
        statusTr: "Tamamlandi",
        impact: "Internship Project",
        impactTr: "Staj Projesi",
        type: "internship",
        typeTr: "Staj",
    },
];

const categories = [
    { id: "all", labelEn: "All", labelTr: "Tumu" },
    { id: "healthcare", labelEn: "Healthcare", labelTr: "Saglik" },
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
                            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3">
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
