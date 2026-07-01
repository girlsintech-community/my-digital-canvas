import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="py-20 md:py-28 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto">
      <SectionHeading
        eyebrow="About"
        description="A short story of who I am, what I've built, and why I keep showing up for people."
      >
        I bring growth <span className="italic">wherever I go.</span>
      </SectionHeading>
      <div className="space-y-6 text-muted-foreground leading-relaxed mt-8 text-base md:text-lg text-left md:text-center">
        <p>
          Hey, I'm <strong className="text-foreground">Manik</strong> — a <strong className="text-foreground">builder</strong>, <strong className="text-foreground">community architect</strong>, and <strong className="text-foreground">growth catalyst</strong> based in <strong className="text-foreground">Chandigarh, India</strong>. I founded{" "}
          <a href="https://www.linkedin.com/company/girlsleadingtech/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors font-semibold">Girls Leading Tech</a>, a <strong className="text-foreground">non-profit community of 3,300+ women in tech</strong> across 900+ colleges and 25+ Indian states — hosting <strong className="text-foreground">55+ mentorship sessions</strong>, hackathons like{" "}
          <strong className="text-foreground">HackAura</strong> (1,700+ hackers) and <strong className="text-foreground">Global AI Buildathon</strong> (700+ hackers), and featuring speakers from{" "}
          <strong className="text-foreground">Google, Amazon, Microsoft, Uber, Salesforce</strong>, and more.
        </p>
        <p>
          As a <strong className="text-foreground">Business Development Manager</strong> at{" "}
          <a href="https://www.blockon.biz/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors font-semibold">BlockOn Ventures</a>, I managed partnerships and on-ground operations for <strong className="text-foreground">8 exclusive events</strong> during ETH Global India Week. I've also served as{" "}
          <strong className="text-foreground">Community Manager</strong> at{" "}
          <a href="https://www.propeers.in/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors font-semibold">ProPeers</a> and the{" "}
          <a href="https://acssociety.com/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors font-semibold">Association of Cyber Security</a>.
        </p>
        <p>
          Recognised as the <strong className="text-foreground">Youngest CMX Director Worldwide</strong> by{" "}
          <a href="https://www.cmxhub.com/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors font-semibold">CMX</a>, a <strong className="text-foreground">STEM Educator Award</strong> winner, and a{" "}
          <a href="https://www.mckinsey.com/" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors font-semibold">McKinsey Forward</a> Fellow — I bring a relentless drive to create <strong className="text-foreground">meaningful impact</strong> through community, content, and collaboration. From organising <strong className="text-foreground">grassroots meetups</strong> to hosting my own <a href="/content" className="text-foreground underline underline-offset-4 hover:text-primary transition-colors font-semibold">podcast</a>, everything I do comes from one place: <strong className="text-foreground">genuine care for people</strong>.
        </p>
      </div>
    </div>
  </section>
);

export default About;
