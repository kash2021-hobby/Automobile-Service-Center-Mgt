import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionTitle({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const line = tone === "dark" ? "bg-white/20" : "bg-foreground/15";
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`h-px flex-1 max-w-24 ${line}`} />
      <h2 className="text-center text-[clamp(1.75rem,5vw,2.75rem)] leading-none font-bold tracking-tight uppercase">
        {children}
      </h2>
      <span className={`h-px flex-1 max-w-24 ${line}`} />
    </div>
  );
}

export function Eyebrow({
  children,
  tone = "brand",
}: {
  children: ReactNode;
  tone?: "brand" | "alert" | "muted";
}) {
  const color =
    tone === "alert" ? "text-alert" : tone === "muted" ? "text-muted-foreground" : "text-brand";
  return <p className={`eyebrow ${color}`}>{children}</p>;
}

export function useCountUp(target: number, duration = 1400) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return { ref, value };
}

export function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const { ref, value } = useCountUp(to);
  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-full max-w-[340px] sm:max-w-[420px] rounded-[2.25rem] border border-white/15 bg-ink p-3 shadow-2xl ${className}`}
    >
      <div className="absolute top-3 left-1/2 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-ink" />
      <div className="overflow-hidden rounded-[1.75rem] bg-surface">{children}</div>
    </div>
  );
}

export function TabletFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-full rounded-2xl border border-black/10 bg-ink p-2.5 shadow-2xl ${className}`}
    >
      <div className="overflow-hidden rounded-xl bg-white">{children}</div>
    </div>
  );
}

import logoImg from "@/assets/logo.png";

export function Logo({
  tone = "light",
  className = "h-11 sm:h-12 w-auto",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <img
      src={logoImg}
      alt="INFIELD 7 Logo"
      className={`object-contain rounded-lg transition-transform hover:scale-105 ${className}`}
    />
  );
}

export const WHATSAPP_NUMBER = "919164060961";
