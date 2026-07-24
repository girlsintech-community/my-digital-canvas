import { useEffect } from "react";
import Nav from "@/components/sections/Nav";
import Education from "@/components/sections/Education";
import WorkExperience from "@/components/sections/WorkExperience";
import Certifications from "@/components/sections/Certifications";
import Recommendations from "@/components/sections/Recommendations";
import Extracurriculars from "@/components/sections/Extracurriculars";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import { Download, ExternalLink, FileText } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const Resume = () => {
  const content = useSiteContent();
  const resumeUrl = content.settings?.resumeUrl || "";
  const resumeFileName = content.settings?.resumeFileName || "Manik_Resume.pdf";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = async () => {
    try {
      const res = await fetch(resumeUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = resumeFileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch {
      window.open(resumeUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground print:bg-white print:text-black">
      <Nav />
      <div className="pt-24 pb-12 px-4 sm:px-6 print:pt-0 print:pb-0 print:px-0">
        <div className="max-w-3xl mx-auto overflow-hidden">
          <div className="flex flex-wrap justify-end gap-2 mb-6 print:hidden">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              <Download size={16} />
              Download PDF
            </button>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
            >
              <ExternalLink size={16} />
              Open in New Tab
            </a>
          </div>

          {resumeUrl && (
            <div className="mb-8 rounded-2xl border border-border overflow-hidden bg-card shadow-sm print:hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <FileText size={14} />
                  <span className="font-medium">{resumeFileName}</span>
                </div>
              </div>
              <object
                data={`${resumeUrl}#view=FitH`}
                type="application/pdf"
                className="w-full h-[80vh] bg-background"
                aria-label="Resume PDF preview"
              >
                <iframe
                  src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                    window.location.origin + resumeUrl
                  )}&embedded=true`}
                  className="w-full h-[80vh]"
                  title="Resume PDF preview"
                />
              </object>
            </div>
          )}

          <div className="border border-border rounded-2xl p-6 sm:p-10 shadow-sm bg-card print:border-none print:shadow-none print:p-0">
            <div className="text-center pb-6 mb-6 border-b border-foreground/20">
              <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider uppercase text-foreground mb-1">
                MANIK
              </h1>
              <p className="font-serif italic text-sm sm:text-base text-muted-foreground mb-2">
                Builder • Community Architect • Growth Catalyst
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Chandigarh, India · manik.officialwork@gmail.com ·{" "}
                <a href="https://www.linkedin.com/in/mrmanik/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">linkedin.com/in/mrmanik</a> ·{" "}
                <a href="https://github.com/manik-007" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">github.com/manik-007</a>
              </p>
            </div>

            <WorkExperience />
            <Education />
            <Skills />
            <Certifications />
            <Extracurriculars />
            <Recommendations />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
