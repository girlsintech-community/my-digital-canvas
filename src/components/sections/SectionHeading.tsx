interface SectionHeadingProps {
  eyebrow?: string;
  children: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}

const SectionHeading = ({
  eyebrow,
  children,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`${alignClass} max-w-2xl ${align === "center" ? "" : ""} mb-12 md:mb-14 ${className}`}>
      {eyebrow && (
        <span className="block text-xs font-sans font-medium tracking-[0.2em] text-muted-foreground uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground tracking-tight leading-[1.1]">
        {children}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
