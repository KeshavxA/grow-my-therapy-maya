import Navbar from "@/components/Navbar";
import CrisisBanner from "@/components/CrisisBanner";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import BreathingWidget from "@/components/BreathingWidget";
import Office from "@/components/Office";
import ServicesGrid from "@/components/ServicesGrid";
import Approach from "@/components/Approach";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-cream)]">
      <CrisisBanner />
      <Navbar />
      <ScrollReveal><Hero /></ScrollReveal>
      <ScrollReveal><Intro /></ScrollReveal>
      <ScrollReveal><BreathingWidget /></ScrollReveal>
      <ScrollReveal><ServicesGrid /></ScrollReveal>
      <ScrollReveal><Office /></ScrollReveal>
      <ScrollReveal><Approach /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><BlogPreview /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
    </main>
  );
}
