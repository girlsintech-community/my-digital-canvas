import { useEffect, useState } from "react";
import { Accessibility, X, Type, Contrast, Globe, RotateCcw } from "lucide-react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

// Languages supported by Google Translate (free widget). Selecting a subset of the most common ones.
const LANGUAGES: { code: string; label: string }[] = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
  { code: "te", label: "తెలుగు (Telugu)" },
  { code: "mr", label: "मराठी (Marathi)" },
  { code: "gu", label: "ગુજરાતી (Gujarati)" },
  { code: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { code: "ml", label: "മലയാളം (Malayalam)" },
  { code: "pa", label: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "ur", label: "اردو (Urdu)" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "it", label: "Italiano" },
  { code: "pt", label: "Português" },
  { code: "nl", label: "Nederlands" },
  { code: "ru", label: "Русский" },
  { code: "uk", label: "Українська" },
  { code: "pl", label: "Polski" },
  { code: "tr", label: "Türkçe" },
  { code: "ar", label: "العربية" },
  { code: "fa", label: "فارسی" },
  { code: "he", label: "עברית" },
  { code: "zh-CN", label: "中文 (Simplified)" },
  { code: "zh-TW", label: "中文 (Traditional)" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "th", label: "ไทย" },
  { code: "id", label: "Bahasa Indonesia" },
  { code: "ms", label: "Bahasa Melayu" },
  { code: "fil", label: "Filipino" },
  { code: "sw", label: "Kiswahili" },
  { code: "el", label: "Ελληνικά" },
  { code: "cs", label: "Čeština" },
  { code: "sv", label: "Svenska" },
  { code: "no", label: "Norsk" },
  { code: "da", label: "Dansk" },
  { code: "fi", label: "Suomi" },
  { code: "ro", label: "Română" },
  { code: "hu", label: "Magyar" },
];

const FONT_KEY = "a11y_font_scale";
const CONTRAST_KEY = "a11y_high_contrast";

const setGoogleTranslateCookie = (lang: string) => {
  const value = lang === "en" ? "" : `/en/${lang}`;
  const domain = window.location.hostname;
  // Set on current host and on parent (.example.com)
  document.cookie = `googtrans=${value};path=/`;
  document.cookie = `googtrans=${value};path=/;domain=${domain}`;
  const parts = domain.split(".");
  if (parts.length > 1) {
    const parent = "." + parts.slice(-2).join(".");
    document.cookie = `googtrans=${value};path=/;domain=${parent}`;
  }
};

interface AccessibilityWidgetProps {
  isMobile?: boolean;
}

const AccessibilityWidget = ({ isMobile = false }: AccessibilityWidgetProps) => {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState<number>(() => {
    const v = localStorage.getItem(FONT_KEY);
    return v ? parseFloat(v) : 1;
  });
  const [highContrast, setHighContrast] = useState<boolean>(() => {
    return localStorage.getItem(CONTRAST_KEY) === "1";
  });
  const [lang, setLang] = useState<string>(() => {
    const m = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    return m ? m[1] : "en";
  });

  // Apply font scale
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
    localStorage.setItem(FONT_KEY, String(fontScale));
  }, [fontScale]);

  // Apply contrast
  useEffect(() => {
    document.documentElement.classList.toggle("a11y-contrast", highContrast);
    localStorage.setItem(CONTRAST_KEY, highContrast ? "1" : "0");
  }, [highContrast]);

  // Load Google Translate script once
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false,
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      } catch (e) {
        // ignore
      }
    };
    const s = document.createElement("script");
    s.id = "google-translate-script";
    s.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  const changeLanguage = (newLang: string) => {
    setLang(newLang);
    setGoogleTranslateCookie(newLang);
    // Reload to apply translation cleanly
    window.location.reload();
  };

  const reset = () => {
    setFontScale(1);
    setHighContrast(false);
    if (lang !== "en") changeLanguage("en");
  };

  return (
    <div className="relative inline-flex items-center">
      {/* Hidden Google Translate mount */}
      <div id="google_translate_element" style={{ display: "none" }} />

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Accessibility options"
        aria-expanded={open}
        className="text-muted-foreground hover:text-foreground transition-colors p-1 flex items-center focus:outline-none"
        title="Accessibility options"
      >
        {open ? <X size={isMobile ? 20 : 18} /> : <Accessibility size={isMobile ? 20 : 18} />}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Accessibility panel"
          className="notranslate fixed top-16 right-4 sm:right-[15%] z-[100] w-[20rem] max-w-[calc(100vw-2rem)] max-h-[75vh] overflow-y-auto bg-background/95 backdrop-blur-md border border-border shadow-2xl rounded-2xl p-5 text-foreground"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-lg font-medium">Accessibility</h2>
            <button
              onClick={reset}
              aria-label="Reset accessibility settings"
              className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              <RotateCcw size={12} /> Reset
            </button>
          </div>

          {/* Font size */}
          <div className="mb-5">
            <div className="flex items-center gap-2 text-sm font-medium mb-2">
              <Type size={14} /> Text size
            </div>
            <div className="flex gap-2">
              {[
                { label: "A", val: 0.9 },
                { label: "A", val: 1 },
                { label: "A", val: 1.15 },
                { label: "A", val: 1.3 },
              ].map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setFontScale(opt.val)}
                  className={`flex-1 py-2 border rounded text-foreground transition-colors ${
                    fontScale === opt.val
                      ? "border-foreground bg-foreground/10"
                      : "border-border hover:border-foreground"
                  }`}
                  style={{ fontSize: `${opt.val}rem` }}
                  aria-label={`Text size ${i + 1}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contrast */}
          <div className="mb-5">
            <button
              onClick={() => setHighContrast((c) => !c)}
              className={`w-full flex items-center justify-between text-sm py-2 px-3 border rounded transition-colors ${
                highContrast ? "border-foreground bg-foreground/10" : "border-border hover:border-foreground"
              }`}
            >
              <span className="flex items-center gap-2">
                <Contrast size={14} /> High contrast
              </span>
              <span className="text-xs text-muted-foreground">{highContrast ? "On" : "Off"}</span>
            </button>
          </div>

          {/* Language */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Globe size={14} /> Language
            </label>
            <select
              value={lang}
              onChange={(e) => changeLanguage(e.target.value)}
              className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-foreground"
            >
              {LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.label}
                </option>
              ))}
            </select>
            <p className="text-[11px] text-muted-foreground mt-2">
              Translation powered by Google Translate.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
