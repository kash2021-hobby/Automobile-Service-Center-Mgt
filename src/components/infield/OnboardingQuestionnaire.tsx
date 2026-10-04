import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./ui";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Building2,
  Headset,
  Wrench,
  Network,
  HelpCircle,
  FileQuestion,
  UserSearch,
  PhoneCall,
  Package,
  IndianRupee,
  ShieldAlert,
  Calculator,
  Timer,
  ChevronRight,
  ChevronLeft,
  Check,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";

/* ── Google Sheets Web App URL ───────────────────────────────────── */
// Replace this with your deployed Google Apps Script Web App URL
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbw3e0x9-xUMilwkpWGhTltJ6b0vtsG7sG9TBipifuymLKd5z91Pbq5M369-LLBFSZ3o/exec";

/* ── data ────────────────────────────────────────────────────────── */

const ROLES = [
  { value: "owner", label: "Workshop Owner / Managing Director", icon: Building2 },
  { value: "advisor", label: "Service Advisor / Front Desk", icon: Headset },
  { value: "mechanic", label: "Floor Supervisor / Head Mechanic", icon: Wrench },
  { value: "multi", label: "Multi-Branch Garage Owner", icon: Network },
  { value: "other", label: "Other", icon: HelpCircle },
];

const CHALLENGES = [
  {
    id: "job-cards",
    title: "Lost or Messy Paper Job Cards",
    desc: "Paper registers get damaged, misplaced, or filled incorrectly.",
    icon: FileQuestion,
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-200",
    activeBg: "bg-orange-100",
  },
  {
    id: "floor-visibility",
    title: "Mechanic Idle Time & Floor Visibility",
    desc: "Walking the floor just to check who is working and who is free.",
    icon: UserSearch,
    color: "text-violet-500",
    bg: "bg-violet-50",
    border: "border-violet-200",
    activeBg: "bg-violet-100",
  },
  {
    id: "customer-calls",
    title: "Repeated 'When Is My Car Ready?' Calls",
    desc: "Answering the same call all day with no live repair status.",
    icon: PhoneCall,
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-200",
    activeBg: "bg-rose-100",
  },
  {
    id: "inventory-parts",
    title: "Spare Parts Stockout & Mismatch",
    desc: "Repairs delayed because parts are out of stock or untracked.",
    icon: Package,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    activeBg: "bg-amber-100",
  },
  {
    id: "disputes-billing",
    title: "Scratch Claims & Billing Disputes",
    desc: "Arguments with customers over pre-existing damages or unexpected costs.",
    icon: IndianRupee,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-200",
    activeBg: "bg-red-100",
  },
  {
    id: "mechanic-radius",
    title: "Mechanics Leaving Workshop Premises",
    desc: "No alerts when technicians leave the workshop area or take long breaks.",
    icon: ShieldAlert,
    color: "text-sky-500",
    bg: "bg-sky-50",
    border: "border-sky-200",
    activeBg: "bg-sky-100",
  },
  {
    id: "payroll-incentives",
    title: "Manual Salary & Incentive Calculations",
    desc: "End-of-month chaos calculating job commissions and overtime.",
    icon: Calculator,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    activeBg: "bg-emerald-100",
  },
  {
    id: "turnaround-efficiency",
    title: "Slow Vehicle Turnaround Times",
    desc: "Difficulty optimizing bay capacity and daily service deliveries.",
    icon: Timer,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    activeBg: "bg-blue-100",
  },
];

const STEP_LABELS = ["Your Role", "Challenges", "Book Appointment"];

/* ── animation variants ──────────────────────────────────────────── */

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.25 } },
};

/* ── component ───────────────────────────────────────────────────── */

export default function OnboardingQuestionnaire({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [step, setStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedChallenges, setSelectedChallenges] = useState<Set<string>>(new Set());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleChallenge = (id: string) => {
    setSelectedChallenges((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = {
      role: ROLES.find((r) => r.value === selectedRole)?.label || selectedRole,
      challenges: CHALLENGES.filter((c) => selectedChallenges.has(c.id))
        .map((c) => c.title)
        .join(", "),
      name: (form.querySelector("#q-name") as HTMLInputElement)?.value || "",
      business: (form.querySelector("#q-business") as HTMLInputElement)?.value || "",
      phone: (form.querySelector("#q-phone") as HTMLInputElement)?.value || "",
      city: (form.querySelector("#q-city") as HTMLInputElement)?.value || "",
      location: (form.querySelector("#q-location") as HTMLInputElement)?.value || "",
      preferredDate: (form.querySelector("#q-date") as HTMLInputElement)?.value || "",
      preferredTime: (form.querySelector("#q-time") as HTMLInputElement)?.value || "",
      message: (form.querySelector("#q-message") as HTMLTextAreaElement)?.value || "",
    };

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        mode: "no-cors",
      });
      setIsSubmitted(true);
      setTimeout(() => onComplete(), 3000);
    } catch {
      // Even if there's a network issue, redirect to website
      setIsSubmitted(true);
      setTimeout(() => onComplete(), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = (step / 3) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1120] via-[#0F1729] to-[#0B1120] flex flex-col">
      {/* ── Header ── */}
      <header className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white p-1.5 shadow-sm">
            <Logo className="h-8 sm:h-10 w-auto" />
          </div>
        </div>
        <button
          type="button"
          onClick={onComplete}
          className="text-[11px] sm:text-xs font-semibold text-white/50 hover:text-white/80 transition-colors flex items-center gap-1"
        >
          Skip to website <ChevronRight className="h-3 w-3" />
        </button>
      </header>

      {/* ── Progress Bar ── */}
      <div className="px-4 sm:px-6 pt-2">
        <div className="mx-auto max-w-xl">
          {/* Step indicators */}
          <div className="flex items-center justify-between mb-3">
            {STEP_LABELS.map((label, i) => {
              const stepNum = i + 1;
              const isActive = step === stepNum;
              const isDone = step > stepNum;
              return (
                <div key={label} className="flex items-center gap-1.5 sm:gap-2">
                  <div
                    className={`grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-full text-xs font-bold transition-all duration-300 ${
                      isDone
                        ? "bg-emerald-500 text-white"
                        : isActive
                          ? "bg-brand text-ink shadow-lg shadow-brand/30"
                          : "bg-white/10 text-white/40"
                    }`}
                  >
                    {isDone ? <Check className="h-3.5 w-3.5" /> : stepNum}
                  </div>
                  <span
                    className={`hidden sm:inline text-xs font-semibold transition-colors ${
                      isActive ? "text-white" : isDone ? "text-emerald-400" : "text-white/30"
                    }`}
                  >
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
          {/* Bar */}
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-brand to-emerald-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <main className="flex-1 flex flex-col items-center px-4 py-6 sm:px-6 sm:py-10 overflow-y-auto">
        <div className="w-full max-w-xl">
          <AnimatePresence mode="wait">
            {/* ═══════ STEP 1 — Role ═══════ */}
            {step === 1 && (
              <motion.div
                key="step1"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-5"
              >
                <div className="text-center sm:text-left">
                  <p className="text-brand text-xs font-bold uppercase tracking-[0.15em]">
                    Step 1 of 3
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    What is your role in the{" "}
                    <span className="text-brand">service center?</span>
                  </h2>
                  <p className="mt-2 text-sm text-white/50">
                    This helps us personalise the demo to your daily workflow.
                  </p>
                </div>

                <div className="space-y-2.5">
                  {ROLES.map((role) => {
                    const Icon = role.icon;
                    const isSelected = selectedRole === role.value;
                    return (
                      <button
                        key={role.value}
                        type="button"
                        onClick={() => setSelectedRole(role.value)}
                        className={`group flex w-full items-center gap-3.5 rounded-xl border p-3.5 sm:p-4 text-left transition-all duration-200 ${
                          isSelected
                            ? "border-brand bg-brand/10 shadow-lg shadow-brand/10"
                            : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20"
                        }`}
                      >
                        <div
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg transition-colors ${
                            isSelected ? "bg-brand text-ink" : "bg-white/10 text-white/60"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className={`flex-1 text-sm sm:text-base font-semibold transition-colors ${
                            isSelected ? "text-white" : "text-white/70"
                          }`}
                        >
                          {role.label}
                        </span>
                        <div
                          className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-all ${
                            isSelected
                              ? "border-brand bg-brand"
                              : "border-white/20 bg-transparent"
                          }`}
                        >
                          {isSelected && <Check className="h-3 w-3 text-ink" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-2 flex justify-end">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!selectedRole}
                    className="bg-brand text-ink hover:bg-brand/90 font-bold px-6 sm:px-8 h-11 text-sm disabled:opacity-40"
                  >
                    Next Step <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ═══════ STEP 2 — Challenges ═══════ */}
            {step === 2 && (
              <motion.div
                key="step2"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-5"
              >
                <div className="text-center sm:text-left">
                  <p className="text-alert text-xs font-bold uppercase tracking-[0.15em]">
                    Step 2 of 3
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    What challenges are you{" "}
                    <span className="text-alert">facing daily?</span>
                  </h2>
                  <p className="mt-2 text-sm text-white/50">
                    Select all the pain points affecting your workshop operations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {CHALLENGES.map((c) => {
                    const Icon = c.icon;
                    const isSelected = selectedChallenges.has(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => toggleChallenge(c.id)}
                        className={`group relative flex items-start gap-3 rounded-xl border p-3 sm:p-3.5 text-left transition-all duration-200 ${
                          isSelected
                            ? `${c.border} ${c.activeBg} shadow-md`
                            : "border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20"
                        }`}
                      >
                        {/* checkbox indicator */}
                        <div
                          className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border-2 transition-all ${
                            isSelected
                              ? `${c.border} ${c.bg}`
                              : "border-white/20 bg-transparent"
                          }`}
                        >
                          {isSelected && <Check className={`h-3 w-3 ${c.color}`} />}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <Icon
                              className={`h-3.5 w-3.5 shrink-0 ${
                                isSelected ? c.color : "text-white/40"
                              }`}
                            />
                            <span
                              className={`text-sm font-bold leading-tight ${
                                isSelected ? "text-ink" : "text-white/80"
                              }`}
                            >
                              {c.title}
                            </span>
                          </div>
                          <p
                            className={`mt-1 text-xs leading-relaxed ${
                              isSelected ? "text-ink/60" : "text-white/40"
                            }`}
                          >
                            {c.desc}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {selectedChallenges.size > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-xs text-white/40"
                  >
                    {selectedChallenges.size} challenge{selectedChallenges.size > 1 ? "s" : ""} selected
                  </motion.p>
                )}

                <div className="flex justify-between pt-1">
                  <Button
                    variant="ghost"
                    onClick={() => setStep(1)}
                    className="font-bold text-white/60 hover:text-white hover:bg-white/10 h-11 text-sm"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" /> Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    className="bg-brand text-ink hover:bg-brand/90 font-bold px-6 sm:px-8 h-11 text-sm"
                  >
                    Next Step <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ═══════ STEP 3 — Book Appointment ═══════ */}
            {step === 3 && (
              <motion.div
                key="step3"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 sm:p-8 space-y-6">
                  <div className="text-center">
                    <p className="text-status-blue text-xs font-bold uppercase tracking-[0.15em]">
                      Step 3 of 3
                    </p>
                    <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      Book an{" "}
                      <span className="text-status-blue">Appointment</span>
                    </h2>
                    <p className="mt-2 text-sm text-white/50">
                      Fill in your details and we'll schedule a personalised demo for you.
                    </p>
                  </div>

                  <form
                    className="space-y-4"
                    onSubmit={handleFormSubmit}
                  >
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="q-name" className="text-xs font-bold text-white/70">
                          Name <span className="text-alert">*</span>
                        </Label>
                        <Input
                          id="q-name"
                          placeholder="e.g. Rajesh Kumar"
                          required
                          className="h-11 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand focus:ring-brand/30"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="q-business" className="text-xs font-bold text-white/70">
                          Name of Business <span className="text-alert">*</span>
                        </Label>
                        <Input
                          id="q-business"
                          placeholder="e.g. Speed Auto Works"
                          required
                          className="h-11 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand focus:ring-brand/30"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="q-phone" className="text-xs font-bold text-white/70">
                          Phone Number <span className="text-alert">*</span>
                        </Label>
                        <Input
                          id="q-phone"
                          type="tel"
                          placeholder="10-digit number"
                          required
                          className="h-11 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand focus:ring-brand/30"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="q-city" className="text-xs font-bold text-white/70">
                          City <span className="text-alert">*</span>
                        </Label>
                        <Input
                          id="q-city"
                          placeholder="e.g. Gurugram"
                          required
                          className="h-11 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand focus:ring-brand/30"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="space-y-1.5">
                      <Label htmlFor="q-location" className="text-xs font-bold text-white/70">
                        Location / Address
                      </Label>
                      <Input
                        id="q-location"
                        placeholder="Full workshop address"
                        className="h-11 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand focus:ring-brand/30"
                      />
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <Label htmlFor="q-date" className="text-xs font-bold text-white/70">
                          Preferred Date <span className="text-alert">*</span>
                        </Label>
                        <Input
                          id="q-date"
                          type="date"
                          required
                          className="h-11 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand focus:ring-brand/30 [color-scheme:dark]"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="q-time" className="text-xs font-bold text-white/70">
                          Preferred Time <span className="text-alert">*</span>
                        </Label>
                        <Input
                          id="q-time"
                          type="time"
                          required
                          className="h-11 rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand focus:ring-brand/30 [color-scheme:dark]"
                        />
                      </div>
                    </div>

                    {/* Row 5 */}
                    <div className="space-y-1.5">
                      <Label htmlFor="q-message" className="text-xs font-bold text-white/70">
                        Message
                      </Label>
                      <Textarea
                        id="q-message"
                        placeholder="Any specific requirements or questions?"
                        rows={3}
                        className="resize-none rounded-lg border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand focus:ring-brand/30"
                      />
                    </div>

                    {/* Actions */}
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center gap-3 py-4"
                      >
                        <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500/20">
                          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">Appointment Booked!</h3>
                        <p className="text-sm text-white/50 text-center">
                          Thank you! We'll get back to you soon. Redirecting to the website...
                        </p>
                      </motion.div>
                    ) : (
                      <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-2">
                        <Button
                          type="button"
                          variant="ghost"
                          onClick={() => setStep(2)}
                          disabled={isSubmitting}
                          className="font-bold text-white/60 hover:text-white hover:bg-white/10 h-11 text-sm"
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" /> Back
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-[#2D5BE3] text-white hover:bg-blue-600 font-bold px-6 sm:px-8 h-12 text-sm shadow-lg shadow-blue-500/25 w-full sm:w-auto disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-1.5 animate-spin" /> Submitting...
                            </>
                          ) : (
                            <>
                              Book an Appointment <ArrowRight className="h-4 w-4 ml-1.5" />
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* ── Footer trust line ── */}
      <div className="px-4 pb-4 text-center">
        <p className="text-[10px] sm:text-xs text-white/25">
          🔒 Your data is secure. We will never share your information.
        </p>
      </div>
    </div>
  );
}
