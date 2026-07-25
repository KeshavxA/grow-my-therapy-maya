export default function BlogPreview() {
    const posts = [
        {
            title: "Navigating Anxiety in a Fast-Paced World",
            excerpt: "Practical mindfulness techniques to ground yourself when everything feels overwhelming.",
            date: "Oct 12, 2023",
            category: "Anxiety"
        },
        {
            title: "Understanding Your Attachment Style",
            excerpt: "How early relationships shape our adult connections and what we can do about it.",
            date: "Nov 05, 2023",
            category: "Relationships"
        },
        {
            title: "The Subtle Signs of High-Functioning Burnout",
            excerpt: "You might be getting things done, but at what cost? Recognizing the invisible toll of chronic stress.",
            date: "Dec 18, 2023",
            category: "Burnout"
        }
    ];

    return (
        <section id="blog" className="w-full py-24 px-6 md:px-16 bg-[var(--bg-cream)]">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-main)] tracking-tight mb-4">
                            Latest Insights
                        </h2>
                        <p className="font-sans text-lg text-[var(--text-main)] opacity-80 max-w-xl">
                            Thoughts, resources, and reflections on mental health and personal growth.
                        </p>
                    </div>
                    <a href="#" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-[var(--color-sage)] hover:opacity-70 transition-opacity whitespace-nowrap">
                        View All Articles &rarr;
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <a href="#" key={idx} className="group block bg-white dark:bg-black/20 rounded-2xl overflow-hidden border border-[var(--color-sage)]/20 hover:border-[var(--color-sage)] transition-colors duration-300">
                            <div className="h-48 bg-[var(--color-sage)]/10 overflow-hidden relative">
                                {/* Placeholder for an image */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
                                    <svg className="w-12 h-12 text-[var(--color-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">
                                    <span>{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-[var(--color-sage)]"></span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="font-serif text-2xl text-[var(--text-main)] mb-3 group-hover:text-[var(--color-sage)] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="font-sans text-[var(--text-main)] opacity-70 leading-relaxed text-sm">
                                    {post.excerpt}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
