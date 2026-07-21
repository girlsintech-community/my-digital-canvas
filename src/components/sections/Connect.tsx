import { Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const Connect = () => (
  <section id="connect" className="py-16 md:py-24 px-4 sm:px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading
        eyebrow="Get in touch"
        description="Got an idea, a collaboration, or just want to chat? Book a 15-minute slot directly on my calendar."
      >
        Let's Connect
      </SectionHeading>

      <div className="mb-6">
        <a
          href="https://cal.com/themanikdiaries/15min?overlayCalendar=true"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity shadow-sm"
        >
          <Calendar size={16} />
          Book a 15-Min Call on Cal.com
        </a>
      </div>

      <div className="w-full overflow-hidden rounded-2xl border border-border bg-background shadow-sm mt-6">
        <iframe
          src="https://cal.com/themanikdiaries/15min?embed=true"
          className="w-full h-[600px] border-none"
          title="Book a call with Manik"
        />
      </div>
    </div>
  </section>
);

export default Connect;
