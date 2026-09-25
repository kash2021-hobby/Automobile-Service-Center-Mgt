import {
  BellOff,
  ClipboardCheck,
  LayoutGrid,
  Radio,
  ReceiptIndianRupee,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { Reveal, SectionTitle } from "./ui";

const ITEMS = [
  { icon: LayoutGrid, label: "One App for Everything" },
  { icon: Radio, label: "Live Vehicle Status" },
  { icon: ClipboardCheck, label: "Digital Job Cards" },
  { icon: BellOff, label: "Fewer Customer Calls" },
  { icon: ReceiptIndianRupee, label: "No Billing Disputes" },
  { icon: TrendingUp, label: "Higher Mechanic Productivity" },
  { icon: Wallet, label: "Auto Payroll" },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle>
          Why Workshops <span className="text-brand">Choose Infield7</span>
        </SectionTitle>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <li className="flex items-center gap-4 rounded-xl border border-black/10 bg-surface p-4 lg:flex-col lg:border-black/5 lg:text-center shadow-xs hover:shadow-md transition-shadow">
                <item.icon className="h-10 w-10 shrink-0 text-ink" strokeWidth={1.4} />
                <span className="font-display text-sm leading-tight font-extrabold tracking-wider text-ink uppercase sm:text-base">
                  {item.label}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
