import { useEffect, useState } from "react";
import { ArrowUpRight, Youtube } from "lucide-react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SectionHeading from "@/components/sections/SectionHeading";
import ArticleThumb from "@/components/ArticleThumb";
import { getYouTubeThumb } from "@/lib/youtube";

type ArticleCategory = {
  label: string;
  platform: string;
  articles: { title: string; link: string }[];
};

const CATEGORIES: ArticleCategory[] = [
  {
    label: "Medium Articles",
    platform: "Medium",
    articles: [
      { title: "Dream Come True — I Attended My First GitHub Field Day", link: "https://medium.com/@manik23265/dream-come-true-i-attended-my-first-github-field-day-fb1fac9f9216" },
      { title: "GitHub Field Day India 2021 & 2022 Edition", link: "https://medium.com/@manik23265/github-field-day-india-2021-2022-edition-%EF%B8%8F-f7115288c613" },
      { title: "D2D Chandigarh Meetup", link: "https://medium.com/@manik23265/d2d-chandigarh-meetup-5c426053221b" },
      { title: "BeraBash Chandigarh", link: "https://medium.com/@manik23265/berabash-chandigarh-08de7e202637" },
      { title: "GitHub Field Day", link: "https://medium.com/@manik23265/github-field-day-%EF%B8%8F-4f91b6483099" },
      { title: "1st Time Volunteer — KotlinConf Delhi NCR", link: "https://medium.com/@manik23265/1st-time-volunteer-kotlinconf-dehli-ncr-955c0e82c937" },
      { title: "GDSC Wonder of Wonders Delhi NCR", link: "https://medium.com/@manik23265/gdsc-wonder-of-wonders-delhi-ncr-690e4ae86be1" },
      { title: "Not Able to Find the Event Venue ft WTM Delhi", link: "https://medium.com/@manik23265/not-able-to-find-the-event-venue-ft-wtm-delhi-6419f2f27664" },
      { title: "CNCG Chandigarh 1st Meetup!", link: "https://medium.com/@manik23265/cncg-chandigarh-1st-meetup-d4b07095578f" },
      { title: "My First Hackathon — Hack This Fall", link: "https://medium.com/@manik23265/my-first-hackathon-hack-this-fall-c36e8e624aa7" },
      { title: "My First Model United Nations", link: "https://medium.com/@manik23265/my-first-model-united-nations-594c168398c1" },
      { title: "How I Made My Way to Devfest Noida — 3rd Devfest of the Year", link: "https://medium.com/@manik23265/how-i-made-my-way-to-devfest-noida-3rd-devfest-of-the-year-51a1ca3f7f96" },
      { title: "Journey of My Second Devfest!", link: "https://medium.com/@manik23265/journey-of-my-second-devfest-12ce29553f61" },
      { title: "The Untold Story of My First Devfest!", link: "https://medium.com/@manik23265/my-first-devfest-as-well-as-the-first-event-ive-attended-outside-college-the-beginning-of-a-new-2119a59c25b4" },
      { title: "Top 5 Books You Should Read If You Are a College Student!", link: "https://medium.com/@manik23265/top-5-books-you-should-read-if-you-are-a-college-student-099a134acacc" },
      { title: "Have You Ever Felt That You Wasted Your Time?", link: "https://medium.com/@manik23265/have-you-ever-felt-that-you-wasted-your-time-9b6ec3fec6c9" },
      { title: "Have You Decided on Your Career Path?", link: "https://medium.com/@manik23265/have-you-decided-on-your-career-path-1909972cbd52" },
      { title: "Be the Master of Your Mind — Stop Doing It!", link: "https://medium.com/@manik23265/be-the-master-of-your-mind-stop-doing-it-cb44a4b6244f" },
      { title: "Time Is Flying", link: "https://medium.com/@manik23265/time-is-flying-days-are-running-everyone-is-going-too-fast-even-everything-is-going-too-fast-460b5c18aa77" },
    ],
  },
  {
    label: "Hashnode Articles",
    platform: "Hashnode",
    articles: [
      { title: "Everything About Girls in Tech", link: "https://manik007.hashnode.dev/everything-about-girls-in-tech" },
      { title: "Why I Started Girls Leading Tech?", link: "https://manik007.hashnode.dev/why-i-started-girls-in-tech" },
    ],
  },
  {
    label: "LinkedIn Articles",
    platform: "LinkedIn",
    articles: [
      { title: "2024: The Most Dynamic and Introspective Year", link: "https://www.linkedin.com/pulse/2024-most-dynamic-introspective-year-manik--b1vyc" },
      { title: "Why I Attend So Many Online Sessions?", link: "https://www.linkedin.com/pulse/why-i-attend-so-many-online-sessions-manik--rc6qc" },
    ],
  },
  {
    label: "Twitter Threads",
    platform: "X (Twitter)",
    articles: [
      { title: "Takeaway from Ankush Dharkar Twitter Space Part 2", link: "https://x.com/manik23265/status/1918709059760566760" },
      { title: "Takeaway from Ankush Dharkar Twitter Space Part 1", link: "https://x.com/manik23265/status/1916580561348686066" },
      { title: "Time Is Everything", link: "https://x.com/manik23265/status/1877374682220933488" },
      { title: "I Guided 30+ Juniors", link: "https://x.com/manik23265/status/1842174159968710769" },
      { title: "It's Better to Act What Is Best for You", link: "https://x.com/manik23265/status/1828340604587135475" },
      { title: "Tips to Make a Killer Tech Resume", link: "https://x.com/manik23265/status/1797148197032460725" },
      { title: "Notes of Twitter Space on Time Management", link: "https://x.com/manik23265/status/1792099455774167453" },
      { title: "Get Most Out of Your College as an Engineering Student", link: "https://x.com/manik23265/status/1791358831353864258" },
      { title: "How to Change Yourself?", link: "https://x.com/manik23265/status/1789969469952958938" },
      { title: "Why? Because I Find Marketing Interesting!", link: "https://x.com/manik23265/status/1789670155418481005" },
      { title: "True Hackathon Vibe of Hack This Fall", link: "https://x.com/manik23265/status/1756714539817779673" },
    ],
  },
  {
    label: "LinkedIn Posts",
    platform: "LinkedIn",
    articles: [
      { title: "Conquering Your Fears, Problems, Challenges and Fulfilling Your Dreams", link: "https://www.linkedin.com/posts/mrmanik_conquering-your-fears-problems-challenges-activity-7301854705075269632--Kz9" },
      { title: "Anyone Can Build a Community", link: "https://www.linkedin.com/posts/mrmanik_completed-my-1st-book-of-2025-and-i-loved-activity-7286633530191749120-Wo01" },
      { title: "GitHub Micromentoring Session Takeaways", link: "https://www.linkedin.com/posts/mrmanik_github-shortlisted-me-for-their-micro-mentoring-activity-7254710107865759744-17ev" },
      { title: "Podcast with The Community Man", link: "https://www.linkedin.com/posts/mrmanik_hosted-a-wonderful-discussion-with-the-community-activity-7248217289353768960-9maZ" },
    ],
  },
];

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

const INITIAL_ARTICLES = 4;

const ContentPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAllArticles, setShowAllArticles] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const category = CATEGORIES[activeTab];
  const visibleArticles = showAllArticles ? category.articles : category.articles.slice(0, INITIAL_ARTICLES);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <div className="pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Articles Section */}
          <SectionHeading>Articles & Threads</SectionHeading>
          <div className="flex flex-wrap justify-center gap-2 mb-10 mt-6">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => { setActiveTab(i); setShowAllArticles(false); }}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeTab === i
                    ? "bg-foreground text-background border-foreground"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <div className="space-y-0">
            {visibleArticles.map((a) => (
              <a
                key={a.link}
                href={a.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5 border-b border-border hover:border-foreground transition-colors text-left"
              >
                <ArticleThumb platform={category.platform} title={a.title} />
                <h3 className="flex-1 min-w-0 font-serif text-base sm:text-lg md:text-xl text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
                  {a.title}
                </h3>
                <span className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
                  <ArrowUpRight size={20} />
                </span>
              </a>
            ))}
          </div>
          {!showAllArticles && category.articles.length > INITIAL_ARTICLES && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllArticles(true)}
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
              >
                See All {category.label}
              </button>
            </div>
          )}
          {showAllArticles && category.articles.length > INITIAL_ARTICLES && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllArticles(false)}
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
              >
                Show Less
              </button>
            </div>
          )}

          {/* Podcasts Section */}
          <div className="mt-20">
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContentPage;
