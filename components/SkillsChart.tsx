"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const skillCategories = [
    {
        titleEn: "Frontend",
        titleTr: "Frontend",
        icon: "🎨",
        color: "from-blue-500 to-cyan-500",
        skills: ["Angular", "TypeScript", "React", "JavaScript", "HTML/CSS", "TailwindCSS"],
    },
    {
        titleEn: "Backend",
        titleTr: "Backend",
        icon: "⚙️",
        color: "from-purple-500 to-pink-500",
        skills: ["Java", "Spring Boot", "C#", ".NET", "Python", "Node.js"],
    },
    {
        titleEn: "Database",
        titleTr: "Veritabanı",
        icon: "🗄️",
        color: "from-green-500 to-emerald-500",
        skills: ["MSSQL", "MongoDB", "PostgreSQL", "Redis"],
    },
    {
        titleEn: "DevOps & Tools",
        titleTr: "DevOps & Araçlar",
        icon: "🚀",
        color: "from-orange-500 to-amber-500",
        skills: ["Docker", "Kubernetes", "GitLab CI/CD", "Rancher", "REST API", "JIRA"],
    },
];

export default function SkillsChart() {
    const { language, t } = useLanguage();

    return (
        <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {t.skillsTitle}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
                        {t.skillsSubtitle}
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.titleEn}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Card */}
                            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-gray-700 transition-all duration-300 h-full">
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-xl sm:text-2xl shadow-lg`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        {language === "tr" ? category.titleTr : category.titleEn}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            className="px-3 py-1.5 bg-gray-800/80 border border-gray-700/50 rounded-lg text-xs sm:text-sm text-gray-300 hover:text-white hover:border-gray-600 hover:bg-gray-700/80 transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Subtle gradient line at bottom */}
                                <div className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Tech Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-10 sm:mt-12 text-center"
                >
                    <p className="text-gray-500 text-xs sm:text-sm mb-4">
                        {language === "tr" ? "Ayrıca deneyimli olduğum:" : "Also experienced with:"}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {["Agile/Scrum", "Git", "VS Code", "IntelliJ", "Postman", "Swagger", "Linux"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-gray-800/30 border border-gray-800 rounded-full text-xs text-gray-500 hover:text-gray-400 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
