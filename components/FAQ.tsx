"use client";

import { useState, useMemo } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [showSuperbillGuide, setShowSuperbillGuide] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", label: "All Questions" },
        { id: "financials", label: "Insurance & Fees" },
        { id: "telehealth", label: "Telehealth & Access" },
        { id: "clinical", label: "Clinical & EMDR" },
        { id: "logistics", label: "Scheduling & Policy" }
    ];

    const faqs = [
        {
            question: "Do you accept insurance?",
            answer: "I am an out-of-network provider. This allows us to prioritize your care without the restrictions often imposed by insurance companies. I can provide a superbill for you to submit for reimbursement.",
            category: "financials"
        },
        {
            question: "Do you offer online therapy?",
            answer: "Yes, I offer secure, HIPAA-compliant telehealth sessions for clients located anywhere in Washington and Minnesota.",
            category: "telehealth"
        },
        {
            question: "How long are therapy sessions?",
            answer: "Individual sessions are typically 50 minutes. Intake sessions and EMDR/trauma intensive processing sessions may be longer, usually 75-90 minutes.",
            category: "logistics"
        },
        {
            question: "What is your holistic approach to trauma and EMDR?",
            answer: "I use a holistic, body-centered approach including eye movement desensitization and reprocessing (EMDR). We pace the work safely, ensuring your nervous system feels grounded and supported before processing deep emotional wounds.",
            category: "clinical"
        },
        {
            question: "What is your session cancellation policy?",
            answer: "Because your reserved appointment hour is dedicated solely to you, we require a minimum of 48 hours notice for cancellations or rescheduling to avoid being charged the standard session fee.",
            category: "logistics"
        },
        {
            question: "How do I prepare for our first consultation or intake?",
            answer: "Our initial 20-minute phone consultation is a gentle conversation to explore what you're seeking help with, answer your procedural questions, and verify that our clinical styles feel like a comfortable fit.",
            category: "logistics"
        },
        {
            question: "What makes somatic therapy different from talk therapy?",
            answer: "While traditional talk therapy engages only cognitive reasoning, somatic therapy attends to physical tension patterns, nervous system states, and emotional memory held in the body for far deeper healing.",
            category: "clinical"
        },
        {
            question: "Can I switch between in-person Seattle visits and telehealth?",
            answer: "Absolutely! For Washington residents in the Seattle metro area, many clients enjoy a hybrid model—attending sessions at our quiet Westlake sanctuary on some weeks and connecting via secure video when travel is inconvenient.",
            category: "telehealth"
        }
    ];

    const filteredFaqs = useMemo(() => {
        return faqs.filter(faq => {
            const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
            const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery, faqs]);

    return (
        <section className="w-full py-24 px-6 md:px-16 bg-[var(--color-sand)]">
            <div className="container mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-sage)] tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="font-sans text-base text-[var(--text-main)] opacity-80 max-w-xl mx-auto">
                        Find clear answers about my therapeutic approach, practice logistics, and financial reimbursement.
                    </p>
                </div>

                {/* Search Bar & Filter Tabs */}
                <div className="mb-10 space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search questions (e.g., EMDR, insurance, telehealth, policy)..."
                            className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-white/70 dark:bg-black/30 border border-[var(--color-sage)]/40 focus:outline-none focus:border-[var(--color-sage)] focus:ring-1 focus:ring-[var(--color-sage)] text-sm text-[var(--text-main)] placeholder:text-[var(--text-main)]/50 shadow-sm transition-all font-sans"
                        />
                        <svg className="w-5 h-5 text-[var(--color-sage)] absolute left-4 top-1/2 transform -translate-y-1/2 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xs opacity-60 hover:opacity-100 text-[var(--text-main)] bg-[var(--color-sage)]/10 px-2 py-1 rounded-md"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setSelectedCategory(cat.id);
                                    setOpenIndex(null); // reset expanded state when switching category
                                }}
                                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                                    selectedCategory === cat.id
                                        ? "bg-[var(--color-sage)] text-white shadow-xs"
                                        : "bg-white/50 dark:bg-black/15 text-[var(--text-main)] border border-[var(--color-sage)]/20 hover:bg-white/80"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-4 mb-14">
                    {filteredFaqs.length === 0 ? (
                        <div className="text-center py-12 bg-white/40 dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20 font-sans">
                            <p className="text-sm text-[var(--text-main)] opacity-80 mb-2">No matching questions found for "{searchQuery}".</p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                                className="text-xs text-[var(--color-sage)] underline font-bold"
                            >
                                Reset Filters
                            </button>
                        </div>
                    ) : (
                        filteredFaqs.map((faq, i) => (
                            <div key={i} className="border border-[var(--color-sage)]/30 rounded-xl overflow-hidden bg-white/50 dark:bg-black/20 backdrop-blur-sm transition-all duration-300">
                                <button
                                    className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    <h3 className="font-serif text-lg md:text-xl text-[var(--text-main)] pr-8 font-semibold">
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
                                    <p className="font-sans text-sm md:text-base text-[var(--text-main)] opacity-80 leading-relaxed border-t border-[var(--color-sage)]/15 pt-4">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
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
