import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Award, ShieldCheck, Brain, Globe2, BookOpen, MapPin, Phone,
  MessageCircle, Clock, Baby, Activity, HeartPulse, Sparkles,
  Footprints, Moon, Apple, Users, Microscope, Stethoscope,
  Wind, GraduationCap, HeartHandshake, FlaskConical, CheckCircle2,
  Calendar, ArrowRight, Trophy,
} from "lucide-react";
import doctorHeroAsset from "@/assets/about-consultant-portrait.jpg.asset.json";
import aboutBg from "@/assets/about-bg.jpg";
import aboutStoryAsset from "@/assets/about-story.jpg.asset.json";
import { SITE, waLink } from "@/lib/site";

const doctorHero = doctorHeroAsset.url;
const careImg = aboutStoryAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Prof. Brig (R) Dr. Shahid Mahmud — Pediatrician & Child Neurologist" },
      { name: "description", content: "35+ years caring for children. Internationally trained Pediatrician, Neonatologist & Child Neurologist serving families across Pakistan." },
      { property: "og:title", content: "About Prof. Brig (R) Dr. Shahid Mahmud" },
      { property: "og:description", content: "Premium pediatric, neonatal & child neurology care. 35+ years of trusted expertise." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const trustHighlights = [
  { icon: Award, label: "35+ Years Experience" },
  { icon: Users, label: "10,000+ Children Treated" },
  { icon: Globe2, label: "Internationally Trained" },
  { icon: HeartHandshake, label: "Trusted Across Pakistan" },
];

const expertise = [
  { icon: Brain, title: "Pediatric Neurology", desc: "Advanced diagnosis and care for neurological disorders in children." },
  { icon: Activity, title: "Epilepsy & Seizure Disorders", desc: "Long-term management plans grounded in modern neurology." },
  { icon: Footprints, title: "Developmental Delays", desc: "Early assessment and individualized intervention pathways." },
  { icon: HeartPulse, title: "Cerebral Palsy", desc: "Multidisciplinary rehabilitation and family support." },
  { icon: Baby, title: "Neonatal Medicine", desc: "Specialist care for premature and high-risk newborns." },
  { icon: Stethoscope, title: "Newborn Care", desc: "Comprehensive monitoring through the first critical months." },
  { icon: Apple, title: "Child Growth & Nutrition", desc: "Healthy growth tracking with tailored nutrition plans." },
  { icon: Wind, title: "Asthma & Allergy Management", desc: "Modern protocols for breathing and allergy concerns." },
  { icon: BookOpen, title: "Behavioral & Learning Difficulties", desc: "Compassionate evaluation and parent guidance." },
];

const conditions = [
  "Epilepsy", "Seizure Disorders", "Cerebral Palsy", "Developmental Delays",
  "Learning Difficulties", "Behavioral Disorders", "Growth Concerns", "Asthma",
  "Allergies", "Newborn Care Concerns", "Feeding Problems", "Sleep Disorders",
  "Childhood Infections", "Neuromotor Disorders", "Developmental Regression",
];

const trustReasons = [
  { icon: Award, title: "35+ Years of Clinical Experience", desc: "Decades of trusted pediatric care and child health expertise." },
  { icon: GraduationCap, title: "International Specialist Training", desc: "Advanced medical education and specialist training abroad." },
  { icon: Brain, title: "Child Neurology Expertise", desc: "Dedicated care for neurological and developmental disorders." },
  { icon: HeartHandshake, title: "Family-Centered Care", desc: "Treatment plans tailored to each child and family." },
  { icon: FlaskConical, title: "Evidence-Based Medicine", desc: "Modern medical practices supported by current research." },
  { icon: Users, title: "Compassionate Guidance", desc: "Supporting parents throughout every stage of treatment." },
];

const journeyRows: {
  title: string;
  institution: string;
  desc: string;
}[][] = [
  [
    { title: "MBBS", institution: "Army Medical College, Pakistan", desc: "Foundation of a lifelong commitment to child healthcare." },
    { title: "FCPS (Pediatrics)", institution: "Pakistan", desc: "Advanced specialist training in pediatric medicine." },
    { title: "MRCPI", institution: "Royal College of Physicians of Ireland", desc: "International postgraduate qualification." },
    { title: "MRCPCH", institution: "Royal College of Paediatrics & Child Health, UK", desc: "Specialist pediatric training following UK standards." },
  ],
  [
    { title: "Fellowship in Neonatal Medicine", institution: "RCPCH, UK", desc: "Advanced newborn and neonatal care expertise." },
    { title: "Fellowship in Paediatric Neurology", institution: "RCPCH, UK", desc: "Subspecialty training in child neurology." },
    { title: "FRCPI", institution: "Royal College of Physicians, Ireland", desc: "Recognition of professional excellence." },
  ],
  [
    { title: "FRCP Edinburgh", institution: "Royal College of Physicians, Edinburgh", desc: "Prestigious international fellowship." },
    { title: "FRCP Glasgow", institution: "Royal College of Physicians & Surgeons of Glasgow", desc: "Recognition of distinguished medical practice." },
    { title: "FRCPCH", institution: "Royal College of Paediatrics & Child Health", desc: "Highest level of professional recognition in pediatrics." },
  ],
];

function About() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden">
        <img src={aboutBg} alt="" aria-hidden width={1600} height={1024} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-teal/20 blur-3xl animate-blob" />

        <div className="container relative mx-auto grid items-center gap-12 px-4 py-20 lg:grid-cols-5 lg:gap-12 lg:px-8 lg:py-28">
          <div className="lg:col-span-2 order-2 lg:order-1 animate-fade-up">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] gradient-primary opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] glass shadow-elegant">
                <img src={doctorHero} alt={SITE.doctor} width={1024} height={1280} className="w-full aspect-[3/4] object-cover object-[center_15%]" />
              </div>
              <div className="absolute -left-4 bottom-8 hidden rounded-2xl glass p-4 shadow-soft sm:flex sm:items-center sm:gap-3 animate-float">
                <div className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground"><Award className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                  <div className="text-sm font-semibold">35+ Years</div>
                </div>
              </div>
              <div className="absolute -right-4 top-8 hidden rounded-2xl glass p-4 shadow-soft sm:flex sm:items-center sm:gap-3 animate-float" style={{ animationDelay: "1.4s" }}>
                <div className="grid h-10 w-10 place-items-center rounded-full" style={{ background: "var(--teal)", color: "var(--teal-foreground)" }}><Brain className="h-5 w-5" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">Specialty</div>
                  <div className="text-sm font-semibold">Child Neurology</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> About the Consultant
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.05]">
              Prof. Brig (R) <span className="text-gradient">Dr. Shahid Mahmud</span>
            </h1>
            <p className="mt-3 text-base font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-[15px]">
              Pediatrician • Neonatologist • Child Neurologist
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              With over <strong className="text-foreground">35 years</strong> of experience in child healthcare,
              Prof. Brig (R) Dr. Shahid Mahmud is dedicated to providing expert pediatric, neonatal, and child
              neurology care. His international training and specialist expertise help children receive
              compassionate, evidence-based treatment tailored to their unique needs.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full gradient-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth">
                <MessageCircle className="h-4 w-4" /> Online Consultation
              </a>
              <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground hover:border-primary/40 hover:-translate-y-0.5 transition-smooth">
                <Phone className="h-4 w-4 text-primary" /> Contact Clinic
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {trustHighlights.map((b, i) => (
                <div key={i} className="group rounded-2xl border border-border bg-card/80 p-3.5 text-center shadow-soft backdrop-blur transition-smooth hover:-translate-y-0.5 hover:shadow-elegant">
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-[12px] font-semibold leading-tight text-foreground">{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — A LIFETIME DEDICATED TO CHILD HEALTHCARE */}
      <section className="relative py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 rounded-[2rem] gradient-primary opacity-15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
              <img src={careImg} alt="Dr. Shahid Mahmud consulting with a patient" className="w-full aspect-[4/3] object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl glass p-5 shadow-soft sm:block">
              <div className="text-3xl font-bold text-gradient font-display">35+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Years of Care</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary/40" /> Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              A Lifetime Dedicated to <span className="text-gradient">Child Healthcare</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              <p>
                For more than three decades, Prof. Brig (R) Dr. Shahid Mahmud has been helping children
                overcome health challenges ranging from common childhood illnesses to complex neurological
                disorders.
              </p>
              <p>
                His approach combines modern medical knowledge, compassionate care, and close collaboration
                with families to ensure every child receives the attention and treatment they deserve.
              </p>
              <p>
                With advanced training and extensive clinical experience, he remains committed to delivering
                high-quality healthcare that supports children's physical, neurological, emotional, and
                developmental well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — AREAS OF SPECIALIZED EXPERTISE */}
      <section data-journey-anchor className="relative overflow-hidden py-24">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-teal/15 blur-3xl" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary/40" /> Academic Pathway <span className="h-px w-8 bg-primary/40" />
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Professional Journey & <span className="text-gradient">International Credentials</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              A connected path from medical graduate to internationally recognised consultant — every milestone earned, every fellowship hard-won.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-6xl">
            {journeyRows.map((row, rIdx) => {
              const reverse = rIdx % 2 === 1;
              const offset = journeyRows.slice(0, rIdx).reduce((a, r) => a + r.length, 0);
              return (
                <div key={rIdx} className="relative mb-10 last:mb-0">
                  <div
                    className={`grid gap-6 sm:gap-5 sm:grid-cols-2 ${
                      row.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
                    } ${reverse ? "lg:[direction:rtl]" : ""}`}
                  >
                    {row.map((m, i) => {
                      const num = reverse ? offset + (row.length - i) : offset + i + 1;
                      return (
                        <div
                          key={i}
                          className="group relative animate-fade-up [direction:ltr]"
                          style={{ animationDelay: `${(offset + i) * 0.07}s` }}
                        >
                          <div className="relative h-full rounded-3xl border border-border bg-card/80 p-6 pt-8 shadow-soft backdrop-blur transition-smooth hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-elegant">
                            <div className="absolute -top-5 left-6 grid h-10 w-10 place-items-center rounded-full gradient-primary text-primary-foreground shadow-elegant ring-4 ring-background">
                              <GraduationCap className="h-5 w-5" />
                            </div>
                            <div className="absolute right-5 top-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary/70">
                              {String(num).padStart(2, "0")}
                            </div>
                            <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-foreground">
                              {m.title}
                            </h3>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">
                              {m.institution}
                            </p>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                              {m.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {rIdx < journeyRows.length - 1 && (
                    <div className="pointer-events-none mt-4 hidden h-12 lg:flex">
                      <svg
                        viewBox="0 0 200 60"
                        className={`h-12 w-48 text-primary/40 ${reverse ? "mr-auto ml-6 -scale-x-100" : "ml-auto mr-6"}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 6"
                        strokeLinecap="round"
                      >
                        <path d="M 10 5 Q 190 5 190 30 Q 190 55 10 55" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="relative mx-auto mt-16 max-w-4xl animate-fade-up">
            <div className="absolute -inset-3 rounded-[2rem] gradient-primary opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-card/90 p-8 shadow-elegant backdrop-blur sm:p-10">
              <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
              <div className="relative flex flex-col items-center text-center">
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-elegant">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  <span className="text-gradient">35+ Years</span> of Excellence in Child Healthcare
                </h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  Pediatrician • Neonatologist • Child Neurologist
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-[17px]">
                  Internationally trained specialist dedicated to helping children grow healthy, strong &amp; happy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — AREAS OF SPECIALIZED EXPERTISE */}
      <section className="relative bg-secondary/40 py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary/40" /> Specialization <span className="h-px w-8 bg-primary/40" />
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Areas of Specialized Expertise
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              Comprehensive diagnosis, treatment and long-term support across the full spectrum of childhood medical needs.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((e, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1.5 hover:shadow-elegant">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-0 transition-smooth group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                    <e.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{e.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — CONDITIONS COMMONLY MANAGED */}
      <section className="container mx-auto px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-8 bg-primary/40" /> Conditions Treated
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Helping Children Overcome <span className="text-gradient">Complex Health Challenges</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Prof. Dr. Shahid Mahmud provides expert care for a wide range of pediatric and neurological conditions.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {conditions.map((c, i) => (
            <div key={i} className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-elegant">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-smooth group-hover:gradient-primary group-hover:text-primary-foreground">
                <CheckCircle2 className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-semibold text-foreground">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5 — WHY PARENTS TRUST */}
      <section className="relative overflow-hidden py-24 gradient-soft">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-teal/15 blur-3xl" />
        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="h-px w-8 bg-primary/40" /> Why Choose Us <span className="h-px w-8 bg-primary/40" />
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Why Parents Trust <span className="text-gradient">Dr. Shahid Mahmud</span>
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustReasons.map((r, i) => (
              <div key={i} className="group relative rounded-3xl border border-border bg-card/80 p-7 shadow-soft backdrop-blur transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                    <r.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold leading-snug">{r.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — CLINIC INFORMATION */}
      <section className="container mx-auto px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
            <span className="h-px w-8 bg-primary/40" /> Visit Us
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Visit <span className="text-gradient">Nelson Medical Complex</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Location</div>
                  <p className="mt-2 text-base font-semibold text-foreground">Nelson Medical Complex</p>
                  <p className="text-sm text-muted-foreground">Abid Majeed Road<br />Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact Numbers</div>
                  <div className="mt-2 space-y-1.5">
                    <a href={`tel:${SITE.phoneIntl}`} className="block text-base font-semibold text-foreground hover:text-primary transition-smooth">{SITE.phone}</a>
                    <a href={`tel:${SITE.phoneSecondaryIntl}`} className="block text-base font-semibold text-foreground hover:text-primary transition-smooth">{SITE.phoneSecondary}</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Consultation Hours</div>
                  <p className="mt-2 text-base font-semibold text-foreground">Monday – Saturday</p>
                  <p className="text-sm text-muted-foreground">11:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-3xl border border-border shadow-elegant">
              <iframe
                title="Nelson Medical Complex Location"
                src="https://www.google.com/maps?q=Nelson+Medical+Complex+Abid+Majeed+Road+Rawalpindi&output=embed"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="container mx-auto px-4 pb-20 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] gradient-primary p-10 text-center shadow-elegant sm:p-16">
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white border border-white/25">
              <Calendar className="h-3.5 w-3.5" /> Book Your Visit
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              Need Expert Care For Your Child?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-primary-foreground/90 sm:text-lg leading-relaxed">
              Whether your child needs pediatric care, newborn care, developmental assessment, or pediatric
              neurology consultation, professional guidance is just a message away.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth">
                <MessageCircle className="h-4 w-4" /> WhatsApp Consultation <ArrowRight className="h-4 w-4" />
              </a>
              <a href={`tel:${SITE.phoneIntl}`} className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-7 py-3.5 text-sm font-semibold text-white border border-white/40 hover:bg-white/20 hover:-translate-y-0.5 transition-smooth">
                <Phone className="h-4 w-4" /> Contact Clinic
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
