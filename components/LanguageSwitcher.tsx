"use client";

import { motion } from "framer-motion";
import { useLanguage, Language } from "./LanguageProvider";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: "tr", label: "TR", flag: "🇹🇷" },
        { code: "en", label: "EN", flag: "🇬🇧" },
    ];

    return (
        <div className="fixed top-6 left-6 z-50 flex items-center gap-1 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full p-1">
            {languages.map((lang) => (
                <motion.button
                    key={lang.code}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${language === lang.code
                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/25"
                            : "text-gray-400 hover:text-white"
                        }`}
                >
                    <span className="mr-1">{lang.flag}</span>
                    {lang.label}
                </motion.button>
            ))}
        </div>
    );
}
