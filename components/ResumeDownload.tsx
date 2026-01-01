"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

export default function ResumeDownload() {
    const { language } = useLanguage();

    const handleDownload = () => {
        const resumeContent = language === "tr" ? `
ENSAR KAPLAN
Full Stack Geliştirici
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email: ensarkaplan.ce@gmail.com
💼 LinkedIn: linkedin.com/in/ensarkaplance
🐙 GitHub: github.com/ensarce
📍 Konum: İstanbul, Türkiye

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ÖZET
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Kurumsal sağlık yazılımları geliştirmede 3+ yıl deneyimli Full Stack Developer.
Angular, C#/.NET ve Java konularında uzman, uçtan uca proje sahipliği ve
iş odaklı geliştirme yaklaşımıyla çalışıyorum.

Felsefem: "En iyi geliştiricilerin en iyi özelliği en iyi kodu yazmak değil
— işi en iyi anlamaktır."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DENEYİM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

YAZILIM GELİŞTİRME UZMANI
Hisar Intercontinental Hospital | İstanbul
Haziran 2022 - Günümüz

• Java (Backend) ve Angular (Frontend) ile full-stack geliştirme
• MSSQL veritabanı operasyonları
• C# .NET ile masaüstü uygulamalar
• GitLab ile proje yönetimi
• Docker containerization ve Rancher deployment
• REST ve SOAP API entegrasyonları
• JIRA ile Agile/Kanban metodolojisi

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EĞİTİM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BİLGİSAYAR MÜHENDİSLİĞİ
Karabük Üniversitesi | 2013 - 2020

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TEKNİK BECERİLER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:     Angular, TypeScript, React, JavaScript, HTML/CSS
Backend:      Java, Spring Boot, C#, .NET, Python, Node.js
Veritabanı:   MSSQL, MongoDB
DevOps:       Docker, Kubernetes, GitLab CI/CD, Rancher
API:          REST, SOAP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJELER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Ameliyathane Optimizasyonu - %30+ verimlilik artışı
• KuaförBul Platform - Vercel'de canlı
• Hasta Takip Sistemi - Hastanede günlük kullanım
• SKT Takip - Son kullanma tarihi takip uygulaması
    `.trim() : `
ENSAR KAPLAN
Full Stack Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📧 Email: ensarkaplan.ce@gmail.com
💼 LinkedIn: linkedin.com/in/ensarkaplance
🐙 GitHub: github.com/ensarce
📍 Location: Istanbul, Turkey

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SUMMARY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Stack Developer with 3+ years of experience building enterprise-grade 
healthcare software solutions. Specializing in Angular, C#/.NET, and Java 
with a focus on end-to-end project ownership and business-driven development.

Philosophy: "The best feature of the best developers isn't writing the best 
code — it's understanding the business the best."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EXPERIENCE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOFTWARE DEVELOPMENT SPECIALIST
Hisar Intercontinental Hospital | Istanbul
June 2022 - Present

• Full-stack development with Java (Backend) and Angular (Frontend)
• Database operations with MSSQL
• Desktop applications with C# .NET
• Project management with GitLab
• Docker containerization and Rancher deployment
• REST and SOAP API integrations
• Agile/Kanban methodology with JIRA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EDUCATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

COMPUTER ENGINEERING
Karabük University | 2013 - 2020

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECHNICAL SKILLS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:     Angular, TypeScript, React, JavaScript, HTML/CSS
Backend:      Java, Spring Boot, C#, .NET, Python, Node.js
Database:     MSSQL, MongoDB
DevOps:       Docker, Kubernetes, GitLab CI/CD, Rancher
APIs:         REST, SOAP

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Operating Room Optimization - 30%+ efficiency increase
• Barber Platform (KuaförBul) - Live on Vercel
• Patient Tracking System - Used daily in hospital
• SKT Takip - Expiry date tracking app
    `.trim();

        const blob = new Blob([resumeContent], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = language === "tr" ? "Ensar_Kaplan_CV.txt" : "Ensar_Kaplan_Resume.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-300"
        >
            <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <div className="text-left">
                <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {language === "tr" ? "CV İndir" : "Download Resume"}
                </p>
                <p className="text-xs text-gray-500">TXT</p>
            </div>
        </motion.button>
    );
}
