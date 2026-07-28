"use client";

import { useState } from "react";

export default function MoodCheckIn() {
    const [selectedMood, setSelectedMood] = useState<string | null>(null);

    const moods = [
        {
            id: "anxious",
            emoji: "🌊",
            label: "Anxious & Overwhelmed",
            subtitle: "Racing thoughts, physical tension",
            advice: "When anxiety rushes in, your body is sounding an alarm for protection. Try placing both feet firmly on the floor and taking three long sighs out through your mouth. Notice 3 sturdy objects in the room around you to orient your nervous system to present-day safety.",
            focusPrompt: "In therapy, we can gently explore the deeper roots of this hyperactivity using EMDR and somatic stabilization to give your nervous system a deep rest."
        },
        {
            id: "depleted",
            emoji: "🔋",
            label: "Exhausted & Depleted",
            subtitle: "High-functioning burnout",
            advice: "You have been pushing past your authentic human endurance for too long. Give yourself unconditional permission to drop your shoulders right now. You don't need to optimize every hour—rest is a biological imperative, not a reward for productivity.",
            focusPrompt: "In our work together, we focus on unlearning habitual people-pleasing and rebuilding sustainable personal energy boundaries without guilt."
        },
        {
            id: "disconnected",
            emoji: "🌪️",
            label: "Stuck or Disconnected",
            subtitle: "Feeling numb, unfixed routines",
            advice: "Numbing or feeling disconnected is a wise protective response when emotion becomes too overwhelming to digest alone. Notice the sensation of your clothing against your skin or a cool glass of water in your hand to gently bridge mind and body.",
            focusPrompt: "Somatic therapy offers a compassionate pace to thaw emotional numbness and reignite natural curiosity without flooding your system."
        },
        {
            id: "seeking",
            emoji: "🌿",
            label: "Seeking Clarity & Growth",
            subtitle: "Life transitions & self-discovery",
            advice: "Periods of evolution can feel destabilizing before a new identity fully forms. Celebrate your curiosity—you are listening to an inner invitation to evolve into an authentic, deeply self-aligned phase of life.",
            focusPrompt: "Therapy provides a confidential sounding board to clarify your deepest values and co-create an actionable path toward meaningful relational harmony."
        }
    ];

    const currentMood = moods.find(m => m.id === selectedMood);

    return (
        <section className="w-full py-20 px-6 md:px-16 bg-[var(--color-sand)]/50 border-y border-[var(--color-sage)]/15">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2 block">
                        Interactive Somatic Check-In
                    </span>
                    <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-main)] tracking-tight mb-4">
                        How is your nervous system feeling today?
                    </h2>
                    <p className="font-sans text-base md:text-lg text-[var(--text-main)] opacity-80 max-w-2xl mx-auto">
                        Pause for a moment and tune inward. Tap the experience that resonates most right now for immediate somatic support and clarity from Dr. Maya.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {moods.map((mood) => {
                        const isSelected = selectedMood === mood.id;
                        return (
                            <button
                                key={mood.id}
                                onClick={() => setSelectedMood(isSelected ? null : mood.id)}
                                className={`p-6 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                                    isSelected
                                        ? "bg-white dark:bg-black/50 border-[var(--color-sage)] shadow-md -translate-y-1"
                                        : "bg-white/60 dark:bg-white/5 border-[var(--color-sage)]/20 hover:bg-white dark:hover:bg-black/30 hover:border-[var(--color-sage)]/40"
                                }`}
                            >
                                <div>
                                    <span className="text-3xl mb-4 block">{mood.emoji}</span>
                                    <h3 className={`font-serif font-bold text-lg text-[var(--text-main)] mb-1 transition-colors ${isSelected ? "text-[var(--color-sage)]" : ""}`}>
                                        {mood.label}
                                    </h3>
                                    <p className="text-xs text-[var(--text-main)] opacity-70 font-sans">
                                        {mood.subtitle}
                                    </p>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-sage)] mt-6 pt-2 border-t border-[var(--color-sage)]/15 block">
                                    {isSelected ? "▲ Hide Guidance" : "▼ Read Support"}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {currentMood && (
                    <div className="p-8 md:p-10 rounded-3xl bg-white dark:bg-black/40 border border-[var(--color-sage)]/40 shadow-xl animate-fadeIn text-[var(--text-main)] relative">
                        <div className="flex items-start gap-4 mb-6">
                            <span className="text-4xl p-3 rounded-2xl bg-[var(--color-sage)]/10 border border-[var(--color-sage)]/20 flex-shrink-0">
                                {currentMood.emoji}
                            </span>
                            <div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] block mb-1">
                                    Dr. Maya's Somatic Reflection
                                </span>
                                <h4 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-main)]">
                                    Holding Space for {currentMood.label.split("&")[0].trim()}
                                </h4>
                            </div>
                        </div>

                        <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed opacity-90 border-t border-[var(--color-sage)]/15 pt-6">
                            <p className="p-5 rounded-2xl bg-[var(--bg-cream)]/50 border-l-4 border-[var(--color-sage)] text-[var(--text-main)] italic">
                                "{currentMood.advice}"
                            </p>
                            
                            <div>
                                <h5 className="font-bold text-sm uppercase tracking-wider text-[var(--color-sage)] mb-2">
                                    🌱 Therapeutic Healing Path
                                </h5>
                                <p className="text-sm md:text-base opacity-85">
                                    {currentMood.focusPrompt}
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-[var(--color-sage)]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <span className="text-xs opacity-75 italic">Take all the time you need before continuing your exploration.</span>
                            <a 
                                href="#contact"
                                onClick={() => {
                                    // Smoothly guide user to consultation form
                                }}
                                className="px-6 py-3 bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity shadow-sm whitespace-nowrap"
                            >
                                Discuss This in Consultation &rarr;
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
