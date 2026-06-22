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
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>Podcasts</SectionHeading>
          <div className="space-y-4 mt-8">
            {PODCASTS.map((p) => {
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
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PodcastsPage;
