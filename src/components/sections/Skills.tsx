const SKILLS = {
  "Technical Skills": ["Python", "Version Control"],
  "Non-Technical Skills": ["Community Building", "Business Analysis", "Social Media Management", "Content Creation", "Content Writing", "Podcasting"],
  "Interpersonal Skills": ["Leadership", "Public Speaking", "Team Work", "Effective Communication", "Creative", "Analytical Thinker", "Problem Solver", "Decision Making"],
};

const Skills = () => (
  <section id="skills" className="mb-8">
    <div className="border-b border-foreground/30 pb-1 mb-4">
      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
        Skills & Toolkit
      </h2>
    </div>
    <div className="space-y-3 text-left">
      {Object.entries(SKILLS).map(([category, skills]) => (
        <div key={category} className="text-sm">
          <span className="font-bold text-foreground">{category}: </span>
          <span className="text-foreground/90">{skills.join(", ")}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
