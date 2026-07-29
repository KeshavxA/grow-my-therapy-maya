"use client";

import { useState } from "react";

const affirmations = [
    "You are safe in this moment.",
    "Your feelings are valid, even the messy ones.",
    "Breathe in peace, exhale tension.",
    "It is okay to rest and do absolutely nothing.",
    "You do not have to have everything figured out right now.",
    "Healing is not linear; give yourself grace.",
    "Notice the ground supporting your feet.",
    "You are worthy of care and tenderness.",
    "Let go of what you cannot control today.",
    "Every small step is still a step forward."
];

export default function GroundingStone() {
    const [currentAffirmation, setCurrentAffirmation] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const touchStone = () => {
        setIsAnimating(true);
        // Pick a random affirmation different from the current one
        let nextAffirmation = currentAffirmation;
        while (nextAffirmation === currentAffirmation) {
            nextAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
        }
        
        setTimeout(() => {
            setCurrentAffirmation(nextAffirmation);
            setIsOpen(true);
            setIsAnimating(false);
        }, 400); // Wait for the "press" animation
    };

    return (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col items-end">
            {/* Tooltip / Affirmation Bubble */}
            <div 
                className={`mb-4 max-w-[240px] bg-white/95 dark:bg-black/95 backdrop-blur-md border border-[var(--color-sage)]/30 rounded-2xl p-4 shadow-xl transition-all duration-500 origin-bottom-right ${
                    isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                }`}
            >
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-sage)]">
                        Grounding Stone
                    </span>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="text-[10px] opacity-50 hover:opacity-100"
                    >
                        ✕
                    </button>
                </div>
                <p className="font-serif text-[var(--text-main)] italic text-sm leading-relaxed">
                    "{currentAffirmation}"
                </p>
            </div>

            {/* The Stone */}
            <button
                onClick={touchStone}
                title="Touch for a grounding affirmation"
                className={`relative group w-14 h-14 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-gradient-to-br from-[#e0e5e2] to-[var(--color-sage)] shadow-[inset_-2px_-4px_6px_rgba(0,0,0,0.1),2px_4px_8px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all duration-300 ease-out hover:brightness-105 ${
                    isAnimating ? "scale-90 shadow-[inset_-1px_-2px_4px_rgba(0,0,0,0.2)]" : "hover:scale-105 hover:shadow-[inset_-3px_-5px_8px_rgba(0,0,0,0.15),4px_6px_12px_rgba(0,0,0,0.2)]"
                }`}
            >
                {/* Stone Shine/Reflection */}
                <div className="absolute top-2 left-2 w-4 h-3 bg-white/40 rounded-[50%] rotate-[-45deg] blur-[1px]"></div>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-white/80 select-none">
                    Touch
                </span>
            </button>
        </div>
    );
}
