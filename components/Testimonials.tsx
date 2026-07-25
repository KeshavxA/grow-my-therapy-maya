export default function Testimonials() {
    const testimonials = [
        {
            quote: "Dr. Maya created a safe space where I finally felt heard. Her approach to mindfulness changed my life.",
            author: "Sarah T.",
            role: "Marketing Director"
        },
        {
            quote: "I've struggled with anxiety for years, but the tools I learned here gave me a new sense of control and peace.",
            author: "James L.",
            role: "Software Engineer"
        },
        {
            quote: "Couples therapy with Maya helped us communicate better and rebuild trust. We are deeply grateful.",
            author: "M & D",
            role: "Married 5 Years"
        }
    ];

    return (
        <section id="testimonials" className="w-full py-24 px-6 md:px-16 bg-[var(--bg-soft)]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-main)] tracking-tight mb-4">
                        Success Stories
                    </h2>
                    <p className="font-sans text-lg text-[var(--text-main)] opacity-80 max-w-2xl mx-auto">
                        Hear from individuals who have taken the brave step towards healing and transformation.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                            <div>
                                <div className="text-[var(--color-sage)] mb-6">
                                    <svg className="w-10 h-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                                <p className="font-serif text-lg leading-relaxed text-[var(--text-main)] mb-8">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-[var(--text-main)] text-sm uppercase tracking-widest">{testimonial.author}</h4>
                                <p className="text-xs text-[var(--text-main)] opacity-60 mt-1">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
