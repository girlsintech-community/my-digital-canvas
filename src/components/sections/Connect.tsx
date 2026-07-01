import { Mail, Youtube, Instagram, Github, Linkedin, Twitter, MessageCircle, Send, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const SOCIALS = [
  { icon: Youtube, href: "https://www.youtube.com/@themanikdiaries", label: "YouTube" },
  { icon: Instagram, href: "https://instagram.com/manik.3000", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/themanikdiaries", label: "X" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mrmanik/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/manik-007", label: "GitHub" },
  { icon: MessageCircle, href: "https://discord.com/users/manik2619", label: "Discord" },
  { icon: Send, href: "https://t.me/manik_explorer", label: "Telegram" },
  { icon: Calendar, href: "https://calendly.com/manik_/discussion", label: "Calendly" },
  { icon: () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 2.943 0 3.357c0 .414.103 3.506.535 4.01C1.04 7.923 1.683 8.6 2.691 8.6h18.618c1.008 0 1.651-.677 2.156-1.233.432-.504.535-3.596.535-4.01 0-.414-.139-1.449-.902-1.792-.659-.299-1.664-.621-4.3 1.24C16.046 4.747 13.087 8.686 12 10.8zM12 13.2c-1.087 2.114-4.046 6.053-6.798 7.995-2.636 1.861-3.641 1.539-4.3 1.24C.139 22.092 0 21.057 0 20.643c0-.414.103-3.506.535-4.01C1.04 16.077 1.683 15.4 2.691 15.4h18.618c1.008 0 1.651.677 2.156 1.233.432.504.535 3.596.535 4.01 0 .414-.139 1.449-.902 1.792-.659.299-1.664.621-4.3-1.24C16.046 19.253 13.087 15.314 12 13.2z"/></svg>, href: "https://bsky.app/profile/themanikdiaries.bsky.social", label: "Bluesky" },
  { icon: () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>, href: "https://medium.com/@manik23265", label: "Medium" },
  { icon: () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 00-7.962 0l-6.37 6.37a5.63 5.63 0 000 7.962l6.37 6.37a5.63 5.63 0 007.962 0l6.37-6.37a5.63 5.63 0 000-7.962zM12 15.953a3.953 3.953 0 110-7.906 3.953 3.953 0 010 7.906z"/></svg>, href: "https://manik007.hashnode.dev/", label: "Hashnode" },
  { icon: () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.95 14.675c-.288.775-.913 1.35-1.688 1.575a9.3 9.3 0 01-2.362.3c-.875 0-1.738-.1-2.55-.3-.5-.125-.963-.35-1.375-.65-.1-.075-.175-.175-.225-.288-.05-.112-.062-.237-.025-.35.037-.112.1-.212.2-.275a.48.48 0 01.35-.075c.112.025.212.087.287.175.325.25.7.425 1.1.525.7.175 1.425.25 2.163.238.7.012 1.4-.075 2.075-.238.412-.112.775-.35 1.05-.675.25-.3.388-.675.375-1.062.012-.4-.125-.787-.388-1.088-.275-.3-.637-.512-1.037-.612-.7-.175-1.425-.275-2.15-.3-.763-.025-1.525-.125-2.263-.3-.475-.125-.912-.362-1.275-.688-.35-.325-.6-.737-.712-1.2-.113-.462-.088-.95.075-1.4.162-.45.463-.837.862-1.112.4-.275.863-.438 1.35-.475.488-.037.975.013 1.438.15.5.137.975.362 1.4.663.1.075.175.175.225.288.05.112.062.237.025.35a.48.48 0 01-.2.275.48.48 0 01-.35.075.48.48 0 01-.287-.175c-.325-.237-.7-.412-1.1-.512-.45-.1-.912-.15-1.375-.137-.45-.013-.9.05-1.325.187-.275.1-.5.275-.65.512-.15.237-.2.525-.15.8.05.275.2.525.413.712.225.2.5.337.8.4.663.15 1.338.238 2.013.263.763.025 1.525.125 2.263.3.475.125.912.363 1.275.688.35.325.6.738.712 1.2.113.463.088.95-.075 1.4z"/></svg>, href: "https://peerlist.io/manik", label: "Peerlist" },
];

const Connect = () => (
  <section id="connect" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center">
      <SectionHeading
        eyebrow="Get in touch"
        description="Got an idea, a collaboration, or just want to say hello? My inbox is always open."
      >
        Let's Connect
      </SectionHeading>
      <a
        href="mailto:manik.officialwork@gmail.com"
        className="inline-flex items-center gap-2 border border-foreground text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
      >

        <Mail size={16} />
        manik.officialwork@gmail.com
      </a>
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-10 px-2">
        {SOCIALS.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={s.label}
          >
            <s.icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Connect;
