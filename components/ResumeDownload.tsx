"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

// Helper to replace Turkish characters for PDF compatibility
const normalizeTurkish = (text: string): string => {
    return text
        .replace(/ş/g, "s")
        .replace(/Ş/g, "S")
        .replace(/ğ/g, "g")
        .replace(/Ğ/g, "G")
        .replace(/ı/g, "i")
        .replace(/İ/g, "I")
        .replace(/ö/g, "o")
        .replace(/Ö/g, "O")
        .replace(/ü/g, "u")
        .replace(/Ü/g, "U")
        .replace(/ç/g, "c")
        .replace(/Ç/g, "C");
};

export default function ResumeDownload() {
    const { language } = useLanguage();

    const handleDownload = async () => {
        const { jsPDF } = await import("jspdf");

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        const contentWidth = pageWidth - margin * 2;

        let y = 25;

        // ===== HEADER =====
        doc.setFillColor(8, 145, 178); // Cyan-600
        doc.rect(0, 0, pageWidth, 50, "F");

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(26);
        doc.setFont("helvetica", "bold");
        doc.text("ENSAR KAPLAN", pageWidth / 2, y, { align: "center" });

        y += 10;
        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.text("Full Stack Developer", pageWidth / 2, y, { align: "center" });

        y += 12;
        doc.setFontSize(9);
        doc.text("ensarkaplan.ce@gmail.com  |  +90 553 076 29 25  |  Istanbul, Turkey", pageWidth / 2, y, { align: "center" });

        y = 65;

        // ===== HELPER FUNCTIONS =====
        const drawSection = (title: string) => {
            doc.setDrawColor(8, 145, 178);
            doc.setLineWidth(0.5);
            doc.line(margin, y, pageWidth - margin, y);
            y += 8;
            doc.setTextColor(8, 145, 178);
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.text(normalizeTurkish(title), margin, y);
            y += 8;
        };

        const drawText = (text: string, indent: number = 0) => {
            doc.setTextColor(60, 60, 60);
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            const lines = doc.splitTextToSize(normalizeTurkish(text), contentWidth - indent);
            doc.text(lines, margin + indent, y);
            y += lines.length * 5;
        };

        const drawBoldText = (text: string) => {
            doc.setTextColor(30, 30, 30);
            doc.setFontSize(11);
            doc.setFont("helvetica", "bold");
            doc.text(normalizeTurkish(text), margin, y);
            y += 6;
        };

        const drawSubText = (text: string) => {
            doc.setTextColor(8, 145, 178);
            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            doc.text(normalizeTurkish(text), margin, y);
            y += 5;
        };

        const drawGrayText = (text: string) => {
            doc.setTextColor(100, 100, 100);
            doc.setFontSize(9);
            doc.setFont("helvetica", "italic");
            doc.text(normalizeTurkish(text), margin, y);
            y += 7;
        };

        // ===== SUMMARY =====
        drawSection(language === "tr" ? "OZET" : "SUMMARY");
        const summary = language === "tr"
            ? "Kurumsal saglik yazilimlari gelistirmede 3+ yil deneyimli Full Stack Developer. Angular, C#/.NET ve Java konularinda uzman. Is odakli gelistirme yaklasimi ve uctan uca proje sahipligi."
            : "Full Stack Developer with 3+ years of experience building enterprise healthcare software solutions. Expert in Angular, C#/.NET, and Java with end-to-end project ownership and business-driven development approach.";
        drawText(summary);
        y += 5;

        // ===== EXPERIENCE =====
        drawSection(language === "tr" ? "DENEYIM" : "EXPERIENCE");
        drawBoldText(language === "tr" ? "Yazilim Gelistirme Uzmani" : "Software Development Specialist");
        drawSubText("Hisar Intercontinental Hospital");
        drawGrayText(language === "tr" ? "Haziran 2022 - Gunumuz | Istanbul" : "June 2022 - Present | Istanbul");

        const expItems = language === "tr" ? [
            "Java (Backend) ve Angular (Frontend) ile full-stack gelistirme",
            "MSSQL veritabani operasyonlari ve optimizasyon",
            "C# .NET ile masaustu uygulamalar",
            "Docker containerization ve Rancher deployment",
            "REST ve SOAP API entegrasyonlari",
            "Ameliyathane optimizasyonu ile %30+ verimlilik artisi"
        ] : [
            "Full-stack development with Java (Backend) and Angular (Frontend)",
            "MSSQL database operations and query optimization",
            "Desktop applications development with C# .NET",
            "Docker containerization and Rancher deployment",
            "REST and SOAP API integrations",
            "Operating room optimization achieving 30%+ efficiency increase"
        ];

        expItems.forEach(item => {
            drawText("• " + item, 3);
        });
        y += 5;

        // ===== SKILLS =====
        drawSection(language === "tr" ? "TEKNIK BECERILER" : "TECHNICAL SKILLS");

        const skillRows = [
            ["Frontend:", "Angular, TypeScript, React, JavaScript, HTML/CSS, TailwindCSS"],
            ["Backend:", "Java, Spring Boot, C#, .NET, Python, Node.js"],
            [language === "tr" ? "Veritabani:" : "Database:", "MSSQL, MongoDB, PostgreSQL, Redis"],
            ["DevOps:", "Docker, Kubernetes, GitLab CI/CD, Rancher"],
            [language === "tr" ? "Araclar:" : "Tools:", "Git, VS Code, IntelliJ, Postman, JIRA"]
        ];

        skillRows.forEach(([label, value]) => {
            doc.setTextColor(30, 30, 30);
            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
            doc.text(normalizeTurkish(label), margin, y);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(60, 60, 60);
            doc.text(normalizeTurkish(value), margin + 28, y);
            y += 6;
        });
        y += 5;

        // ===== PROJECTS =====
        drawSection(language === "tr" ? "PROJELER" : "PROJECTS");

        const projects = language === "tr" ? [
            ["Ameliyathane Optimizasyonu", "Bluetooth tabanli hasta ve ekipman takip sistemi (%30+ verimlilik)"],
            ["Hasta Takip Sistemi", "Angular tabanli hastane hasta yonetim uygulamasi"],
            ["KuaforBul Platform", "Next.js ile berber randevu platformu (Vercel'de canli)"],
            ["SKT Takip", "Urun son kullanma tarihi takip uygulamasi"]
        ] : [
            ["Operating Room Optimization", "Bluetooth-based patient and equipment tracking (30%+ efficiency)"],
            ["Patient Tracking System", "Angular-based hospital patient management application"],
            ["KuaforBul Platform", "Barber appointment platform with Next.js (Live on Vercel)"],
            ["SKT Takip", "Product expiration date tracking application"]
        ];

        projects.forEach(([name, desc]) => {
            doc.setTextColor(30, 30, 30);
            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
            doc.text(normalizeTurkish("• " + name), margin, y);
            y += 5;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(80, 80, 80);
            doc.setFontSize(9);
            doc.text(normalizeTurkish("  " + desc), margin + 3, y);
            y += 7;
        });
        y += 3;

        // ===== EDUCATION =====
        drawSection(language === "tr" ? "EGITIM" : "EDUCATION");
        drawBoldText(language === "tr" ? "Bilgisayar Muhendisligi" : "Computer Engineering");
        drawSubText(language === "tr" ? "Karabuk Universitesi" : "Karabuk University");
        drawGrayText("2013 - 2020");

        // ===== FOOTER =====
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.3);
        doc.line(margin, 280, pageWidth - margin, 280);

        doc.setFontSize(8);
        doc.setTextColor(120, 120, 120);
        doc.text("github.com/ensarce  |  linkedin.com/in/ensarkaplance", pageWidth / 2, 287, { align: "center" });

        // Save
        doc.save(language === "tr" ? "Ensar_Kaplan_CV.pdf" : "Ensar_Kaplan_Resume.pdf");
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
                    {language === "tr" ? "CV Indir" : "Download CV"}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">PDF</p>
            </div>
        </motion.button>
    );
}
