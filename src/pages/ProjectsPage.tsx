import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";

type Project = {
  title: string;
  tag: string;
  year: string;
  description: string;
  stack: string[];
  link?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Girls Leading Tech",
    tag: "Community platform",
    year: "2023 — present",
    description:
      "A non profit community of 4,000+ girls in tech, with mentorship circles, scholarship guidance, and a session series that has hosted founders, engineers, and DevRel leaders from across the world.",
    stack: ["Community", "Programs", "Partnerships"],
    link: "https://www.linkedin.com/company/girlsleadingtech/",
  },
  {
    title: "Letz Connect",
    tag: "Networking initiative",
    year: "2023 — present",
    description:
      "An initiative that connects students with people already building in tech, turning cold outreach into warm introductions through curated conversations and offline meetups.",
    stack: ["Events", "Networking", "Content"],
  },
  {
    title: "DevRel Uni Journeys",
    tag: "Podcast series",
    year: "2025",
    description:
      "A long form interview series with developer relations professionals across 12+ countries, produced end to end, from guest research and scripting to editing and distribution.",
    stack: ["Podcast", "Editing", "Distribution"],
    link: "https://www.youtube.com/@devreluni",
  },
  {
    title: "This portfolio",
    tag: "Web app",
    year: "2026",
    description:
      "An open source personal site with a hidden admin panel, live GitHub contribution graph, accessibility widget with multi language support, and a shared visitor counter.",
    stack: ["React", "TypeScript", "Tailwind"],
    link: "https://github.com/manik-007",
  },
];

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-24 pb-12 px-6 sm:px-10">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            eyebrow="Projects"
            description="Things I have built, shipped, and kept running, from communities to code."
          >
            Selected projects
          </SectionHeading>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col rounded-xl border border-border bg-card/50 p-5 text-left transition-colors hover:border-foreground/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="no-justify text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {p.tag}
                  </span>
                  <span className="no-justify text-xs text-muted-foreground tabular-nums">{p.year}</span>
                </div>
                <h3 className="no-justify mt-2 font-serif text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="no-justify rounded border border-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-70 transition-opacity"
                  >
                    View project <ArrowUpRight size={15} />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
