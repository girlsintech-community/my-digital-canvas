import SectionHeading from "./SectionHeading";

const SKILLS = {
  "Technical Skills": ["Python", "Version Control"],
  "Non-Technical Skills": ["Community Building", "Business Analysis", "Social Media Management", "Content Creation", "Content Writing", "Podcasting"],
  "Interpersonal Skills": ["Leadership", "Public Speaking", "Team Work", "Effective Communication", "Creative", "Analytical Thinker", "Problem Solver", "Decision Making"],
};

const Skills = () => (
  <section id="skills" className="py-12 md:py-16">
    <SectionHeading
      eyebrow="Toolkit"
      description="The stack, soft skills, and superpowers I bring to every table."
    >
      Skills
    </SectionHeading>
    <div className="space-y-6 mt-8">
      {Object.entries(SKILLS).map(([category, skills]) => (
        <div key={category}>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-3">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="text-xs px-3 py-1.5 rounded-full border border-border text-foreground">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
