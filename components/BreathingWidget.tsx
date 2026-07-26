"use client";

import { useState, useEffect } from "react";

export default function BreathingWidget() {
    const [isActive, setIsActive] = useState(false);
    const [phase, setPhase] = useState<"Breathe In" | "Hold" | "Breathe Out" | "Ready">("Ready");

    useEffect(() => {
        if (!isActive) {
            setPhase("Ready");
            return;
        }

        let isCancelled = false;

        const cycle = async () => {
            while (!isCancelled && isActive) {
                setPhase("Breathe In");
                await new Promise(r => setTimeout(r, 4000));
                if (isCancelled || !isActive) break;

                setPhase("Hold");
                await new Promise(r => setTimeout(r, 4000));
                if (isCancelled || !isActive) break;

                setPhase("Breathe Out");
                await new Promise(r => setTimeout(r, 4000));
                if (isCancelled || !isActive) break;
            }
        };

        cycle();

        return () => {
            isCancelled = true;
        };
    }, [isActive]);

    return (
        <section className="w-full py-20 px-6 md:px-16 bg-[var(--color-sand)] border-y border-[var(--color-sage)]/20 text-center relative overflow-hidden">
            <div className="container mx-auto max-w-2xl flex flex-col items-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2">
                    Somatic Grounding Break
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-main)] mb-4">
                    Take a Moment to Pause & Center
                </h2>
                <p className="font-sans text-sm md:text-base text-[var(--text-main)] opacity-80 mb-12 max-w-lg leading-relaxed">
                    Wherever you are in your day, give your nervous system permission to slow down with a gentle 60-second guided box breathing cycle.
                </p>

                <div className="relative flex items-center justify-center w-64 h-64 my-4">

                    <div
                        className={`absolute inset-0 rounded-full bg-[var(--color-sage)]/10 transition-transform duration-[4000ms] ease-in-out ${phase === "Breathe In" ? "scale-125 opacity-40" :
                                phase === "Hold" ? "scale-125 opacity-30" :
                                    phase === "Breathe Out" ? "scale-75 opacity-10" : "scale-100 opacity-20"
                            }`}
                    />
                    <div
                        className={`absolute w-48 h-48 rounded-full bg-[var(--color-sage)]/20 transition-transform duration-[4000ms] ease-in-out ${phase === "Breathe In" ? "scale-110 opacity-70" :
                                phase === "Hold" ? "scale-110 opacity-60" :
                                    phase === "Breathe Out" ? "scale-90 opacity-40" : "scale-100 opacity-50"
                            }`}
                    />

                    <div className="z-10 w-40 h-40 rounded-full bg-white dark:bg-black/60 shadow-lg border border-[var(--color-sage)]/30 backdrop-blur-md flex flex-col items-center justify-center p-6 transition-all duration-500">
                        <span className="font-serif text-xl font-bold text-[var(--color-sage)] tracking-wide mb-1">
                            {phase}
                        </span>
                        {isActive && (
                            <span className="text-xs text-[var(--text-main)] opacity-60 animate-pulse">
                                {phase === "Hold" ? "4s..." : phase === "Breathe In" ? "Deeply..." : "Gently..."}
                            </span>
                        )}
                    </div>
                </div>

                <div className="mt-8 flex gap-4">
                    <button
                        onClick={() => setIsActive(!isActive)}
                        className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${isActive
                                ? "bg-red-500/10 border border-red-500 text-red-600 dark:text-red-400 hover:bg-red-500/20"
                                : "bg-[var(--color-sage)] text-white hover:bg-opacity-90"
                            }`}
                    >
                        {isActive ? "Stop Exercise" : "Start Guided Breathing"}
                    </button>
                </div>
            </div>
        </section>
    );
}
