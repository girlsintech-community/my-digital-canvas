import SectionHeading from "./SectionHeading";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const About = () => {
  const navigate = useNavigate();
  const content = useSiteContent();

  const paragraphs = content.about?.paragraphs || [];

  return (
    <section id="about" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          eyebrow={content.about?.eyebrow || "About"}
          description={content.about?.description || "A short story of who I am, what I've built, and why I keep showing up for people."}
        >
          {content.about?.heading || "I bring growth wherever I go."}
        </SectionHeading>
        <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg text-left">
          {paragraphs.map((p, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-8 pt-4">
          <button
            onClick={() => navigate("/about")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
          >
            <span>See More About Me</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
