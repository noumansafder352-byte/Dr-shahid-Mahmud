import { MessageCircle, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp — premium pill */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp consultation"
        className="group fixed bottom-24 right-4 z-40 lg:bottom-6 lg:right-6"
      >
        <span className="relative flex items-center gap-2 rounded-full pl-3 pr-4 py-3 text-white shadow-elegant transition-smooth group-hover:-translate-y-0.5 group-hover:shadow-glow"
          style={{ background: "linear-gradient(135deg, oklch(0.72 0.18 150), oklch(0.62 0.18 155))" }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 ring-1 ring-white/30">
            <MessageCircle className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline text-sm font-semibold whitespace-nowrap pr-1">Chat on WhatsApp</span>
          <span className="pointer-events-none absolute -inset-1 -z-10 rounded-full opacity-50 blur-md"
            style={{ background: "oklch(0.7 0.18 150 / 0.6)" }} />
          <span className="pointer-events-none absolute inset-0 rounded-full opacity-30 animate-ping"
            style={{ background: "oklch(0.7 0.18 150 / 0.6)" }} />
        </span>
      </a>

      {/* Sticky mobile bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="m-3 grid grid-cols-2 gap-2 rounded-2xl glass shadow-elegant p-2">
          <a href={`tel:${SITE.phoneIntl}`} className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-medium text-foreground/80 hover:bg-secondary transition-smooth">
            <Phone className="h-4 w-4 text-primary" /> Call Now
          </a>
          <a href={waLink()} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl py-3 text-xs font-semibold text-primary-foreground gradient-primary">
            <MessageCircle className="h-4 w-4" /> Book Consultation
          </a>
        </div>
      </div>
    </>
  );
}
