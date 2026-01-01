"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Create mailto link with form data
        const mailtoSubject = encodeURIComponent(`[Portfolio] ${formData.subject}`);
        const mailtoBody = encodeURIComponent(
            `Gönderen / From: ${formData.name}\nEmail: ${formData.email}\n\nMesaj / Message:\n${formData.message}`
        );

        // Open in new window to ensure it works
        const mailtoLink = `mailto:ensarkaplan.ce@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

        // Try opening with window.open first
        const emailWindow = window.open(mailtoLink, "_blank");

        // Fallback to location.href if popup blocked
        if (!emailWindow) {
            window.location.href = mailtoLink;
        }

        // Show success after delay
        setTimeout(() => {
            setSubmitted(true);
            setIsSubmitting(false);
            setFormData({ name: "", email: "", subject: "", message: "" });
        }, 1000);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center"
            >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{t.emailOpened}</h3>
                <p className="text-gray-400 mb-4">{t.emailOpenedDesc}</p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                    {t.sendAnother}
                </button>
            </motion.div>
        );
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
            <h3 className="text-xl font-semibold text-white mb-6">{t.sendMessage}</h3>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                        {t.formName}
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                        placeholder={t.formName}
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                        {t.formEmail}
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                        placeholder="email@example.com"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                    {t.formSubject}
                </label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors"
                    placeholder={t.formSubject}
                />
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    {t.formMessage}
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-colors resize-none"
                    placeholder={t.formMessage}
                />
            </div>

            <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                    <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        ...
                    </>
                ) : (
                    <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {t.sendEmail}
                    </>
                )}
            </motion.button>

            <p className="text-center text-gray-600 text-xs mt-4">
                💡 {t.emailNote}
            </p>
        </motion.form>
    );
}
