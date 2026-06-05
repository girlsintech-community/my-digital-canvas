import { useState, useEffect } from "react";
import { Youtube, Instagram, Github, Linkedin, Twitter, MessageCircle, Send, Calendar } from "lucide-react";
import profileImg from "@/assets/profile-bw.jpg";

const SOCIALS = [
  { icon: Youtube, href: "https://www.youtube.com/@themanikdiaries", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/manik.3000", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/themanikdiaries", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mrmanik/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/manik-007", label: "GitHub" },
  { icon: MessageCircle, href: "https://discord.com/users/manik2619", label: "Discord" },
  { icon: Send, href: "https://t.me/manik_explorer", label: "Telegram" },
  { icon: Calendar, href: "https://calendly.com/manik_/discussion", label: "Calendly" },
  { icon: () => <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 2.943 0 3.357c0 .414.103 3.506.535 4.01C1.04 7.923 1.683 8.6 2.691 8.6h18.618c1.008 0 1.651-.677 2.156-1.233.432-.504.535-3.596.535-4.01 0-.414-.139-1.449-.902-1.792-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8zM12 13.2c-1.087 2.114-4.046 6.053-6.798 7.995-2.636 1.861-3.641 1.539-4.3 1.24C.139 22.092 0 21.057 0 20.643c0-.414.103-3.506.535-4.01C1.04 16.077 1.683 15.4 2.691 15.4h18.618c1.008 0 1.651.677 2.156 1.233.432.504.535 3.596.535 4.01 0 .414-.139 1.449-.902 1.792-.659.299-1.664.621-4.3-1.24C16.046 19.253 13.087 15.314 12 13.2z"/></svg>, href: "https://bsky.app/profile/themanikdiaries.bsky.social", label: "Bluesky" },
  { icon: () => <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.95 14.675c-.288.775-.913 1.35-1.688 1.575a9.3 9.3 0 01-2.362.3c-.875 0-1.738-.1-2.55-.3-.5-.125-.963-.35-1.375-.65-.1-.075-.175-.175-.225-.288-.05-.112-.062-.237-.025-.35.037-.112.1-.212.2-.275a.48.48 0 01.35-.075c.112.025.212.087.287.175.325.25.7.425 1.1.525.7.175 1.425.25 2.163.238.7.012 1.4-.075 2.075-.238.412-.112.775-.35 1.05-.675.25-.3.388-.675.375-1.062.012-.4-.125-.787-.388-1.088-.275-.3-.637-.512-1.037-.612-.7-.175-1.425-.275-2.15-.3-.763-.025-1.525-.125-2.263-.3-.475-.125-.912-.362-1.275-.688-.35-.325-.6-.737-.712-1.2-.113-.462-.088-.95.075-1.4.162-.45.463-.837.862-1.112.4-.275.863-.438 1.35-.475.488-.037.975.013 1.438.15.5.137.975.362 1.4.663.1.075.175.175.225.288.05.112.062.237.025.35a.48.48 0 01-.2.275.48.48 0 01-.35.075.48.48 0 01-.287-.175c-.325-.237-.7-.412-1.1-.512-.45-.1-.912-.15-1.375-.137-.45-.013-.9.05-1.325.187-.275.1-.5.275-.65.512-.15.237-.2.525-.15.8.05.275.2.525.413.712.225.2.5.337.8.4.663.15 1.338.238 2.013.263.763.025 1.525.125 2.263.3.475.125.912.363 1.275.688.35.325.6.738.712 1.2.113.463.088.95-.075 1.4z"/></svg>, href: "https://peerlist.io/manik", label: "Peerlist" },
  { icon: () => <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>, href: "https://medium.com/@manik23265", label: "Medium" },
  { icon: () => <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 00-7.962 0l-6.37 6.37a5.63 5.63 0 000 7.962l6.37 6.37a5.63 5.63 0 007.962 0l6.37-6.37a5.63 5.63 0 000-7.962zM12 15.953a3.953 3.953 0 110-7.906 3.953 3.953 0 010 7.906z"/></svg>, href: "https://manik007.hashnode.dev/", label: "Hashnode" },
];

const ROLES = ["Builder", "Creator", "Educator", "Podcaster", "Public Speaker", "Leader", "Writer", "Traveller", "Engineer", "Mentor", "Changemaker"];

const MILESTONES = [
  "Started YouTube at the age of 14.",
  "Scaled a YouTube channel from 0 to 148K at the age of 16.",
  "Built a non-profit community of 4K girls in tech to empower & support them at the age of 19.",
  "Met 5,000+ people at the age of 21.",
  "Currently learning AI & upskilling myself to get a good job at Bangalore.",
];

const useTypingAnimation = (words: string[], typingSpeed = 100, deletingSpeed = 60, pauseDuration = 1500) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentWord.substring(0, displayText.length - 1)
            : currentWord.substring(0, displayText.length + 1)
        );
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayText;
};

const Hero = () => {
  const typedRole = useTypingAnimation(ROLES);

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <p className="font-sans text-sm sm:text-base tracking-widest text-muted-foreground uppercase mb-2">
            Hi, I am
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Manik
          </h1>
          <p className="font-serif text-lg sm:text-xl md:text-2xl italic text-muted-foreground mb-6 sm:mb-8">
            "I build for impact and bring people together."
          </p>
          <div className="h-8 sm:h-10 flex items-center justify-center mb-8 sm:mb-10">
            <span className="font-sans text-base sm:text-lg font-medium tracking-widest text-foreground">
              I am a <span className="text-primary">{typedRole}</span>
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={s.label}
              >
                <s.icon size={18} className="sm:w-6 sm:h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="px-4 sm:px-6 pb-10 sm:pb-16">
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-2">
            {MILESTONES.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                <span className="text-foreground mt-1.5 shrink-0">&#8226;</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Photo */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto flex justify-center">
          <div className="w-[18rem] h-[18rem] sm:w-[22rem] sm:h-[22rem] md:w-[36rem] md:h-[36rem] overflow-hidden border border-border shadow-lg">
            <img src={profileImg} alt="Manik" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
