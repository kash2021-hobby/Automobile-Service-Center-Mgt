import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Eyebrow, Reveal, SectionTitle } from "./ui";

const FAQS = [
  {
    q: "Do my mechanics need a smartphone?",
    a: "Mechanics can use any Android or iOS smartphone to update job cards, view assigned tasks, and mark vehicle completion. A single workshop tablet can also be shared if individual phones are unavailable.",
  },
  {
    q: "Is it difficult to set up? How long does it take?",
    a: "Infield7 is designed for quick onboarding. Most workshops get fully set up with vehicle bays, mechanic profiles, and inventory in under 2 hours with assistance from our team.",
  },
  {
    q: "Does it work with poor internet?",
    a: "Yes, Infield7 includes offline sync capabilities. Job card entries and stage updates saved offline will automatically sync with the cloud once network connectivity is restored.",
  },
  {
    q: "Is the app available in Hindi?",
    a: "Yes, the Infield7 mechanic mobile interface supports both Hindi and English so floor technicians can navigate job cards and tasks easily in their preferred language.",
  },
  {
    q: "Are the WhatsApp updates to customers automatic?",
    a: "Yes, WhatsApp status updates (Vehicle Received, In Repair, Ready for Delivery) are triggered automatically whenever a mechanic or manager updates the job status on the app.",
  },
  {
    q: "How much does Infield7 cost?",
    a: "Infield7 offers flexible monthly & annual subscription plans based on the number of service bays and active mechanics in your workshop. Book a free demo to get custom pricing for your workshop.",
  },
  {
    q: "Is my data safe?",
    a: "Yes, all workshop data, customer phone numbers, job cards, and financial records are encrypted and securely stored on cloud infrastructure with daily automated backups.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section id="faq" className="bg-[#F4F5F7] py-16 lg:py-24 border-t border-black/5">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <Reveal className="text-center">
          <Eyebrow>Got Questions?</Eyebrow>
          <SectionTitle>
            QUESTIONS <span className="text-brand">WORKSHOP OWNERS ASK</span>
          </SectionTitle>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.04}>
                <div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-xs">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between p-4 text-left font-display text-base font-bold text-ink sm:p-5 sm:text-lg hover:text-status-blue transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-status-blue" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-black/5 bg-surface p-4 text-sm leading-relaxed text-muted-foreground sm:p-5">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm font-semibold text-muted-foreground">
            Still have questions?{" "}
            <a href="#contact" className="text-status-blue hover:underline font-bold">
              Book a Free Demo to talk to our team →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
