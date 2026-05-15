export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-teal/20 blur-3xl animate-blob" />
      <div className="container relative mx-auto px-4 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          {eyebrow && (
            <span className="inline-flex rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {subtitle && <p className="mt-5 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
