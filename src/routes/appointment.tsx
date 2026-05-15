import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, MessageCircle, CheckCircle2, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment | Dr. Shahid Mahmud — Pediatrician Rawalpindi" },
      { name: "description", content: "Book a pediatric, neonatal or child neurology appointment with Dr. Shahid Mahmud at Nelson Medical Complex, Rawalpindi." },
      { property: "og:title", content: "Book an Appointment — Dr. Shahid Mahmud" },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
  component: Page,
});

function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parent: "", child: "", age: "", phone: "", symptoms: "", date: "", time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.parent || !form.child || !form.phone) return;
    setSubmitted(true);
  };

  const update = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });

  const waMessage = `Hello, I'd like to book an appointment.%0AParent: ${form.parent}%0AChild: ${form.child} (Age: ${form.age})%0APhone: ${form.phone}%0AConcern: ${form.symptoms}%0APreferred: ${form.date} ${form.time}`;

  return (
    <>
      <PageHero eyebrow="Appointment" title="Book your child's appointment" subtitle="Fill in the form below — we'll confirm your slot via call or WhatsApp." />

      <section className="container mx-auto grid gap-10 px-4 py-16 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-10">
            {submitted ? (
              <div className="text-center py-10 animate-fade-up">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full gradient-primary text-primary-foreground">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-bold">Request received!</h2>
                <p className="mt-3 text-muted-foreground">We've received your appointment request. Our team will call you shortly to confirm the schedule.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <a href={`https://wa.me/${SITE.whatsapp}?text=${waMessage}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-soft" style={{ background: "var(--whatsapp)" }}>
                    <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                  </a>
                  <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary transition-smooth">
                    <Phone className="h-4 w-4" /> Call Now
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Parent Name *" value={form.parent} onChange={update("parent")} required />
                <Field label="Child Name *" value={form.child} onChange={update("child")} required />
                <Field label="Child Age" placeholder="e.g. 3 years" value={form.age} onChange={update("age")} />
                <Field label="Phone Number *" type="tel" value={form.phone} onChange={update("phone")} required />
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Symptoms / Concern</label>
                  <textarea rows={4} value={form.symptoms} onChange={update("symptoms")} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none" placeholder="Briefly describe your child's symptoms..." />
                </div>
                <Field label="Preferred Date" type="date" value={form.date} onChange={update("date")} />
                <Field label="Preferred Time" type="time" value={form.time} onChange={update("time")} />

                <div className="sm:col-span-2 flex flex-wrap gap-3 pt-2">
                  <button type="submit" className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth">
                    Submit Request
                  </button>
                  <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-smooth" style={{ background: "var(--whatsapp)" }}>
                    <MessageCircle className="h-4 w-4" /> WhatsApp Booking
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
            <div className="flex items-center gap-2 text-destructive font-semibold">
              <AlertCircle className="h-5 w-5" /> Emergency?
            </div>
            <p className="mt-2 text-sm text-muted-foreground">For urgent pediatric concerns, please call directly.</p>
            <a href={`tel:${SITE.phoneIntl}`} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-destructive px-5 py-3 text-sm font-semibold text-destructive-foreground shadow-soft">
              <Phone className="h-4 w-4" /> Emergency Call
            </a>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h3 className="font-display font-semibold">Clinic Hours</h3>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.hours}</p>
            <p className="mt-1 text-sm text-muted-foreground">Sunday: Closed</p>
          </div>
          <div className="rounded-2xl glass p-6">
            <h3 className="font-display font-semibold">Visit Clinic</h3>
            <p className="mt-2 text-sm text-muted-foreground">{SITE.address}</p>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field(props: { label: string; value: string; onChange: any; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-2">{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        onChange={props.onChange}
        required={props.required}
        placeholder={props.placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
      />
    </div>
  );
}
