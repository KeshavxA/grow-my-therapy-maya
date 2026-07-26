"use client";

import { useState } from "react";

export default function BlogPreview() {
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const posts = [
        {
            title: "Navigating Anxiety in a Fast-Paced World",
            excerpt: "Practical mindfulness techniques to ground yourself when everything feels overwhelming.",
            date: "Oct 12, 2023",
            category: "Anxiety",
            slug: "navigating-anxiety"
        },
        {
            title: "Understanding Your Attachment Style",
            excerpt: "How early relationships shape our adult connections and what we can do about it.",
            date: "Nov 05, 2023",
            category: "Relationships",
            slug: "understanding-attachment"
        },
        {
            title: "The Subtle Signs of High-Functioning Burnout",
            excerpt: "You might be getting things done, but at what cost? Recognizing the invisible toll of chronic stress.",
            date: "Dec 18, 2023",
            category: "Burnout",
            slug: "high-functioning-burnout"
        }
    ];

    const copyToClipboard = (e: React.MouseEvent, index: number, slug: string) => {
        e.preventDefault();
        e.stopPropagation();
        const url = `${window.location.origin}/#blog-${slug}`;
        navigator.clipboard.writeText(url);
        setCopiedIndex(index);
        setTimeout(() => {
            setCopiedIndex(null);
        }, 2000);
    };

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
                        <div key={idx} className="group flex flex-col bg-white dark:bg-black/20 rounded-2xl overflow-hidden border border-[var(--color-sage)]/20 hover:border-[var(--color-sage)] transition-colors duration-300 relative">
                            <div className="h-48 bg-[var(--color-sage)]/10 overflow-hidden relative">
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-105 transition-transform duration-700">
                                    <svg className="w-12 h-12 text-[var(--color-sage)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>

                                {/* Interactive Copy/Share Button */}
                                <button
                                    onClick={(e) => copyToClipboard(e, idx, post.slug)}
                                    className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 p-2.5 rounded-full shadow-md text-[var(--color-sage)] hover:scale-110 transition-transform duration-200 z-10 flex items-center gap-1.5 border border-[var(--color-sage)]/20"
                                    title="Copy link to article"
                                    aria-label="Copy link to article"
                                >
                                    {copiedIndex === idx ? (
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-600 dark:text-green-400 px-1">
                                            ✓ Copied!
                                        </span>
                                    ) : (
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                    )}
                                </button>
                            </div>

                            <a href={`#blog-${post.slug}`} className="p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">
                                    <span>{post.category}</span>
                                    <span className="w-1 h-1 rounded-full bg-[var(--color-sage)]"></span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="font-serif text-2xl text-[var(--text-main)] mb-3 group-hover:text-[var(--color-sage)] transition-colors">
                                    {post.title}
                                </h3>
                                <p className="font-sans text-[var(--text-main)] opacity-70 leading-relaxed text-sm flex-grow">
                                    {post.excerpt}
                                </p>
                                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] mt-6 inline-block">
                                    Read Article &rarr;
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
