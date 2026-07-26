"use client";

import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [showSuperbillGuide, setShowSuperbillGuide] = useState(false);

    const faqs = [
        {
            question: "Do you accept insurance?",
            answer: "I am an out-of-network provider. This allows us to prioritize your care without the restrictions often imposed by insurance companies. I can provide a superbill for you to submit for reimbursement."
        },
        {
            question: "Do you offer online therapy?",
            answer: "Yes, I offer secure, HIPAA-compliant telehealth sessions for clients located anywhere in Washington and Minnesota."
        },
        {
            question: "How long are sessions?",
            answer: "Individual sessions are typically 50 minutes. Intake sessions and couples sessions may be longer, usually 75-90 minutes."
        },
        {
            question: "What is your approach to trauma?",
            answer: "I use a holistic, body-centered approach including EMDR. We pace the work safely, ensuring you feel grounded and supported before processing deep emotional wounds."
        }
    ];

    return (
        <section className="w-full py-24 px-6 md:px-16 bg-[var(--color-sand)]">
            <div className="container mx-auto max-w-3xl">
                <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-sage)] text-center mb-16 tracking-tight">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4 mb-12">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-[var(--color-sage)]/30 rounded-xl overflow-hidden bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-all duration-300">
                            <button
                                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <h3 className="font-serif text-xl text-[var(--text-main)] pr-8">
                                    {faq.question}
                                </h3>
                                <div className={`transform transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-[var(--color-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="font-sans text-[var(--text-main)] opacity-80 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Interactive Superbill & Reimbursement Guide */}
                <div className="bg-white/70 dark:bg-white/5 rounded-3xl p-8 border border-[var(--color-sage)]/40 shadow-md text-[var(--text-main)] transition-all">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl p-2 rounded-xl bg-[var(--color-sage)]/20">📄</span>
                            <div>
                                <h4 className="font-serif font-bold text-lg text-[var(--color-sage)]">
                                    Out-of-Network Superbill Guide
                                </h4>
                                <p className="text-xs opacity-75 font-sans">Learn how to claim up to 50-80% reimbursement from your insurer</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowSuperbillGuide(!showSuperbillGuide)}
                            className="px-5 py-2 rounded-full bg-[var(--color-sage)]/15 hover:bg-[var(--color-sage)]/25 text-[var(--color-sage)] text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
                        >
                            {showSuperbillGuide ? "Hide Guide ▲" : "How It Works ▼"}
                        </button>
                    </div>

                    {showSuperbillGuide && (
                        <div className="mt-6 pt-6 border-t border-[var(--color-sage)]/20 space-y-4 animate-fadeIn font-sans text-sm">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="p-4 bg-white dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20">
                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--color-sage)] text-white text-[10px] font-bold mb-2">STEP 1</span>
                                    <h5 className="font-bold mb-1">Pay at Session</h5>
                                    <p className="text-xs opacity-80">You pay the standard session fee directly via our HIPAA client portal after each appointment.</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20">
                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--color-sage)] text-white text-[10px] font-bold mb-2">STEP 2</span>
                                    <h5 className="font-bold mb-1">Receive Superbill</h5>
                                    <p className="text-xs opacity-80">We generate an official itemized medical receipt (Superbill) containing diagnostic & procedure codes.</p>
                                </div>
                                <div className="p-4 bg-white dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20">
                                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[var(--color-sage)] text-white text-[10px] font-bold mb-2">STEP 3</span>
                                    <h5 className="font-bold mb-1">Submit for Check</h5>
                                    <p className="text-xs opacity-80">Upload the PDF to your insurer's portal (like Premera, Regence, Aetna) to receive a direct refund check.</p>
                                </div>
                            </div>
                            <p className="text-xs opacity-70 italic text-center pt-2">
                                * Tip: Call your insurer prior to your intake and ask: "What is my deductible and reimbursement rate for outpatient behavioral health (code 90837) out-of-network?"
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
