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
          Why Workshops <span className="text-brand">Choose InField</span>
        </SectionTitle>

        <ul className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.05}>
              <li className="flex items-center gap-4 rounded-lg border border-black/5 p-4 lg:flex-col lg:border-0 lg:text-center">
                <item.icon className="h-8 w-8 shrink-0 text-ink" strokeWidth={1.2} />
                <span className="font-display text-xs leading-tight font-semibold tracking-widest uppercase">
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
