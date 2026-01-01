"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { useLanguage } from "./LanguageProvider";

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/ensarkaplance/",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        name: "GitHub",
        href: "https://github.com/ensarce",
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
        ),
    },
    {
        name: "Email",
        href: "mailto:ensarkaplan.ce@gmail.com",
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[800px] h-[200px] sm:h-[400px] bg-gradient-to-t from-cyan-500/10 to-transparent rounded-full blur-[60px] sm:blur-[100px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
                    {/* Left Side - Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                {t.contactTitle1}
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                {t.contactTitle2}
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base sm:text-lg mb-3 sm:mb-4">
                            {t.contactSubtitle}
                        </p>
                        <p className="text-gray-500 text-sm sm:text-base mb-6 sm:mb-8 flex items-center gap-2">
                            <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {t.location}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-900 border border-gray-800 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors duration-300"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>

                        {/* Quick Contact */}
                        <div className="space-y-3">
                            <a
                                href="mailto:ensarkaplan.ce@gmail.com"
                                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group text-sm sm:text-base"
                            >
                                <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>
                                <span className="break-all">ensarkaplan.ce@gmail.com</span>
                            </a>
                            <a
                                href="tel:+905530762925"
                                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group text-sm sm:text-base"
                            >
                                <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-gray-800 rounded-lg group-hover:bg-cyan-500/10 transition-colors flex-shrink-0">
                                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </span>
                                <span>+90 553 076 29 25</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <ContactForm />
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                        <p data-easter-egg="logo" className="cursor-pointer hover:text-gray-400 transition-colors text-center sm:text-left">
                            © {new Date().getFullYear()} Ensar Kaplan. {t.copyright}
                        </p>
                        <p className="text-gray-600 text-center">
                            {t.builtWith} ❤️
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
