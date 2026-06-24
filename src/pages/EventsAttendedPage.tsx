import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";

type EventItem = {
  name: string;
  date?: string;
  location?: string;
  description?: string;
  images?: string[];
};

// Highlighted events with extra detail. Plain entries appear in the bottom list.
const HIGHLIGHTED: EventItem[] = [
  { name: "Bharat Secure Summit", description: "A national gathering on cybersecurity, digital infrastructure and India's secure-tech roadmap." },
  { name: "TiECon Chandigarh 2026", description: "TiE's flagship entrepreneurship conference — connected with founders, investors and the regional startup ecosystem." },
  { name: "IMP Pitch", description: "Innovation Mission Punjab pitch event showcasing early-stage startups from across the state." },
  { name: "IdeaX", description: "An ideation showcase bringing together student innovators and industry mentors." },
  { name: "Build with AI Mohali 2026", description: "Google's Build with AI event — hands-on sessions on Gemini, agentic AI and developer tooling." },
  { name: "Devfest Chandigarh 2023", description: "Annual Google Developer Group flagship featuring talks across web, cloud and AI." },
  { name: "GitHub Field Day", description: "GitHub community gathering with maintainers, campus experts and open-source organisers." },
  { name: "BSCon", description: "Blockchain & Web3 conference at IIT Delhi — pitched sponsorships and met builders across India." },
  { name: "ETH Global Pragma", description: "Ethereum-focused builder event with workshops and project showcases." },
];

const PLAIN_EVENTS: string[] = [
  "Date with Dev", "Devfest Jalandhar 2023", "Devfest Noida 2023", "MUN", "CNCF Chandigarh 2023",
  "WOW Delhi", "D2D Chandigarh Conf", "IO Dehradun", "GCCD Chandigarh 2024", "InBM 2024",
  "Devfest 2024", "Build with AI at CGC University", "E Summit IIT Delhi", "Union Labs Meetup",
  "Chandigarh Meetup", "IWD: Redefine Possible", "AI Workshop", "Founders & Funders", "Aethir Event",
  "Tech Talk 1.0", "Nova Meetup", "Metamorphosis", "AR Workshop", "E-Cell Event", "Water Day",
  "Conclave on Skill Development for MSME Sector 2025", "DPG Dialogue", "Devfest Noida 2025",
  "GenAI Hackathon", "Haryana Manufacturing Conclave", "Arise Summit", "Techsprint Screening",
  "Techsprint Finale", "Floral Fest", "MUG Chandigarh Meetup", "Tech Talk 2.0",
  "AI for Atmanirbhar Bharat", "AI for Impact Summit", "Gitinfinity", "Progressive Punjab Summit",
  "Hack N Win 3.0", "Entrepreneurship Awareness Session", "IOT Convergence",
  "Builder's Lab Mentorship Session",
];

const GALLERY: string[] = [];

const EventsAttendedPage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/community" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
            <ArrowLeft size={16} /> Back to Community
          </Link>

          <SectionHeading>Events Attended</SectionHeading>
          <p className="text-sm text-muted-foreground text-center mt-3 mb-10">
            A collection of conferences, summits, meetups and hackathons I have attended over the years.
          </p>

          {/* Highlighted */}
          <div className="space-y-4">
            {HIGHLIGHTED.map((e) => (
              <div key={e.name} className="border border-border rounded-lg p-5 hover:border-foreground/30 transition-colors">
                <h3 className="font-serif text-lg font-semibold text-foreground">{e.name}</h3>
                {(e.date || e.location) && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {[e.date, e.location].filter(Boolean).join(" · ")}
                  </p>
                )}
                {e.description && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{e.description}</p>}
              </div>
            ))}
          </div>

          {/* Gallery */}
          {GALLERY.length > 0 && (
            <div className="mt-12">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Gallery</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {GALLERY.map((src, i) => (
                  <img key={i} src={src} alt="" className="w-full h-32 sm:h-40 object-cover rounded-lg" loading="lazy" />
                ))}
              </div>
            </div>
          )}

          {/* Other events */}
          <div className="mt-12">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-4">More Events</h3>
            <div className="flex flex-wrap gap-2">
              {PLAIN_EVENTS.map((e, i) => (
                <span key={i} className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground">{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsAttendedPage;
