type Platform = "Medium" | "Hashnode" | "LinkedIn" | "X (Twitter)" | string;

const STYLES: Record<string, { bg: string; fg: string; label: string; font: string }> = {
  Medium: { bg: "bg-black", fg: "text-white", label: "M", font: "font-serif" },
  Hashnode: { bg: "bg-[#2962FF]", fg: "text-white", label: "H", font: "font-sans" },
  LinkedIn: { bg: "bg-[#0A66C2]", fg: "text-white", label: "in", font: "font-sans font-bold" },
  "X (Twitter)": { bg: "bg-black", fg: "text-white", label: "𝕏", font: "font-sans" },
};

const ArticleThumb = ({ platform, title }: { platform: Platform; title: string }) => {
  const s = STYLES[platform] || { bg: "bg-muted", fg: "text-foreground", label: "·", font: "font-serif" };
  return (
    <div
      aria-hidden="true"
      className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-md border border-border flex items-center justify-center text-2xl sm:text-3xl ${s.bg} ${s.fg} ${s.font}`}
      title={title}
    >
      {s.label}
    </div>
  );
};

export default ArticleThumb;
