import { createFileRoute, Link } from "@tanstack/react-router";
import { Syringe, ShieldCheck, Calendar, HeartPulse, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
import { useState } from "react";

export const Route = createFileRoute("/vaccination")({
  head: () => ({
    meta: [
      { title: "Child Vaccination in Rawalpindi | Dr. Shahid Mahmud" },
      { name: "description", content: "Complete child vaccination schedule, EPI and international vaccines administered safely under expert pediatric supervision in Rawalpindi." },
      { property: "og:title", content: "Child Vaccination — Dr. Shahid Mahmud" },
      { property: "og:url", content: "/vaccination" },
    ],
    links: [{ rel: "canonical", href: "/vaccination" }],
  }),
  component: Page,
});

const schedule = [
  { age: "At Birth", vaccines: ["BCG", "Hepatitis B", "OPV-0"] },
  { age: "6 Weeks", vaccines: ["Pentavalent-1", "OPV-1", "PCV-1", "Rotavirus-1"] },
  { age: "10 Weeks", vaccines: ["Pentavalent-2", "OPV-2", "PCV-2", "Rotavirus-2"] },
  { age: "14 Weeks", vaccines: ["Pentavalent-3", "OPV-3", "PCV-3", "IPV"] },
  { age: "9 Months", vaccines: ["Measles-1"] },
  { age: "15 Months", vaccines: ["Measles-2", "MMR"] },
  { age: "4-6 Years", vaccines: ["DTP Booster", "OPV Booster"] },
];

const benefits = [
  { icon: ShieldCheck, title: "Disease Prevention", desc: "Protects against polio, measles, hepatitis, pneumonia and more." },
  { icon: HeartPulse, title: "Lifelong Immunity", desc: "Builds strong immune defenses for healthy childhood and adulthood." },
  { icon: Syringe, title: "Community Protection", desc: "Helps protect newborns and vulnerable children in your community." },
  { icon: Calendar, title: "Safe & Scheduled", desc: "Vaccines administered as per WHO and Pakistan EPI guidelines." },
];

const faqs = [
  { q: "Are vaccines safe for my child?", a: "Yes. All vaccines used are extensively tested and approved by WHO and national health authorities. Mild side effects like low-grade fever are normal." },
  { q: "What if my child missed a vaccine?", a: "Catch-up schedules are available. Bring your vaccination card and we'll create a safe plan to bring your child up to date." },
  { q: "Should sick children be vaccinated?", a: "Mild illness is usually fine. For high fever or serious illness, vaccination may be briefly delayed. We'll guide you case-by-case." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Vaccination" title="Protect your child with safe immunization" subtitle="Complete EPI and international vaccines, administered with care and clear parental counselling." />

      <section className="container mx-auto px-4 py-16 lg:px-8">
        <SectionHeading center eyebrow="Why Vaccinate" title="Immunization saves lives" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-soft text-center transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground"><b.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 lg:px-8">
        <SectionHeading center eyebrow="Schedule" title="Recommended vaccination schedule" subtitle="Standard child immunization timeline based on Pakistan EPI guidelines." />
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          {schedule.map((s, i) => (
            <div key={i} className={`grid grid-cols-3 items-center gap-4 px-6 py-4 ${i !== 0 ? "border-t border-border" : ""}`}>
              <div className="font-display font-semibold text-primary">{s.age}</div>
              <div className="col-span-2 flex flex-wrap gap-2">
                {s.vaccines.map((v) => (
                  <span key={v} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{v}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">For your child's personalized schedule, please consult Dr. Shahid Mahmud.</p>
        <div className="mt-8 text-center">
          <Link to="/appointment" className="inline-flex rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth">Book vaccination appointment</Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:px-8">
        <SectionHeading center eyebrow="FAQ" title="Vaccination questions answered" />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => <FAQ key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      <CTABand />
    </>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="font-display font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
}
