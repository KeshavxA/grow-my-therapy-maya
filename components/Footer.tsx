"use client";

import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "subscribing" | "success" | "error">("idle");
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes("@")) {
            setStatus("error");
            return;
        }
        setStatus("subscribing");
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1000);
    };

    return (
        <footer className="w-full py-16 bg-[var(--bg-soft)] text-[var(--text-main)] border-t border-[var(--color-sage)]/20 relative">
            <div className="container mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-3xl font-bold tracking-tight text-[var(--color-sage)] mb-4">
                            Dr. Maya Reynolds
                        </h3>
                        <p className="font-sans text-sm opacity-80 max-w-sm mb-6">
                            Helping you find clarity, healing, and purpose through compassionate, evidence-based therapy.
                        </p>
                        <div className="flex gap-6 font-sans text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-charcoal)]">
                            <a href="#" className="hover:text-[var(--color-sage)] transition-colors">Instagram</a>
                            <a href="#" className="hover:text-[var(--color-sage)] transition-colors">Facebook</a>
                            <a href="#" className="hover:text-[var(--color-sage)] transition-colors">LinkedIn</a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><a href="#about" className="hover:text-[var(--color-sage)] transition-colors">About Maya</a></li>
                            <li><a href="#services" className="hover:text-[var(--color-sage)] transition-colors">Services</a></li>
                            <li><a href="#testimonials" className="hover:text-[var(--color-sage)] transition-colors">Success Stories</a></li>
                            <li><a href="#contact" className="hover:text-[var(--color-sage)] transition-colors">Book a Session</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">Newsletter</h4>
                        <p className="text-xs opacity-80 mb-4">Subscribe for monthly insights on mental wellness and growth.</p>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                                placeholder="Your email address" 
                                className="px-4 py-2 bg-white dark:bg-black/40 border border-[var(--color-sage)]/30 rounded-md text-sm focus:outline-none focus:border-[var(--color-sage)] transition-colors w-full" 
                            />
                            <button 
                                type="submit" 
                                disabled={status === "subscribing"}
                                className="px-4 py-2 bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-opacity-90 transition-opacity w-full disabled:opacity-50"
                            >
                                {status === "subscribing" ? "Joining..." : "Subscribe"}
                            </button>
                            {status === "success" && (
                                <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-bold">
                                    ✓ Thank you for subscribing! Welcome to our mindful community.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-xs text-red-500 mt-1">
                                    Please enter a valid email address.
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--color-sage)]/20 text-center text-xs opacity-70 font-sans tracking-wide flex flex-col sm:flex-row items-center justify-center gap-2">
                    <span>&copy; {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved. |</span>
                    <button 
                        onClick={() => setShowPrivacyModal(true)}
                        className="hover:underline font-bold text-[var(--color-sage)] focus:outline-none"
                    >
                        HIPAA & Privacy Policy
                    </button>
                </div>
            </div>

            {/* Interactive HIPAA & Privacy Policy Modal */}
            {showPrivacyModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
                    <div 
                        className="bg-white dark:bg-[#1C2321] text-[var(--text-main)] max-w-2xl w-full max-h-[85vh] overflow-y-auto rounded-3xl p-8 border border-[var(--color-sage)]/30 shadow-2xl relative text-left"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-[var(--color-sage)]/20 pb-4 mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🛡️</span>
                                <h3 className="font-serif text-2xl font-bold text-[var(--color-sage)]">
                                    HIPAA & Patient Privacy Policy
                                </h3>
                            </div>
                            <button 
                                onClick={() => setShowPrivacyModal(false)}
                                className="p-2 text-[var(--text-main)] opacity-60 hover:opacity-100 transition-opacity text-xl font-bold rounded-full bg-black/5 dark:bg-white/10"
                                aria-label="Close modal"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="space-y-5 font-sans text-sm leading-relaxed opacity-90">
                            <div>
                                <h4 className="font-bold text-base text-[var(--color-sage)] mb-1">1. Confidentiality & HIPAA Compliance</h4>
                                <p>All therapy sessions, messaging, and health records remain under strictly protected, end-to-end encrypted HIPAA-compliant systems (SimplePractice). Your protected health information (PHI) is never shared without your written consent.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-base text-[var(--color-sage)] mb-1">2. Limits of Confidentiality</h4>
                                <p>By professional ethics and state legal mandate (Washington & Minnesota), confidentiality must be broken only under specific high-risk circumstances: imminent danger of harm to self or others, or suspected abuse/neglect of a child, dependent, or vulnerable elder.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-base text-[var(--color-sage)] mb-1">3. Telehealth Security</h4>
                                <p>Our online therapy sessions utilize secure, encrypted video protocols that exceed federal standards for telemedicine privacy. We never record sessions, and no video data is stored on local or third-party servers.</p>
                            </div>

                            <div>
                                <h4 className="font-bold text-base text-[var(--color-sage)] mb-1">4. Website & Cookies</h4>
                                <p>This website employs anonymous basic analytical tools without intrusive ad-trackers. Any data submitted through our "Book Consultation" form is transmitted directly via SSL encryption to our private practice intake desk.</p>
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-[var(--color-sage)]/20 flex justify-end">
                            <button
                                onClick={() => setShowPrivacyModal(false)}
                                className="px-6 py-3 bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:opacity-90 transition-opacity shadow-sm"
                            >
                                I Understand & Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}
