import { Link } from "@tanstack/react-router";
import { Phone, Calendar, MessageCircle } from "lucide-react";
import { SITE, waLink } from "@/lib/site";

export function CTABand() {
  return (
    <section className="container mx-auto px-4 py-16 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 text-center shadow-elegant sm:p-14">
        <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl">
            Need to consult Dr. Shahid Mahmud today?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Compassionate, expert pediatric care for your child — book an appointment or speak with us instantly.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft hover:shadow-elegant transition-smooth">
              <Calendar className="h-4 w-4" /> Book Appointment
            </Link>
            <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:bg-white/25 transition-smooth">
              <Phone className="h-4 w-4" /> Call {SITE.phone}
            </a>
            <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-6 py-3 text-sm font-semibold text-white border border-white/30 hover:bg-white/25 transition-smooth">
              <MessageCircle className="h-4 w-4" /> Online Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
