import SectionHeading from "./SectionHeading";

const STATS = [
  { value: "4,000", label: "members" },
  { value: "pan india", label: "reach" },
  { value: "women", label: "in tech focus" },
];

const Community = () => (
  <section id="community" className="py-20 md:py-28 px-6 border-t border-border bg-background">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading
        eyebrow="The Community I Am Building"
        description="A 4,000-girl-strong movement across India, building a future where every girl in tech feels seen, supported, and unstoppable."
      >
        Girls Leading Tech
      </SectionHeading>
      <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
        GLT is where <strong className="text-foreground">ambition meets sisterhood</strong>, mentorship at scale, hackathons that ship, and rooms where the next generation of women builders can be their full selves.
      </p>
      <div className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-10">
        {STATS.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
            <p className="text-xs font-sans font-medium tracking-widest text-muted-foreground uppercase mt-1">
              {s.label}
            </p>
          </div>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/company/girlsleadingtech/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
      >
        Learn More
      </a>
    </div>
  </section>
);

export default Community;
