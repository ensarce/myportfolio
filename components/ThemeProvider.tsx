"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { },
});

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("portfolio-theme") as Theme | null;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const html = document.documentElement;
        const body = document.body;

        if (theme === "light") {
            html.classList.add("light");
            html.classList.remove("dark");
            body.style.backgroundColor = "#ffffff";
            body.style.color = "#171717";
        } else {
            html.classList.add("dark");
            html.classList.remove("light");
            body.style.backgroundColor = "#000000";
            body.style.color = "#ededed";
        }

        localStorage.setItem("portfolio-theme", theme);
    }, [theme, mounted]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}
