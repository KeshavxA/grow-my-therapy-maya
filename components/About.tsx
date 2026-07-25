export default function About() {
    return (
        <section id="about" className="w-full px-6 md:px-16 py-16 md:py-32 bg-white">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="flex flex-col items-start space-y-8">
                    <h2 className="font-serif text-4xl md:text-6xl text-[var(--text-main)] tracking-tight">
                        Meet Dr. Maya.
                    </h2>
                    <div className="font-sans text-lg text-[var(--text-main)] opacity-90 space-y-6 max-w-lg leading-relaxed">
                        <p>
                            I am a licensed clinical psychologist dedicated to helping individuals in Seattle and Minneapolis navigate life's complexities with resilience and self-compassion.
                        </p>
                        <p>
                            My approach emphasizes the mind-body connection, integrating evidence-based therapies like CBT, EMDR, and Mindfulness to support your holistic well-being and long-term growth.
                        </p>
                    </div>

                    <button className="mt-8 group relative pr-6 py-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--text-main)] transition-all hover:opacity-70">
                        <span className="border-b-2 border-[var(--text-main)] pb-1 inline-block">
                            More About My Practice
                        </span>
                        <span className="ml-2 transition-transform group-hover:translate-x-1 inline-block">&rarr;</span>
                    </button>
                </div>
                <div className="relative w-full max-w-md mx-auto md:max-w-none md:ml-auto">
                    <div className="relative w-full aspect-[4/5] bg-[var(--bg-cream)] rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src="/maya-profile.jpg"
                            alt="Dr. Maya Reynolds"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[var(--color-sage)] opacity-20 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
}
