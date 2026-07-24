import { useSiteContent } from "@/hooks/useSiteContent";
import CompanyLogo from "@/components/CompanyLogo";

const Certifications = () => {
  const content = useSiteContent();
  const certCategories = content.certifications || [];

  return (
    <section id="certifications" className="mb-8 text-left">
      <div className="border-b border-foreground/30 pb-1 mb-4">
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
          Certifications
        </h2>
      </div>
      <div className="space-y-4">
        {certCategories.map((c) => (
          <div key={c.id || c.category}>
            <h3 className="font-serif italic font-semibold text-foreground text-sm mb-1">{c.category}</h3>
            <ul className="list-disc list-outside pl-5 space-y-1">
              {c.items.map((item) => (
                <li key={item.name} className="text-sm text-foreground/90 leading-relaxed">
                  <span className="inline-flex items-center gap-1.5">
                    <CompanyLogo name={item.name} size={16} />
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
                        {item.name}
                      </a>
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
