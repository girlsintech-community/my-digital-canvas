import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const EDUCATION = [
  {
    institution: "CMX Academy",
    link: "https://www.cmxhub.com/",
    period: "June 2024 – March 2026",
    program: "MBA in Community Building",
    detail: "",
    
  },
  {
    institution: "Udacity",
    link: "https://www.udacity.com/",
    period: "March 2026 – April 2026",
    program: "AWS AI & ML Scholar",
    detail: "",
  },
  {
    institution: "McKinsey & Company",
    period: "Oct 2025 – Dec 2025",
    program: "McKinsey Forward Learning Programme — Fellow",
    detail: "Learned frameworks like APR, EPIC, SMART and how to be more adaptable, resilient while communicating effectively for impact.",
    link: "https://www.mckinsey.com/",
  },
  {
    institution: "The Community Collective",
    period: "2024 – 2025",
    program: "Community Building & Leadership Programme",
    detail: "Secured full scholarship of $6,000 to be a part of Cohort 6, Cohort 7 and Chaos Pilot Program among 100+ candidates worldwide.",
    link: "https://thecommunitycollective.co/",
  },
  {
    institution: "Aspire Institute",
    period: "March 2025 – May 2025",
    program: "Leadership Development Program",
    link: "https://www.aspireleaders.org/",
  },
  {
    institution: "Chandigarh Group of Colleges Landran, Punjab",
    link: "https://www.cgc.edu.in/",
    period: "2023 – 2027",
    program: "B.Tech Computer Science Engineering",
    detail: "CGPA — 7.83",
    expandable: [
      "<strong>3rd Year:</strong>",
      "Founded Letz Connect — To bridge the gap between juniors & seniors.",
      "GDGoC — Mentor",
      "Built Auto Community — For students to go together in Auto.",
      "<strong>2nd Year:</strong>",
      "Lamit Club (Web3 Club) — President",
      "GDGoC — Community Relations Head",
      "Department of International Affairs — Coordinator",
      "Head Coordinator for HackFest 2025 — A National Level Hackathon supported by SAP.",
      "<strong>1st Year:</strong>",
      "GDSC — Member",
      "Tech Amigos (Technical Club) — Member",
      "THM (Cyber Security Club) — Marketing Team",
    ],
  },
  {
    institution: "Police DAV Public School",
    period: "2021 – 2023",
    program: "CBSE Class 12th — Non Medical (Physics, Chemistry, Maths, Music)",
    detail: "Percentage — 90%",
  },
  {
    institution: "Bell Toll Public High School",
    period: "2008 – 2021",
    program: "ICSE Class 10th — Science",
    detail: "Percentage — 91%",
  },
];

const EducationItem = ({ e }: { e: typeof EDUCATION[0] }) => {
  const [expanded, setExpanded] = useState(false);
  const hasExpandable = "expandable" in e && (e as any).expandable?.length > 0;

  return (
    <div className="border-b border-border pb-6 last:border-b-0 last:pb-0">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground inline-flex items-center gap-2">
            {e.link ? (
              <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                {e.institution} <ExternalLink size={14} />
              </a>
            ) : e.institution}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            {e.program}, {e.period}
          </p>
          {e.detail && <p className="text-sm text-muted-foreground mt-1">{e.detail}</p>}
        </div>
        {hasExpandable && (
          <button onClick={() => setExpanded(!expanded)} className="text-muted-foreground hover:text-foreground transition-colors shrink-0 mt-1">
            <ChevronDown size={18} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {expanded && hasExpandable && (
        <ul className="mt-3 space-y-1 pl-4 animate-fade-in">
          {(e as any).expandable.map((item: string, i: number) => (
            <li
              key={i}
              className={`text-sm text-muted-foreground leading-relaxed ${item.startsWith("<strong>") ? "list-none font-semibold mt-3 first:mt-0" : "list-disc"}`}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

const Education = () => (
  <section id="education" className="py-12 md:py-16">
    <SectionHeading>Education</SectionHeading>
    <div className="space-y-8 mt-8">
      {EDUCATION.map((e) => (
        <EducationItem key={e.institution} e={e} />
      ))}
    </div>
  </section>
);

export default Education;
