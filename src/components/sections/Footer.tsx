import { useState } from "react";
import { MapPin, Heart } from "lucide-react";
import { AdminModal } from "@/components/admin/AdminModal";

const Footer = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-xs text-muted-foreground text-center">
        <div className="flex items-center gap-1.5">
          <MapPin size={14} />
          <span>Currently based in <strong className="text-foreground">Chandigarh, India</strong></span>
        </div>
        <p>© {new Date().getFullYear()} Manik. All rights reserved.</p>
        <p className="font-serif italic flex items-center gap-1">
          Built with{" "}
          <button
            onClick={() => setIsAdminOpen(true)}
            className="text-rose-500 hover:scale-125 transition-transform duration-200 focus:outline-none p-0.5 inline-flex items-center"
            title="Admin Panel"
            aria-label="Open admin panel"
          >
            <Heart size={14} className="fill-rose-500 hover:fill-rose-600" />
          </button>
        </p>
      </div>

      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </footer>
  );
};

export default Footer;
