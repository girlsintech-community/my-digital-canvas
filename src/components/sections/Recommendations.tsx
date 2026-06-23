import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "./SectionHeading";

const RECS = [
  {
    name: "Shivam Garg",
    title: "Developer Relation @ HeLaLabs (L1) | Culture + Community x Developer Growth | Program Manager @GSSoC 23 | Contributor @Chainlink @Hivechain @COREchain",
    linkedin: "https://www.linkedin.com/in/meshivamgarg/",
    date: "April 20, 2026",
    relation: "Shivam managed Manik directly",
    text: "There are people you work with and then there are people you feel lucky to have crossed paths with, Manik is the second kind, easily, effortlessly. We didn\'t just work together, we built things, broke things, laughed through chaos, and somewhere in between, I got to witness the kind of person he really is. And honestly, it\'s rare; rare in the most beautiful way. Manik carries this quiet fire, not loud, not showy, but deeply intentional. Everything he touches has a bit of him in it — a bit of care, a bit of honesty, a bit of heart (a lot of heart, actually). He doesn\'t just show up to do the work, he shows up to mean it. In a world that constantly nudges you to fit in, to smoothen your edges, to become a more acceptable version of yourself, he does the opposite. He protects his edges. He questions the obvious. He walks away from the easy middle when it feels too empty, too average, too not him. And that\'s what makes him, HIM. There\'s a softness to his strength, a sincerity in the way he connects, and a kind of emotional honesty that you can\'t fake even if you tried. You trust him, not because he says the right things, but because you feel that he means them. Wherever he goes next, I know one thing for sure — he won\'t just leave behind work done. He\'ll leave behind a feeling. A mark. A story people will remember and smile about. And yeah, if you ever get a chance to work with him, take it. Wholeheartedly recommending him.",
  },
  {
    name: "Shruti Sharma (Youth Ki Awaaz)",
    title: "I ghostwrite for social causes • gender advocates & NGOs | 60+ articles published | Youth Ki Awaaz",
    linkedin: "https://www.linkedin.com/in/shruti-sharma-81a079369",
    date: "April 25, 2026",
    relation: "Manik was senior to Shruti but didn\'t manage Shruti directly",
    text: "As a junior, I have had the privilege of receiving guidance from Manik, and his mentorship has been instrumental in my professional development. He is a standout professional who balances deep intellectual strategy with a highly effective, inclusive leadership style. He has a unique ability to break down complex challenges into actionable insights, consistently fostering an environment where those around him feel empowered to excel. His commitment to high standards, paired with his ability to lead with both clarity and empathy, makes him an invaluable asset to any team.",
  },
  {
    name: "Deepti Midha",
    title: "Intern @PwC Acceleration Center India",
    linkedin: "https://www.linkedin.com/",
    date: "April 25, 2026",
    relation: "Deepti managed Manik directly",
    text: "I\'ve had the opportunity to work closely with Manik, and I can confidently say he is one of the most dedicated and thoughtful individuals I\'ve come across. Manik has a natural ability to bring people together and build meaningful communities. His passion for creating impact is evident in everything he does, whether it\'s mentoring students, leading initiatives, or contributing to larger ecosystem-building efforts. What truly stands out is his consistency, positive attitude, and willingness to go the extra mile to support others. He is reliable, proactive, and always approaches challenges with a solution-oriented mindset. Beyond his professional strengths, Manik is also a genuinely supportive and approachable person, making him a great teammate to work with. I strongly recommend Manik for any opportunity—he will be a valuable asset wherever he goes.",
  },
  {
    name: "Dr. Aayushi Gautam",
    title: "Assistant Professor | PhD | Computer Vision | Deep Learning | Image Processing",
    linkedin: "https://www.linkedin.com/in/dr-aayushi-gautam-7a2b25165/",
    date: "November 24, 2025",
    relation: "Manik's Teacher",
    text: "I am pleased to recommend Manik, one of my brightest and most dedicated students. From the very beginning, he has stood out for his strong technical skills, sharp problem-solving abilities, and an impressive curiosity for learning. Over time, I have had the privilege of watching Manik grow, mature, and gain remarkable confidence in his approach. His ability to understand complex concepts, apply them effectively, and continuously refine his work sets him apart from his peers. He is proactive, hardworking, and consistently pushes himself to deliver high-quality results. Manik's professionalism, clarity of thought, and willingness to take on challenges make him an asset to any team. I am confident that he will continue to excel in every role he takes up.",
  },
  {
    name: "Bhawna Chauhan",
    title: "Founder SheBuilds | GitHub Campus Expert",
    linkedin: "https://www.linkedin.com/in/connectbhawna/",
    date: "December 19, 2025",
    relation: "Worked with Manik on the same team",
    text: "It was a pleasure working with Manik across multiple initiatives, from hosting community meetups to organizing a full-scale hackathon. He brings a rare combination of hands-on execution and clear strategic thinking — always knowing what needs to be done and how to get it done. Manik is exceptionally hardworking, dependable and proactive. He consistently takes ownership, handles complexity calmly, and ensures everything runs smoothly, even under tight timelines. His ability to coordinate teams, manage logistics, and keep momentum high makes him a strong asset to any ecosystem or community-led initiative.",
  },
  {
    name: "Dr. Kapil Mehta",
    title: "Professor & Head, Department of Emerging Technologies, Ph.D (CSE, Cyber Security)",
    linkedin: "https://www.linkedin.com/in/dr-kapil-mehta-72476089/",
    date: "December 23, 2025",
    relation: "Managed Manik directly",
    text: "I've had the pleasure of knowing Manik professionally and personally, and I can confidently say he brings dedication, creativity, and a strong growth mindset to every challenge he takes on. Manik is proactive in learning, quick to adapt in complex environments, and consistently approaches projects with enthusiasm and integrity. I've seen Manik contribute meaningfully to discussions and deliver work that reflects high standards — like he worked as an active coordinator for managing GDG events. Any team would benefit from Manik's positive attitude, continuous drive to improve, and commitment to excellence.",
  },
  {
    name: "Harpreet Kaur",
    title: "Soft Skills & Personality Development Trainer | Campus to Corporate Coach",
    linkedin: "https://www.linkedin.com/in/kaurharpreet191095/",
    date: "February 26, 2026",
    relation: "Manik's Teacher",
    text: "I had the opportunity to teach Manik during his B.Tech, and he has consistently been one of the most diligent and proactive students in the cohort. I have seen his growth from the initial stages of consciously practicing his skills to achieving impressive heights, especially in communication. His transformation into a confident and articulate communicator reflects discipline, consistency, and a strong growth mindset. He is responsible, engaged, and always willing to put in the effort required to improve. I'm confident he will add value wherever he goes.",
  },
  {
    name: "Nandika Gupta",
    title: "Scholar, SheFi",
    linkedin: "https://www.linkedin.com/in/nandika-gupta/",
    date: "",
    relation: "Member of Girls Leading Tech",
    text: "I have been part of the community initiatives led by him, especially Girls Leading Tech, and have attended multiple sessions and events. His work in building and scaling communities is genuinely impactful — from hosting high-quality sessions to organizing hackathons and providing guidance sessions for internships, creating real opportunities for students to learn, network, and grow. Personally, it helped me discover internships, programs, and connect with many people in tech. I strongly recommend him for his leadership, consistency, and ability to create meaningful impact through community building. His work truly empowers students and makes a difference.",
  },
  {
    name: "Hirva Jobanputra",
    title: "Barista, BrewyTales",
    linkedin: "https://www.linkedin.com/in/hirva-jobanputra-607b78310",
    date: "",
    relation: "Member of Girls Leading Tech",
    text: "He is a genuinely kind and supportive person who always encourages others to do better. What stands out the most is not just his helpful nature, but also the depth of knowledge he has in the tech field. He explains things with clarity and patience, making even difficult concepts feel approachable. It is rare to find someone who is both highly skilled and so willing to uplift others at the same time. I truly appreciate his constant support and encouragement. Anyone who gets a chance to learn from or work with him is genuinely lucky.",
  },
  {
    name: "Shruti Sharma",
    title: "Creative Writer, Youth Ki Awaaz",
    linkedin: "https://www.linkedin.com/in/shruti-sharma-81a079369",
    date: "",
    relation: "Member of Letz Connect",
    text: "Manik is an exceptional leader who possesses a rare blend of intellectual depth and inclusive mentorship. Being a part of the Letz Connect community, I have seen firsthand his ability to navigate complex challenges with a strategic yet empathetic approach. He doesn't just manage projects; he builds ecosystems where every team member feels empowered to contribute. His commitment to professional excellence, paired with a genuine heart of gold for supporting his peers, makes him an invaluable asset to any high-performing team. Manik is a visionary professional who brings both technical insight and a human-centric leadership style to the table. I highly recommend him for any role that requires strategic community building and high-level project management.",
  },
];

const RecCard = ({ r }: { r: typeof RECS[0] }) => {
  const [expanded, setExpanded] = useState(false);
  const preview = r.text.slice(0, 120) + "...";

  return (
    <blockquote className="glass-card rounded-2xl p-4 sm:p-6 overflow-hidden">
      <p className="font-serif text-sm italic text-foreground leading-relaxed mb-3 break-words">
        "{expanded ? r.text : preview}"
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors mb-3"
      >
        {expanded ? "Show less" : "Read more"}
        <ChevronDown size={14} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>
      <footer>
        <div className="flex items-center gap-2 flex-wrap">
          <p className="font-sans text-sm font-semibold text-foreground">{r.name}</p>
          <a href={r.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p className="font-sans text-xs text-muted-foreground break-words">{r.title}</p>
        {r.relation && <p className="font-sans text-xs text-muted-foreground mt-0.5">{r.relation}{r.date ? `, ${r.date}` : ""}</p>}
      </footer>
    </blockquote>
  );
};

const Recommendations = () => (
  <section id="recommendations" className="py-12 md:py-16 overflow-hidden">
    <div className="text-center">
      <SectionHeading><span className="text-base sm:text-lg md:text-xl">Recommendations</span></SectionHeading>
      <div className="space-y-6 text-left">
        {RECS.map((r) => (
          <RecCard key={r.name} r={r} />
        ))}
      </div>
      <div className="mt-8">
        <a
          href="https://forms.gle/4HmEmcESEF1eFqyi6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          Recommend Me
        </a>
      </div>
    </div>
  </section>
);

export default Recommendations;
