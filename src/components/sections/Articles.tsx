import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { useSiteContent } from "@/hooks/useSiteContent";

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

const INITIAL_COUNT = 4;

const Articles = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const category = CATEGORIES[activeTab];
  const visible = showAll ? category.articles : category.articles.slice(0, INITIAL_COUNT);

  return (
    <section id="articles" className="py-20 md:py-28 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow="Writing"
          description="Long-form notes, essays, and threads on building in public, community, and the journey so far."
        >
          Articles & Threads
        </SectionHeading>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => { setActiveTab(i); setShowAll(false); }}
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

        {/* Articles list */}
        <div className="space-y-0">
          {visible.map((a) => (
            <a
              key={a.link}
              href={a.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-5 border-b border-border hover:border-foreground transition-colors text-left"
            >
              <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-muted-foreground transition-colors leading-snug">
                {a.title}
              </h3>
              <span className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors">
                <ArrowUpRight size={20} />
              </span>
            </a>
          ))}
        </div>

        {!showAll && category.articles.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-8 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            See All {category.label}
          </button>
        )}

        {showAll && category.articles.length > INITIAL_COUNT && (
          <button
            onClick={() => setShowAll(false)}
            className="mt-8 inline-flex items-center px-6 py-3 rounded-full text-sm font-medium border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Articles;
