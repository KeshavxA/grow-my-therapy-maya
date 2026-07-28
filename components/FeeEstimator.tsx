"use client";

import { useState } from "react";

export default function FeeEstimator() {
    const [selectedService, setSelectedService] = useState<number>(210); // 210, 285, 240
    const [reimbursementRate, setReimbursementRate] = useState<number>(60); // 50, 60, 70, 80 percent
    const [frequency, setFrequency] = useState<number>(4); // sessions per month: 4 (weekly) or 2 (bi-weekly)

    const serviceTypes = [
        { id: "individual", label: "Individual Holistic Therapy (50m)", fee: 210 },
        { id: "emdr", label: "EMDR & Trauma Intensive (80m)", fee: 285 },
        { id: "couples", label: "Couples & Relational Counseling (60m)", fee: 240 }
    ];

    const estimatedReimbursementPerSession = Math.round((selectedService * (reimbursementRate / 100)));
    const netCostPerSession = selectedService - estimatedReimbursementPerSession;
    const monthlyTotalNet = netCostPerSession * frequency;

    return (
        <section className="w-full py-24 px-6 md:px-16 bg-white dark:bg-black/20 relative border-t border-[var(--color-sage)]/15">
            <div className="container mx-auto max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2 block">
                        Transparent Investment
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl text-[var(--text-main)] tracking-tight mb-4">
                        Therapy Investment & Out-of-Network Calculator
                    </h2>
                    <p className="font-sans text-base md:text-lg text-[var(--text-main)] opacity-80 max-w-2xl mx-auto">
                        Financial transparency fosters therapeutic trust. Use this intuitive estimator to understand your expected out-of-pocket investment after submitting your Superbill for insurer reimbursement.
                    </p>
                </div>

                <div className="bg-[var(--bg-cream)] rounded-3xl p-8 md:p-12 border border-[var(--color-sage)]/30 shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-main)] mb-3">
                                1. Select Therapy Service
                            </label>
                            <div className="space-y-2">
                                {serviceTypes.map((service) => (
                                    <button
                                        key={service.id}
                                        type="button"
                                        onClick={() => setSelectedService(service.fee)}
                                        className={`w-full p-3.5 rounded-xl text-left border transition-all flex justify-between items-center text-sm ${
                                            selectedService === service.fee
                                                ? "bg-[var(--color-sage)] text-white font-bold border-[var(--color-sage)] shadow-xs"
                                                : "bg-white/70 dark:bg-black/20 text-[var(--text-main)] border-[var(--color-sage)]/20 hover:border-[var(--color-sage)]"
                                        }`}
                                    >
                                        <span>{service.label}</span>
                                        <span>${service.fee}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-main)] mb-2">
                                2. Estimated Insurer Reimbursement Rate: {reimbursementRate}%
                            </label>
                            <p className="text-[11px] opacity-70 text-[var(--text-main)] mb-3 font-sans">
                                Most major insurers (Premera, Regence, Aetna) reimburse between 50%–80% for out-of-network behavioral health after deductible.
                            </p>
                            <div className="grid grid-cols-4 gap-2">
                                {[50, 60, 70, 80].map((rate) => (
                                    <button
                                        key={rate}
                                        type="button"
                                        onClick={() => setReimbursementRate(rate)}
                                        className={`py-2 rounded-lg text-xs font-bold border transition-all ${
                                            reimbursementRate === rate
                                                ? "bg-[var(--text-main)] text-white border-transparent shadow-xs"
                                                : "bg-white/50 dark:bg-black/10 text-[var(--text-main)] border-[var(--color-sage)]/20"
                                        }`}
                                    >
                                        {rate}%
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-[var(--text-main)] mb-3">
                                3. Session Frequency
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setFrequency(4)}
                                    className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                                        frequency === 4
                                            ? "bg-[var(--color-sage)] text-white border-[var(--color-sage)] shadow-xs"
                                            : "bg-white/60 dark:bg-black/20 text-[var(--text-main)] border-[var(--color-sage)]/20"
                                    }`}
                                >
                                    Weekly (4x / mo)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setFrequency(2)}
                                    className={`p-3 rounded-xl text-xs font-bold border transition-all text-center ${
                                        frequency === 2
                                            ? "bg-[var(--color-sage)] text-white border-[var(--color-sage)] shadow-xs"
                                            : "bg-white/60 dark:bg-black/20 text-[var(--text-main)] border-[var(--color-sage)]/20"
                                    }`}
                                >
                                    Bi-Weekly (2x / mo)
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-black/40 rounded-2xl p-8 border border-[var(--color-sage)]/30 flex flex-col justify-between shadow-inner">
                        <div>
                            <h3 className="font-serif text-2xl font-bold text-[var(--color-sage)] border-b border-[var(--color-sage)]/15 pb-4 mb-6">
                                Your Estimated Investment
                            </h3>

                            <div className="space-y-4 font-sans text-sm">
                                <div className="flex justify-between text-[var(--text-main)] opacity-80">
                                    <span>Standard Session Fee:</span>
                                    <span className="font-bold">${selectedService}</span>
                                </div>
                                <div className="flex justify-between text-[var(--color-sage)] font-bold">
                                    <span>Est. Superbill Refund ({reimbursementRate}%):</span>
                                    <span>-${estimatedReimbursementPerSession}</span>
                                </div>
                                <div className="border-t border-dashed border-gray-300 dark:border-gray-700 pt-3 flex justify-between items-baseline">
                                    <span className="font-bold text-[var(--text-main)] uppercase text-xs tracking-wider">Net Cost Per Session:</span>
                                    <span className="font-serif text-3xl font-extrabold text-[var(--text-main)]">${netCostPerSession}</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[var(--color-sage)]/10 text-[var(--text-main)] mt-4">
                                    <span className="text-[11px] font-bold uppercase tracking-wider block opacity-75 mb-1">
                                        Estimated Monthly Total ({frequency} sessions)
                                    </span>
                                    <span className="font-serif text-2xl font-bold text-[var(--color-sage)]">
                                        ${monthlyTotalNet} <span className="text-xs font-normal opacity-80">net investment / month</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-[var(--color-sage)]/15 text-center">
                            <a 
                                href="#contact"
                                className="block w-full py-3.5 bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity shadow-sm"
                            >
                                Verify Benefits & Book Consultation
                            </a>
                            <p className="text-[10px] opacity-65 mt-2 italic text-[var(--text-main)]">
                                * Actual reimbursement rates vary by specific insurer policy & annual deductibles.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
