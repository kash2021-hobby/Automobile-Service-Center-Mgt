import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo, WHATSAPP_NUMBER } from "./ui";

const LINKS = [
  { label: "The Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
        <a href="#top" className="inline-flex items-center rounded-xl bg-white p-1.5 shadow-sm min-w-0">
          <Logo className="h-10 sm:h-11 w-auto" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-sm font-semibold tracking-widest text-white/80 uppercase transition-colors hover:text-brand"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex items-center gap-2 text-sm font-semibold text-white"
          >
            <Phone className="h-4 w-4 text-brand" /> +91 91640 60961
          </a>
          <a href="#contact" className="btn-base btn-brand px-5 py-2.5 text-sm">
            Book a Free Demo
          </a>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-md border border-white/20 text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ink lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#top" onClick={() => setOpen(false)} className="inline-flex items-center rounded-xl bg-white p-1.5 shadow-sm">
              <Logo className="h-10 w-auto" />
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-md border border-white/20 text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-2 px-6 pt-6">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-2xl font-bold tracking-wide text-white uppercase"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 py-4 text-base font-semibold text-white"
            >
              <Phone className="h-4 w-4 text-brand" /> +91 91640 60961
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-base btn-brand mt-2 w-full"
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
