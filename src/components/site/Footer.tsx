import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Facebook, Instagram, Clock, MessageCircle } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";
import logoAsset from "@/assets/logo-full.png.asset.json";

const logo = logoAsset.url;

export function Footer() {
  return (
    <footer
      className="relative mt-24 overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.72 0.18 50) 0%, oklch(0.65 0.21 42) 50%, oklch(0.58 0.22 38) 100%)",
      }}
    >
      {/* Subtle premium accents */}
      <div className="pointer-events-none absolute -top-40 -left-32 h-[32rem] w-[32rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "oklch(0.85 0.14 60)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "oklch(0.45 0.18 32)" }} />
      {/* Subtle medical grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Top hairline */}
      <div className="h-px w-full bg-white/20" />

      <div className="container relative mx-auto grid gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8 text-[15px]">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="inline-flex items-center rounded-2xl bg-white/95 px-4 py-3 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.25)] ring-1 ring-white/40 backdrop-blur">
            <img
              src={logo}
              alt="Dr Shahid's Child & Neuro Clinic"
              className="h-12 sm:h-14 w-auto object-contain"
            />
          </div>
          <p className="mt-5 text-[13px] uppercase tracking-[0.22em] text-white/70 font-medium">
            Pediatrician • Neonatologist • Child Neurologist
          </p>
          <p className="mt-3 text-[15px] text-white/80 leading-relaxed">{SITE.tagline}</p>
          <div className="mt-5 flex gap-2">
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 text-white/90 backdrop-blur hover:bg-white hover:text-primary hover:-translate-y-0.5 transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/25 bg-white/10 text-white/90 backdrop-blur hover:bg-white hover:text-primary hover:-translate-y-0.5 transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-[0.18em] mb-5 text-white">Quick Links</h4>
          <ul className="space-y-3 text-[15px] text-white/80">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="inline-flex items-center gap-2 hover:text-white hover:translate-x-0.5 transition-smooth">
                  <span className="h-1 w-1 rounded-full bg-white/50" />
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-[0.18em] mb-5 text-white">Contact</h4>
          <ul className="space-y-3.5 text-[15px] text-white/80">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-white mt-1 shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-white mt-1 shrink-0" />
              <span>
                <a href={`tel:${SITE.phoneIntl}`} className="hover:text-white transition-smooth">{SITE.phone}</a>
                <span className="mx-2 text-white/40">|</span>
                <a href={`tel:${SITE.phoneSecondaryIntl}`} className="hover:text-white transition-smooth">{SITE.phoneSecondary}</a>
              </span>
            </li>
          </ul>
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-[0_8px_24px_-6px_rgba(0,0,0,0.3)] ring-1 ring-white/40 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-6px_rgba(0,0,0,0.4)] transition-smooth">
            <MessageCircle className="h-4 w-4" /> Book Consultation
          </a>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-display font-semibold text-sm uppercase tracking-[0.18em] mb-5 text-white">Working Hours</h4>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md shadow-[0_8px_30px_-8px_rgba(0,0,0,0.25)]">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary shadow-inner">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Open</div>
                <div className="font-display font-semibold text-white">{SITE.hoursDays}</div>
              </div>
            </div>
            <div className="mt-4 border-t border-white/15 pt-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Hours</div>
              <div className="mt-1 font-display text-lg font-semibold text-white">{SITE.hoursTime}</div>
              <div className="mt-1 text-sm text-white/70">Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/70 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.doctor}. All rights reserved.</p>
          <p>Premium pediatric care • Rawalpindi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
