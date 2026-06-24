import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Award, ExternalLink } from "lucide-react";

const AWARDS = [
  {
    title: "STEM Educator Award — Community STEM Champion",
    issuer: "SheCanCode",
    date: "May 2025",
    description: "Shortlisted and emerged as a winner for the STEM Educator Award under the Community STEM Champion category, alongside 20 talented and inspiring individuals doing amazing work in STEM.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7330160430851440640",
  },
  {
    title: "CMX Director of the Month",
    issuer: "CMX",
    date: "Oct 2024",
    description: "",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7259609977458216960",
  },
  {
    title: "CMX — Most Promising Director Debut",
    issuer: "CMX",
    date: "",
    description: "",
    link: "",
  },
  {
    title: "Full Scholarship for Cohort #6 & Cohort #7",
    issuer: "The Community Collective",
    date: "Mar 2025",
    description: "One of six individuals selected for a full scholarship worth $2,600 from a pool of over 50 applicants worldwide, twice.",
    link: "",
  },
  {
    title: "Scholarship for Chaos Challenge #1",
    issuer: "The Community Collective",
    date: "May 2025",
    description: "The only individual who received a scholarship to attend the full pilot CHAOS program by The Community Collective.",
    link: "",
  },
  {
    title: "Appreciated for Contribution in GenAI Hackathon by ML Chandigarh",
    issuer: "CGC University, Mohali",
    date: "Dec 2025",
    description: "",
    link: "",
  },
  {
    title: "Appreciated for Performance as Head Coordinator",
    issuer: "Chandigarh Group of Colleges, Landran",
    date: "Apr 2025",
    description: "",
    link: "",
  },
  {
    title: "Google Coursera Professional Certifications Scholarship",
    issuer: "Grow with Google",
    date: "Jan 2024",
    description: "Scholarship recipient for 6 months of completing all professional certifications offered by Google on Coursera.",
    link: "",
  },
  {
    title: "Student of the Month",
    issuer: "Haryana Institute of Information Technology",
    date: "Apr 2023",
    description: "",
    link: "",
  },
];

const INITIAL_COUNT = 3;

const Awards = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? AWARDS : AWARDS.slice(0, INITIAL_COUNT);

  return (
    <section id="awards" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <SectionHeading>Awards & Honors</SectionHeading>
        <div className="space-y-5 mt-8">
          {visible.map((a) => (
            <div key={a.title} className="flex gap-4 border border-border rounded-lg p-5 hover:border-foreground/20 transition-colors">
              <Award size={20} className="text-muted-foreground shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-base font-semibold text-foreground leading-snug">{a.title}</h3>
                  {a.link && (
                    <a href={a.link} target="_blank" rel="noopener noreferrer" className="shrink-0 text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {a.issuer}{a.date ? ` · ${a.date}` : ""}
                </p>
                {a.description && (
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        {AWARDS.length > INITIAL_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              {showAll ? "Show Less" : `See All ${AWARDS.length} Awards`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Awards;
