import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Navbar from "@/components/infield/Navbar";
import Hero from "@/components/infield/Hero";
import Problem from "@/components/infield/Problem";
import WhatIf from "@/components/infield/WhatIf";
import Solution from "@/components/infield/Solution";
import Features from "@/components/infield/Features";
import WhyChoose from "@/components/infield/WhyChoose";
import FAQ from "@/components/infield/FAQ";
import Contact from "@/components/infield/Contact";
import Footer from "@/components/infield/Footer";
import Floating from "@/components/infield/Floating";
import OnboardingQuestionnaire from "@/components/infield/OnboardingQuestionnaire";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  if (showOnboarding) {
    return <OnboardingQuestionnaire onComplete={() => setShowOnboarding(false)} />;
  }

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Problem />
        <WhatIf />
        <Solution />
        <Features />
        <WhyChoose />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Floating />
    </>
  );
}
