"use client";

import { useState } from "react";
import CrisisHelplineDrawer from "./CrisisHelplineDrawer";

export default function CrisisBanner() {
    const [isDismissed, setIsDismissed] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    if (isDismissed) return null;

    return (
        <>
            <div className="w-full bg-red-50 dark:bg-red-950/20 border-b border-red-200 dark:border-red-900/30 px-4 py-2.5 text-center text-xs text-[var(--text-main)] transition-all duration-300 relative flex items-center justify-center">
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 max-w-4xl pr-8">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block flex-shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                        <span>
                            <strong>In crisis or emergency?</strong> Please do not wait for an appointment.
                        </span>
                    </div>
                    <button 
                        onClick={() => setIsDrawerOpen(true)}
                        className="px-3 py-1 bg-red-100 dark:bg-red-900/40 hover:bg-red-200 dark:hover:bg-red-900/60 text-red-700 dark:text-red-300 rounded-md font-bold text-[10px] uppercase tracking-widest transition-colors border border-red-200 dark:border-red-800/50 flex items-center gap-1 shadow-sm"
                    >
                        <span>View 24/7 Helplines</span>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <button
                    onClick={() => setIsDismissed(true)}
                    className="absolute right-4 text-[var(--text-main)] opacity-50 hover:opacity-100 p-1 font-bold text-sm leading-none transition-opacity bg-white/50 dark:bg-black/20 rounded-full w-6 h-6 flex items-center justify-center"
                    aria-label="Dismiss banner"
                >
                    ✕
                </button>
            </div>

            <CrisisHelplineDrawer 
                isOpen={isDrawerOpen} 
                onClose={() => setIsDrawerOpen(false)} 
            />
        </>
    );
}
