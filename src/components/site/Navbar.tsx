import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-smooth",
        scrolled ? "glass shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl gradient-primary text-primary-foreground font-bold shadow-soft">
            DS
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-base font-bold text-foreground">{SITE.short}</div>
            <div className="text-[11px] text-muted-foreground">Pediatrician • Neonatologist</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 hover:text-primary hover:bg-secondary transition-smooth"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneIntl}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:border-primary hover:text-primary transition-smooth"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            to="/appointment"
            className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth"
          >
            <Calendar className="h-4 w-4" /> Book Appointment
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-border bg-card"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden animate-fade-up border-t border-border bg-card">
          <div className="container mx-auto flex flex-col px-4 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="py-3 text-sm font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/appointment"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Calendar className="h-4 w-4" /> Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
