import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Clock } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logo from "@/assets/clinic-logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container mx-auto grid gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dr Shahid's Child & Neuro Clinic" width={48} height={48} className="h-12 w-12 rounded-full object-contain bg-white" />
            <div>
              <div className="font-display font-bold">{SITE.short}</div>
              <div className="text-xs text-muted-foreground">{SITE.qualification}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{SITE.tagline}</p>
          <div className="mt-4 flex gap-2">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-card border border-border hover:text-primary hover:border-primary transition-smooth">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-primary transition-smooth">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />{SITE.address}</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" /><a href={`tel:${SITE.phoneIntl}`} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex gap-3"><Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />{SITE.hours}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Visit Clinic</h4>
          <p className="text-sm text-muted-foreground mb-3">{SITE.clinic}, Rawalpindi</p>
          <Link to="/appointment" className="inline-flex items-center rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth">
            Book Appointment
          </Link>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} {SITE.doctor}. All rights reserved.</p>
          <p>Premium pediatric care • Rawalpindi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
