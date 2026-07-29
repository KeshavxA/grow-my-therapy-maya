"use client";

import { useState, useEffect } from "react";

interface ChecklistItem {
    id: string;
    text: string;
    detail: string;
}

export default function SessionPrepChecklist() {
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
    const [progress, setProgress] = useState(0);

    const checklist: ChecklistItem[] = [
        {
            id: "space",
            text: "Create a private, comfortable space",
            detail: "Find a quiet room where you won't be interrupted. Feel free to bring a blanket, a pet, or a warm cup of tea to help ground your nervous system."
        },
        {
            id: "tech",
            text: "Check your technology setup",
            detail: "If we're meeting virtually, ensure your device is charged and your internet connection is stable. Headphones can help with privacy and focus."
        },
        {
            id: "forms",
            text: "Complete intake paperwork",
            detail: "Take 10 minutes to fill out the digital intake forms sent to your email. This allows us to focus entirely on you during our time together, rather than logistics."
        },
        {
            id: "goals",
            text: "Jot down a few loose thoughts",
            detail: "You don't need a perfectly rehearsed script. Just noting 1-2 things that are currently feeling heavy can be a helpful starting point."
        },
        {
            id: "grace",
            text: "Give yourself permission to just 'be'",
            detail: "There is no 'right' way to do therapy. Showing up exactly as you are—messy, tired, anxious, or blank—is exactly where we start."
        }
    ];

    useEffect(() => {
        const completedCount = Object.values(checkedItems).filter(Boolean).length;
        setProgress((completedCount / checklist.length) * 100);
    }, [checkedItems, checklist.length]);

    const toggleItem = (id: string) => {
        setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <section className="w-full py-20 px-6 md:px-16 bg-white dark:bg-black/10 border-y border-[var(--color-sage)]/10">
            <div className="container mx-auto max-w-4xl flex flex-col md:flex-row gap-12 items-center">
                
                {/* Left Side: Context */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-3 block">
                        Intake Preparation
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-main)] tracking-tight mb-6">
                        Before Your First Session
                    </h2>
                    <p className="font-sans text-base text-[var(--text-main)] opacity-80 leading-relaxed mb-6">
                        Starting therapy is a courageous step, and it's completely normal to feel a mix of relief and anxiety. To help reduce the clinical unknown, I've created this gentle checklist.
                    </p>
                    <p className="font-sans text-base text-[var(--text-main)] opacity-80 leading-relaxed mb-8">
                        Use it to ground yourself and gently prepare your physical space and emotional capacity before we meet.
                    </p>

                    <div className="bg-[var(--bg-cream)] dark:bg-black/20 p-6 rounded-3xl border border-[var(--color-sage)]/20">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-sage)]">Preparation Progress</span>
                            <span className="text-xs font-bold text-[var(--text-main)] opacity-70">{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                            <div 
                                className="bg-[var(--color-sage)] h-full transition-all duration-700 ease-out" 
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        {progress === 100 && (
                            <p className="text-xs text-[var(--color-sage)] mt-3 font-bold animate-fadeIn">
                                ✨ You're all set. Take a deep breath. I'll see you soon.
                            </p>
                        )}
                    </div>
                </div>

                {/* Right Side: Interactive Checklist */}
                <div className="w-full md:w-1/2 space-y-4">
                    {checklist.map((item) => {
                        const isChecked = !!checkedItems[item.id];
                        return (
                            <button
                                key={item.id}
                                onClick={() => toggleItem(item.id)}
                                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 group ${
                                    isChecked 
                                        ? "bg-[var(--color-sage)]/5 border-[var(--color-sage)]/30 opacity-70" 
                                        : "bg-white dark:bg-black/30 border-gray-200 dark:border-gray-700 hover:border-[var(--color-sage)] hover:shadow-md"
                                }`}
                            >
                                <div className={`w-6 h-6 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors mt-0.5 ${
                                    isChecked 
                                        ? "bg-[var(--color-sage)] border-[var(--color-sage)] text-white" 
                                        : "border-gray-300 dark:border-gray-600 text-transparent group-hover:border-[var(--color-sage)]"
                                }`}>
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className={`font-sans text-sm md:text-base font-bold transition-colors ${
                                        isChecked ? "text-[var(--color-sage)] line-through decoration-[var(--color-sage)]/50" : "text-[var(--text-main)]"
                                    }`}>
                                        {item.text}
                                    </h4>
                                    <p className={`font-sans text-xs md:text-sm mt-1 transition-opacity ${
                                        isChecked ? "text-[var(--text-main)] opacity-50" : "text-[var(--text-main)] opacity-70"
                                    }`}>
                                        {item.detail}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
