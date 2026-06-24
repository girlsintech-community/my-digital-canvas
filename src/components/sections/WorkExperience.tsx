import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { ExternalLink, ChevronDown } from "lucide-react";

const EXPERIENCE = [
  {
    company: "BlockOn Ventures",
    website: "https://www.blockon.biz/",
    role: "Business Development Manager",
    period: "Sept 2025 – Present",
    type: "Contract, Part-time, Remote, Malaysia",
    bullets: [
      "Handled the partnerships, sponsorships, and on-ground operations for <strong>8 exclusive events</strong> happening under <a href='https://indiablockchainweek.com/' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 hover:opacity-70'>India Blockchain Month 2025</a> during <a href='https://ethglobal.com/' target='_blank' rel='noopener noreferrer' class='underline underline-offset-4 hover:opacity-70'>ETH Global</a> India Week.",
      "Outreached to <strong>300+ partners</strong> via social media.",
    ],
  },
  {
    company: "ProPeers",
    website: "https://www.propeers.in/",
    role: "Community Manager",
    period: "Sept 2024 – Oct 2024",
    type: "Internship, Remote, Delhi",
    bullets: [
      "Spearheaded outreach to <strong>20+ colleges</strong>, driving <strong>2,000+ user growth</strong>.",
      "Designed the <strong>ProPeersX Lead Program</strong> structure to scale the community & user base.",
    ],
  },
  {
    company: "Association of Cyber Security",
    website: "https://acssociety.com/",
    role: "Community Manager",
    period: "Dec 2023 – Aug 2024",
    type: "Internship, Remote, Chandigarh",
    bullets: [
      "Organized <strong>10 security talks</strong> with an average attendance of <strong>50+ participants</strong> each.",
      "Led <strong>email marketing campaigns</strong>, boosting event visibility and engagement.",
      "Recruited and managed a <strong>core team of 6</strong>, conducting interviews and onboarding.",
    ],
  },
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (company: string) => {
    setExpanded((prev) => ({ ...prev, [company]: !prev[company] }));
  };

  return (
    <section id="experience" className="py-12 md:py-16">
      <SectionHeading>Work Experience</SectionHeading>
      <div className="space-y-6 mt-8">
        {EXPERIENCE.map((e) => (
          <div key={e.company} className="border border-border rounded-lg p-5 sm:p-6 hover:border-foreground/20 transition-colors">
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                    {e.company}
                  </h3>
                  {e.website && (
                    <a href={e.website} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {e.role}, {e.period}, {e.type}
                </p>
              </div>
              <button
                onClick={() => toggle(e.company)}
                className="text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-1"
              >
                <ChevronDown size={18} className={`transition-transform duration-200 ${expanded[e.company] ? "rotate-180" : ""}`} />
              </button>
            </div>
            {expanded[e.company] && (
              <ul className="mt-4 space-y-2 list-disc list-outside pl-5 animate-fade-in">
                {e.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
