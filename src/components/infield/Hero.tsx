import { motion } from "framer-motion";
import { ClipboardList, IndianRupee, MapPin, Radio, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import { PhoneFrame, Reveal } from "./ui";

const VEHICLES = [
  {
    reg: "DL-08-XY-9876",
    service: "Full Service + AC",
    bay: "Bay 2",
    status: "60%",
    color: "bg-status-blue",
    progress: 60,
  },
  {
    reg: "HR-26-AB-1234",
    service: "Brake Repair",
    bay: "Bay 4",
    status: "Waiting for Parts",
    color: "bg-status-red",
    progress: 35,
  },
  {
    reg: "UP-16-CD-5678",
    service: "Washing & Detail",
    bay: "Bay 1",
    status: "Ready ✓",
    color: "bg-status-green",
    progress: 100,
  },
];

const TRUST = [
  { icon: ClipboardList, label: "Digital Job Cards" },
  { icon: Radio, label: "Live Vehicle Status" },
  { icon: MapPin, label: "Mechanic Tracking" },
  { icon: IndianRupee, label: "Auto Salary & Incentives" },
];

export default function Hero() {
  return (
    <section id="top" className="relative bg-ink overflow-hidden">
      <div className="relative">
        <img
          src={heroImg}
          alt="Mechanic working on a car inside an automobile workshop"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover object-center brightness-110"
        />
        {/* Lighter overlay: dark on left behind text, fading to see-through on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30" />

        <div className="relative mx-auto grid max-w-7xl gap-6 px-4 pt-3 pb-8 lg:grid-cols-[1.15fr_auto] lg:items-center lg:gap-10 lg:px-8 lg:py-20">
          <div className="max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-2 text-xs font-semibold text-alert sm:text-sm">
                <span className="h-0.5 w-6 bg-alert shrink-0" />
                <span>Which car is in which bay? Who's working on it?</span>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Run Your Entire Car Service Center
                <span className="block text-status-blue">From One App.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-[18px]">
                Job cards, vehicle status, mechanics, spare parts, customer updates and salaries, all managed live on Infield7.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row">
                <a href="#contact" className="btn-base btn-brand text-center w-full sm:w-auto">
                  Book a Free Demo
                </a>
                <a href="#how-it-works" className="btn-base btn-ghost text-center w-full sm:w-auto">
                  See How It Works
                </a>
              </div>
              {/* Item 9: Slim trust line under hero buttons */}
              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-white/80">
                <CheckCircle2 className="h-3.5 w-3.5 text-status-blue shrink-0" />
                <span>Works on Android & iPhone · Setup support included · Made for Indian workshops</span>
              </div>
            </Reveal>
          </div>

          {/* 40% Larger Phone Mockup */}
          <Reveal delay={0.2} className="mt-4 flex justify-center lg:mt-0 lg:justify-end">
            <PhoneFrame className="shadow-2xl">
              <div className="bg-ink-2 px-5 pt-9 pb-4">
                <div className="flex items-center justify-between">
                  <p className="font-display text-xs tracking-[0.2em] text-white/60 uppercase">
                    Live Vehicles
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-status-green/20 px-2 py-0.5 text-[10px] font-bold text-status-green">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-status-green" /> LIVE
                  </span>
                </div>
                <p className="font-display text-2xl font-extrabold text-white uppercase mt-0.5">Today · 3 Active</p>
              </div>
              <div className="space-y-3 bg-surface p-4">
                {VEHICLES.map((v, i) => (
                  <motion.div
                    key={v.reg}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.4 }}
                    className="rounded-xl bg-white p-3.5 shadow-sm border border-black/5"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-base font-extrabold tracking-wide text-ink">{v.reg}</p>
                      <span className={`h-3 w-3 shrink-0 rounded-full ${v.color}`} />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-muted-foreground">
                      {v.service} · <span className="text-foreground font-bold">{v.bay}</span>
                    </p>
                    <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-black/10">
                      <motion.div
                        className={`h-full ${v.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${v.progress}%` }}
                        transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs font-bold text-ink">
                      <span>Status:</span>
                      <span className={v.progress === 100 ? "text-status-green" : "text-ink"}>{v.status}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </PhoneFrame>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 lg:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-white/10 bg-ink-2 lg:grid-cols-4">
          {TRUST.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-0 items-center gap-3 border-b border-white/10 p-4 last:border-b-0 odd:border-r lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <Icon className="h-6 w-6 shrink-0 text-brand" strokeWidth={1.5} />
              <span className="font-display text-xs leading-tight font-bold tracking-wider text-white uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
