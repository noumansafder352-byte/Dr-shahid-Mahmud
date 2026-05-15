import { createFileRoute } from "@tanstack/react-router";
import { Search, Calendar, ArrowRight } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CTABand } from "@/components/site/CTABand";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Pediatric Health Blog | Dr. Shahid Mahmud" },
      { name: "description", content: "Trusted articles on child health, vaccination, nutrition, neurology and parenting tips by Dr. Shahid Mahmud, Rawalpindi." },
      { property: "og:title", content: "Pediatric Blog — Dr. Shahid Mahmud" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Page,
});

const categories = ["All", "Child Neurology", "Vaccination", "Parenting Tips", "Child Nutrition", "Child Development"];

const articles = [
  { title: "Signs of Developmental Delay Every Parent Should Know", cat: "Child Development", date: "May 2026", excerpt: "Learn the early signs of developmental delay and when to consult a pediatric neurologist for your child." },
  { title: "Top 10 Child Nutrition Tips for Healthy Growth", cat: "Child Nutrition", date: "May 2026", excerpt: "Practical, evidence-based nutrition advice to support your child's physical and mental development." },
  { title: "Why Childhood Vaccination Is Non-Negotiable", cat: "Vaccination", date: "Apr 2026", excerpt: "How immunization protects your child and the wider community from serious illness." },
  { title: "Asthma in Children: Modern Treatment Approaches", cat: "Child Neurology", date: "Apr 2026", excerpt: "A complete guide to identifying triggers and managing pediatric asthma effectively." },
  { title: "How to Manage Fever in Children Safely", cat: "Parenting Tips", date: "Mar 2026", excerpt: "When to worry, when to wait, and what every parent must keep in their first-aid kit." },
  { title: "The Real Effects of Screen Time on Young Brains", cat: "Child Development", date: "Mar 2026", excerpt: "Research-backed guidelines for healthy screen use across childhood." },
  { title: "Early Signs of Autism Parents Should Recognize", cat: "Child Neurology", date: "Feb 2026", excerpt: "Recognizing autism early dramatically improves your child's developmental trajectory." },
  { title: "Boosting Your Child's Brain Development", cat: "Child Development", date: "Feb 2026", excerpt: "Simple daily activities that help build a stronger, smarter brain." },
];

function Page() {
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const filtered = articles.filter(
    (a) => (active === "All" || a.cat === active) && a.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <PageHero eyebrow="Blog & Articles" title="Trusted pediatric insights" subtitle="Expert advice on child health, parenting and development — written for real families." />

      <section className="container mx-auto px-4 py-12 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-full border border-border bg-card py-3.5 pl-11 pr-4 text-sm shadow-soft focus:border-primary focus:outline-none"
            />
          </div>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-smooth ${
                  active === c ? "gradient-primary text-primary-foreground shadow-soft" : "bg-card border border-border hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((a, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[16/10] gradient-soft" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-secondary px-2.5 py-1 font-semibold text-primary">{a.cat}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {a.date}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold leading-snug group-hover:text-primary transition-smooth">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && <p className="col-span-full text-center text-muted-foreground">No articles match your search.</p>}
        </div>
      </section>

      <CTABand />
    </>
  );
}
