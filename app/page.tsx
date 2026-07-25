import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Office from "@/components/Office";
import ServicesGrid from "@/components/ServicesGrid";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-cream)]">
      <Navbar />
      <Hero />
      <Intro />
      <ServicesGrid />
      <Office />
      <Approach />
      <About />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
