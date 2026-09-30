import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Infield7 — Service Center Management App" },
      { name: "description", content: "Infield7 helps automobile workshops in India manage job cards, mechanics, parts and customer updates." },
      { property: "og:title", content: "Infield7 — Service Center Management App" },
      { property: "og:description", content: "Manage job cards, mechanics, parts and customer updates with Infield7." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
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
