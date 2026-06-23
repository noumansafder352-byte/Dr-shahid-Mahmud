import { Star, ExternalLink, BadgeCheck } from "lucide-react";

// To connect live Google reviews later, replace REVIEWS / OVERALL / TOTAL
// with data fetched from a server function that calls the Google Places API.
const OVERALL = 4.9;
const TOTAL = 477;
const PLACE_URL = "https://www.google.com/search?q=Dr+Shahid+Mahmud+Nelson+Medical+Complex+Rawalpindi";

type Review = {
  author: string;
  initial: string;
  rating: number;
  text: string;
  date: string;
  color: string;
};

const REVIEWS: Review[] = [
  { author: "Ayesha Khan", initial: "A", rating: 5, date: "2 weeks ago", color: "#4285F4",
    text: "Dr. Shahid was incredibly patient with my baby. The diagnosis was spot on and we saw improvement within days. Truly the best pediatrician in Rawalpindi." },
  { author: "Muhammad Ahmed", initial: "M", rating: 5, date: "1 month ago", color: "#EA4335",
    text: "Best child specialist I have ever consulted. He explains everything clearly, never rushes the consultation, and his neurology expertise saved our daughter." },
  { author: "Sana Riaz", initial: "S", rating: 5, date: "3 weeks ago", color: "#34A853",
    text: "Trusted him with both my children for years. His knowledge of child neurology is exceptional and the staff at Nelson Medical Complex is very caring." },
  { author: "Fatima Noor", initial: "F", rating: 5, date: "2 months ago", color: "#FBBC05",
    text: "My newborn was admitted under his care. The level of attention, kindness and professionalism was beyond our expectations. Highly recommended for neonatal care." },
  { author: "Hassan Raza", initial: "H", rating: 5, date: "1 week ago", color: "#4285F4",
    text: "We travelled from Islamabad just to consult Dr. Shahid for our son's epilepsy. His treatment plan worked when others failed. Forever grateful." },
  { author: "Zainab Iqbal", initial: "Z", rating: 5, date: "5 days ago", color: "#EA4335",
    text: "Compassionate, knowledgeable and never makes you feel rushed. He treats every child like his own. The vaccination schedule he set up is perfect." },
  { author: "Bilal Ahmad", initial: "B", rating: 4, date: "3 months ago", color: "#34A853",
    text: "Excellent diagnosis and follow-up care. Our daughter's developmental issues were addressed with a clear plan. Very satisfied with the experience." },
  { author: "Rabia Sheikh", initial: "R", rating: 5, date: "2 weeks ago", color: "#FBBC05",
    text: "Outstanding pediatric neurologist. His international training really shows in the quality of care. Worth every minute of waiting." },
];

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 7.1 29.3 5 24 5 16.3 5 9.7 9.3 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.1-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4 5.5l6.3 5.2C41.4 35.5 44 30.2 44 24c0-1.2-.1-2.3-.4-3.5z"/>
    </svg>
  );
}

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} style={{ width: size, height: size }}
          className={i < Math.round(value) ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"} />
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <article
      className="group relative w-[300px] sm:w-[360px] flex-none rounded-3xl bg-card border border-border p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className="absolute right-5 top-5 opacity-90">
        <GoogleG className="h-5 w-5" />
      </div>
      <div className="flex items-center gap-3">
        <div
          className="grid h-11 w-11 place-items-center rounded-full font-display text-base font-semibold text-white"
          style={{ background: r.color }}
        >
          {r.initial}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold text-foreground">{r.author}</span>
            <BadgeCheck className="h-4 w-4 text-primary" />
          </div>
          <div className="text-xs text-muted-foreground">Local Guide · {r.date}</div>
        </div>
      </div>
      <div className="mt-3"><Stars value={r.rating} /></div>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80 line-clamp-5">"{r.text}"</p>
      <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <BadgeCheck className="h-3.5 w-3.5 text-primary" /> Verified Google review
        </span>
        <span className="whitespace-nowrap">Posted on Google</span>
      </div>
    </article>
  );
}

export function GoogleReviews() {
  // Duplicate the list so the marquee loops seamlessly with translateX(-50%).
  const loop = [...REVIEWS, ...REVIEWS];

  return (
    <section className="bg-secondary/40 py-14 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-semibold text-foreground/80 shadow-soft">
            <GoogleG className="h-4 w-4" /> Verified Google Reviews
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            What Parents Say About Dr. Shahid Mahmud
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg leading-relaxed">
            Trusted by thousands of parents for compassionate pediatric and child neurology care.
          </p>
        </div>

        {/* Rating summary */}
        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center justify-center gap-5 rounded-3xl bg-card border border-border p-6 shadow-soft sm:flex-row sm:gap-8 sm:p-7">
          <div className="flex items-center gap-4">
            <GoogleG className="h-10 w-10 flex-none" />
            <div className="text-left">
              <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Google Rating</div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold text-foreground leading-none">{OVERALL.toFixed(1)}</span>
                <Stars value={OVERALL} size={16} />
              </div>
            </div>
          </div>
          <div className="hidden h-12 w-px bg-border sm:block" />
          <div className="text-center sm:text-left">
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">Based on</div>
            <div className="font-display text-lg font-semibold text-foreground whitespace-nowrap">
              {TOTAL.toLocaleString()}+ Reviews
            </div>
          </div>
          <a
            href={PLACE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth whitespace-nowrap"
          >
            <span className="whitespace-nowrap">View on Google</span>
            <ExternalLink className="h-4 w-4 flex-none" />
          </a>
        </div>

        {/* Auto-scrolling marquee */}
        <div className="relative mt-12 marquee-pause">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-24 bg-gradient-to-r from-secondary/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-24 bg-gradient-to-l from-secondary/60 to-transparent" />

          <div className="overflow-hidden">
            <div
              className="flex w-max gap-5 py-2 animate-marquee"
              style={{ ['--marquee-duration' as string]: '60s' }}
            >
              {loop.map((r, i) => (
                <ReviewCard key={i} r={r} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center">
          <a
            href={PLACE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-smooth whitespace-nowrap"
          >
            <GoogleG className="h-4 w-4 flex-none" />
            <span className="whitespace-nowrap">View All Reviews on Google</span>
            <ExternalLink className="h-4 w-4 flex-none" />
          </a>
        </div>
      </div>
    </section>
  );
}
