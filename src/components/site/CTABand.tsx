import { Phone, MessageCircle, Stethoscope } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function CTABand() {
  return (
    <section className="container mx-auto px-4 py-14 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] gradient-primary p-10 text-center shadow-elegant sm:p-16">
        {/* Decorative ambient glows */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white border border-white/25">
            <Stethoscope className="h-3.5 w-3.5" /> Premium Pediatric Care
          </span>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Need to consult Dr. Shahid Mahmud today?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/90 sm:text-lg leading-relaxed">
            Compassionate, expert pediatric care for your child, book an appointment or speak with us instantly.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
            >
              <MessageCircle className="h-4 w-4" /> Book Consultation
            </a>
            <a
              href={`tel:${SITE.phoneIntl}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white border border-white/40 hover:bg-white/20 hover:-translate-y-0.5 transition-smooth"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
