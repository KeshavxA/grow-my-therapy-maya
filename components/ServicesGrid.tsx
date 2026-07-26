"use client";

import { useState } from "react";

interface ServiceInfo {
    title: string;
    summary: string;
    bullets: string[];
    duration: string;
    modality: string;
    detailedDescription: string;
    icon: React.ReactNode;
}

export default function ServicesGrid() {
    const [selectedService, setSelectedService] = useState<ServiceInfo | null>(null);

    const services: ServiceInfo[] = [
        {
            title: "Self-Esteem",
            summary: "Do you struggle with a harsh inner critic? Building a strong sense of self-worth is key to living a fulfilled life.",
            bullets: ["Quieting the Inner Critic", "Setting Boundaries", "Cultivating Self-Compassion"],
            duration: "50-minute weekly sessions",
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
            duration: "50-minute individual or couples sessions",
            modality: "Emotionally Focused Therapy (EFT) & Attachment Theory",
            detailedDescription: "Whether you find yourself repeatedly anxious in partnerships or pulling away when things feel vulnerable, understanding your attachment mapping changes everything. We work together to decode triggers, express needs clearly, and create mutually fulfilling intimacy.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            )
        },
        {
            title: "Burnout",
            summary: "Feeling constantly overwhelmed? Together, we'll identify strategies to manage stress and prevent future burnout.",
            bullets: ["Work-Life Balance", "Stress Management", "Finding Purpose"],
            duration: "50-minute focused restorative sessions",
            modality: "Somatic Experiencing (SE) & Mindfulness-Based Stress Reduction",
            detailedDescription: "Burnout isn't just cognitive exhaustion—it lives deeply in the body as tension and emotional fatigue. We will assess your professional and personal loads, re-tune your nervous system out of fight-or-flight, and redesign sustainable patterns that preserve your energy and passionate purpose.",
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
                    <h2 className="font-serif text-5xl md:text-6xl text-[var(--text-green)] tracking-tight mb-4">
                        My Specialties
                    </h2>
                    <p className="font-sans text-lg text-[var(--text-green)] opacity-80 max-w-2xl mx-auto">
                        Evidence-based approaches tailored to your unique journey towards healing and self-discovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {services.map((svc, index) => (
                        <div key={index} className="group flex flex-col bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 p-10 min-h-[500px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="z-10 relative flex flex-col h-full">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-sage)]/20 flex items-center justify-center mb-8 text-[var(--text-green)] group-hover:scale-110 transition-transform duration-500">
                                    {svc.icon}
                                </div>
                                <h3 className="font-sans text-2xl font-bold text-[var(--text-green)] mb-4">
                                    {svc.title}
                                </h3>
                                <p className="font-sans text-[var(--text-green)] opacity-80 leading-relaxed text-base mb-8 flex-grow">
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
                    ))}
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

                        <div className="flex flex-wrap gap-2 text-xs font-bold uppercase tracking-wider opacity-75 mb-6">
                            <span className="bg-white dark:bg-black/20 px-3 py-1 rounded-full border border-[var(--color-sage)]/20">
                                🕒 {selectedService.duration}
                            </span>
                        </div>

                        <div className="space-y-4 text-sm md:text-base leading-relaxed opacity-90 mb-8">
                            <p className="font-sans">
                                {selectedService.detailedDescription}
                            </p>
                            <div className="p-4 bg-white/60 dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20 text-xs md:text-sm">
                                <strong className="block mb-1 text-[var(--color-sage)] uppercase font-bold tracking-widest">Core Modality</strong>
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
                                className="px-6 py-2.5 rounded-full bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-md"
                            >
                                Book a Consultation
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
