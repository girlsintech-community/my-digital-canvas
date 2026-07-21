import { useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Education from "@/components/sections/Education";
import WorkExperience from "@/components/sections/WorkExperience";
import Certifications from "@/components/sections/Certifications";
import Recommendations from "@/components/sections/Recommendations";
import Extracurriculars from "@/components/sections/Extracurriculars";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { FileText } from "lucide-react";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
      <Nav />
      <div className="pt-24 pb-12 px-4 sm:px-6 print:pt-0 print:pb-0 print:px-0">
        <div className="max-w-3xl mx-auto overflow-hidden">
          <div className="flex justify-end mb-6 print:hidden">
            <a
              href="https://drive.google.com/file/d/1CH8TSxjXCzhOM4hfzwwK9-xRe2L_gH8P/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              <FileText size={16} />
              View Resume
            </a>
          </div>
          <WorkExperience />
          <Education />
          <Skills />
          <Certifications />
          <Extracurriculars />
          <Recommendations />
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Resume;
