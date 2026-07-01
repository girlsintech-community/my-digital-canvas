import SectionHeading from "./SectionHeading";

const ACHIEVEMENTS = [
  "Internal Finalist at Smart India Hackathon in 2023, 2024, 2025.",
  "Won National Science Day in Coding Category in 2023.",
  "Won Techtonic Talks, an IRL Podcast Shooting Competition in 2026.",
  "Head Coordinator at Hack Heist in 2025.",
  "Represented Brazil as a Finance Minister in Model United Nations 2024.",
];

const ROLES = [
  "President of Lamit Club",
  "Marketing Head of THM Club",
  "Community Relations Head, Google Developer Group CGC",
  "Coordinator, Department of International Affairs",
  "Mentor, GDG On Campus",
  "Builder, Letz Connect — A community on campus to bridge the gap between juniors and seniors.",
  "Builder, Girls Leading Tech — A pan-India community to empower girls in tech.",
];

const HACKATHONS = [
  "Hack This Fall 2024 at Karnavati University, Gujarat",
  "SIH 2023",
  "SIH 2024",
  "SIH 2025",
  "0 to 1 Hackathon at Chandigarh University",
  "Vibe-a-thon",
  "Figma Make-a-thon",
];

const Extracurriculars = () => (
  <section id="extracurriculars" className="py-12 md:py-16">
    <SectionHeading
      eyebrow="Beyond work"
      description="Hackathons, achievements, and side quests that made the journey more colorful."
    >
      Extracurriculars
    </SectionHeading>

    <div className="space-y-8 mt-8">
      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Achievements</h3>
        <ul className="list-disc list-outside pl-5 space-y-1">
          {ACHIEVEMENTS.map((a, i) => (
            <li key={i} className="text-sm text-foreground leading-relaxed">{a}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Leadership Roles</h3>
        <ul className="list-disc list-outside pl-5 space-y-1">
          {ROLES.map((r, i) => (
            <li key={i} className="text-sm text-foreground leading-relaxed">{r}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Hackathons Attended</h3>
        <ul className="list-disc list-outside pl-5 space-y-1">
          {HACKATHONS.map((h, i) => (
            <li key={i} className="text-sm text-foreground leading-relaxed">{h}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Extracurriculars;
