"use client";

import { useState } from "react";

export default function Approach() {
    const listItems = [
        "Persistent feelings of sadness or hopelessness",
        "Trouble focusing or making everyday decisions",
        "Difficulty feeling secure in personal relationships",
        "Feeling constantly exhausted or unmotivated",
        "A pervasive inner critic and sense of overwhelm"
    ];

    const [selected, setSelected] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        if (selected.includes(index)) {
            setSelected(selected.filter(i => i !== index));
        } else {
            setSelected([...selected, index]);
        }
    };

    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[600px] md:h-auto bg-[#CCC] min-h-[500px]">
                <img
                    src="/office-1.jpg"
                    alt="Safe Space for Healing"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--color-sage)]/20 md:hidden pointer-events-none" />
            </div>

            <div className="bg-[#CFCBD6] dark:bg-[var(--color-sand)] px-6 py-16 md:px-16 md:py-24 flex flex-col justify-center items-start text-[var(--text-green)] transition-colors">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2">
                    Self-Check Alignment
                </span>
                <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight text-[var(--text-main)]">
                    You don't have to carry this all <span className="italic">alone</span>.
                </h2>
                <p className="font-sans mb-6 text-sm md:text-base text-[var(--text-main)] opacity-85">
                    Click on any feelings or challenges you've been experiencing lately:
                </p>
                
                <div className="space-y-3 font-sans text-sm md:text-base mb-8 w-full">
                    {listItems.map((item, i) => {
                        const isChecked = selected.includes(i);
                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => toggleItem(i)}
                                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-4 ${
                                    isChecked
                                        ? "bg-white dark:bg-black/40 border-[var(--color-sage)] shadow-md translate-x-2 text-[var(--color-sage)] font-bold"
                                        : "bg-white/40 dark:bg-white/5 border-transparent hover:bg-white/60 text-[var(--text-main)] opacity-90"
                                }`}
                            >
                                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border transition-colors flex-shrink-0 ${
                                    isChecked ? "bg-[var(--color-sage)] text-white border-[var(--color-sage)]" : "border-gray-400 bg-white/50"
                                }`}>
                                    {isChecked && "✓"}
                                </span>
                                <span>{item}</span>
                            </button>
                        );
                    })}
                </div>

                {selected.length > 0 && (
                    <div className="p-5 rounded-2xl bg-white/80 dark:bg-black/30 border border-[var(--color-sage)]/40 mb-8 animate-fadeIn w-full">
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-sage)] mb-1">
                            💬 Dr. Maya's Note for You
                        </p>
                        <p className="text-sm text-[var(--text-main)] opacity-90 leading-relaxed">
                            Acknowledge yourself for recognizing these {selected.length} area{selected.length > 1 ? "s" : ""} of friction. Therapy offers a calm, judgment-free space to untanlge these exact symptoms and gently recalibrate your nervous system.
                        </p>
                    </div>
                )}

                <div className="mt-4 text-right w-full border-t border-[var(--text-main)]/20 pt-6 flex justify-between items-center">
                    <span className="text-xs opacity-60 italic text-[var(--text-main)]">Confidential & safe reflection</span>
                    <a href="#contact" className="px-6 py-3 bg-[var(--color-sage)] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity shadow-md">
                        Work With Me &rarr;
                    </a>
                </div>
            </div>
        </section>
    );
}
