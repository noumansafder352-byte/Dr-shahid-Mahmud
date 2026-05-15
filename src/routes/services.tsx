import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, Stethoscope, Syringe, Wind, Sparkles, Apple, Brain, Pill, Baby, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Pediatric Services in Rawalpindi | Dr. Shahid Mahmud" },
      { name: "description", content: "Complete pediatric services: vaccination, neonatal care, child neurology, asthma, allergies, growth & nutrition. Trusted child specialist in Rawalpindi." },
      { property: "og:title", content: "Pediatric Services — Dr. Shahid Mahmud" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Activity, title: "Frequent Fever & Cough Treatment", desc: "Accurate diagnosis and modern protocols for recurring fever, cough, cold and flu." },
  { icon: Stethoscope, title: "Pneumonia Treatment", desc: "Comprehensive care for pediatric pneumonia and chest infections of all severity." },
  { icon: Syringe, title: "Vaccination Services", desc: "Complete EPI plus international vaccines with detailed safety counselling for parents." },
  { icon: Wind, title: "Asthma Treatment", desc: "Long-term asthma control plans, inhaler technique training and trigger management." },
  { icon: Sparkles, title: "Allergy Treatment", desc: "Diagnosis and management of food, skin and environmental allergies in children." },
  { icon: Apple, title: "Child Growth & Nutrition", desc: "Personalized nutrition guidance and growth monitoring for healthy development." },
  { icon: Brain, title: "Fits / Seizure Treatment", desc: "Expert pediatric epilepsy and seizure management with EEG evaluation guidance." },
  { icon: Pill, title: "Stomach & Digestive Problems", desc: "Treatment for diarrhea, constipation, vomiting, reflux and abdominal concerns." },
  { icon: Baby, title: "Newborn Baby Care", desc: "Routine and high-risk newborn care including premature baby follow-up." },
  { icon: Heart, title: "Mental & Developmental Care", desc: "Compassionate evaluation of behavioral, emotional and developmental concerns." },
  { icon: Brain, title: "Child Neurology Consultation", desc: "Specialized neurological assessment for delays, tics, headaches and more." },
  { icon: ShieldCheck, title: "Neonatal Care", desc: "Advanced neonatal care for newborns with medical complications or risk." },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Comprehensive pediatric care" subtitle="From routine check-ups to specialized neurological care — every service designed around your child's well-being." />

      <section className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary/5 transition-smooth group-hover:bg-primary/10" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <Link to="/appointment" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Book consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
