import { useSiteContent } from "@/hooks/useSiteContent";
import CompanyLogo from "@/components/CompanyLogo";

const WorkExperience = () => {
  const content = useSiteContent();
  const experiences = content.work && content.work.length > 0 ? content.work : [];

  return (
    <section id="experience" className="mb-8">
      <div className="border-b border-foreground/30 pb-1 mb-4">
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
          Professional Experience
        </h2>
      </div>
      <div className="space-y-6">
        {experiences.map((e, index) => (
          <div key={e.id || index} className="text-left">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <h3 className="font-bold text-foreground text-base sm:text-[1.05rem]">
                {e.role}
              </h3>
              <span className="font-serif italic text-muted-foreground text-sm shrink-0">
                {e.period}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mt-0.5">
              <p className="font-serif italic text-muted-foreground text-sm flex items-center gap-1.5">
                <CompanyLogo name={e.company} size={20} />
                {e.website ? (
                  <a
                    href={e.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-foreground font-semibold"
                  >
                    {e.company}
                  </a>
                ) : (
                  <span>{e.company}</span>
                )}{" "}
                {e.location ? `— ${e.location}` : ""}
              </p>
              {e.type && (
                <span className="font-serif italic text-muted-foreground text-xs sm:text-sm shrink-0">
                  {e.type}
                </span>
              )}
            </div>
            <ul className="mt-2 list-disc list-outside pl-5 space-y-1.5 text-sm text-foreground/90 leading-relaxed">
              {e.bullets.map((b, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
