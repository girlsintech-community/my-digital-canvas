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

export interface WhatIDoCard {
  id: string;
  title: string;
  description: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  period: string;
  location?: string;
  link?: string;
  bullets?: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  link?: string;
}

export interface CertCategory {
  id: string;
  category: string;
  items: { name: string; link?: string }[];
}

export interface SiteContent {
  hero: {
    name: string;
    tagline: string;
    bioParagraph1: string;
    bioParagraph2: string;
    location: string;
    milestones: string[];
    roles: string[];
  };
  about: {
    eyebrow: string;
    heading: string;
    description: string;
    paragraphs: string[];
    detailedBio: string[];
    recognitions: string[];
  };
  whatIDo: WhatIDoCard[];
  work: WorkItem[];
  impact: ImpactItem[];
  education: EducationItem[];
  awards: AwardItem[];
  certifications: CertCategory[];
  extracurriculars: {
    achievements: string[];
    leadershipRoles: string[];
    hackathonsAttended: string[];
  };
  skills: {
    technical: string[];
    nonTechnical: string[];
    interpersonal: string[];
  };
  testimonials: TestimonialItem[];
  eventsOrganised: EventItem[];
  sessionsOrganised: SessionItem[];
  articlesWritten: ArticleItem[];
  settings: {
    resumeUrl: string;
    resumeFileName: string;
    email: string;
    linkedin: string;
    github: string;
    youtube: string;
    twitter: string;
    instagram: string;
    metaTitle: string;
    metaDescription: string;
  };
}

export const DEFAULT_SITE_CONTENT: SiteContent = {
  hero: {
    name: "Manik",
    tagline: "I build for impact and bring people together.",
    bioParagraph1: "Hey, I'm Manik — a builder, community architect, and growth catalyst based in Chandigarh, India. Founder of Girls Leading Tech (4,000+ women in tech across 900+ colleges).",
    bioParagraph2: "Ex-Business Development Manager @ BlockOn Ventures, Ex-Community Manager @ ProPeers & Association for Cyber Security. Youngest CMX Director Worldwide, STEM Educator Award winner, and McKinsey Forward Fellow.",
    location: "Chandigarh, India",
    milestones: [
      "Started YouTube at the age of 14.",
      "Scaled a YouTube channel from 0 to 148K at the age of 16.",
      "Built a non-profit community of 4K girls in tech to empower & support them at the age of 19.",
      "Met 5,000+ people at the age of 21.",
      "Currently learning AI & upskilling myself.",
    ],
    roles: ["Builder", "Creator", "Educator", "Podcaster", "Public Speaker", "Leader", "Writer", "Traveller", "Engineer", "Mentor", "Changemaker"],
  },
  about: {
    eyebrow: "About Manik",
    heading: "I bring growth wherever I go.",
    description: "A short story of who I am, what I've built, and why I keep showing up for people.",
    paragraphs: [
      "Hey, I'm Manik — a builder, community architect, and growth catalyst based in Chandigarh, India. I founded Girls Leading Tech, a non-profit community of 4,000+ women in tech across 900+ colleges and 25+ Indian states — hosting 55+ mentorship sessions, hackathons like HackAura (1,700+ hackers) and Global AI Buildathon (700+ hackers), and featuring speakers from Google, Amazon, Microsoft, Uber, Salesforce, and more.",
      "As a Business Development Manager at BlockOn Ventures, I managed partnerships and on-ground operations for 8 exclusive events during ETH Global India Week. I've also served as Community Manager at ProPeers and the Association of Cyber Security.",
      "Recognised as the Youngest CMX Director Worldwide by CMX, a STEM Educator Award winner, and a McKinsey Forward Fellow — I bring a relentless drive to create meaningful impact through community, content, and collaboration.",
    ],
    detailedBio: [
      "My journey began with a simple belief: access to opportunity should never be constrained by background, gender, or location.",
      "Building Girls Leading Tech from scratch taught me that real community isn't built on vanity metrics — it's built on trust, consistency, and genuine care. Over the past few years, we've enabled thousands of young women to break into tech, land global mentorships, and win hackathons.",
      "Beyond community building, my work spans strategic business development in Web3 with BlockOn Ventures, cybersecurity outreach, podcast hosting, and educational advocacy. Whether I'm negotiating partnerships for ETH Global India Week or mentoring a first-time developer, I bring the same energy: high execution, zero fluff, and human-first leadership.",
    ],
    recognitions: [
      "Youngest CMX Director Worldwide",
      "STEM Educator Award Winner",
      "McKinsey Forward Fellow",
      "Founder, Girls Leading Tech (4,000+ Members)",
    ],
  },
  whatIDo: [
    {
      id: "wido1",
      title: "Build Products",
      description: "I turn ideas into tangible products and experiences — from side projects to full-scale platforms that solve real problems for real people.",
    },
    {
      id: "wido2",
      title: "Grow Communities",
      description: "I build tribes, not audiences. From zero to thousands — I create communities where people genuinely belong and grow together.",
    },
    {
      id: "wido3",
      title: "Create Content",
      description: "Writing on Medium & LinkedIn, podcasting, and producing videos on YouTube — sharing stories, ideas, and lessons along the way.",
    },
  ],
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
      metric: "4,000+",
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
  education: [
    {
      id: "edu1",
      institution: "CMX Academy",
      location: "San Francisco, California, United States",
      program: "MBA in Community Management and Community Building",
      period: "June 2024 – March 2026",
      link: "https://www.cmxhub.com/",
    },
    {
      id: "edu2",
      institution: "Udacity",
      program: "AWS AI & ML Scholar",
      period: "March 2026 – April 2026",
      link: "https://www.udacity.com/",
    },
    {
      id: "edu3",
      institution: "McKinsey & Company",
      program: "McKinsey Forward Learning Programme — Fellow",
      period: "Oct 2025 – Dec 2025",
      link: "https://www.mckinsey.com/",
      bullets: [
        "Learned frameworks like APR, EPIC, SMART and how to be more adaptable, resilient while communicating effectively for impact.",
      ],
    },
    {
      id: "edu4",
      institution: "The Community Collective",
      program: "Community Building & Leadership Programme",
      period: "2024 – 2025",
      link: "https://thecommunitycollective.co/",
      bullets: [
        "Secured full scholarship of $6,000 to be a part of Cohort 6, Cohort 7 and Chaos Pilot Program among 100+ candidates worldwide.",
      ],
    },
    {
      id: "edu5",
      institution: "Aspire Institute",
      program: "Leadership Development Program",
      period: "March 2025 – May 2025",
      link: "https://www.aspireleaders.org/",
    },
    {
      id: "edu6",
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
  ],
  awards: [
    {
      id: "aw1",
      title: "STEM Educator Award — Community STEM Champion",
      issuer: "SheCanCode",
      date: "May 2025",
      description: "Shortlisted and emerged as a winner for the STEM Educator Award under the Community STEM Champion category.",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7330160430851440640",
    },
    {
      id: "aw2",
      title: "CMX Director of the Month",
      issuer: "CMX",
      date: "Oct 2024",
      description: "",
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7259609977458216960",
    },
    {
      id: "aw3",
      title: "CMX — Most Promising Director Debut",
      issuer: "CMX",
      date: "",
      description: "",
    },
    {
      id: "aw4",
      title: "Full Scholarship for Cohort #6 & Cohort #7",
      issuer: "The Community Collective",
      date: "Mar 2025",
      description: "One of six individuals selected for a full scholarship worth $2,600 from a pool of over 50 applicants worldwide, twice.",
    },
  ],
  certifications: [
    {
      id: "cert_cat1",
      category: "Community",
      items: [
        { name: "Community Building & Management by The Community Collective", link: "https://media.licdn.com/dms/image/v2/D562DAQG4DdTpbBNawA/profile-treasury-image-shrink_160_160/B56ZbTYzo0H4Ak-/0/1747303219328?e=1775278800&v=beta&t=BTfPkTS9G2VrtbS5YTbWsTtKb-ynnyXb1K3PMpbBaI8" },
        { name: "Community Automation Course by The Community Collective", link: "" },
        { name: "The Community Led Event Program Playbook", link: "https://www.linkedin.com/in/mrmanik/overlay/Certifications/1660443723/treasury/" },
        { name: "Basic Zero to One: Course on Building Meaningful Communities", link: "https://gumroad.com/d/a7ffd6d02db6a8faf2d314da16bd6204" },
      ],
    },
    {
      id: "cert_cat2",
      category: "Technical",
      items: [
        { name: "Blockchain Fundamentals", link: "https://www.linkedin.com/learning/certificates/55c1ff1c8d60c60f7bfa535d313a439d35ff23afaf5149c07abce14d66e67f61/" },
        { name: "Full Stack Web Development by Apna College", link: "" },
        { name: "Google AI Essentials", link: "https://www.credly.com/badges/ae5ffb08-25d5-4e78-ac7c-542c3965864c/public_url" },
        { name: "Google Professional Cyber Security Certificate", link: "https://www.credly.com/badges/b90a600d-2912-4c89-aa56-9e8e3acd1cb1/public_url" },
      ],
    },
  ],
  extracurriculars: {
    achievements: [
      "Internal Finalist at Smart India Hackathon in 2023, 2024, 2025.",
      "Won National Science Day in Coding Category in 2023.",
      "Won Techtonic Talks, an IRL Podcast Shooting Competition in 2026.",
      "Head Coordinator at Hack Heist in 2025.",
      "Represented Brazil as a Finance Minister in Model United Nations 2024.",
    ],
    leadershipRoles: [
      "President of Lamit Club",
      "Marketing Head of THM Club",
      "Community Relations Head, Google Developer Group CGC",
      "Coordinator, Department of International Affairs",
      "Mentor, GDG On Campus",
      "Builder, Letz Connect",
      "Builder, Girls Leading Tech",
    ],
    hackathonsAttended: [
      "Hack This Fall 2024 at Karnavati University, Gujarat",
      "SIH 2023",
      "SIH 2024",
      "SIH 2025",
      "0 to 1 Hackathon at Chandigarh University",
      "Vibe-a-thon",
      "Figma Make-a-thon",
    ],
  },
  skills: {
    technical: ["Python", "Version Control", "React", "TypeScript", "HTML/CSS", "Git"],
    nonTechnical: ["Community Building", "Business Analysis", "Social Media Management", "Content Creation", "Content Writing", "Podcasting"],
    interpersonal: ["Leadership", "Public Speaking", "Team Work", "Effective Communication", "Creative", "Analytical Thinker", "Problem Solver", "Decision Making"],
  },
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
  ],
  settings: {
    resumeUrl: "/__l5e/assets-v1/e28e1218-9790-44cf-a32b-70a85216d50f/Manik_Resume.pdf",
    resumeFileName: "Manik_Resume.pdf",
    email: "manik.officialwork@gmail.com",
    linkedin: "https://www.linkedin.com/in/mrmanik/",
    github: "https://github.com/manik-007",
    youtube: "https://www.youtube.com/@manikofficialll",
    twitter: "https://x.com/manikofficialll",
    instagram: "https://www.instagram.com/manikofficialll/",
    metaTitle: "Manik's Portfolio",
    metaDescription: "Builder, community architect, and growth catalyst. Founder of Girls Leading Tech.",
  },
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
      hero: { ...DEFAULT_SITE_CONTENT.hero, ...(parsed.hero || {}) },
      about: { ...DEFAULT_SITE_CONTENT.about, ...(parsed.about || {}) },
      extracurriculars: { ...DEFAULT_SITE_CONTENT.extracurriculars, ...(parsed.extracurriculars || {}) },
      skills: { ...DEFAULT_SITE_CONTENT.skills, ...(parsed.skills || {}) },
      whatIDo: parsed.whatIDo || DEFAULT_SITE_CONTENT.whatIDo,
      work: parsed.work || DEFAULT_SITE_CONTENT.work,
      impact: parsed.impact || DEFAULT_SITE_CONTENT.impact,
      education: parsed.education || DEFAULT_SITE_CONTENT.education,
      awards: parsed.awards || DEFAULT_SITE_CONTENT.awards,
      certifications: parsed.certifications || DEFAULT_SITE_CONTENT.certifications,
      testimonials: parsed.testimonials || DEFAULT_SITE_CONTENT.testimonials,
      eventsOrganised: parsed.eventsOrganised || DEFAULT_SITE_CONTENT.eventsOrganised,
      sessionsOrganised: parsed.sessionsOrganised || DEFAULT_SITE_CONTENT.sessionsOrganised,
      articlesWritten: parsed.articlesWritten || DEFAULT_SITE_CONTENT.articlesWritten,
      settings: { ...DEFAULT_SITE_CONTENT.settings, ...(parsed.settings || {}) },
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
