import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--bg-cream)] flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="relative mb-12 w-48 h-48 flex items-center justify-center">
        <div className="absolute inset-0 bg-[var(--color-sage)]/10 rounded-full blur-3xl animate-pulse"></div>
        <h1 className="font-serif text-8xl md:text-9xl text-[var(--color-sage)] relative z-10 font-bold opacity-80">
          404
        </h1>
      </div>
      
      <h2 className="font-serif text-3xl md:text-4xl text-[var(--text-main)] mb-6">
        Wandering off the path?
      </h2>
      <p className="font-sans text-lg text-[var(--text-main)] opacity-70 max-w-md mx-auto mb-10 leading-relaxed">
        Sometimes we find ourselves in places we didn't expect. The page you're looking for has been moved or no longer exists.
      </p>
      
      <Link 
        href="/" 
        className="inline-flex items-center px-8 py-4 bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
      >
        <span className="mr-2">&larr;</span> Return Home
      </Link>
    </div>
  );
}
