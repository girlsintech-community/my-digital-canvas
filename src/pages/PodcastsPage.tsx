import { useEffect } from "react";
import { Youtube } from "lucide-react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";
import { getYouTubeThumb } from "@/lib/youtube";

const PODCASTS = [
  {
    title: "Community Building: Fireside Chat with Shivam Garg",
    guest: "Shivam Garg",
    guestRole: "DevRel at Outdefine",
    guestLinkedIn: "https://www.linkedin.com/in/meshivamgarg/",
    youtube: "https://youtu.be/V9zuwxcllvo?si=RbticcMyoTICUE8B",
  },
  {
    title: "Fireside Chat with Aditya Oberai",
    guest: "Aditya Oberai",
    guestRole: "DevRel at Appwrite",
    guestLinkedIn: "https://www.linkedin.com/in/adityaoberai1/",
    youtube: "https://youtu.be/gubnl5rnkIM?si=_XnYhSVFqXFwKcci",
  },
  {
    title: "College, Communities & Web3",
    guest: "Khushi Panwar",
    guestRole: "Women Techmaker Ambassador",
    guestLinkedIn: "https://www.linkedin.com/in/smilewithkhushi/",
    youtube: "https://youtu.be/jsWSU3ren3M?si=ZQyBjyv6NuaCeM8G",
  },
  {
    title: "The State of Community Building Careers in India, Opportunities and Challenges",
    guest: "Puja Duseja",
    guestRole: "Meta Certified Community Manager",
    guestLinkedIn: "https://www.linkedin.com/in/puja-duseja10/",
    youtube: "https://youtu.be/OM4pom2jkec?si=JnUSJo2no7Jc5e5x",
  },
  {
    title: "The Art of Organising Virtual Hackathons",
    guest: "Pradeepto Sarkar",
    guestRole: "Founder of Namespace",
    guestLinkedIn: "https://www.linkedin.com/in/pradeeptosarkar/",
    youtube: "https://youtu.be/9hTkWEePXlc?si=HU9TYzE4qc79Mk7z",
  },
  {
    title: "Managing Programs and Scaling Communities",
    guest: "Lakshit Pant",
    guestRole: "Program Manager at Microsoft",
    guestLinkedIn: "https://www.linkedin.com/in/laxitpant/",
    youtube: "https://youtu.be/D_-4vUGppQ4?si=tHnFuMN8mzsnQDE_",
  },
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
    title: "She Started Coding at the Age of 11",
    guest: "Aarushi Chottani",
    guestRole: "Author",
    guestLinkedIn: "https://www.linkedin.com/in/aarushi-chottani-80b861322/",
    youtube: "https://youtu.be/UQJ5XhurFbw?si=zB-tWfoEDyh3xF-m",
  },
  {
    title: "From Topper to Amazon Future Engineer Scholar",
    guest: "Siddhi Gupta",
    guestRole: "AFE Scholar",
    guestLinkedIn: "https://www.linkedin.com/in/siddhiguptas/",
    youtube: "https://youtu.be/l2ysqBR6yHI?si=2QSStVRDbZEzw7tC",
  },
  {
    title: "From Application to Acceptance: Naina's Harvard WECode Story",
    guest: "Naina Modi",
    guestRole: "Harvard WECode Scholar",
    guestLinkedIn: "https://www.linkedin.com/in/naina-modi-145209322/",
    youtube: "https://youtu.be/fERcXjig4jM?si=AxpzPxAQHQDTLejt",
  },
  {
    title: "From Student to Harvard HPAIR Delegate",
    guest: "Samridhi Gupta",
    guestRole: "Google WE Scholar",
    guestLinkedIn: "https://www.linkedin.com/in/samridhi-gupta08/",
    youtube: "https://youtu.be/Yx5jibuU5hg?si=rAVCvBkizRqXj7Nd",
  },
  {
    title: "3C's of DevRel — Content, Code & Community",
    guest: "Haimantika Mitra",
    guestRole: "DevRel at DigitalOcean",
    guestLinkedIn: "https://www.linkedin.com/in/haimantika-mitra/",
    youtube: "https://youtu.be/3w7z3bgiGN0?si=iGN1YmmHUmKTtHDC",
  },
  {
    title: "How to Build Communities That Matter",
    guest: "Deepak Kumar",
    guestRole: "Founder, C3 Universe",
    guestLinkedIn: "https://www.linkedin.com/in/deepak910k/",
    youtube: "https://youtu.be/asmVCEOZGzM?si=Ev9xpo6R9uM8hBBb",
  },
];

const PodcastsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <SectionHeading>Podcasts</SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PODCASTS.map((p, index) => {
              const thumb = getYouTubeThumb(p.youtube);
              return (
                <article key={p.youtube} className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-foreground/40">
                  <a href={p.youtube} target="_blank" rel="noopener noreferrer" className="relative block aspect-video overflow-hidden bg-muted">
                    {thumb && <img src={thumb} alt={`${p.title} podcast thumbnail`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />}
                    <span className="absolute left-3 top-3 rounded bg-background/90 px-2 py-1 text-xs font-semibold text-foreground">EP {String(index + 1).padStart(2, "0")}</span>
                    <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-foreground text-background"><Youtube size={16} /></span>
                  </a>
                  <div className="p-4 text-left">
                    <h3 className="no-justify font-semibold text-foreground leading-snug">{p.title}</h3>
                    <p className="no-justify mt-1 text-xs text-muted-foreground">{p.guestRole}</p>
                    <div className="mt-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                      <span>with {p.guest}</span>
                      <a href={p.guestLinkedIn} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">LinkedIn</a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PodcastsPage;
