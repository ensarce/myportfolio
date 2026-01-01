"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const codeSnippet = {
    en: `const engineer = {
  name: "Ensar Kaplan",
  role: "Full Stack Developer",
  experience: "3+ years",
  focus: "Healthcare & Enterprise",
  philosophy: "Understand the business first",
  stack: ["Angular", "TypeScript", ".NET", "Java"]
};`,
    tr: `const muhendis = {
  isim: "Ensar Kaplan",
  rol: "Full Stack Geliştirici",
  deneyim: "3+ yıl",
  odak: "Sağlık & Kurumsal",
  felsefe: "Önce işi anla",
  teknolojiler: ["Angular", "TypeScript", ".NET", "Java"]
};`,
};

const techStack = [
    "Angular", "TypeScript", "JavaScript", "React",
    "C#", ".NET", "Java", "Spring Boot", "Python",
    "MSSQL", "MongoDB", "Docker", "Kubernetes", "REST API"
];

export default function About() {
    const { language, t } = useLanguage();

    return (
        <section id="about" className="py-24 px-6 relative">
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
                            {t.aboutTitle}
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Code Block Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                        <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 font-mono text-sm">
                            {/* Window Controls */}
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <span className="ml-4 text-gray-500 text-xs">
                                    {language === "tr" ? "muhendis.ts" : "engineer.ts"}
                                </span>
                            </div>
                            {/* Code Content */}
                            <pre className="text-gray-300 overflow-x-auto">
                                <code>
                                    {language === "tr" ? codeSnippet.tr : codeSnippet.en}
                                </code>
                            </pre>
                        </div>
                    </motion.div>

                    {/* Philosophy Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-semibold text-white">{t.myPhilosophy}</h3>
                        <blockquote className="text-xl text-gray-300 italic border-l-4 border-cyan-500 pl-6">
                            &ldquo;{t.philosophyQuote}&rdquo;
                        </blockquote>
                        <p className="text-gray-400">
                            <span className="text-cyan-400 font-semibold">3+ {t.yearsExperience}</span> {t.atHospital}
                        </p>

                        {/* Tech Stack Badges */}
                        <div>
                            <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">{t.techStack}</h4>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
