import { useState } from "react";
import { Check, CheckCircle2, MessageCircle, Loader2 } from "lucide-react";
import ctaImg from "@/assets/cta-car.jpg";
import { supabase } from "@/integrations/supabase/client";
import { WHATSAPP_NUMBER } from "./ui";

const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbw3e0x9-xUMilwkpWGhTltJ6b0vtsG7sG9TBipifuymLKd5z91Pbq5M369-LLBFSZ3o/exec";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    serviceCenter: "",
    phone: "",
    city: "",
    location: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [waLink, setWaLink] = useState("");

  const validatePhone = (phone: string) => {
    const cleanPhone = phone.replace(/\D/g, "");
    return /^[6-9]\d{9}$/.test(cleanPhone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim()) {
      setErrorMsg("Please enter your full name");
      return;
    }
    if (!formData.serviceCenter.trim()) {
      setErrorMsg("Please enter your service center name");
      return;
    }

    const cleanPhone = formData.phone.trim().replace(/\D/g, "");
    if (!validatePhone(cleanPhone)) {
      setErrorMsg("Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.");
      return;
    }

    if (!formData.city.trim()) {
      setErrorMsg("Please enter your city");
      return;
    }
    if (!formData.preferredDate) {
      setErrorMsg("Please select a preferred date");
      return;
    }
    if (!formData.preferredTime) {
      setErrorMsg("Please select a preferred time");
      return;
    }

    setLoading(true);

    const waText = encodeURIComponent(
      `Hi Infield7 Team,\n\nI want to book a free demo!\n*Name:* ${formData.name}\n*Service Center:* ${formData.serviceCenter}\n*Phone:* ${cleanPhone}\n*City:* ${formData.city}\n*Location:* ${formData.location || "N/A"}\n*Preferred Date:* ${formData.preferredDate}\n*Preferred Time:* ${formData.preferredTime}${formData.message ? `\n*Note:* ${formData.message}` : ""}`
    );
    const targetWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;
    setWaLink(targetWaUrl);

    // 1. Post to Google Sheets
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify({
          role: "Direct Website Lead",
          challenges: "Submitted via Landing Page Form",
          name: formData.name.trim(),
          business: formData.serviceCenter.trim(),
          phone: cleanPhone,
          city: formData.city.trim(),
          location: formData.location.trim() || "",
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          message: formData.message.trim() || "",
        }),
        mode: "no-cors",
      });
    } catch (err) {
      console.error("Google Sheets post error:", err);
    }

    // 2. Save to Supabase demo_requests table
    try {
      const { error } = await supabase.from("demo_requests").insert([
        {
          name: formData.name.trim(),
          service_center: formData.serviceCenter.trim(),
          phone: cleanPhone,
          city: formData.city.trim() || null,
          message: formData.message.trim() || null,
        },
      ]);

      if (error) {
        console.warn("Supabase insert warning:", error.message);
      }
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      window.open(targetWaUrl, "_blank");
    }
  };

  return (
    <section id="contact" className="relative bg-ink py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Workshop Photo + Headline + Checkmarks */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-ink-2 p-8 lg:col-span-5 lg:p-10">
            <img
              src={ctaImg}
              alt="Automobile Service Center"
              className="absolute inset-0 h-full w-full object-cover opacity-45 brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block rounded-full bg-brand/90 px-3 py-1 text-xs font-bold tracking-wider text-black uppercase">
                Book a Free Live Demo
              </span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                Service Smart. Deliver Fast.{" "}
                <span className="block text-brand">Grow Faster.</span>
              </h2>
              <p className="mt-4 text-base text-white/80 leading-relaxed">
                See how Infield7 transforms your workshop workflow in a 15-minute live WhatsApp call or demo.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Digital Job Cards & Live Bay Status",
                  "Auto WhatsApp Updates to Customers",
                  "Automated Mechanic Salaries & Incentives",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-black">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </span>
                    <span className="text-sm font-semibold text-white/95">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-xl border border-white/15 bg-black/50 p-4 backdrop-blur">
                <p className="text-xs font-medium text-white/70">Have questions right now?</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 flex items-center gap-2 text-sm font-bold text-brand hover:underline"
                >
                  <MessageCircle className="h-4 w-4" /> Chat directly on WhatsApp (+91 91640 60961)
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-2xl border border-white/15 bg-ink-2 p-6 shadow-2xl sm:p-8 lg:col-span-7">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-status-green/20 text-status-green">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="mt-4 text-2xl font-bold">Appointment & Demo Request Sent!</h3>
                <p className="mt-2 text-sm text-white/70">
                  Your lead details have been submitted. We are opening WhatsApp so you can chat with our team immediately.
                </p>
                <div className="mt-6">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-base btn-brand inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold"
                  >
                    <MessageCircle className="h-5 w-5" /> Open WhatsApp Demo Chat
                  </a>
                </div>
                <p className="mt-4 text-xs text-white/50">
                  Didn't open WhatsApp?{" "}
                  <a href={waLink} target="_blank" rel="noreferrer" className="text-brand underline font-semibold">
                    Click here to open WhatsApp directly
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="text-xl font-bold tracking-tight text-white">Book an Appointment / Free Demo</h3>
                  <p className="text-xs text-white/60">Fill in your details below to schedule your live demo.</p>
                </div>

                {errorMsg && (
                  <div className="rounded-md bg-alert/20 border border-alert/40 p-3 text-xs font-semibold text-alert">
                    {errorMsg}
                  </div>
                )}

                {/* Row 1 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Full Name <span className="text-alert">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-11 rounded-lg border border-white/15 bg-black/40 px-3.5 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Name of Business <span className="text-alert">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Speed Auto Works"
                      value={formData.serviceCenter}
                      onChange={(e) => setFormData({ ...formData, serviceCenter: e.target.value })}
                      className="w-full h-11 rounded-lg border border-white/15 bg-black/40 px-3.5 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Phone Number (+91) <span className="text-alert">*</span>
                    </label>
                    <div className="relative flex">
                      <span className="inline-flex h-11 items-center rounded-l-lg border border-r-0 border-white/15 bg-black/60 px-3 text-xs font-bold text-white/70">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-11 rounded-r-lg border border-white/15 bg-black/40 px-3.5 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      City <span className="text-alert">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Gurugram"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full h-11 rounded-lg border border-white/15 bg-black/40 px-3.5 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                    Location / Address
                  </label>
                  <input
                    type="text"
                    placeholder="Full workshop address"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full h-11 rounded-lg border border-white/15 bg-black/40 px-3.5 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none"
                  />
                </div>

                {/* Row 4 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Preferred Date <span className="text-alert">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full h-11 rounded-lg border border-white/15 bg-black/40 px-3.5 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none [color-scheme:dark]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                      Preferred Time <span className="text-alert">*</span>
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full h-11 rounded-lg border border-white/15 bg-black/40 px-3.5 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>

                {/* Row 5 */}
                <div>
                  <label className="block text-xs font-semibold text-white/80 uppercase tracking-wider mb-1">
                    Message / Special Requirement
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific requirements or questions?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3.5 py-2 text-sm text-white placeholder:text-gray-400 focus:border-brand focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-base btn-brand mt-2 flex w-full h-12 items-center justify-center gap-2 text-base font-extrabold uppercase tracking-wider shadow-lg disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Saving Request...
                    </>
                  ) : (
                    "BOOK AN APPOINTMENT →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
