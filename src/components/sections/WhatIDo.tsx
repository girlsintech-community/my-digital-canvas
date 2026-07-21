const CARDS = [
  {
    title: "Build Products",
    description:
      "I turn ideas into tangible products and experiences — from side projects to full-scale platforms that solve real problems for real people.",
  },
  {
    title: "Grow Communities",
    description:
      "I build tribes, not audiences. From zero to thousands — I create communities where people genuinely belong and grow together.",
  },
  {
    title: "Create Content",
    description:
      "Writing on Medium & LinkedIn, podcasting, and producing videos on YouTube — sharing stories, ideas, and lessons along the way.",
  },
];

import SectionHeading from "./SectionHeading";

const WhatIDo = () => (
  <section id="whatido" className="py-20 md:py-28 px-6 border-t border-border bg-background">
    <div className="max-w-3xl mx-auto">
      <SectionHeading
        eyebrow="What I Do"
        description="Three things I keep coming back to, products, communities, and content, all pointed at the same north star."
      >
        Building at the intersection of{" "}
        <span className="italic">people, products & purpose.</span>
      </SectionHeading>
      <div className="flex flex-col space-y-4">
        {CARDS.map((c) => (
          <div
            key={c.title}
            className="bg-background rounded-2xl p-5 sm:p-6 border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground shrink-0 sm:w-44">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed no-justify">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;
