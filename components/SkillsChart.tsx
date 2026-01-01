"use client";

import { motion } from "framer-motion";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { useLanguage } from "./LanguageProvider";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const skillCategories = {
    en: [
        {
            category: "Frontend",
            skills: [
                { name: "Angular", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "React", level: 75 },
                { name: "JavaScript", level: 90 },
                { name: "HTML/CSS", level: 85 },
            ],
        },
        {
            category: "Backend",
            skills: [
                { name: "Java", level: 85 },
                { name: "Spring Boot", level: 80 },
                { name: "C#/.NET", level: 90 },
                { name: "Python", level: 70 },
                { name: "Node.js", level: 65 },
            ],
        },
        {
            category: "Database & DevOps",
            skills: [
                { name: "MSSQL", level: 90 },
                { name: "MongoDB", level: 70 },
                { name: "Docker", level: 85 },
                { name: "Kubernetes", level: 75 },
                { name: "GitLab CI/CD", level: 80 },
            ],
        },
    ],
    tr: [
        {
            category: "Frontend",
            skills: [
                { name: "Angular", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "React", level: 75 },
                { name: "JavaScript", level: 90 },
                { name: "HTML/CSS", level: 85 },
            ],
        },
        {
            category: "Backend",
            skills: [
                { name: "Java", level: 85 },
                { name: "Spring Boot", level: 80 },
                { name: "C#/.NET", level: 90 },
                { name: "Python", level: 70 },
                { name: "Node.js", level: 65 },
            ],
        },
        {
            category: "Veritabanı & DevOps",
            skills: [
                { name: "MSSQL", level: 90 },
                { name: "MongoDB", level: 70 },
                { name: "Docker", level: 85 },
                { name: "Kubernetes", level: 75 },
                { name: "GitLab CI/CD", level: 80 },
            ],
        },
    ],
};

const radarData = {
    labels: ["Angular", "C#/.NET", "Java", "TypeScript", "Docker", "MSSQL"],
    datasets: [
        {
            label: "Skill Level",
            data: [95, 90, 85, 90, 85, 90],
            backgroundColor: "rgba(6, 182, 212, 0.2)",
            borderColor: "rgba(6, 182, 212, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(6, 182, 212, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(6, 182, 212, 1)",
        },
    ],
};

const radarOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
        r: {
            beginAtZero: true,
            max: 100,
            ticks: {
                stepSize: 20,
                color: "#6b7280",
                backdropColor: "transparent",
            },
            grid: {
                color: "rgba(107, 114, 128, 0.2)",
            },
            angleLines: {
                color: "rgba(107, 114, 128, 0.2)",
            },
            pointLabels: {
                color: "#d1d5db",
                font: {
                    size: 12,
                    weight: 500 as const,
                },
            },
        },
    },
    plugins: {
        legend: {
            display: false,
        },
    },
};

export default function SkillsChart() {
    const { language, t } = useLanguage();
    const categories = language === "tr" ? skillCategories.tr : skillCategories.en;

    return (
        <section id="skills" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {t.skillsTitle}
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {t.skillsSubtitle}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Radar Chart */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl" />
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8">
                            <Radar data={radarData} options={radarOptions} />
                        </div>
                    </motion.div>

                    {/* Skill Bars */}
                    <div className="space-y-8">
                        {categories.map((category, categoryIndex) => (
                            <motion.div
                                key={category.category}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            >
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                                    {category.category}
                                </h3>
                                <div className="space-y-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skill.name} className="group">
                                            <div className="flex justify-between text-sm mb-1.5">
                                                <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                                                    {skill.name}
                                                </span>
                                                <span className="text-gray-500">%{skill.level}</span>
                                            </div>
                                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                                        ease: "easeOut",
                                                    }}
                                                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
