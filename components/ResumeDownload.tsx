"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function ResumeDownload() {
    const { language } = useLanguage();

    const handleDownload = () => {
        // Open HTML CV in new tab - user can print as PDF
        const basePath = process.env.NODE_ENV === "production" ? "/myportfolio" : "";
        window.open(`${basePath}/cv.html`, "_blank");
    };

    return (
        <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
        >
            <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <div className="text-left">
                <p className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                    {language === "tr" ? "CV Görüntüle" : "View CV"}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">
                    {language === "tr" ? "Yazdır / PDF" : "Print / PDF"}
                </p>
            </div>
        </motion.button>
    );
}
