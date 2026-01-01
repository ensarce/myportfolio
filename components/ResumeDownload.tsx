"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function ResumeDownload() {
    const { language } = useLanguage();

    const handleDownload = async () => {
        // Dynamic import to avoid SSR issues
        const { jsPDF } = await import("jspdf");

        const doc = new jsPDF();
        const pageWidth = doc.internal.pageSize.getWidth();

        // Colors
        const primaryColor = [6, 182, 212]; // Cyan
        const textDark = [30, 30, 30];
        const textGray = [100, 100, 100];

        let y = 20;

        // Header
        doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.rect(0, 0, pageWidth, 45, "F");

        doc.setTextColor(255, 255, 255);
        doc.setFontSize(28);
        doc.setFont("helvetica", "bold");
        doc.text("ENSAR KAPLAN", pageWidth / 2, 22, { align: "center" });

        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.text("Full Stack Developer", pageWidth / 2, 32, { align: "center" });

        doc.setFontSize(10);
        doc.text("ensarkaplan.ce@gmail.com | +90 553 076 29 25 | Istanbul, Turkey", pageWidth / 2, 40, { align: "center" });

        y = 55;

        // Helper function for section headers
        const addSectionHeader = (title: string) => {
            doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.rect(15, y - 4, 3, 10, "F");
            doc.setTextColor(textDark[0], textDark[1], textDark[2]);
            doc.setFontSize(14);
            doc.setFont("helvetica", "bold");
            doc.text(title, 22, y + 3);
            y += 12;
        };

        // Summary Section
        addSectionHeader(language === "tr" ? "ÖZET" : "SUMMARY");
        doc.setTextColor(textGray[0], textGray[1], textGray[2]);
        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        const summaryText = language === "tr"
            ? "Kurumsal sağlık yazılımları geliştirmede 3+ yıl deneyimli Full Stack Developer. Angular, C#/.NET ve Java konularında uzman. İş odaklı geliştirme yaklaşımıyla uçtan uca proje sahipliği."
            : "Full Stack Developer with 3+ years of experience building enterprise healthcare software. Expert in Angular, C#/.NET, and Java with end-to-end project ownership.";
        const splitSummary = doc.splitTextToSize(summaryText, pageWidth - 40);
        doc.text(splitSummary, 22, y);
        y += splitSummary.length * 5 + 10;

        // Experience Section
        addSectionHeader(language === "tr" ? "DENEYİM" : "EXPERIENCE");

        doc.setTextColor(textDark[0], textDark[1], textDark[2]);
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        doc.text(language === "tr" ? "Yazılım Geliştirme Uzmanı" : "Software Development Specialist", 22, y);
        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text("Hisar Intercontinental Hospital", 22, y + 6);
        doc.setTextColor(textGray[0], textGray[1], textGray[2]);
        doc.text(language === "tr" ? "Haziran 2022 - Günümüz | İstanbul" : "June 2022 - Present | Istanbul", 22, y + 12);
        y += 20;

        const experiences = language === "tr" ? [
            "• Java (Backend) ve Angular (Frontend) ile full-stack geliştirme",
            "• MSSQL veritabanı operasyonları ve optimizasyon",
            "• C# .NET ile masaüstü uygulamalar geliştirme",
            "• Docker containerization ve Rancher deployment",
            "• REST ve SOAP API entegrasyonları",
            "• Ameliyathane optimizasyonu ile %30+ verimlilik artışı"
        ] : [
            "• Full-stack development with Java (Backend) and Angular (Frontend)",
            "• MSSQL database operations and optimization",
            "• Desktop applications with C# .NET",
            "• Docker containerization and Rancher deployment",
            "• REST and SOAP API integrations",
            "• Operating room optimization with 30%+ efficiency increase"
        ];

        doc.setFontSize(10);
        experiences.forEach(exp => {
            doc.text(exp, 22, y);
            y += 6;
        });
        y += 8;

        // Skills Section
        addSectionHeader(language === "tr" ? "TEKNİK BECERİLER" : "TECHNICAL SKILLS");

        const skills = [
            { label: "Frontend", value: "Angular, TypeScript, React, JavaScript, HTML/CSS" },
            { label: "Backend", value: "Java, Spring Boot, C#, .NET, Python, Node.js" },
            { label: language === "tr" ? "Veritabanı" : "Database", value: "MSSQL, MongoDB, PostgreSQL" },
            { label: "DevOps", value: "Docker, Kubernetes, GitLab CI/CD, Rancher" },
        ];

        skills.forEach(skill => {
            doc.setFont("helvetica", "bold");
            doc.setTextColor(textDark[0], textDark[1], textDark[2]);
            doc.text(skill.label + ":", 22, y);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(textGray[0], textGray[1], textGray[2]);
            doc.text(skill.value, 55, y);
            y += 7;
        });
        y += 8;

        // Projects Section
        addSectionHeader(language === "tr" ? "PROJELER" : "PROJECTS");

        const projects = language === "tr" ? [
            { name: "Ameliyathane Optimizasyonu", desc: "Bluetooth tabanlı hasta ve ekipman takip sistemi (%30+ verimlilik)" },
            { name: "Hasta Takip Sistemi", desc: "Angular tabanlı hastane hasta yönetim uygulaması" },
            { name: "KuaförBul Platform", desc: "Next.js ile berber randevu platformu (Vercel'de canlı)" },
        ] : [
            { name: "Operating Room Optimization", desc: "Bluetooth-based patient and equipment tracking (30%+ efficiency)" },
            { name: "Patient Tracking System", desc: "Angular-based hospital patient management application" },
            { name: "KuaförBul Platform", desc: "Barber appointment platform with Next.js (Live on Vercel)" },
        ];

        projects.forEach(project => {
            doc.setFont("helvetica", "bold");
            doc.setTextColor(textDark[0], textDark[1], textDark[2]);
            doc.text("• " + project.name, 22, y);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(textGray[0], textGray[1], textGray[2]);
            doc.text("  " + project.desc, 22, y + 5);
            y += 12;
        });
        y += 5;

        // Education Section
        addSectionHeader(language === "tr" ? "EĞİTİM" : "EDUCATION");

        doc.setFont("helvetica", "bold");
        doc.setTextColor(textDark[0], textDark[1], textDark[2]);
        doc.text(language === "tr" ? "Bilgisayar Mühendisliği" : "Computer Engineering", 22, y);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.text(language === "tr" ? "Karabük Üniversitesi" : "Karabük University", 22, y + 6);
        doc.setTextColor(textGray[0], textGray[1], textGray[2]);
        doc.text("2013 - 2020", 22, y + 12);

        // Footer
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text("github.com/ensarce | linkedin.com/in/ensarkaplance", pageWidth / 2, 285, { align: "center" });

        // Save PDF
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
                    {language === "tr" ? "CV İndir" : "Download CV"}
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">PDF</p>
            </div>
        </motion.button>
    );
}
