"use client";

import { useState, useEffect } from "react";

export default function A11yScaler() {
    const [scale, setScale] = useState<number>(100);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Apply text scaling to root html element
        if (scale === 100) {
            document.documentElement.style.fontSize = "16px";
        } else if (scale === 110) {
            document.documentElement.style.fontSize = "17.6px";
        } else if (scale === 120) {
            document.documentElement.style.fontSize = "19.2px";
        }
    }, [scale]);

    return (
        <div className="fixed bottom-6 left-20 z-40 flex items-center gap-2 font-sans">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="px-3 py-2 rounded-full bg-white/85 dark:bg-black/85 text-[var(--color-sage)] shadow-lg border border-[var(--color-sage)]/30 hover:bg-[var(--color-sage)] hover:text-white transition-all duration-300 backdrop-blur-md flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider group"
                title="Accessibility: Adjust text size"
                aria-label="Accessibility text size selector"
            >
                <span className="text-sm font-serif font-extrabold">A</span>
                <span className="text-xs font-serif font-normal">a</span>
                <span className="text-[10px] opacity-80 pl-0.5 font-sans">{scale}%</span>
            </button>

            {isOpen && (
                <div className="flex items-center gap-1 bg-white/95 dark:bg-black/95 p-1.5 rounded-full border border-[var(--color-sage)]/40 shadow-xl animate-fadeIn">
                    {[100, 110, 120].map((size) => (
                        <button
                            key={size}
                            onClick={() => {
                                setScale(size);
                                setIsOpen(false);
                            }}
                            className={`px-2.5 py-1 rounded-full text-xs font-bold transition-colors ${
                                scale === size
                                    ? "bg-[var(--color-sage)] text-white shadow-xs"
                                    : "text-[var(--text-main)] hover:bg-[var(--color-sage)]/15"
                            }`}
                        >
                            {size === 100 ? "Normal" : `${size}%`}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
