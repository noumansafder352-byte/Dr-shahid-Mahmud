import { CalendarCheck } from "lucide-react";
import { waLink } from "@/lib/site";

const WA_GRADIENT = "linear-gradient(135deg, oklch(0.78 0.18 150) 0%, oklch(0.58 0.18 155) 100%)";

function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.003 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.26.6 4.47 1.73 6.41L3.2 28.8l6.55-1.72a12.78 12.78 0 0 0 6.25 1.6h.01c7.07 0 12.8-5.73 12.8-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.06-3.63zm0 23.36h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.4a10.6 10.6 0 0 1-1.63-5.68c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.57 10.57 0 0 1 3.12 7.54c0 5.88-4.78 10.65-10.78 10.65zm5.84-7.98c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.37.48-.55.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.55-.08-.16-.72-1.74-.99-2.38-.26-.62-.53-.54-.72-.55l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.62 0 1.55 1.13 3.04 1.29 3.25.16.21 2.22 3.39 5.39 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.89-.77 2.16-1.52.27-.74.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z"/>
    </svg>
  );
}

export function FloatingActions() {
  return (
    <>
      {/* Floating premium healthcare CTA */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book appointment on WhatsApp"
        className="group fixed bottom-24 right-5 z-40 lg:bottom-7 lg:right-7"
      >
        <div className="relative">
          {/* Soft outer glow */}
          <span
            className="pointer-events-none absolute -inset-3 rounded-full opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-90"
            style={{ background: "oklch(0.72 0.19 150 / 0.45)" }}
          />
          {/* Subtle pulse ring */}
          <span
            className="pointer-events-none absolute inset-0 rounded-full opacity-30 animate-ping"
            style={{ background: "oklch(0.72 0.19 150 / 0.5)" }}
          />

          {/* Main pill button */}
          <span
            className="relative flex items-center gap-3 rounded-full pl-1.5 pr-5 py-1.5 text-white ring-1 ring-white/25 shadow-[0_18px_45px_-12px_rgba(16,128,80,0.6),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_24px_55px_-12px_rgba(16,128,80,0.75),inset_0_1px_0_rgba(255,255,255,0.3)]"
            style={{ background: WA_GRADIENT }}
          >
            {/* Icon medallion */}
            <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white text-emerald-600 shadow-[0_6px_18px_-6px_rgba(0,0,0,0.35)] ring-1 ring-emerald-700/10 transition-transform duration-300 group-hover:scale-105">
              <WhatsAppIcon className="h-6 w-6" />
              {/* Live status dot */}
              <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80 animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-white" />
              </span>
            </span>

            {/* Label */}
            <span className="hidden sm:flex flex-col leading-tight pr-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/80">
                Tap to chat
              </span>
              <span className="text-[15px] font-bold whitespace-nowrap drop-shadow-sm">
                Book Appointment
              </span>
            </span>
          </span>
        </div>
      </a>

      {/* Sticky mobile bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="m-3 grid grid-cols-2 gap-2 rounded-2xl glass shadow-elegant p-2">
          <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-medium text-foreground/80 hover:bg-secondary transition-smooth">
            <CalendarCheck className="h-4 w-4 text-primary" /> Book Appointment
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold text-primary-foreground gradient-primary">
            <WhatsAppIcon className="h-4 w-4" /> Book Consultation
          </a>
        </div>
      </div>
    </>
  );
}
