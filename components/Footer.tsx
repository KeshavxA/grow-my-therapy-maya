export default function Footer() {
    return (
        <footer className="w-full py-16 bg-[var(--bg-soft)] text-[var(--text-main)] border-t border-[var(--color-sage)]/20">
            <div className="container mx-auto px-6 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="font-serif text-3xl font-bold tracking-tight text-[var(--color-sage)] mb-4">
                            Dr. Maya Reynolds
                        </h3>
                        <p className="font-sans text-sm opacity-80 max-w-sm mb-6">
                            Helping you find clarity, healing, and purpose through compassionate, evidence-based therapy.
                        </p>
                        <div className="flex gap-6 font-sans text-xs font-bold tracking-[0.1em] uppercase text-[var(--color-charcoal)]">
                            <a href="#" className="hover:text-[var(--color-sage)] transition-colors">Instagram</a>
                            <a href="#" className="hover:text-[var(--color-sage)] transition-colors">Facebook</a>
                            <a href="#" className="hover:text-[var(--color-sage)] transition-colors">LinkedIn</a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm opacity-80">
                            <li><a href="#about" className="hover:text-[var(--color-sage)] transition-colors">About Maya</a></li>
                            <li><a href="#services" className="hover:text-[var(--color-sage)] transition-colors">Services</a></li>
                            <li><a href="#testimonials" className="hover:text-[var(--color-sage)] transition-colors">Success Stories</a></li>
                            <li><a href="#contact" className="hover:text-[var(--color-sage)] transition-colors">Book a Session</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-[var(--color-sage)] mb-4">Newsletter</h4>
                        <p className="text-xs opacity-80 mb-4">Subscribe for monthly insights on mental wellness and growth.</p>
                        <form className="flex flex-col gap-2">
                            <input type="email" placeholder="Your email address" className="px-4 py-2 bg-white border border-[var(--color-sage)]/30 rounded-md text-sm focus:outline-none focus:border-[var(--color-sage)] transition-colors w-full" />
                            <button type="button" className="px-4 py-2 bg-[var(--color-sage)] text-white text-xs font-bold uppercase tracking-widest rounded-md hover:bg-opacity-90 transition-opacity w-full">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="pt-8 border-t border-[var(--color-sage)]/20 text-center text-xs opacity-50 font-sans tracking-wide">
                    &copy; {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved. | <a href="#" className="hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
}
