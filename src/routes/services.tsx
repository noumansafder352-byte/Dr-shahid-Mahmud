import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";
import { waLink } from "@/lib/site";
const PX = (id: number) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;
const imgFeverCough  = PX(7447002);  // girl checkup with stethoscope
const imgPneumonia   = PX(18830315); // child chest examination
const imgVaccine     = PX(8413187);  // gloved hand with vaccine vial
const imgAsthma      = PX(4546135);  // children in medical masks
const imgAllergy     = PX(7659690);  // doctor consulting (allergy assessment)
const imgNutrition   = PX(7579831);  // doctor consultation — growth & nutrition
const imgSeizure     = PX(6129040);  // doctor discussing care at bedside
const imgStomach     = PX(7677588);  // mother caring for child in bed (abdominal/sick)
const imgNewborn     = PX(3259628);  // newborn with hospital gloved staff
const imgDevelopment = PX(4484788);  // child playing with toy (developmental)
const imgNeurology   = PX(7108277);  // doctor with reflex hammer
const imgNeonatal    = PX(3279203);  // mother with newborn (neonatal care)

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
  { img: imgFeverCough,  tag: "Pediatrics",      title: "Frequent Fever & Cough Treatment", desc: "Accurate diagnosis and modern protocols for recurring fever, cough, cold and flu." },
  { img: imgPneumonia,   tag: "Pediatrics",      title: "Pneumonia Treatment",              desc: "Comprehensive care for pediatric pneumonia and chest infections of all severity." },
  { img: imgVaccine,     tag: "Preventive Care", title: "Vaccination Services",             desc: "Complete EPI plus international vaccines with detailed safety counselling for parents." },
  { img: imgAsthma,      tag: "Respiratory",     title: "Asthma Treatment",                 desc: "Long-term asthma control plans, inhaler technique training and trigger management." },
  { img: imgAllergy,     tag: "Allergy",         title: "Allergy Treatment",                desc: "Diagnosis and management of food, skin and environmental allergies in children." },
  { img: imgNutrition,   tag: "Wellness",        title: "Child Growth & Nutrition",         desc: "Personalized nutrition guidance and growth monitoring for healthy development." },
  { img: imgSeizure,     tag: "Neurology",       title: "Fits / Seizure Treatment",         desc: "Expert pediatric epilepsy and seizure management with EEG evaluation guidance." },
  { img: imgStomach,     tag: "Gastro",          title: "Stomach & Digestive Problems",     desc: "Treatment for diarrhea, constipation, vomiting, reflux and abdominal concerns." },
  { img: imgNewborn,     tag: "Neonatology",     title: "Newborn Baby Care",                desc: "Routine and high-risk newborn care including premature baby follow-up." },
  { img: imgDevelopment, tag: "Development",     title: "Mental & Developmental Care",      desc: "Compassionate evaluation of behavioral, emotional and developmental concerns." },
  { img: imgNeurology,   tag: "Neurology",       title: "Child Neurology Consultation",     desc: "Specialized neurological assessment for delays, tics, headaches and more." },
  { img: imgNeonatal,    tag: "Neonatology",     title: "Neonatal Care",                    desc: "Advanced neonatal care for newborns with medical complications or risk." },
];

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Comprehensive pediatric care" subtitle="From routine check-ups to specialized neurological care — every service designed around your child's well-being." />

      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1.5 hover:shadow-elegant">
              <div className="relative aspect-[5/4] overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/15 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary shadow-soft">
                  {s.tag}
                </span>
                <h3 className="absolute bottom-4 left-5 right-5 font-display text-xl font-semibold text-white drop-shadow">
                  {s.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <a href={waLink(`Hello Doctor, I'd like to book a consultation for: ${s.title}.`)} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5">
                  <MessageCircle className="h-4 w-4" /> Book Consultation <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
