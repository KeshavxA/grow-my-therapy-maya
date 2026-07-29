"use client";

import { useState } from "react";

interface GlossaryTooltipProps {
    term: string;
    definition: string;
    children: React.ReactNode;
}

export default function GlossaryTooltip({ term, definition, children }: GlossaryTooltipProps) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <span 
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
        >
            <span 
                className="border-b-[1.5px] border-dotted border-[var(--color-sage)] cursor-help hover:text-[var(--color-sage)] transition-colors focus:outline-none"
                tabIndex={0}
                aria-describedby={`tooltip-${term}`}
            >
                {children}
            </span>

            {/* Tooltip Content */}
            <div 
                id={`tooltip-${term}`}
                role="tooltip"
                className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 sm:w-64 p-3 bg-white dark:bg-black/90 border border-[var(--color-sage)]/30 rounded-xl shadow-xl z-50 pointer-events-none transition-all duration-200 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
            >
                <div className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-sage)] mb-1">
                    Clinical Term
                </div>
                <div className="font-serif text-sm font-bold text-[var(--text-main)] mb-1">
                    {term}
                </div>
                <div className="font-sans text-xs text-[var(--text-main)] opacity-80 leading-relaxed text-left">
                    {definition}
                </div>
                {/* Triangle Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[var(--color-sage)]/30"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] border-[3px] border-transparent border-t-white dark:border-t-black/90"></div>
            </div>
        </span>
    );
}
