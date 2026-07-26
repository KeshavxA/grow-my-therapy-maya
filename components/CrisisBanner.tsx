"use client";

import { useState } from "react";

export default function CrisisBanner() {
    const [isDismissed, setIsDismissed] = useState(false);

    if (isDismissed) return null;

    return (
        <div className="w-full bg-[var(--color-sage)]/10 border-b border-[var(--color-sage)]/20 px-4 py-2 text-center text-xs text-[var(--text-main)] transition-all duration-300 relative flex items-center justify-center">
            <div className="flex items-center gap-2 max-w-4xl pr-8">
                <span className="w-2 h-2 rounded-full bg-[var(--color-sage)] animate-pulse inline-block flex-shrink-0" />
                <span>
                    <strong>In crisis or emergency?</strong> Please do not wait for an appointment. Call or text <strong>988</strong> (Suicide & Crisis Lifeline) available 24/7, or go to your nearest emergency room.
                </span>
            </div>
            <button
                onClick={() => setIsDismissed(true)}
                className="absolute right-4 text-[var(--text-main)] opacity-60 hover:opacity-100 p-1 font-bold text-sm leading-none transition-opacity"
                aria-label="Dismiss banner"
            >
                ✕
            </button>
        </div>
    );
}
