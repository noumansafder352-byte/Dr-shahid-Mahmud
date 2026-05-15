import { createFileRoute } from "@tanstack/react-router";
import { Baby, Smile, Footprints, BookOpen, GraduationCap, Brain, Apple, Heart } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/child-development")({
  head: () => ({
    meta: [
      { title: "Child Development & Growth Milestones | Dr. Shahid Mahmud" },
      { name: "description", content: "Track your child's growth, brain development and milestones with expert pediatric guidance from Dr. Shahid Mahmud, Rawalpindi." },
      { property: "og:title", content: "Child Development — Dr. Shahid Mahmud" },
      { property: "og:url", content: "/child-development" },
    ],
    links: [{ rel: "canonical", href: "/child-development" }],
  }),
  component: Page,
});

const milestones = [
  { icon: Baby, age: "Newborn", points: ["Reflexive responses", "Recognizes mother's voice", "Brief eye contact"] },
  { icon: Smile, age: "6 Months", points: ["Sits with support", "Babbles & laughs", "Reaches for objects"] },
  { icon: Footprints, age: "1 Year", points: ["First steps", "Says 1-2 words", "Waves bye-bye"] },
  { icon: BookOpen, age: "3 Years", points: ["Forms full sentences", "Runs & climbs", "Plays with others"] },
  { icon: GraduationCap, age: "5 Years", points: ["Counts to 10+", "Draws basic shapes", "Ready for school"] },
];

const focus = [
  { icon: Apple, title: "Nutrition Guidance", desc: "Tailored feeding and dietary advice for every growth stage." },
  { icon: Brain, title: "Brain Development", desc: "Stimulation, sleep and screen-time strategies for healthy brains." },
  { icon: Heart, title: "Parent Counseling", desc: "Practical, compassionate guidance for confident parenting." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Child Development" title="Watch your child grow with confidence" subtitle="Expert assessment of growth milestones, nutrition and early learning — so every child reaches their potential." />

      <section className="container mx-auto px-4 py-16 lg:px-8">
        <SectionHeading center eyebrow="Milestones" title="Key growth & development stages" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {milestones.map((m, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground"><m.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display font-bold text-primary">{m.age}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {m.points.map((p) => <li key={p}>• {p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 lg:px-8">
        <SectionHeading center eyebrow="Areas of Focus" title="What we assess and support" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {focus.map((f, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--accent)" }}><f.icon className="h-6 w-6 text-primary" /></div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
