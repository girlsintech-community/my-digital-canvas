import { useState } from "react";
import { ArrowUpRight, Heart, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { AdminModal } from "@/components/admin/AdminModal";

const Footer = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <footer className="border-t border-border px-6 sm:px-10 pt-16 pb-8">
      <div className="max-w-3xl mx-auto">

        <div className="border-y border-border py-12 sm:py-16 text-center">
          <p className="no-justify text-xs font-semibold uppercase text-muted-foreground">Have an idea worth building?</p>
          <h2 className="mt-4 text-3xl sm:text-5xl font-semibold text-foreground">Let’s create something meaningful.</h2>
          <p className="no-justify mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted-foreground">
            I’m always open to thoughtful conversations around communities, partnerships, content, and ambitious ideas.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/connect" className="inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80">
              Get in touch <ArrowUpRight size={16} />
            </Link>
            <a href="mailto:manik.officialwork@gmail.com" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted">
              <Mail size={16} /> Email me
            </a>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span>Chandigarh, India</span>
          </div>
          <p className="no-justify">© {new Date().getFullYear()} Manik. All rights reserved.</p>
          <p className="no-justify flex items-center gap-1">
            Built with
          <button
            onClick={() => setIsAdminOpen(true)}
            className="text-foreground hover:scale-125 transition-transform duration-200 focus:outline-none p-0.5 inline-flex items-center"
            title="Admin Panel"
            aria-label="Open admin panel"
          >
            <Heart size={14} className="fill-current" />
          </button>
          </p>
        </div>
      </div>

      <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
    </footer>
  );
};

export default Footer;
