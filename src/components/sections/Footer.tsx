import { MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-xs text-muted-foreground text-center">
      <div className="flex items-center gap-1.5">
        <MapPin size={14} />
        <span>Currently based in <strong className="text-foreground">Chandigarh, India</strong></span>
      </div>
      <p>© {new Date().getFullYear()} Manik. All rights reserved.</p>
      <p className="font-serif italic">Built with ❤️</p>
    </div>
  </footer>
);

export default Footer;
