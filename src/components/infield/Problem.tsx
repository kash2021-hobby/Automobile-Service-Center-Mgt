import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  FileQuestion,
  IndianRupee,
  PhoneCall,
  Package,
  UserSearch,
} from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const PAINS = [
  {
    icon: FileQuestion,
    title: "Where's that job card?",
    text: "Paper registers get lost, torn or filled wrongly.",
  },
  {
    icon: UserSearch,
    title: "Which mechanic is free?",
    text: "You walk the whole floor just to find out.",
  },
  {
    icon: Clock,
    title: "When will my car be ready?",
    text: "Customers call again and again, and you have no clear answer.",
  },
  {
    icon: Package,
    title: "Have the parts arrived?",
    text: "Jobs stop because nobody knows what's in stock.",
  },
  {
    icon: IndianRupee,
    title: "Why is this bill so high?",
    text: "Arguments at delivery over charges and old scratches.",
  },
  {
    icon: AlertTriangle,
    title: "Where is Ramesh?",
    text: "Mechanics on long breaks or outside, and you don't know.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow tone="alert">The Daily Struggle</Eyebrow>
          <h2 className="mt-3 text-[clamp(1.75rem,5.5vw,3rem)] leading-tight font-bold uppercase">
            Every Day in Your Workshop <span className="text-alert">Feels Like This</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
            The customer keeps calling. The manager keeps running around. Job cards keep piling up.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
          <Reveal className="flex justify-center">
            <div className="w-full max-w-[280px] rounded-[2rem] border-4 border-ink bg-ink p-2 shadow-xl">
              <div className="rounded-[1.6rem] bg-ink-2 px-5 py-8 text-center">
                <motion.div
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ repeat: Infinity, duration: 1.4 }}
                  className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-alert/20"
                >
                  <PhoneCall className="h-7 w-7 text-alert" />
                </motion.div>
                <p className="mt-4 font-display text-xl font-bold text-white uppercase">Customer</p>
                <p className="text-sm text-alert">Calling (4th time)</p>

                <div className="relative mt-6 rounded-xl rounded-bl-none bg-white/10 p-3 text-left">
                  <p className="text-sm text-white">"When will my car be ready?"</p>
                </div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="mx-auto mt-6 grid h-10 w-10 place-items-center rounded-full border border-white/20"
                >
                  <Clock className="h-5 w-5 text-white/60" />
                </motion.div>
                <p className="mt-6 text-xs text-white/40">Missed calls today: 11</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {PAINS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="h-full rounded-lg border border-black/5 bg-white p-5 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-alert/10">
                    <p.icon className="h-5 w-5 text-alert" />
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="mt-12 text-center font-display text-[clamp(1.25rem,3.5vw,1.9rem)] font-bold uppercase">
            More vehicles should mean more profit, not more tension.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
