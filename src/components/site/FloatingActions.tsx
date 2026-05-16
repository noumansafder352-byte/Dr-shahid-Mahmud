import { MessageCircle, Phone } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp consultation"
        className="fixed bottom-24 right-4 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-elegant hover:scale-110 transition-smooth lg:bottom-6"
        style={{ background: "var(--whatsapp)" }}
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping" style={{ background: "var(--whatsapp)" }} />
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
