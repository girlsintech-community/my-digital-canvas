import { useSiteContent } from "@/hooks/useSiteContent";
import SectionHeading from "./SectionHeading";
import { Users, Shield, TrendingUp, Award, ArrowUpRight } from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "community":
      return <Users className="w-5 h-5 text-foreground" />;
    case "events":
      return <Award className="w-5 h-5 text-foreground" />;
    case "partnerships":
      return <Shield className="w-5 h-5 text-foreground" />;
    default:
      return <TrendingUp className="w-5 h-5 text-foreground" />;
  }
};

const ImpactSection = () => {
  const content = useSiteContent();
  const impactItems = content.impact || [];

  return (
    <section id="impact" className="py-16 md:py-24 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <SectionHeading
          eyebrow="Impact & Credibility"
          description="Quantifiable metrics and real-world impact created across technical communities, partnerships, and developer ecosystems."
        >
          Building for People & Lasting Impact
        </SectionHeading>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {impactItems.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-xl border border-border bg-card/80 text-left flex flex-col justify-between hover:border-foreground/30 transition-all duration-200 shadow-sm"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                    {item.metric}
                  </span>
                  <div className="p-2.5 rounded-lg bg-muted border border-border">
                    {getCategoryIcon(item.category || "")}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {item.category && (
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="uppercase tracking-wider">{item.category}</span>
                  <span className="text-foreground font-medium flex items-center gap-1">
                    Verified Contribution <ArrowUpRight size={14} />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
