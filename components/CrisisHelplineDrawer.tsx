"use client";

import { useState } from "react";

interface Helpline {
    id: string;
    name: string;
    description: string;
    number: string;
    sms?: string;
}

export default function CrisisHelplineDrawer({ 
    isOpen, 
    onClose 
}: { 
    isOpen: boolean; 
    onClose: () => void 
}) {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const helplines: Helpline[] = [
        {
            id: "suicide",
            name: "988 Suicide & Crisis Lifeline",
            description: "24/7, free and confidential support for people in distress, prevention and crisis resources.",
            number: "988",
            sms: "Text 988"
        },
        {
            id: "trevor",
            name: "The Trevor Project",
            description: "Crisis intervention and suicide prevention services to LGBTQ young people.",
            number: "1-866-488-7386",
            sms: "Text START to 678-678"
        },
        {
            id: "veterans",
            name: "Veterans Crisis Line",
            description: "Connect with the Veterans Crisis Line to reach caring, qualified responders.",
            number: "988 (Press 1)",
            sms: "Text 838255"
        },
        {
            id: "domestic",
            name: "National Domestic Violence Hotline",
            description: "Essential tools and support to help survivors of domestic violence.",
            number: "1-800-799-7233",
            sms: "Text START to 88788"
        }
    ];

    const copyToClipboard = (id: string, textToCopy: string) => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300">
            <div 
                className="bg-white dark:bg-[#121212] w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-slideUp sm:animate-fadeIn"
                role="dialog"
                aria-modal="true"
                aria-labelledby="drawer-title"
            >
                {/* Header */}
                <div className="p-6 pb-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-red-50 dark:bg-red-950/20">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <div>
                            <h2 id="drawer-title" className="font-serif text-xl font-bold text-gray-900 dark:text-white">
                                Immediate Support
                            </h2>
                            <p className="text-xs text-red-600 dark:text-red-400 font-medium">You don't have to face this alone.</p>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-2"
                        aria-label="Close dialog"
                    >
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto space-y-4">
                    <p className="text-sm font-sans text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                        If you or someone you know is experiencing a mental health crisis, please reach out to one of the free, confidential 24/7 resources below immediately.
                    </p>

                    {helplines.map((helpline) => (
                        <div key={helpline.id} className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black/20 hover:border-red-200 dark:hover:border-red-900/50 transition-colors">
                            <h3 className="font-bold text-gray-900 dark:text-white text-base mb-1">
                                {helpline.name}
                            </h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                                {helpline.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                <button 
                                    onClick={() => copyToClipboard(helpline.id + '-call', helpline.number.split(' ')[0])}
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {helpline.number}
                                    {copiedId === (helpline.id + '-call') && <span className="text-green-600 dark:text-green-400 ml-1">Copied!</span>}
                                </button>
                                
                                {helpline.sms && (
                                    <button 
                                        onClick={() => copyToClipboard(helpline.id + '-sms', helpline.sms?.split(' ')[1] || '')}
                                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                        </svg>
                                        {helpline.sms}
                                        {copiedId === (helpline.id + '-sms') && <span className="text-green-600 dark:text-green-400 ml-1">Copied!</span>}
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
