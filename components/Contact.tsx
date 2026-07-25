"use client";

import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");
        setTimeout(() => setStatus("Message sent successfully! I will get back to you shortly."), 1500);
    };

    return (
        <section id="contact" className="w-full py-24 px-6 md:px-16 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-main)] tracking-tight mb-6">
                            Let's Connect
                        </h2>
                        <p className="font-sans text-lg text-[var(--text-main)] opacity-80 mb-10 leading-relaxed">
                            Taking the first step can be daunting, but I'm here to support you. Reach out to schedule a free 15-minute consultation to see if we'd be a good fit.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="text-[var(--color-sage)] mt-1">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--text-main)] text-sm uppercase tracking-widest">Email</h4>
                                    <p className="text-[var(--text-main)] opacity-80 mt-1">hello@drmayareynolds.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="text-[var(--color-sage)] mt-1">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-[var(--text-main)] text-sm uppercase tracking-widest">Location</h4>
                                    <p className="text-[var(--text-main)] opacity-80 mt-1">Telehealth in WA & MN<br />In-person in Seattle, WA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[var(--bg-cream)] p-8 md:p-10 rounded-3xl shadow-lg border border-[var(--color-sage)]/10 relative z-10">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold uppercase tracking-widest text-[var(--text-main)] mb-2">Name</label>
                                <input type="text" id="name" required className="w-full px-4 py-3 bg-white border border-[var(--color-sage)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]/50 transition-all" onChange={e => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold uppercase tracking-widest text-[var(--text-main)] mb-2">Email</label>
                                <input type="email" id="email" required className="w-full px-4 py-3 bg-white border border-[var(--color-sage)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]/50 transition-all" onChange={e => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold uppercase tracking-widest text-[var(--text-main)] mb-2">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 bg-white border border-[var(--color-sage)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]/50 transition-all text-gray-700" onChange={e => setFormData({ ...formData, subject: e.target.value })}>
                                    <option>Initial Consultation</option>
                                    <option>Current Client Inquiry</option>
                                    <option>Press/Speaking</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-bold uppercase tracking-widest text-[var(--text-main)] mb-2">Message</label>
                                <textarea id="message" rows={4} required className="w-full px-4 py-3 bg-white border border-[var(--color-sage)]/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)]/50 transition-all resize-none" onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-[var(--color-sage)] text-white text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-opacity-90 transition-opacity shadow-md">
                                Send Message
                            </button>
                            {status && <p className="text-center text-sm font-bold text-[var(--color-sage)] mt-4">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[var(--color-sage)]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        </section>
    );
}
