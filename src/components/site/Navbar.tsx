import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, MapPin, Facebook, Instagram } from "lucide-react";
import { NAV, SITE, waLink } from "@/lib/site";
import logoAsset from "@/assets/logo-v2.png.asset.json";
import { cn } from "@/lib/utils";

const logo = logoAsset.url;

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
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)] border-b border-border/60"
          : "bg-background/80 backdrop-blur-md"
      )}
    >
      {/* TOP UTILITY BAR */}
      <div className="hidden md:block border-b border-border/60 bg-card/60 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-2 text-xs text-foreground/70 lg:px-8">
          <a
            href="https://www.google.com/maps?q=Nelson+Medical+Complex+Abid+Majeed+Road+Rawalpindi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-smooth"
          >
            <MapPin className="h-3.5 w-3.5 text-primary" />
            <span>Nelson Medical Complex, Abid Majeed Road, Rawalpindi</span>
          </a>
          <div className="flex items-center gap-2">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-7 w-7 place-items-center rounded-full border border-border bg-background/60 text-foreground/70 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-smooth"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-7 w-7 place-items-center rounded-full border border-border bg-background/60 text-foreground/70 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-smooth"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Dr Shahid's Child & Neuro Clinic"
            className="h-16 w-auto sm:h-20 lg:h-24 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "nav-link-active" }}
              className="nav-link relative px-4 py-2 text-[15px] font-medium text-foreground/80 transition-smooth"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
          >
            <MessageCircle className="h-4 w-4" /> Book Consultation
          </a>
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
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
