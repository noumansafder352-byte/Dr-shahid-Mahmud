import { createFileRoute } from "@tanstack/react-router";
import { Brain, MessageSquare, Activity, BookOpen, Sparkles, AlertTriangle, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTABand } from "@/components/site/CTABand";
import { useState } from "react";

export const Route = createFileRoute("/child-neurology")({
  head: () => ({
    meta: [
      { title: "Child Neurologist in Rawalpindi | Dr. Shahid Mahmud" },
      { name: "description", content: "Expert pediatric neurology care for seizures, epilepsy, developmental delay, autism symptoms, ADHD and more — by Dr. Shahid Mahmud, Rawalpindi." },
      { property: "og:title", content: "Child Neurology — Dr. Shahid Mahmud" },
      { property: "og:url", content: "/child-neurology" },
    ],
    links: [{ rel: "canonical", href: "/child-neurology" }],
  }),
  component: Page,
});

const conditions = [
  { icon: Activity, title: "Developmental Delays", desc: "Comprehensive evaluation of motor, cognitive and social milestones." },
  { icon: Brain, title: "Seizures & Epilepsy", desc: "Diagnosis, EEG guidance and long-term seizure management." },
  { icon: MessageSquare, title: "Speech Delay", desc: "Identification of speech and language delays with referral pathways." },
  { icon: Sparkles, title: "Autism-Related Symptoms", desc: "Early autism screening, evaluation and family counselling." },
  { icon: AlertTriangle, title: "Behavioral Concerns", desc: "Help with aggression, anxiety, sleep and emotional regulation." },
  { icon: BookOpen, title: "Learning Difficulties", desc: "Assessment of attention, memory and academic challenges." },
  { icon: Activity, title: "ADHD Symptoms", desc: "Evidence-based ADHD evaluation and management plans." },
  { icon: Brain, title: "Neurological Assessment", desc: "Detailed pediatric neurological examination and imaging guidance." },
];

const faqs = [
  { q: "When should I see a child neurologist?", a: "If your child has frequent fits, developmental delay, persistent headaches, speech delay, abnormal movements or behavioral concerns, an early neurological assessment is recommended." },
  { q: "Are seizures in children always epilepsy?", a: "Not always. Many children have febrile seizures or single events. Proper evaluation including history, examination and sometimes EEG helps distinguish epilepsy from other causes." },
  { q: "Can autism be diagnosed early?", a: "Yes, signs can often be identified between 18-24 months. Early diagnosis and intervention significantly improves long-term outcomes." },
  { q: "Is EEG safe for children?", a: "EEG is completely safe and painless. It records brain electrical activity using small sensors placed on the scalp." },
  { q: "How long is a typical consultation?", a: "Initial neurology consultations usually take 30-45 minutes to allow detailed history-taking and examination." },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Child Neurology" title="Expert pediatric neurology care" subtitle="Specialized evaluation and treatment for the most complex neurological concerns in children." />

      <section className="container mx-auto px-4 py-16 lg:px-8">
        <SectionHeading center eyebrow="Conditions Treated" title="Comprehensive neurological care" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {conditions.map((c, i) => (
            <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-primary text-primary-foreground"><c.icon className="h-5 w-5" /></div>
              <h3 className="mt-4 font-display font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 rounded-3xl glass p-8 shadow-soft md:grid-cols-2 sm:p-12">
          <div>
            <SectionHeading eyebrow="Parent Guidance" title="Supporting families every step of the way" subtitle="Receiving a neurological diagnosis can feel overwhelming. Our practice partners with parents to provide clarity, education and a structured care plan." />
          </div>
          <div>
            <SectionHeading eyebrow="Why Early Diagnosis" title="Early intervention transforms outcomes" subtitle="Identifying neurological concerns early gives children the best chance to develop, learn and thrive — with the right support at the right time." />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 lg:px-8">
        <SectionHeading center eyebrow="FAQ" title="Common questions from parents" />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
        </div>
      </section>

      <CTABand />
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="font-display font-semibold">{q}</span>
        <ChevronDown className={`h-5 w-5 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-fade-up">{a}</div>}
    </div>
  );
}
