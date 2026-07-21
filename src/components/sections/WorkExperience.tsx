const EXPERIENCE = [
  {
    role: "Business Development Manager",
    company: "BlockOn Ventures",
    location: "Malaysia",
    period: "Sept 2025 – Nov 2025",
    type: "Remote",
    website: "https://www.blockon.biz/",
    bullets: [
      "Handled the Partnerships, Sponsorships and On-Ground Operations for India Blockchain Month",
      "Outreached to 80+ partners in 1 week and locked 5+ deals for India Blockchain Month",
    ],
  },
  {
    role: "Community Manager",
    company: "ProPeers",
    location: "Delhi",
    period: "Sept 2024 – Oct 2024",
    type: "Remote",
    website: "https://www.propeers.in/",
    bullets: [
      "Reached out to 20+ Colleges and 30+ Leads for mentors.",
      "Increased 2k User Base Growth by Organizing 2 Seminars and 1 Webinar.",
    ],
  },
  {
    role: "Community Manager",
    company: "Association for Cyber Security",
    location: "Chandigarh",
    period: "Dec 2023 – Aug 2024",
    type: "Hybrid",
    website: "https://acssociety.com/",
    bullets: [
      "Organized 10 Security Talks with an average attendance of 50+ participants each.",
      "Moderated the logistics and production work alongside coordinating with the designing team and operations team.",
      "Outreached to 300+ partners via social media platforms.",
    ],
  },
];

const WorkExperience = () => (
  <section id="experience" className="mb-8">
    <div className="border-b border-foreground/30 pb-1 mb-4">
      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
        Professional Experience
      </h2>
    </div>
    <div className="space-y-5">
      {EXPERIENCE.map((e, index) => (
        <div key={index} className="text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
            <h3 className="font-bold text-foreground text-base sm:text-[1.05rem]">
              {e.role}
            </h3>
            <span className="font-serif italic text-muted-foreground text-sm shrink-0">
              {e.period}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mt-0.5">
            <p className="font-serif italic text-muted-foreground text-sm">
              {e.company} {e.location ? `— ${e.location}` : ""}
            </p>
            {e.type && (
              <span className="font-serif italic text-muted-foreground text-xs sm:text-sm shrink-0">
                {e.type}
              </span>
            )}
          </div>
          <ul className="mt-2 list-disc list-outside pl-5 space-y-1 text-sm text-foreground/90 leading-relaxed">
            {e.bullets.map((b, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default WorkExperience;
