import { createFileRoute } from "@tanstack/react-router";
import {
  Award, GraduationCap, ShieldCheck, Brain, Stethoscope, Globe2, BookOpen,
  MessageCircle, Clock, CheckCircle2, Baby, Activity, HeartPulse, Sparkles,
  Brain as BrainIcon, Footprints, Moon, Apple, Users, Microscope,
} from "lucide-react";
import doctorHero from "@/assets/dr-shahid-portrait.png";
import aboutBg from "@/assets/about-bg.jpg";
import { SITE, waLink } from "@/lib/site";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Prof. Dr. Shahid Mahmud — Pediatrician & Child Neurologist Rawalpindi" },
      { name: "description", content: "Professor Dr. Shahid Mahmud — Consultant Pediatrician, Neonatologist & Pediatric Neurologist with 35+ years of experience and advanced UK fellowship training." },
      { property: "og:title", content: "About Prof. Dr. Shahid Mahmud" },
      { property: "og:description", content: "35+ years of pediatric excellence. UK fellowship trained. Evidence-based child care in Rawalpindi & Islamabad." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const badges = [
  { icon: Award, label: "35+ Years Experience" },
  { icon: Brain, label: "Pediatric Neurology Specialist" },
  { icon: Globe2, label: "UK Fellowship Trained" },
  { icon: ShieldCheck, label: "Evidence-Based Child Care" },
];

const qualifications = [
  { code: "MBBS", title: "MBBS", desc: "Bachelor of Medicine & Bachelor of Surgery" },
  { code: "FCPS", title: "FCPS Pediatrics", desc: "Fellowship — College of Physicians & Surgeons Pakistan" },
  { code: "MRCPCH", title: "MRCPCH (UK)", desc: "Member, Royal College of Paediatrics & Child Health" },
  { code: "Neonatal", title: "Fellowship in Neonatal Medicine (UK)", desc: "Advanced training in newborn intensive care" },
  { code: "Neurology", title: "Fellowship in Pediatric Neurology", desc: "Guy’s & St Thomas’ Hospital, London — UK" },
  { code: "FRCPCH", title: "FRCPCH (UK)", desc: "Fellow, Royal College of Paediatrics & Child Health" },
  { code: "FRCPI", title: "FRCPI (Ireland)", desc: "Fellow, Royal College of Physicians of Ireland" },
];

const education = [
  { institution: "Quaid-e-Azam University", degree: "MBBS" },
  { institution: "CPSP — College of Physicians & Surgeons Pakistan", degree: "FCPS Pediatrics" },
];

const expertise = [
  { icon: BrainIcon, title: "Epilepsy & Seizure Disorders", desc: "Advanced diagnosis and long-term management." },
  { icon: Activity, title: "Developmental Delays", desc: "Early assessment and intervention plans." },
  { icon: HeartPulse, title: "Cerebral Palsy", desc: "Multidisciplinary care and rehabilitation." },
  { icon: BookOpen, title: "Behavioral & Learning Disorders", desc: "Compassionate evaluation and counseling." },
  { icon: Footprints, title: "Speech & Walking Delays", desc: "Personalized therapy roadmap and referrals." },
  { icon: Baby, title: "Newborn & Neonatal Care", desc: "Specialized care for newborns and high-risk neonates." },
  { icon: Apple, title: "Child Growth & Nutrition", desc: "Healthy growth tracking with tailored nutrition." },
  { icon: Microscope, title: "Neuromotor Disorders", desc: "Diagnosis and management of motor conditions." },
  { icon: Moon, title: "Sleep & Behavioral Disorders", desc: "Holistic care for sleep and behavior concerns." },
];

function About() {
  return (
    <>
      {/* SECTION 1 — PROFESSOR PROFILE */}
      <section className="relative overflow-hidden">
        <img src={aboutBg} alt="" aria-hidden width={1600} height={1024} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -left-10 h-80 w-80 rounded-full bg-teal/20 blur-3xl animate-blob" />

        <div className="container relative mx-auto grid items-center gap-12 px-4 py-20 lg:grid-cols-5 lg:gap-10 lg:px-8 lg:py-28">
          <div className="lg:col-span-2 order-2 lg:order-1 animate-fade-up">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] gradient-primary opacity-20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] glass shadow-elegant">
                <img src={doctorHero} alt={SITE.doctor} width={1024} height={1280} className="h-full w-full object-cover" />
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
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> About the Doctor
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Professor Dr. <span className="text-gradient">Shahid Mahmud</span>
            </h1>
            <p className="mt-3 text-lg font-medium text-primary/90">
              Consultant Pediatrician, Neonatologist & Pediatric Neurologist
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
              Professor Dr. Shahid Mahmud is one of the most experienced Pediatricians & Child
              Neurologists in Rawalpindi & Islamabad with over <strong className="text-foreground">35 years</strong> of
              excellence in child healthcare. With advanced international qualifications and specialty
              training from prestigious institutions in Pakistan and the UK, he provides modern
              evidence-based care for newborns, children, and adolescents.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {badges.map((b, i) => (
                <div key={i} className="group rounded-2xl border border-border bg-card/80 p-3.5 text-center shadow-soft backdrop-blur transition-smooth hover:-translate-y-0.5 hover:shadow-elegant">
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-[12px] font-semibold leading-tight text-foreground">{b.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-border bg-card/80 p-5 shadow-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl gradient-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">Consultation Timing</div>
                  <div className="mt-0.5 text-sm font-semibold text-foreground">Monday – Saturday · 11:00 AM – 6:00 PM</div>
                </div>
              </div>
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth">
                <MessageCircle className="h-4 w-4" /> Book Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — QUALIFICATIONS & EXPERIENCE */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 gradient-soft opacity-60" />
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading center eyebrow="Qualifications & Experience" title="International training. Pakistani roots." subtitle="A distinguished academic and clinical journey across Pakistan, the UK and Ireland — built on rigorous medical excellence." />

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-16">
              {qualifications.map((q, i) => (
                <div
                  key={i}
                  className={`group relative rounded-3xl border border-border bg-card/90 p-6 shadow-soft backdrop-blur transition-smooth hover:-translate-y-1 hover:shadow-elegant ${
                    i % 2 === 1 ? "lg:mt-12" : ""
                  }`}
                >
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-2xl gradient-primary opacity-30 blur-md transition-smooth group-hover:opacity-60" />
                      <div className="relative grid h-14 w-14 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                        <GraduationCap className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary/80">
                          Credential {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-border" />
                      </div>
                      <h3 className="mt-1.5 font-display text-lg font-bold tracking-tight">{q.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Table */}
          <div className="mx-auto mt-16 max-w-4xl rounded-3xl border border-border bg-card/90 shadow-elegant backdrop-blur overflow-hidden">
            <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-6 py-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl gradient-primary text-primary-foreground"><BookOpen className="h-5 w-5" /></div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-primary">Education</div>
                <div className="text-sm font-semibold">Academic background</div>
              </div>
            </div>
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary/30 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-6 py-3 font-semibold">Institution</th>
                  <th className="px-6 py-3 font-semibold">Degree</th>
                </tr>
              </thead>
              <tbody>
                {education.map((e, i) => (
                  <tr key={i} className="border-t border-border">
                    <td className="px-6 py-4 font-medium text-foreground">{e.institution}</td>
                    <td className="px-6 py-4 text-muted-foreground">{e.degree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Experience highlight */}
          <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl gradient-primary p-8 shadow-elegant sm:p-12">
            <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/15 blur-2xl" />
            <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur">
                <Stethoscope className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Experience Highlight</div>
                <p className="mt-2 font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                  Over 35 years of experience in Pediatric Medicine, Neonatal Care & Pediatric Neurology — with advanced international training and modern multidisciplinary child healthcare expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SPECIALIZED CHILD CARE EXPERTISE */}
      <section className="container mx-auto px-4 py-24 lg:px-8">
        <SectionHeading center eyebrow="Areas of Expertise" title="Specialized Pediatric & Child Neurology Care" subtitle="Comprehensive diagnosis, treatment and long-term support across the full spectrum of childhood medical needs." />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((e, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1.5 hover:shadow-elegant">
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

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl glass p-7 text-center shadow-soft">
          <div className="mx-auto grid h-11 w-11 place-items-center rounded-2xl gradient-primary text-primary-foreground">
            <Users className="h-5 w-5" />
          </div>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-[17px]">
            Professor Dr. Shahid Mahmud provides compassionate multidisciplinary care focused on
            diagnosis, treatment, rehabilitation, parent counseling, and long-term child development
            support using modern evidence-based medical practices.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
