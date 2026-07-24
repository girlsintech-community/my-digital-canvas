import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Award, ExternalLink } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";
import CompanyLogo from "@/components/CompanyLogo";

const INITIAL_COUNT = 3;

const Awards = () => {
  const [showAll, setShowAll] = useState(false);
  const content = useSiteContent();
  const awardsList = content.awards || [];
  const visible = showAll ? awardsList : awardsList.slice(0, INITIAL_COUNT);

  return (
    <section id="awards" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow="Recognition"
          description="A few moments where the work got noticed, from scholarships to global director titles."
        >
          Awards & Honors
        </SectionHeading>
        <div className="space-y-5">
          {visible.map((a) => (
            <div key={a.id || a.title} className="flex gap-4 border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors">
              <Award size={20} className="text-muted-foreground shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base font-semibold text-foreground leading-snug">{a.title}</h3>
                  {a.link && (
                    <a href={a.link} target="_blank" rel="noopener noreferrer" className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                  <CompanyLogo name={a.issuer} size={16} />
                  <span>{a.issuer}{a.date ? ` · ${a.date}` : ""}</span>
                </p>
                {a.description && (
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {awardsList.length > INITIAL_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              {showAll ? "Show Less" : `See All ${awardsList.length} Awards`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards;
