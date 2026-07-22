import { Home, ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const WORK_SUB_LINKS = [
  { label: "Content", href: "/content" },
  { label: "Community", href: "/community" },
  { label: "Impact", href: "/impact" },
  { label: "Testimonials", href: "/wall-of-love" },
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
  const [workDropdownOpen, setWorkDropdownOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
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
    if (href === "/" || href === "") {
      e.preventDefault();
      setOpen(false);
      setWorkDropdownOpen(false);
      if (location.pathname !== "/") {
        navigate("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
      setOpen(false);
      setWorkDropdownOpen(false);
    } else if (href.startsWith("#")) {
      e.preventDefault();
      setOpen(false);
      setWorkDropdownOpen(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <nav className="max-w-3xl mx-auto pointer-events-auto bg-background/90 backdrop-blur-md border border-border rounded-2xl shadow-sm transition-all duration-200">
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">
          {/* Left items: Timezone & Visitor Counter */}
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

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="/"
              onClick={(e) => handleClick(e, "/")}
              className="text-muted-foreground hover:text-foreground transition-colors p-1 flex items-center"
              aria-label="Home"
              title="Home"
            >
              <Home size={17} />
            </a>

            <a
              href="#about"
              onClick={(e) => handleClick(e, "#about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>

            {/* Work Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setWorkDropdownOpen(true)}
              onMouseLeave={() => setWorkDropdownOpen(false)}
            >
              <button
                onClick={() => setWorkDropdownOpen(!workDropdownOpen)}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors py-1 focus:outline-none"
              >
                Work
                <ChevronDown size={14} className={`transition-transform duration-200 ${workDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {workDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-36 z-50">
                  <div className="bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-lg p-1.5 flex flex-col gap-1">
                    {WORK_SUB_LINKS.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        onClick={(e) => handleClick(e, sub.href)}
                        className="text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 rounded-lg px-2.5 py-1.5 transition-colors"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/diary"
              onClick={(e) => handleClick(e, "/diary")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Diary
            </a>

            <a
              href="/resume"
              onClick={(e) => handleClick(e, "/resume")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Resume
            </a>

            <a
              href="/connect"
              onClick={(e) => handleClick(e, "/connect")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Connect
            </a>

            <button
              onClick={() => setDark(!dark)}
              className="text-muted-foreground hover:text-foreground transition-colors ml-1"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <AccessibilityWidget />
          </div>

          {/* Mobile Header Bar */}
          <div className="flex items-center gap-3 md:hidden w-full justify-between">
            <div className="flex items-center gap-3">
              <a
                href="/"
                onClick={(e) => handleClick(e, "/")}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Home"
              >
                <Home size={18} />
              </a>
              <VisitorCounter />
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDark(!dark)}
                className="text-foreground"
                aria-label="Toggle theme"
              >
                {dark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <AccessibilityWidget isMobile />
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

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden border-t border-border bg-background/95 rounded-b-2xl px-5 pb-4 pt-3 space-y-2.5">
            <a
              href="/"
              onClick={(e) => handleClick(e, "/")}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5"
            >
              <Home size={16} />
              <span>Home</span>
            </a>

            <a
              href="#about"
              onClick={(e) => handleClick(e, "#about")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5"
            >
              About
            </a>

            {/* Mobile Work Accordion */}
            <div>
              <button
                onClick={() => setMobileWorkOpen(!mobileWorkOpen)}
                className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground py-0.5"
              >
                <span>Work</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileWorkOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileWorkOpen && (
                <div className="pl-3 border-l border-border mt-1.5 space-y-2 py-1">
                  {WORK_SUB_LINKS.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      onClick={(e) => handleClick(e, sub.href)}
                      className="block text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/diary"
              onClick={(e) => handleClick(e, "/diary")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5"
            >
              Diary
            </a>

            <a
              href="/resume"
              onClick={(e) => handleClick(e, "/resume")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5"
            >
              Resume
            </a>

            <a
              href="/connect"
              onClick={(e) => handleClick(e, "/connect")}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-0.5"
            >
              Connect
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
