import Navbar from "@/components/Navbar";
import CrisisBanner from "@/components/CrisisBanner";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MoodCheckIn from "@/components/MoodCheckIn";
import BreathingWidget from "@/components/BreathingWidget";
import Office from "@/components/Office";
import ServicesGrid from "@/components/ServicesGrid";
import Approach from "@/components/Approach";
import ReadinessQuiz from "@/components/ReadinessQuiz";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import ResourcesGrid from "@/components/ResourcesGrid";
import FeeEstimator from "@/components/FeeEstimator";
import FAQ from "@/components/FAQ";
import SessionPrepChecklist from "@/components/SessionPrepChecklist";
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
      <ScrollReveal><MoodCheckIn /></ScrollReveal>
      <ScrollReveal><BreathingWidget /></ScrollReveal>
      <ScrollReveal><ServicesGrid /></ScrollReveal>
      <ScrollReveal><Office /></ScrollReveal>
      <ScrollReveal><Approach /></ScrollReveal>
      <ScrollReveal><ReadinessQuiz /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><BlogPreview /></ScrollReveal>
      <ScrollReveal><ResourcesGrid /></ScrollReveal>
      <ScrollReveal><FeeEstimator /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><SessionPrepChecklist /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
    </main>
  );
}
