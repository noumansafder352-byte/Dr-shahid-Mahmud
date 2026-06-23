import { useEffect, useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { SITE, waLink, ONLINE_CONSULT_MSG, PROMO_OPEN_EVENT } from "@/lib/site";
import doctorAsset from "@/assets/online-consultation-popup.jpg.asset.json";
const doctor = doctorAsset.url;

const STORAGE_KEY = "dsm_promo_seen_v1";

export function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = () => setOpen(true);
    window.addEventListener(PROMO_OPEN_EVENT, handler);
    let t: ReturnType<typeof setTimeout> | undefined;
    try {
      if (!sessionStorage.getItem(STORAGE_KEY)) {
        t = setTimeout(() => setOpen(true), 2500);
      }
    } catch {
      t = setTimeout(() => setOpen(true), 2500);
    }
    return () => {
      window.removeEventListener(PROMO_OPEN_EVENT, handler);
      if (t) clearTimeout(t);
    };
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      style={{ background: "rgba(10,15,30,0.55)", backdropFilter: "blur(6px)" }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-card shadow-elegant animate-scale-in"
        style={{
          boxShadow: "0 30px 80px -20px rgba(13, 110, 158, 0.45)",
        }}
      >
        <button
          aria-label="Close"
          onClick={close}
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-foreground/70 shadow-soft hover:bg-white hover:text-foreground transition-smooth"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid sm:grid-cols-[1fr_1.2fr]">
          {/* Visual side */}
          <div
            className="relative hidden sm:block border-r border-[#c9a96a]/60 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--teal) 100%)",
            }}
          >
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 60%)" }} />
            <img
              src={doctor}
              alt={SITE.doctor}
              className="relative h-full w-full object-cover object-top"
            />
            {/* Soft elegant gradient overlay to ensure premium feel and readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
            
            {/* Premium Glassmorphism Text Card */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-elegant">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-bold text-white tracking-wide leading-snug drop-shadow-sm">
                  Prof. Brig (R) Dr. Shahid Mahmud
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div className="text-[9.5px] font-semibold uppercase tracking-wider text-white leading-relaxed drop-shadow-sm">
                  Pediatrician • Neonatologist • <span className="inline-block whitespace-nowrap">Child Neurologist</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="p-7 sm:p-9">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
              <MessageCircle className="h-3 w-3" /> Online Consultation
            </span>
            <h3 id="promo-title" className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Need <span className="text-gradient">Online Consultation?</span>
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Consult {SITE.doctor} directly on WhatsApp for expert pediatric & child neurology guidance — anytime, anywhere.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-foreground/80">
              {["35+ Years of pediatric experience", "Trusted by 10,000+ families", "Quick & private WhatsApp consultation"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <a
              href={waLink(ONLINE_CONSULT_MSG)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-soft hover:shadow-elegant transition-smooth"
              style={{ background: "var(--whatsapp)" }}
            >
              <MessageCircle className="h-4 w-4" /> Book Online Consultation
            </a>
            <button
              onClick={close}
              className="mt-2 w-full text-center text-xs text-muted-foreground hover:text-foreground transition-smooth"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}