import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Award, Heart, Brain, ShieldCheck, Sparkles, Star, ArrowRight, CheckCircle2, MapPin, Activity } from "lucide-react";
import doctorHero from "@/assets/dr-shahid-portrait.png";
import careIllu from "@/assets/pediatric-care.jpg";
import svcCheckup from "@/assets/svc-checkup.jpg";
import svcPneumonia from "@/assets/svc-pneumonia.jpg";
import svcVaccine from "@/assets/svc-vaccine.jpg";
import svcNeurology from "@/assets/svc-neurology.jpg";
import svcNewborn from "@/assets/svc-newborn.jpg";
import svcNutrition from "@/assets/svc-nutrition.jpg";
import svcAsthma from "@/assets/svc-asthma.jpg";
import svcDevelopment from "@/assets/svc-development.jpg";
import { SITE, waLink } from "@/lib/site";
import { Counter } from "@/components/site/Counter";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
import { GoogleReviews } from "@/components/site/GoogleReviews";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Pediatrician in Rawalpindi | Prof. Dr. Shahid Mahmud" },
      { name: "description", content: "Prof. Brig (R) Dr. Shahid Mahmud — Pediatrician, Neonatologist & Child Neurologist at Nelson Medical Complex, Rawalpindi. Compassionate, evidence-based child care." },
      { property: "og:title", content: "Best Pediatrician in Rawalpindi | Dr. Shahid Mahmud" },
      { property: "og:description", content: "Expert pediatric, neonatal and child neurology care for your child." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { img: svcCheckup, tag: "Pediatrics", title: "Frequent Fever & Cough", desc: "Modern treatment for recurring fever, cough and flu." },
  { img: svcPneumonia, tag: "Pediatrics", title: "Pneumonia Treatment", desc: "Specialized care for chest infections of all severity." },
  { img: svcVaccine, tag: "Preventive", title: "Vaccination Services", desc: "Complete EPI & international vaccination schedule." },
  { img: svcNeurology, tag: "Neurology", title: "Child Neurology", desc: "Seizures, epilepsy & developmental neurological care." },
  { img: svcNewborn, tag: "Neonatology", title: "Newborn & Neonatal Care", desc: "Expert care for newborns and high-risk neonates." },
  { img: svcNutrition, tag: "Wellness", title: "Growth & Nutrition", desc: "Personalized nutrition for healthy development." },
  { img: svcAsthma, tag: "Pediatrics", title: "Asthma & Allergies", desc: "Comprehensive management of asthma and allergies." },
  { img: svcDevelopment, tag: "Development", title: "Developmental Care", desc: "Behavioral & developmental evaluations with compassion." },
];

const why = [
  { icon: Award, title: "35+ Years Experience", desc: "Decades of clinical excellence in pediatrics and neurology." },
  { icon: ShieldCheck, title: "Evidence-Based Care", desc: "Modern, internationally aligned protocols for every patient." },
  { icon: Heart, title: "Compassionate Approach", desc: "Family-centered consultations focused on parent confidence." },
  { icon: Brain, title: "Pediatric Neurology Expert", desc: "Specialized in seizures, epilepsy and developmental disorders." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="absolute -top-20 -left-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-teal/20 blur-3xl animate-blob" />
        <div className="container relative mx-auto grid items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Premium Pediatric Care
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Expert <span className="text-gradient">Pediatric & Child Neurology</span> Care for Your Child
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {SITE.doctor} provides compassionate, evidence-based healthcare for newborns, infants, children and adolescents at {SITE.clinic}, Rawalpindi.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth">
                <MessageCircle className="h-4 w-4" /> Book Consultation
              </a>
              <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-smooth">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-background bg-gradient-to-br from-primary to-teal" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-xs"><strong className="text-foreground">10,000+</strong> happy parents</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute -inset-6 rounded-[2rem] gradient-primary opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] glass shadow-elegant">
              <img src={doctorHero} alt={`${SITE.doctor} — Best Pediatrician in Rawalpindi`} width={1024} height={1280} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -left-4 bottom-8 hidden rounded-2xl glass p-4 shadow-soft sm:flex sm:items-center sm:gap-3 animate-float">
              <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground"><Award className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Qualification</div>
                <div className="text-sm font-semibold">MBBS, FCPS Pediatrics</div>
              </div>
            </div>
            <div className="absolute -right-4 top-8 hidden rounded-2xl glass p-4 shadow-soft sm:flex sm:items-center sm:gap-3 animate-float" style={{ animationDelay: "1.5s" }}>
              <div className="grid h-10 w-10 place-items-center rounded-full" style={{ background: "var(--teal)", color: "var(--teal-foreground)" }}><Brain className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Specialty</div>
                <div className="text-sm font-semibold">Child Neurologist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTERS */}
      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-3xl glass p-6 shadow-soft sm:p-10 lg:grid-cols-4">
          {[
            { n: 35, s: "+", l: "Years of Experience" },
            { n: 10000, s: "+", l: "Happy Patients" },
            { n: 24, s: "/7", l: "Online Consultation" },
            { n: 100, s: "%", l: "Trusted Child Care Specialist" },
          ].map((c, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-3xl font-bold text-gradient sm:text-5xl">
                <Counter to={c.n} suffix={c.s} />
              </div>
              <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">{c.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <SectionHeading center eyebrow="Our Services" title="Complete pediatric care under one roof" subtitle="From newborn care to child neurology, we provide expert medical attention tailored to every stage of your child's growth." />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1.5 hover:shadow-elegant">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary shadow-soft">
                  {s.tag}
                </span>
                <h3 className="absolute bottom-3 left-4 right-4 font-display text-lg font-semibold text-white drop-shadow">
                  {s.title}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href={waLink(`Hello Doctor, I'd like to book a consultation for: ${s.title}.`)} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                  <MessageCircle className="h-4 w-4" /> Book Consultation <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-smooth">
            View all services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] gradient-primary opacity-10 blur-2xl" />
            <img src={careIllu} alt="Compassionate child care" loading="lazy" width={1200} height={900} className="relative rounded-3xl shadow-elegant" />
          </div>
          <div>
            <SectionHeading eyebrow="Why Choose Dr. Shahid" title="Trusted by thousands of parents in Rawalpindi" subtitle="A military medical background combined with decades of pediatric expertise — care your family can rely on." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {why.map((w, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-smooth hover:shadow-elegant">
                  <div className="grid h-10 w-10 place-items-center rounded-lg gradient-primary text-primary-foreground"><w.icon className="h-5 w-5" /></div>
                  <h4 className="mt-3 font-display font-semibold">{w.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading center eyebrow="Parent Testimonials" title="Real stories from real families" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-card p-6 shadow-soft border border-border">
                <div className="flex gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-foreground/80">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground font-semibold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Verified parent</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS TIPS / TRUST STRIP */}
      <section className="container mx-auto px-4 py-20 lg:px-8">
        <SectionHeading center eyebrow="Child Wellness" title="Caring for your child's complete well-being" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            { icon: Heart, title: "Compassionate Care", desc: "Every child treated like our own — with patience, kindness and respect." },
            { icon: ShieldCheck, title: "Early Diagnosis Matters", desc: "Catching issues early leads to better outcomes for your child's future." },
            { icon: Activity, title: "Emergency Consultation", desc: "Urgent pediatric concerns? Reach out anytime via call or WhatsApp." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--accent)" }}>
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Trusted by 10,000+ families
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />

      {/* MAP */}
      <section className="container mx-auto px-4 pb-16 lg:px-8">
        <SectionHeading center eyebrow="Visit Clinic" title="Find us at Nelson Medical Complex" subtitle="Abid Majeed Road, Rawalpindi, Pakistan — easy to reach, comfortable to visit." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              src="https://www.google.com/maps?q=Nelson+Medical+Complex+Abid+Majeed+Road+Rawalpindi&output=embed"
              width="100%" height="420" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Nelson Medical Complex, Rawalpindi"
            />
          </div>
          <div className="rounded-3xl glass p-7 shadow-soft flex flex-col gap-5">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground"><MapPin className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold">Clinic Address</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{SITE.address}</p>
            </div>
            <div>
              <h4 className="font-display text-sm font-semibold">Clinic Hours</h4>
              <p className="mt-1 text-sm text-muted-foreground">{SITE.hours}</p>
              <p className="text-sm text-muted-foreground">Sunday: Closed</p>
            </div>
            <a href={waLink()} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth">
              <MessageCircle className="h-4 w-4" /> Book Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
