import { useSiteContent } from "@/hooks/useSiteContent";

const Skills = () => {
  const content = useSiteContent();
  const skillsData = content.skills || { technical: [], nonTechnical: [], interpersonal: [] };

  return (
    <section id="skills" className="mb-8">
      <div className="border-b border-foreground/30 pb-1 mb-4">
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
          Skills & Toolkit
        </h2>
      </div>
      <div className="space-y-3 text-left">
        {skillsData.technical && skillsData.technical.length > 0 && (
          <div className="text-sm">
            <span className="font-bold text-foreground">Technical Skills: </span>
            <span className="text-foreground/90">{skillsData.technical.join(", ")}</span>
          </div>
        )}
        {skillsData.nonTechnical && skillsData.nonTechnical.length > 0 && (
          <div className="text-sm">
            <span className="font-bold text-foreground">Non-Technical Skills: </span>
            <span className="text-foreground/90">{skillsData.nonTechnical.join(", ")}</span>
          </div>
        )}
        {skillsData.interpersonal && skillsData.interpersonal.length > 0 && (
          <div className="text-sm">
            <span className="font-bold text-foreground">Interpersonal Skills: </span>
            <span className="text-foreground/90">{skillsData.interpersonal.join(", ")}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
