export interface WorkItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  website: string;
  bullets: string[];
}

export interface ImpactItem {
  id: string;
  metric: string;
  title: string;
  description: string;
  category: string;
}

export interface TestimonialItem {
  id: string;
  person: string;
  role: string;
  text: string;
  linkedin?: string;
  date?: string;
  relation?: string;
}

export interface EventItem {
  id: string;
  title: string;
  type: "organised" | "hosted" | "attended";
  date: string;
  location?: string;
  attendees?: string;
  link?: string;
}

export interface SessionItem {
  id: string;
  title: string;
  type: "organised" | "hosted" | "speaker";
  link: string;
  speakerName: string;
  speakerRole: string;
  speakerLinkedin?: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  platform: string;
  link: string;
  category?: string;
}

export interface SiteContent {
  hero: {
    name: string;
    tagline: string;
    bioParagraph1: string;
    bioParagraph2: string;
    location: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    description: string;
    paragraphs: string[];
    detailedBio: string[];
  };
  work: WorkItem[];
  impact: ImpactItem[];
  testimonials: TestimonialItem[];
  eventsOrganised: EventItem[];
  sessionsOrganised: SessionItem[];
  articlesWritten: ArticleItem[];
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  hero: {
    name: "Manik",
    tagline: "I build communities, champion women in tech, and bring growth wherever I go.",
    bioParagraph1: "Hey, I'm Manik — a builder, community architect, and growth catalyst based in Chandigarh, India. Founder of Girls Leading Tech (3,300+ women in tech across 900+ colleges).",
    bioParagraph2: "Ex-Business Development Manager @ BlockOn Ventures, Ex-Community Manager @ ProPeers & Association for Cyber Security. Youngest CMX Director Worldwide, STEM Educator Award winner, and McKinsey Forward Fellow.",
    location: "Chandigarh, India",
  },
  about: {
    eyebrow: "About Manik",
    heading: "I bring growth wherever I go.",
    description: "A short story of who I am, what I've built, and why I keep showing up for people.",
    paragraphs: [
      "Hey, I'm Manik — a builder, community architect, and growth catalyst based in Chandigarh, India. I founded Girls Leading Tech, a non-profit community of 3,300+ women in tech across 900+ colleges and 25+ Indian states — hosting 55+ mentorship sessions, hackathons like HackAura (1,700+ hackers) and Global AI Buildathon (700+ hackers), and featuring speakers from Google, Amazon, Microsoft, Uber, Salesforce, and more.",
      "As a Business Development Manager at BlockOn Ventures, I managed partnerships and on-ground operations for 8 exclusive events during ETH Global India Week. I've also served as Community Manager at ProPeers and the Association of Cyber Security.",
      "Recognised as the Youngest CMX Director Worldwide by CMX, a STEM Educator Award winner, and a McKinsey Forward Fellow — I bring a relentless drive to create meaningful impact through community, content, and collaboration.",
    ],
    detailedBio: [
      "My journey began with a simple belief: access to opportunity should never be constrained by background, gender, or location.",
      "Building Girls Leading Tech from scratch taught me that real community isn't built on vanity metrics — it's built on trust, consistency, and genuine care. Over the past few years, we've enabled thousands of young women to break into tech, land global mentorships, and win hackathons.",
      "Beyond community building, my work spans strategic business development in Web3 with BlockOn Ventures, cybersecurity outreach, podcast hosting, and educational advocacy. Whether I'm negotiating partnerships for ETH Global India Week or mentoring a first-time developer, I bring the same energy: high execution, zero fluff, and human-first leadership.",
    ],
  },
  work: [
    {
      id: "w1",
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
      id: "w2",
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
      id: "w3",
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
  ],
  impact: [
    {
      id: "imp1",
      metric: "3,300+",
      title: "Women in Tech Empowered",
      description: "Built Girls Leading Tech across 900+ colleges & 25+ states with zero funding.",
      category: "Community",
    },
    {
      id: "imp2",
      metric: "55+",
      title: "Mentorship Sessions & Hackathons",
      description: "Organized HackAura (1,700+ hackers) & Global AI Buildathon (700+ hackers).",
      category: "Events",
    },
    {
      id: "imp3",
      metric: "8",
      title: "ETH Global India Week Events",
      description: "Managed partnerships & operations for Web3 ecosystem growth at BlockOn Ventures.",
      category: "Partnerships",
    },
    {
      id: "imp4",
      metric: "2,000+",
      title: "User Base Growth Catalyst",
      description: "Upskilled students and community members through interactive seminars at ProPeers.",
      category: "Growth",
    },
  ],
  testimonials: [
    {
      id: "t1",
      person: "Desmond John",
      role: "Founder of Vibe Guide Ventures",
      text: "It was great connecting with Manik and learning about all the good work he's doing in his community.",
      linkedin: "https://www.linkedin.com/in/desmond-john/",
    },
    {
      id: "t2",
      person: "Aashi Raghuvanshi",
      role: "Agentic AI & Automation Engineer",
      text: "Working with Manik is always a pleasure and a huge inspiration.",
      linkedin: "https://www.linkedin.com/in/aashi-raghuwanshi/",
    },
    {
      id: "t3",
      person: "Catherine Infanta",
      role: "Harvard Aspire Leader",
      text: "Manik is a pro multi-tasker and a truly gem of a person. Kudos to his vision towards empowering girls!",
      linkedin: "https://www.linkedin.com/in/catherine-infanta-/",
    },
    {
      id: "t4",
      person: "Samridhi Gupta",
      role: "Google WE Scholar",
      text: "Manik's work is truly inspiring! Big shoutout for building something so impactful. I've had the privilege of watching the community grow and thrive.",
      linkedin: "https://www.linkedin.com/in/samridhi-gupta08/",
    },
  ],
  eventsOrganised: [
    {
      id: "e1",
      title: "Global AI Buildathon (700+ Hackers)",
      type: "organised",
      date: "2024",
      attendees: "700+",
      link: "https://www.linkedin.com/company/girlsleadingtech/",
    },
    {
      id: "e2",
      title: "HackAura (1,700+ Hackers, 24h Livestream)",
      type: "organised",
      date: "2024",
      attendees: "1,700+",
      link: "https://www.linkedin.com/company/girlsleadingtech/",
    },
    {
      id: "e3",
      title: "Google Solution Challenge Bootcamp (Chandigarh Edition)",
      type: "hosted",
      date: "2024",
      attendees: "400+",
    },
    {
      id: "e4",
      title: "Startup Seed 7-Hour Summit",
      type: "hosted",
      date: "2024",
      attendees: "170+",
    },
    {
      id: "e5",
      title: "ETH Global India Week Operations (8 Events)",
      type: "organised",
      date: "2025",
      attendees: "1,000+",
      link: "https://www.blockon.biz/",
    },
  ],
  sessionsOrganised: [
    {
      id: "s1",
      title: "Vibe Coding 0 to 1 Workshop",
      type: "hosted",
      link: "https://youtu.be/zzBp4GQLgFc?si=-VIwU3Oe0RxtEWLF",
      speakerName: "Vrijraj Singh",
      speakerRole: "Google Developer Expert",
      speakerLinkedin: "https://www.linkedin.com/in/vrijrajsingh/",
    },
    {
      id: "s2",
      title: "A Panel Discussion on Google WE Scholarship",
      type: "organised",
      link: "https://youtu.be/T92Vx4-Giy4?si=ZfO5VyQlaLM0gEu7",
      speakerName: "Ridhy Arora, Kavya Choudhary & Sravya Uppalapati",
      speakerRole: "WE Scholars 2024",
      speakerLinkedin: "https://www.linkedin.com/in/ridhy-arora-097784258/",
    },
    {
      id: "s3",
      title: "Google STEP Internship Mentorship Session",
      type: "hosted",
      link: "https://youtu.be/N3iP6_oaum0?si=jXy-XsHsepa7VqxL",
      speakerName: "Jigisha Arora",
      speakerRole: "SWE Intern at Google",
      speakerLinkedin: "https://www.linkedin.com/in/jigisha-arora-212ab5256/",
    },
    {
      id: "s4",
      title: "Mentorship Session on Uber She++ & STAR Programs",
      type: "hosted",
      link: "https://youtu.be/1bm_ARA1zfo?si=6cjYV6596LtTzdCV",
      speakerName: "Radhika Bansal",
      speakerRole: "Software Developer at Uber",
      speakerLinkedin: "https://www.linkedin.com/in/radhika403/",
    },
  ],
  articlesWritten: [
    {
      id: "a1",
      title: "Dream Come True — I Attended My First GitHub Field Day",
      platform: "Medium",
      link: "https://medium.com/@manik23265/dream-come-true-i-attended-my-first-github-field-day-fb1fac9f9216",
      category: "Event Experience",
    },
    {
      id: "a2",
      title: "Everything About Girls in Tech",
      platform: "Hashnode",
      link: "https://manik007.hashnode.dev/everything-about-girls-in-tech",
      category: "Community",
    },
    {
      id: "a3",
      title: "Why I Started Girls Leading Tech?",
      platform: "Hashnode",
      link: "https://manik007.hashnode.dev/why-i-started-girls-in-tech",
      category: "Community",
    },
    {
      id: "a4",
      title: "2024: The Most Dynamic and Introspective Year",
      platform: "LinkedIn",
      link: "https://www.linkedin.com/pulse/2024-most-dynamic-introspective-year-manik--b1vyc",
      category: "Reflection",
    },
    {
      id: "a5",
      title: "Tips to Make a Killer Tech Resume",
      platform: "X (Twitter)",
      link: "https://x.com/manik23265/status/1797148197032460725",
      category: "Career Thread",
    },
  ],
};

const STORAGE_KEY = "manik_portfolio_site_content";

export const getSiteContent = (): SiteContent => {
  if (typeof window === "undefined") return DEFAULT_SITE_CONTENT;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return DEFAULT_SITE_CONTENT;
    const parsed = JSON.parse(saved);
    return {
      ...DEFAULT_SITE_CONTENT,
      ...parsed,
      hero: { ...DEFAULT_SITE_CONTENT.hero, ...parsed.hero },
      about: { ...DEFAULT_SITE_CONTENT.about, ...parsed.about },
      work: parsed.work || DEFAULT_SITE_CONTENT.work,
      impact: parsed.impact || DEFAULT_SITE_CONTENT.impact,
      testimonials: parsed.testimonials || DEFAULT_SITE_CONTENT.testimonials,
      eventsOrganised: parsed.eventsOrganised || DEFAULT_SITE_CONTENT.eventsOrganised,
      sessionsOrganised: parsed.sessionsOrganised || DEFAULT_SITE_CONTENT.sessionsOrganised,
      articlesWritten: parsed.articlesWritten || DEFAULT_SITE_CONTENT.articlesWritten,
    };
  } catch (e) {
    console.error("Failed to load content from localStorage", e);
    return DEFAULT_SITE_CONTENT;
  }
};

export const saveSiteContent = (content: SiteContent) => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    window.dispatchEvent(new Event("site-content-updated"));
  } catch (e) {
    console.error("Failed to save content to localStorage", e);
  }
};

export const resetSiteContent = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("site-content-updated"));
};
