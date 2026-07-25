export default function Hero() {
    return (
        <section className="w-full px-6 md:px-16 py-12 md:py-24 bg-[var(--bg-cream)] min-h-[calc(100vh-76px)] flex items-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="relative w-full max-w-md mx-auto md:max-w-none order-1 md:order-2">
                    <div className="relative w-full aspect-[3/4] bg-[#E5E5E5] rounded-t-[500px] overflow-hidden shadow-2xl">
                        <img
                            src="/maya-profile.jpg"
                            alt="Dr. Maya Reynolds"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-start space-y-8 md:space-y-10 order-2 md:order-1">
                    <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-[var(--text-green)] tracking-tight">
                        Live your life <br className="hidden md:block" />
                        <span className="italic font-light">in full bloom</span>
                    </h1>

                    <p className="font-sans text-lg md:text-xl text-[var(--text-green)] opacity-90 max-w-md leading-relaxed">
                        Compassionate, holistic therapy for adults navigating anxiety, trauma, and life transitions in Minneapolis, MN & Seattle, WA.
                    </p>

                    <button className="group relative pr-6 py-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-green)] transition-all hover:opacity-70">
                        <span className="border border-[var(--text-green)] px-8 py-4 inline-block hover:bg-[var(--text-green)] hover:text-[var(--bg-cream)] transition-colors duration-300 rounded-full">
                            Connect With Me &rarr;
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}
