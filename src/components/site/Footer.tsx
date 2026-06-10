import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Facebook, Instagram, Clock, MessageCircle } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";
import logoAsset from "@/assets/logo-v2.png.asset.json";

const logo = logoAsset.url;

export function Footer() {
  return (
    <footer
      className="relative mt-24 overflow-hidden text-white/85"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.20 0.04 35) 0%, oklch(0.24 0.08 40) 45%, oklch(0.42 0.18 45) 100%)",
      }}
    >
      {/* Brand glow accents */}
      <div className="pointer-events-none absolute -top-32 -left-20 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-primary)" }} />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "oklch(0.65 0.22 40)" }} />
      {/* Top rainbow accent strip */}
      <div className="h-1 w-full" style={{ background: "var(--gradient-rainbow)" }} />

      <div className="container relative mx-auto grid gap-10 px-4 py-16 lg:grid-cols-4 lg:px-8 text-[15px]">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src={logo}
            alt="Dr Shahid's Child & Neuro Clinic"
            className="h-20 w-auto object-contain"
            style={{ mixBlendMode: "screen" }}
          />
          <p className="mt-5 text-[15px] text-white/80 leading-relaxed">{SITE.tagline}</p>
          <div className="mt-5 flex gap-2">
            <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:border-white/40 hover:-translate-y-0.5 transition-smooth">
              <Facebook className="h-4 w-4" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/5 text-white/80 hover:text-white hover:border-white/40 hover:-translate-y-0.5 transition-smooth">
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-semibold text-base mb-5 text-white">Quick Links</h4>
          <ul className="space-y-3 text-[15px] text-white/70">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="inline-flex items-center gap-2 hover:text-white transition-smooth">
                  <span className="h-1 w-1 rounded-full bg-white/40" />
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-base mb-5 text-white">Contact</h4>
          <ul className="space-y-3.5 text-[15px] text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 text-white mt-1 shrink-0" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 text-white mt-1 shrink-0" />
              <span>
                <a href={`tel:${SITE.phoneIntl}`} className="hover:text-white transition-smooth">{SITE.phone}</a>
                <span className="mx-2 text-white/30">|</span>
                <a href={`tel:${SITE.phoneSecondaryIntl}`} className="hover:text-white transition-smooth">{SITE.phoneSecondary}</a>
              </span>
            </li>
          </ul>
          <a href={waLink()} target="_blank" rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth">
            <MessageCircle className="h-4 w-4" /> Book Consultation
          </a>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-display font-semibold text-base mb-5 text-white">Working Hours</h4>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Open</div>
                <div className="font-display font-semibold text-white">{SITE.hoursDays}</div>
              </div>
            </div>
            <div className="mt-4 border-t border-white/10 pt-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Hours</div>
              <div className="mt-1 font-display text-lg font-semibold text-white">{SITE.hoursTime}</div>
              <div className="mt-1 text-sm text-white/60">Sunday: Closed</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.doctor}. All rights reserved.</p>
          <p>Premium pediatric care • Rawalpindi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
