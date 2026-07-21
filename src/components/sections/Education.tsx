const EDUCATION = [
  {
    institution: "CMX Academy",
    location: "San Francisco, California, United States",
    program: "MBA in Community Management and Community Building",
    period: "June 2024 – March 2026",
    link: "https://www.cmxhub.com/",
  },
  {
    institution: "Udacity",
    program: "AWS AI & ML Scholar",
    period: "March 2026 – April 2026",
    link: "https://www.udacity.com/",
  },
  {
    institution: "McKinsey & Company",
    program: "McKinsey Forward Learning Programme — Fellow",
    period: "Oct 2025 – Dec 2025",
    link: "https://www.mckinsey.com/",
    bullets: [
      "Learned frameworks like APR, EPIC, SMART and how to be more adaptable, resilient while communicating effectively for impact.",
    ],
  },
  {
    institution: "The Community Collective",
    program: "Community Building & Leadership Programme",
    period: "2024 – 2025",
    link: "https://thecommunitycollective.co/",
    bullets: [
      "Secured full scholarship of $6,000 to be a part of Cohort 6, Cohort 7 and Chaos Pilot Program among 100+ candidates worldwide.",
    ],
  },
  {
    institution: "Aspire Institute",
    program: "Leadership Development Program",
    period: "March 2025 – May 2025",
    link: "https://www.aspireleaders.org/",
  },
  {
    institution: "Chandigarh Group of Colleges Landran",
    location: "Punjab",
    program: "B.Tech Computer Science Engineering (CGPA: 7.83)",
    period: "2023 – 2027",
    link: "https://www.cgc.edu.in/",
    bullets: [
      "3rd Year: Founded Letz Connect, GDGoC Mentor, Built Auto Community",
      "2nd Year: Lamit Club President, GDGoC Community Relations Head, Department of International Affairs Coordinator, Head Coordinator for HackFest 2025",
      "1st Year: GDSC Member, Tech Amigos Member, THM Club Marketing Team",
    ],
  },
  {
    institution: "Police DAV Public School",
    program: "CBSE Class 12th — Non Medical (Physics, Chemistry, Maths, Music) — 90%",
    period: "2021 – 2023",
  },
  {
    institution: "Bell Toll Public High School",
    program: "ICSE Class 10th — Science — 91%",
    period: "2008 – 2021",
  },
];

const Education = () => (
  <section id="education" className="mb-8">
    <div className="border-b border-foreground/30 pb-1 mb-4">
      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
        Education
      </h2>
    </div>
    <div className="space-y-5">
      {EDUCATION.map((e, index) => (
        <div key={index} className="text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
            <h3 className="font-bold text-foreground text-base sm:text-[1.05rem]">
              {e.institution}
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

export default Education;
