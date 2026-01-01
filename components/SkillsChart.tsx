"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const skillCategories = [
    {
        id: "frontend",
        titleEn: "Frontend",
        titleTr: "Frontend",
        icon: "🎨",
        color: "cyan",
        gradient: "from-cyan-500 to-blue-500",
        bgGlow: "bg-cyan-500/20",
        skills: [
            { name: "Angular", level: "Expert", years: "3+" },
            { name: "TypeScript", level: "Expert", years: "3+" },
            { name: "React", level: "Advanced", years: "2+" },
            { name: "JavaScript", level: "Expert", years: "5+" },
            { name: "HTML/CSS", level: "Expert", years: "5+" },
            { name: "TailwindCSS", level: "Advanced", years: "2+" },
        ],
    },
    {
        id: "backend",
        titleEn: "Backend",
        titleTr: "Backend",
        icon: "⚙️",
        color: "purple",
        gradient: "from-purple-500 to-pink-500",
        bgGlow: "bg-purple-500/20",
        skills: [
            { name: "Java", level: "Expert", years: "3+" },
            { name: "Spring Boot", level: "Advanced", years: "3+" },
            { name: "C#", level: "Expert", years: "3+" },
            { name: ".NET", level: "Expert", years: "3+" },
            { name: "Python", level: "Intermediate", years: "2+" },
            { name: "Node.js", level: "Intermediate", years: "1+" },
        ],
    },
    {
        id: "database",
        titleEn: "Database",
        titleTr: "Veritabanı",
        icon: "🗄️",
        color: "green",
        gradient: "from-green-500 to-emerald-500",
        bgGlow: "bg-green-500/20",
        skills: [
            { name: "MSSQL", level: "Expert", years: "3+" },
            { name: "MongoDB", level: "Advanced", years: "2+" },
            { name: "PostgreSQL", level: "Intermediate", years: "1+" },
            { name: "Redis", level: "Intermediate", years: "1+" },
        ],
    },
    {
        id: "devops",
        titleEn: "DevOps",
        titleTr: "DevOps",
        icon: "🚀",
        color: "orange",
        gradient: "from-orange-500 to-amber-500",
        bgGlow: "bg-orange-500/20",
        skills: [
            { name: "Docker", level: "Advanced", years: "2+" },
            { name: "Kubernetes", level: "Intermediate", years: "2+" },
            { name: "GitLab CI/CD", level: "Advanced", years: "2+" },
            { name: "Rancher", level: "Advanced", years: "2+" },
        ],
    },
];

const floatingTechs = [
    "REST API", "SOAP", "Agile", "Scrum", "JIRA", "Git", "VS Code",
    "IntelliJ", "Postman", "Swagger", "Linux", "Windows Server"
];

const levelColors: Record<string, string> = {
    Expert: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    Advanced: "text-purple-400 bg-purple-500/10 border-purple-500/30",
    Intermediate: "text-amber-400 bg-amber-500/10 border-amber-500/30",
};

export default function SkillsChart() {
    const { language, t } = useLanguage();
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    return (
        <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
                >
                    {skillCategories.map((category) => (
                        <motion.button
                            key={category.id}
                            onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                                    : "bg-gray-800/50 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600"
                                }`}
                        >
                            <span className="text-base sm:text-lg">{category.icon}</span>
                            <span>{language === "tr" ? category.titleTr : category.titleEn}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Skills Display */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className={`relative ${activeCategory && activeCategory !== category.id ? "opacity-30" : ""} transition-opacity duration-300`}
                        >
                            {/* Card */}
                            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 h-full overflow-hidden group hover:border-gray-700 transition-all">
                                {/* Glow effect on hover */}
                                <div className={`absolute inset-0 ${category.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`} />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center gap-3 mb-5">
                                        <motion.div
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            className={`w-11 h-11 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center text-xl shadow-lg`}
                                        >
                                            {category.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {language === "tr" ? category.titleTr : category.titleEn}
                                            </h3>
                                            <p className="text-xs text-gray-500">
                                                {category.skills.length} {language === "tr" ? "teknoloji" : "technologies"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="space-y-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                                                onHoverStart={() => setHoveredSkill(skill.name)}
                                                onHoverEnd={() => setHoveredSkill(null)}
                                                className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors cursor-default group/skill"
                                            >
                                                <span className="text-sm text-gray-300 group-hover/skill:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                                <AnimatePresence mode="wait">
                                                    {hoveredSkill === skill.name ? (
                                                        <motion.span
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.8 }}
                                                            className="text-xs text-gray-400"
                                                        >
                                                            {skill.years} {language === "tr" ? "yıl" : "years"}
                                                        </motion.span>
                                                    ) : (
                                                        <motion.span
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.8 }}
                                                            className={`text-[10px] px-2 py-0.5 rounded-full border ${levelColors[skill.level]}`}
                                                        >
                                                            {skill.level}
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom gradient line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Floating Tags Cloud */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 sm:mt-16"
                >
                    <div className="text-center mb-5">
                        <p className="text-gray-500 text-xs sm:text-sm">
                            {language === "tr" ? "Diğer araçlar ve metodolojiler" : "Other tools & methodologies"}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        {floatingTechs.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + index * 0.03 }}
                                whileHover={{
                                    scale: 1.1,
                                    y: -3,
                                    transition: { duration: 0.2 }
                                }}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800/40 border border-gray-700/50 rounded-full text-xs sm:text-sm text-gray-400 hover:text-white hover:border-cyan-500/30 hover:bg-gray-800/80 transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-6"
                >
                    {[
                        { value: "20+", labelEn: "Technologies", labelTr: "Teknoloji" },
                        { value: "3+", labelEn: "Years Experience", labelTr: "Yıl Deneyim" },
                        { value: "6+", labelEn: "Projects Shipped", labelTr: "Proje Tamamlandı" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.labelEn}
                            whileHover={{ scale: 1.02 }}
                            className="text-center p-4 sm:p-6 bg-gray-900/30 border border-gray-800 rounded-xl hover:border-gray-700 transition-all"
                        >
                            <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500">
                                {language === "tr" ? stat.labelTr : stat.labelEn}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
