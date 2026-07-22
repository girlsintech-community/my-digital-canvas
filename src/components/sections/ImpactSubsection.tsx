import { useSiteContent } from "@/hooks/useSiteContent";
import { Sparkles, Users, Award, TrendingUp } from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "community":
      return <Users className="w-5 h-5 text-primary" />;
    case "events":
      return <Sparkles className="w-5 h-5 text-amber-500" />;
    case "partnerships":
      return <Award className="w-5 h-5 text-emerald-500" />;
    default:
      return <TrendingUp className="w-5 h-5 text-sky-500" />;
  }
};

const ImpactSubsection = () => {
  const content = useSiteContent();
  const impactItems = content.impact || [];

  if (impactItems.length === 0) return null;

  return (
    <div className="mt-10 pt-8 border-t border-border/60">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-xs font-mono font-semibold tracking-wider uppercase text-primary">
          Key Impact & Contributions
        </span>
      </div>
      <h3 className="font-serif text-lg sm:text-xl font-bold text-foreground mb-4">
        Quantifiable Human & Ecosystem Impact
      </h3>
      <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
        Real stories and metrics from initiatives I've led, built, or scaled to empower people and foster technical communities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {impactItems.map((item) => (
          <div
            key={item.id}
            className="group p-4 sm:p-5 rounded-xl border border-border bg-card/60 hover:bg-card hover:border-primary/40 transition-all duration-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-serif text-2xl sm:text-3xl font-extrabold text-foreground group-hover:text-primary transition-colors">
                  {item.metric}
                </span>
                <div className="p-2 rounded-lg bg-muted/80 group-hover:bg-primary/10 transition-colors">
                  {getCategoryIcon(item.category || "")}
                </div>
              </div>
              <h4 className="font-semibold text-sm sm:text-base text-foreground mb-1">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
            {item.category && (
              <div className="mt-3 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>{item.category}</span>
                <span className="text-primary font-medium group-hover:translate-x-0.5 transition-transform">
                  Verified Impact →
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSubsection;
