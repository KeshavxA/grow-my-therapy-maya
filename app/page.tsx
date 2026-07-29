import Navbar from "@/components/Navbar";
import CrisisBanner from "@/components/CrisisBanner";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import MoodCheckIn from "@/components/MoodCheckIn";
import BreathingWidget from "@/components/BreathingWidget";
import Office from "@/components/Office";
import TelehealthAssessment from "@/components/TelehealthAssessment";
import ServicesGrid from "@/components/ServicesGrid";
import Approach from "@/components/Approach";
import JourneyTimeline from "@/components/JourneyTimeline";
import ReadinessQuiz from "@/components/ReadinessQuiz";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import PMRWidget from "@/components/PMRWidget";
import ResourcesGrid from "@/components/ResourcesGrid";
import FeeEstimator from "@/components/FeeEstimator";
import FAQ from "@/components/FAQ";
import SessionPrepChecklist from "@/components/SessionPrepChecklist";
import SelfCareMenu from "@/components/SelfCareMenu";
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
      <ScrollReveal><TelehealthAssessment /></ScrollReveal>
      <ScrollReveal><Approach /></ScrollReveal>
      <ScrollReveal><JourneyTimeline /></ScrollReveal>
      <ScrollReveal><ReadinessQuiz /></ScrollReveal>
      <ScrollReveal><About /></ScrollReveal>
      <ScrollReveal><Testimonials /></ScrollReveal>
      <ScrollReveal><BlogPreview /></ScrollReveal>
      <ScrollReveal>
        <section className="w-full py-12 px-6 md:px-16 bg-[var(--bg-cream)]">
          <div className="container mx-auto max-w-3xl">
            <PMRWidget />
          </div>
        </section>
      </ScrollReveal>
      <ScrollReveal><ResourcesGrid /></ScrollReveal>
      <ScrollReveal><FeeEstimator /></ScrollReveal>
      <ScrollReveal><FAQ /></ScrollReveal>
      <ScrollReveal><SessionPrepChecklist /></ScrollReveal>
      <ScrollReveal><SelfCareMenu /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
    </main>
  );
}
