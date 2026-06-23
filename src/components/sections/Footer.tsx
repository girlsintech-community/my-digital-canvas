import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-xs text-muted-foreground text-center">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} />
          <span>Currently based in <strong className="text-foreground">Chandigarh, India</strong></span>
        </div>
        <p>© {new Date().getFullYear()} Manik. All rights reserved.</p>
        <p className="font-serif italic">
          Built with{" "}
          <button
            onClick={() => nav("/admin/login")}
            aria-label="Admin"
            className="hover:scale-125 transition-transform align-middle"
          >
            ❤️
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
