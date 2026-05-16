import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Stethoscope, Shield, Heart, Brain, CheckCircle2 } from "lucide-react";
import doctorHero from "@/assets/dr-shahid-portrait.png";
import { SITE } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Prof. Dr. Shahid Mahmud — Top Pediatrician Rawalpindi" },
      { name: "description", content: "Learn about Prof. Brig (R) Dr. Shahid Mahmud — a respected Pediatrician, Neonatologist and Child Neurologist with extensive experience in child healthcare." },
      { property: "og:title", content: "About Prof. Dr. Shahid Mahmud" },
      { property: "og:description", content: "Decades of pediatric expertise rooted in military medical excellence." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const quals = [
    { icon: GraduationCap, title: "MBBS", desc: "Bachelor of Medicine & Surgery" },
    { icon: Award, title: "FCPS Pediatrics", desc: "Fellowship — College of Physicians & Surgeons" },
    { icon: Shield, title: "Brigadier (R)", desc: "Pakistan Army Medical Corps" },
    { icon: Brain, title: "Child Neurology", desc: "Specialized pediatric neurology training" },
  ];

  return (
    <>
      <PageHero eyebrow="About Doctor" title={SITE.doctor} subtitle={SITE.role + " — " + SITE.qualification} />

      <section className="container mx-auto grid gap-12 px-4 py-16 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] gradient-primary opacity-15 blur-2xl" />
            <img src={doctorHero} alt={SITE.doctor} loading="lazy" width={1024} height={1280} className="relative rounded-3xl shadow-elegant" />
          </div>
        </div>
        <div className="lg:col-span-3">
          <SectionHeading eyebrow="Profile" title="A lifetime devoted to children's health" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Prof. Brig (R) Dr. Shahid Mahmud is a highly respected Pediatrician, Neonatologist, and Child Neurologist with extensive experience in diagnosing and treating a wide range of child health conditions. He is dedicated to providing compassionate, evidence-based medical care focused on children's physical, neurological, developmental, and emotional well-being.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            With decades of distinguished service in the Pakistan Army Medical Corps and continued private practice at Nelson Medical Complex, his expertise spans newborn intensive care, pediatric neurology, vaccinations, child development and chronic childhood conditions.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Expert in Child Neurology & Epilepsy management",
              "Newborn & Neonatal Intensive Care experience",
              "Comprehensive vaccination & immunization programs",
              "Developmental & behavioral pediatric assessments",
              "Asthma, allergy & chronic disease management",
              "Patient-first, family-centered consultations",
            ].map((p, i) => (
              <div key={i} className="flex gap-2 text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 gradient-soft opacity-60" />
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading center eyebrow="Qualifications & Credentials" title="Distinguished medical training & service" subtitle="A career rooted in academic excellence, military medical leadership and specialized pediatric expertise." />

          <div className="relative mx-auto mt-16 max-w-5xl">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:block" />
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-x-16">
              {quals.map((q, i) => (
                <div
                  key={i}
                  className={`group relative rounded-3xl border border-border bg-card/90 p-7 shadow-soft backdrop-blur transition-smooth hover:-translate-y-1 hover:shadow-elegant ${
                    i % 2 === 1 ? "lg:mt-16" : ""
                  }`}
                >
                  <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  <div className="flex items-start gap-5">
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-2xl gradient-primary opacity-30 blur-md transition-smooth group-hover:opacity-60" />
                      <div className="relative grid h-16 w-16 place-items-center rounded-2xl gradient-primary text-primary-foreground shadow-soft">
                        <q.icon className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary/80">
                          Credential 0{i + 1}
                        </span>
                        <span className="h-px flex-1 bg-border" />
                      </div>
                      <h3 className="mt-2 font-display text-xl font-bold tracking-tight">{q.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{q.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold text-primary">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { k: "30+", v: "Years of Practice" },
              { k: "10,000+", v: "Children Treated" },
              { k: "Brig (R)", v: "Pakistan Army Medical Corps" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card p-6 text-center shadow-soft">
                <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="rounded-3xl glass p-8 shadow-soft sm:p-12">
          <SectionHeading eyebrow="Experience Highlights" title="Decades of pediatric leadership" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: Stethoscope, title: "30+ Years Practice", desc: "Treating thousands of children with measurable improvements." },
              { icon: Heart, title: "Military Medical Service", desc: "Senior pediatric leadership in Pakistan Army Medical Corps." },
              { icon: Brain, title: "Pediatric Neurology", desc: "Advanced expertise in seizures, epilepsy, developmental disorders." },
            ].map((e, i) => (
              <div key={i}>
                <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground"><e.icon className="h-5 w-5" /></div>
                <h4 className="mt-4 font-display font-semibold">{e.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
