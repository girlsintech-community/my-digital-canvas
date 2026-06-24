import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SectionHeading from "@/components/sections/SectionHeading";
import { BookOpen, MapPin, Wrench, Heart, Music, Utensils, Gamepad2, Sparkles, Mountain } from "lucide-react";

type DiarySection = {
  title: string;
  icon: any;
  description: string;
  content: React.ReactNode;
};

const SECTIONS: DiarySection[] = [
  {
    title: "Interests",
    icon: Sparkles,
    description: "Things that spark Manik's curiosity.",
    content: (
      <ul className="mt-4 space-y-1">
        <li className="text-sm text-foreground">Travelling to new places</li>
        <li className="text-sm text-foreground">Treks & Hiking</li>
        <li className="text-sm text-foreground">Meeting new people</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    icon: Gamepad2,
    description: "What Manik enjoys doing in his free time.",
    content: (
      <ul className="mt-4 space-y-1">
        <li className="text-sm text-foreground">Reading</li>
        <li className="text-sm text-foreground">Writing</li>
        <li className="text-sm text-foreground">Speaking</li>
        <li className="text-sm text-foreground">Listening to Music</li>
        <li className="text-sm text-foreground">Star Gazing</li>
        <li className="text-sm text-foreground">Walk in Nature</li>
      </ul>
    ),
  },
  {
    title: "Places I Have Been To",
    icon: MapPin,
    description: "States and trails Manik has explored.",
    content: (
      <div className="mt-4 space-y-3">
        <div>
          <p className="text-xs font-semibold text-primary mb-1">States Covered</p>
          <p className="text-sm text-foreground leading-relaxed">
            Punjab, Haryana, Uttarakhand, Uttar Pradesh, Chandigarh, Himachal Pradesh, Jammu & Kashmir, Gujarat, Rajasthan, Delhi
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-primary mb-1">Treks & Trails</p>
          <ul className="space-y-1">
            <li className="text-sm text-foreground">Triund Trek</li>
            <li className="text-sm text-foreground">Karol Tibba Trek</li>
            <li className="text-sm text-foreground">Nature Trail</li>
            <li className="text-sm text-foreground">Sukhna Lake</li>
            <li className="text-sm text-foreground">Vaishno Devi Trek</li>
            <li className="text-sm text-foreground">Bhairo Nath Trek</li>
            <li className="text-sm text-foreground">Gilbert Trail</li>
            <li className="text-sm text-foreground">Jaku Temple Trek</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Favourite Articles",
    icon: BookOpen,
    description: "Articles and reads that left a lasting impression.",
    content: (
      <p className="mt-4 text-xs italic text-muted-foreground/60">Content coming soon...</p>
    ),
  },
  {
    title: "Bookshelf",
    icon: BookOpen,
    description: "Books Manik has read or is currently reading.",
    content: (
      <ul className="mt-4 space-y-1">
        {[
          "Atomic Habits", "The Alchemist", "How to Win Friends & Influence People",
          "The Courage to Be Disliked", "The Leader in You",
          "The 22 Immutable Laws of Marketing", "How to Stop Worrying and Start Living",
          "Ikigai", "Anyone Can Build a Community", "The Monk Who Sold His Ferrari",
          "The Art of Saying No", "Powerful Focus", "Rich Dad Poor Dad",
          "Diary of a Wimpy Kid: The Third Wheel", "Think and Grow Rich",
          "Living Wisdom of the Tao", "Chanakya Neeti",
          "The Almanack of Naval Ravikant", "How to Enjoy Your Life and Your Job",
          "How to Read People Like a Book",
        ].map((b) => (
          <li key={b} className="text-sm text-foreground">{b}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Tools I Use Daily",
    icon: Wrench,
    description: "Software, apps, and tools that power Manik's everyday workflow.",
    content: (
      <ul className="mt-4 space-y-1">
        <li className="text-sm text-foreground">Canva</li>
        <li className="text-sm text-foreground">ChatGPT</li>
        <li className="text-sm text-foreground">Antigravity</li>
        <li className="text-sm text-foreground">Lovable</li>
        <li className="text-sm text-foreground">Google Calendar</li>
        <li className="text-sm text-foreground">Google Keep</li>
      </ul>
    ),
  },
  {
    title: "Happy Moments",
    icon: Heart,
    description: "Memories and milestones that made Manik smile.",
    content: (
      <ul className="mt-4 space-y-2">
        <li className="text-sm text-foreground">
          <strong>Shruti</strong>, my junior in 1st year, wrote a poem for me.
        </li>
        <li className="text-sm text-foreground">
          <strong>Gurvinder</strong>, a 1st year student, made a sketch of me and surprised me by showing it.
        </li>
      </ul>
    ),
  },
  {
    title: "Favourite Food & Beverages",
    icon: Utensils,
    description: "Comfort food, go-to snacks, and favourite drinks.",
    content: (
      <ul className="mt-4 space-y-1">
        <li className="text-sm text-foreground">Home-made food</li>
        <li className="text-sm text-foreground">Water</li>
      </ul>
    ),
  },
  {
    title: "Music & Podcasts I Love",
    icon: Music,
    description: "Playlists, artists, and podcasts on repeat.",
    content: (
      <div className="mt-4 space-y-2">
        <div>
          <p className="text-xs font-semibold text-primary mb-1">Music</p>
          <p className="text-sm text-foreground">Romantic & Indian Retro</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-primary mb-1">Podcasts</p>
          <p className="text-sm text-foreground">Raj Shamani</p>
        </div>
      </div>
    ),
  },
];

const DiaryPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Nav />
    <main className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeading>Manik's Diary</SectionHeading>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A personal corner of the internet — a living document of interests, travels, tools, and the little things that make life meaningful.
        </p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {SECTIONS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="break-inside-avoid border border-border rounded-lg p-6 bg-card hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} className="text-primary" />
                  <h3 className="font-serif text-lg font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                {s.content}
              </div>
            );
          })}
        </div>
      </div>
    </main>
    <Footer />
    <ScrollToTop />
  </div>
);

export default DiaryPage;
