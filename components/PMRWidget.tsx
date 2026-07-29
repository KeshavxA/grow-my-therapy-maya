"use client";

import { useState, useEffect } from "react";

interface PMRStep {
    id: string;
    muscleGroup: string;
    instructionTense: string;
    instructionRelease: string;
}

export default function PMRWidget() {
    const [isActive, setIsActive] = useState(false);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [phase, setPhase] = useState<"ready" | "tense" | "release">("ready");
    const [timeLeft, setTimeLeft] = useState(0);

    const steps: PMRStep[] = [
        {
            id: "hands",
            muscleGroup: "Hands & Arms",
            instructionTense: "Clench your fists tightly and pull your forearms tight against your upper arms.",
            instructionRelease: "Let your hands and arms drop completely limp. Feel the tension draining away."
        },
        {
            id: "shoulders",
            muscleGroup: "Shoulders & Neck",
            instructionTense: "Shrug your shoulders up high towards your ears. Squeeze tightly.",
            instructionRelease: "Drop your shoulders down and back. Notice the heavy, relaxed feeling."
        },
        {
            id: "face",
            muscleGroup: "Face & Jaw",
            instructionTense: "Squeeze your eyes shut tight, wrinkle your nose, and clench your jaw.",
            instructionRelease: "Let your jaw drop slightly and your forehead smooth out. Breathe."
        },
        {
            id: "legs",
            muscleGroup: "Legs & Feet",
            instructionTense: "Point your toes up towards your face and squeeze your thigh muscles.",
            instructionRelease: "Release your legs completely. Let your feet rest heavy on the floor."
        }
    ];

    useEffect(() => {
        let timer: NodeJS.Timeout;
        
        if (isActive && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (isActive && timeLeft === 0) {
            if (phase === "tense") {
                setPhase("release");
                setTimeLeft(10); // 10 seconds release
            } else if (phase === "release") {
                if (currentStepIndex < steps.length - 1) {
                    setPhase("tense");
                    setTimeLeft(5); // 5 seconds tense
                    setCurrentStepIndex(prev => prev + 1);
                } else {
                    setIsActive(false);
                    setPhase("ready");
                    setCurrentStepIndex(0);
                }
            }
        }

        return () => clearTimeout(timer);
    }, [isActive, timeLeft, phase, currentStepIndex, steps.length]);

    const startExercise = () => {
        setIsActive(true);
        setCurrentStepIndex(0);
        setPhase("tense");
        setTimeLeft(5);
    };

    const currentStep = steps[currentStepIndex];

    return (
        <div className="w-full bg-white dark:bg-[#1C1A1A] p-6 sm:p-8 rounded-3xl border border-[var(--color-sage)]/20 shadow-sm transition-all h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-sage)]/10 text-[var(--color-sage)]">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <h3 className="font-serif text-xl text-[var(--text-main)] font-bold">Progressive Muscle Relaxation</h3>
                </div>
                
                {!isActive && phase === "ready" ? (
                    <p className="font-sans text-sm text-[var(--text-main)] opacity-80 leading-relaxed mb-6">
                        A quick, guided somatic exercise to intentionally release built-up physical tension by alternating between squeezing and relaxing muscle groups.
                    </p>
                ) : (
                    <div className="mb-6 min-h-[120px] flex flex-col justify-center">
                        <div className="flex justify-between items-end mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)]">
                                {currentStep.muscleGroup}
                            </span>
                            <span className={`text-2xl font-serif font-bold ${phase === 'tense' ? 'text-red-500/80 animate-pulse' : 'text-[var(--color-sage)]'}`}>
                                {timeLeft}s
                            </span>
                        </div>
                        
                        <div className={`p-4 rounded-2xl border transition-all duration-700 ${
                            phase === 'tense' 
                                ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30 scale-[1.02]' 
                                : 'bg-[var(--color-sage)]/5 border-[var(--color-sage)]/30 scale-100'
                        }`}>
                            <p className="font-sans text-sm md:text-base font-bold text-[var(--text-main)] mb-1 uppercase tracking-wider">
                                {phase === 'tense' ? 'Squeeze & Tense' : 'Release & Let Go'}
                            </p>
                            <p className="font-sans text-sm text-[var(--text-main)] opacity-80">
                                {phase === 'tense' ? currentStep.instructionTense : currentStep.instructionRelease}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <div>
                {!isActive ? (
                    <button 
                        onClick={startExercise}
                        className="w-full py-3 bg-[var(--text-main)] text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                    >
                        Start 1-Minute Exercise
                    </button>
                ) : (
                    <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div 
                            className="bg-[var(--color-sage)] h-full transition-all duration-1000 ease-linear"
                            style={{ width: `${((currentStepIndex) / steps.length) * 100 + (phase === 'release' ? (100 / steps.length) / 2 : 0)}%` }}
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
}
