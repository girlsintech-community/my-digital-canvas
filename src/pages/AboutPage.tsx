import { useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";
import ScrollToTop from "@/components/ScrollToTop";
import { useSiteContent } from "@/hooks/useSiteContent";
import { Sparkles, Heart, Award, Users, Globe, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const content = useSiteContent();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedParagraphs = content.about.detailedBio || [];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <div>
        <Nav />
        <main className="pt-28 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Header */}
            <div>
              <span className="text-xs font-mono font-semibold tracking-widest text-primary uppercase mb-2 block">
                Detailed Biography
              </span>
              <SectionHeading
                eyebrow={content.about.eyebrow}
                description={content.about.description}
              >
                {content.about.heading}
              </SectionHeading>
            </div>

            {/* Primary Bio Card */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-10 shadow-sm space-y-6 text-foreground/90 leading-relaxed text-base sm:text-lg">
              <div className="flex items-center gap-3 text-primary font-semibold font-mono text-xs sm:text-sm">
                <Sparkles className="w-5 h-5" />
                <span>BUILDER • COMMUNITY ARCHITECT • GROWTH CATALYST</span>
              </div>
              {content.about.paragraphs.map((p, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>

            {/* Extended Story & Philosophy */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground flex items-center gap-2">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500/20" />
                My Core Philosophy & Journey
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl border border-border bg-card/40 space-y-2">
                  <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">Community First</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Building inclusive ecosystems where every individual has access to mentorship, growth, and real-world opportunities.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card/40 space-y-2">
                  <div className="p-2 w-fit rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">High Execution</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    From 55+ tech sessions to 8 ETH India events — scaling partnerships and operational excellence with speed.
                  </p>
                </div>
                <div className="p-5 rounded-xl border border-border bg-card/40 space-y-2">
                  <div className="p-2 w-fit rounded-lg bg-amber-500/10 text-amber-500">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">Relentless Empathy</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Recognised as Youngest CMX Director & McKinsey Fellow because genuine care for people drives everything I do.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Story Section */}
            {detailedParagraphs.length > 0 && (
              <div className="border-t border-border pt-8 space-y-6">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                  Behind The Scenes
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
                  {detailedParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Key Recognition Badges */}
            <div className="bg-muted/40 border border-border rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-serif text-lg font-bold text-foreground flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                Key Recognitions & Leadership Roles
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-foreground/90 font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Youngest CMX Director Worldwide
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  STEM Educator Award Winner
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  McKinsey Forward Fellow
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Founder, Girls Leading Tech (4,000+ Members)
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center pt-6">
              <button
                onClick={() => navigate("/connect")}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-medium hover:bg-primary hover:text-primary-foreground transition-all shadow-md"
              >
                <span>Let's Connect & Build Together</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
