import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Mail, Send, ShieldCheck, Stethoscope, Sparkles, CalendarCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { SITE, waLink, APPOINTMENT_MSG } from "@/lib/site";

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
      <PageHero
        eyebrow="Contact Us"
        title="A direct line to expert pediatric care"
        subtitle="Reach Prof. Brig (R) Dr. Shahid Mahmud's clinic for appointments, follow-ups, and trusted child healthcare guidance."
      />

      {/* PRIMARY CONTACT GRID */}
      <section className="container mx-auto px-4 pt-14 pb-10 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* LEFT — premium contact panel */}
          <aside className="lg:col-span-2">
            <div
              className="relative h-full overflow-hidden rounded-[2rem] p-8 sm:p-10 shadow-elegant border border-[#c9a96a]/30"
              style={{
                background:
                  "linear-gradient(155deg, var(--primary) 0%, var(--teal, var(--primary)) 100%)",
              }}
            >
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
                  backgroundSize: "44px 44px",
                }}
              />

              <div className="relative text-primary-foreground">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] border border-white/25">
                  <Sparkles className="h-3.5 w-3.5" /> Reach the Clinic
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold leading-tight sm:text-3xl">
                  Compassionate care, one message away.
                </h2>
                <p className="mt-3 text-sm text-primary-foreground/85 leading-relaxed">
                  Our team responds promptly during clinic hours to help you book consultations and answer questions about your child's care.
                </p>

                <ul className="mt-8 space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
                        Contact Numbers
                      </div>
                      <p className="mt-1 font-display text-base font-semibold">{SITE.phone}</p>
                      <p className="font-display text-base font-semibold">{SITE.phoneSecondary}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
                        Email
                      </div>
                      <a href={`mailto:${SITE.email}`} className="mt-1 block break-all font-display text-base font-semibold hover:underline">
                        {SITE.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
                        Clinic Address
                      </div>
                      <p className="mt-1 text-sm leading-relaxed">
                        Nelson Medical Complex, Abid Majeed Road, Rawalpindi.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/75">
                        Clinic Hours
                      </div>
                      <p className="mt-1 text-sm font-semibold">{SITE.hoursDays}</p>
                      <p className="text-sm text-primary-foreground/85">{SITE.hoursTime}</p>
                      <p className="text-sm text-primary-foreground/70">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>

                <a
                  href={waLink(APPOINTMENT_MSG)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
                >
                  <CalendarCheck className="h-4 w-4" /> Book Appointment <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </aside>

          {/* RIGHT — message form */}
          <div className="lg:col-span-3">
            <div className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-elegant sm:p-10">
              <div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
                  <span className="h-px w-8 bg-primary/40" /> Send a Message
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Tell us how we can <span className="text-gradient">help your child</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Share a few details and we'll respond within a few hours during clinic times.
                </p>

                {sent ? (
                  <div className="mt-8 rounded-2xl gradient-soft p-8 text-center">
                    <div className="mx-auto grid h-12 w-12 place-items-center rounded-full gradient-primary text-primary-foreground shadow-soft">
                      <ShieldCheck className="h-6 w-6" />
                    </div>
                    <p className="mt-4 font-display text-lg font-semibold text-primary">
                      Thank you — your message has been received.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Our clinic team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="mt-7 grid gap-4 sm:grid-cols-2"
                  >
                    <label className="block sm:col-span-1">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Your Name</span>
                      <input required placeholder="Full name" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15" />
                    </label>
                    <label className="block sm:col-span-1">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Phone Number</span>
                      <input required type="tel" placeholder="e.g. 0300 1234567" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15" />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Email (optional)</span>
                      <input type="email" placeholder="you@email.com" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15" />
                    </label>
                    <label className="block sm:col-span-2">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">Your Message</span>
                      <textarea required rows={5} placeholder="Tell us briefly about your child's concern..." className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15" />
                    </label>
                    <div className="sm:col-span-2 flex items-center justify-between gap-4 pt-1">
                      <p className="hidden text-xs text-muted-foreground sm:flex sm:items-center sm:gap-2">
                        <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Your details remain confidential.
                      </p>
                      <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth">
                        <Send className="h-4 w-4" /> Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP + VISIT */}
      <section className="container mx-auto px-4 pb-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-hidden rounded-[2rem] border border-border shadow-elegant">
            <iframe
              src="https://www.google.com/maps?q=Nelson+Medical+Complex+Abid+Majeed+Road+Rawalpindi&output=embed"
              width="100%"
              height="440"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nelson Medical Complex, Rawalpindi"
            />
          </div>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-soft">
            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-20 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
            <div className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                <Stethoscope className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">Visit Our Clinic</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Nelson Medical Complex, Abid Majeed Road, Rawalpindi.
              </p>
              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Clinic Hours</div>
                  <p className="mt-1 font-display font-semibold text-foreground">{SITE.hoursDays}</p>
                  <p className="text-muted-foreground">{SITE.hoursTime} • Sunday Closed</p>
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Contact Numbers</div>
                  <p className="mt-1 font-display font-semibold text-foreground">{SITE.phone}</p>
                  <p className="font-display font-semibold text-foreground">{SITE.phoneSecondary}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
