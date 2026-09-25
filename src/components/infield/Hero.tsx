import { motion } from "framer-motion";
import { ClipboardList, IndianRupee, MapPin, Radio } from "lucide-react";
import heroImg from "@/assets/hero-workshop.jpg";
import { PhoneFrame, Reveal } from "./ui";

const VEHICLES = [
  {
    reg: "DL-08-XY-9876",
    service: "Full Service",
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
    service: "AC Repair",
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
    <section id="top" className="relative bg-ink">
      <div className="relative overflow-hidden">
        <img
          src={heroImg}
          alt="Mechanic working on a car on a lift inside an automobile workshop"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.1fr_auto] lg:items-center lg:gap-8 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-brand">InField — Service Center Management App</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-[clamp(2rem,7vw,3.9rem)] leading-[1.03] font-bold text-white uppercase">
                Which Car Is in Which Bay? Who's Working on It?
                <span className="mt-2 block text-brand">
                  Stop Running Your Workshop on Guesswork.
                </span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Dozens of vehicles, mechanics and customers every day, managed with paper job cards
                and phone calls. InField puts your entire service center on one app.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className="btn-base btn-brand w-full sm:w-auto">
                  Book a Free Demo
                </a>
                <a href="#how-it-works" className="btn-base btn-ghost w-full sm:w-auto">
                  See How It Works
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex justify-center lg:justify-end">
            <PhoneFrame>
              <div className="bg-ink-2 px-4 pt-8 pb-4">
                <p className="font-display text-xs tracking-[0.2em] text-white/50 uppercase">
                  Live Vehicles
                </p>
                <p className="font-display text-xl font-bold text-white uppercase">Today · 3 Active</p>
              </div>
              <div className="space-y-3 bg-surface p-3">
                {VEHICLES.map((v, i) => (
                  <motion.div
                    key={v.reg}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.18, duration: 0.5 }}
                    className="rounded-lg bg-white p-3 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-base font-bold tracking-wide">{v.reg}</p>
                      <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${v.color}`} />
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {v.service} · {v.bay}
                    </p>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/10">
                      <motion.div
                        className={`h-full ${v.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${v.progress}%` }}
                        transition={{ delay: 0.9 + i * 0.18, duration: 0.9 }}
                      />
                    </div>
                    <p className="mt-1.5 text-[11px] font-semibold">{v.status}</p>
                  </motion.div>
                ))}
              </div>
            </PhoneFrame>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 lg:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-lg border border-white/10 bg-ink-2 lg:grid-cols-4">
          {TRUST.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex min-w-0 items-center gap-3 border-b border-white/10 p-4 last:border-b-0 odd:border-r lg:border-r lg:border-b-0 lg:last:border-r-0"
            >
              <Icon className="h-6 w-6 shrink-0 text-brand" strokeWidth={1.5} />
              <span className="font-display text-xs leading-tight font-semibold tracking-widest text-white uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
