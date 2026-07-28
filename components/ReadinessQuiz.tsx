"use client";

import { useState } from "react";

export default function ReadinessQuiz() {
    const [currentStep, setCurrentStep] = useState(0); // 0 = start, 1-3 = questions, 4 = result
    const [answers, setAnswers] = useState<string[]>([]);

    const questions = [
        {
            step: 1,
            question: "What feels like your most urgent emotional or personal struggle right now?",
            options: [
                { id: "emdr", text: "Lingering memories, past unresolved trauma, or emotional triggers from earlier life experiences." },
                { id: "somatic", text: "Chronic physical tension, burnout, high-functioning anxiety, or racing thoughts that won't quiet down." },
                { id: "relational", text: "Navigating relationship breakdowns, interpersonal conflict, or feeling deeply disconnected from loved ones." }
            ]
        },
        {
            step: 2,
            question: "When stress or conflict arises, how does your body typically respond?",
            options: [
                { id: "emdr", text: "I experience emotional flooding followed by emotional numbness, dissociation, or feeling frozen." },
                { id: "somatic", text: "My heart races, breathing becomes shallow, and my shoulders/jaw carry intense muscular grip." },
                { id: "relational", text: "I get caught up in anxious attachment cycles, overanalyzing conversations or trying to appease others." }
            ]
        },
        {
            step: 3,
            question: "What style of healing guidance sounds most supportive for your journey right now?",
            options: [
                { id: "emdr", text: "A gentle, neurological evidence-based protocol to heal deep-seated wounds without reliving traumatic stories." },
                { id: "somatic", text: "Body-centered mindfulness techniques to safely unwind physical grip and teach my nervous system sustainable rest." },
                { id: "relational", text: "Collaborative, insightful co-exploration to build secure bonding, boundaries, and authentic emotional intimacy." }
            ]
        }
    ];

    const handleSelectOption = (category: string) => {
        const newAnswers = [...answers, category];
        setAnswers(newAnswers);
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        } else {
            setCurrentStep(4); // show result
        }
    };

    const resetQuiz = () => {
        setAnswers([]);
        setCurrentStep(0);
    };

    // Calculate predominant result category
    const getResult = () => {
        const counts = answers.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const highest = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "somatic";

        if (highest === "emdr") {
            return {
                title: "EMDR & Trauma Recovery Pathway",
                icon: "🧠",
                summary: "Your responses indicate that your nervous system is carrying unresolved emotional imprints from past experiences. Traditional talk therapy often falls short because these imprints live deeper in mid-brain structures.",
                approach: "Dr. Maya uses gentle Eye Movement Desensitization and Reprocessing (EMDR) intertwined with somatic pacing to safely unburden distressing memories so you can experience genuine present-day emotional liberation."
            };
        } else if (highest === "relational") {
            return {
                title: "Relational & Attachment Counseling Pathway",
                icon: "🤝",
                summary: "Your focus centers on attachment dynamics, healthy interpersonal boundaries, and cultivating secure, nurturing connections with loved ones or partners.",
                approach: "Dr. Maya provides a compassionate, emotionally-focused environment to untangle protective relational defenses, rebuild mutual safety, and communicate authentic emotional needs without reactivity."
            };
        } else {
            return {
                title: "Somatic Mindfulness & Anxiety Release Pathway",
                icon: "🌿",
                summary: "Your answers highlight an overloaded nervous system experiencing physical distress, hypervigilance, or high-functioning burnout from prolonged exertion.",
                approach: "Dr. Maya prioritizes somatic experiments, polyvagal regulation, and breath-centered grounding tools to soothe your autonomic nervous system, restoring inner stillness and physical ease."
            };
        }
    };

    return (
        <section className="w-full py-24 px-6 md:px-16 bg-white dark:bg-black/20 border-y border-[var(--color-sage)]/15">
            <div className="container mx-auto max-w-3xl text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2 block">
                    Interactive Discovery
                </span>
                <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-main)] tracking-tight mb-4">
                    Therapy Focus & Readiness Self-Assessment
                </h2>
                <p className="font-sans text-base text-[var(--text-main)] opacity-80 max-w-2xl mx-auto mb-12">
                    Not sure which counseling approach aligns with what you're experiencing? Take this gentle 1-minute reflection to identify your custom therapeutic pathway.
                </p>

                <div className="p-8 md:p-12 rounded-3xl bg-[var(--bg-cream)]/80 border border-[var(--color-sage)]/30 shadow-md transition-all relative overflow-hidden text-[var(--text-main)] text-left">
                    
                    {currentStep === 0 && (
                        <div className="text-center py-6 space-y-6">
                            <span className="text-5xl block animate-bounce">🌱</span>
                            <h3 className="font-serif text-2xl font-bold text-[var(--color-sage)]">
                                Discover Your Healing Synergy
                            </h3>
                            <p className="font-sans text-sm md:text-base opacity-85 max-w-lg mx-auto leading-relaxed">
                                Answer three intuitive reflections regarding your experiences, nervous system patterns, and goals to receive targeted clinical insights from Dr. Maya Reynolds.
                            </p>
                            <button
                                onClick={() => setCurrentStep(1)}
                                className="px-8 py-4 bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5"
                            >
                                Begin Gentle Assessment &rarr;
                            </button>
                        </div>
                    )}

                    {currentStep >= 1 && currentStep <= 3 && (
                        <div>
                            <div className="flex items-center justify-between text-xs font-bold text-[var(--color-sage)] uppercase tracking-wider mb-6">
                                <span>Reflection Step {currentStep} of 3</span>
                                <span>{Math.round((currentStep - 1) / 3 * 100)}% Complete</span>
                            </div>

                            <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden mb-8">
                                <div 
                                    className="bg-[var(--color-sage)] h-full transition-all duration-500" 
                                    style={{ width: `${(currentStep / 3) * 100}%` }}
                                ></div>
                            </div>

                            <h3 className="font-serif text-xl md:text-2xl font-bold text-[var(--text-main)] mb-8 leading-snug">
                                {questions[currentStep - 1].question}
                            </h3>

                            <div className="space-y-4 font-sans text-sm md:text-base">
                                {questions[currentStep - 1].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelectOption(option.id)}
                                        className="w-full text-left p-5 rounded-2xl bg-white/70 dark:bg-black/30 border border-[var(--color-sage)]/20 hover:border-[var(--color-sage)] hover:bg-white dark:hover:bg-black/50 transition-all duration-200 flex items-center gap-4 group shadow-xs"
                                    >
                                        <span className="w-8 h-8 rounded-full bg-[var(--color-sage)]/15 group-hover:bg-[var(--color-sage)] group-hover:text-white text-[var(--color-sage)] font-bold text-xs flex items-center justify-center transition-colors flex-shrink-0">
                                            {String.fromCharCode(65 + idx)}
                                        </span>
                                        <span className="opacity-90 font-medium">{option.text}</span>
                                    </button>
                                ))}
                            </div>

                            {currentStep > 1 && (
                                <button
                                    onClick={() => {
                                        setAnswers(answers.slice(0, -1));
                                        setCurrentStep(currentStep - 1);
                                    }}
                                    className="mt-6 text-xs text-[var(--color-sage)] underline font-bold opacity-80 hover:opacity-100 transition-opacity"
                                >
                                    &larr; Previous Reflection
                                </button>
                            )}
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6 animate-fadeIn">
                            {(() => {
                                const result = getResult();
                                return (
                                    <>
                                        <div className="flex items-center gap-4 border-b border-[var(--color-sage)]/20 pb-6">
                                            <span className="text-5xl p-4 rounded-2xl bg-[var(--color-sage)]/15 border border-[var(--color-sage)]/20 flex-shrink-0">
                                                {result.icon}
                                            </span>
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] block mb-1">
                                                    Your Recommended Pathway
                                                </span>
                                                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[var(--text-main)]">
                                                    {result.title}
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="space-y-4 font-sans text-base leading-relaxed opacity-90">
                                            <p className="p-4 rounded-2xl bg-white dark:bg-black/20 border border-[var(--color-sage)]/20 italic text-[var(--text-main)]">
                                                "{result.summary}"
                                            </p>
                                            
                                            <div>
                                                <h4 className="font-bold text-xs uppercase tracking-wider text-[var(--color-sage)] mb-2">
                                                    ✨ Dr. Maya's Customized Approach
                                                </h4>
                                                <p className="text-sm md:text-base opacity-85">
                                                    {result.approach}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-[var(--color-sage)]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                                            <button
                                                onClick={resetQuiz}
                                                className="text-xs text-[var(--text-main)] opacity-70 hover:opacity-100 underline font-semibold"
                                            >
                                                ↻ Retake Self-Assessment
                                            </button>
                                            <a
                                                href="#contact"
                                                className="px-8 py-3.5 bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-md hover:opacity-90 transition-all text-center whitespace-nowrap"
                                            >
                                                Discuss This in Consultation &rarr;
                                            </a>
                                        </div>
                                    </>
                                );
                            })()}
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}
