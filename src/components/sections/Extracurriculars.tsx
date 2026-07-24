import { useSiteContent } from "@/hooks/useSiteContent";
import CompanyLogo from "@/components/CompanyLogo";

const Extracurriculars = () => {
  const content = useSiteContent();
  const extra = content.extracurriculars || { achievements: [], leadershipRoles: [], hackathonsAttended: [] };

  return (
    <section id="extracurriculars" className="mb-8 text-left">
      <div className="border-b border-foreground/30 pb-1 mb-4">
        <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
          Extracurriculars & Leadership
        </h2>
      </div>

      <div className="space-y-4">
        {extra.achievements && extra.achievements.length > 0 && (
          <div>
            <h3 className="font-serif italic font-semibold text-foreground text-sm mb-1">Achievements</h3>
            <ul className="list-disc list-outside pl-5 space-y-1">
              {extra.achievements.map((a, i) => (
                <li key={i} className="text-sm text-foreground/90 leading-relaxed">
                  <span className="inline-flex items-center gap-1.5">
                    <CompanyLogo name={a} size={16} />
                    <span>{a}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {extra.leadershipRoles && extra.leadershipRoles.length > 0 && (
          <div>
            <h3 className="font-serif italic font-semibold text-foreground text-sm mb-1">Leadership Roles</h3>
            <ul className="list-disc list-outside pl-5 space-y-1">
              {extra.leadershipRoles.map((r, i) => (
                <li key={i} className="text-sm text-foreground/90 leading-relaxed">
                  <span className="inline-flex items-center gap-1.5">
                    <CompanyLogo name={r} size={16} />
                    <span>{r}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {extra.hackathonsAttended && extra.hackathonsAttended.length > 0 && (
          <div>
            <h3 className="font-serif italic font-semibold text-foreground text-sm mb-1">Hackathons Attended</h3>
            <ul className="list-disc list-outside pl-5 space-y-1">
              {extra.hackathonsAttended.map((h, i) => (
                <li key={i} className="text-sm text-foreground/90 leading-relaxed">{h}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Extracurriculars;
