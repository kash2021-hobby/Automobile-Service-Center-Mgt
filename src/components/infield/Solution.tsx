import { motion } from "framer-motion";
import { BadgeCheck, CarFront, GaugeCircle, MessageSquare, UserCog } from "lucide-react";
import { Eyebrow, PhoneFrame, Reveal, SectionTitle } from "./ui";

const BAYS = [
  { bay: "Bay 1", reg: "UP-16-CD-5678", mech: "AK", progress: 100, color: "bg-status-green" },
  { bay: "Bay 2", reg: "DL-08-XY-9876", mech: "SU", progress: 72, color: "bg-status-blue" },
  { bay: "Bay 3", reg: "MH-12-PQ-4411", mech: "RM", progress: 45, color: "bg-status-amber" },
  { bay: "Bay 4", reg: "HR-26-AB-1234", mech: "VJ", progress: 30, color: "bg-status-red" },
  { bay: "Bay 5", reg: "KA-05-LM-2290", mech: "DN", progress: 88, color: "bg-status-blue" },
  { bay: "Bay 6", reg: "Empty", mech: "—", progress: 0, color: "bg-status-grey" },
];

const LEGEND = [
  ["bg-status-green", "Available mechanic"],
  ["bg-status-amber", "Busy"],
  ["bg-status-blue", "Inspection"],
  ["bg-status-red", "Waiting for parts"],
];

const FLOATING = [
  { label: "Vehicle", value: "DL-08-XY-9876" },
  { label: "Service", value: "Full Service + AC" },
  { label: "Mechanic", value: "Suresh (Engine Specialist)" },
  { label: "Progress", value: "72%" },
];

const STEPS = [
  { icon: CarFront, title: "Vehicle Arrives", text: "Digital job card with photos and estimate." },
  { icon: UserCog, title: "Auto-Assigned", text: "The job goes to the best available mechanic." },
  { icon: GaugeCircle, title: "Live Tracking", text: "See progress, time and mechanic location." },
  { icon: MessageSquare, title: "Customer Updated", text: "WhatsApp updates at every stage." },
  {
    icon: BadgeCheck,
    title: "Delivered & Billed",
    text: "Final bill, feedback and next service reminder.",
  },
];

export default function Solution() {
  return (
    <section id="how-it-works" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>The Solution</Eyebrow>
          <h2 className="mt-3 text-[clamp(1.75rem,5.5vw,3rem)] leading-tight font-bold uppercase">
            Meet InField. Your Entire Service Center
            <span className="block text-brand">In One App.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            Vehicle tracking, mechanic assignment, job cards and customer updates, all managed
            digitally and in real time.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          <div className="order-2 space-y-3 lg:order-1">
            {FLOATING.slice(0, 2).map((f, i) => (
              <Reveal key={f.label} delay={i * 0.12}>
                <div className="rounded-lg border border-black/5 bg-surface p-4 shadow-sm lg:ml-auto lg:max-w-xs">
                  <p className="eyebrow text-muted-foreground">{f.label}</p>
                  <p className="font-display text-xl font-bold">{f.value}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="order-1 flex justify-center lg:order-2">
            <PhoneFrame>
              <div className="bg-ink-2 px-4 pt-8 pb-3">
                <p className="font-display text-xs tracking-[0.2em] text-white/50 uppercase">
                  Service Floor
                </p>
                <p className="font-display text-lg font-bold text-white uppercase">Live View</p>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-surface p-3">
                {BAYS.map((b, i) => (
                  <motion.div
                    key={b.bay}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="rounded-md bg-white p-2 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-[11px] font-bold tracking-wide uppercase">
                        {b.bay}
                      </span>
                      <span className={`h-2 w-2 rounded-full ${b.color}`} />
                    </div>
                    <CarFront className="mt-1 h-5 w-5 text-ink/70" strokeWidth={1.5} />
                    <p className="mt-1 truncate text-[10px] font-semibold">{b.reg}</p>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-ink text-[7px] font-bold text-white">
                        {b.mech}
                      </span>
                      <div className="h-1 flex-1 overflow-hidden rounded-full bg-black/10">
                        <motion.div
                          className={`h-full ${b.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${b.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.3 + i * 0.08 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-1.5 bg-white px-3 pt-1 pb-4">
                {LEGEND.map(([c, label]) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${c}`} />
                    <span className="text-[10px] text-muted-foreground">{label}</span>
                  </div>
                ))}
              </div>
            </PhoneFrame>
          </Reveal>

          <div className="order-3 space-y-3">
            {FLOATING.slice(2).map((f, i) => (
              <Reveal key={f.label} delay={i * 0.12}>
                <div className="rounded-lg border border-black/5 bg-surface p-4 shadow-sm lg:max-w-xs">
                  <p className="eyebrow text-muted-foreground">{f.label}</p>
                  <p className="font-display text-xl font-bold">{f.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionTitle>How It Works</SectionTitle>
          <div className="relative mt-10">
            <span className="absolute top-8 right-0 left-0 hidden h-px bg-black/10 lg:block" />
            <ol className="relative grid gap-6 lg:grid-cols-5">
              {STEPS.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <li className="flex gap-4 lg:flex-col lg:items-center lg:text-center">
                    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-black/10 bg-white shadow-sm">
                      <s.icon className="h-7 w-7 text-brand" strokeWidth={1.4} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-bold tracking-widest text-brand uppercase">
                        Step {i + 1}
                      </p>
                      <h3 className="font-display text-xl font-bold uppercase">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
