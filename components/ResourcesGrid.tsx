export default function ResourcesGrid() {
    const resources = [
        {
            category: "RECOMMENDED BOOK",
            title: "The Body Keeps the Score",
            author: "Bessel van der Kolk, M.D.",
            description: "A transformative synthesis of neurobiology and somatic psychology explaining how trauma literally reshapes both body and brain—and how therapy offers healing pathways.",
            tag: "Somatic Psychology",
            icon: "📖"
        },
        {
            category: "RECOMMENDED BOOK",
            title: "Attached",
            author: "Amir Levine & Rachel Heller",
            description: "An enlightening guide to attachment theory in adult relationships, helping you understand whether you navigate love with an anxious, avoidant, or secure blueprint.",
            tag: "Relationships",
            icon: "📖"
        },
        {
            category: "SELF-CARE TOOL",
            title: "Insight Timer Mindfulness App",
            author: "Guided Meditations & Breathwork",
            description: "My favorite free daily grounding tool featuring over 100,000 somatic tracks, body scans, and soothing acoustic ambient soundscapes for between-session stabilization.",
            tag: "Nervous System Reset",
            icon: "🎧"
        }
    ];

    return (
        <section className="w-full py-24 px-6 md:px-16 bg-white dark:bg-black/10 border-t border-[var(--color-sage)]/10">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2 block">
                        Client Toolkit
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-main)] tracking-tight mb-4">
                        Curated Readings & Self-Care Resources
                    </h2>
                    <p className="font-sans text-lg text-[var(--text-main)] opacity-80 max-w-2xl mx-auto">
                        Empowering resources Dr. Maya recommends to supplement your therapeutic work and support daily resilience at home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((item, idx) => (
                        <div key={idx} className="bg-[var(--bg-cream)] rounded-3xl p-8 border border-[var(--color-sage)]/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-3xl p-3 bg-white dark:bg-black/20 rounded-2xl border border-[var(--color-sage)]/20 shadow-xs">
                                        {item.icon}
                                    </span>
                                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--color-sage)]/15 text-[var(--color-sage)]">
                                        {item.tag}
                                    </span>
                                </div>
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] opacity-90 block mb-2">
                                    {item.category}
                                </span>
                                <h3 className="font-serif text-2xl font-bold text-[var(--text-main)] mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-xs font-semibold text-[var(--text-main)] opacity-60 mb-4 italic">
                                    By {item.author}
                                </p>
                                <p className="font-sans text-sm text-[var(--text-main)] opacity-80 leading-relaxed mb-6">
                                    {item.description}
                                </p>
                            </div>
                            <div className="pt-4 border-t border-[var(--color-sage)]/20 flex items-center justify-between">
                                <span className="text-xs font-sans opacity-75 text-[var(--text-main)]">Recommended for clients</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-sage)]">
                                    Explore &rarr;
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
