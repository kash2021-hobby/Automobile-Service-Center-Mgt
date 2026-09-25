import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { Eyebrow, Reveal } from "./ui";

const ROWS = [
  ["Running around the floor for updates", "Every vehicle's status live on your phone"],
  ["Paper job cards that get lost", "Digital job cards with photos, created in minutes"],
  ['Customers calling "when will it be ready?"', "Customers get automatic WhatsApp updates"],
  ["Arguments over bills and scratches", "Photo proof + approved estimate before work starts"],
  ["Calculating salaries by hand every month", "Salary and incentives calculated automatically"],
];

export default function WhatIf() {
  const [withInField, setWithInField] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const hasAutoPlayed = useRef(false);

  useEffect(() => {
    if (!inView || hasAutoPlayed.current) return;
    hasAutoPlayed.current = true;
    const timer = setTimeout(() => {
      setWithInField(true);
    }, 800);
    return () => clearTimeout(timer);
  }, [inView]);

  return (
    <section className="bg-ink py-16 text-white lg:py-24">
      <div ref={ref} className="mx-auto max-w-4xl px-4 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>Now Imagine This</Eyebrow>
          <h2 className="mt-3 text-[clamp(1.75rem,5.5vw,3rem)] leading-tight font-bold uppercase">
            What If One App Took Care of All of This
            <span className="block text-brand">For You?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
            No running around. No paper. No repeated calls. Just a workshop that runs itself while
            you watch it on your phone.
          </p>
        </Reveal>

        {/* Toggle Controls */}
        <Reveal className="mt-10">
          <div className="mx-auto flex w-full max-w-md items-center gap-2 rounded-xl border border-white/15 bg-ink-2 p-1.5 shadow-lg">
            <button
              type="button"
              onClick={() => setWithInField(false)}
              className={`min-h-11 flex-1 rounded-lg px-3 py-2 font-display text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                withInField ? "text-white/60 hover:text-white" : "bg-alert text-white shadow"
              }`}
            >
              Without Infield7
            </button>
            <button
              type="button"
              onClick={() => setWithInField(true)}
              className={`min-h-11 flex-1 rounded-lg px-3 py-2 font-display text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                withInField ? "bg-brand text-white shadow" : "text-white/60 hover:text-white"
              }`}
            >
              With Infield7
            </button>
          </div>
        </Reveal>

        {/* Animated Feature Rows */}
        <div className="mt-8 space-y-3">
          {ROWS.map(([before, after], i) => (
            <div
              key={before}
              className="overflow-hidden rounded-xl border border-white/10 bg-ink-2 transition-colors duration-300"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={withInField ? "after" : "before"}
                  initial={{ opacity: 0, y: 12, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -12, rotateX: 15 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="flex min-w-0 items-center gap-3.5 p-4"
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                      withInField ? "bg-status-green/20 text-status-green" : "bg-alert/20 text-alert"
                    }`}
                  >
                    {withInField ? (
                      <Check className="h-4 w-4 stroke-[3]" />
                    ) : (
                      <X className="h-4 w-4 stroke-[3]" />
                    )}
                  </span>
                  <p className="min-w-0 text-sm font-medium leading-snug text-white/95 sm:text-base">
                    {withInField ? after : before}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a href="#contact" className="btn-base btn-brand w-full sm:w-auto">
            Book a Free Demo <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
