"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
];

export default function EasterEggs() {
    const [konamiIndex, setKonamiIndex] = useState(0);
    const [showSecret, setShowSecret] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const [showMatrix, setShowMatrix] = useState(false);

    // Konami Code listener
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.code === KONAMI_CODE[konamiIndex]) {
            const nextIndex = konamiIndex + 1;
            if (nextIndex === KONAMI_CODE.length) {
                // Konami code completed!
                setShowSecret(true);
                setKonamiIndex(0);
                setTimeout(() => setShowSecret(false), 5000);
            } else {
                setKonamiIndex(nextIndex);
            }
        } else {
            setKonamiIndex(0);
        }
    }, [konamiIndex]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    // Logo click counter (hidden in footer)
    useEffect(() => {
        const handleLogoClick = () => {
            setClickCount((prev) => {
                const newCount = prev + 1;
                if (newCount >= 7) {
                    setShowMatrix(true);
                    setTimeout(() => setShowMatrix(false), 3000);
                    return 0;
                }
                return newCount;
            });
        };

        const logo = document.querySelector('[data-easter-egg="logo"]');
        if (logo) {
            logo.addEventListener("click", handleLogoClick);
            return () => logo.removeEventListener("click", handleLogoClick);
        }
    }, []);

    return (
        <>
            {/* Konami Code Secret */}
            <AnimatePresence>
                {showSecret && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, y: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: -50 }}
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] bg-gray-900/95 backdrop-blur-xl border border-cyan-500 rounded-2xl p-8 text-center shadow-2xl shadow-cyan-500/30"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 1, repeat: 2 }}
                            className="text-6xl mb-4"
                        >
                            🎮
                        </motion.div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            🎉 Konami Code Activated!
                        </h3>
                        <p className="text-cyan-400 mb-4">
                            You found the secret! You're a true gamer.
                        </p>
                        <div className="text-gray-500 text-sm font-mono">
                            ↑ ↑ ↓ ↓ ← → ← → B A
                        </div>
                        <motion.div
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 5, ease: "linear" }}
                            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-4"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Matrix Effect */}
            <AnimatePresence>
                {showMatrix && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] pointer-events-none overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-black/80" />
                        {Array.from({ length: 50 }).map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: "100vh", opacity: [0, 1, 1, 0] }}
                                transition={{
                                    duration: Math.random() * 2 + 1,
                                    delay: Math.random() * 0.5,
                                    repeat: 2,
                                }}
                                className="absolute text-green-500 font-mono text-sm"
                                style={{ left: `${Math.random() * 100}%` }}
                            >
                                {Array.from({ length: 20 }).map((_, j) => (
                                    <div key={j}>
                                        {String.fromCharCode(0x30A0 + Math.random() * 96)}
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.h2
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-4xl font-bold text-green-400 font-mono"
                            >
                                SYSTEM HACKED 🔓
                            </motion.h2>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hidden hint in corner */}
            <div className="fixed bottom-2 left-2 text-[8px] text-gray-800 hover:text-gray-600 transition-colors cursor-default select-none z-50">
                ↑↑↓↓←→←→BA
            </div>
        </>
    );
}
