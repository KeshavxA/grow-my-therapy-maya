"use client";

import { useState } from "react";
import GlossaryTooltip from "./GlossaryTooltip";

interface ServiceInfo {
    title: string;
    summary: string;
    bullets: string[];
    duration: string;
    pacingBadge: string;
    pacingTip: React.ReactNode;
    modality: string;
    detailedDescription: React.ReactNode;
    icon: React.ReactNode;
}

export default function ServicesGrid() {
    const [selectedService, setSelectedService] = useState<ServiceInfo | null>(null);
    const [activePacingTip, setActivePacingTip] = useState<number | null>(null);

    const services: ServiceInfo[] = [
        {
            title: "Self-Esteem",
            summary: "Do you struggle with a harsh inner critic? Building a strong sense of self-worth is key to living a fulfilled life.",
            bullets: ["Quieting the Inner Critic", "Setting Boundaries", "Cultivating Self-Compassion"],
            duration: "50-minute weekly sessions",
            pacingBadge: "🕒 50m Weekly Rhythm",
            pacingTip: "Weekly pacing builds steady neurological safety and relational consistency, allowing defensive inner critic armor to soften naturally.",
            modality: "Internal Family Systems (IFS) & Somatic Self-Compassion",
            detailedDescription: "When your self-worth is consistently challenged by perfectionism or self-doubt, it drains your daily joy. Our collaborative sessions focus on uncovering the root causes of that inner critic, transforming shameful narratives into deep inner resilience, and building healthy emotional boundaries.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
            )
        },
        {
            title: "Relationships",
            summary: "Navigating relationships can be complex. I help you explore attachment patterns to form deeper, secure connections.",
            bullets: ["Attachment Styles", "Communication Skills", "Conflict Resolution"],
            duration: "50 to 60-minute relational sessions",
            pacingBadge: "⏳ 60m Co-Regulation Pace",
            pacingTip: "Relational work benefits from slightly longer buffers to ensure both partners or individuals have adequate space to practice secure communication without feeling rushed.",
            modality: "Emotionally Focused Therapy (EFT) & Attachment Theory",
            detailedDescription: "Whether you find yourself repeatedly anxious in partnerships or pulling away when things feel vulnerable, understanding your attachment mapping changes everything. We work together to decode triggers, express needs clearly, and create mutually fulfilling intimacy.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            )
        },
        {
            title: "Burnout & EMDR",
            summary: "Feeling constantly overwhelmed? Together, we'll identify strategies to manage stress and safely reprocess trauma imprints.",
            bullets: ["Work-Life Balance", "Nervous System Rest", "EMDR Trauma Reprocessing"],
            duration: "50-min standard / 80-min intensive options",
            pacingBadge: "🧠 80m Deep Processing",
            pacingTip: <span className="inline">Trauma and somatic reprocessing require slow, deliberate pacing to prevent <GlossaryTooltip term="Nervous System Flooding" definition="When the nervous system becomes so overwhelmed by stimuli or memory that it cannot process information, leading to panic, dissociation, or shutdown.">nervous system flooding</GlossaryTooltip> and allow thorough grounding before leaving the room.</span>,
            modality: "Somatic Experiencing (SE) & EMDR Protocol",
            detailedDescription: <span className="inline">Burnout isn't just cognitive exhaustion—it lives deeply in the body as tension and emotional fatigue. We will assess your professional and personal loads, re-tune your nervous system out of <GlossaryTooltip term="Fight-or-Flight" definition="An automatic physiological reaction to an event that is perceived as stressful or frightening.">fight-or-flight</GlossaryTooltip>, and redesign sustainable patterns that preserve your energy and passionate purpose.</span>,
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            )
        }
    ];

    return (
        <section id="services" className="w-full py-24 px-6 md:px-16 bg-[var(--bg-cream)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-sage)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d3d9d6]/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2 block">
                        Clinical Specialties & Pacing
                    </span>
                    <h2 className="font-serif text-5xl md:text-6xl text-[var(--text-green)] tracking-tight mb-4">
                        My Specialties
                    </h2>
                    <p className="font-sans text-lg text-[var(--text-green)] opacity-80 max-w-2xl mx-auto">
                        Evidence-based approaches tailored to your unique healing rhythm. Click any pacing tag below to learn why somatic cadence matters.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {services.map((svc, index) => {
                        const isTipOpen = activePacingTip === index;
                        return (
                            <div key={index} className="group flex flex-col bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 p-10 min-h-[520px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="z-10 relative flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-16 h-16 rounded-full bg-[var(--color-sage)]/20 flex items-center justify-center text-[var(--text-green)] group-hover:scale-110 transition-transform duration-500">
                                            {svc.icon}
                                        </div>
                                        
                                        {/* Interactive Pacing Badge Tooltip Trigger */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActivePacingTip(isTipOpen ? null : index);
                                            }}
                                            className="px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/80 dark:bg-black/40 text-[var(--color-sage)] border border-[var(--color-sage)]/30 hover:bg-[var(--color-sage)] hover:text-white transition-all shadow-2xs flex items-center gap-1"
                                            title="Click to learn about session pacing"
                                        >
                                            <span>{svc.pacingBadge}</span>
                                            <span>{isTipOpen ? "▲" : "▼"}</span>
                                        </button>
                                    </div>

                                    {/* Pacing Tip Popover Box */}
                                    {isTipOpen && (
                                        <div className="mb-6 p-4 rounded-2xl bg-white/95 dark:bg-black/90 text-xs text-[var(--text-main)] border border-[var(--color-sage)]/40 shadow-lg animate-fadeIn">
                                            <div className="flex items-center justify-between text-[var(--color-sage)] font-bold mb-1">
                                                <span>🌱 Clinical Pacing Insight</span>
                                                <button onClick={() => setActivePacingTip(null)} className="text-xs">✕</button>
                                            </div>
                                            <p className="opacity-90 leading-relaxed font-sans mt-1">
                                                {svc.pacingTip}
                                            </p>
                                        </div>
                                    )}

                                    <h3 className="font-sans text-2xl font-bold text-[var(--text-green)] mb-3">
                                        {svc.title}
                                    </h3>
                                    <p className="font-sans text-[var(--text-green)] opacity-80 leading-relaxed text-base mb-6 flex-grow">
                                        {svc.summary}
                                    </p>
                                    <ul className="text-[var(--text-green)] opacity-70 space-y-3 mb-8 text-sm">
                                        {svc.bullets.map((b, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>{b}
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        onClick={() => setSelectedService(svc)}
                                        className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[var(--text-green)] group-hover:text-[var(--color-sage)] transition-colors text-left"
                                    >
                                        Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Modal Drawer */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-[var(--bg-soft)] text-[var(--text-main)] max-w-lg w-full rounded-3xl p-8 border border-[var(--color-sage)]/30 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-6 right-6 text-2xl font-bold opacity-60 hover:opacity-100 transition-opacity"
                            aria-label="Close dialog"
                        >
                            ✕
                        </button>
                        
                        <div className="w-14 h-14 rounded-full bg-[var(--color-sage)]/20 flex items-center justify-center text-[var(--color-sage)] mb-6">
                            {selectedService.icon}
                        </div>

                        <h3 className="font-serif text-3xl font-bold mb-3 text-[var(--color-sage)]">
                            {selectedService.title} Therapy
                        </h3>

                        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider opacity-90 mb-6">
                            <span className="bg-white dark:bg-black/20 px-3.5 py-1.5 rounded-full border border-[var(--color-sage)]/30 text-[var(--color-sage)]">
                                {selectedService.pacingBadge}
                            </span>
                            <span className="bg-white/60 dark:bg-black/10 px-3.5 py-1.5 rounded-full border border-[var(--color-sage)]/15">
                                🕒 {selectedService.duration}
                            </span>
                        </div>

                        <div className="p-4 mb-6 rounded-2xl bg-[var(--color-sage)]/10 border-l-4 border-[var(--color-sage)] text-xs md:text-sm text-[var(--text-main)]">
                            <strong className="block mb-1 text-[var(--color-sage)] uppercase font-bold tracking-widest text-[10px]">Why This Cadence Matters</strong>
                            <p className="opacity-90 italic">"{selectedService.pacingTip}"</p>
                        </div>

                        <div className="space-y-4 text-sm md:text-base leading-relaxed opacity-90 mb-8">
                            <p className="font-sans">
                                {selectedService.detailedDescription}
                            </p>
                            <div className="p-4 bg-white/60 dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20 text-xs md:text-sm">
                                <strong className="block mb-1 text-[var(--color-sage)] uppercase font-bold tracking-widest">Core Clinical Modality</strong>
                                {selectedService.modality}
                            </div>
                        </div>

                        <div className="flex items-center justify-end gap-4 border-t border-[var(--color-sage)]/20 pt-6">
                            <button
                                onClick={() => setSelectedService(null)}
                                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-[var(--text-main)] opacity-70 hover:opacity-100 transition-opacity"
                            >
                                Close
                            </button>
                            <a
                                href="#contact"
                                onClick={() => setSelectedService(null)}
                                className="px-6 py-2.5 rounded-full bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-md whitespace-nowrap"
                            >
                                Book consultation &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
