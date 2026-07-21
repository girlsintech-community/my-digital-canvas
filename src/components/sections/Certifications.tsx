const CERTS = [
  {
    category: "Community",
    items: [
      { name: "Community Building & Management by The Community Collective", link: "https://media.licdn.com/dms/image/v2/D562DAQG4DdTpbBNawA/profile-treasury-image-shrink_160_160/B56ZbTYzo0H4Ak-/0/1747303219328?e=1775278800&v=beta&t=BTfPkTS9G2VrtbS5YTbWsTtKb-ynnyXb1K3PMpbBaI8" },
      { name: "Community Automation Course by The Community Collective", link: "" },
      { name: "The Community Led Event Program Playbook", link: "https://www.linkedin.com/in/mrmanik/overlay/Certifications/1660443723/treasury/" },
      { name: "Basic Zero to One: Course on Building Meaningful Communities", link: "https://gumroad.com/d/a7ffd6d02db6a8faf2d314da16bd6204" },
    ],
  },
  {
    category: "Technical",
    items: [
      { name: "Blockchain Fundamentals", link: "https://www.linkedin.com/learning/certificates/55c1ff1c8d60c60f7bfa535d313a439d35ff23afaf5149c07abce14d66e67f61/" },
      { name: "Full Stack Web Development by Apna College", link: "" },
      { name: "Google AI Essentials", link: "https://www.credly.com/badges/ae5ffb08-25d5-4e78-ac7c-542c3965864c/public_url" },
      { name: "Google Professional Cyber Security Certificate", link: "https://www.credly.com/badges/b90a600d-2912-4c89-aa56-9e8e3acd1cb1/public_url" },
      { name: "C and C++ Programming Language", link: "https://drive.google.com/file/d/14pc9MrfJOTqLs5gZDAnveG24UmBvP2yQ/view" },
      { name: "Desktop Publishing", link: "https://drive.google.com/file/d/14kA_vuz7YjvXzkDm0NxfsrHI8077b9sy/view" },
    ],
  },
];

const Certifications = () => (
  <section id="certifications" className="mb-8 text-left">
    <div className="border-b border-foreground/30 pb-1 mb-4">
      <h2 className="font-serif text-lg sm:text-xl font-bold tracking-wider uppercase text-foreground">
        Certifications
      </h2>
    </div>
    <div className="space-y-4">
      {CERTS.map((c) => (
        <div key={c.category}>
          <h3 className="font-serif italic font-semibold text-foreground text-sm mb-1">{c.category}</h3>
          <ul className="list-disc list-outside pl-5 space-y-1">
            {c.items.map((item) => (
              <li key={item.name} className="text-sm text-foreground/90 leading-relaxed">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-muted-foreground transition-colors">
                    {item.name}
                  </a>
                ) : (
                  item.name
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Certifications;
