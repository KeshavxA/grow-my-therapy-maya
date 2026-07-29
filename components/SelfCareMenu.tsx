"use client";

import { useState } from "react";

interface MenuItem {
    title: string;
    description: string;
}

export default function SelfCareMenu() {
    const appetizers: MenuItem[] = [
        { title: "Drink a Glass of Water", description: "Slowly. Notice the temperature." },
        { title: "5 Deep Belly Breaths", description: "Inhale for 4, hold for 4, exhale for 6." },
        { title: "Step Outside", description: "Feel the sun or wind on your face for 2 minutes." },
        { title: "Stretch Your Neck", description: "Gently roll your shoulders and stretch your neck." },
        { title: "Listen to One Song", description: "Put on a song that matches your current mood." }
    ];

    const mains: MenuItem[] = [
        { title: "Mindful Walk", description: "Take a 20-minute walk without your phone or podcasts." },
        { title: "Brain Dump Journaling", description: "Write stream-of-consciousness for 15 minutes." },
        { title: "Cook a Nourishing Meal", description: "Chop vegetables slowly. Smell the spices." },
        { title: "Call a Safe Friend", description: "Have a 30-minute chat with someone who doesn't drain you." },
        { title: "Gentle Yoga/Stretching", description: "Follow a 20-minute restorative yoga video." }
    ];

    const desserts: MenuItem[] = [
        { title: "Watch a Comfort Show", description: "1 episode of something familiar and cozy." },
        { title: "Take a Warm Bath", description: "Add Epsom salts or bubbles if you have them." },
        { title: "Eat a Favorite Treat", description: "Savor a piece of chocolate or a warm cup of tea." },
        { title: "Read for Pleasure", description: "Read a fiction book for 20 minutes under a blanket." },
        { title: "Do Nothing", description: "Literally sit on the couch and stare at the wall. Guilt-free." }
    ];

    const [currentMenu, setCurrentMenu] = useState<{ app: MenuItem, main: MenuItem, dessert: MenuItem } | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const generateMenu = () => {
        setIsGenerating(true);
        // Simulate a tiny loading delay for effect
        setTimeout(() => {
            const app = appetizers[Math.floor(Math.random() * appetizers.length)];
            const main = mains[Math.floor(Math.random() * mains.length)];
            const dessert = desserts[Math.floor(Math.random() * desserts.length)];
            
            setCurrentMenu({ app, main, dessert });
            setIsGenerating(false);
        }, 600);
    };

    return (
        <section className="w-full py-20 px-6 md:px-16 bg-[var(--bg-cream)] border-t border-[var(--color-sage)]/10">
            <div className="container mx-auto max-w-4xl text-center">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-sage)] mb-2 block">
                    Bypass Decision Fatigue
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-main)] tracking-tight mb-6">
                    The Self-Care Menu
                </h2>
                <p className="font-sans text-base text-[var(--text-main)] opacity-80 leading-relaxed max-w-2xl mx-auto mb-10">
                    When you're overwhelmed, deciding *how* to care for yourself is often too exhausting. Click the button below to generate a randomized, zero-guilt self-care menu for today.
                </p>

                <div className="mb-10">
                    <button 
                        onClick={generateMenu}
                        disabled={isGenerating}
                        className="px-8 py-4 bg-[var(--color-sage)] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all shadow-md active:scale-95 disabled:opacity-50"
                    >
                        {isGenerating ? "Curating..." : "Generate My Menu"}
                    </button>
                </div>

                <div className="bg-white dark:bg-[#121212] rounded-3xl p-6 md:p-10 border border-[var(--color-sage)]/20 shadow-sm min-h-[300px] flex flex-col justify-center relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-sage)]/5 rounded-full -translate-y-16 translate-x-16 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--color-sage)]/10 rounded-full translate-y-16 -translate-x-16 blur-2xl"></div>

                    {!currentMenu ? (
                        <div className="text-center text-[var(--text-main)] opacity-50 font-serif italic text-lg z-10">
                            Your menu is waiting...
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 z-10">
                            {/* Appetizer */}
                            <div className="text-center p-4 animate-fadeIn" style={{ animationDelay: '0ms' }}>
                                <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">
                                    Appetizer
                                </div>
                                <h3 className="font-serif text-xl text-[var(--text-main)] font-bold mb-2">
                                    {currentMenu.app.title}
                                </h3>
                                <p className="text-sm text-[var(--text-main)] opacity-70">
                                    {currentMenu.app.description}
                                </p>
                            </div>

                            {/* Main Course */}
                            <div className="text-center p-4 border-y md:border-y-0 md:border-x border-[var(--color-sage)]/20 animate-fadeIn" style={{ animationDelay: '150ms' }}>
                                <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">
                                    Main Course
                                </div>
                                <h3 className="font-serif text-xl text-[var(--text-main)] font-bold mb-2">
                                    {currentMenu.main.title}
                                </h3>
                                <p className="text-sm text-[var(--text-main)] opacity-70">
                                    {currentMenu.main.description}
                                </p>
                            </div>

                            {/* Dessert */}
                            <div className="text-center p-4 animate-fadeIn" style={{ animationDelay: '300ms' }}>
                                <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">
                                    Dessert
                                </div>
                                <h3 className="font-serif text-xl text-[var(--text-main)] font-bold mb-2">
                                    {currentMenu.dessert.title}
                                </h3>
                                <p className="text-sm text-[var(--text-main)] opacity-70">
                                    {currentMenu.dessert.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
