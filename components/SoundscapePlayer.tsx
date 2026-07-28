"use client";

import { useState, useEffect, useRef } from "react";

export default function SoundscapePlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeSound, setActiveSound] = useState<"waves" | "tone" | "rain">("waves");
    const [isExpanded, setIsExpanded] = useState(false);
    
    const audioCtxRef = useRef<AudioContext | null>(null);
    const sourceNodeRef = useRef<AudioNode | null>(null);
    const gainNodeRef = useRef<GainNode | null>(null);

    const stopAudio = () => {
        try {
            if (sourceNodeRef.current) {
                sourceNodeRef.current.disconnect();
                sourceNodeRef.current = null;
            }
            if (gainNodeRef.current && audioCtxRef.current) {
                gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
            }
        } catch (e) {
            console.error(e);
        }
    };

    const generateBrownNoise = (ctx: AudioContext): AudioNode => {
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            output[i] = (lastOut + (0.02 * white)) / 1.02;
            lastOut = output[i];
            output[i] *= 3.5; // boost gain
        }
        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;
        whiteNoise.start(0);

        // Filter for soft ocean / rain tone
        const filter = ctx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.value = activeSound === "rain" ? 1200 : 400;
        whiteNoise.connect(filter);
        return filter;
    };

    const generateTone = (ctx: AudioContext): AudioNode => {
        // 432 Hz healing singing bowl approximation with gentle harmonic
        const osc = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const mergeGain = ctx.createGain();
        
        osc.type = "sine";
        osc.frequency.setValueAtTime(432, ctx.currentTime);
        
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(216, ctx.currentTime); // sub-harmonic
        
        const g1 = ctx.createGain();
        const g2 = ctx.createGain();
        g1.gain.value = 0.6;
        g2.gain.value = 0.3;

        osc.connect(g1);
        osc2.connect(g2);
        g1.connect(mergeGain);
        g2.connect(mergeGain);

        osc.start();
        osc2.start();
        return mergeGain;
    };

    const startAudio = () => {
        if (!audioCtxRef.current) {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            audioCtxRef.current = new AudioCtx();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
            ctx.resume();
        }

        stopAudio();

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 1.5); // smooth fade in
        gain.connect(ctx.destination);
        gainNodeRef.current = gain;

        if (activeSound === "waves" || activeSound === "rain") {
            const noiseNode = generateBrownNoise(ctx);
            noiseNode.connect(gain);
            sourceNodeRef.current = noiseNode;
        } else {
            const toneNode = generateTone(ctx);
            toneNode.connect(gain);
            sourceNodeRef.current = toneNode;
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            stopAudio();
            setIsPlaying(false);
        } else {
            startAudio();
            setIsPlaying(true);
            setIsExpanded(true);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            startAudio();
        }
        return () => stopAudio();
    }, [activeSound]);

    return (
        <div className="fixed bottom-24 left-6 z-50 flex flex-col items-start font-sans">
            {isExpanded && (
                <div className="mb-3 p-5 rounded-2xl bg-white/95 dark:bg-black/95 border border-[var(--color-sage)] shadow-2xl backdrop-blur-md text-[var(--text-main)] max-w-xs animate-fadeIn transition-all">
                    <div className="flex items-center justify-between mb-3 border-b border-[var(--color-sage)]/20 pb-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-sage)] uppercase tracking-wider">
                            <span className="animate-pulse">🎧</span>
                            <span>Sanctuary Soundscape</span>
                        </div>
                        <button 
                            onClick={() => setIsExpanded(false)}
                            className="text-xs opacity-60 hover:opacity-100"
                        >
                            ✕
                        </button>
                    </div>

                    <p className="text-[11px] opacity-80 mb-4 leading-relaxed font-sans">
                        Immerse yourself in gentle ambient acoustics designed by Dr. Maya to soothe autonomic tension while exploring healing resources.
                    </p>

                    <div className="space-y-1.5 mb-4">
                        {[
                            { id: "waves", label: "Ocean Surf Waves", icon: "🌊" },
                            { id: "tone", label: "432Hz Soma Peace Tone", icon: "🧘‍♀️" },
                            { id: "rain", label: "Gentle Forest Rain", icon: "🌧️" }
                        ].map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActiveSound(s.id as "waves" | "tone" | "rain")}
                                className={`w-full py-2 px-3 rounded-xl text-left text-xs font-semibold flex items-center gap-2 transition-all ${
                                    activeSound === s.id && isPlaying
                                        ? "bg-[var(--color-sage)] text-white shadow-xs font-bold"
                                        : "bg-gray-100 dark:bg-white/10 text-[var(--text-main)] hover:bg-[var(--color-sage)]/20"
                                }`}
                            >
                                <span className="text-sm">{s.icon}</span>
                                <span>{s.label}</span>
                                {activeSound === s.id && isPlaying && <span className="ml-auto text-[9px] uppercase animate-pulse font-mono">Playing</span>}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={togglePlay}
                        className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2 ${
                            isPlaying 
                                ? "bg-red-500/15 text-red-600 dark:text-red-400 border border-red-500/30 hover:bg-red-500/25"
                                : "bg-[var(--color-sage)] text-white hover:opacity-90"
                        }`}
                    >
                        {isPlaying ? "⏸ Pause Audio" : "▶ Start Soundscape"}
                    </button>
                </div>
            )}

            {!isExpanded && (
                <button
                    onClick={() => {
                        if (!isPlaying) togglePlay();
                        else setIsExpanded(true);
                    }}
                    className={`flex items-center gap-2 px-4 py-3 rounded-full shadow-xl backdrop-blur-md transition-all duration-300 border ${
                        isPlaying 
                            ? "bg-[var(--color-sage)] text-white border-[var(--color-sage)] animate-bounce"
                            : "bg-white/90 dark:bg-black/80 text-[var(--color-sage)] border-[var(--color-sage)]/30 hover:scale-105"
                    }`}
                    title="Sanctuary Ambient Soundscape"
                >
                    <span className="text-lg">{isPlaying ? "🔊" : "🎧"}</span>
                    <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">
                        {isPlaying ? "Ambient On" : "Sanctuary Audio"}
                    </span>
                </button>
            )}
        </div>
    );
}
