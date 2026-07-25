export default function ServicesGrid() {
    return (
        <section id="services" className="w-full py-24 px-6 md:px-16 bg-[var(--bg-cream)] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-sage)]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d3d9d6]/30 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="font-serif text-5xl md:text-6xl text-[var(--text-green)] tracking-tight mb-4">
                        My Specialties
                    </h2>
                    <p className="font-sans text-lg text-[var(--text-green)] opacity-80 max-w-2xl mx-auto">
                        Evidence-based approaches tailored to your unique journey towards healing and self-discovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                    {/* Card 1 */}
                    <div className="group flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 p-10 min-h-[500px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="z-10 relative flex flex-col h-full">
                            <div className="w-16 h-16 rounded-full bg-[var(--color-sage)]/20 flex items-center justify-center mb-8 text-[var(--text-green)] group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-[var(--text-green)] mb-4">
                                Self-Esteem
                            </h3>
                            <p className="font-sans text-[var(--text-green)] opacity-80 leading-relaxed text-base mb-8 flex-grow">
                                Do you struggle with a harsh inner critic? Building a strong sense of self-worth is key to living a fulfilled life.
                            </p>
                            <ul className="text-[var(--text-green)] opacity-70 space-y-3 mb-8 text-sm">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Quieting the Inner Critic</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Setting Boundaries</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Cultivating Self-Compassion</li>
                            </ul>
                            <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[var(--text-green)] group-hover:text-[var(--color-sage)] transition-colors">
                                Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="group flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 p-10 min-h-[500px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="z-10 relative flex flex-col h-full">
                            <div className="w-16 h-16 rounded-full bg-[var(--color-sage)]/20 flex items-center justify-center mb-8 text-[var(--text-green)] group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-[var(--text-green)] mb-4">
                                Relationships
                            </h3>
                            <p className="font-sans text-[var(--text-green)] opacity-80 leading-relaxed text-base mb-8 flex-grow">
                                Navigating relationships can be complex. I help you explore attachment patterns to form deeper, secure connections.
                            </p>
                            <ul className="text-[var(--text-green)] opacity-70 space-y-3 mb-8 text-sm">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Attachment Styles</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Communication Skills</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Conflict Resolution</li>
                            </ul>
                            <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[var(--text-green)] group-hover:text-[var(--color-sage)] transition-colors">
                                Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Card 3 */}
                    <div className="group flex flex-col bg-white/40 backdrop-blur-xl border border-white/60 p-10 min-h-[500px] rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="z-10 relative flex flex-col h-full">
                            <div className="w-16 h-16 rounded-full bg-[var(--color-sage)]/20 flex items-center justify-center mb-8 text-[var(--text-green)] group-hover:scale-110 transition-transform duration-500">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <h3 className="font-sans text-2xl font-bold text-[var(--text-green)] mb-4">
                                Burnout
                            </h3>
                            <p className="font-sans text-[var(--text-green)] opacity-80 leading-relaxed text-base mb-8 flex-grow">
                                Feeling constantly overwhelmed? Together, we'll identify strategies to manage stress and prevent future burnout.
                            </p>
                            <ul className="text-[var(--text-green)] opacity-70 space-y-3 mb-8 text-sm">
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Work-Life Balance</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Stress Management</li>
                                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[var(--color-sage)] rounded-full"></span>Finding Purpose</li>
                            </ul>
                            <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[var(--text-green)] group-hover:text-[var(--color-sage)] transition-colors">
                                Learn More <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
