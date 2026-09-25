import { WHATSAPP_NUMBER } from "./ui";

const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Infield7%20Team%2C%20I%27m%20interested%20in%20Infield7%20for%20my%20service%20center.`;

function RealWhatsAppIcon({ className = "h-7 w-7 fill-white" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.487 1.332 5.006l-1.416 5.17 5.291-1.387c1.465.799 3.12 1.22 4.781 1.22 5.507 0 9.991-4.478 9.992-9.985 0-2.667-1.04-5.172-2.928-7.059-1.888-1.887-4.394-2.949-7.062-2.949zm5.83 14.226c-.247.694-1.434 1.328-2.005 1.413-.512.076-1.16.108-1.872-.118-.431-.137-.985-.32-1.694-.626-2.981-1.287-4.927-4.289-5.076-4.487-.148-.198-1.213-1.611-1.213-3.074 0-1.463.768-2.181 1.04-2.479.272-.298.594-.372.792-.372.182.009.427.001.669.51.247.595.841 2.058.916 2.206.075.149.124.323.025.521-.099.199-.149.323-.3.495-.149.174-.312.388-.446.521-.148.148-.003.309.13.606.173.298.77 1.271 1.653 2.059 1.135 1.013 2.093 1.326 2.39 1.475.297.149.471.124.644-.074.173-.198.743-.868.941-1.165.198-.298.396-.248.669-.149.273.099 1.734.818 2.031.967.298.149.496.223.57.347.075.124.075.719-.173 1.414z"/>
    </svg>
  );
}

export default function Floating() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-4 right-4 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] shadow-2xl transition-transform hover:scale-110 active:scale-95 lg:bottom-6 lg:right-6"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
      <RealWhatsAppIcon className="relative h-8 w-8 fill-white" />
      <span className="pointer-events-none absolute right-16 hidden rounded-lg bg-ink px-3 py-1.5 text-xs font-bold whitespace-nowrap text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 lg:block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
