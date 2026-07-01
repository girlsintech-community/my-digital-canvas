import { useState, useEffect } from "react";

const REACTIONS = [
  { key: "grateful", label: "Grateful", symbol: "♡" },
  { key: "happy", label: "Happy", symbol: "☺" },
  { key: "inspired", label: "Inspired", symbol: "★" },
  { key: "motivated", label: "Motivated", symbol: "▲" },
  { key: "amazed", label: "Amazed", symbol: "◆" },
];

const getCount = (key: string) => {
  try {
    return parseInt(localStorage.getItem(`reaction_${key}`) || "0", 10);
  } catch {
    return 0;
  }
};

const Reactions = () => {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [voted, setVoted] = useState<string | null>(null);

  useEffect(() => {
    const initial: Record<string, number> = {};
    REACTIONS.forEach((r) => {
      initial[r.key] = getCount(r.key);
    });
    setCounts(initial);
    setVoted(localStorage.getItem("reaction_voted"));
  }, []);

  const handleClick = (key: string) => {
    if (voted) return;
    const next = (counts[key] || 0) + 1;
    localStorage.setItem(`reaction_${key}`, String(next));
    localStorage.setItem("reaction_voted", key);
    setCounts((prev) => ({ ...prev, [key]: next }));
    setVoted(key);
  };

  return (
    <div className="border-t border-border bg-accent/30 py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="block text-xs font-sans font-medium tracking-[0.2em] text-muted-foreground uppercase mb-3">
          Reactions
        </span>
        <p className="font-serif text-xl md:text-2xl text-foreground mb-2">How does my space make you feel?</p>
        <p className="text-sm text-muted-foreground mb-6">
          Pick one, you only get a single tap.
        </p>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {REACTIONS.map((r) => (
            <button
              key={r.key}
              onClick={() => handleClick(r.key)}
              disabled={!!voted}
              className={`flex items-center gap-1.5 border rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-all text-sm ${
                voted === r.key
                  ? "border-foreground bg-accent/50"
                  : voted
                  ? "border-border opacity-50 cursor-not-allowed"
                  : "border-border hover:border-foreground/30 hover:bg-accent/50 active:scale-95"
              }`}
            >
              <span className="text-base font-serif text-foreground">{r.symbol}</span>
              <span className="text-xs font-medium text-foreground">{r.label}</span>
              <span className="text-xs font-bold font-serif text-foreground ml-0.5">{counts[r.key] || 0}</span>
            </button>
          ))}
        </div>
        {voted && (
          <p className="text-xs text-muted-foreground mt-3">Thank you for your reaction!</p>
        )}
      </div>
    </div>
  );
};

export default Reactions;
