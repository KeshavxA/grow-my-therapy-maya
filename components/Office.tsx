"use client";

import { useState } from "react";

export default function Office() {
    const [tab, setTab] = useState<"inperson" | "telehealth">("inperson");

    return (
        <section className="w-full py-24 px-6 md:px-16 bg-[var(--color-sand)]">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-sage)]">
                        A Space for Healing
                    </h2>
                    <p className="font-sans text-lg text-[var(--color-charcoal)] opacity-80 max-w-2xl">
                        Choose the environment where you feel most safe and receptive—whether in our serene Seattle office or from the comfort of your home.
                    </p>
                </div>

                {/* Tab Controls */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex p-1 bg-white/60 dark:bg-black/20 rounded-full border border-[var(--color-sage)]/30 backdrop-blur-md">
                        <button
                            onClick={() => setTab("inperson")}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                tab === "inperson"
                                    ? "bg-[var(--color-sage)] text-white shadow-md"
                                    : "text-[var(--text-main)] opacity-70 hover:opacity-100"
                            }`}
                        >
                            📍 In-Person Office (Seattle)
                        </button>
                        <button
                            onClick={() => setTab("telehealth")}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                tab === "telehealth"
                                    ? "bg-[var(--color-sage)] text-white shadow-md"
                                    : "text-[var(--text-main)] opacity-70 hover:opacity-100"
                            }`}
                        >
                            💻 Secure Telehealth
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                {tab === "inperson" ? (
                    <div className="animate-fadeIn">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-12">
                            <div className="flex items-center justify-center">
                                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-white/40">
                                    <img
                                        src="/office-1.jpg"
                                        alt="Calming Therapy Office Seating Area"
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-white/40">
                                    <img
                                        src="/office-2.jpg"
                                        alt="Therapy Office Natural Light and Plants"
                                        className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
                            <div className="p-6 bg-white/40 dark:bg-black/10 rounded-2xl border border-[var(--color-sage)]/20">
                                <span className="block text-2xl mb-2">🌿</span>
                                <h4 className="font-sans font-bold text-sm text-[var(--color-sage)] uppercase tracking-wider mb-1">Natural Light & Plants</h4>
                                <p className="text-xs text-[var(--text-main)] opacity-80">Surrounded by calming foliage and warm organic light.</p>
                            </div>
                            <div className="p-6 bg-white/40 dark:bg-black/10 rounded-2xl border border-[var(--color-sage)]/20">
                                <span className="block text-2xl mb-2">🍵</span>
                                <h4 className="font-sans font-bold text-sm text-[var(--color-sage)] uppercase tracking-wider mb-1">Tea & Comfort Bar</h4>
                                <p className="text-xs text-[var(--text-main)] opacity-80">Complimentary herbal teas and filtered spring water waiting for you.</p>
                            </div>
                            <div className="p-6 bg-white/40 dark:bg-black/10 rounded-2xl border border-[var(--color-sage)]/20">
                                <span className="block text-2xl mb-2">🔒</span>
                                <h4 className="font-sans font-bold text-sm text-[var(--color-sage)] uppercase tracking-wider mb-1">Soundproof & Private</h4>
                                <p className="text-xs text-[var(--text-main)] opacity-80">Built with specialized acoustics for complete confidentiality.</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="animate-fadeIn max-w-4xl mx-auto bg-white/40 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/60 dark:border-white/10 shadow-lg text-[var(--text-main)]">
                        <div className="text-center max-w-2xl mx-auto mb-10">
                            <span className="inline-block p-4 rounded-full bg-[var(--color-sage)]/20 text-[var(--color-sage)] mb-4 text-3xl">
                                🛡️
                            </span>
                            <h3 className="font-serif text-3xl font-bold text-[var(--color-sage)] mb-3">
                                Therapy from Your Cozy Safe Space
                            </h3>
                            <p className="text-sm md:text-base opacity-80 leading-relaxed">
                                We utilize secure, HIPAA-compliant video platforms so you can connect deeply from anywhere in Washington or Minnesota without fighting traffic.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-white/60 dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20 flex gap-4 items-start">
                                <span className="text-xl text-[var(--color-sage)]">✓</span>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Zero Commute Stress</h4>
                                    <p className="text-xs opacity-75">Start sessions calm and grounded without rushing through evening rush hour.</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white/60 dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20 flex gap-4 items-start">
                                <span className="text-xl text-[var(--color-sage)]">✓</span>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Flexible Scheduling</h4>
                                    <p className="text-xs opacity-75">Easily slip sessions into a midday lunch break or quiet morning hour.</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white/60 dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20 flex gap-4 items-start">
                                <span className="text-xl text-[var(--color-sage)]">✓</span>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">100% Confidential Video</h4>
                                    <p className="text-xs opacity-75">Encrypted end-to-end sessions via SimplePractice Telehealth.</p>
                                </div>
                            </div>
                            <div className="p-6 bg-white/60 dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20 flex gap-4 items-start">
                                <span className="text-xl text-[var(--color-sage)]">✓</span>
                                <div>
                                    <h4 className="font-bold text-sm mb-1">Multi-State Licensed</h4>
                                    <p className="text-xs opacity-75">Available to all residents living in Washington and Minnesota state.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
