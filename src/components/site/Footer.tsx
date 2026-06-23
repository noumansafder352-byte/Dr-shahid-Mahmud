import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Clock, MessageCircle } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";
import logoAsset from "@/assets/dr-shahid-logo-horizontal.png.asset.json";

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const logo = "/image/dr-shahid-logo-horizontal.png";

export function Footer() {
  return (
    <footer className="relative mt-24 px-4 pb-8 lg:px-8">
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-border/60 shadow-[0_30px_80px_-30px_rgba(193,108,42,0.35)]"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.985 0.012 70) 0%, oklch(0.965 0.028 65) 45%, oklch(0.945 0.045 55) 100%)",
        }}
      >
        {/* Soft warm accents */}
        <div
          className="pointer-events-none absolute -top-32 -right-24 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "oklch(0.88 0.10 55)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-[26rem] w-[26rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "oklch(0.92 0.06 75)" }}
        />

        <div className="relative grid gap-12 px-6 py-10 sm:px-10 lg:grid-cols-4 lg:gap-10 lg:px-14 lg:py-12 text-[15px]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Dr Shahid's Child & Neuro Clinic"
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-5 text-[15px] leading-relaxed text-foreground/75 max-w-xs">
              Expert Pediatric, Neonatal and Child Neurology Care with over 35 years of experience.
            </p>
            <div className="mt-6 flex gap-2.5">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary/20 bg-white/70 text-primary shadow-soft backdrop-blur hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-smooth"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary/20 bg-white/70 text-primary shadow-soft backdrop-blur hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-smooth"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary/20 bg-white/70 text-primary shadow-soft backdrop-blur hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-smooth"
              >
                <TiktokIcon className="h-4 w-4" />
              </a>
              <a
                href={SITE.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="grid h-10 w-10 place-items-center rounded-full border border-primary/20 bg-white/70 text-primary shadow-soft backdrop-blur hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 transition-smooth"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[15px] text-foreground/75">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="group inline-flex items-center gap-2.5 hover:text-primary transition-smooth"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:scale-125 transition-smooth" />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground mb-5">
              Contact
            </h4>
            <ul className="space-y-4 text-[15px] text-foreground/75">
              <li className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="flex flex-col">
                  <span>{SITE.phone}</span>
                  <span>{SITE.phoneSecondary}</span>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <a href={`mailto:${SITE.email}`} className="break-all hover:text-primary transition-smooth">
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="leading-relaxed">
                  Nelson Medical Complex,<br />
                  Abid Majeed Road,<br />
                  Rawalpindi.
                </span>
              </li>
            </ul>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
            >
              <MessageCircle className="h-4 w-4" /> Book Consultation
            </a>
          </div>

          {/* Clinic Hours */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-foreground mb-5">
              Clinic Hours
            </h4>
            <div className="rounded-2xl border border-primary/15 bg-white/70 p-5 backdrop-blur-md shadow-soft">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/55">Open</div>
                  <div className="font-display font-semibold text-foreground">{SITE.hoursDays}</div>
                </div>
              </div>
              <div className="mt-4 border-t border-border/60 pt-4">
                <div className="text-[11px] uppercase tracking-[0.2em] text-foreground/55">Hours</div>
                <div className="mt-1 font-display text-lg font-semibold text-primary">{SITE.hoursTime}</div>
                <div className="mt-1 text-sm text-foreground/60">Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright strip */}
        <div className="relative border-t border-border/60 bg-white/40 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-foreground/65 sm:flex-row sm:px-10 lg:px-14">
            <p>© {new Date().getFullYear()} {SITE.short}. All Rights Reserved.</p>
            <p>
              Website Designed &amp; Developed by{" "}
              <span className="font-semibold text-primary">Nexen Strategy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
