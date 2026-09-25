import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  MessageSquare,
  ShieldAlert,
  Camera,
  Fuel,
  CheckSquare,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

import featureJobcard from "@/assets/feature-jobcard.jpg";
import featureAssignment from "@/assets/feature-reception.jpg";
import featureTracking from "@/assets/feature-tracking.jpg";
import featureRadius from "@/assets/feature-outside.jpg";
import featureParts from "@/assets/feature-parts.jpg";
import featureUpdates from "@/assets/cta-car.jpg";
import featureSalary from "@/assets/feature-bays.jpg";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

const OVERVIEW_CARDS = [
  {
    id: "feature-job-cards",
    title: "Digital Job Card & Check-In",
    tag: "01. Check-In",
    img: featureJobcard,
    isCta: false,
  },
  {
    id: "feature-assignment",
    title: "Smart Mechanic Assignment",
    tag: "02. Allocation",
    img: featureAssignment,
    isCta: false,
  },
  {
    id: "feature-location",
    title: "Mechanic Location & Idle Time",
    tag: "03. Floor Tracking",
    img: featureTracking,
    isCta: false,
  },
  {
    id: "feature-radius",
    title: "Work Area Alert",
    tag: "04. Geofence Alert",
    img: featureRadius,
    isCta: false,
  },
  {
    id: "feature-parts",
    title: "Parts Inventory & Estimates",
    tag: "05. Parts & Billing",
    img: featureParts,
    isCta: false,
  },
  {
    id: "feature-updates",
    title: "WhatsApp Updates & Delivery",
    tag: "06. Customer Sync",
    img: featureUpdates,
    isCta: false,
  },
  {
    id: "feature-salary",
    title: "Salary & Incentives Payroll",
    tag: "07. Auto Payroll",
    img: featureSalary,
    isCta: false,
  },
  {
    id: "contact",
    title: "See it live in your workshop",
    tag: "08. Live Demo",
    img: "",
    isCta: true,
  },
];

export default function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const distance = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: distance, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      {/* 1. FEATURES OVERVIEW CARDS (id="features") - 4 + 4 Layout */}
      <section id="features" className="bg-ink py-16 text-white lg:py-24 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle tone="dark">
            EVERYTHING YOUR <span className="text-brand">WORKSHOP NEEDS</span>
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base text-white/70">
            7 powerful tools designed specifically for Indian multi-brand car & bike service centers.
          </p>

          {/* Mobile Scroll Controls */}
          <div className="mt-8 flex items-center justify-between lg:hidden">
            <span className="text-xs font-semibold text-brand tracking-widest uppercase">
              Swipe to explore features →
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/20 bg-ink-2 text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/20 bg-ink-2 text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* 4 + 4 Feature Cards Grid */}
          <div
            ref={scrollRef}
            className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 no-scrollbar lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible"
          >
            {OVERVIEW_CARDS.map((card) =>
              card.isCta ? (
                /* 8th CTA Card: Blue background */
                <a
                  key={card.id}
                  href="#contact"
                  className="group relative min-w-[260px] flex-1 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/20 bg-[#2D5BE3] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl lg:min-w-0 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 font-display text-[11px] font-bold text-white uppercase">
                      {card.tag}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-extrabold text-white leading-tight">
                      See it live in your workshop
                    </h3>
                    <p className="mt-2 text-xs text-white/80">
                      Transform your daily operations in a 15-minute live demo.
                    </p>
                  </div>
                  <div className="mt-6 inline-flex items-center justify-between rounded-xl bg-white px-4 py-2.5 text-xs font-extrabold text-[#2D5BE3] uppercase tracking-wider shadow">
                    <span>Book a Free Demo</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              ) : (
                /* Regular Feature Card */
                <a
                  key={card.id}
                  href={`#${card.id}`}
                  className="group relative min-w-[260px] flex-1 shrink-0 snap-start overflow-hidden rounded-2xl border border-white/15 bg-ink-2 transition-all duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl lg:min-w-0"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover brightness-110 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
                    <span className="absolute top-3 left-3 rounded-full bg-brand/90 px-2.5 py-0.5 font-display text-[11px] font-bold text-black uppercase">
                      {card.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-bold leading-snug text-white group-hover:text-brand transition-colors">
                      {card.title}
                    </h3>
                    <div className="mt-3 flex items-center justify-between text-xs font-semibold text-brand">
                      <span>See how it works →</span>
                    </div>
                  </div>
                </a>
              )
            )}
          </div>
        </div>
      </section>

      {/* 2. THE 7 DETAILED FEATURE BLOCKS */}
      <div>
        {/* BLOCK 1: Digital Job Card & Check-In (bg-white) */}
        <section id="feature-job-cards" className="py-16 lg:py-24 bg-white border-b border-black/5">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <Eyebrow>01. DIGITAL CHECK-IN</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Create Job Cards in 60 Seconds.{" "}
                  <span className="block text-status-blue">No Paper. No Errors.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Capture vehicle details, customer requests, photos of existing scratches, and fuel level directly on mobile.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "360° vehicle scratch & damage photo logging",
                    "Instant customer signature on mobile screen",
                    "Instant PDF job card sent directly on WhatsApp",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-status-blue" />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-status-blue hover:underline">
                  Book a Free Demo →
                </a>
              </div>

              {/* Mockup */}
              <div className="lg:col-span-6 rounded-2xl border border-black/10 bg-surface p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <div>
                    <span className="font-display text-xs font-bold text-status-blue uppercase tracking-wider">JOB CARD #JC-9842</span>
                    <h4 className="font-display text-2xl font-extrabold text-ink">DL-08-XY-9876</h4>
                  </div>
                  <span className="rounded-full bg-status-green/20 px-3 py-1 text-xs font-extrabold text-status-green">Active Bay 2</span>
                </div>
                <div className="mt-4 text-sm space-y-2 text-ink">
                  <p><span className="font-bold">Customer:</span> Rohan Sharma (+91 98112 34567)</p>
                  <p><span className="font-bold">Model:</span> Hyundai Creta 1.5 SX (White)</p>
                </div>

                <div className="mt-4 rounded-xl bg-white p-3.5 border border-black/5 shadow-xs">
                  <div className="flex items-center gap-2 text-xs font-bold text-ink mb-2">
                    <Camera className="h-4 w-4 text-status-blue" /> Scratch & Damage Photos Logged (4)
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="h-16 rounded-lg bg-ink/10 flex items-center justify-center text-xs font-bold text-ink/70">Front Bumper</div>
                    <div className="h-16 rounded-lg bg-ink/10 flex items-center justify-center text-xs font-bold text-ink/70">Left Door</div>
                    <div className="h-16 rounded-lg bg-ink/10 flex items-center justify-center text-xs font-bold text-ink/70">Rear Fender</div>
                    <div className="h-16 rounded-lg bg-ink/10 flex items-center justify-center text-xs font-bold text-ink/70">Bonnet Chip</div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between rounded-xl bg-status-blue/10 p-3.5 text-xs font-semibold">
                  <span className="flex items-center gap-2 text-ink text-xs sm:text-sm">
                    <Fuel className="h-4 w-4 text-status-blue" /> Fuel Level:
                  </span>
                  <span className="font-bold text-status-blue text-xs sm:text-sm">65% (3/4 Tank)</span>
                </div>

                <div className="mt-3 space-y-2 text-xs font-semibold">
                  <div className="flex items-center justify-between text-status-green bg-white p-2.5 rounded-lg border border-black/5">
                    <span>Engine Oil Check</span>
                    <CheckSquare className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between text-status-green bg-white p-2.5 rounded-lg border border-black/5">
                    <span>Brake Pad Thickness: 6mm</span>
                    <CheckSquare className="h-4 w-4" />
                  </div>
                  <div className="flex items-center justify-between text-status-green bg-white p-2.5 rounded-lg border border-black/5">
                    <span>AC Cooling Temp: 12°C</span>
                    <CheckSquare className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 2: Smart Mechanic Assignment (bg-[#F4F5F7]) */}
        <section id="feature-assignment" className="py-16 lg:py-24 bg-[#F4F5F7] border-b border-black/5">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 lg:order-2">
                <Eyebrow>02. WORKLOAD OPTIMIZATION</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Right Job to the Right Mechanic.{" "}
                  <span className="block text-status-blue">Automatically.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Infield7 matches vehicle issues with mechanic skill sets and current bay capacity in real time.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Skill-based auto matching for specialized repairs",
                    "Live workload balance to eliminate idle floor time",
                    "Mechanic performance analytics & job completion speeds",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-status-blue" />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-status-blue hover:underline">
                  Book a Free Demo →
                </a>
              </div>

              {/* Item 2: Mechanic Roster Mockup with Amit Verma highlighted as Best Match */}
              <div className="lg:col-span-6 lg:order-1 rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <h4 className="font-display text-xl font-bold text-ink">Smart Mechanic Roster</h4>
                  <span className="text-xs font-extrabold text-status-green bg-status-green/10 px-2.5 py-1 rounded-full">2 Available</span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-black/10 bg-surface p-4 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-base text-ink">Suresh Kumar</p>
                        <span className="inline-block mt-1 rounded bg-brand/20 px-2.5 py-0.5 text-xs font-extrabold text-ink uppercase">Engine & Transmission</span>
                      </div>
                      <span className="rounded-full bg-status-blue/15 px-3 py-1 text-xs font-bold text-status-blue">Busy · Bay 2</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground font-semibold">
                      <span>Workload Capacity:</span>
                      <span className="font-bold text-ink">85%</span>
                    </div>
                  </div>

                  {/* Amit Verma = HIGHLIGHTED BEST MATCH */}
                  <div className="rounded-xl border-2 border-status-blue bg-status-blue/5 p-4 shadow-md relative">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-base text-ink">Amit Verma</p>
                          <span className="inline-flex items-center gap-1 rounded-full bg-status-blue text-white px-2 py-0.5 text-[10px] font-extrabold uppercase">
                            <Sparkles className="h-3 w-3" /> Best match: AC + Electrical
                          </span>
                        </div>
                        <span className="inline-block mt-1.5 rounded bg-status-green/20 px-2.5 py-0.5 text-xs font-extrabold text-status-green uppercase">Electrical & ECU</span>
                      </div>
                      <span className="rounded-full bg-status-green/15 px-3 py-1 text-xs font-bold text-status-green">Available</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs font-semibold">
                      <span className="text-muted-foreground">Workload Capacity:</span>
                      <span className="font-bold text-status-blue">20% (Optimal)</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-black/10 bg-surface p-4 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-base text-ink">Vikram Singh</p>
                        <span className="inline-block mt-1 rounded bg-status-amber/20 px-2.5 py-0.5 text-xs font-extrabold text-ink uppercase">Suspension & Brakes</span>
                      </div>
                      <span className="rounded-full bg-status-green/15 px-3 py-1 text-xs font-bold text-status-green">Available</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground font-semibold">
                      <span>Workload Capacity:</span>
                      <span className="font-bold text-ink">40%</span>
                    </div>
                  </div>
                </div>

                <button type="button" className="mt-5 w-full rounded-xl bg-[#2D5BE3] py-3 text-xs font-bold text-white uppercase tracking-wider hover:bg-blue-700 transition-colors shadow">
                  ASSIGN DL-08-XY-9876 TO AMIT →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 3: Mechanic Location & Idle Time (bg-white) */}
        <section id="feature-location" className="py-16 lg:py-24 bg-white border-b border-black/5">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <Eyebrow>03. FLOOR TRACKING</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Know Who's Working and Who's Idle.{" "}
                  <span className="block text-status-blue">Without Leaving Your Desk.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Track mechanic active floor time, bay presence, and break duration with live status indicators.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Live floor zone & bay location indicators",
                    "Idle time detection & break duration alerts",
                    "Daily mechanic active hours vs break hours report",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-status-blue" />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-status-blue hover:underline">
                  Book a Free Demo →
                </a>
              </div>

              {/* Mockup */}
              <div className="lg:col-span-6 rounded-2xl border border-black/10 bg-surface p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <h4 className="font-display text-xl font-bold text-ink">Live Floor & Zone Status</h4>
                  <span className="flex items-center gap-1.5 text-xs font-bold text-status-green bg-white px-2.5 py-1 rounded-full border border-black/5">
                    <span className="h-2 w-2 rounded-full bg-status-green animate-pulse" /> Live Tracking
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white p-3.5 text-xs sm:text-sm">
                    <div>
                      <p className="font-bold text-ink">Bay 1 (AC Repair)</p>
                      <p className="text-muted-foreground mt-0.5">Active: Anil K.</p>
                    </div>
                    <span className="rounded-lg bg-status-green/20 px-3 py-1.5 font-bold text-status-green">Idle: 2 mins</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white p-3.5 text-xs sm:text-sm">
                    <div>
                      <p className="font-bold text-ink">Bay 2 (Engine)</p>
                      <p className="text-muted-foreground mt-0.5">Active: Suresh K.</p>
                    </div>
                    <span className="rounded-lg bg-status-green/20 px-3 py-1.5 font-bold text-status-green">Idle: 0 mins</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-alert/30 bg-alert/10 p-3.5 text-xs sm:text-sm">
                    <div>
                      <p className="font-bold text-alert">Bay 3 (Washing)</p>
                      <p className="text-muted-foreground mt-0.5">Active: Ramesh M.</p>
                    </div>
                    <span className="rounded-lg bg-alert/20 px-3 py-1.5 font-bold text-alert">Idle: 15 mins ⚠️</span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-black/5 bg-white p-3.5 text-xs sm:text-sm">
                    <div>
                      <p className="font-bold text-ink">Spare Parts Counter</p>
                      <p className="text-muted-foreground mt-0.5">Active: Deepak S.</p>
                    </div>
                    <span className="rounded-lg bg-status-amber/20 px-3 py-1.5 font-bold text-ink">Idle: 5 mins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 4: Work Area Alert (Item 3 - bg-ink text-white) */}
        <section id="feature-radius" className="py-16 lg:py-24 bg-ink text-white border-b border-white/10">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 lg:order-2">
                <Eyebrow tone="alert">04. WORK AREA ALERT</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Know When a Mechanic Leaves the Workshop.{" "}
                  <span className="block text-alert">Get Alerted After 30 Minutes.</span>
                </h2>
                <p className="mt-4 text-base text-white/75 leading-relaxed">
                  If a mechanic stays outside the workshop radius for more than 30 minutes, you get an instant alert.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Set your own workshop radius",
                    "Alert only after 30 minutes outside",
                    "Tracking only during work hours",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-status-blue" />
                      <span className="text-sm font-semibold text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline">
                  Book a Free Demo →
                </a>
              </div>

              {/* Item 3 Mockup: SVG Radius Map + Timer Chips + Alert Card */}
              <div className="lg:col-span-6 lg:order-1 rounded-2xl border border-alert/40 bg-ink-2 p-6 shadow-2xl">
                <div className="flex items-center gap-3 rounded-xl bg-alert/20 border border-alert/40 p-4 text-alert">
                  <ShieldAlert className="h-7 w-7 shrink-0 animate-pulse" />
                  <div>
                    <h4 className="font-bold text-sm tracking-wide">⚠️ Ramesh M. is outside the work area for 35 mins</h4>
                    <p className="text-xs text-white/80 mt-0.5">Exceeded 30-minute workshop radius threshold</p>
                  </div>
                </div>

                {/* Timer Chips sequence */}
                <div className="mt-4 flex items-center justify-between gap-2 bg-black/40 p-3 rounded-xl border border-white/10 text-xs font-bold">
                  <span className="text-white/50">Outside Timer:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="rounded bg-white/10 px-2 py-0.5 text-white/60">05 min</span>
                    <span className="text-white/40">→</span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-white/60">15 min</span>
                    <span className="text-white/40">→</span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-white/60">30 min</span>
                    <span className="text-white/40">→</span>
                    <span className="rounded bg-alert text-white px-2.5 py-0.5 font-extrabold animate-pulse">35 min</span>
                  </div>
                </div>

                {/* SVG Radius Map with Workshop Pin (inside) and Mechanic Pin (outside radius circle) */}
                <div className="mt-4 relative h-48 overflow-hidden rounded-xl border border-white/15 bg-black/80 flex items-center justify-center p-2">
                  <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Blue Radius Boundary Circle */}
                    <circle cx="160" cy="100" r="65" fill="rgba(45,91,227,0.15)" stroke="#2D5BE3" strokeWidth="2" strokeDasharray="4 4"/>
                  </svg>

                  {/* Workshop Center Pin */}
                  <div className="absolute left-[135px] top-[75px] flex flex-col items-center">
                    <div className="rounded-full bg-status-blue p-2 text-white shadow-lg">
                      <span className="block h-3 w-3 rounded-full bg-white" />
                    </div>
                    <span className="mt-1 rounded bg-black/80 px-2 py-0.5 text-[10px] font-bold text-white border border-white/20">Workshop HQ</span>
                  </div>

                  {/* Mechanic Pin Outside Radius */}
                  <div className="absolute right-[50px] top-[45px] flex flex-col items-center animate-bounce">
                    <div className="rounded-full bg-alert p-2 text-white shadow-lg">
                      <ShieldAlert className="h-4 w-4" />
                    </div>
                    <span className="mt-1 rounded bg-alert px-2 py-0.5 text-[10px] font-extrabold text-white">Ramesh M. (3.8 km)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 5: Parts Inventory & Cost Estimate (Item 6 - bg-[#F4F5F7]) */}
        <section id="feature-parts" className="py-16 lg:py-24 bg-[#F4F5F7] border-b border-black/5">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <Eyebrow>05. TRANSPARENT BILLING</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Smart Parts Stock & Instant Cost Estimates.{" "}
                  <span className="block text-status-blue">Zero Billing Disputes.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Auto-deduct spare parts from inventory as job cards update, and share instant itemized estimates.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Real-time spare parts stock sync & low-stock alerts",
                    "Itemized cost breakdown (Parts + Labor + GST)",
                    "One-tap customer digital approval before work starts",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-status-blue" />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-status-blue hover:underline">
                  Book a Free Demo →
                </a>
              </div>

              {/* Item 6 Mockup: Low stock alert card + exact pricing table */}
              <div className="lg:col-span-6 rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
                {/* Red Low Stock Alert Card Above Table */}
                <div className="flex items-center gap-2.5 rounded-xl bg-alert/10 border border-alert/30 p-3 text-alert text-xs font-bold mb-4">
                  <ShieldAlert className="h-5 w-5 shrink-0" />
                  <span>⚠️ Low stock: Engine Oil 5W-30 – only 3 units left</span>
                </div>

                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <h4 className="font-display text-xl font-bold text-ink">Parts & Service Estimate</h4>
                  <span className="font-mono text-xs font-bold text-status-blue bg-status-blue/10 px-2.5 py-1 rounded-full">EST-#9842</span>
                </div>

                {/* Table with NO stock column */}
                <div className="mt-4 overflow-hidden rounded-xl border border-black/10 bg-white">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-surface border-b border-black/10 font-bold text-ink">
                      <tr>
                        <th className="p-3">Item Description</th>
                        <th className="p-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-black/5 text-ink font-medium">
                      <tr>
                        <td className="p-3">Labour Charge</td>
                        <td className="p-3 text-right font-bold">₹2,500</td>
                      </tr>
                      <tr>
                        <td className="p-3">Engine Oil 5W-30</td>
                        <td className="p-3 text-right font-bold">₹1,200</td>
                      </tr>
                      <tr>
                        <td className="p-3">Air Filter</td>
                        <td className="p-3 text-right font-bold">₹450</td>
                      </tr>
                      <tr>
                        <td className="p-3">Brake Pads</td>
                        <td className="p-3 text-right font-bold">₹1,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Exact Totals */}
                <div className="mt-4 rounded-xl bg-ink p-4 text-white space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between text-white/70">
                    <span>Subtotal:</span>
                    <span className="font-bold text-white">₹5,950</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>GST (18%):</span>
                    <span className="font-bold text-white">₹1,071</span>
                  </div>
                  <div className="flex justify-between border-t border-white/15 pt-2 text-base font-bold text-brand">
                    <span>Grand Total:</span>
                    <span>₹7,021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 6: Customer WhatsApp Updates & Delivery (Item 5 - bg-white) */}
        <section id="feature-updates" className="py-16 lg:py-24 bg-white border-b border-black/5">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6 lg:order-2">
                <Eyebrow>06. AUTOMATED COMMUNICATION</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Keep Customers Informed Automatically.{" "}
                  <span className="block text-status-blue">End "When is my car ready?" Calls.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Send automatic WhatsApp messages with photo/video updates as the vehicle moves through each stage.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Automated WhatsApp updates at Vehicle Check-in, Repair, & Ready",
                    "Direct photo & video attachment links for transparency",
                    "Instant online payment link & digital invoice PDF",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-status-blue" />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-status-blue hover:underline">
                  Book a Free Demo →
                </a>
              </div>

              {/* Mockup with consistent vehicle DL-08-XY-9876 + Expected Delivery */}
              <div className="lg:col-span-6 lg:order-1 rounded-2xl border border-whatsapp/30 bg-whatsapp/5 p-6 shadow-xl">
                <div className="flex items-center gap-3 rounded-xl bg-whatsapp p-4 text-white">
                  <MessageSquare className="h-6 w-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">WhatsApp Live Notification Preview</h4>
                    <p className="text-xs opacity-90">Automated update sent to Rohan Sharma</p>
                  </div>
                </div>

                <div className="mt-4 rounded-2xl bg-white p-5 shadow-md border border-black/5 space-y-3 text-xs sm:text-sm text-ink">
                  <div className="flex items-center justify-between border-b border-black/5 pb-2 text-xs font-bold text-whatsapp">
                    <span>Infield7 Workshop Assistant</span>
                    <span>11:42 AM</span>
                  </div>
                  <p className="leading-relaxed">
                    Dear Rohan, your <span className="font-bold">Hyundai Creta (DL-08-XY-9876)</span> assigned to <span className="font-bold">Mechanic Suresh</span> is progressing smoothly! 🚗
                  </p>
                  <p className="text-muted-foreground">
                    Current Status: <span className="font-bold text-status-blue">80% (Washing & Final Inspection)</span>.
                  </p>
                  <p className="font-bold text-ink">
                    Expected Delivery: <span className="text-status-green font-extrabold">5:30 PM Today</span>
                  </p>
                  <div className="mt-3 rounded-xl bg-surface p-3 border border-black/5 flex items-center justify-between cursor-pointer hover:bg-black/5 transition-colors">
                    <span className="text-status-blue font-bold text-xs sm:text-sm">View Live Photos & PDF Invoice</span>
                    <ChevronRight className="h-4 w-4 text-status-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOCK 7: Salary & Incentives (bg-[#F4F5F7]) */}
        <section id="feature-salary" className="py-16 lg:py-24 bg-[#F4F5F7] border-b border-black/5">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <Eyebrow>07. PAYROLL AUTOMATION</Eyebrow>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                  Fair Mechanic Pay & Incentive Calculations.{" "}
                  <span className="block text-status-blue">Calculated in 1 Click.</span>
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  Eliminate manual attendance logs and end-of-month salary disputes with automated job-based incentives.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Job-based incentive calculation per completed vehicle",
                    "Overtime & efficiency bonus tracking",
                    "1-Click monthly salary slip generation with WhatsApp sharing",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-status-blue" />
                      <span className="text-sm font-semibold text-ink">{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-status-blue hover:underline">
                  Book a Free Demo →
                </a>
              </div>

              {/* Mockup */}
              <div className="lg:col-span-6 rounded-2xl border border-black/10 bg-white p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <div>
                    <h4 className="font-display text-xl font-bold text-ink">Suresh Kumar</h4>
                    <span className="text-xs text-muted-foreground font-semibold">Senior Technician · Sept 2026 Payroll</span>
                  </div>
                  <span className="rounded-full bg-status-green/20 px-3 py-1 text-xs font-bold text-status-green">Approved</span>
                </div>

                <div className="mt-4 space-y-3 text-xs sm:text-sm text-ink">
                  <div className="flex justify-between rounded-xl bg-surface p-3.5 border border-black/5">
                    <span>Base Monthly Salary:</span>
                    <span className="font-bold">₹22,000</span>
                  </div>
                  <div className="flex justify-between rounded-xl bg-surface p-3.5 border border-black/5">
                    <span>Completed Jobs (38 Vehicles):</span>
                    <span className="font-bold text-status-blue">+ ₹5,700</span>
                  </div>
                  <div className="flex justify-between rounded-xl bg-surface p-3.5 border border-black/5">
                    <span>Efficiency & Rating Bonus:</span>
                    <span className="font-bold text-status-green">+ ₹1,500</span>
                  </div>
                  <div className="flex justify-between rounded-xl bg-ink p-4 text-white text-base font-bold mt-4 shadow-sm">
                    <span>Net Monthly Payout:</span>
                    <span className="text-brand">₹29,200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Item 8: SLIM BLUE CTA BANNER AFTER LAST FEATURE BLOCK (#2D5BE3) */}
        <div className="bg-[#2D5BE3] py-8 px-4 text-white text-center shadow-lg">
          <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <h3 className="font-display text-[22px] sm:text-[28px] font-bold uppercase tracking-wide text-white">
              See Infield7 running in your workshop.
            </h3>
            <a
              href="#contact"
              className="btn-base bg-white text-[#2D5BE3] hover:bg-white/90 font-extrabold px-6 py-3.5 text-xs tracking-widest uppercase shrink-0 shadow-md"
            >
              BOOK A FREE DEMO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
