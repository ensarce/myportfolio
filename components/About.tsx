"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const codeSnippet = {
    en: `const engineer = {
  name: "Ensar Kaplan",
  role: "Full Stack Developer",
  experience: "3+ years",
  focus: "Healthcare & Enterprise",
  philosophy: "Understand first",
  stack: ["Angular", ".NET", "Java"]
};`,
    tr: `const muhendis = {
  isim: "Ensar Kaplan",
  rol: "Full Stack Geliştirici",
  deneyim: "3+ yıl",
  odak: "Sağlık & Kurumsal",
  felsefe: "Önce anla",
  teknolojiler: ["Angular", ".NET", "Java"]
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
        <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            {t.aboutTitle}
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Code Block Visualization */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl" />
                        <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto">
                            {/* Window Controls */}
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-800">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                <span className="ml-4 text-gray-500 text-xs">
                                    {language === "tr" ? "muhendis.ts" : "engineer.ts"}
                                </span>
                            </div>
                            {/* Code Content */}
                            <pre className="text-gray-300 whitespace-pre-wrap break-words">
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
                        className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                    >
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">{t.myPhilosophy}</h3>
                        <blockquote className="text-base sm:text-xl text-gray-300 italic border-l-4 border-cyan-500 pl-4 sm:pl-6">
                            &ldquo;{t.philosophyQuote}&rdquo;
                        </blockquote>
                        <p className="text-gray-400 text-sm sm:text-base">
                            <span className="text-cyan-400 font-semibold">3+ {t.yearsExperience}</span> {t.atHospital}
                        </p>

                        {/* Tech Stack Badges */}
                        <div>
                            <h4 className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">{t.techStack}</h4>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-xs sm:text-sm text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-300"
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
