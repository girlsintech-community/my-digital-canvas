import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Content", href: "/content" },
  { label: "Community", href: "/community" },
  { label: "Wall of Love", href: "/wall-of-love" },
  { label: "Diary", href: "/diary" },
  { label: "Resume", href: "/resume" },
  { label: "Connect", href: "/connect" },
];

const TIMEZONES = [
  { label: "IST", zone: "Asia/Kolkata" },
  { label: "UTC", zone: "UTC" },
  { label: "NYC", zone: "America/New_York" },
  { label: "LA", zone: "America/Los_Angeles" },
  { label: "LON", zone: "Europe/London" },
  { label: "BER", zone: "Europe/Berlin" },
  { label: "DXB", zone: "Asia/Dubai" },
  { label: "SGP", zone: "Asia/Singapore" },
  { label: "TYO", zone: "Asia/Tokyo" },
  { label: "SYD", zone: "Australia/Sydney" },
];

const useZoneTime = (zone: string) => {
  const [time, setTime] = useState("");
  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          timeZone: zone,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [zone]);
  return time;
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return true;
  });
  const location = useLocation();
  const navigate = useNavigate();
  const [zone, setZone] = useState<string>(() => localStorage.getItem("tz") || "Asia/Kolkata");
  const currentTz = TIMEZONES.find((t) => t.zone === zone) || TIMEZONES[0];
  const currentTime = useZoneTime(zone);
  useEffect(() => { localStorage.setItem("tz", zone); }, [zone]);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      setOpen(false);
    } else if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const el = document.querySelector(href);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="hidden md:flex items-center gap-3">
          <span className="text-xs font-mono text-muted-foreground tracking-wide tabular-nums">
            {currentTime}
          </span>
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            aria-label="Change timezone"
            className="text-xs font-mono bg-transparent text-muted-foreground hover:text-foreground border border-border rounded px-1.5 py-0.5 cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring"
          >
            {TIMEZONES.map((t) => (
              <option key={t.zone} value={t.zone} className="bg-background text-foreground">
                {t.label}
              </option>
            ))}
          </select>
          <VisitorCounter />
        </div>
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleClick(e, l.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark(!dark)}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden w-full justify-between">
          <div className="flex items-center gap-3">
            <VisitorCounter />
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDark(!dark)}
              className="text-foreground"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="text-foreground"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 pb-4 pt-2 space-y-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                handleClick(e, l.href);
                setOpen(false);
              }}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
