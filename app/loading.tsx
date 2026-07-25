export default function Loading() {
    return (
        <div className="fixed inset-0 bg-[var(--bg-cream)] flex items-center justify-center z-50">
            <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-[var(--color-sage)]/20 border-t-[var(--color-sage)] rounded-full animate-spin"></div>
                <p className="mt-6 font-serif text-[var(--color-sage)] tracking-widest uppercase text-sm font-bold animate-pulse">
                    Loading
                </p>
            </div>
        </div>
    );
}
