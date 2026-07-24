import { useSiteContent } from "@/hooks/useSiteContent";
import CompanyLogo from "@/components/CompanyLogo";

const Education = () => {
  const content = useSiteContent();
  const educationList = content.education || [];

  return (
    <section id="education" className="mb-8">
      <div className="border-b border-foreground/30 pb-1 mb-4">
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
          Education
        </h2>
      </div>
      <div className="space-y-5">
        {educationList.map((e, index) => (
          <div key={e.id || index} className="text-left">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
              <h3 className="font-bold text-foreground text-base sm:text-[1.05rem] flex items-center gap-1.5">
                <CompanyLogo name={e.institution} size={20} />
                {e.link ? (
                  <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {e.institution}
                  </a>
                ) : (
                  <span>{e.institution}</span>
                )}
              </h3>
              <span className="font-serif italic text-muted-foreground text-sm shrink-0">
                {e.period}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mt-0.5">
              <p className="font-serif italic text-muted-foreground text-sm">
                {e.program}
              </p>
              {e.location && (
                <span className="font-serif italic text-muted-foreground text-xs sm:text-sm shrink-0">
                  {e.location}
                </span>
              )}
            </div>
            {e.bullets && e.bullets.length > 0 && (
              <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-sm text-foreground/90 leading-relaxed">
                {e.bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
