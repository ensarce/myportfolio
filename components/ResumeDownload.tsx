"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

// Helper to replace Turkish characters for PDF compatibility
const normalizeTurkish = (text: string): string => {
    return text
        .replace(/ş/g, "s").replace(/Ş/g, "S")
        .replace(/ğ/g, "g").replace(/Ğ/g, "G")
        .replace(/ı/g, "i").replace(/İ/g, "I")
        .replace(/ö/g, "o").replace(/Ö/g, "O")
        .replace(/ü/g, "u").replace(/Ü/g, "U")
        .replace(/ç/g, "c").replace(/Ç/g, "C");
};

export default function ResumeDownload() {
    const { language } = useLanguage();

    const handleDownload = async () => {
        const { jsPDF } = await import("jspdf");

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 15;
        const contentWidth = pageWidth - margin * 2;

        let y = 20;

        // Check if we need new page
        const checkNewPage = (neededSpace: number) => {
            if (y + neededSpace > pageHeight - 20) {
                doc.addPage();
                y = 20;
            }
        };

        // ===== HEADER =====
        doc.setFillColor(8, 145, 178);
        doc.rect(0, 0, pageWidth, 40, "F");

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(22);
        doc.setFont("helvetica", "bold");
        doc.text("ENSAR KAPLAN", pageWidth / 2, 15, { align: "center" });

        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.text("Full Stack Developer & DevOps Enthusiast", pageWidth / 2, 24, { align: "center" });

        doc.setFontSize(8);
        doc.text("ensarkaplan.ce@gmail.com | +90 553 076 29 25 | Istanbul, Turkey", pageWidth / 2, 32, { align: "center" });
        doc.text("github.com/ensarce | linkedin.com/in/ensarkaplance", pageWidth / 2, 38, { align: "center" });

        y = 50;

        // ===== SUMMARY =====
        doc.setTextColor(8, 145, 178);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(normalizeTurkish(language === "tr" ? "OZET" : "SUMMARY"), margin, y);
        y += 6;

        doc.setTextColor(50, 50, 50);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        const summary = language === "tr"
            ? "HealthTech alaninda 3.5+ yillik deneyime sahip Full Stack Developer ve DevOps meraklisi. C# .NET WinForms uygulamalari ve Docker, Kubernetes, GitLab CI/CD ile deployment yonetimi konularinda uzman."
            : "Full Stack Developer & DevOps enthusiast with 3.5+ years of experience in HealthTech. Specializing in C# .NET WinForms applications and deployment lifecycle management with Docker, Kubernetes, and GitLab CI/CD.";
        const summaryLines = doc.splitTextToSize(normalizeTurkish(summary), contentWidth);
        doc.text(summaryLines, margin, y);
        y += summaryLines.length * 4 + 6;

        // ===== EXPERIENCE =====
        checkNewPage(50);
        doc.setTextColor(8, 145, 178);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(normalizeTurkish(language === "tr" ? "DENEYIM" : "EXPERIENCE"), margin, y);
        y += 6;

        doc.setTextColor(30, 30, 30);
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text(normalizeTurkish(language === "tr" ? "Yazilim Gelistirme Uzmani" : "Software Development Specialist"), margin, y);
        y += 5;

        doc.setTextColor(8, 145, 178);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.text("Hisar Intercontinental Hospital", margin, y);
        doc.setTextColor(100, 100, 100);
        doc.text(language === "tr" ? "Haziran 2022 - Gunumuz" : "June 2022 - Present", pageWidth - margin, y, { align: "right" });
        y += 6;

        const expItems = language === "tr" ? [
            "C# .NET WinForms ile masaustu uygulamalar gelistirme",
            "Java Spring Boot ve Angular ile full-stack web gelistirme",
            "Docker, Kubernetes ve GitLab CI/CD ile DevOps surecleri",
            "MSSQL veritabani operasyonlari ve optimizasyon",
            "Ameliyathane optimizasyonu ile %30+ verimlilik artisi"
        ] : [
            "Desktop application development with C# .NET WinForms",
            "Full-stack web development with Java Spring Boot and Angular",
            "DevOps workflows with Docker, Kubernetes, and GitLab CI/CD",
            "MSSQL database operations and optimization",
            "Operating room optimization achieving 30%+ efficiency increase"
        ];

        doc.setTextColor(50, 50, 50);
        doc.setFontSize(8);
        expItems.forEach(item => {
            checkNewPage(6);
            doc.text(normalizeTurkish("• " + item), margin + 2, y);
            y += 4;
        });
        y += 4;

        // ===== SKILLS =====
        checkNewPage(35);
        doc.setTextColor(8, 145, 178);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(normalizeTurkish(language === "tr" ? "TEKNIK BECERILER" : "TECHNICAL SKILLS"), margin, y);
        y += 6;

        const skills = [
            ["Languages:", "C#, Java, TypeScript, JavaScript, Python"],
            ["Frontend:", "Angular, React, HTML/CSS, TailwindCSS"],
            ["Backend:", ".NET, Spring Boot, Node.js, REST API"],
            ["DevOps:", "Docker, Kubernetes, GitLab CI/CD, Rancher"],
            ["Database:", "MSSQL, MongoDB, PostgreSQL"]
        ];

        doc.setFontSize(8);
        skills.forEach(([label, value]) => {
            checkNewPage(5);
            doc.setTextColor(30, 30, 30);
            doc.setFont("helvetica", "bold");
            doc.text(label, margin, y);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(50, 50, 50);
            doc.text(value, margin + 22, y);
            y += 5;
        });
        y += 4;

        // ===== PROJECTS =====
        checkNewPage(40);
        doc.setTextColor(8, 145, 178);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(normalizeTurkish(language === "tr" ? "PROJELER" : "PROJECTS"), margin, y);
        y += 6;

        const projects = language === "tr" ? [
            ["Ameliyathane Optimizasyonu", "Bluetooth tabanli hasta/ekipman takip sistemi (%30+ verimlilik)"],
            ["Hasta Takip Sistemi", "Angular + Spring Boot ile hastane yonetim uygulamasi"],
            ["KuaforBul Platform", "Next.js ile berber randevu platformu (Vercel'de canli)"],
            ["Magaza Yogunluk Tespiti", "Python/OpenCV ile gercek zamanli kalabalik analizi"]
        ] : [
            ["Operating Room Optimization", "Bluetooth-based patient/equipment tracking (30%+ efficiency)"],
            ["Patient Tracking System", "Hospital management app with Angular + Spring Boot"],
            ["KuaforBul Platform", "Barber appointment platform with Next.js (Live on Vercel)"],
            ["Store Density Detection", "Real-time crowd analysis with Python/OpenCV"]
        ];

        doc.setFontSize(8);
        projects.forEach(([name, desc]) => {
            checkNewPage(10);
            doc.setTextColor(30, 30, 30);
            doc.setFont("helvetica", "bold");
            doc.text(normalizeTurkish("• " + name), margin, y);
            y += 4;
            doc.setFont("helvetica", "normal");
            doc.setTextColor(80, 80, 80);
            doc.text(normalizeTurkish("  " + desc), margin + 2, y);
            y += 5;
        });
        y += 4;

        // ===== EDUCATION =====
        checkNewPage(25);
        doc.setTextColor(8, 145, 178);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(normalizeTurkish(language === "tr" ? "EGITIM" : "EDUCATION"), margin, y);
        y += 6;

        doc.setTextColor(30, 30, 30);
        doc.setFontSize(10);
        doc.setFont("helvetica", "bold");
        doc.text(normalizeTurkish(language === "tr" ? "Bilgisayar Muhendisligi" : "Computer Engineering"), margin, y);
        y += 5;

        doc.setTextColor(8, 145, 178);
        doc.setFontSize(9);
        doc.setFont("helvetica", "normal");
        doc.text(normalizeTurkish(language === "tr" ? "Karabuk Universitesi" : "Karabuk University"), margin, y);
        doc.setTextColor(100, 100, 100);
        doc.text("2013 - 2020", pageWidth - margin, y, { align: "right" });

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
