"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}

// Demo responses for static site (no API)
const demoResponses = {
    tr: {
        experience: "Hisar Intercontinental Hospital'da 3+ yıldır Full Stack Developer olarak çalışıyorum. Angular, Java Spring Boot, C# .NET ve MSSQL ile kurumsal sağlık yazılımları geliştiriyorum.",
        tech: "Angular, TypeScript, React (Frontend), Java, Spring Boot, C#/.NET, Python (Backend), MSSQL, MongoDB (Database), Docker, Kubernetes, GitLab CI/CD (DevOps) kullanıyorum.",
        projects: "Ameliyathane Optimizasyonu (%30+ verimlilik), Hasta Takip Sistemi, KuaförBul Platform (Vercel'de canlı), SKT Takip uygulaması gibi projelerim var.",
        default: "Merhaba! Ensar hakkında sorularınızı yanıtlayabilirim. Deneyimleri, projeleri veya teknolojileri hakkında soru sorabilirsiniz.",
    },
    en: {
        experience: "I've been working as a Full Stack Developer at Hisar Intercontinental Hospital for 3+ years. I build enterprise healthcare software with Angular, Java Spring Boot, C# .NET, and MSSQL.",
        tech: "I use Angular, TypeScript, React (Frontend), Java, Spring Boot, C#/.NET, Python (Backend), MSSQL, MongoDB (Database), Docker, Kubernetes, GitLab CI/CD (DevOps).",
        projects: "My projects include Operating Room Optimization (30%+ efficiency), Patient Tracking System, KuaförBul Platform (live on Vercel), and SKT Takip app.",
        default: "Hello! I can answer questions about Ensar. Feel free to ask about his experience, projects, or technologies.",
    },
};

function getResponse(input: string, lang: "tr" | "en"): string {
    const lowercaseInput = input.toLowerCase();
    const responses = demoResponses[lang];

    if (lowercaseInput.includes("deneyim") || lowercaseInput.includes("experience") || lowercaseInput.includes("work") || lowercaseInput.includes("çalış")) {
        return responses.experience;
    }
    if (lowercaseInput.includes("teknoloji") || lowercaseInput.includes("tech") || lowercaseInput.includes("stack") || lowercaseInput.includes("kullan")) {
        return responses.tech;
    }
    if (lowercaseInput.includes("proje") || lowercaseInput.includes("project") || lowercaseInput.includes("yaptı") || lowercaseInput.includes("built")) {
        return responses.projects;
    }
    return responses.default;
}

export default function ChatBot() {
    const { language, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setMessages([{
            id: "welcome",
            role: "assistant",
            content: t.chatWelcome,
            timestamp: new Date(),
        }]);
    }, [language, t.chatWelcome]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input.trim(),
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        setTimeout(() => {
            const response = getResponse(userMessage.content, language as "tr" | "en");

            const assistantMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: response,
                timestamp: new Date(),
            };

            setMessages((prev) => [...prev, assistantMessage]);
            setIsLoading(false);
        }, 800);
    };

    const quickSuggestions = [t.askExperience, t.askTech, t.askProjects];

    return (
        <>
            {/* Floating Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-cyan-500/30 flex items-center justify-center hover:shadow-cyan-500/50 transition-shadow duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Chat with AI Assistant"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.svg
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            className="w-5 h-5 sm:w-6 sm:h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </motion.svg>
                    ) : (
                        <motion.svg
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            className="w-6 h-6 sm:w-7 sm:h-7"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </motion.svg>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-20 right-2 left-2 sm:bottom-28 sm:right-6 sm:left-auto z-50 sm:w-[380px] h-[70vh] sm:h-[520px] max-h-[600px] bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl shadow-black/50 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-800">
                            <div className="relative">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full border-2 border-gray-900" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-white text-sm sm:text-base truncate">
                                    {language === "tr" ? "Ensar'ın Asistanı" : "Ensar's Assistant"}
                                </h3>
                                <p className="text-xs text-gray-400 truncate">
                                    {language === "tr" ? "Hızlı cevaplar" : "Quick answers"}
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[90%] sm:max-w-[85%] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${message.role === "user"
                                                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-br-md"
                                                : "bg-gray-800 text-gray-200 rounded-bl-md"
                                            }`}
                                    >
                                        <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex justify-start"
                                >
                                    <div className="bg-gray-800 text-gray-200 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl rounded-bl-md">
                                        <div className="flex gap-1.5">
                                            <motion.div
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                                                className="w-2 h-2 bg-cyan-400 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                                                className="w-2 h-2 bg-cyan-400 rounded-full"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.4, 1, 0.4] }}
                                                transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                                                className="w-2 h-2 bg-cyan-400 rounded-full"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Suggestions */}
                        <div className="px-3 sm:px-4 py-2 border-t border-gray-800/50">
                            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                                {quickSuggestions.map((suggestion) => (
                                    <button
                                        key={suggestion}
                                        onClick={() => setInput(suggestion)}
                                        className="flex-shrink-0 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs bg-gray-800 text-gray-400 rounded-full hover:bg-gray-700 hover:text-cyan-400 transition-colors border border-gray-700"
                                    >
                                        {suggestion}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-3 sm:p-4 border-t border-gray-800">
                            <div className="flex gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={t.chatPlaceholder}
                                    className="flex-1 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors text-xs sm:text-sm"
                                    disabled={isLoading}
                                />
                                <motion.button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
