import SectionHeading from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

const WhatIDo = () => {
  const content = useSiteContent();
  const cards = content.whatIDo && content.whatIDo.length > 0 ? content.whatIDo : [];

  return (
    <section id="whatido" className="py-20 md:py-28 px-6 sm:px-10 border-t border-border bg-background">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="What I Do"
          description="Three things I keep coming back to, products, communities, and content, all pointed at the same north star."
        >
          Building at the intersection of{" "}
          <span className="italic">people, products & purpose.</span>
        </SectionHeading>
        <div className="flex flex-col space-y-4">
          {cards.map((c) => (
            <div
              key={c.id || c.title}
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
};

export default WhatIDo;
