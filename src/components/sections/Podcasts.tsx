import { Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { getYouTubeThumb } from "@/lib/youtube";

const DEFAULT_PODCASTS = [
  {
    title: "AR, Community & Diversity",
    guest: "Chhavi Garg",
    guestRole: "Founder, BharatXR",
    guestLinkedIn: "https://www.linkedin.com/in/chhavigg/",
    youtube: "https://youtu.be/asmVCEOZGzM?si=K9mqkhTybPPxQEI-",
  },
  {
    title: "Building Tech Communities",
    guest: "Bhawna Chauhan",
    guestRole: "Founder, SheBuilds",
    guestLinkedIn: "https://www.linkedin.com/in/connectbhawna/",
    youtube: "https://youtu.be/LwLbsQ4UN1A?si=Qu1rFIVUM-of_aRw",
  },
  {
    title: "How to Build Communities That Matter",
    guest: "Deepak Kumar",
    guestRole: "Founder, C3 Universe",
    guestLinkedIn: "https://www.linkedin.com/in/deepak910k/",
    youtube: "https://youtu.be/asmVCEOZGzM?si=Ev9xpo6R9uM8hBBb",
  },
];

const Podcasts = () => {
  const navigate = useNavigate();

  return (
    <section id="podcasts" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading>Podcasts</SectionHeading>
        <div className="space-y-4">
          {DEFAULT_PODCASTS.map((p) => {
            const thumb = getYouTubeThumb(p.youtube);
            return (
            <div
              key={p.youtube}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 border-b border-border py-5 text-center md:text-left"
            >
              {thumb && (
                <a href={p.youtube} target="_blank" rel="noopener noreferrer" className="shrink-0 block w-32 sm:w-40 aspect-video overflow-hidden rounded-md border border-border bg-muted">
                  <img src={thumb} alt={`${p.title} thumbnail`} loading="lazy" className="w-full h-full object-cover" />
                </a>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base md:text-lg font-medium text-foreground leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  with{" "}
                  <a
                    href={p.guestLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-foreground transition-colors"
                  >
                    {p.guest}
                  </a>
                  <span className="mx-2">,</span>
                  {p.guestRole}
                </p>
              </div>
              <a
                href={p.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
              >
                <Youtube size={16} />
                Watch
              </a>
            </div>
            );
          })}
        </div>
        <button
          onClick={() => navigate("/podcasts")}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
        >
          See All Podcasts
        </button>
      </div>
    </section>
  );
};

export default Podcasts;
