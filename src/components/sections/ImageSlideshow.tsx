const ALL_COMMUNITY_IMAGES = Object.values(
  import.meta.glob("@/assets/community/*.webp", { eager: true, import: "default" })
) as string[];

const thirdLength = Math.ceil(ALL_COMMUNITY_IMAGES.length / 3);
const SLIDESHOW_ROW1 = ALL_COMMUNITY_IMAGES.slice(0, thirdLength);
const SLIDESHOW_ROW2 = ALL_COMMUNITY_IMAGES.slice(thirdLength, thirdLength * 2);
const SLIDESHOW_ROW3 = ALL_COMMUNITY_IMAGES.slice(thirdLength * 2);

const ImageSlideshow = () => {
  return (
    <section className="py-12 border-t border-border bg-background px-6">
      <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl">
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .slideshow-row-left { animation: scroll-left 45s linear infinite; }
          .slideshow-row-right { animation: scroll-right 45s linear infinite; }
          .slideshow-row-left:hover, .slideshow-row-right:hover { animation-play-state: paused; }
        `}</style>
        {[SLIDESHOW_ROW1, SLIDESHOW_ROW2, SLIDESHOW_ROW3].map((row, rowIdx) => (
          <div key={rowIdx} className="overflow-hidden mb-3 last:mb-0">
            <div className={`flex gap-3 w-max ${rowIdx % 2 === 0 ? "slideshow-row-left" : "slideshow-row-right"}`}>
              {[...row, ...row].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="Community moment"
                  className="h-28 sm:h-36 w-auto rounded-xl object-cover flex-shrink-0 border border-border/50 shadow-xs"
                  loading="eager"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageSlideshow;
