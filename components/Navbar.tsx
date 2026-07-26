"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full py-4 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-[var(--color-sage)]/20">
            <div className="flex justify-between items-center w-full md:w-auto">
                <Link href="/" className="text-2xl md:text-3xl font-medium tracking-tight text-[var(--text-main)] font-serif">
                    Dr. Maya Reynolds
                </Link>
                <button
                    className="md:hidden p-2 text-[var(--text-main)] focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-6 md:gap-12 mt-6 md:mt-0 items-center text-[var(--text-main)] font-medium text-sm md:text-base tracking-wide md:absolute md:left-1/2 md:transform md:-translate-x-1/2 font-sans w-full md:w-auto pb-4 md:pb-0`}>
                <Link href="#services" className="hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>Therapy Services</Link>
                <Link href="#about" className="hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>About Dr. Maya</Link>
                <Link href="#blog" className="hover:opacity-70 transition-opacity" onClick={() => setIsOpen(false)}>Blog</Link>
            </div>

            <div className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row items-center gap-3 mb-4 md:mb-0`}>
                <ThemeToggle />
                <a 
                    href="https://simplepractice.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-sage)]/15 text-[var(--text-main)] hover:bg-[var(--color-sage)]/25 transition-colors flex items-center gap-1.5"
                >
                    <span>🔒 Portal</span>
                </a>
                <Link href="#contact" className="px-5 py-2 border border-[var(--color-sage)] rounded-full text-xs font-bold uppercase tracking-widest text-[var(--color-sage)] hover:bg-[var(--color-sage)] hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                    Book Consultation
                </Link>
            </div>
        </nav>
    );
}
