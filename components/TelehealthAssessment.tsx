"use client";

import { useState } from "react";

export default function TelehealthAssessment() {
    const [view, setView] = useState<"telehealth" | "in-person">("telehealth");

    const telehealthPoints = [
        "I need the flexibility to do therapy from home on my lunch break.",
        "I feel safest opening up when I'm in my own physical space.",
        "Commuting adds unnecessary stress to my week.",
        "I have a private, quiet room where I won't be interrupted.",
        "I live outside the immediate city but still in the state."
    ];

    const inPersonPoints = [
        "I need therapy to be a distinct, physical 'destination' away from my home.",
        "I live with roommates/family and struggle to find complete privacy.",
        "I benefit deeply from sharing physical presence and energetic space.",
        "I enjoy the ritual of commuting as 'transition time' before and after sessions.",
        "I find it hard to focus on emotional work through a screen."
    ];

    return (
        <section className="w-full py-20 px-6 md:px-16 bg-white dark:bg-black/10 border-t border-[var(--color-sage)]/10">
            <div className="container mx-auto max-w-4xl text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2 block">
                    Session Formats
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-main)] tracking-tight mb-6">
                    Is Telehealth Right for Me?
                </h2>
                <p className="font-sans text-base text-[var(--text-main)] opacity-80 leading-relaxed max-w-2xl mx-auto mb-10">
                    I offer both secure video sessions and in-person meetings. If you're unsure which format suits your nervous system and lifestyle best, explore the statements below.
                </p>

                {/* Toggle Container */}
                <div className="flex justify-center mb-8">
                    <div className="bg-gray-100 dark:bg-black/20 p-1 rounded-full inline-flex border border-gray-200 dark:border-gray-800 shadow-inner">
                        <button
                            onClick={() => setView("telehealth")}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                                view === "telehealth"
                                    ? "bg-[var(--color-sage)] text-white shadow-md scale-100"
                                    : "text-[var(--text-main)] opacity-60 hover:opacity-100 scale-95"
                            }`}
                        >
                            Telehealth
                        </button>
                        <button
                            onClick={() => setView("in-person")}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                                view === "in-person"
                                    ? "bg-[var(--text-main)] text-white shadow-md scale-100"
                                    : "text-[var(--text-main)] opacity-60 hover:opacity-100 scale-95"
                            }`}
                        >
                            In-Person
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative min-h-[300px] flex items-center justify-center">
                    {/* Telehealth View */}
                    <div className={`absolute w-full transition-all duration-500 ease-in-out ${
                        view === "telehealth" ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none z-0"
                    }`}>
                        <div className="bg-[var(--color-sage)]/5 border border-[var(--color-sage)]/30 rounded-3xl p-8 max-w-2xl mx-auto text-left shadow-sm">
                            <h3 className="font-serif text-2xl text-[var(--text-main)] font-bold mb-6 flex items-center gap-3">
                                💻 Telehealth might be great if...
                            </h3>
                            <ul className="space-y-4">
                                {telehealthPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[var(--text-main)] opacity-90">
                                        <span className="text-[var(--color-sage)] mt-0.5">✦</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* In-Person View */}
                    <div className={`absolute w-full transition-all duration-500 ease-in-out ${
                        view === "in-person" ? "opacity-100 translate-y-0 relative z-10" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none z-0"
                    }`}>
                        <div className="bg-[var(--text-main)]/5 border border-[var(--text-main)]/20 rounded-3xl p-8 max-w-2xl mx-auto text-left shadow-sm">
                            <h3 className="font-serif text-2xl text-[var(--text-main)] font-bold mb-6 flex items-center gap-3">
                                🛋️ In-Person might be great if...
                            </h3>
                            <ul className="space-y-4">
                                {inPersonPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-[var(--text-main)] opacity-90">
                                        <span className="opacity-60 mt-0.5">✦</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-main)] opacity-60">
                        *Note: We can also do a hybrid approach depending on your schedule.
                    </p>
                </div>
            </div>
        </section>
    );
}
