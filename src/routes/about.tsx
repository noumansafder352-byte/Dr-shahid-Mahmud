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

const credentials = [
  { icon: GraduationCap, title: "MBBS", institute: "Bachelor of Medicine & Surgery", country: "Pakistan", tone: "primary" },
  { icon: Award, title: "FCPS Pediatrics", institute: "College of Physicians & Surgeons", country: "Pakistan", tone: "teal" },
  { icon: ShieldCheck, title: "MRCPCH", institute: "Royal College of Paediatrics & Child Health", country: "United Kingdom", tone: "primary" },
  { icon: ShieldCheck, title: "MRCPI", institute: "Royal College of Physicians of Ireland", country: "Ireland", tone: "teal" },
  { icon: ShieldCheck, title: "MRCPS", institute: "Royal College of Physicians & Surgeons", country: "Glasgow, UK", tone: "primary" },
  { icon: Award, title: "FRCPCH", institute: "Fellow, Royal College of Paediatrics & Child Health", country: "United Kingdom", tone: "teal" },
  { icon: Award, title: "FRCPI", institute: "Fellow, Royal College of Physicians of Ireland", country: "Ireland", tone: "primary" },
  { icon: Award, title: "FRCP", institute: "Fellow, Royal College of Physicians & Surgeons", country: "Glasgow, UK", tone: "teal" },
  { icon: Baby, title: "Fellowship in Neonatal Medicine", institute: "Advanced Neonatal Intensive Care Training", country: "United Kingdom", tone: "primary" },
  { icon: Brain, title: "Fellowship in Pediatric Neurology", institute: "Guy’s & St Thomas’ Hospital, London", country: "United Kingdom", tone: "teal" },
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

      {/* SECTION 2 — PROFESSIONAL CREDENTIALS */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 gradient-soft opacity-60" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-teal/15 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />

        {/* Floating medical icons */}
        <Stethoscope className="pointer-events-none absolute left-6 top-24 h-8 w-8 text-primary/15 animate-float hidden md:block" />
        <Brain className="pointer-events-none absolute right-10 top-40 h-10 w-10 text-teal/20 animate-float hidden md:block" style={{ animationDelay: "1.2s" }} />
        <Baby className="pointer-events-none absolute left-12 bottom-32 h-9 w-9 text-primary/15 animate-float hidden md:block" style={{ animationDelay: "2.4s" }} />
        <HeartPulse className="pointer-events-none absolute right-16 bottom-20 h-8 w-8 text-teal/20 animate-float hidden md:block" style={{ animationDelay: "0.6s" }} />

        <div className="container relative mx-auto px-4 lg:px-8">
          <SectionHeading
            center
            eyebrow="Credentials"
            title="Professional Credentials & International Expertise"
            subtitle="Internationally trained Pediatrician & Child Neurologist with advanced specialty qualifications from Pakistan, Ireland, Scotland, and the United Kingdom."
          />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
            {credentials.map((c, i) => {
              const isTeal = c.tone === "teal";
              return (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border border-white/40 bg-card/70 p-6 shadow-soft backdrop-blur-xl transition-smooth hover:-translate-y-1.5 hover:shadow-elegant animate-fade-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {/* glow */}
                  <div
                    className={`absolute -top-16 -right-16 h-40 w-40 rounded-full blur-3xl opacity-40 transition-smooth group-hover:opacity-80 ${
                      isTeal ? "bg-teal/30" : "bg-primary/30"
                    }`}
                  />
                  <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <div className="relative flex items-start justify-between">
                    <div className="relative">
                      <div
                        className={`absolute inset-0 rounded-2xl blur-md opacity-40 transition-smooth group-hover:opacity-80 ${
                          isTeal ? "bg-teal/50" : "bg-primary/50"
                        }`}
                      />
                      <div
                        className={`relative grid h-14 w-14 place-items-center rounded-2xl shadow-soft text-white ${
                          isTeal ? "" : ""
                        }`}
                        style={{
                          background: isTeal
                            ? "linear-gradient(135deg, var(--teal), color-mix(in oklab, var(--teal) 70%, white))"
                            : "var(--gradient-primary, linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary))))",
                        }}
                      >
                        <c.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary shadow-soft">
                      <Globe2 className="h-3 w-3" /> {c.country}
                    </span>
                  </div>

                  <h3 className="relative mt-6 font-display text-xl font-bold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {c.institute}
                  </p>

                  <div className="relative mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Verified Credential
                    </span>
                    <span className="text-[11px] font-bold tabular-nums text-muted-foreground/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              );
            })}
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
