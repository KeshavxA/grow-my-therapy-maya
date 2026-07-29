"use client";

import { useState } from "react";

interface TimelinePhase {
    id: string;
    phase: string;
    title: string;
    summary: string;
    details: string[];
}

export default function JourneyTimeline() {
    const [activePhase, setActivePhase] = useState<string>("phase-1");

    const phases: TimelinePhase[] = [
        {
            id: "phase-1",
            phase: "Phase 1",
            title: "Intake & Safety Building",
            summary: "Establishing trust, exploring your history, and learning nervous system regulation tools.",
            details: [
                "Collaborative intake assessment to understand your goals.",
                "Mapping your nervous system's unique stress responses.",
                "Learning grounding techniques (like box breathing or somatics) to ensure you always feel safe."
            ]
        },
        {
            id: "phase-2",
            phase: "Phase 2",
            title: "Core Processing & Exploration",
            summary: "The deep work of untangling limiting beliefs, processing trauma, and reshaping relational patterns.",
            details: [
                "Using EMDR or IFS to gently approach difficult memories without re-traumatization.",
                "Identifying and reshaping protective but outdated behavioral patterns.",
                "Practicing new boundary-setting and communication skills in a safe environment."
            ]
        },
        {
            id: "phase-3",
            phase: "Phase 3",
            title: "Integration & Maintenance",
            summary: "Solidifying new neural pathways, celebrating growth, and transitioning to long-term wellness.",
            details: [
                "Testing new coping strategies in real-world scenarios.",
                "Spacing out sessions (e.g., bi-weekly to monthly) to practice independence.",
                "Creating a personalized 'maintenance toolkit' for future stressors."
            ]
        }
    ];

    return (
        <section className="w-full py-24 px-6 md:px-16 bg-[var(--bg-cream)]">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2 block">
                        The Clinical Process
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-main)] tracking-tight mb-4">
                        What to Expect from Our Journey
                    </h2>
                    <p className="font-sans text-base text-[var(--text-main)] opacity-80 max-w-2xl mx-auto">
                        Healing is rarely a straight line, but having a roadmap can ease anxiety. Here is the general structure of how we will move from distress to deep resilience.
                    </p>
                </div>

                <div className="relative border-l-2 border-[var(--color-sage)]/20 ml-4 md:ml-8 space-y-12 pb-8">
                    {phases.map((phase, index) => {
                        const isActive = activePhase === phase.id;
                        return (
                            <div key={phase.id} className="relative pl-8 md:pl-12 group">
                                {/* Timeline Dot */}
                                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                    isActive 
                                        ? "bg-[var(--color-sage)] border-[var(--color-sage)] shadow-[0_0_12px_rgba(102,123,104,0.6)]" 
                                        : "bg-[var(--bg-cream)] border-[var(--color-sage)]/40 group-hover:border-[var(--color-sage)]"
                                }`}></div>

                                <button
                                    onClick={() => setActivePhase(isActive ? "" : phase.id)}
                                    className="w-full text-left focus:outline-none"
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                                        <span className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                                            isActive ? "text-[var(--color-sage)]" : "text-[var(--text-main)] opacity-50 group-hover:opacity-80"
                                        }`}>
                                            {phase.phase}
                                        </span>
                                        <h3 className={`font-serif text-2xl transition-colors ${
                                            isActive ? "text-[var(--text-main)] font-bold" : "text-[var(--text-main)] opacity-80"
                                        }`}>
                                            {phase.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm md:text-base text-[var(--text-main)] opacity-80 mb-4 pr-4">
                                        {phase.summary}
                                    </p>
                                    
                                    <div className={`text-xs text-[var(--color-sage)] font-bold tracking-wider uppercase flex items-center gap-1 transition-opacity ${isActive ? "opacity-0 hidden" : "opacity-60 group-hover:opacity-100"}`}>
                                        Read More <span>↓</span>
                                    </div>
                                </button>

                                {/* Expandable Details */}
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                    isActive ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                                }`}>
                                    <div className="bg-white/60 dark:bg-black/10 rounded-2xl p-6 border border-[var(--color-sage)]/20 shadow-sm">
                                        <ul className="space-y-3">
                                            {phase.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-[var(--text-main)] text-sm md:text-base opacity-90">
                                                    <span className="text-[var(--color-sage)] mt-1 shrink-0">✦</span>
                                                    <span>{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
