import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CompanyLogo from "@/components/CompanyLogo";
import SectionHeading from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

const ExperienceCompact = () => {
  const content = useSiteContent();
  const experiences = content.work && content.work.length > 0 ? content.work : [];
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="experience" className="py-16 md:py-24 px-6 sm:px-10 border-t border-border">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading
          eyebrow="Experience"
          description="Roles across community, business development, and Web3 operations."
        >
          Where I've worked
        </SectionHeading>

        <div className="divide-y divide-border/70 border-y border-border/70">
          {experiences.map((e) => {
            const isOpen = open === e.id;
            return (
              <div key={e.id} className="py-4">
                <button
                  onClick={() => setOpen(isOpen ? null : e.id)}
                  className="w-full flex items-start gap-4 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="shrink-0 mt-1">
                    <CompanyLogo name={e.company} size={44} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                      <h3 className="font-sans font-semibold text-sm sm:text-base text-foreground">
                        {e.role}
                      </h3>
                      {e.type && (
                        <span className="text-[10px] tracking-wide uppercase px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                          {e.type}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 truncate">
                      {e.website ? (
                        <a
                          href={e.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(ev) => ev.stopPropagation()}
                          className="hover:underline text-foreground/90 font-medium"
                        >
                          {e.company}
                        </a>
                      ) : (
                        <span className="text-foreground/90 font-medium">{e.company}</span>
                      )}
                      {" • "}
                      {e.period}
                      {e.location ? ` • ${e.location}` : ""}
                    </p>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 mt-2 text-muted-foreground transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && e.bullets?.length > 0 && (
                  <ul className="mt-3 ml-[60px] list-disc list-outside pl-5 space-y-1.5 text-sm text-foreground/85 leading-relaxed">
                    {e.bullets.map((b, i) => (
                      <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCompact;
