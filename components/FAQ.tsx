"use client";

import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-[var(--color-sage)]/30 rounded-xl overflow-hidden bg-white/50 backdrop-blur-sm transition-all duration-300">
                            <button
                                className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <h3 className="font-serif text-xl text-[var(--color-charcoal)] pr-8">
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
                                <p className="font-sans text-[var(--color-charcoal)] opacity-80 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
