import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SearchSection } from "@/components/landing/SearchSection";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { Examples } from "@/components/landing/Examples";
import { Pricing } from "@/components/landing/Pricing";
import { ForInfluencers } from "@/components/landing/ForInfluencers";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <SearchSection />
        <HowItWorks />
        <Benefits />
        <Examples />
        <Pricing />
        <ForInfluencers />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
