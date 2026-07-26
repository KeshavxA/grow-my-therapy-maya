"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-white/80 dark:bg-black/80 text-[var(--color-sage)] shadow-lg border border-[var(--color-sage)]/30 hover:bg-[var(--color-sage)] hover:text-white transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-md flex items-center justify-center group"
            title="Scroll back to top"
            aria-label="Scroll back to top"
        >
            <svg className="w-5 h-5 transform group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
        </button>
    );
}
