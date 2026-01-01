"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

const stats = [
    { value: "6+", labelEn: "Projects Shipped", labelTr: "Tamamlanan Proje" },
    { value: "3+", labelEn: "Years at Hospital", labelTr: "Yıl Hastanede" },
    { value: "14+", labelEn: "GitHub Repos", labelTr: "GitHub Repo" },
    { value: "8+", labelEn: "Years in Tech", labelTr: "Yıl Teknolojide" },
];

export default function Stats() {
    const { language } = useLanguage();

    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.labelEn}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center group"
                        >
                            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:from-white group-hover:to-cyan-400 transition-all duration-300">
                                {stat.value}
                            </div>
                            <div className="text-gray-400 text-sm md:text-base">
                                {language === "tr" ? stat.labelTr : stat.labelEn}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
