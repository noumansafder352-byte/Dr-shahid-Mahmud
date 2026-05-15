import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr. Shahid Mahmud | Pediatrician Rawalpindi" },
      { name: "description", content: "Contact Dr. Shahid Mahmud at Nelson Medical Complex, Abid Majeed Road, Rawalpindi. Call, WhatsApp or visit our clinic." },
      { property: "og:title", content: "Contact — Dr. Shahid Mahmud" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact Us" title="Get in touch" subtitle="We're here to help. Reach us via phone, WhatsApp, or visit Nelson Medical Complex in Rawalpindi." />

      <section className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          {[
            { icon: Phone, title: "Call Us", line: SITE.phone, href: `tel:${SITE.phoneIntl}` },
            { icon: MessageCircle, title: "WhatsApp", line: "Quick consultation & booking", href: waLink() },
            { icon: MapPin, title: "Clinic Address", line: SITE.address },
            { icon: Clock, title: "Working Hours", line: SITE.hours + " • Sunday closed" },
          ].map((c, i) => (
            <a key={i} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
               className="block rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground"><c.icon className="h-5 w-5" /></div>
                <div>
                  <h3 className="font-display font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.line}</p>
                </div>
              </div>
            </a>
          ))}

          <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              src="https://www.google.com/maps?q=Nelson+Medical+Complex+Abid+Majeed+Road+Rawalpindi&output=embed"
              width="100%" height="280" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic location"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
          <h2 className="font-display text-2xl font-bold">Send us a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">We typically respond within a few hours during clinic times.</p>
          {sent ? (
            <div className="mt-8 rounded-2xl gradient-soft p-6 text-center">
              <p className="font-semibold text-primary">Thank you! Your message has been received.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="mt-6 grid gap-4">
              <input required placeholder="Your Name" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input required type="tel" placeholder="Phone Number" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <input type="email" placeholder="Email (optional)" className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <textarea required rows={5} placeholder="Your message..." className="rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth">
                <Mail className="h-4 w-4" /> Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
