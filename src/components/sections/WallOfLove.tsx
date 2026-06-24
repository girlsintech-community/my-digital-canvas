import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    text: "It was great connecting with Manik and learning about all the good work he's doing in his community.",
    person: "Desmond John",
    role: "Founder of Vibe Guide Ventures",
    linkedin: "https://www.linkedin.com/in/desmond-john/",
  },
  {
    text: "Working with Manik is always a pleasure and a huge inspiration.",
    person: "Aashi Raghuvanshi",
    role: "Agentic AI & Automation Engineer",
    linkedin: "https://www.linkedin.com/in/aashi-raghuwanshi/",
  },
  {
    text: "Manik is a pro multi-tasker and a truly gem of a person. Kudos to his vision towards empowering girls!",
    person: "Catherine Infanta",
    role: "Harvard Aspire Leader",
    linkedin: "https://www.linkedin.com/in/catherine-infanta-/",
  },
  {
    text: "Manik's work is truly inspiring! Big shoutout for building something so impactful. I've had the privilege of watching the community grow and thrive.",
    person: "Samridhi Gupta",
    role: "Google WE Scholar",
    linkedin: "https://www.linkedin.com/in/samridhi-gupta08/",
  },
];

const WallOfLove = () => {
  const navigate = useNavigate();

  return (
    <section id="testimonials" className="py-16 md:py-28 px-4 sm:px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading>Wall of Love</SectionHeading>
        <div className="columns-1 md:columns-2 gap-4 sm:gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.person}
              className="border border-border rounded-lg p-5 sm:p-8 bg-card text-left break-inside-avoid mb-4 sm:mb-6"
            >
              <span className="font-serif text-3xl sm:text-4xl text-border leading-none select-none">"</span>
              <p className="font-serif text-sm sm:text-base italic text-foreground leading-relaxed -mt-2 mb-4 sm:mb-5">
                {t.text}
              </p>
              <footer className="flex items-center justify-between">
                <div>
                  <p className="font-sans text-sm font-semibold text-foreground">{t.person}</p>
                  {t.role && (
                    <p className="font-sans text-xs text-muted-foreground">{t.role}</p>
                  )}
                </div>
                {t.linkedin && (
                  <a href={t.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 ml-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                )}
              </footer>
            </blockquote>
          ))}
        </div>
        <button
          onClick={() => navigate("/wall-of-love")}
          className="mt-8 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          See All Testimonials
        </button>
      </div>
    </section>
  );
};

export default WallOfLove;
