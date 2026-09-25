import { useState } from "react";
import { ChevronDown, Facebook, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { Logo, WHATSAPP_NUMBER } from "./ui";

const FEATURE_LINKS = [
  ["Digital Job Cards", "#feature-job-cards"],
  ["Smart Mechanic Assignment", "#feature-assignment"],
  ["Mechanic Location & Idle Time", "#feature-location"],
  ["Out-of-Radius Alerts", "#feature-radius"],
  ["Parts Inventory & Estimates", "#feature-parts"],
  ["Customer WhatsApp Updates", "#feature-updates"],
  ["Salary & Incentives", "#feature-salary"],
];

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10 lg:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-12 w-full items-center justify-between py-3 text-left lg:pointer-events-none lg:py-0"
      >
        <span className="font-display text-base font-bold tracking-widest text-white uppercase">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-white/60 transition-transform lg:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`${open ? "block" : "hidden"} pb-4 lg:mt-4 lg:block lg:pb-0`}>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink pt-14 pb-24 text-white lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-4 lg:gap-10">
          <div>
            <span className="inline-flex rounded-lg bg-white px-3 py-2">
              <Logo tone="dark" />
            </span>
            <p className="mt-4 text-sm text-white/60">
              The service center management app for automobile workshops in India.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <span
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-md border border-white/15"
                >
                  <Icon className="h-4 w-4 text-white/70" />
                </span>
              ))}
            </div>
          </div>

          <Column title="Features">
            <ul className="space-y-2">
              {FEATURE_LINKS.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/60 hover:text-brand">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </Column>

          <Column title="Company">
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-sm text-white/60 hover:text-brand">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-white/60 hover:text-brand">
                  Contact
                </a>
              </li>
            </ul>
          </Column>

          <Column title="Contact">
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="flex items-center gap-2 hover:text-brand">
                  <Phone className="h-4 w-4 text-brand" /> +91 91640 60961
                </a>
              </li>
              <li>
                <a href="mailto:hello@infield.app" className="flex items-center gap-2 hover:text-brand">
                  <Mail className="h-4 w-4 text-brand" /> hello@infield.app
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-brand"
                >
                  <MessageCircle className="h-4 w-4 text-brand" /> WhatsApp +91 9164060961
                </a>
              </li>
            </ul>
          </Column>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Infield7. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-brand">
              Privacy Policy
            </a>
            <a href="#top" className="hover:text-brand">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
