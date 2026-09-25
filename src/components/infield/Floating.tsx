import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "./ui";

const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20InField%20Team%2C%20I%27m%20interested%20in%20InField%20for%20my%20service%20center.`;

export default function Floating() {
  const [hideCta, setHideCta] = useState(false);

  useEffect(() => {
    const target = document.getElementById("contact");
    if (!target) return;
    const obs = new IntersectionObserver(([entry]) => setHideCta(entry.isIntersecting), {
      threshold: 0.15,
    });
    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-4 left-4 z-40 grid h-14 w-14 place-items-center rounded-full bg-whatsapp shadow-lg lg:bottom-5 lg:left-5"
        style={{ marginBottom: "env(safe-area-inset-bottom)" }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp/40" />
        <MessageCircle className="relative h-7 w-7 text-white" />
        <span className="pointer-events-none absolute left-16 hidden rounded-md bg-ink px-3 py-1.5 text-xs whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100 lg:block">
          Chat on WhatsApp
        </span>
      </a>

      {!hideCta && (
        <a
          href="#contact"
          className="btn-base btn-brand fixed right-4 bottom-4 z-40 px-4 py-3 text-sm shadow-lg lg:hidden"
          style={{ marginBottom: "env(safe-area-inset-bottom)" }}
        >
          Book a Free Demo
        </a>
      )}
    </>
  );
}
