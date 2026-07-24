import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

const WallOfLove = () => {
  const navigate = useNavigate();
  const content = useSiteContent();
  const testimonials = content.testimonials && content.testimonials.length > 0
    ? content.testimonials
    : [];
  const [index, setIndex] = useState(0);

  const total = testimonials.length;
  const t = total > 0 ? testimonials[index] : null;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  return (
    <section id="testimonials" className="py-16 md:py-28 px-4 sm:px-6 border-t border-border overflow-hidden">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading
          eyebrow="Wall of Love"
          description="Kind words from people I've worked with, learned from, and built alongside."
        >
          What people say
        </SectionHeading>

        {t && (
          <div className="text-left w-full">
            <blockquote
              key={t.id || index}
              className="border border-border/80 rounded-xl p-6 sm:p-8 bg-card/40 shadow-sm w-full min-h-[220px] flex flex-col justify-between"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-primary/40 leading-none select-none block mb-2">"</span>
                <p className="font-serif text-base sm:text-lg italic text-foreground/90 leading-relaxed mb-6 px-1 break-words">
                  {t.text}
                </p>
              </div>
              <footer className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                <div className="min-w-0 pr-2">
                  <p className="font-sans text-sm font-semibold text-foreground truncate">{t.person}</p>
                  {t.role && (
                    <p className="font-sans text-xs text-muted-foreground mt-0.5">{t.role}</p>
                  )}
                </div>
                {t.linkedin && (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 ml-2"
                    aria-label={`${t.person}'s LinkedIn`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                )}
              </footer>
            </blockquote>

            <div className="flex items-center justify-between mt-5">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-border text-foreground hover:bg-muted transition-colors text-sm"
              >
                <ChevronLeft size={16} /> Prev
              </button>
              <span className="font-sans text-xs text-muted-foreground tabular-nums">
                {index + 1} / {total}
              </span>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-border text-foreground hover:bg-muted transition-colors text-sm"
              >
                Next <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/wall-of-love")}
            className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            See All Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default WallOfLove;

