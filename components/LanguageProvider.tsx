"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";

type Language = "tr" | "en";

interface Translations {
    // Hero
    availableForProjects: string;
    heroHeadline1: string;
    heroHeadline2: string;
    heroSubheadline: string;
    getInTouch: string;
    githubProfile: string;
    downloadResume: string;

    // About
    aboutTitle: string;
    myPhilosophy: string;
    philosophyQuote: string;
    yearsExperience: string;
    atHospital: string;
    techStack: string;

    // Skills
    skillsTitle: string;
    skillsSubtitle: string;
    frontend: string;
    backend: string;
    databaseDevops: string;

    // Services
    servicesTitle: string;
    servicesSubtitle: string;

    // Portfolio
    portfolioTitle: string;
    portfolioSubtitle: string;
    allProjects: string;
    viewProject: string;
    viewCode: string;

    // Stats
    projectsShipped: string;
    yearsAtHospital: string;
    githubRepos: string;
    yearsInTech: string;

    // Contact
    contactTitle1: string;
    contactTitle2: string;
    contactSubtitle: string;
    sendMessage: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    sendEmail: string;
    emailOpened: string;
    emailOpenedDesc: string;
    sendAnother: string;
    emailNote: string;

    // Footer
    location: string;
    copyright: string;
    builtWith: string;

    // Chat
    chatWelcome: string;
    chatPlaceholder: string;
    askExperience: string;
    askTech: string;
    askProjects: string;
}

const translations: Record<Language, Translations> = {
    tr: {
        availableForProjects: "Yeni projeler için müsaitim",
        heroHeadline1: "Gerçek problemleri çözen",
        heroHeadline2: "uygulamalar geliştiriyorum.",
        heroSubheadline: "Angular & .NET Uzmanı • Sağlık Yazılımları Uzmanı",
        getInTouch: "İletişime Geç",
        githubProfile: "GitHub Profili",
        downloadResume: "CV İndir",

        aboutTitle: "Hakkımda",
        myPhilosophy: "Felsefem",
        philosophyQuote: "En iyi geliştiricilerin en iyi özelliği en iyi kodu yazmak değil — işi en iyi anlamaktır.",
        yearsExperience: "yıl deneyim",
        atHospital: "Hisar Intercontinental Hospital'da",
        techStack: "Teknoloji Yığını",

        skillsTitle: "Yetenekler & Uzmanlık",
        skillsSubtitle: "Full-stack geliştirme yetkinlikleri",
        frontend: "Frontend",
        backend: "Backend",
        databaseDevops: "Database & DevOps",

        servicesTitle: "Hizmetler",
        servicesSubtitle: "Sunduğum çözümler",

        portfolioTitle: "Projeler",
        portfolioSubtitle: "Tamamlanan ve devam eden projeler",
        allProjects: "Tümü",
        viewProject: "Projeyi Gör",
        viewCode: "Kodu Gör",

        projectsShipped: "Tamamlanan Proje",
        yearsAtHospital: "Yıl Hastanede",
        githubRepos: "GitHub Repo",
        yearsInTech: "Yıl Teknolojide",

        contactTitle1: "Birlikte Harika Bir Şeyler",
        contactTitle2: "İnşa Edelim",
        contactSubtitle: "Sağlık veya kurumsal projeniz için bir Full Stack Developer mi arıyorsunuz?",
        sendMessage: "Mesaj Gönder",
        formName: "İsim",
        formEmail: "Email",
        formSubject: "Konu",
        formMessage: "Mesaj",
        sendEmail: "Email Gönder",
        emailOpened: "Email Açıldı!",
        emailOpenedDesc: "Email uygulamanız açıldı. Mesajı göndermek için oradaki 'Gönder' butonuna tıklayın.",
        sendAnother: "Yeni mesaj gönder",
        emailNote: "Bu buton email uygulamanızı açacaktır",

        location: "İstanbul, Türkiye",
        copyright: "Tüm hakları saklıdır.",
        builtWith: "Next.js, TypeScript & TailwindCSS ile yapıldı",

        chatWelcome: "Merhaba! 👋 Ben Ensar'ın AI asistanıyım. Deneyimleri, projeleri veya teknolojileri hakkında sorularınızı yanıtlayabilirim.",
        chatPlaceholder: "Bir soru sorun...",
        askExperience: "Deneyimlerin neler?",
        askTech: "Hangi teknolojileri biliyorsun?",
        askProjects: "Projelerin neler?",
    },
    en: {
        availableForProjects: "Available for new projects",
        heroHeadline1: "I build apps that",
        heroHeadline2: "solve real problems.",
        heroSubheadline: "Angular & .NET Specialist • Healthcare Software Expert",
        getInTouch: "Get In Touch",
        githubProfile: "GitHub Profile",
        downloadResume: "Download Resume",

        aboutTitle: "About",
        myPhilosophy: "My Philosophy",
        philosophyQuote: "The best feature of the best developers isn't writing the best code — it's understanding the business the best.",
        yearsExperience: "years experience",
        atHospital: "at Hisar Intercontinental Hospital",
        techStack: "Tech Stack",

        skillsTitle: "Skills & Expertise",
        skillsSubtitle: "Technical proficiency across the full development stack",
        frontend: "Frontend",
        backend: "Backend",
        databaseDevops: "Database & DevOps",

        servicesTitle: "Services",
        servicesSubtitle: "Solutions I provide",

        portfolioTitle: "Portfolio",
        portfolioSubtitle: "Completed and ongoing projects",
        allProjects: "All",
        viewProject: "View Project",
        viewCode: "View Code",

        projectsShipped: "Projects Shipped",
        yearsAtHospital: "Years at Hospital",
        githubRepos: "GitHub Repos",
        yearsInTech: "Years in Tech",

        contactTitle1: "Let's Build Something",
        contactTitle2: "Amazing Together",
        contactSubtitle: "Looking for a dedicated Full Stack Developer for your healthcare or enterprise project?",
        sendMessage: "Send a Message",
        formName: "Name",
        formEmail: "Email",
        formSubject: "Subject",
        formMessage: "Message",
        sendEmail: "Send Email",
        emailOpened: "Email Opened!",
        emailOpenedDesc: "Your email app opened. Click 'Send' there to deliver your message.",
        sendAnother: "Send another message",
        emailNote: "This button will open your email app",

        location: "Istanbul, Turkey",
        copyright: "All rights reserved.",
        builtWith: "Built with Next.js, TypeScript & TailwindCSS",

        chatWelcome: "Hello! 👋 I'm Ensar's AI assistant. I can answer questions about his experience, projects, or technologies.",
        chatPlaceholder: "Ask a question...",
        askExperience: "What's your experience?",
        askTech: "What technologies do you know?",
        askProjects: "What are your projects?",
    },
};

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => { },
    t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("portfolio-language") as Language | null;
        if (savedLang && (savedLang === "tr" || savedLang === "en")) {
            setLanguageState(savedLang);
        } else {
            // Detect browser language
            const browserLang = navigator.language.toLowerCase();
            if (browserLang.startsWith("tr")) {
                setLanguageState("tr");
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("portfolio-language", lang);
    };

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            t: translations[language],
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}

export { translations };
export type { Language, Translations };
