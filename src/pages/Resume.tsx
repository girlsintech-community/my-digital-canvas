import { useEffect, useState } from "react";
import Nav from "@/components/sections/Nav";
import Education from "@/components/sections/Education";
import WorkExperience from "@/components/sections/WorkExperience";
import Certifications from "@/components/sections/Certifications";
import Recommendations from "@/components/sections/Recommendations";
import Extracurriculars from "@/components/sections/Extracurriculars";
import Skills from "@/components/sections/Skills";
import Footer from "@/components/sections/Footer";
import { Download, ExternalLink, FileText, Eye, EyeOff } from "lucide-react";
import { useSiteContent } from "@/hooks/useSiteContent";

const Resume = () => {
  const content = useSiteContent();
  const resumeUrl = content.settings?.resumeUrl || "";
  const resumeFileName = content.settings?.resumeFileName || "Manik_Resume.pdf";
  const [showPdf, setShowPdf] = useState(false);
  const [ghTotal, setGhTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("https://github-contributions-api.jogruber.de/v4/manik-007?y=all")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { total?: Record<string, number> } | null) => {
        if (cancelled || !d?.total) return;
        const sum = Object.values(d.total).reduce((a, b) => a + b, 0);
        setGhTotal(sum);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

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
            {resumeUrl && (
              <button
                onClick={() => setShowPdf((v) => !v)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors text-foreground"
              >
                {showPdf ? <><EyeOff size={16} /> Hide Resume</> : <><Eye size={16} /> View Resume</>}
              </button>
            )}
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

          {resumeUrl && showPdf && (
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

            <section id="github-contributions" className="mb-8 text-left">
              <div className="border-b border-foreground/30 pb-1 mb-4 flex items-baseline justify-between gap-4 flex-wrap">
                <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
                  GitHub Contributions
                </h2>
                {ghTotal !== null && (
                  <span className="text-xs text-muted-foreground">
                    <strong className="text-foreground font-semibold">{ghTotal.toLocaleString()}</strong> contributions all-time
                  </span>
                )}
              </div>
              <a
                href="https://github.com/manik-007"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-border/60 bg-card/40 p-4 hover:border-foreground/30 transition-colors"
                aria-label="View GitHub profile"
              >
                <img
                  src="https://ghchart.rshah.org/22c55e/manik-007"
                  alt="Manik's GitHub contributions graph"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <p className="mt-2 text-xs text-muted-foreground text-center">
                  Live from <span className="underline">github.com/manik-007</span>
                </p>
              </a>
            </section>

            <Recommendations />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
